import { TestBed } from '@angular/core/testing';

import { CuscaDialogOptionsService } from './cusca-dialog-options.service';

describe('CuscaDialogOptionsService', () => {
  let service: CuscaDialogOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuscaDialogOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
