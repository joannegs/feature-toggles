import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { FeatureToggleService } from './feature-toggle.service';

@Injectable({
  providedIn: 'root'
})

export class AppInitService {
  constructor(private httpClient: HttpClient, private featureToggleService: FeatureToggleService) { }

  public init() {
    return this.httpClient
      .get('assets/feature-config.json')
      .pipe(tap((features) => {
        let values = Object.values(features);
        Object.keys(features).forEach((feature, i) => {
          this.featureToggleService.setFeature(feature, values[i] === 'true');
        });
      })
      );
  }
}