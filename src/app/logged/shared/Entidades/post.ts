import { Persona } from '../Entidades/persona';
import { Like } from './like';
export enum Type {COOL, DONTCARE, ARRG}

export interface Post {
    id?: number;
    user?: Persona;
    creator?: Persona;
    creationDate: Date | String;
    text: string;
    picture?: string;
    type?: Type;
    lat?: number;
    lng?: number;
    reported?: boolean;
    likes?: Like [];
    likeMe?: boolean;

    
}
