import { Component, OnInit, OnDestroy } from '@angular/core';
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
  coleguillas: Persona[] = [];
  coleguillasPendientes: Persona[] = [];
  coleguillasSolicitados: Persona[] = [];
  filteredList: Persona[] = null;

  constructor( private personaService: PersonaServiceService ) { 
    this.personaService.getPersonByTerm(this.searchTerm$)
      .subscribe( result => this.filteredList = result);
    }
    
    ngOnInit() {
      this.personaService.getFriends().subscribe(
        result => {
          this.coleguillas = result.amigos;
          this.coleguillasPendientes = result.pendientes;
          this.coleguillasSolicitados = result.solicitados;
        }
      )
    }

  cancelarSolicitud( persona: Persona ) {
    this.coleguillasSolicitados = this.coleguillasSolicitados.filter(
      coleguilla => coleguilla.id != persona.id
    );
    
  }

  aceptarSolicitud( persona: Persona ) {
    this.coleguillasPendientes = this.coleguillasPendientes.filter(
      coleguilla => coleguilla.id != persona.id
    );

    this.coleguillas.push(persona);
  }


}
