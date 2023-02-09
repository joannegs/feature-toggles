import { Injectable } from '@angular/core';
import { FeatureToggleService } from './feature-toggle.service';

@Injectable({
  providedIn: 'root'
})
export class DarkLaunchService {
  constructor(private featureToggleService: FeatureToggleService) {}

  isDarkLaunched(featureName: string, userId: string): boolean {
    // aqui pode receber uma lista com os ids que tem acesso a uma determinada feature
    return false;
  }
}