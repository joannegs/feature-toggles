import { TestBed } from '@angular/core/testing';

import { FeatureToggleService } from './feature-toggle.service';

describe('FeatureToggleServiceService', () => {
  let service: FeatureToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
