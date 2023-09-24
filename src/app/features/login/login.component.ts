import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from 'src/app/core/services/player-data.service';
import { Player } from 'src/app/core/models/player.model';
import { ToastService } from 'src/app/core/services/toast.service';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { SessionService } from 'src/app/core/services/session.service';
import { TranslateService } from '@ngx-translate/core';
import { PlayerContextService } from 'src/app/core/services/player-context.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

/**
 * Login component class
 *
 * @author Francisco Franco
 * @version %I%, %G%
 * @since 1.0
 */
export class LoginComponent implements OnInit {

  playerName: string;

  password: string;

  locale: string;

  version: string;

  msgs: any[];

  constructor(
    private playerService: PlayerDataService,
    private toastService: ToastService,
    private routeStateService: RouteStateService,
    private sessionService: SessionService,
    public translate: TranslateService,
    private playerContextService: PlayerContextService
  ) { }

  ngOnInit() {
    this.playerName = "";
    this.password = "";
    this.locale = this.sessionService.getItem("ng-prime-language");
    this.version = environment.version;
    this.msgs = [{ severity: 'info', detail: 'PlayerName: admin' }, { severity: 'info', detail: 'Password: password' }];
  }

  onClickLogin() {
    let player: Player = this.playerService.getPlayerByPlayerNameAndPassword(this.playerName, this.password);
    if (player) {
      this.playerContextService.setPlayer(player);
      var sportLeagues = { sport: {id: environment.basketballId, name:'Basketball'}}
      this.routeStateService.add("Basketball - All", '/main/sport-league-all/Basketball', sportLeagues, true);
      return;
    }
    this.toastService.addSingle('error', '', 'Invalid player.');
    return;
  }

  onLanguageChange($event) {
    this.locale = $event.target.value;
    if (this.locale == undefined || this.locale == null || this.locale.length == 0) {
      this.locale = "en";
    }
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use(this.locale);
    this.sessionService.setItem("ng-prime-language", this.locale);
  }

}
