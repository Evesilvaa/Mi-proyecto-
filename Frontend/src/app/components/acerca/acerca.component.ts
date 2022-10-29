import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
;

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  persona: persona =new persona("","","");
  

  constructor(public porfolioService: PorfolioService ) {

  }

  ngOnInit(): void {
    this.porfolioService.getPersonas().subscribe(data => {this.persona= data})
  }

}
