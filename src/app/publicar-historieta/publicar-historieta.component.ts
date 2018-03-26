import { Component, OnInit } from '@angular/core';
import { Post } from '../Entidades/post'; 
import { HistorietasService } from '../Services/historietas.service';

@Component({
  selector: 'app-publicar-historieta',
  templateUrl: './publicar-historieta.component.html',
  styleUrls: ['./publicar-historieta.component.css']
})
export class PublicarHistorietaComponent implements OnInit {

  historieta: Post;
  
  constructor(private historietaService: HistorietasService) { }

  publicarHistorieta() {
    this.historietaService.postHistorieta(this.historieta).subscribe(res => {
      
    })
  }

  ngOnInit() {
    this.initPost();
  }

  initPost(){
    this.historieta = {
      id: 0,
      creator: null,
      creationDate: new Date(),
      text: '',
      like: '',
      type: '',
      picture: ''
    }
  }

}
