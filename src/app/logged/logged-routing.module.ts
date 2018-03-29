import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { LoggedComponent } from './logged.component';
import { MisCosasComponent } from './cosas/mis-cosas/mis-cosas.component';
import { MisHistorietasComponent } from './mis-historietas/mis-historietas.component';
import { MisColegasComponent } from './mis-colegas/mis-colegas.component';

@NgModule({
  imports: [
    RouterModule.forChild(
      [
        {
          path: '', component: LoggedComponent, children: [
            { path: 'my', component: MisCosasComponent},
            { path: 'historietas', component: MisHistorietasComponent},
            { path: 'colegas', component: MisColegasComponent}
          ]
        },
      ])
  ],
  exports: [
    RouterModule
  ]
})
export class LoggedRoutingModule { }
