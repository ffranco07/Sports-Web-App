import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class EventDataService {

    events: any[];

    constructor() {
        this.events = [
            { EventId: 1001, EventName: "Panama Vs Mexico"},
            { EventId: 1002, EventName: "Costa Rica Vs Jamaica"},
            { EventId: 2001, EventName: "Brooklyn Nets Vs Milwaukee Bucks"},
            { EventId: 2002, EventName: "Golden State Warriors Vs Los Angeles Lakers"},
            { EventId: 3001, EventName: "Dallas Cowboys Vs Tampa Bay Buccaneers"},
            { EventId: 3002, EventName: "Baltimore Ravens Vs Las Vegas Raiders"},
            { EventId: 4001, EventName: "Los Angeles Dodgers Vs St. Louis Cardinals"},
            { EventId: 4002, EventName: "Los Angeles Angels Vs San Diego Padres"},
            { EventId: 5001, EventName: "Gustavo Lopez Vs Heili Alateng"},
            { EventId: 5002, EventName: "Erin Blanchfield Vs Sarah Alpar"}];
    }

    getAllEvents() {
        return this.events;
    }

    getEventById(id: number) {
        var data;
        this.events.forEach(element => {
            if (element.EventId === id) {
                data = element;
            }
        });
        return data;
    }

    getEventByName(name: string) {        
        var data;
        this.events.forEach(element => {
            if (element.EventName === name) {
                data = element;
            }
        });
        return data;
    }
}