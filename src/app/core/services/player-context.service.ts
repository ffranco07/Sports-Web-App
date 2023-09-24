import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { SessionService } from 'src/app/core/services/session.service';

const defaultPlayer = null;

@Injectable({
    providedIn: 'root',
})
export class PlayerContextService {
    public player$ = new BehaviorSubject(defaultPlayer);

    constructor(private sessionService: SessionService) {
        var data = this.sessionService.getItem("currentPlayer");
        if (data != null) {
            this.player$.next(data);
        }
    }

    public setPlayer(player: any) {
        this.sessionService.setItem("currentPlayer", player);
        this.player$.next(player);
    }

    public logout() {
        this.sessionService.removeItem("currentPlayer");
        this.player$.next(defaultPlayer);
    }

}