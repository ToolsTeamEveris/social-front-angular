import { PersonaServiceService } from './shared/Services/persona-service.service';
import { Component, OnInit, Renderer } from '@angular/core';
import { Persona } from './shared/Entidades/persona';
import { PageUpdateduser } from './shared/Services/updated-user';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styles: [`
            #banner{
              background-size:cover;
              background-repeat:no-repeat;
              background-position:50% 50%;
            }`
          ]
})
export class LoggedComponent implements OnInit {

  constructor(private personaService: PersonaServiceService,
              private renderer: Renderer,
              private updateImageHeader: PageUpdateduser) { }

  ngOnInit() {
    this.updateImageHeader.imagen.subscribe(imagen => {
      this.renderer.setElementStyle(<HTMLDivElement>document.querySelector('#banner'), 'background-image', 'url("' + imagen + '")');
    });

    this.personaService.getPersonByToken().subscribe((user: Persona) => {
      this.renderer.setElementStyle(<HTMLDivElement>document.querySelector('#banner'), 'background-image', 'url("' + user.userPreferences.backgroundImage + '")');
    });
  }



}
