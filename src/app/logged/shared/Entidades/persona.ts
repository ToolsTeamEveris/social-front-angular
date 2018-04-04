export interface Persona {
    id: number;
    name: string;
    surname: string;
    picture: string;
    username?: string;
    type?: string;
    userPreferences?: PersonaPreferences;
}

export interface PersonaPreferences {
    id: number;
    backgroundColor: string;
    backgroundImage: string;
    fontStyle: string;
}
