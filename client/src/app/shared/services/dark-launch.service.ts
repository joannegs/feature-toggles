import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { FeatureToggleService } from './feature-toggle.service';

@Injectable({
  providedIn: 'root'
})
export class DarkLaunchService {
  httpClient: any;
  constructor(private featureToggleService: FeatureToggleService) { }

  isDarkLaunched(): boolean {
    return this.httpClient
      .get('http://localhost:3000/dark-lauch-users')
      .pipe(tap((users: string[]) => {
        const logged_user_id = localStorage.getItem('logged_user_id');
        return users.includes(logged_user_id);
      }));
  }
}