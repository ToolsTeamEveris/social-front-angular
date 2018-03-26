import { Component, OnInit, Input } from '@angular/core';
import { PersonaServiceService } from '../shared/Services/persona-service.service';
import { Persona } from '../shared/Entidades/persona';
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
     this.pService.getPerson(1).subscribe(res => {
       this.persona = res;
     });
  }

}
