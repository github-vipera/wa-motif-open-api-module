import { TestBed } from '@angular/core/testing';

import { AuthAccessControlServiceService } from './auth-access-control-service.service';

describe('AuthAccessControlServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthAccessControlServiceService = TestBed.get(AuthAccessControlServiceService);
    expect(service).toBeTruthy();
  });
});
