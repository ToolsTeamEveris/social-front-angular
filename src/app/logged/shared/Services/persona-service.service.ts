import { Injectable } from '@angular/core';
import { Persona } from '../Entidades/persona';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PersonaServiceService {

  persona: Persona = {
    id: 1,
    name: 'Gines',
    surname: 'Abadia',
    picture: 'https://3.bp.blogspot.com/-MFEE2ap2mqA/VB1NwuQ2oiI/AAAAAAAAAQU/U2s0JLanKGg/s1600/franki3.jpg'
  };

  urlServer = 'http://localhost:8080/'

  personas: Persona[] = [];

  constructor( private http:HttpClient ) {
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

  getPersonByTerm(term: string): Observable<Persona[]> {
    //TODO implements debounceTime
    return this.http.get(`${this.urlServer}person/search/${term}`).map( (response:any) => {
      console.log(response);
      return response;
    });
    
  }

}
