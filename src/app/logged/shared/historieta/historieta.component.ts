import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post, Type } from '../Entidades/post';
import { HistorietasService } from '../Services/historietas.service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historieta',
  templateUrl: './historieta.component.html',
  styleUrls: ['./historieta.component.css']
})
export class HistorietaComponent implements OnInit {

  @Input() post: Post;
  d : Date = new Date();
  map : boolean = false;
  edit : boolean = false;
  likes : boolean = false;
  likes2 : boolean = false;
  likes3 : boolean = false;
  zoom = 17;
  
  constructor(private postService : HistorietasService, private router: Router) { }
  @Output() refresh: EventEmitter<void> = new EventEmitter();
  ngOnInit() {
    this.post.created_at = this.d;
    // this.likes = this.post.tipe == Type.COOL ? true : false;
    // this.likes2 = this.post.tipe == Type.DONTCARE ? true : false;
    // this.likes3 = this.post.tipe == Type.ARRG ? true : false;
    
  }

  showHideMap(){
    this.map = !this.map;
  }

  showHideEdit(){
    this.edit = !this.edit;
  }

  removePost() {
    this.postService.deletePost(this.post.id).subscribe();
    this.router.navigate(['/logged/historietas2']);
    //location.reload();
  }
  
  editPost() {
    this.postService.updatePost(this.post).subscribe();
    this.router.navigate(['/logged/historietas2']);
    //location.reload();
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
