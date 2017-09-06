import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Profissional } from './shared/profissional.model'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class ProfissionalService {


    constructor(private http : Http){}
  
    // public getProfissionais(): Promise<Profissional[]> {

    //     // let headers = new Headers();
    //     // headers.append('Access-Control-Allow-Origin', '*')
    //     // headers.append('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS')
    //     // let options = new RequestOptions({ headers: headers });        

    //     //Efetuar uma requisição http
    //     //http://indikko.herokuapp.com/api/v1/workers/?format=json&page=1
    //     //https://cors-anywhere.herokuapp.com/indikko.herokuapp.com/api/v1/workers/?format=json&page=1
    //     return this.http.get('https://cors-anywhere.herokuapp.com/indikko.herokuapp.com/api/v1/workers/')
    //         .toPromise()
    //         .then((resposta: any) => resposta.json().results as Profissional[])
    // }


    public getProfissionais(): Promise <Profissional[] > {
        
        const urlBase = 'https://cors-anywhere.herokuapp.com/indikko.herokuapp.com/api/v1/workers/';

        function getData(url, dados, cb) {

            fetch(url)
                .then(data => data.json())
                .then(data=> {
                    dados = dados.concat(data.results);
                    if (data.next) {
                        //getData(data.next, dados, cb);
                        getData('https://cors-anywhere.herokuapp.com/' + data.next.replace("http://", ""), dados, cb);
                        //console.log('https://cors-anywhere.herokuapp.com/' + data.next.replace("http://", ""))
                    }
                    else {
                        cb(dados);
                    }
                });
        }

        return new Promise<Profissional[]>(function (resolve, reject) {
            getData(urlBase, [], (resposta: any) => {
                //console.log(resposta as Profissional[])
                resolve(resposta as Profissional[])
            })
        })


    }

    public getProfissionalID(id: number): Promise<Profissional> {
        return this.http.get(`https://cors-anywhere.herokuapp.com/indikko.herokuapp.com/api/v1/workers/${id}/?format=json`)
            .toPromise()
            .then((resposta: any) => {
                return resposta.json() as Profissional
            })

    }    
    

}
