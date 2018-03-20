import { TestBed, inject } from '@angular/core/testing';

import { HistorietasService } from './historietas.service';

describe('HistorietasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistorietasService]
    });
  });

  it('should be created', inject([HistorietasService], (service: HistorietasService) => {
    expect(service).toBeTruthy();
  }));
});
