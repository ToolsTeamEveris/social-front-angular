import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../utils/modal/modal.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor( private modal: NgbModal ) { }

  ngOnInit() {
  }

  showModal() {
    const modalRef = this.modal.open(ModalComponent); 
        modalRef.componentInstance.title = 'Test modal'; 
        modalRef.componentInstance.body = 'This modal is an example of modal utilization';
        
        //This line is optional. True for information modal, false for confirm modal
        modalRef.componentInstance.info = false;
    
        modalRef.result
          .then( ( response ) =>  console.log(`Response ${response}`) )
          .catch(() => console.log('Modal closed'));
  }

}
