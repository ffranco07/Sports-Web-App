(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-features-event-event-list-event-list-module"],{

/***/ "./src/app/features/event/event-list/event-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/event/event-list/event-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: EventListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListComponent", function() { return EventListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_features_event_event_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/features/event/event-data.service */ "./src/app/features/event/event-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_services_route_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/route-state.service */ "./src/app/core/services/route-state.service.ts");
/* harmony import */ var src_app_shared_layout_header_breadcrumb_header_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/layout/header-breadcrumb/header-breadcrumb.component */ "./src/app/shared/layout/header-breadcrumb/header-breadcrumb.component.ts");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-panel.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");













function EventListComponent_ng_template_3_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r36.header, " ");
} }
function EventListComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventListComponent_ng_template_3_th_1_Template, 2, 1, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r33.columns);
} }
function EventListComponent_ng_template_4_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r39 = ctx.$implicit;
    const event_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", event_r37[col_r39.field], " ");
} }
function EventListComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventListComponent_ng_template_4_td_1_Template, 2, 1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventListComponent_ng_template_4_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const event_r37 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.goToEventDetails(event_r37.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r34.columns);
} }
class EventListComponent {
    constructor(eventService, routeStateService, router) {
        this.eventService = eventService;
        this.routeStateService = routeStateService;
        this.router = router;
        this.columns = [
            { field: 'Name', header: 'Name' },
            { field: 'Description', header: 'Description' }
        ];
    }
    ngOnInit() {
        this.events = this.eventService.getAllEvents();
    }
    goToEventDetails(event) {
        this.routeStateService.add("Event details", "/main/event/event-detail", event, false);
    }
}
EventListComponent.ɵfac = function EventListComponent_Factory(t) { return new (t || EventListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_features_event_event_data_service__WEBPACK_IMPORTED_MODULE_1__["EventDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_route_state_service__WEBPACK_IMPORTED_MODULE_3__["RouteStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EventListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventListComponent, selectors: [["app-event-list"]], decls: 5, vars: 1, consts: [["header", "Event List"], [3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], [4, "ngFor", "ngForOf"], [3, "click"]], template: function EventListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EventListComponent_ng_template_3_Template, 3, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EventListComponent_ng_template_4_Template, 5, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.events);
    } }, directives: [src_app_shared_layout_header_breadcrumb_header_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["HeaderBreadcrumbComponent"], primeng_panel__WEBPACK_IMPORTED_MODULE_5__["Panel"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2V2ZW50L2V2ZW50LWxpc3QvZXZlbnQtbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event-list',
                templateUrl: 'event-list.component.html',
                styleUrls: ['event-list.component.css']
            }]
    }], function () { return [{ type: src_app_features_event_event_data_service__WEBPACK_IMPORTED_MODULE_1__["EventDataService"] }, { type: src_app_core_services_route_state_service__WEBPACK_IMPORTED_MODULE_3__["RouteStateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/event/event-list/event-list.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/event/event-list/event-list.module.ts ***!
  \****************************************************************/
/*! exports provided: EventListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListModule", function() { return EventListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_features_event_event_list_event_list_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/features/event/event-list/event-list.routing */ "./src/app/features/event/event-list/event-list.routing.ts");
/* harmony import */ var src_app_features_event_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/features/event/event-list/event-list.component */ "./src/app/features/event/event-list/event-list.component.ts");
/* harmony import */ var src_app_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.common.module */ "./src/app/app.common.module.ts");
/* harmony import */ var src_app_shared_layout_header_breadcrumb_header_breadcrumb_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/layout/header-breadcrumb/header-breadcrumb.module */ "./src/app/shared/layout/header-breadcrumb/header-breadcrumb.module.ts");







class EventListModule {
}
EventListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EventListModule });
EventListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EventListModule_Factory(t) { return new (t || EventListModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_features_event_event_list_event_list_routing__WEBPACK_IMPORTED_MODULE_2__["EventListRoutingModule"],
            src_app_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"],
            src_app_shared_layout_header_breadcrumb_header_breadcrumb_module__WEBPACK_IMPORTED_MODULE_5__["HeaderBreadCrumbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EventListModule, { declarations: [src_app_features_event_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_3__["EventListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_features_event_event_list_event_list_routing__WEBPACK_IMPORTED_MODULE_2__["EventListRoutingModule"],
        src_app_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"],
        src_app_shared_layout_header_breadcrumb_header_breadcrumb_module__WEBPACK_IMPORTED_MODULE_5__["HeaderBreadCrumbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_features_event_event_list_event_list_routing__WEBPACK_IMPORTED_MODULE_2__["EventListRoutingModule"],
                    src_app_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"],
                    src_app_shared_layout_header_breadcrumb_header_breadcrumb_module__WEBPACK_IMPORTED_MODULE_5__["HeaderBreadCrumbModule"]
                ],
                declarations: [
                    src_app_features_event_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_3__["EventListComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/event/event-list/event-list.routing.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/event/event-list/event-list.routing.ts ***!
  \*****************************************************************/
/*! exports provided: EventListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListRoutingModule", function() { return EventListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_features_event_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/features/event/event-list/event-list.component */ "./src/app/features/event/event-list/event-list.component.ts");





const routes = [
    {
        path: '',
        component: src_app_features_event_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_2__["EventListComponent"]
    }
];
class EventListRoutingModule {
}
EventListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EventListRoutingModule });
EventListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EventListRoutingModule_Factory(t) { return new (t || EventListRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EventListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventListRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-features-event-event-list-event-list-module.js.map