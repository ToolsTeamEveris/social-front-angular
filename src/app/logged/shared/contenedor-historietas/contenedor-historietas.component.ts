import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../Entidades/post';
import { HistorietasService } from '../Services/historietas.service';

@Component({
  selector: 'app-contenedor-historietas',
  templateUrl: './contenedor-historietas.component.html',
  styleUrls: ['./contenedor-historietas.component.css']
})
export class ContenedorHistorietasComponent implements OnInit {

  // @Input() historietas: Post[];
  historietas: Post[] = [];
  //@Input() post: Post;
  constructor(private histService: HistorietasService) { }
 
  ngOnInit() {
    this.getAllPost();
  }

  getAllPost() {
    this.histService.getAllPost().subscribe(res => {
      this.historietas = res; 
      console.log(res);
    },
    (error: string) => console.log('Error loading post: ' + error));
  }
  
  //intento de refrescar la lista cuando se borra
  actualizarLista( post: Post ) {
    this.historietas = this.historietas.filter(
      p => p.id != post.id
    );  
  }
}
