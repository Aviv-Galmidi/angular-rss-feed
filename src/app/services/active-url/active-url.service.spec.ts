import { TestBed } from '@angular/core/testing';

import { ActiveURLService } from './active-url.service';

describe('ActiveURLService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActiveURLService = TestBed.get(ActiveURLService);
    expect(service).toBeTruthy();
  });
});
