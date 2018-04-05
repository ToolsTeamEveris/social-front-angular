
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Persona } from './logged/shared/Entidades/persona';
import { Component, OnInit, Renderer, OnDestroy } from '@angular/core';
import { PageUpdateduser } from './logged/shared/Services/updated-user';
import { PersonaServiceService } from './logged/shared/Services/persona-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

    title = 'app';

    constructor(private translate: TranslateService,
               private personaService: PersonaServiceService,
               private renderer: Renderer,
               private updateImageUser: PageUpdateduser) {
      translate.addLangs(["en", "es"]);
      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang('es');
    }
  
    ngOnInit() {
      this.personaService.getPersonByToken().subscribe((user: Persona) => {
        this.renderer.setElementStyle(document.body, 'background-color', user.userPreferences.backgroundColor);
        this.renderer.setElementStyle(document.body, 'font-family', user.userPreferences.fontStyle);
      });
    }
}
