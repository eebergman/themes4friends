import { TestBed } from '@angular/core/testing';

import { ThemeStorageService } from './theme-storage.service';

describe('ThemeStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemeStorageService = TestBed.get(ThemeStorageService);
    expect(service).toBeTruthy();
  });
});
