import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { LoggedComponent } from './logged.component';
import { MisCosasComponent } from './cosas/mis-cosas/mis-cosas.component';
import { MisHistorietasComponent } from './mis-historietas/mis-historietas.component';
import { MisColegasComponent } from './mis-colegas/mis-colegas.component';
import { LoginActivateGuardService } from '../guards/login-activate-guard.service';
import { Historieta2Component } from './shared/historieta2/historieta2.component';

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
              path: 'historietas2',  
              canActivate: [LoginActivateGuardService],
              component:  Historieta2Component
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
