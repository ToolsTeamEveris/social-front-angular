import { Component, OnInit } from '@angular/core';
import { GeolacationService } from '../../shared-services/geolacation.service';
import { Persona } from '../shared/Entidades/persona';
import { Post } from '../shared/Entidades/post';

@Component({
  selector: 'app-publicar-historieta',
  templateUrl: './publicar-historieta.component.html',
  styleUrls: ['./publicar-historieta.component.css']
})
export class PublicarHistorietaComponent implements OnInit {
  post: Post;
  persona: Persona;
  date = new Date();

  constructor(private geolocation: GeolacationService) { }

  publicarHistorieta() {
  }

  ngOnInit() {
    this.resetNewPost();
    this.createCoords();
  }

  resetNewPost() {
    this.persona = {
      id: -1,
      name: '',
      surname: '',
      picture: '',
    }
    this.post = {
      user: this.persona,
      created_at: this.date,
      content: '',
      like: '',
      lat: 0,
      lng: 0
    };
  }
  
  createCoords() {
    this.geolocation.getLocation().subscribe(
        position => {
            this.post.lat = position.coords.latitude;
            this.post.lng = position.coords.longitude;
        },
        error => console.log(error),
    );
  }
  preRenderFunc(content: string) {
    console.log(content);
    if (content == null) return null;

    if (content.length <= 140)
      return content.replace(/something/g, 'new value');
    else {
      this.post.content = content.slice(0,140);
      content = this.post.content;
      return content.replace(/something/g, 'new value');
    }
  }
}
