import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PersonaServiceService } from '../app/Services/persona-service.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HistorietasService } from '../app/Services/historietas.service';

import { AppComponent } from './app.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';

import { VistaUsuarioComponent } from './vista-usuario/vista-usuario.component';
import { PublicarHistorietaComponent } from './publicar-historieta/publicar-historieta.component';
import { HistorietaComponent } from './historieta/historieta.component';
import { ContenedorHistorietasComponent } from './contenedor-historietas/contenedor-historietas.component';
import { MisHistorietasComponent } from './mis-historietas/mis-historietas.component';
import { MisDatosComponent } from './mis-datos/mis-datos.component';
import { MisCosasComponent } from './mis-cosas/mis-cosas.component';
import { BuscadorColeguitasComponent } from './buscador-coleguitas/buscador-coleguitas.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    VistaUsuarioComponent,
    PublicarHistorietaComponent,
    VistaUsuarioComponent,
    HistorietaComponent,
    ContenedorHistorietasComponent,
    MisHistorietasComponent,
    MisDatosComponent,
    MisCosasComponent,
    BuscadorColeguitasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        {path: 'principal', component: MisHistorietasComponent},
        {path: 'misCosas', component: MisCosasComponent},
        {path: '', redirectTo: '/principal', pathMatch: 'full'},
        {path: '*', redirectTo: '/principal', pathMatch: 'full'}
      ]
    )
  ],
  providers: [PersonaServiceService, HistorietasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
