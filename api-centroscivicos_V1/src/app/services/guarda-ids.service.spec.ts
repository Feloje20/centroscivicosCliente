import { TestBed } from '@angular/core/testing';

import { GuardaIdsService } from './guarda-ids.service';

describe('GuardaIdsService', () => {
  let service: GuardaIdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardaIdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
