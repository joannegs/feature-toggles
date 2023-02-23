import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string) {
    return this.httpClient
      .post('http://localhost:3000/login', { email, password })
      .pipe(tap((user) => {
        return user
      }));
  }

}
