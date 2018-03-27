import { Persona } from '../Entidades/persona';
enum Like {Mola, PSSST, PUFFF}

export interface Post {
    user: Persona;
    creator?: Persona;
    created_at: Date;
    content: string;
    like: string;
    lat?: number;
    lng?: number;
    
}
