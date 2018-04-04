import { Persona } from './logged/shared/Entidades/persona';
import { Component, OnInit, Renderer, OnDestroy } from '@angular/core';
import { PageUpdateduser } from './logged/shared/Services/updated-user';
import { PersonaServiceService } from './logged/shared/Services/persona-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'app';

    constructor(private personaService: PersonaServiceService,
                private renderer: Renderer,
                private updateImageUser: PageUpdateduser) { }

    ngOnInit() {
      this.personaService.getPersonByToken().subscribe((user: Persona) => {
        this.renderer.setElementStyle(document.body, 'background-color', user.userPreferences.backgroundColor);
        this.renderer.setElementStyle(document.body, 'font-family', user.userPreferences.fontStyle);
      });
    }

 }
