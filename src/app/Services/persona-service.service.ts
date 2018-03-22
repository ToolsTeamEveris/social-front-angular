import { Injectable } from '@angular/core';
import { Persona } from '../Entidades/persona';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class PersonaServiceService {

  persona: Persona = {
    id: 1,
    name: 'Gines',
    surname: 'Abadia',
    picture: 'https://3.bp.blogspot.com/-MFEE2ap2mqA/VB1NwuQ2oiI/AAAAAAAAAQU/U2s0JLanKGg/s1600/franki3.jpg'
  };

  constructor() { }

  getPersona(id: number): Observable<Persona> {
      return Observable.of(this.persona);
  }

}
