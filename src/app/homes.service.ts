import { Injectable } from '@angular/core';
import {Home} from './home.model';
import {}

@Injectable({
  providedIn: 'root'
})
export class HomesService {
  homes: Home[] = [];
  constructor() { 
    this.homes = [
      {    city: "London", hasKids: true, isMusician: true, beds: 3 },
      {    city: "Reading", hasKids: false, isMusician: true, beds: 1 },
      {    city: "Birmingham", hasKids: false, isMusician: true, beds: 1 },
      {    city: "London", hasKids: true, isMusician: true, beds: 4 },
      {    city: "London", hasKids: false, isMusician: false, beds: 2 },
      {    city: "Coventry", hasKids: true, isMusician: false, beds: 1 },
      {    city: "Carlisle", hasKids: true, isMusician: true, beds: 2 },
      {    city: "Dover", hasKids: true, isMusician: false, beds: 2 },
    ]
  }

}
