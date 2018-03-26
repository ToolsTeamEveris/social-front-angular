<<<<<<< HEAD:src/app/logged/vista-usuario/vista-usuario.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { PersonaServiceService } from '../shared/Services/persona-service.service';
import { Persona } from '../shared/Entidades/persona';
=======
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PersonaServiceService } from '../Services/persona-service.service';
import { Persona } from '../Entidades/persona';
>>>>>>> front:src/app/vista-usuario/vista-usuario.component.ts
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-vista-usuario',
  templateUrl: './vista-usuario.component.html',
  styleUrls: ['./vista-usuario.component.css']
})
export class VistaUsuarioComponent implements OnInit, OnDestroy {

    persona: Persona;
    isOnTop = true;

    constructor(private pService: PersonaServiceService) {
    }

    ngOnInit() {
        this.pService.getPerson(1).subscribe(res => {
        this.persona = res;
        });

        window.addEventListener('scroll', this.scroll, true);
    }

    ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
    }

    scroll = (): void => {
        const top_of_page = window.scrollY;
        if (top_of_page === 0) {
            this.isOnTop = true;
        } else { this.isOnTop = false; }

    }

}
