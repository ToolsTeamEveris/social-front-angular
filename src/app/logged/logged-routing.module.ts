import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { LoggedComponent } from './logged.component';
import { MisCosasComponent } from './cosas/mis-cosas/mis-cosas.component';

@NgModule({
  imports: [
    RouterModule.forChild(
      [
        {
          path: '', component: LoggedComponent, children: [
            { path: 'my', component: MisCosasComponent }
          ]
        },
      ])  
  ],
  exports: [
    RouterModule
  ]
})
export class LoggedRoutingModule { }
