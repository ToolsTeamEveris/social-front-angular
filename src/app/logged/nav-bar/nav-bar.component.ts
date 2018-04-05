import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../utils/modal/modal.component';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { PersonaServiceService } from '../shared/Services/persona-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isAdmin: boolean = false;

  constructor( private modal: NgbModal, private translate: TranslateService,
               private router: Router, private personaService: PersonaServiceService) { 
  }

  ngOnInit() {
    this.personaService.$isAdmin.subscribe(
      response => this.isAdmin = response
    )
  }

  showModal() {
    const modalRef = this.modal.open(ModalComponent);
        modalRef.componentInstance.title = 'Test modal';
        modalRef.componentInstance.body = 'This modal is an example of modal utilization';

        // This line is optional. True for information modal, false for confirm modal
        modalRef.componentInstance.info = false;

        modalRef.result
          .then( ( response ) =>  console.log(`Response ${response}`) )
          .catch(() => console.log('Modal closed'));
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

}
