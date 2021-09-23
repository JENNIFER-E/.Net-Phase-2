import { TestBed } from '@angular/core/testing';

import { CustAuthService } from './cust-auth.service';

describe('CustAuthService', () => {
  let service: CustAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
