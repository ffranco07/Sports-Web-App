import { Component, OnInit } from '@angular/core';
import { EventDataService } from 'src/app/features/event/event-data.service';
import { EventView } from 'src/app/core/models/event-view.model';
import { RouteStateService } from 'src/app/core/services/route-state.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: 'event-detail.component.html',
  styleUrls: ['event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: EventView;

  constructor(
    private eventService: EventDataService,
    private routeStateService: RouteStateService) { }

  ngOnInit() {
    var routeState = this.routeStateService.getCurrent();
    this.event = this.eventService.getEventById(routeState.data);
  }

  back() {
    this.routeStateService.loadPrevious();
  }
}
