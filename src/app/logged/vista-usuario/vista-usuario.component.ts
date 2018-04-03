import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Persona } from '../shared/Entidades/persona';
import { PersonaServiceService } from '../shared/Services/persona-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PageUpdateduser } from '../shared/Services/updated-user';

@Component({
  selector: 'app-vista-usuario',
  templateUrl: './vista-usuario.component.html',
  styleUrls: ['./vista-usuario.component.css']
})
export class VistaUsuarioComponent implements OnInit, OnDestroy {

    persona: Persona = {
        id: 0,
        name: '',
        surname: '',
        picture: ''
    };
    isOnTop = true;

    constructor(private pService: PersonaServiceService,
                private updatedUser: PageUpdateduser) {
    }

    ngOnInit() {
        this.updatedUser.person.subscribe((updatedPerson: Persona) => {
            console.log(updatedPerson);
            this.persona = updatedPerson;
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
