import { TestBed, inject } from '@angular/core/testing';

import { LanguagesService } from './languages.service';

describe('LanguagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LanguagesService]
    });
  });

  it('should ...', inject([LanguagesService], (service: LanguagesService) => {
    expect(service).toBeTruthy();
  }));
});
