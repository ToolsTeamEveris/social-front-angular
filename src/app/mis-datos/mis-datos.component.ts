import { Component, OnInit } from '@angular/core';
import { Persona } from '../Entidades/persona';
import { PersonaServiceService } from '../Services/persona-service.service';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.css']
})
export class MisDatosComponent implements OnInit {

  persona: Persona;
  name = new FormControl();
  surname = new FormControl();
  picture = new FormControl();

  constructor(private pService: PersonaServiceService) { }

  ngOnInit() {
    this.pService.getPerson(1).subscribe(res => {
      this.persona = res;
    });
  }

  updateName() {
    this.persona.name = this.name.value;
  }

  updateSurname() {
    this.persona.surname = this.surname.value;
  }

  updatePicture(event) {
    this.persona.picture = event.target.files[0].name;
  }
}
