import { TestBed } from '@angular/core/testing';

import { ProductCommunicatorService } from './product-communicator.service';

describe('ProductCommunicatorService', () => {
  let service: ProductCommunicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCommunicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
