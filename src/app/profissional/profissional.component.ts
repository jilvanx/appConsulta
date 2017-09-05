import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Profissional } from '../shared/profissional.model'
import { ProfissionalService } from '../profissional.service'

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css'],
  providers: [ ProfissionalService ]
  })
export class ProfissionalComponent implements OnInit {

  public profissional: Profissional

  constructor(
    private route: ActivatedRoute,
    private profissionalService: ProfissionalService
  ) { }

  ngOnInit() {

    //console.log('ID recuperado da rota:' + this.route.snapshot.params['id'])
    this.profissionalService.getProfissionalID(this.route.snapshot.params['id'])
      .then((profissional: Profissional ) => {
        this.profissional = profissional
        console.log(profissional)
      })
      .catch((param: any) => {
        console.log(param)
      })      

  }

}
