import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Home } from './home.model';
import {User, userCredentials} from './user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  authenticatedUser: User | null = null;
  authenticatedUserObservable: Subject<User | null> = new Subject<User | null>();

  constructor(private http: HttpClient) { 

  }

  getAuthenticatedUserObservable() {
    return this.authenticatedUserObservable;
  }

  login(userCredentials: userCredentials) {
    return this.http.post<User>('/api/authenticate?',userCredentials).subscribe(
      value => {
         if (value) 
         { 
          this.authenticatedUser = value;
          this.authenticatedUserObservable.next(value); 
        } 
         else 
         { 
          this.authenticatedUserObservable.next(null);
          }
    }, 
    (error) => alert("login unsuccessful")
    );
  }

  
  register(userCredentials: userCredentials) {
    return this.http.post<User>('/api/register',userCredentials).subscribe(
      value => {
         if (value) 
         { 
          this.authenticatedUser = value;
          alert("register successful");
          this.authenticatedUserObservable.next(value); 
        } 
         else 
         { 
          this.authenticatedUserObservable.next(null);
          }
    }, 
    (error) => alert("register unsuccessful")
    );
  }

  
  
  delete() {
    if (this.authenticatedUser) {
      return this.http.delete<User>('/api/user/' + this.authenticatedUser.id).subscribe(
        value =>  {
          if (value) {
            this.authenticatedUser = null;
            window.location.href = "/";
          }
        }
      )
    }
    else {
      return new Observable(
        subscriber => { subscriber.next(null); } 
      );
    }
  }

  changePassword(newPassword: string): Observable<any> {
    
    if (this.authenticatedUser) {
      let userCopy: any = {...this.authenticatedUser};
      userCopy["newPassword"] = newPassword;
      return this.http.post<User>('/api/user/' + this.authenticatedUser.id + '/changePassword',userCopy);
    }
    else {
      return new Observable(
        subscriber => { subscriber.next(null); } 
      );
    }
  }
  

  getHomesOfUserObservable(): Observable<Home[]> {
    if (this.authenticatedUser) {
      return this.http.get<Home[]>('/api/user/' + this.authenticatedUser.id + '/homes');
    }
    else {
      return new Observable(
        subscriber => { subscriber.next([]); } 
      );
    }
  }
  
  
  updateHomeOfUserObservable(home: Home): any {
    if (this.authenticatedUser) {
      return this.http.patch<Home>('/api/home/' + home.id, home);
    }
    else {
      return new Observable(
        subscriber => { subscriber.next(null); } 
      );
    }
  }

  
  deleteHomeOfUserObservable(home: Home): any {
    if (this.authenticatedUser) {
      return this.http.delete<Home>('/api/home/' + home.id);
    }
    else {
      return new Observable(
        subscriber => { subscriber.next(null); } 
      );
    }
  }
}
