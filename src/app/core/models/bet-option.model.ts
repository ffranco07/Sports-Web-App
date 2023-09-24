/**
 * BetOption model class
 *
 * @author Francisco Franco
 * @version %I%, %G%
 * @since 1.0
 */

export class BetOption {
    id: number
    name: string;
    line?: number;
    price: number;
    priceUS: number;
    status: number;
    lastUpdate: Date;
}