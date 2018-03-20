import { Component, OnInit, Input } from '@angular/core';
import { PersonaServiceService } from '../Services/persona-service.service';
import { Persona } from '../Entidades/persona';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-vista-usuario',
  templateUrl: './vista-usuario.component.html',
  styleUrls: ['./vista-usuario.component.css']
})
export class VistaUsuarioComponent implements OnInit {


  persona: Persona;

  constructor(private pService: PersonaServiceService) {
  }

  ngOnInit() {
     this.pService.getPersona(1).subscribe(res => {
       this.persona = res;
     });
  }

}
