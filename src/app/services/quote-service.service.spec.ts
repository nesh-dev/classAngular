import { TestBed } from '@angular/core/testing';

import { QuoteServiceService } from './quote-service.service';

describe('QuoteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuoteServiceService = TestBed.get(QuoteServiceService);
    expect(service).toBeTruthy();
  });
});
