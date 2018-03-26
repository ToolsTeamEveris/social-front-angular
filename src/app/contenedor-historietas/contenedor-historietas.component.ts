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
  historietas: Post[];
  constructor(private histService: HistorietasService) { }

  ngOnInit() {
    this.histService.getPost().subscribe(res => {
      this.historietas = res; });
  }

}
