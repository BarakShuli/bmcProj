import { TestBed } from '@angular/core/testing';

import { GetCurrencyXmlListService } from './get-currency-xml-list.service';

describe('GetCurrencyXmlListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCurrencyXmlListService = TestBed.get(GetCurrencyXmlListService);
    expect(service).toBeTruthy();
  });
});
