import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ErrorResponse } from 'src/app/core/models/error-response.model';
import { EventView } from 'src/app/core/models/event-view.model';
import { LeagueEventView } from 'src/app/core/models/league-event-view.model';
import { SportsDataService } from 'src/app/core/services/sports-data.service';
import { environment } from 'src/environments/environment';
declare const Pusher: any;

@Injectable({
    providedIn: 'root'
})

/**
 * Sport league all data service class
 *
 * @author Francisco Franco
 * @version %I%, %G%
 * @since 1.0
 */

export class SportLeagueAllDataService {
    // Http subject observable stream
    private httpSubject$: Subject<any> = new Subject<any>();

    // Http observable stream 
    private httpOb$ = this.httpSubject$.asObservable();

    // Http subscription
    private httpSubscription: any;

    // ErrorResponse property
    private errorRsp: ErrorResponse;

    // Pusher property
    private pusher: any;

    // Channel name property
    private channelName: string;

    // Channel property
    public channel: any;

    /**
     * Creates an instance of SportLeagueAllDataService
     */
    public constructor(private sportsDataService: SportsDataService) {
        this.pusher = new Pusher(environment.pusherKey, { cluster: environment.pusherCluster });
        this.channelName = environment.basketballChannelName;
    }

    // ==========================
    // Public methods
    // ==========================

    /**
     * Subscribe to channel
     */
    public subscribeToChannel() {
        console.log("Subscribing to channelName:" + this.channelName);
        this.channel = this.pusher.subscribe(this.channelName);
    }

    /**
     * Unsubscribe http subscription
     */
    public unsubscribeHttpSubscription() {
        if (this.httpSubscription != null) {
            this.httpSubscription.unsubscribe();
        }
    }

    /**
     * Unsubscribe to channel
     */
    public unsubscribeToChannel() {
        this.pusher.unsubscribe(this.channelName);
        this.channel.unbind();
        Pusher.log = msg => { console.log(msg); };
    }

    /**
     * Get event list function
     * @param sportId
     * @returns EventView[]
     */
    public getEventList(sportId: number): EventView[] {
        // TEMP
        console.log('Invoked sport-league-all-data.service getEventList');

        var dataLength;
        var fixtureName;
        var eventViewArray = [];

        this.httpSubscription = this.httpOb$.subscribe(function (data: any) {
            if (data && data != null) {
                dataLength = Object.keys(data).length;
                console.log("dataLength:" + dataLength);

                for (let event of data) {
                    if (event.Fixture.Sport.Id == sportId) {
                        fixtureName = event.Fixture.Participants[0].Name + ' Vs ' + event.Fixture.Participants[1].Name;
                        eventViewArray.push({
                            eventId: event.FixtureId,
                            eventName: fixtureName,
                            eventTime: event.Fixture.FixtureStartDate,
                            participants: event.Fixture.Participants
                        });
                    }
                }
            }
            console.log(eventViewArray);
        });

        this.sportsDataService.getEventList(sportId, this.httpSubject$);
        return eventViewArray;
    }

    /**
     * Get league event list function
     * @param sportId
     * @returns Promise<any>
     */
    public async getLeagueEventList(sportId: number): Promise<any> {
        // TEMP
        console.log('Invoked sport-league-all-data.service getLeagueEventList sportId:' + sportId);

        var fixtureName;
        var leagueId;
        var leagueName;
        var eventViewArray = [];
        var leagueEventViewArray = [];
        var participantViewArray = [];
        var marketName;
        var marketView;
        var betOptionViewArray = [];
        var lineVal;
        let marketViewMap = new Map();
        let leagueEventViewMap = new Map();

        const promise = await this.sportsDataService.getSyncEventList(sportId, 0).then(value => {
            console.log("sport-league-all-data.service  value:" + value);
            if (value && value != null) {
                const json = JSON.stringify(value);
                var obj = JSON.parse(json);
                console.table(obj.Body.GetEventsResponse.Events);
                leagueEventViewMap = new Map();
                for (let event of obj.Body.GetEventsResponse.Events) {
                    eventViewArray = [];
                    leagueEventViewArray = [];
                    participantViewArray = [];
                    marketViewMap = new Map();
                    if (event.Fixture.Sport.Id == sportId) {
                        fixtureName = event.Fixture.Participants[0].Name + ' Vs ' + event.Fixture.Participants[1].Name;
                        leagueId = event.Fixture.League.Id;
                        leagueName = event.Fixture.League.Name;
                        if (leagueEventViewMap.has(leagueId)) {
                            eventViewArray = leagueEventViewMap.get(leagueId);
                        }
                        for (let participant of event.Fixture.Participants) {
                            participantViewArray.push({
                                id: participant.Id,
                                name: participant.Name,
                                position: participant.Position
                            })
                        }
                        for (let market of event.Markets) {
                            marketName = '';
                            marketView = {};
                            betOptionViewArray = [];
                            if (market.Name === 'Asian Handicap Including Overtime') {
                                marketName = "Spread";
                            }
                            else if (market.Name === '12 Including Overtime') {
                                marketName = "Money Line";
                            }
                            else if (market.Name === 'Under/Over Including Overtime') {
                                marketName = "Total Points";
                            }
                            for (let betOption of market.Bets) {
                                lineVal = '';
                                if (betOption.Line && betOption.Line != null) {
                                    if (betOption.Line > 0) {
                                        lineVal = '+' + betOption.Line;
                                    }
                                    else {
                                        lineVal = betOption.Line;
                                    }
                                }
                                betOptionViewArray.push({
                                    id: betOption.Id,
                                    name: betOption.Name,
                                    line: lineVal,
                                    price: betOption.Price,
                                    status: betOption.Status,
                                    lastUpdate: betOption.LastUpdate
                                });
                            }
                            marketView = { id: market.Id, name: marketName, betOptions: betOptionViewArray };
                            marketViewMap.set(market.Id, marketView);
                        }
                        eventViewArray.push({
                            eventId: event.FixtureId,
                            eventName: fixtureName,
                            leagueName: leagueName,
                            eventTime: event.Fixture.FixtureStartDate,
                            //eventTime:'1633222800000',  
                            participants: participantViewArray,
                            marketMap: marketViewMap
                        });
                        leagueEventViewMap.set(leagueId, eventViewArray);
                    }
                }
                for (let [key, value] of leagueEventViewMap) {
                    console.log(key, value);
                    leagueEventViewArray.push({ league: { id: key, name: value[0].leagueName }, events: value });
                }
            }
            console.log("leagueEventViewArray length:" + leagueEventViewArray.length);
            console.table(leagueEventViewArray);
            if (leagueEventViewArray.length > 0) {
                return Promise.resolve(leagueEventViewArray);
            }
            else {
                return Promise.reject("BASKETBALL DATA NOT AVAILABLE");
            }
        }, error => {
            this.errorRsp = error;
            console.error('ERROR IN getLeagueEventList', this.errorRsp);
            return Promise.reject(this.errorRsp);
        });
        return promise;
    }
}