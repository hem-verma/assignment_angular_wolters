import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EventDataService } from './event.service';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

describe('AppComponent', () => {
  let eventService: EventDataService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [
      ],
      providers: [
        EventDataService
      ]
    }).compileComponents();
    eventService = TestBed.inject(EventDataService);
  }));

  it('should return eventTypes from service', () => {
    eventService.getEventTypes().subscribe(result => {
      expect(result.length).toBeGreaterThan(0);
      expect(JSON.parse(result)).toEqual('[ "Transactions", "Custom" ]');
    }
    );
  });

  it('should return events from service', () => {
    let eventsChanged: Subscription;
    eventService.getEvents();
    eventsChanged = eventService.eventChanged.subscribe(events => {
      expect(events.length).toBeGreaterThan(0);
      expect(JSON.parse(events[0])).toEqual('({"id": 1001, "description": "Rent Advance", "eventType": "Transactions", "eventDate": "2020-08-03", "customerName": "Hemant" })');
    });
  });
});
