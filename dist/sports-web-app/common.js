(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/core/models/player.model.ts":
/*!*********************************************!*\
  !*** ./src/app/core/models/player.model.ts ***!
  \*********************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
class Player {
    constructor() {
        this.playerId = null;
        this.playerName = null;
        this.password = null;
        this.emailId = null;
        this.birthDate = null;
    }
}


/***/ }),

/***/ "./src/app/core/services/player-data.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/player-data.service.ts ***!
  \******************************************************/
/*! exports provided: PlayerDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerDataService", function() { return PlayerDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_models_player_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/models/player.model */ "./src/app/core/models/player.model.ts");



/**
 * Player service class
 */
class PlayerDataService {
    constructor() {
        this.players = [];
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
    getPlayerByPlayerNameAndPassword(playerName, password) {
        let player = null;
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
    addPlayer(playerName, password, emailId, birthDate) {
        let playerId = this.players.length + 1;
        let player = new src_app_core_models_player_model__WEBPACK_IMPORTED_MODULE_1__["Player"]();
        player.playerId = playerId;
        player.playerName = playerName;
        player.password = password;
        player.emailId = emailId;
        player.birthDate = birthDate;
        this.players.push(player);
        return true;
    }
}
PlayerDataService.ɵfac = function PlayerDataService_Factory(t) { return new (t || PlayerDataService)(); };
PlayerDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlayerDataService, factory: PlayerDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/services/toast.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/toast.service.ts ***!
  \************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");




/**
 * Toast service class
 * This class provides methods to add single, multiple alerts as a toast
 */
class ToastService {
    constructor(messageService) {
        this.messageService = messageService;
    }
    /**
     * add single toast message
     * @param severity Severity level of the message, valid values are "success", "info", "warn" and "error"
     * @param summary Summary text of the message.
     * @param detail Detail text of the message.
     */
    addSingle(severity, summary, detail) {
        this.messageService.add({ severity: severity, summary: summary, detail: detail });
    }
    /**
     * add multiple toast messages
     * @param messages
     * array of message type {severity:'success', summary:'Service Message', detail:'Via MessageService'}
     */
    addMultiple(messages) {
        this.messageService.addAll(messages);
    }
    /**
     * clear all toast messages
     */
    clear() {
        this.messageService.clear();
    }
}
ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"])); };
ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/event/event-data.service.ts":
/*!******************************************************!*\
  !*** ./src/app/features/event/event-data.service.ts ***!
  \******************************************************/
/*! exports provided: EventDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDataService", function() { return EventDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EventDataService {
    constructor() {
        this.events = [
            { EventId: 1001, EventName: "Panama Vs Mexico" },
            { EventId: 1002, EventName: "Costa Rica Vs Jamaica" },
            { EventId: 2001, EventName: "Brooklyn Nets Vs Milwaukee Bucks" },
            { EventId: 2002, EventName: "Golden State Warriors Vs Los Angeles Lakers" },
            { EventId: 3001, EventName: "Dallas Cowboys Vs Tampa Bay Buccaneers" },
            { EventId: 3002, EventName: "Baltimore Ravens Vs Las Vegas Raiders" },
            { EventId: 4001, EventName: "Los Angeles Dodgers Vs St. Louis Cardinals" },
            { EventId: 4002, EventName: "Los Angeles Angels Vs San Diego Padres" },
            { EventId: 5001, EventName: "Gustavo Lopez Vs Heili Alateng" },
            { EventId: 5002, EventName: "Erin Blanchfield Vs Sarah Alpar" }
        ];
    }
    getAllEvents() {
        return this.events;
    }
    getEventById(id) {
        var data;
        this.events.forEach(element => {
            if (element.EventId === id) {
                data = element;
            }
        });
        return data;
    }
    getEventByName(name) {
        var data;
        this.events.forEach(element => {
            if (element.EventName === name) {
                data = element;
            }
        });
        return data;
    }
}
EventDataService.ɵfac = function EventDataService_Factory(t) { return new (t || EventDataService)(); };
EventDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EventDataService, factory: EventDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/layout/header-breadcrumb/header-breadcrumb.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/layout/header-breadcrumb/header-breadcrumb.component.ts ***!
  \********************************************************************************/
/*! exports provided: HeaderBreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderBreadcrumbComponent", function() { return HeaderBreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_route_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/route-state.service */ "./src/app/core/services/route-state.service.ts");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/breadcrumb */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-breadcrumb.js");





/**
 * Header breadcrumb component class
 *
 * @author Francisco Franco
 * @version %I%, %G%
 * @since 1.0
 */
class HeaderBreadcrumbComponent {
    constructor(routeStateService) {
        this.routeStateService = routeStateService;
        this.items = [];
    }
    ngOnInit() {
        var routes = this.routeStateService.getAll();
        routes.forEach(route => {
            this.items.push({ label: route.title, command: () => { this.onClickBreadcrumb(route.id); } });
        });
        this.home = { icon: 'pi' };
    }
    onClickBreadcrumb(id) {
        this.routeStateService.loadById(id);
    }
}
HeaderBreadcrumbComponent.ɵfac = function HeaderBreadcrumbComponent_Factory(t) { return new (t || HeaderBreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_route_state_service__WEBPACK_IMPORTED_MODULE_1__["RouteStateService"])); };
HeaderBreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderBreadcrumbComponent, selectors: [["app-header-breadcrumb"]], decls: 1, vars: 2, consts: [["styleClass", "header-breadcrumb", 3, "model", "home"]], template: function HeaderBreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-breadcrumb", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.items)("home", ctx.home);
    } }, directives: [primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvaGVhZGVyLWJyZWFkY3J1bWIvaGVhZGVyLWJyZWFkY3J1bWIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderBreadcrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-breadcrumb',
                templateUrl: 'header-breadcrumb.component.html',
                styleUrls: ['header-breadcrumb.component.css']
            }]
    }], function () { return [{ type: src_app_core_services_route_state_service__WEBPACK_IMPORTED_MODULE_1__["RouteStateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/layout/header-breadcrumb/header-breadcrumb.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/layout/header-breadcrumb/header-breadcrumb.module.ts ***!
  \*****************************************************************************/
/*! exports provided: HeaderBreadCrumbModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderBreadCrumbModule", function() { return HeaderBreadCrumbModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_layout_header_breadcrumb_header_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/layout/header-breadcrumb/header-breadcrumb.component */ "./src/app/shared/layout/header-breadcrumb/header-breadcrumb.component.ts");
/* harmony import */ var src_app_app_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.common.module */ "./src/app/app.common.module.ts");




class HeaderBreadCrumbModule {
}
HeaderBreadCrumbModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HeaderBreadCrumbModule });
HeaderBreadCrumbModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HeaderBreadCrumbModule_Factory(t) { return new (t || HeaderBreadCrumbModule)(); }, imports: [[
            src_app_app_common_module__WEBPACK_IMPORTED_MODULE_2__["AppCommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderBreadCrumbModule, { declarations: [src_app_shared_layout_header_breadcrumb_header_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["HeaderBreadcrumbComponent"]], imports: [src_app_app_common_module__WEBPACK_IMPORTED_MODULE_2__["AppCommonModule"]], exports: [src_app_shared_layout_header_breadcrumb_header_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["HeaderBreadcrumbComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderBreadCrumbModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    src_app_app_common_module__WEBPACK_IMPORTED_MODULE_2__["AppCommonModule"]
                ],
                declarations: [
                    src_app_shared_layout_header_breadcrumb_header_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["HeaderBreadcrumbComponent"],
                ],
                exports: [
                    src_app_shared_layout_header_breadcrumb_header_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["HeaderBreadcrumbComponent"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map