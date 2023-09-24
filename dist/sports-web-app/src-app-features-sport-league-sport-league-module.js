(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-features-sport-league-sport-league-module"],{

/***/ "./src/app/features/sport-league/sport-league-data.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/sport-league/sport-league-data.service.ts ***!
  \********************************************************************/
/*! exports provided: SportLeagueDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportLeagueDataService", function() { return SportLeagueDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_core_services_sports_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/sports-data.service */ "./src/app/core/services/sports-data.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






/**
 * Sport league data service class
 *
 * @author Francisco Franco
 * @version %I%, %G%
 * @since 1.0
 */
class SportLeagueDataService {
    /**
     * Creates an instance of SportLeagueDataService
     */
    constructor(sportsDataService) {
        this.sportsDataService = sportsDataService;
        // Http subject observable stream
        this.httpSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // Http observable stream 
        this.httpOb$ = this.httpSubject$.asObservable();
        this.pusher = new Pusher(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].pusherKey, { cluster: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].pusherCluster });
        this.channelName = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].basketballChannelName;
    }
    // ==========================
    // Public methods
    // ==========================
    /**
     * Subscribe to channel
     */
    subscribeToChannel() {
        console.log("Subscribing to channelName:" + this.channelName);
        this.channel = this.pusher.subscribe(this.channelName);
    }
    /**
     * Unsubscribe http subscription
     */
    unsubscribeHttpSubscription() {
        if (this.httpSubscription != null) {
            this.httpSubscription.unsubscribe();
        }
    }
    /**
     * Unsubscribe to channel
     */
    unsubscribeToChannel() {
        this.pusher.unsubscribe(this.channelName);
        this.channel.unbind();
        Pusher.log = msg => { console.log(msg); };
    }
    /**
     * Get league event list function
     * @param sportId
     * @returns Promise<any>
     */
    getLeagueEventList(sportId, setId) {
        return __awaiter(this, void 0, void 0, function* () {
            // TEMP
            console.log('Invoked sport-league-data.service getLeagueEventList sportId:' + sportId + ' setId:' + setId);
            var fixtureName;
            var leagueId;
            var leagueName;
            var eventViewArray = [];
            var leagueEventViewArray = [];
            var participantViewArray = [];
            var marketName;
            var marketView;
            var betOptionViewArray = [];
            var lineVal;
            let marketViewMap = new Map();
            let leagueEventViewMap = new Map();
            const promise = yield this.sportsDataService.getSyncEventList(sportId, setId).then(value => {
                console.log("sport-league-data.service  value:" + value);
                if (value && value != null) {
                    const json = JSON.stringify(value);
                    var obj = JSON.parse(json);
                    console.table(obj.Body.GetEventsResponse.Events);
                    leagueEventViewMap = new Map();
                    for (let event of obj.Body.GetEventsResponse.Events) {
                        eventViewArray = [];
                        leagueEventViewArray = [];
                        participantViewArray = [];
                        marketViewMap = new Map();
                        if (event.Fixture.Sport.Id == sportId) {
                            fixtureName = event.Fixture.Participants[0].Name + ' Vs ' + event.Fixture.Participants[1].Name;
                            leagueId = event.Fixture.League.Id;
                            leagueName = event.Fixture.League.Name;
                            if (leagueEventViewMap.has(leagueId)) {
                                eventViewArray = leagueEventViewMap.get(leagueId);
                            }
                            for (let participant of event.Fixture.Participants) {
                                participantViewArray.push({
                                    id: participant.Id,
                                    name: participant.Name,
                                    position: participant.Position
                                });
                            }
                            for (let market of event.Markets) {
                                marketName = '';
                                marketView = {};
                                betOptionViewArray = [];
                                if (market.Name === 'Asian Handicap Including Overtime') {
                                    marketName = "Spread";
                                }
                                else if (market.Name === '12 Including Overtime') {
                                    marketName = "Money Line";
                                }
                                else if (market.Name === 'Under/Over Including Overtime') {
                                    marketName = "Total Points";
                                }
                                for (let betOption of market.Bets) {
                                    lineVal = '';
                                    if (betOption.Line && betOption.Line != null) {
                                        if (betOption.Line > 0) {
                                            lineVal = '+' + betOption.Line;
                                        }
                                        else {
                                            lineVal = betOption.Line;
                                        }
                                    }
                                    betOptionViewArray.push({
                                        id: betOption.Id,
                                        name: betOption.Name,
                                        line: lineVal,
                                        price: betOption.Price,
                                        status: betOption.Status,
                                        lastUpdate: betOption.LastUpdate
                                    });
                                }
                                marketView = { id: market.Id, name: marketName, betOptions: betOptionViewArray };
                                marketViewMap.set(market.Id, marketView);
                            }
                            eventViewArray.push({
                                eventId: event.FixtureId,
                                eventName: fixtureName,
                                leagueName: leagueName,
                                eventTime: event.Fixture.FixtureStartDate,
                                //eventTime:'1633222800000',  
                                participants: participantViewArray,
                                marketMap: marketViewMap
                            });
                            leagueEventViewMap.set(leagueId, eventViewArray);
                        }
                    }
                    for (let [key, value] of leagueEventViewMap) {
                        console.log(key, value);
                        leagueEventViewArray.push({ league: { id: key, name: value[0].leagueName }, events: value });
                    }
                }
                console.log("leagueEventViewArray length:" + leagueEventViewArray.length);
                console.table(leagueEventViewArray);
                if (leagueEventViewArray.length > 0) {
                    return Promise.resolve(leagueEventViewArray);
                }
                else {
                    return Promise.reject("BASKETBALL DATA NOT AVAILABLE");
                }
            }, error => {
                this.errorRsp = error;
                console.error('ERROR IN getLeagueEventList', this.errorRsp);
                return Promise.reject(this.errorRsp);
            });
            return promise;
        });
    }
}
SportLeagueDataService.ɵfac = function SportLeagueDataService_Factory(t) { return new (t || SportLeagueDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_core_services_sports_data_service__WEBPACK_IMPORTED_MODULE_2__["SportsDataService"])); };
SportLeagueDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SportLeagueDataService, factory: SportLeagueDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SportLeagueDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_core_services_sports_data_service__WEBPACK_IMPORTED_MODULE_2__["SportsDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/sport-league/sport-league.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/sport-league/sport-league.component.ts ***!
  \*****************************************************************/
/*! exports provided: SportLeagueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportLeagueComponent", function() { return SportLeagueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_features_sport_league_sport_league_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/features/sport-league/sport-league-data.service */ "./src/app/features/sport-league/sport-league-data.service.ts");
/* harmony import */ var src_app_core_services_route_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/route-state.service */ "./src/app/core/services/route-state.service.ts");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-card.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-panel.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










