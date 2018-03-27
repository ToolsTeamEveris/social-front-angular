import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenedorHistorietasComponent } from './contenedor-historietas/contenedor-historietas.component';
import { PersonaServiceService } from './Services/persona-service.service';
import { HistorietasService } from './Services/historietas.service';
import { ColeguillaComponent } from './componente_coleguilla/coleguilla.component';
import { ColeguillaAddComponent } from './coleguilla-add/coleguilla-add.component';
//import { MisHistorietasComponent } from './mis-historietas/mis-historietas.component';
import { HistorietaComponent } from './historieta/historieta.component';
import { ContenedorColeguillasComponent } from './contenedor-coleguillas/contenedor-coleguillas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContenedorColeguillasComponent,
    ContenedorHistorietasComponent,
    ColeguillaComponent,
    ColeguillaAddComponent,
    //MisHistorietasComponent,
    HistorietaComponent
  ],
  exports: [
    ContenedorColeguillasComponent,
    ContenedorHistorietasComponent,
    ColeguillaComponent,
    ColeguillaAddComponent,
    //MisHistorietasComponent,
    HistorietaComponent
  ],
  providers: [
    PersonaServiceService,
    HistorietasService
  ]
})
export class SharedModule { }
