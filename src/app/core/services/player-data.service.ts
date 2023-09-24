import { Injectable } from '@angular/core';
import { Player } from 'src/app/core/models/player.model';

@Injectable({
    providedIn: 'root',
})
/**
 * Player service class
 */
export class PlayerDataService {

    players: Player[] = [];

    constructor() {
        let player = {
            playerId: 1, playerName: "admin", password: "password", emailId: "admin@admin.com", birthDate: new Date('10/28/1992')
        };
        this.players.push(player);
    }

    /**
     * get player by player name and password
     * @param playerName 
     * @param password 
     */
    getPlayerByPlayerNameAndPassword(playerName: string, password: string): Player {
        let player: Player = null;
        this.players.forEach(element => {
            if (element.playerName === playerName && element.password === password) {
                player = element;
            }
        });
        return player;
    }

    /**
     * Add a player
     * @param playerName 
     * @param password 
     * @param emailId 
     * @param birthDate 
     */
    addPlayer(playerName: string, password: string, emailId: string, birthDate: Date): boolean {
        let playerId = this.players.length + 1;
        let player = new Player();
        player.playerId = playerId;
        player.playerName = playerName;
        player.password = password;
        player.emailId = emailId;
        player.birthDate = birthDate;
        this.players.push(player);
        return true;
    }
}