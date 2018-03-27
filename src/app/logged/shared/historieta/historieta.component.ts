import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../Entidades/post';
import { HistorietasService } from '../Services/historietas.service';

@Component({
  selector: 'app-historieta',
  templateUrl: './historieta.component.html',
  styleUrls: ['./historieta.component.css']
})
export class HistorietaComponent implements OnInit {

  @Input() post: Post;
  arrayPost: Post[] = [];
  map : boolean = false;
  zoom = 17;
  constructor(private postService : HistorietasService) { }

  ngOnInit() {
    
  }

  showHideMap(){
    console.log('asdf');
    this.map = !this.map;
  }

  
}
