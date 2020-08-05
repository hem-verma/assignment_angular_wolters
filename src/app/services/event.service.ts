import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Event } from '../shared/event.modal';

@Injectable({
  providedIn: 'root'
})

export class EventDataService {
  // For API calls when Java App is running
  // eventTypesUrl = 'http://localhost:8081/apis/eventTypes';
  // eventsUrl = 'http://localhost:8081/apis/events';
  // For local Json files call
   eventsUrl = './assets/events.json';
   eventTypesUrl = './assets/eventTypes.json';
  events: Event[];
  eventChanged: EventEmitter<Event[]> = new EventEmitter();

  constructor(private http: HttpClient) {
  }

  getEvents(): void {
    this.http.get<Event[]>(this.eventsUrl).subscribe(events => {
      this.events = events;
      this.eventChanged.emit(this.events.slice());
    });
  }

  getEventTypes(): Observable<any> {
    return this.http.get(this.eventTypesUrl);
  }

  getFilteredEvents(filterType: string): void {
    if (filterType.length === 0) {
      this.eventChanged.emit(this.events.slice());
      return;
    }
    const filteredEvents = this.events.filter(event => event.eventType === filterType);
    this.eventChanged.emit(filteredEvents);
  }

  getEventDetails(id: string): Observable<any> {
    return this.http.get(this.eventsUrl.concat('/', id));
  }

  getEventDetailsJson(id: string): Event {
    return this.events.find(event => event.id === parseInt(id, 10));
  }
}
