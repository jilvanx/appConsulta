import { Component, OnInit } from '@angular/core';
import { ProfissionalService } from '../profissional.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProfissionalService]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}
