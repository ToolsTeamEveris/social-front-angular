import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PersonaServiceService } from '../app/Services/persona-service.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';

import { VistaUsuarioComponent } from './vista-usuario/vista-usuario.component';
import { PublicarHistorietaComponent } from './publicar-historieta/publicar-historieta.component';



@NgModule({
  declarations: [
    AppComponent,

    NavBarComponent,

    VistaUsuarioComponent,

    PublicarHistorietaComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PersonaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
