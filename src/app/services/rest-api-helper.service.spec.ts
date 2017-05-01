import { TestBed, inject } from '@angular/core/testing';

import { RestApiHelperService } from './rest-api-helper.service';

describe('RestApiHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestApiHelperService]
    });
  });

  it('should ...', inject([RestApiHelperService], (service: RestApiHelperService) => {
    expect(service).toBeTruthy();
  }));
});
