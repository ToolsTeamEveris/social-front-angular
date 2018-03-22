import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../Entidades/persona';

@Component({
  selector: 'app-coleguilla-add',
  templateUrl: './coleguilla-add.component.html',
  styleUrls: ['./coleguilla-add.component.css']
})
export class ColeguillaAddComponent implements OnInit {

  @Input() col:Persona;
  
  constructor() { }

  ngOnInit() {
  }

}