function SportLeagueComponent_div_4_ng_container_63_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Spread");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const entry_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r26.value.betOptions[0].line, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r26.value.betOptions[0].price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r26.value.betOptions[1].line, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r26.value.betOptions[1].price, "");
} }
function SportLeagueComponent_div_4_ng_container_63_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Money Line");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const entry_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r26.value.betOptions[0].price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r26.value.betOptions[1].price, "");
} }
function SportLeagueComponent_div_4_ng_container_63_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Total Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Over 54.5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Under 54.5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const entry_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r26.value.betOptions[0].price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r26.value.betOptions[1].price, "");
} }
function SportLeagueComponent_div_4_ng_container_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SportLeagueComponent_div_4_ng_container_63_ng_container_1_Template, 17, 4, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SportLeagueComponent_div_4_ng_container_63_ng_container_2_Template, 13, 2, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SportLeagueComponent_div_4_ng_container_63_ng_container_3_Template, 17, 2, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const entry_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r26.value.name == "Spread");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r26.value.name == "Money Line");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r26.value.name == "Total Points");
} }
function SportLeagueComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "linearGradient", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "stop", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "stop", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "stop", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "stop", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "stop", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "g", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "g", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "svg", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "g", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "g", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, SportLeagueComponent_div_4_ng_container_63_Template, 4, 3, "ng-container", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r24.eventName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 5, event_r24.eventTime, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r24.participants[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r24.participants[1].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 8, event_r24.marketMap));
} }
const _c0 = function () { return { "font-size": "0.7em" }; };
/**
 * Sport league component class
 *
 * @author Francisco Franco
 * @version %I%, %G%
 * @since 1.0
 */
