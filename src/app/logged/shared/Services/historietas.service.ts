import { Injectable } from '@angular/core';
import { Post } from '../Entidades/post';
import { Persona } from '../Entidades/persona';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient } from '@angular/common/http';
import { SERVER, IMG_USER_PATH } from '../../../app.constants';

@Injectable()
export class HistorietasService {

  persona: Persona = {
    id: 1,
    name: 'Gines',
    surname: 'Abadia',
    picture: 'https://3.bp.blogspot.com/-MFEE2ap2mqA/VB1NwuQ2oiI/AAAAAAAAAQU/U2s0JLanKGg/s1600/franki3.jpg'
  }

  historias: Post[] = [
    {
      user: this.persona,
      created_at: new Date,
      content: "Este es el contenido de la historia",
      like: "PUFF",
      lat: 38.4,
      lng: -1
    },
    {
      user: this.persona,
      created_at: new Date,
      content: "Este es el contenido de la historia",
      like: "PUFF"
    },
    {
      user: this.persona,
      created_at: new Date,
      content: "Este es el contenido de la historia",
      like: "PUFF"
    }
  ]
  constructor(private http: HttpClient) { }

  // Get all post
  getAllPost(): Observable<Post[]> {
    return this.http.get(`${SERVER}post`).map((post: Post[] ) => {
      post.map( p => {
        console.log(post);
           p.creator.picture = `${IMG_USER_PATH}${p.creator.picture}`;
       return p;  

      })
        return post;
      
    }).catch(error => Observable.throw(error));
  }
  
  getPost(id: number): Observable<Post[]> {
    return Observable.of(this.historias);
  }
}
