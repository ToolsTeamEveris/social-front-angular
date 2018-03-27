import { Component, OnInit } from '@angular/core';
import { Persona } from '../shared/Entidades/persona';
import { PersonaServiceService } from '../shared/Services/persona-service.service';

@Component({
  selector: 'app-mis-colegas',
  templateUrl: './mis-colegas.component.html',
  styleUrls: ['./mis-colegas.component.css']
})
export class MisColegasComponent implements OnInit {
  searchTerm: string = '';
  user: Persona;
  coleguillas: Persona[] = [];
  coleguillasPendientes: Persona[] = [];
  filteredList: Persona[] = [];

  constructor( private personaService: PersonaServiceService ) { }

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

  searchFriend() {
    if (this.searchTerm.trim() != '')
      this.personaService.getPersonByTerm(this.searchTerm).subscribe(
        result => this.filteredList = result
      );
  }

}
