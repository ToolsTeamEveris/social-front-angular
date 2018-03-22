import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../Entidades/persona';

@Component({
  selector: 'app-inrfo-colega',
  templateUrl: './inrfo-colega.component.html',
  styleUrls: ['./inrfo-colega.component.css']
})
export class InrfoColegaComponent implements OnInit {

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
