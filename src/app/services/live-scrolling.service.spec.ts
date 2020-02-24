/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LiveScrollingService } from './live-scrolling.service';

describe('Service: LiveScrolling', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LiveScrollingService]
    });
  });

  it('should ...', inject([LiveScrollingService], (service: LiveScrollingService) => {
    expect(service).toBeTruthy();
  }));
});
