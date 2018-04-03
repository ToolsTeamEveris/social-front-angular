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
  _arrg : boolean = false;
  _dontcare : boolean = false;
  _cool : boolean = false;
  zoom = 17;
  
  constructor(private postService : HistorietasService, private router: Router) { }
  @Output() refresh: EventEmitter<void> = new EventEmitter();
  ngOnInit() {
    this.post.created_at = this.d;
    // this._cool = this.post.type == Type.COOL ? true : false;
    // this.post.type == Type.COOL ? this._cool = true : false;
    // this.post.type == Type.DONTCARE ? this._dontcare = true : false;
    // this.post.type == Type.ARRG ? this._arrg = true : false;
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
    //this.postService.addLike(this.post).subscribe();
    //this.post.type = Type.COOL
    this._cool = !this._cool;
    // this._cool = true;
    // this._dontcare = false;
    // this._arrg = false;
  }

  dontcare(){
    this.postService.addLike(this.post).subscribe();
    this.post.type = Type.DONTCARE
    this._cool = false;
    this._dontcare = true;
    this._arrg = false;      
  }

  arrg(){
    this.postService.addLike(this.post).subscribe();
    this.post.type = Type.ARRG
    this._cool = false;
    this._dontcare = false;
    this._arrg = true;
  }




  
}
