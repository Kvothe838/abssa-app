import { TestBed } from '@angular/core/testing';

import { ClientsAccessDataService } from './clients-access-data.service';

describe('ClientsAccessDataService', () => {
  let service: ClientsAccessDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsAccessDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
