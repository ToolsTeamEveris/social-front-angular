import { TestBed, inject } from '@angular/core/testing';

import { PersonaServiceService } from './persona-service.service';

describe('PersonaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonaServiceService]
    });
  });

  it('should be created', inject([PersonaServiceService], (service: PersonaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
