import { TestBed } from '@angular/core/testing';

import { DarkLaunchService } from './dark-launch.service';

describe('DarkLaunchService', () => {
  let service: DarkLaunchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkLaunchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
