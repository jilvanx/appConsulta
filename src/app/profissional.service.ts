import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Profissional } from './shared/profissional.model'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class ProfissionalService {

    constructor(private http: Http){}

    public getOfertas(): Promise<Profissional[]> {
        //Efetuar uma requisição http
        return this.http.get('http://www.indicoapp.com/api/v1/workers/')
            .toPromise()
            .then((resposta: any) => resposta.json())
    }

}
