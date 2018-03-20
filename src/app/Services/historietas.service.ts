import { Injectable } from '@angular/core';
import { Post } from '../Entidades/post';
import { Persona } from '../Entidades/persona';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/of";

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
      like: "PUFF"
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
  constructor() { }

  getPost(id: number): Observable<Post[]>{
    return Observable.of(this.historias);
}
}
