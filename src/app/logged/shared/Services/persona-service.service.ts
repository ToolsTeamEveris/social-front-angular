import { Persona } from './../Entidades/persona';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { SERVER } from '../../../app.constants';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import { AuthService } from '../../../auth/services/auth.service';

@Injectable()
export class PersonaServiceService {

  persona: Persona = {
    id: 1,
    name: 'Gines',
    surname: 'Abadia',
    picture: 'https://3.bp.blogspot.com/-MFEE2ap2mqA/VB1NwuQ2oiI/AAAAAAAAAQU/U2s0JLanKGg/s1600/franki3.jpg'
  };
  user: Persona = {
    id: 0,
    name: '',
    surname: '',
    picture: '',
  };

  personas: Persona[] = [];

  constructor( private http:HttpClient, private auth: AuthService ) {
    this.http.get(`${SERVER}person/me`).subscribe( (response: Persona) => {
      this.user = response
      this.user.picture = '/assets/user.png';
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


  getPersonByToken(): Observable<Persona>{
    return this.http.get(`${SERVER}persontoken`).map((user: Persona) => user)
    .catch(err => Observable.throw("Error al obtener el usuario logeado: ", err));
  }
  
  //Obtener Usuario Logueado
  getLoggedUser(): Observable<Persona> {
    console.log("getloggeduser");
    return this.http.get(`${SERVER}person/me`)
      .catch((resp: HttpErrorResponse) => Observable.throw('Error obteniendo usuario logeado'))
      .map(loggedUser => {
        return loggedUser;
      })
  }
  //Obtiene todas las personas
  getPersons(): Observable<Persona[]>{
    return Observable.of(this.personas);
  }
  
  //Obtener amigos Pendientes
  getPersonPen(): Observable<Persona[]>{
    return Observable.of(this.personas);
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

  updateDataUser( newDataUser ): Observable<Persona> {
    console.log(newDataUser);
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put(`${SERVER}person`, newDataUser, options).map((usuario: Persona) => usuario)
    .catch(error => Observable.throw(error));
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

  solicitarAmistad(id: number): Observable<Persona> {
    return this.http.post(`${SERVER}friend/${id}`, '').map(
      (response: {friendPK:{receiver_user: Persona}}) => response.friendPK.receiver_user
    ).catch( error => Observable.throw(error) );
  }

}
