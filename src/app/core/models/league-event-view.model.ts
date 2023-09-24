import { League } from './league.model';
import { EventView } from './event-view.model';

/**
 * LeagueEventView model class
 *
 * @author Francisco Franco
 * @version %I%, %G%
 * @since 1.0
 */

export class LeagueEventView {
    league: League;
    events: EventView[];
}