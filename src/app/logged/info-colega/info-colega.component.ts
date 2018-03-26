import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../shared/Entidades/persona';

@Component({
  selector: 'app-info-colega',
  templateUrl: './info-colega.component.html',
  styleUrls: ['./info-colega.component.css']
})
export class InfoColegaComponent implements OnInit {

  //@Input() col: Persona;
  col: Persona = {
    id: 7,
    name: 'Paca',
    surname: 'Abadia',
    picture: 'https://3.bp.blogspot.com/-MFEE2ap2mqA/VB1NwuQ2oiI/AAAAAAAAAQU/U2s0JLanKGg/s1600/franki3.jpg'
  }
  isFriend: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
