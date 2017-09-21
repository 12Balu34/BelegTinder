import { TestBed, inject } from '@angular/core/testing';

import { DocumentTypesService } from './document-types.service';

describe('DocumentTypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocumentTypesService]
    });
  });

  it('should be created', inject([DocumentTypesService], (service: DocumentTypesService) => {
    expect(service).toBeTruthy();
  }));
});
