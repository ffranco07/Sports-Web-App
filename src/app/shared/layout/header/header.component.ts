import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { SessionService } from 'src/app/core/services/session.service';
import { Player } from 'src/app/core/models/player.model';
import { notification } from 'src/app/core/models/notification.model';
import { UserIdleService } from 'angular-user-idle';
import { ThemeService } from 'src/app/core/services/theme.service';
import { PlayerContextService } from 'src/app/core/services/player-context.service';
import { MenuDataService } from 'src/app/shared/layout/menu/menu-data.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})

/**
 * Header component class
 *
 * @author Francisco Franco
 * @version %I%, %G%
 * @since 1.0
 */
export class HeaderComponent implements OnInit {
  player: Player;

  displayNotifications: boolean;

  notifications: notification[];

  items: MenuItem[];

  constructor(
    private router: Router,
    private routeStateService: RouteStateService,
    private sessionService: SessionService,
    private userIdle: UserIdleService,
    private themeService: ThemeService,
    private playerContextService: PlayerContextService,
    private menuDataService: MenuDataService) {

    this.displayNotifications = false;

    var selectedTheme = this.sessionService.getItem("selected-theme");
    if (selectedTheme) {
      this.selectTheme(selectedTheme);
    }
  }

  ngOnInit() {
    this.player = this.sessionService.getItem("currentUser");
    this.notifications = [];
    for (var i = 1; i <= 5; i++) {
      var notificationObj = new notification("Message " + i, new Date(), null)
      this.notifications.push(notificationObj);
    }

    //Start watching for user inactivity.
    this.userIdle.startWatching();

    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe();

    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => {
      this.logout();
    });

     this.items = [
             {
                label: 'Odds Format',
                items: [
                    {label: 'American'},
                    {label: 'Fraction'},
                    {label: 'Decimal'}
                ]
            },
            {
                label: 'Support',
                items: [
		    {label: 'Email Us'},
                    {label: 'Call Us'}
                ]
            }
        ];
  }

  logout() {
    this.userIdle.stopWatching();
    this.routeStateService.removeAll();
    this.playerContextService.logout();
    this.sessionService.removeItem('active-menu');
    this.router.navigate(['/login']);
  }

  showNotificationSidebar() {
    this.displayNotifications = true;
  }

  toggleMenu() {
    this.menuDataService.toggleMenuBar.next(true);
  }

  selectTheme(theme: string) {
    this.sessionService.setItem("selected-theme", theme);
    this.themeService.selectTheme(theme);
  }

}
