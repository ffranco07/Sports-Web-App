import { Participant } from './participant.model';
import { Market } from './market.model';

/**
 * EventView model class
 *
 * @author Francisco Franco
 * @version %I%, %G%
 * @since 1.0
 */

export class EventView {
    leagueName?: string;
    eventId: number;
    eventName: string;
    eventTime: string;
    participants: Participant[];
    marketMap: Map<number, Market>;
}