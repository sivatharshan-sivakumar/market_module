import { TestBed } from '@angular/core/testing';

import { VegitablesService } from './vegitables.service';

describe('VegitablesService', () => {
  let service: VegitablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VegitablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
