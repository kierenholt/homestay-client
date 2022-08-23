import { Injectable } from '@angular/core';
import {Home} from './home.model';
import { catchError, filter, Observable, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'query-string';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class HomesService {
  homes: Home[] = [];
  constructor(private client: HttpClient) { 
  }

  getCreateHomeObservable(home: Home) {
    return this.client.post<Home>('/api/home',home);
  }

  getHomesObservable(queryObj: any) {

    return this.client.get<Home[]>('/api/homes?' + stringify(queryObj));
    
    /*.subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
      );

    let filtered: Home[] = this.homes.filter(home => {
      let ret = true;
      if (home.beds == 1) ret &&= queryObj.oneBed;
      if (home.beds == 2) ret &&= queryObj.twoBeds;
      if (home.beds >= 3) ret &&= queryObj.threeBeds;
      if (queryObj.musicianOnly) ret &&= home.isMusician;
      return ret; 
    })
    return new Observable<Home[]>(subscriber => {
      subscriber.next(filtered);
      subscriber.complete();
    });*/
  }


}
