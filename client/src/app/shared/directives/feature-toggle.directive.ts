import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureToggleService } from '../services/feature-toggle.service';

@Directive({
  selector: '[appFeatureToggle]'
})
export class FeatureToggleDirective {

  @Input() set appFeatureToggle(featureName: string) {
    const state = this.featureToggleService.getFeature(featureName);
    state ? this.viewContainer.createEmbeddedView(this.templateRef) : this.viewContainer.clear();
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private featureToggleService: FeatureToggleService
  ) {}
}


