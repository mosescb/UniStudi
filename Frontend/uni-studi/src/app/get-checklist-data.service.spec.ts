import { TestBed } from '@angular/core/testing';

import { GetChecklistDataService } from './get-checklist-data.service';

describe('GetChecklistDataService', () => {
  let service: GetChecklistDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetChecklistDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
