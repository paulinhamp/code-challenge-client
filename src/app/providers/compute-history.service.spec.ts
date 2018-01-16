import { TestBed, inject } from '@angular/core/testing';

import { ComputeHistoryService } from './compute-history.service';

describe('ComputeHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComputeHistoryService]
    });
  });

  it('should be created', inject([ComputeHistoryService], (service: ComputeHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
