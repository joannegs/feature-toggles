import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureToggleService } from '../services/feature-toggle.service';

@Directive({
  selector: '[appFeatureToggle]'
})
export class FeatureToggleDirective {
  
  @Input() set appFeatureToggle(featureName: string) {
    const state = this.featureToggleService.getFeature(featureName);
    if (state) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private featureToggleService: FeatureToggleService
  ) {}
}


