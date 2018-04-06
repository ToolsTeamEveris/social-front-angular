import { Persona } from "./persona";

export interface Like {
    id?: number;
    creator? : Persona;
    creation_date?: Date;
    type: Type;
}

export enum Type { COOL, DONTCARE, ARRG }