import { Home } from "./home.model";
import {Message } from "./message.model"

export interface User {
    id: number;
    email: string;
    password: string;
    //firstName: string;
    //lastName: string;
    //hasHome: boolean;
    //numUnreadMessages: number;
}

export interface userCredentials {
    email: string;
    password: string;
}