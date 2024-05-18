import { TestBed } from '@angular/core/testing';

import { MessageIdServiceService } from './message-id-service.service';

describe('MessageIdServiceService', () => {
  let service: MessageIdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageIdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
