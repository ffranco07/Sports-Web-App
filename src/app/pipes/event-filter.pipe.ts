import { Pipe, PipeTransform } from '@angular/core';
import { EventView } from 'src/app/core/models/event-view.model';

@Pipe({ name: 'eventFilter' })
export class EventFilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param events list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(events: EventView[], searchText: string): any[] {
    if (!events) {
      return [];
    }
    if (!searchText) {
      return events;
    }
    searchText = searchText.toLowerCase();

    return events.filter(it => {
        const event = JSON.stringify(it);
        // DEBUG
	console.log("searchText:" + searchText);
        // DEBUG
	console.table(event);
        return event.toLowerCase().includes(searchText);
    });
  }
}
