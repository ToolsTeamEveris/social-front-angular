import { Component, OnInit } from '@angular/core';
import { GeolacationService } from '../../shared-services/geolacation.service';
import { Persona } from '../shared/Entidades/persona';
import { Post } from '../shared/Entidades/post';
import { HttpClient } from '@angular/common/http';
import { HistorietasService } from '../shared/Services/historietas.service';

@Component({
  selector: 'app-publicar-historieta',
  templateUrl: './publicar-historieta.component.html',
  styleUrls: ['./publicar-historieta.component.css']
})
export class PublicarHistorietaComponent implements OnInit {
  historia: string;
  post: Post;
  postText: String;
  persona: Persona;
  date = new Date();

  constructor(private geolocation: GeolacationService,
              private histService: HistorietasService) { }

  ngOnInit() {
    this.resetNewPost();
    this.createCoords();
  }

  resetNewPost() {
    this.persona = {
      id: 1000,
      name: 'Ivan',
      surname: 'Galan',
      picture: 'https://3.bp.blogspot.com/-MFEE2ap2mqA/VB1NwuQ2oiI/AAAAAAAAAQU/U2s0JLanKGg/s1600/franki3.jpg'
     
    }
    this.post = {
      creator: this.persona,
      created_at: '',
      text: '',
      picture:'',
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

  publicarHistorieta() {
    console.log(this.post);
    this.histService.savePost(this.post).subscribe();
    location.reload();
  }

  //Convert image to base64
  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
        this.post.picture = reader.result;
    });
  }

  //Markdown
  preRenderFunc(content: string) {
    
    if (content == null) return null;

    if (content.length <= 140)
      return content.replace(/something/g, 'new value');
    else {
      this.post.text = content.slice(0,140);
      content = this.post.text;
      return content.replace(/something/g, 'new value');
    }
  }
}
