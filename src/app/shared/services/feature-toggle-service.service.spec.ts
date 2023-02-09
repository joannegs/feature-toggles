import { TestBed } from '@angular/core/testing';

import { FeatureToggleServiceService } from './feature-toggle-service.service';

describe('FeatureToggleServiceService', () => {
  let service: FeatureToggleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureToggleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
