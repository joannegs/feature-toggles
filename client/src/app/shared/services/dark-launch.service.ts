import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DarkLaunchService {

  constructor(private httpClient: HttpClient) { }

  isDarkLaunched(): Observable<boolean> {
    if (localStorage.getItem("logged_user_id")) {
      return this.httpClient
        .post('http://localhost:3000/dark-lauch-users',
          { userId: localStorage.getItem("logged_user_id") })
        .pipe(tap((isUserAllowed: boolean) => {
          return isUserAllowed;
        }));
    } else {
      console.log("user not logged")
      return of(true);
    }
  }
}