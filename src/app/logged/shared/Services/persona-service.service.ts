import { Injectable } from '@angular/core';
import { Persona } from '../Entidades/persona';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';
import { SERVER } from "../../../app.constants";
import { AuthService } from '../../../auth/services/auth.service';

@Injectable()
export class PersonaServiceService {

  persona: Persona = {
    id: 1,
    name: 'Gines',
    surname: 'Abadia',
    picture: 'https://3.bp.blogspot.com/-MFEE2ap2mqA/VB1NwuQ2oiI/AAAAAAAAAQU/U2s0JLanKGg/s1600/franki3.jpg'
  };

  personas: Persona[] = [];
  user: Persona = {
    id: 0,
    name: '',
    surname: '',
    picture: '',
  };

  constructor( private http:HttpClient, private auth: AuthService ) {
    this.http.get(`${SERVER}person/me`).subscribe( (response: Persona) => {
      this.user = response
    });
    
    let person;
    for(let i = 0; i<10; i++) {
      person = { ...this.persona, id: i+1, name: this.persona.name + i };
      this.personas.push(person);
    }
  }
  //obtiene una persona por id
  getPerson(id: number): Observable<Persona> {
      return Observable.of(this.persona);
  }
  
  //Obtener Usuario Logueado
  getLoggedUser(){
    return Observable.of(this.persona);
  }
  //Obtiene todas las personas
  getPersons(): Observable<Persona[]>{
    return Observable.of(this.personas);
  }
  
  //Obtener amigos Pendientes
  getPersonPen(): Observable<Persona[]>{
    return Observable.of(this.personas);
  }

  getFriends(): Observable<any> {
    let relations = {
      amigos: [],
      solicitados: [],
      pendientes: []
    };

    return this.http.get(`${SERVER}friend`).map( (response: any[]) => {
      console.log(response);
      response.map( relation => {
        if (relation.friendPK.receiver_user.username == this.user.username) {
          if (relation.accepted) relations.amigos.push(relation.friendPK.sender_user);
          else relations.pendientes.push(relation.friendPK.sender_user);
        } else {
          if (relation.accepted) relations.amigos.push(relation.friendPK.receiver_user);
          else relations.solicitados.push(relation.friendPK.receiver_user);
        }
      })

      relations.amigos.map( p => p.picture = '/assets/user.png');
      relations.solicitados.map( p => p.picture = '/assets/user.png');
      relations.pendientes.map( p => p.picture = '/assets/user.png');

      return relations;
    })
  }

  getPersonByTerm(terms: Observable<string>): Observable<Persona[]> {
    return terms.debounceTime(500)
      .distinctUntilChanged()
      .switchMap( term => this.findByTerm(term));
  }
              
  private findByTerm(term: string): Observable<Persona[]> { 
    if (term.trim() == '') return Observable.of(null);

    return this.http.get(`${SERVER}person/search/${term}`).map( (response:any) => {
      response.forEach( p => p.picture = '/assets/user.png')
      return response;
    });
  }

  acceptFriend(id: number): Observable<boolean> {
    return this.http.put(`${SERVER}friend/${id}`,'').map(
      () => true
    ).catch( () => Observable.of(false) );
  }

  refuseFriend(id: number): Observable<boolean> {
    return this.http.delete(`${SERVER}friend/${id}`).map(
      () => true
    ).catch( () => Observable.of(false) );
  }

}
