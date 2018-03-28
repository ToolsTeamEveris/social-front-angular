import { Component, OnInit } from '@angular/core';
import { Persona } from '../shared/Entidades/persona';
import { PersonaServiceService } from '../shared/Services/persona-service.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-mis-colegas',
  templateUrl: './mis-colegas.component.html',
  styleUrls: ['./mis-colegas.component.css']
})
export class MisColegasComponent implements OnInit {
  searchTerm$ = new Subject<string>();
  user: Persona;
  coleguillas: Persona[] = [];
  coleguillasPendientes: Persona[] = [];
  filteredList: Persona[] = null;

  constructor( private personaService: PersonaServiceService ) { 
    this.personaService.getPersonByTerm(this.searchTerm$)
      .subscribe( result => this.filteredList = result);
  }

  ngOnInit() {
    this.getColeguillasPendientes();
    this.getColeguillas();
  }

  getColeguillas() {
    this.personaService.getPersons().subscribe(
      res => {
        this.coleguillas = res;
      });
  }
  getColeguillasPendientes() {
    this.personaService.getPersonPen().subscribe(
      res => {
        this.coleguillasPendientes = res;
      });

  }
  getUser() {
    this.personaService.getLoggedUser().subscribe(
      res => {
        this.user = res;
      }
    );
  }

}
