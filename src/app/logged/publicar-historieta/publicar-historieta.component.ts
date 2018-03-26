import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicar-historieta',
  templateUrl: './publicar-historieta.component.html',
  styleUrls: ['./publicar-historieta.component.css']
})
export class PublicarHistorietaComponent implements OnInit {
  historia = '';

  constructor() { }

  publicarHistorieta() {
  }

  ngOnInit() {
  }

  preRenderFunc(content: string) {
    return content.replace(/something/g, 'new value'); // must return a string
  }
}
