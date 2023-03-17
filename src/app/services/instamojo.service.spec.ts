import { TestBed } from '@angular/core/testing';

import { InstamojoService } from './instamojo.service';

describe('InstamojoService', () => {
  let service: InstamojoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstamojoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
