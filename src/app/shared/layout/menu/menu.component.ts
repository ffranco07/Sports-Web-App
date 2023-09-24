import { Component, OnInit } from '@angular/core';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { SessionService } from 'src/app/core/services/session.service';
import { CustomMenuItem } from 'src/app/core/models/menu-item.model';
import { MenuDataService } from 'src/app/shared/layout/menu/menu-data.service';
import { ApplicationStateService } from 'src/app/core/services/application-state.service';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.css']
})

/**
 * Menu component class
 *
 * @author Francisco Franco
 * @version %I%, %G%
 * @since 1.0
 */
export class MenuComponent implements OnInit {

    items: CustomMenuItem[];
    selectedItem: string;
    visible: boolean;

    constructor(private routeStateService: RouteStateService,
        private sessionService: SessionService,
        private menuDataService: MenuDataService,
        private applicationStateService: ApplicationStateService) { }

    ngOnInit() {
        // TEMP
        console.log('From menu.component.ts, about to invoke getMenuList');
        this.items = this.menuDataService.getMenuList();

        var that = this;
        this.menuDataService.toggleMenuBar.subscribe(function (data: any) {
            if (data && data != null) {
                that.visible = !that.visible;
            }
        });

        if (this.applicationStateService.getIsMobileResolution()) {
            this.visible = false;
        } else {
            this.visible = true;
        }

        var activeMenu = this.sessionService.getItem("active-menu");
        if (activeMenu) {
            this.selectedItem = activeMenu;
        } else {
            this.selectedItem = "Home";
        }
    }

    ngOnDestroy() {
        this.menuDataService.toggleMenuBar.observers.forEach(function (element) { element.complete(); });
    }

    // on menu click event
    onMenuClick(menu: CustomMenuItem) {
        // if child are available then open child
        if (menu.Childs != undefined || menu.Childs != null) {
            this.toggleSubMenu(menu);
            //return;
        }
        if (menu.RouterLink == undefined || menu.RouterLink == null || menu.RouterLink == "") {
            this.routeStateService.add("Error 404", "/error", null, false);
            //return;
        }
        this.selectedItem = menu.Label;
        this.sessionService.setItem("active-menu", menu.Label);
        console.log("menu.Label::" + menu.Label);
        console.log("menu.RouterLink:" + menu.RouterLink);
	// Title, path, data, isParent
        this.routeStateService.add(menu.Label, menu.RouterLink, menu.SportLeagues, true);
        // hide menu bar after menu click for mobile layout        
        setTimeout(() => {
            if (this.applicationStateService.getIsMobileResolution()) {
                this.visible = false;
            }
        }, 100);
    }

    // toggle sub menu on click
    toggleSubMenu(menu: CustomMenuItem) {
        menu.IsChildVisible = !menu.IsChildVisible;
    }

}
