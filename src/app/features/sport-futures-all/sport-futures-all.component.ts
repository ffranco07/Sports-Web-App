import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Event, NavigationEnd } from "@angular/router";
import { SportFuturesAllDataService } from 'src/app/features/sport-futures-all/sport-futures-all-data.service';
import { LeagueEventView } from 'src/app/core/models/league-event-view.model';
import { RouteStateService } from 'src/app/core/services/route-state.service';

@Component({
  selector: 'app-sport-futures-all',
  templateUrl: 'sport-futures-all.component.html',
  styleUrls: ['sport-futures-all.component.css']
})

/**
 * Sport futures all component class
 *
 * @author Francisco Franco
 * @version %I%, %G%
 * @since 1.0
 */

export class SportFuturesAllComponent implements OnInit {
  // Router subscription
  private routerSubscription: any;

  // Columns property
  public columns: any[];

  // Page size property
  public pageSize: number = 10;

  // Sport name property
  public sportName: string;

  // League events property
  public leagueEvents: LeagueEventView[];

  // Search events text
  public searchText = '';

  /**
   * Constructor
   */
  constructor(
    private routeStateService: RouteStateService,
    private sportFuturesAllService: SportFuturesAllDataService) { }

  // ==========================
  // Private methods
  // ==========================

  /**
   * Process channel message
   */
  private processChannelMessage(data: any) {
    const json = JSON.stringify(data);
    console.log("CHANNEL MESSAGE:" + json);
    var obj = JSON.parse(json);
    var deltaLeagueId = obj.leagueId;
    var deltaFixtureId = obj.fixtureId;
    var deltaMarketId = obj.deltaMarket.id;
    console.log("deltaLeagueId:" + deltaLeagueId);
    console.log("deltaFixtureId:" + deltaFixtureId);
    console.log("deltaMarketId:" + deltaMarketId);
    for (let leagueEvent of this.leagueEvents) {
      if (leagueEvent.league.id == deltaLeagueId) {
        for (let eventView of leagueEvent.events) {
          if (eventView.eventId == deltaFixtureId) {
            console.log("EventView eventName:" + eventView.eventName);
            console.log("EventView marketMap:" + eventView.marketMap);
            //eventView.marketMap.forEach((value: any, key: number) => {
            // console.log(key, value);
            //});
            for (let deltaBetOption of obj.deltaMarket.deltaBets) {
              for (let betOptionView of eventView.marketMap.get(deltaMarketId).betOptions) {
                if (betOptionView.id == deltaBetOption.id) {
                  betOptionView.price = deltaBetOption.price;
                  console.log("ODDS CHANGED FOR betOptionView.name:" + betOptionView.name);
                  break;
                }
              }
            }
          }
        }
      }
    }
  }

 /**
  * Fetch league event data
  */
  private async fetchData() {
    var routeState = this.routeStateService.getCurrent();
    this.sportName = routeState.data.sport.name + ' - All';
    const promise = await this.sportFuturesAllService.getLeagueEventList(routeState.data.sport.id).then(value => {
      console.log("sport-futures-all.component value:" + value);
      if (value && value != null) {
        const json = JSON.stringify(value);
        var obj = JSON.parse(json);
        console.table(obj);
        this.leagueEvents = value;
      }
    }, error => {
      console.error('ERROR in fetchData()', error);
    });
  }

  // ==========================
  // Public methods
  // ==========================

  /**
   * Angular init method
   */
  public async ngOnInit() {
    this.columns = [
      { field: 'eventId', header: 'Event Id' },
      { field: 'eventName', header: 'Event Name' },
      { field: 'eventTime', header: 'Event Time' },
      { field: 'eventDetails', header: 'Event Details' }
    ];

    this.fetchData();	

    this.sportFuturesAllService.subscribeToChannel();
    this.sportFuturesAllService.channel.bind('NCAA Basketball', data => { this.processChannelMessage(data) });

    // Router events subscription
    this.routerSubscription = this.routeStateService.router.events.subscribe((event: Event) => {
    if (event instanceof NavigationEnd) {
        let url : string = this.routeStateService.router.url;
        console.log("sport-futures-component navigated url:" + url+ " MAYBE NEED TO RETURN PROMISE FOR DATA");
	this.fetchData();
      }
    });
  }

  /**
   * Angular destroy method
   */
  public ngOnDestroy() {
    // Prevent memory leak when component destroyed
    this.sportFuturesAllService.unsubscribeHttpSubscription();
    this.sportFuturesAllService.unsubscribeToChannel();
    this.routerSubscription.unsubscribe();
  }

  /**
   * Navigate to event details method
   */
  public goToEventDetails(eventId: number) {
    this.routeStateService.add("Event details", "/main/event/event-detail", eventId, false);
  }
}



