import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenedorHistorietasComponent } from './contenedor-historietas/contenedor-historietas.component';
import { PersonaServiceService } from './Services/persona-service.service';
import { HistorietasService } from './Services/historietas.service';
import { ColeguillaComponent } from './componente_coleguilla/coleguilla.component';
import { ColeguillaAddComponent } from './coleguilla-add/coleguilla-add.component';
//import { MisHistorietasComponent } from './mis-historietas/mis-historietas.component';
import { HistorietaComponent } from './historieta/historieta.component';
import { AgmCoreModule } from '@agm/core';
import { ContenedorColeguillasComponent } from './contenedor-coleguillas/contenedor-coleguillas.component';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC2sYQIcXgK0jbglbKQHc_ImsBieJwohHQ',
      libraries: ['places']
    }),
    TranslateModule.forChild({})
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
    HistorietaComponent,
    TranslateModule
  ],
  providers: [
    PersonaServiceService,
    HistorietasService
  ]
})
export class SharedModule { 
  constructor(private translate: TranslateService) {
    translate.addLangs(["es", "en"]);
    translate.setDefaultLang('es');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'es');
}
}
