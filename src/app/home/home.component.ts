import { Component, OnInit } from '@angular/core';
import { ProfissionalService } from '../profissional.service'
import { Profissional } from '../shared/profissional.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProfissionalService]
})
export class HomeComponent implements OnInit {

  public profissionais: Profissional[]

  constructor(private profissionalService: ProfissionalService) { }

  ngOnInit() {
    

    this.profissionalService.getProfissionais()
      .then((profissionais: Profissional[] ) => {
        this.profissionais = profissionais
        //console.log(profissionais)
      })
      .catch((param: any) => {
        console.log(param)
      })

  }

}
