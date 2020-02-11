import { TestBed } from '@angular/core/testing';

import { SlickService } from './zapx-slick.service';

describe('SlickService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlickService = TestBed.get(SlickService);
    expect(service).toBeTruthy();
  });
});
