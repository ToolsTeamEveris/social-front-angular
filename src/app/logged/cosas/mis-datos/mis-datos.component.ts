import { Component, OnInit } from '@angular/core';
import { Persona } from '../../shared/Entidades/persona';
import { PersonaServiceService } from '../../shared/Services/persona-service.service';
import { Observable } from 'rxjs/Observable';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.css']
})
export class MisDatosComponent implements OnInit {

    persona: Persona;
    personalData = new FormGroup({
        name: new FormControl(),
        surname: new FormControl(),
        picture: new FormControl()
    });
    imageBase64: string;

    constructor(private pService: PersonaServiceService) { }

    ngOnInit() {
        this.pService.getPerson(1).subscribe(res => {
        this.persona = res;
        this.personalData.get('name').setValue(this.persona.name);
        this.personalData.get('surname').setValue(this.persona.surname);
        });
    }

    updateName() {
        this.persona.name = this.personalData.get('name').value;
    }

    updateSurname() {
        this.persona.surname = this.personalData.get('surname').value;
    }

    updatePicture(fileInput: HTMLInputElement) {
        if (!fileInput.files || fileInput.files.length === 0) {
            return;
        }
        const reader: FileReader = new FileReader();
        reader.readAsDataURL(fileInput.files[0]);
        reader.addEventListener('loadend', e => {
            this.imageBase64 = reader.result;
        });
    }

    updateDataProfile(){
        // Send 'name', 'surname' and 'imageBase64'
        //this.pService.updateDataUser()
    }

}
