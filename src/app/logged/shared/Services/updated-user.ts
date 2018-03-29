import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Persona } from '../Entidades/persona';

@Injectable()
export class PageUpdateduser {

    public person: BehaviorSubject<Persona> = new BehaviorSubject<Persona>(null);

    setPerson(value: Persona) {
        this.person.next(value);
    }
}