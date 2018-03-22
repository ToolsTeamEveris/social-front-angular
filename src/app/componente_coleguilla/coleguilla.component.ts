import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../Entidades/persona';

@Component({
  selector: 'app-coleguilla',
  templateUrl: './coleguilla.component.html',
  styleUrls: ['./coleguilla.component.css']
})
export class ColeguillaComponent implements OnInit {

  @Input() col: Persona;
  
  constructor() { }

  ngOnInit() {
  }

}
