import { TestBed, inject } from '@angular/core/testing';

import { GeolacationService } from './geolacation.service';

describe('GeolacationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeolacationService]
    });
  });

  it('should be created', inject([GeolacationService], (service: GeolacationService) => {
    expect(service).toBeTruthy();
  }));
});
