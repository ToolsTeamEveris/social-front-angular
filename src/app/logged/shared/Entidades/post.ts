import { Persona } from '../Entidades/persona';
export enum Type {COOL, DONTCARE, ARRG}

export interface Post {
    id?: number;
    user?: Persona;
    creator?: Persona;
    created_at: Date | String;
    text: string;
    picture: string;
    type?: Type;
    //like?: Like;
    lat?: number;
    lng?: number;
    reported?: boolean;
    likes?: any;
    like?: Type;
    likeMe?: boolean;

    
}
