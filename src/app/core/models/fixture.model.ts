import { Sport } from './sport.model';
import { Participant } from './participant.model';
import { League } from './league.model';

/**
 * Fixture model class
 *
 * @author Francisco Franco
 * @version %I%, %G%
 * @since 1.0
 */

export class Fixture {
    fixtureStartDate: Date;
    fixtureEndDate: Date;
    betStartDate: Date;
    sport: Sport;
    participants: Participant[];
    league: League;
    status: number;
    lastUpdate: Date;
}