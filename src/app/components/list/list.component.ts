import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventDataService } from '../../services/event.service';
import { Event } from '../../shared/event.modal';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-list',
  styleUrls: ['list.component.css'],
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit, OnDestroy {

  events: Event[];
  eventTypes: string[];
  eventsChanged: Subscription;

  constructor(private service: EventDataService, private router: Router) {
  }

  ngOnInit(): void {
    this.service.getEvents();
    this.service.getEventTypes().subscribe(types => {
      this.eventTypes = types;
    });
    this.eventsChanged = this.service.eventChanged.subscribe(events => {
      this.events = events;
    });
   }

  ngOnDestroy(): void {
    this.eventsChanged.unsubscribe();
  }

  getEventDetail(id: number): void {
    this.router.navigate(['/details/', id]);
  }

  getFilteredEventList(type: string): void {
      this.service.getFilteredEvents(type);
  }
}
