import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PersonaServiceService } from '../app/Services/persona-service.service';
import { FormsModule } from '@angular/forms';
import { HistorietasService } from '../app/Services/historietas.service';

import { AppComponent } from './app.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';

import { VistaUsuarioComponent } from './vista-usuario/vista-usuario.component';
import { PublicarHistorietaComponent } from './publicar-historieta/publicar-historieta.component';
import { HistorietaComponent } from './historieta/historieta.component';
import { ContenedorHistorietasComponent } from './contenedor-historietas/contenedor-historietas.component';
import { MisHistorietasComponent } from './mis-historietas/mis-historietas.component';
import { ColeguillaComponent } from './componente_coleguilla/coleguilla.component';
import { ColeguillaAddComponent } from './coleguilla-add/coleguilla-add.component';
import { ContenedorColeguillasComponent } from './contenedor-coleguillas/contenedor-coleguillas.component';



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
    ColeguillaComponent,
    ColeguillaAddComponent,
    ContenedorColeguillasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {path: 'principal', component: MisHistorietasComponent},
        {path: '', redirectTo: '/principal', pathMatch: 'full'},
        {path: '*', redirectTo: '/principal', pathMatch: 'full'}
      ]
    )
  ],
  providers: [PersonaServiceService, HistorietasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
