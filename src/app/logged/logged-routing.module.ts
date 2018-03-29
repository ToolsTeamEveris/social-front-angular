import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { LoggedComponent } from './logged.component';
import { MisCosasComponent } from './cosas/mis-cosas/mis-cosas.component';
import { MisHistorietasComponent } from './mis-historietas/mis-historietas.component';
import { MisColegasComponent } from './mis-colegas/mis-colegas.component';
import { LoginActivateGuardService } from '../guards/login-activate-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild(
      [
        {
          path: '', canActivate:[LoginActivateGuardService], component: LoggedComponent, children: [
            { 
              path: 'my', 
              canActivate: [LoginActivateGuardService], 
              component: MisCosasComponent 
            },
            { 
              path: 'historietas',  
              canActivate: [LoginActivateGuardService],
              component: MisHistorietasComponent
            },
            { 
              path: 'colegas',  
              canActivate: [LoginActivateGuardService],
              component: MisColegasComponent
            }
          ]
        },
      ])
  ],
  exports: [
    RouterModule
  ]
})
export class LoggedRoutingModule { }
