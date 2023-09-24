(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-features-event-event-module"],{

/***/ "./src/app/features/event/event.component.ts":
/*!***************************************************!*\
  !*** ./src/app/features/event/event.component.ts ***!
  \***************************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class EventComponent {
    constructor() {
    }
    ngOnInit() { }
}
EventComponent.ɵfac = function EventComponent_Factory(t) { return new (t || EventComponent)(); };
EventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventComponent, selectors: [["app-event"]], decls: 1, vars: 0, template: function EventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2V2ZW50L2V2ZW50LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event',
                template: '<router-outlet></router-outlet>',
                styleUrls: ['event.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/features/event/event.module.ts":
/*!************************************************!*\
  !*** ./src/app/features/event/event.module.ts ***!
  \************************************************/
/*! exports provided: EventModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModule", function() { return EventModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_app_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app//app.common.module */ "./src/app/app.common.module.ts");
/* harmony import */ var src_app_features_event_event_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/features/event/event.routing */ "./src/app/features/event/event.routing.ts");
/* harmony import */ var src_app_features_event_event_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/features/event/event.component */ "./src/app/features/event/event.component.ts");






class EventModule {
}
EventModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EventModule });
EventModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EventModule_Factory(t) { return new (t || EventModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_features_event_event_routing__WEBPACK_IMPORTED_MODULE_3__["EventRoutingModule"],
            src_app_app_common_module__WEBPACK_IMPORTED_MODULE_2__["AppCommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EventModule, { declarations: [src_app_features_event_event_component__WEBPACK_IMPORTED_MODULE_4__["EventComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_features_event_event_routing__WEBPACK_IMPORTED_MODULE_3__["EventRoutingModule"],
        src_app_app_common_module__WEBPACK_IMPORTED_MODULE_2__["AppCommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_features_event_event_routing__WEBPACK_IMPORTED_MODULE_3__["EventRoutingModule"],
                    src_app_app_common_module__WEBPACK_IMPORTED_MODULE_2__["AppCommonModule"]
                ],
                declarations: [
                    src_app_features_event_event_component__WEBPACK_IMPORTED_MODULE_4__["EventComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/event/event.routing.ts":
/*!*************************************************!*\
  !*** ./src/app/features/event/event.routing.ts ***!
  \*************************************************/
/*! exports provided: EventRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRoutingModule", function() { return EventRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_features_event_event_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/features/event/event.component */ "./src/app/features/event/event.component.ts");





const routes = [
    {
        path: '',
        redirectTo: 'event-list'
    },
    {
        path: 'event-list',
        component: src_app_features_event_event_component__WEBPACK_IMPORTED_MODULE_2__["EventComponent"],
        loadChildren: () => Promise.all(/*! import() | src-app-features-event-event-list-event-list-module */[__webpack_require__.e("common"), __webpack_require__.e("src-app-features-event-event-list-event-list-module")]).then(__webpack_require__.bind(null, /*! src/app/features/event/event-list/event-list.module */ "./src/app/features/event/event-list/event-list.module.ts")).then(m => m.EventListModule)
    },
    {
        path: 'event-detail',
        component: src_app_features_event_event_component__WEBPACK_IMPORTED_MODULE_2__["EventComponent"],
        loadChildren: () => Promise.all(/*! import() | src-app-features-event-event-detail-event-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("src-app-features-event-event-detail-event-detail-module")]).then(__webpack_require__.bind(null, /*! src/app/features/event/event-detail/event-detail.module */ "./src/app/features/event/event-detail/event-detail.module.ts")).then(m => m.EventDetailModule)
    }
];
class EventRoutingModule {
}
EventRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EventRoutingModule });
EventRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EventRoutingModule_Factory(t) { return new (t || EventRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EventRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-features-event-event-module.js.map