import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
import { CustomMenuItem } from 'src/app/core/models/menu-item.model';
import { Sport } from 'src/app/core/models/sport.model';
import { SportsDataService } from 'src/app/core/services/sports-data.service';

@Injectable({
    providedIn: 'root',
})

/**
 * Menu data service class
 *
 * @author Francisco Franco
 * @version %I%, %G%
 * @since 1.0
 */
export class MenuDataService {
    subject: Subject<any> = new Subject<any>();
    
    observable = this.subject.asObservable();

    public toggleMenuBar: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    errorMessage: '';

    constructor(private sportsDataService: SportsDataService) { }

    getMenuList(): CustomMenuItem[] {
        // TEMP
        console.log('Invoked getMenuList');

        var menuArray = [];
	var childMenuArray = [];
        var iconName;
        var menuRouterLink = '/main/sport-league-all';
        var childMenuRouterLink = '/main/sport-league';
	var sportsLength;
     
	this.observable.subscribe(function (data: any) {
          if (data && data != null) {
             sportsLength = Object.keys(data).length;
             console.log("sportsLength:" + sportsLength);
             console.log("data:" + data);
             console.log("menuRouterLink:" + menuRouterLink);
             console.log("childMenuRouterLink:" + childMenuRouterLink);
          
             for (let sportLeagues of data) {
               console.log("sportLeagues.sport.name:" + sportLeagues.sport.name);
               if (sportLeagues.sport.name === 'American Football') {
                  iconName = 'fas fa-football-ball';
               }
               else if (sportLeagues.sport.name === 'Basketball') {
                  iconName = 'fas fa-basketball-ball';
               }
               else if (sportLeagues.sport.name == 'Baseball') {
                  iconName = 'fas fa-baseball-ball';
               }
               else if (sportLeagues.sport.name == 'Football') {
                  iconName = 'fas fa-futbol';
               }
               else if (sportLeagues.sport.name == 'UFC/Boxing') {
                  iconName = 'fas fa-fist-raised';
               }
               else {
                  iconName = '';
               }
               childMenuArray = [];
	       for (let league of sportLeagues.leagues) {
                  childMenuArray.push({
		     Id: league.setId,
                     Label: league.name,
                     Icon: iconName,
                     RouterLink: childMenuRouterLink + '/' + league.name,
                     Childs: null,
                     IsChildVisible: false,
		     SportLeagues: { sport: sportLeagues.sport, leagues: [league] }
                  });
	       }
               menuArray.push({
                 Id: sportLeagues.sport.id,
                 Label: sportLeagues.sport.name,
                 Icon: iconName,
                 RouterLink: menuRouterLink + '/' + sportLeagues.sport.name,
                 Childs: childMenuArray,
                 IsChildVisible: false,
		 SportLeagues: sportLeagues
               });
             }
           console.log(menuArray);
          }
       });

       //this.sportsDataService.getSportList(this.subject);
       this.sportsDataService.getSportLeaguesList(this.subject);
       return menuArray;
      }
}