import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from'@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  declarations: [
    ModalComponent
  ],
  entryComponents: [
    ModalComponent
  ],
  exports: [
    ModalComponent
  ]
})
export class UtilsModule { }
