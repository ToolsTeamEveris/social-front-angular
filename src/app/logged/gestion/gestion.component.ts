import { Component, OnInit } from '@angular/core';
import { style, trigger, state, transition, group, animate } from "@angular/animations";
import { HistorietasService } from '../shared/Services/historietas.service';
import { Post } from '../shared/Entidades/post';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../utils/modal/modal.component';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  reportedPosts: Post[] = [];

  constructor( private postService: HistorietasService, private modal: NgbModal ) {
  }

  ngOnInit() {
    this.getReportedPosts();
  }

  confirmReport(id: number) {
    this.showModal('Borrar', `¿Borrar el post con id: ${id}?`).then(
      res => {
        if (res) {
          this.postService.confirmReport(id).subscribe(
            response => {
              if (response) this.reportedPosts = this.reportedPosts.filter( p => p.id != id);
            }
          );
        }
      }
    )
  }

  rejectReport(id: number) {
    this.postService.unreport(id).subscribe(
      response => {
        if (response) this.reportedPosts = this.reportedPosts.filter( p => p.id != id);
      }
    );
  }

  showModal(title: string, body: string, info?:boolean) {
    const modalRef = this.modal.open(ModalComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.body = body;

    modalRef.componentInstance.info = info;

    return modalRef.result.then( response =>  response).catch(() => null);
  }

  getReportedPosts() {
    this.reportedPosts = [];
    this.postService.getReportedPost().subscribe(
      response => this.reportedPosts = response
    );
  }

}