class SportLeagueComponent {
    /**
     * Constructor
     */
    constructor(routeStateService, sportLeagueService) {
        this.routeStateService = routeStateService;
        this.sportLeagueService = sportLeagueService;
        // Page size property
        this.pageSize = 10;
    }
    // ==========================
    // Private methods
    // ==========================
    /**
     * Process channel message
     */
    processChannelMessage(data) {
        const json = JSON.stringify(data);
        console.log("CHANNEL MESSAGE:" + json);
        var obj = JSON.parse(json);
        var deltaLeagueId = obj.leagueId;
        var deltaFixtureId = obj.fixtureId;
        var deltaMarketId = obj.deltaMarket.id;
        console.log("deltaLeagueId:" + deltaLeagueId);
        console.log("deltaFixtureId:" + deltaFixtureId);
        console.log("deltaMarketId:" + deltaMarketId);
        if (this.leagueEvent.league.id == deltaLeagueId) {
            for (let eventView of this.leagueEvent.events) {
                if (eventView.eventId == deltaFixtureId) {
                    console.log("EventView eventName:" + eventView.eventName);
                    console.log("EventView marketMap:" + eventView.marketMap);
                    //eventView.marketMap.forEach((value: any, key: number) => {
                    // console.log(key, value);
                    //});
                    for (let deltaBetOption of obj.deltaMarket.deltaBets) {
                        for (let betOptionView of eventView.marketMap.get(deltaMarketId).betOptions) {
                            if (betOptionView.id == deltaBetOption.id) {
                                betOptionView.price = deltaBetOption.price;
                                console.log("ODDS CHANGED FOR betOptionView.name:" + betOptionView.name);
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
    /**
     * Fetch league event data
     */
    fetchData() {
        return __awaiter(this, void 0, void 0, function* () {
            var routeState = this.routeStateService.getCurrent();
            this.sportName = routeState.data.sport.name + ' - ' + routeState.data.leagues[0].name;
            const promise = yield this.sportLeagueService.getLeagueEventList(routeState.data.sport.id, routeState.data.leagues[0].setId).then(value => {
                console.log("sport-league.component value:" + value);
                if (value && value != null) {
                    const json = JSON.stringify(value);
                    var obj = JSON.parse(json);
                    console.table(obj);
                    this.leagueEvent = value[0];
                }
            }, error => {
                console.error('ERROR in fetchData()', error);
            });
        });
    }
    // ==========================
    // Public methods
    // ==========================
    /**
     * Angular init method
     */
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.columns = [
                { field: 'eventId', header: 'Event Id' },
                { field: 'eventName', header: 'Event Name' },
                { field: 'eventTime', header: 'Event Time' },
                { field: 'eventDetails', header: 'Event Details' }
            ];
            this.fetchData();
            this.sportLeagueService.subscribeToChannel();
            this.sportLeagueService.channel.bind('NCAA Basketball', data => { this.processChannelMessage(data); });
            // Router events subscription
            this.routerSubscription = this.routeStateService.router.events.subscribe((event) => {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                    let url = this.routeStateService.router.url;
                    console.log("sport-league-component navigated url:" + url + " MAYBE NEED TO RETURN PROMISE FOR DATA");
                    this.fetchData();
                }
            });
        });
    }
    /**
     * Angular destroy method
     */
    ngOnDestroy() {
        // Prevent memory leak when component destroyed
        this.sportLeagueService.unsubscribeHttpSubscription();
        this.sportLeagueService.unsubscribeToChannel();
        this.routerSubscription.unsubscribe();
    }
    /**
     * Navigate to event details method
     */
    goToEventDetails(eventId) {
        this.routeStateService.add("Event details", "/main/event/event-detail", eventId, false);
    }
}
SportLeagueComponent.ɵfac = function SportLeagueComponent_Factory(t) { return new (t || SportLeagueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_route_state_service__WEBPACK_IMPORTED_MODULE_3__["RouteStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_features_sport_league_sport_league_data_service__WEBPACK_IMPORTED_MODULE_2__["SportLeagueDataService"])); };
SportLeagueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SportLeagueComponent, selectors: [["app-sport-league"]], decls: 5, vars: 7, consts: [[1, "eventList"], ["styleClass", "p-card-shadow", 3, "header"], [3, "header", "toggleable"], ["class", "eventCard", 4, "ngFor", "ngForOf"], [1, "eventCard"], [1, "eventContainer"], [1, "groupedMarketTemplate"], ["href", "/us/co/bet/football/3edc9376-00c2-437c-a92b-206759fc5bc2/los-angeles-rams-at-seattle-seahawks"], [2, "font-size", "14px"], [2, "display", "block"], [1, "marketTemplateTitleContainer"], [1, "marketTemplateTitle"], [1, "marketTemplateTitleArrow"], ["width", "20", "height", "20", "viewBox", "0 -4 20 20", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M1.3899 0L0 1.41L4.5147 6L0 10.59L1.3899 12L7.30435 6L1.3899 0Z", 1, "fillPrimary"], [1, "groupedMarketTemplateGrid", "groupedMarketTemplateGrid_football", "groupedMarketTemplateGrid_3Col"], [1, "dateContainer"], [1, "date", "underlined"], ["href", "/us/co/bet/football/3edc9376-00c2-437c-a92b-206759fc5bc2/los-angeles-rams-at-seattle-seahawks", 1, "competitor", "firstCompetitor"], [1, "eventInfo"], [1, "teamNameSection"], [1, "teamLogo"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 449.03 322.34"], ["id", "linear-gradient", "x1", "93.81", "x2", "353.61", "y1", "165.24", "y2", "165.24", "gradientUnits", "userSpaceOnUse"], ["offset", "0", "stop-color", "#ffa300"], ["offset", "0.13", "stop-color", "#ffa800"], ["offset", "0.29", "stop-color", "#ffb600"], ["offset", "0.45", "stop-color", "#ffcd00"], ["offset", "0.48", "stop-color", "#ffd100"], ["data-name", "Layer 2"], ["data-name", "Layer 1"], ["fill", "#fff", "d", "M394.28 54.75a186.83 186.83 0 00-231-26.43A194.42 194.42 0 00111.33 79l-.15.18H72.65L0 243.59h94.25a150.32 150.32 0 0059.5 60.35 148.56 148.56 0 00152.82-5.76 14.45 14.45 0 00-7.74-26.54 14.67 14.67 0 00-4.24.63 100.19 100.19 0 01-29 4.24 99.06 99.06 0 01-74-32.92h88l15.11-21.07h58.67s-1.78 4.54-2.76 6.76l-6.31 14.3h96l2-7.51a186.91 186.91 0 00-48.02-181.32zm38.34 178.65H360a145.68 145.68 0 007.43-21.07h-78l-15 21.07h-69.9L309 87a113.13 113.13 0 00-43.4-8.4c-1.9 0-3.79.05-5.66.15-56.69 2.85-101.9 48.37-101.9 103.9a101.41 101.41 0 00.57 10.8h61.73L202 219.32c-5.8 7.8-13.49 14.08-25.21 14.08h-5c18.43 31.78 53.6 53.3 93.88 53.3a110.42 110.42 0 0031.9-4.67 4.33 4.33 0 011.3-.2 4.27 4.27 0 012.16 7.83A138.4 138.4 0 01158.67 295a139 139 0 01-58.16-61.62H15.64l63.65-144h36.77A138.28 138.28 0 01222.39 35.5h3c58.86 0 108.22 35.21 128.21 87l-36.19 50.7h55.1A147.9 147.9 0 00168.65 37a176.71 176.71 0 01264 196.44zm-204.81-50.14h-59.54v-.61c0-50 40.51-91.12 92.23-93.72 1.72-.09 3.45-.14 5.14-.14a105.36 105.36 0 0127.11 3.52zm129.11-47.7a137.18 137.18 0 015 27.43h-24.59z"], ["fill", "#003594", "d", "M168.65 37A147.9 147.9 0 01360 233.4h72.61A176.7 176.7 0 00168.65 37"], ["fill", "#0c2340", "d", "M309 87l-24 33.66c1.18-.06 2.37-.1 3.57-.1a71.08 71.08 0 0151 21.52l14-19.58A102.17 102.17 0 00309 87zM367.44 212.33a147.8 147.8 0 005.08-38.52v-.62h-15.11a71.41 71.41 0 01-.5 39.14z"], ["fill", "#003594", "d", "M357.41 173.19h-40l22.2-31.1a71.08 71.08 0 00-51-21.52c-1.2 0-2.39 0-3.57.1l-80.5 112.73h69.9l15-21.07h67.44a71.41 71.41 0 00.5-39.14z"], ["fill", "#ffd100", "d", "M134.66 247.96L134.66 247.96 134.66 247.96 134.66 247.96z"], ["fill", "#ffa300", "d", "M134.66 247.96L134.66 247.96 134.66 247.96 134.66 247.96z"], ["fill", "#ffd100", "d", "M301 289.66A138.4 138.4 0 01158.67 295a133.63 133.63 0 01-24-47c15.47-.72 37.87.61 54.43 7.73a109.07 109.07 0 0076.54 31 110.42 110.42 0 0031.9-4.67 4.33 4.33 0 011.3-.2 4.26 4.26 0 012.16 7.8zm-142.36-96.21a101.4 101.4 0 01-.58-10.8c0-55.53 45.22-101.05 101.91-103.9-65.72 2.67-119.55 51.66-128.74 114.7z"], ["fill", "#ffa300", "d", "M171.75 233.4h-40.26a133.18 133.18 0 003.17 14.6c15.47-.72 37.87.61 54.43 7.73a105.14 105.14 0 01-17.34-22.33z"], ["fill", "#ff8200", "d", "M100.51 233.4a138.63 138.63 0 0018.82 29.22A46.14 46.14 0 01134.66 248a133.18 133.18 0 01-3.17-14.56z"], ["fill", "url(#linear-gradient)", "d", "M309 87a113.13 113.13 0 00-43.4-8.4c-1.9 0-3.79.05-5.66.15-65.73 2.67-119.55 51.66-128.74 114.7H93.81l46.1-104h-23.85A138.28 138.28 0 01222.39 35.5h3c58.86 0 108.22 35.21 128.21 87A102.16 102.16 0 00309 87zM134.66 248a46.14 46.14 0 00-15.33 14.66A139 139 0 00158.67 295a133.44 133.44 0 01-24-47z"], ["fill", "#003594", "d", "M139.91 89.4l-46.1 104h126.56L202 219.32c-5.8 7.8-13.49 14.08-25.21 14.08H15.64l63.65-144z"], [1, "teamNameContainer"], [1, "teamLabel", "maxIOSHeight"], [1, "truncate2Rows"], ["href", "/us/co/bet/football/3edc9376-00c2-437c-a92b-206759fc5bc2/los-angeles-rams-at-seattle-seahawks", 1, "competitor", "lastCompetitor"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 104.16 46.09"], ["fill", "#fff", "d", "M87.29 37.79a80.74 80.74 0 00-13.61-1.2H11c-3.89 0-7.92 0-10-3.18S.09 27 3.63 20.64c.26-.47 11-20.64 11-20.64a16.94 16.94 0 002.2 2.23C17.91 3.08 19 3.54 22 3.54c5.31 0 39.56-.08 39.91-.08 6.95 0 14 .72 18.52 5.71 2.37.25 10 1.26 16.27 4.27 3.68 1.75 6.11 4.38 7 7.58a11.34 11.34 0 01.41 3.05 18.85 18.85 0 01-3.32 9.93c-4.72 7.41-9.07 10-9.27 10.13a10.73 10.73 0 01-5.28 2 17.13 17.13 0 003.13-5.32c.79-2.7-2.08-3.02-2.08-3.02z"], ["fill", "#024", "d", "M96 15.06c-7.16-3.43-16.36-4.17-16.36-4.17-4-4.9-10.8-5.63-17.66-5.63 0 0-34.53.08-39.91.08-6.25 0-6.88-2.48-6.88-2.48L6.76 18.55h21.77c6.85 0 7.19-.68 11.74-4C45.09 11 49 9.69 53.51 9.69s7.57 1 12.65 3.28S73.93 16.3 77 15c0 0-2.38 3.21-9.57.19s-9.12-3.66-13.49-3.66-9.24 2.07-15.42 8.24l7.36 5.92S44.13 28.34 43 30s-1 2.81-.42 3.63 1.35 1.19 4.07 1.19l27-.05a83.22 83.22 0 0114 1.24c6.9 1.38 2.45 7.19 2.45 7.19s4.61-3 9.18-10.2c5.09-8 3.83-14.52-3.28-17.94z"], ["fill", "#fff", "d", "M83.29 16.35c-3.25-.78-.47-2.67-.47-2.67A9.31 9.31 0 0076 19.52c-.08.15-.16.29-.23.45-2.6 5.22-4.93 4.94-9.36 4.94h-7.6c-6.14 0-9 3.05-12 8.23h3.47c3.17-4.72 5.57-6 11.84-6.35A71.15 71.15 0 0194 34.06c8.55-14.42-4.19-16.81-10.71-17.71z"], ["fill", "#fff", "d", "M56.62 33.09c1.6-2.43 4.86-3.25 10.12-3A81.75 81.75 0 0193 35.58c-7.14-4.18-19.87-7.2-28.72-7.17-4.32 0-8.1.77-10.32 4.68zM70.54 18.78c-1.69 2.36-3.92 3.16-10.23 2.73-7.35-.5-5.45-3.59-4.6-5.11l1-1.9c-5.63-.34-9.74 4-9.74 4 4.19 4.15 7 4.58 10.79 4.58h7.09c6.6 0 8.2-3 8.8-4.29a12.61 12.61 0 01-3.11-.01z"], ["fill", "#69be28", "d", "M67.33 18.08l-.41-.17a3.43 3.43 0 01-2.84.94c-1.43-.18-2.25-1.22-1.84-2.31a2 2 0 01.24-.45c-.73-.29-1.46-.56-2.17-.81-1.47 2.36-2.32 3.93 2.75 4.36 3.16.27 4-.27 4.68-1.41z"], ["fill", "#a5acaf", "d", "M41.86 27.06C39.24 31.6 38.2 32.65 40 34.8H11c-4.27 0-7-.16-8.48-2.36S1.45 28.26 5.2 21.52h24.65c4.25 0 5.34.24 7.64 2s4.37 3.54 4.37 3.54z"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "header", "selectionHeader", "truncate3Rows", "col2"], [1, "selectionContainer", "col2", 2, "grid-row", "2 / auto"], [1, "selectionOption"], [1, "oddsView"], [1, "handicap", "truncateText"], [1, "odds", "truncateText"], [1, "selectionContainer", "col2", 2, "grid-row", "3 / auto"], [1, "header", "selectionHeader", "truncate3Rows", "col3"], [1, "selectionContainer", "col3", 2, "grid-row", "2 / auto"], [1, "selectionContainer", "col3", 2, "grid-row", "3 / auto"], [1, "header", "selectionHeader", "truncate3Rows", "col4"], [1, "selectionContainer", "col4", 2, "grid-row", "2 / auto"], [1, "selectionContainer", "col4", 2, "grid-row", "3 / auto"]], template: function SportLeagueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SportLeagueComponent_div_4_Template, 65, 10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("header", ctx.sportName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("header", ctx.leagueEvent.league.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("toggleable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.leagueEvent.events);
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_4__["Card"], primeng_panel__WEBPACK_IMPORTED_MODULE_5__["Panel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["KeyValuePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3Nwb3J0LWxlYWd1ZS9zcG9ydC1sZWFndWUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SportLeagueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sport-league',
                templateUrl: 'sport-league.component.html',
                styleUrls: ['sport-league.component.css']
            }]
    }], function () { return [{ type: src_app_core_services_route_state_service__WEBPACK_IMPORTED_MODULE_3__["RouteStateService"] }, { type: src_app_features_sport_league_sport_league_data_service__WEBPACK_IMPORTED_MODULE_2__["SportLeagueDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/sport-league/sport-league.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/sport-league/sport-league.module.ts ***!
  \**************************************************************/
/*! exports provided: SportLeagueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportLeagueModule", function() { return SportLeagueModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_app_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.common.module */ "./src/app/app.common.module.ts");
/* harmony import */ var src_app_shared_layout_header_breadcrumb_header_breadcrumb_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/layout/header-breadcrumb/header-breadcrumb.module */ "./src/app/shared/layout/header-breadcrumb/header-breadcrumb.module.ts");
/* harmony import */ var src_app_features_sport_league_sport_league_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/features/sport-league/sport-league.routing */ "./src/app/features/sport-league/sport-league.routing.ts");
/* harmony import */ var _sport_league_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sport-league.component */ "./src/app/features/sport-league/sport-league.component.ts");







class SportLeagueModule {
}
SportLeagueModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SportLeagueModule });
SportLeagueModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SportLeagueModule_Factory(t) { return new (t || SportLeagueModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_features_sport_league_sport_league_routing__WEBPACK_IMPORTED_MODULE_4__["SportLeagueRoutingModule"],
            src_app_app_common_module__WEBPACK_IMPORTED_MODULE_2__["AppCommonModule"],
            src_app_shared_layout_header_breadcrumb_header_breadcrumb_module__WEBPACK_IMPORTED_MODULE_3__["HeaderBreadCrumbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SportLeagueModule, { declarations: [_sport_league_component__WEBPACK_IMPORTED_MODULE_5__["SportLeagueComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_features_sport_league_sport_league_routing__WEBPACK_IMPORTED_MODULE_4__["SportLeagueRoutingModule"],
        src_app_app_common_module__WEBPACK_IMPORTED_MODULE_2__["AppCommonModule"],
        src_app_shared_layout_header_breadcrumb_header_breadcrumb_module__WEBPACK_IMPORTED_MODULE_3__["HeaderBreadCrumbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SportLeagueModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_features_sport_league_sport_league_routing__WEBPACK_IMPORTED_MODULE_4__["SportLeagueRoutingModule"],
                    src_app_app_common_module__WEBPACK_IMPORTED_MODULE_2__["AppCommonModule"],
                    src_app_shared_layout_header_breadcrumb_header_breadcrumb_module__WEBPACK_IMPORTED_MODULE_3__["HeaderBreadCrumbModule"]
                ],
                declarations: [
                    _sport_league_component__WEBPACK_IMPORTED_MODULE_5__["SportLeagueComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/sport-league/sport-league.routing.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/sport-league/sport-league.routing.ts ***!
  \***************************************************************/
/*! exports provided: SportLeagueRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportLeagueRoutingModule", function() { return SportLeagueRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_features_sport_league_sport_league_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/features/sport-league/sport-league.component */ "./src/app/features/sport-league/sport-league.component.ts");





const routes = [
    {
        path: '',
        component: src_app_features_sport_league_sport_league_component__WEBPACK_IMPORTED_MODULE_2__["SportLeagueComponent"]
    }
];
class SportLeagueRoutingModule {
}
SportLeagueRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SportLeagueRoutingModule });
SportLeagueRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SportLeagueRoutingModule_Factory(t) { return new (t || SportLeagueRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SportLeagueRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SportLeagueRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-features-sport-league-sport-league-module.js.map