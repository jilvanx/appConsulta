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

    public getProfissionais(): Promise<Profissional[]> {
        
        return this.http.get('https://cors-anywhere.herokuapp.com/indikko.herokuapp.com/api/v1/workers/')
            .toPromise()
            .then((resposta: any) => resposta.json().results as Profissional[])
        
    }    

}
