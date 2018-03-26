import { Injectable } from '@angular/core';
import { Post } from '../Entidades/post';
import { Persona } from '../Entidades/persona';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SERVER } from '../app-const';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HistorietasService {

  private postUrl = 'post';
  constructor(private http: HttpClient) { }

  getPost(): Observable<Post[]>{
    return this.http.get<Post[]>(`${SERVER}${this.postUrl}`);
  }

  postHistorieta(historia: Post): Observable<Post>{
    return this.http.post<Post>(`${SERVER}${this.postUrl}`,historia);
  }
}
