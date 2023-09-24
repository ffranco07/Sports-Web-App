import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SportsServiceMessage } from '../models/sports-service-message.model';
import { Header } from '../models/header.model';
import { Body } from '../models/body.model';
import { Sport } from '../models/sport.model';
import { SportLeagues } from '../models/sport-leagues.model';
import { Event } from '../models/event.model';
import { ErrorResponse } from '../models/error-response.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})

/**
 * Sports data service class
 *
 * @author Francisco Franco
 * @version %I%, %G%
 * @since 1.0
 */

export class SportsDataService {
    private sportsSvcMsg: SportsServiceMessage = { header: { 'applicationVersion': 1.0, 'currentTime': 1540846607622, 'messageId': -9, 'channelId': 1, 'sourceId': '1111111', 'posId': '7001' }, body: {} };

    private events: Event[] = [];

    private errorRsp: ErrorResponse;

    /**
     * Creates an instance of SportsDataService
     */

    public constructor(private http: HttpClient) { }


    /**
     * Get sport list function
     * @param subject
     * @returns Sport[]
     */

    public getSportList(subject: Subject<any>): Sport[] {
        // DEBUG
        console.log('Invoked getSportList');

        //const httpHeaders = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials': 'true', 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS' };
        //this.http.post<any>(environment.apiUrl + "/getSports", JSON.stringify(body), {'headers':httpHeaders}).subscribe({
        //next: data => {
        //  console.log('In post response IMPL');
        //this.sports = data.Body.GetSportsResponse.Sports;
        // // TEMP
        // console.log("Sports:" + this.sports);
        //},
        //error: error => {
        //  this.errorMessage = error.message;
        //console.error('ERROR IN getSportList', error);
        //}
        //})

        this.sportsSvcMsg.header.messageId = 65;
        this.sportsSvcMsg.body = {};
        // DEBUG
        console.table(this.sportsSvcMsg);
	
	var sportsRspArray = [];
	var sportsArray = [];
	var sportName = '';	

        this.http.post<any>(environment.apiUrl + "/getSports", this.sportsSvcMsg).subscribe({
            next: data => {
                console.log('In http post response getSportsList() IMPL');
		sportsRspArray = data.Body.GetSportsResponse.Sports;
		// DEBUG
		//console.table(sportsRspArray);
		for (let sport of sportsRspArray) {
		   // DEBUG
		   //console.log("Sport name:" + sport.Name);
		   if (sport.Name === 'Boxing') {
		      sportName = 'UFC/Boxing';
		   }
		   else {
                      sportName = sport.Name;
		   }
		   sportsArray.push({
                            id: sport.Id,
                            name: sportName
                   });	
                }
		// DEBUG
                console.table(sportsArray);
                subject.next(sportsArray);
                //subject.unsubscribe();
            },
            error: error => {
                this.errorRsp = error;
                console.error('ERROR IN getSportList', this.errorRsp);
            }
        })
        return sportsArray;
    }

   /**
    * Get sport leagues list function
    * @param subject
    * @returns SportLeagues[]
    */

    public getSportLeaguesList(subject: Subject<any>): SportLeagues[] {
        // DEBUG
        console.log('Invoked getSportLeaguesList');

        this.sportsSvcMsg.header.messageId = 67;
        this.sportsSvcMsg.body = {};
        // DEBUG
        console.table(this.sportsSvcMsg);
	
        var sportLeaguesRspArray = [];
        var sportObj = {};
        var leaguesArray = [];
	var sportLeaguesArray = [];
        var sportName = '';	

        this.http.post<any>(environment.apiUrl + "/getSportsLeagues", this.sportsSvcMsg).subscribe({
            next: data => {
                console.log('In http post response getSportLeaguesList() IMPL');
		sportLeaguesRspArray = data.Body.GetSportsLeaguesResponse.SportsLeagues;
		// DEBUG
		console.table(sportLeaguesArray);
                for (let sportLeagues of sportLeaguesRspArray) {
		   // DEBUG
		   //console.log("Sport name:" + sport
		   if (sportLeagues.Sport.Name === 'Boxing') {
		      sportName = 'UFC/Boxing';
		   }
		   else {
                      sportName = sportLeagues.Sport.Name;
		   }
                   sportObj = { id: sportLeagues.Sport.Id, name: sportName};
                   leaguesArray = [];
                   for (let league of sportLeagues.Leagues) {
		      leaguesArray.push({
                         id: league.Id,
                         name: league.Name,
                         setId: league.SetId
                      });	
                   }
                   sportLeaguesArray.push({
			sport: sportObj,
                        leagues: leaguesArray
                   });
                }
                subject.next(sportLeaguesArray);
            },
            error: error => {
                this.errorRsp = error;
                console.error('ERROR IN getSportLeaguesList', this.errorRsp);
            }
        })
        return sportLeaguesArray;
    }

    /**
     * Get event list function
     * @param sportId
     * @param subject
     * @returns Event[]
     */

    public getEventList(sportId: number, subject: Subject<any>): Event[] {
        // DEBUG
        console.log('Invoked getEventList');

        this.sportsSvcMsg.header.messageId = 63;
        this.sportsSvcMsg.body.getEventsRequest = { 'sportId': sportId};

        // DEBUG
        console.table(this.sportsSvcMsg);

        this.http.post<any>(environment.apiUrl + "/getEvents", this.sportsSvcMsg).subscribe({
            next: data => {
                console.log('In http post response getEventsList IMPL');
                this.events = data.Body.GetEventsResponse.Events;
                // TEMP
                console.table(this.events);
                subject.next(this.events);
                //subject.complete();
                //subject.unsubscribe();
            },
            error: error => {
                this.errorRsp = error;
                console.error('ERROR IN getEventList', this.errorRsp);
            }
        })
        return this.events;
    }

    /**
     * Get sync event list function
     * @param sportId
     * @param subject
     * @returns Promise<any>
     */

    public async getSyncEventList(sportId: number, setId: number): Promise<any> {
        // DEBUG
        console.log('Invoked getSyncEventList');

        // Set request message header id
        this.sportsSvcMsg.header.messageId = 63;
        //this.sportsSvcMsg.header.messageId = 999;

        // Set get events request message
        this.sportsSvcMsg.body.getEventsRequest = { 'sportId': sportId, 'setId': setId };

        // DEBUG
        console.table(this.sportsSvcMsg);

        // Wait for HTTP post response
        //const promise = await this.http.post<any>(environment.apiUrl + "/getEvents", this.sportsSvcMsg).pipe(delay(1000)).toPromise();
        const promise = await this.http.post<any>(environment.apiUrl + "/getEvents", this.sportsSvcMsg).toPromise().then(value => {
            console.log("sports-data-service.ts value:" + value);
            const json = JSON.stringify(value);
            console.table(json);
            return Promise.resolve(value);
        }, error => {
            this.errorRsp = error;
            console.error('ERROR IN getSyncEventList', this.errorRsp)
            return Promise.reject(this.errorRsp);
        });
        return promise;
    }
}