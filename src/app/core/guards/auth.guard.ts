import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PlayerContextService } from 'src/app/core/services/player-context.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private playerContextService: PlayerContextService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        var player = this.playerContextService.player$.getValue();
        if (player != null) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url and return false
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
