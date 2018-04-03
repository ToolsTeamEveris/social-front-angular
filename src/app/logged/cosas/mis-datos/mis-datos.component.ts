import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonaServiceService } from '../../shared/Services/persona-service.service';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { Persona } from '../../shared/Entidades/persona';
import { ActivatedRoute, Router } from '@angular/router';
import { PageUpdateduser } from '../../shared/Services/updated-user';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.css']
})
export class MisDatosComponent implements OnInit {

    persona: Persona = {
        id: 0,
        name: '',
        surname: '',
        picture: ''
    };
    personalData = new FormGroup({
        name: new FormControl(),
        surname: new FormControl(),
        picture: new FormControl()
    });

    constructor(private pService: PersonaServiceService,
                private updatedUser: PageUpdateduser) { }

    ngOnInit() {
        this.pService.getPersonByToken().subscribe(dataUserLogged => {
            if(!dataUserLogged.name) dataUserLogged.name = 'Actualiza tu nombre';
            if(!dataUserLogged.surname) dataUserLogged.surname = 'Actualiza tus apellidos';
            if(!dataUserLogged.picture) dataUserLogged.picture = 'https://3.bp.blogspot.com/-MFEE2ap2mqA/VB1NwuQ2oiI/AAAAAAAAAQU/U2s0JLanKGg/s1600/franki3.jpg';
            this.persona = dataUserLogged;
            this.updatedUser.setPerson(this.persona);
        });
    }

    updateName() {
        this.persona.name = this.personalData.get('name').value;
        console.log(this.persona);
        this.updatedUser.setPerson(this.persona);
    }

    updateSurname() {
        this.persona.surname = this.personalData.get('surname').value;
        this.updatedUser.setPerson(this.persona);
    }

    updatePicture(fileInput: HTMLInputElement) {
        if (!fileInput.files || fileInput.files.length === 0) {
            return;
        }
        const reader: FileReader = new FileReader();
        reader.readAsDataURL(fileInput.files[0]);
        reader.addEventListener('loadend', e => {
            this.persona.picture = reader.result;
            this.updatedUser.setPerson(this.persona);
        });
    }

    updateDataProfile(){
        this.pService.updateDataUser( this.persona ).subscribe((user: Persona) => {
            this.updatedUser.setPerson(user);
            this.persona = user;
        });
    }

}
