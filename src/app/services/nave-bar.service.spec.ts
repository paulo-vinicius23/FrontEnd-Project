import { TestBed } from '@angular/core/testing';

import { NaveBarService } from './nave-bar.service';

describe('NaveBarService', () => {
  let service: NaveBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaveBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
