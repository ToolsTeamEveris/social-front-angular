export interface Persona {
    id?: number;
    name: string;
    surname: string;
    picture?: string;
    username?: string;
<<<<<<< HEAD
    amigo?: boolean;
    pendiente?: boolean;
    solicitado?: boolean;
    password?: string;
    password2?: string;
=======
    type?: string;
    userPreferences?: PersonaPreferences;
>>>>>>> personalizar_web
}

export interface PersonaPreferences {
    id: number;
    backgroundColor: string;
    backgroundImage: string;
    fontStyle: string;
}
