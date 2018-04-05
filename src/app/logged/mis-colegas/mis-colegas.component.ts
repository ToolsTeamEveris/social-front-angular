import { Component, OnInit, OnDestroy } from '@angular/core';
import { Persona } from '../shared/Entidades/persona';
import { PersonaServiceService } from '../shared/Services/persona-service.service';
import { Subject } from 'rxjs/Subject';
import { ModalComponent } from '../../utils/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  selected: Persona;

  constructor( private personaService: PersonaServiceService, private modal: NgbModal ) { 
    
    }
    
    ngOnInit() {
      this.personaService.getFriends().subscribe(
        result => {
          this.coleguillas = result.amigos;
          this.coleguillasPendientes = result.pendientes;
          this.coleguillasSolicitados = result.solicitados;
        }
      )

      this.personaService.getPersonByTerm(this.searchTerm$)
      .subscribe( result => {
        this.filteredList = result;
      });

    }

  cancelarSolicitud( persona: Persona ) {
    this.coleguillasSolicitados = this.coleguillasSolicitados.filter(
      coleguilla => coleguilla.id != persona.id
    );  

    this.selected = null;
  }
  
  rechazarSolicitud( persona: Persona ) {
    this.coleguillasPendientes = this.coleguillasPendientes.filter(
      coleguilla => coleguilla.id != persona.id
    );

    this.selected = null;
  }
  
  eliminarAmigo( persona: Persona ) {
    this.coleguillas = this.coleguillas.filter(
      coleguilla => coleguilla.id != persona.id
    );

    this.selected = null;
  }

  aceptarSolicitud( persona: Persona ) {
    this.coleguillasPendientes = this.coleguillasPendientes.filter(
      coleguilla => coleguilla.id != persona.id
    );

    this.coleguillas.push(persona);
    this.selected = null;
  }

  showDetails( colega: Persona ) {
    this.selected = colega;
    this.selected.amigo = this.coleguillas.find( p => p.id == colega.id) != null ? true : false;
    this.selected.pendiente = this.coleguillasPendientes.find( p => p.id == colega.id) != null ? true : false;
    this.selected.solicitado = this.coleguillasSolicitados.find( p => p.id == colega.id) != null ? true : false;
  }

  eliminar() {
    this.showModal('Borrar', `¿Desea eliminar a ${this.selected.name} de su lista de amigos?`).then(
      response => {
        if (response) {
          this.personaService.refuseFriend(this.selected.id).subscribe(
            respuesta => {
              if(respuesta) {
                this.eliminarAmigo(this.selected);
              }
            }
          );
        }
      }
    )
  }

  cancelar() {
    this.showModal('Cancelar', '¿Desea cancelar la colicitud de amistad?').then(
      response => {
        if (response) {
          this.personaService.refuseFriend(this.selected.id).subscribe(
            respuesta => {
              this.cancelarSolicitud(this.selected);
              this.selected = null;
            }
          );
        }
      }
    )
  }

  aceptar() {
    this.personaService.acceptFriend(this.selected.id).subscribe( 
      respuesta => {
        if (respuesta) {
          this.aceptarSolicitud(this.selected);
          this.selected.pendiente = false;
          this.selected.amigo = true;
        }
        else console.log(respuesta)
      }
    );
  }


  showModal(title: string, body: string, info?:boolean) {
    const modalRef = this.modal.open(ModalComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.body = body;

    modalRef.componentInstance.info = info;

    return modalRef.result.then( response =>  response).catch(() => null);
  }

  solicitarAmistad() {
    this.personaService.solicitarAmistad(this.selected.id).subscribe( 
      response => {
        response.picture = '/assets/user.png';
        this.coleguillasSolicitados.push(response)
      }, 
      error => this.showModal('Error', 'No se ha podido mandar la petición de amistad', true),
      () => this.selected = null
    )
  }




}
