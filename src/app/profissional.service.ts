import { Http, Response, Headers, RequestOptions } from '@angular/http'
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


    public getProfissionais(): Promise<any[]> {
        
        const urlBase = 'https://cors-anywhere.herokuapp.com/indikko.herokuapp.com/api/v1/workers/';

        getData(urlBase, [], callBackFunction);
        
        function callBackFunction(todosResultados)
        {
            console.log(todosResultados);
        }

        function getData(url, dados, cb) {
            
            //getData(https://cors-anywhere.herokuapp.com/ + data.next.replace("http://",""), dados, cb);

            fetch(url)
                .then(data => data.json())
                .then(data=>
                    {
                        dados = dados.concat(data.results);
                        
                        if (data.next)
                        {
                            //getData(data.next, dados, cb);
                            getData('https://cors-anywhere.herokuapp.com/' + data.next.replace("http://",""), dados, cb);
                        }else
                        {
                            cb(dados);
                        }
                    }
                );      
        }

        
        //return getData(urlBase, [], callBackFunction)
        
        return this.http.get(urlBase)
           .toPromise()
           .then((resposta: any) => resposta.json().results as Profissional[])
           //.then((resposta: any) => resposta.json())
        
    }  


}
