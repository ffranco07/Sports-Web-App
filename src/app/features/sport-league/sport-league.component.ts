import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Event, NavigationEnd } from "@angular/router";
import { SportLeagueDataService } from 'src/app/features/sport-league/sport-league-data.service';
import { LeagueEventView } from 'src/app/core/models/league-event-view.model';
import { RouteStateService } from 'src/app/core/services/route-state.service';

@Component({
  selector: 'app-sport-league',
  templateUrl: 'sport-league.component.html',
  styleUrls: ['sport-league.component.css']
})

/**
 * Sport league component class
 *
 * @author Francisco Franco
 * @version %I%, %G%
 * @since 1.0
 */

export class SportLeagueComponent implements OnInit {
  // Router subscription
  private routerSubscription: any;

  // Columns property
  public columns: any[];

  // Page size property
  public pageSize: number = 10;

  // Sport name property
  public sportName: string;

  // League event property
  public leagueEvent: LeagueEventView;

  // Search events text
  public searchText = '';

  /**
   * Constructor
   */
  constructor(
    private routeStateService: RouteStateService,
    private sportLeagueService: SportLeagueDataService) { 
  }

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
    if (this.leagueEvent.league.id == deltaLeagueId) {
      for (let eventView of this.leagueEvent.events) {
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

 /**
  * Fetch league event data
  */
  private async fetchData() {
    var routeState = this.routeStateService.getCurrent();
    this.sportName = routeState.data.sport.name + ' - ' + routeState.data.leagues[0].name;
    const promise = await this.sportLeagueService.getLeagueEventList(routeState.data.sport.id, routeState.data.leagues[0].setId).then(value => {
      console.log("sport-league.component value:" + value);
      if (value && value != null) {
        const json = JSON.stringify(value);
        var obj = JSON.parse(json);
        console.table(obj);
        this.leagueEvent = value[0];
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

    this.sportLeagueService.subscribeToChannel();
    this.sportLeagueService.channel.bind('NCAA Basketball', data => { this.processChannelMessage(data) });
  
    // Router events subscription
    this.routerSubscription = this.routeStateService.router.events.subscribe((event: Event) => {
    if (event instanceof NavigationEnd) {
        let url : string = this.routeStateService.router.url;
        console.log("sport-league-component navigated url:" + url+ " MAYBE NEED TO RETURN PROMISE FOR DATA");
	this.fetchData();
      }
    });
  }

  /**
   * Angular destroy method
   */
  public ngOnDestroy() {
    // Prevent memory leak when component destroyed
    this.sportLeagueService.unsubscribeHttpSubscription();
    this.sportLeagueService.unsubscribeToChannel();
    this.routerSubscription.unsubscribe();
  }

  /**
   * Navigate to event details method
   */
  public goToEventDetails(eventId: number) {
    this.routeStateService.add("Event details", "/main/event/event-detail", eventId, false);
  }
}
