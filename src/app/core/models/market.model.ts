import { BetOption } from './bet-option.model';

/**
 * Market model class
 *
 * @author Francisco Franco
 * @version %I%, %G%
 * @since 1.0
 */

export class Market {
    id: number;
    name: string;
    betOptions: BetOption[];
}