import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PersonaServiceService } from '../app/Services/persona-service.service';


import { AppComponent } from './app.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';

import { VistaUsuarioComponent } from './vista-usuario/vista-usuario.component';
import { AppRoutingModule } from './/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,

    NavBarComponent,
    VistaUsuarioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PersonaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
