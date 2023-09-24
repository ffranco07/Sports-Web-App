import { Fixture } from './fixture.model';
import { Market } from './market.model';

/**
 * Event model class
 *
 * @author Francisco Franco
 * @version %I%, %G%
 * @since 1.0
 */

export class Event {
    fixtureId: number;
    fixture: Fixture;
    markets: Market[];
}