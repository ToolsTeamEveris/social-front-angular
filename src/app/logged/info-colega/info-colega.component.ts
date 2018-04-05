import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../shared/Entidades/persona';

@Component({
  selector: 'app-info-colega',
  templateUrl: './info-colega.component.html',
  styleUrls: ['./info-colega.component.css']
})
export class InfoColegaComponent implements OnInit {

  @Input() col: Persona;
  isFriend: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}
