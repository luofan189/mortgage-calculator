import { TestBed } from '@angular/core/testing';

import { InputControlService } from './input-control.service';

describe('InputControlService', () => {
  let service: InputControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputControlService]
    });
    service = TestBed.inject(InputControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
