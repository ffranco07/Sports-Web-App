import { Component, OnInit } from '@angular/core';
import { EventDataService } from 'src/app/features/event/event-data.service';
import { Router } from '@angular/router';
import { RouteStateService } from 'src/app/core/services/route-state.service';

@Component({
  selector: 'app-event-list',
  templateUrl: 'event-list.component.html',
  styleUrls: ['event-list.component.css']
})
export class EventListComponent implements OnInit {

  columns: any[];

  events: any[];

  constructor(private eventService: EventDataService, private routeStateService: RouteStateService, private router: Router) {
    this.columns = [
      { field: 'Name', header: 'Name' },
      { field: 'Description', header: 'Description' }];
  }

  ngOnInit() {
    this.events = this.eventService.getAllEvents();
  }

  goToEventDetails(event: number) {
    this.routeStateService.add("Event details", "/main/event/event-detail", event, false);
  }

}
