export interface Persona {
    id?: number;
    name: string;
    surname: string;
    picture?: string;
    username?: string;
    amigo?: boolean;
    pendiente?: boolean;
    solicitado?: boolean;
    password?: string;
    password2?: string;
    type?: string;
    userPreferences?: PersonaPreferences;
}

export interface PersonaPreferences {
    id: number;
    backgroundColor: string;
    backgroundImage: string;
    fontStyle: string;
}
