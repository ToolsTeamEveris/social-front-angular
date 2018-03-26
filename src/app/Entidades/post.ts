import { Persona } from '../Entidades/persona';
enum Like {Mola,PSSST,PUFFF}

export interface Post {
    id: number;
    creator: Persona;
    creationDate: Date;
    text: string;
    like: string;
    type: string;
    picture: string;
}
