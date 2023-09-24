import { SportLeagues } from './sport-leagues.model';

export class CustomMenuItem {
   Id: number;
   Label: string;
   Icon?: string;
   RouterLink: string;
   Childs: CustomMenuItem[];
   IsChildVisible: boolean;
   SportLeagues: SportLeagues;

   constructor() {
        this.Id = -9;
        this.Label = null;
        this.Icon = null;
        this.RouterLink = null;
        this.Childs = null;
        this.IsChildVisible = false;
	this.SportLeagues = null;
   }
}