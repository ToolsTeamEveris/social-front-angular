import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PersonaServiceService } from '../app/Services/persona-service.service';
import { HistorietasService } from '../app/Services/historietas.service';

import { AppComponent } from './app.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';

import { VistaUsuarioComponent } from './vista-usuario/vista-usuario.component';
import { HistorietaComponent } from './historieta/historieta.component';
import { ContenedorHistorietasComponent } from './contenedor-historietas/contenedor-historietas.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    VistaUsuarioComponent,
    HistorietaComponent,
    ContenedorHistorietasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PersonaServiceService, HistorietasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
