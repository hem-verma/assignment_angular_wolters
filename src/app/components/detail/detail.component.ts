import { Component, OnInit} from '@angular/core';
import { EventDataService } from '../../services/event.service';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/shared/event.modal';


@Component({
  selector: 'app-detail',
  styleUrls: ['detail.component.css'],
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  id: string;
  eventDetails: Event;

  constructor(private service: EventDataService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    // If json call is activated in service
    this.eventDetails = this.service.getEventDetailsJson(this.id);
    // If backend service call is activated in service
    // this.service.getEventDetails(this.id).subscribe(eventDetails => { this.eventDetails = eventDetails; });
  }
}
