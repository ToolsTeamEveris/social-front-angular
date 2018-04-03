import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../Entidades/post';
import { HistorietasService } from '../Services/historietas.service';
import { NgModel } from '@angular/forms';

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
  zoom = 17;
  constructor(private postService : HistorietasService) { }

  ngOnInit() {
    this.post.created_at = this.d;
  }

  showHideMap(){
    this.map = !this.map;
  }

  showHideEdit(){
    this.edit = !this.edit;
  }

  removePost() {
    this.postService.deletePost(this.post.id).subscribe();
    location.reload();
  }
  
  editPost() {
    this.postService.updatePost(this.post).subscribe();
    location.reload();
  }



  
}
