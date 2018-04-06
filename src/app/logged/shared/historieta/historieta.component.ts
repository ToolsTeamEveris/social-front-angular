import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post, Type } from '../Entidades/post';
import { HistorietasService } from '../Services/historietas.service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { PersonaServiceService } from '../Services/persona-service.service';
import { Persona } from '../Entidades/persona';

@Component({
  selector: 'app-historieta',
  templateUrl: './historieta.component.html',
  styleUrls: ['./historieta.component.css']
})
export class HistorietaComponent implements OnInit {
  @Input() post: Post;
  @Output() refresh: EventEmitter<void> = new EventEmitter();

  d : Date = new Date();
  map : boolean = false;
  edit : boolean = false;
  likes : boolean = false;
  likes2 : boolean = false;
  likes3 : boolean = false;
  zoom = 17;
  myUser : boolean = false;
  ""
  constructor(private postService : HistorietasService, 
              private router: Router,
              private personService: PersonaServiceService) {
                
               }

  ngOnInit() {
    this.MyPost();
    console.log('user:', this.personService.user.id);
    console.log('post:', this.post.creator.id);
  }

  showHideMap(){
    this.map = !this.map;
  }

  showHideEdit(){
    this.edit = !this.edit;
  }

  MyPost () {
    if (this.personService.user.id === this.post.creator.id) {
      this.myUser = true;
    }
  }
  removePost() {
    this.postService.deletePost(this.post.id).subscribe();
    this.router.navigate(['/logged/historietas2']);
    
  }
  
  editPost() {
    this.postService.updatePost(this.post).subscribe();
    this.router.navigate(['/logged/historietas2']);
    
  }

  report(){
    this.postService.reportPost(this.post).subscribe();
    this.post.reported = true;
  }

  //Aun no está implementado
  unReport(){
    this.postService.unReportPost(this.post).subscribe();
    this.post.reported = false;
  }

  cool(){
    //this.post.tipe = Type.COOL // 0 
    this.postService.updatePost(this.post).subscribe();
    this.likes = !this.likes;
    this.likes2 = false;
    this.likes3 = false;
  }

  dontcare(){
    //this.post.tipe = Type.DONTCARE // 1
    this.postService.updatePost(this.post).subscribe();
    this.likes2 = !this.likes2;
    this.likes = false;
    this.likes3 = false;     
  }

  arrg(){
    //this.post.tipe = Type.ARRG // 2
    this.postService.updatePost(this.post).subscribe();
    this.likes3 = !this.likes3;
    this.likes = false;
    this.likes2 = false;
  }
}
