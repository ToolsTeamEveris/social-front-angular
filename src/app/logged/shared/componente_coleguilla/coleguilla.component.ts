import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from '../Entidades/persona';
import { ModalComponent } from '../../../utils/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonaServiceService } from '../Services/persona-service.service';

@Component({
  selector: 'app-coleguilla',
  templateUrl: './coleguilla.component.html',
  styleUrls: ['./coleguilla.component.css']
})
export class ColeguillaComponent implements OnInit {
  @Input() col: Persona;
  @Output() cancel: EventEmitter<Persona> = new EventEmitter();

  constructor( private modal: NgbModal, private personaService: PersonaServiceService ) { }

  ngOnInit() {
  }

  eliminar() {
    const modalRef = this.modal.open(ModalComponent);
    modalRef.componentInstance.title = 'Borrar';
    modalRef.componentInstance.body = `¿Desea eliminar a ${this.col.name} de su lista de amigos?`;

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
}
