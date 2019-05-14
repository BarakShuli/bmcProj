import { TestBed } from '@angular/core/testing';

import { UtilManagerService } from './util-manager.service';

describe('UtilManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilManagerService = TestBed.get(UtilManagerService);
    expect(service).toBeTruthy();
  });
});
