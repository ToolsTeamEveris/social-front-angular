import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from '../Entidades/persona';
import { PersonaServiceService } from '../Services/persona-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../../utils/modal/modal.component';

@Component({
  selector: 'app-coleguilla-add',
  templateUrl: './coleguilla-add.component.html',
  styleUrls: ['./coleguilla-add.component.css']
})
export class ColeguillaAddComponent implements OnInit {

  @Input() col: Persona;
  @Input() solicitada: boolean;
  @Output() cancel: EventEmitter<Persona> = new EventEmitter();
  @Output() accept: EventEmitter<Persona> = new EventEmitter();

  constructor( private personaService: PersonaServiceService, private modal:NgbModal ) { }

  ngOnInit() {
  }

  cancelarSolicitud() {
    const modalRef = this.modal.open(ModalComponent);
    modalRef.componentInstance.title = 'Cancelar';
    modalRef.componentInstance.body = '¿Desea cancelar la solicitud de amistad?';

    modalRef.componentInstance.info = false;

    modalRef.result.then( response =>  {
      if (response) {
        this.personaService.refuseFriend(this.col.id).subscribe(
          respuesta => {
            if(respuesta) this.cancel.emit(this.col);
          }
        );
      }
    }).catch(() => null);

  }

  aceptarSolicitud() {
    this.personaService.acceptFriend(this.col.id).subscribe( 
      respuesta => {
        if (respuesta) this.accept.emit(this.col);
        else console.log(respuesta)
      }
    );
  }

  showModal() {
    const modalRef = this.modal.open(ModalComponent);
    modalRef.componentInstance.title = 'Test modal';
    modalRef.componentInstance.body = 'This modal is an example of modal utilization';

    // This line is optional. True for information modal, false for confirm modal
    modalRef.componentInstance.info = false;

    modalRef.result
      .then( ( response ) =>  console.log(`Response ${response}`) )
      .catch(() => console.log('Modal closed'));
  }

}
