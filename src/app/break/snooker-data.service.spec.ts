/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SnookerDataService } from './snooker-data.service';

describe('SnookerDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnookerDataService]
    });
  });

  it('should ...', inject([SnookerDataService], (service: SnookerDataService) => {
    expect(service).toBeTruthy();
  }));
});
