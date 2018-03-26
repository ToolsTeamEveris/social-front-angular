import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//Custom modules
import { SharedModule } from './shared/shared.module';
import { LoggedRoutingModule } from './logged-routing.module';

//Components
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VistaUsuarioComponent } from './vista-usuario/vista-usuario.component';
import { PublicarHistorietaComponent } from './publicar-historieta/publicar-historieta.component';
import { InfoColegaComponent } from './info-colega/info-colega.component';
import { MisColegasComponent } from './mis-colegas/mis-colegas.component';
import { BuscadorColegasComponent } from './buscador-colegas/buscador-colegas.component';
import { LoggedComponent } from './logged.component';
import { MisCosasComponent } from './cosas/mis-cosas/mis-cosas.component';
import { MisDatosComponent } from './cosas/mis-datos/mis-datos.component';
import { MisHistorietasComponent } from './mis-historietas/mis-historietas.component';

@NgModule({
  imports: [
    LoggedRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    NavBarComponent,
    VistaUsuarioComponent,
    LoggedComponent,
    PublicarHistorietaComponent,
    MisDatosComponent,
    MisCosasComponent,
    InfoColegaComponent,
    MisColegasComponent,
    BuscadorColegasComponent,
    MisHistorietasComponent
  ],
  providers: [
  ]
})
export class LoggedModule { }
