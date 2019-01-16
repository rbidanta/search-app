import { TestBed, inject } from '@angular/core/testing';

import { AskDictionaryService } from './ask-dictionary.service';

describe('AskDictionaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AskDictionaryService]
    });
  });

  it('should be created', inject([AskDictionaryService], (service: AskDictionaryService) => {
    expect(service).toBeTruthy();
  }));
});
