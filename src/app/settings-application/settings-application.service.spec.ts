import { TestBed, inject } from '@angular/core/testing';

import { SettingsApplicationService } from './settings-application.service';

describe('SettingsApplicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingsApplicationService]
    });
  });

  it('should be created', inject([SettingsApplicationService], (service: SettingsApplicationService) => {
    expect(service).toBeTruthy();
  }));
});
