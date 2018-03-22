import { Component, OnInit,Input } from '@angular/core';
import { Persona } from '../Entidades/persona';
import { PersonaServiceService } from '../Services/persona-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contenedor-coleguillas',
  templateUrl: './contenedor-coleguillas.component.html',
  styleUrls: ['./contenedor-coleguillas.component.css']
})
export class ContenedorColeguillasComponent implements OnInit {

  user: Persona;
  coleguillas: Persona[];
  coleguillasPendientes: Persona[];

  constructor(private perService: PersonaServiceService) { }

  ngOnInit() {
    this.getColeguillasPendientes();
    this.getColeguillas();
  }

  getColeguillas(){
    this.perService.getPersons().subscribe(
      res => {
        this.coleguillas = res;
      });
  }
  getColeguillasPendientes(){
    this.perService.getPersonPen().subscribe(
      res => {
        this.coleguillasPendientes = res;
      });
  }
  getUser(){
    this.perService.getLoggedUser().subscribe(
      res => {
        this.user = res;
      }
    )
  }

}
