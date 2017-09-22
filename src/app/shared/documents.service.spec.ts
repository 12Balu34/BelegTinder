import { TestBed, inject } from '@angular/core/testing';

import { DocumentsService } from './documents.service';

describe('DocumentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocumentsService]
    });
  });

  it('should be created', inject([DocumentsService], (service: DocumentsService) => {
    expect(service).toBeTruthy();
  }));

  it('should have documents', inject([DocumentsService], (service: DocumentsService) => {
    expect(service.getAllDocuments().length).toBeGreaterThan(0);
  }));

  it('should find the specified document', inject([DocumentsService], (service: DocumentsService) => {
    const document = service.getDocument(1);
    expect(document).toBeTruthy();
    expect(document.id).toBe(1);
  }));
});
