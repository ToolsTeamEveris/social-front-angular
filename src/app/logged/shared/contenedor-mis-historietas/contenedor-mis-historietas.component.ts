import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../Entidades/post';
import { HistorietasService } from '../Services/historietas.service';
import { PersonaServiceService } from '../Services/persona-service.service';

@Component({
  selector: 'app-contenedor-mis-historietas',
  templateUrl: './contenedor-mis-historietas.component.html',
  styleUrls: ['./contenedor-mis-historietas.component.css']
})
export class ContenedorMisHistorietasComponent implements OnInit {

  // @Input() historietas: Post[];
  historietas: Post[] = [];
  //@Input() post: Post;
  constructor(private histService: HistorietasService, private personService: PersonaServiceService) { }
 
  ngOnInit() {
    this.getMyPost();
  }

  getMyPost() {
    
    this.histService.getMyPost().subscribe(res => {
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
