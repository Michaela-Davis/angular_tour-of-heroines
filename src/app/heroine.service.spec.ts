import { TestBed } from '@angular/core/testing';

import { HeroineService } from './heroine.service';

describe('HeroineService', () => {
  let service: HeroineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
