import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureToggleService {
  private features: { [key: string]: boolean } = {};

  constructor() {}

  setFeature(featureName: string, state: boolean) {
    this.features[featureName] = state;
  }

  getFeature(featureName: string): boolean {
    return this.features[featureName];
  }
}