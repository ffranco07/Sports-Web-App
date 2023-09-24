(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-features-register-player-register-player-module"],{

/***/ "./src/app/core/validators/birthdate.validators.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/validators/birthdate.validators.ts ***!
  \*********************************************************/
/*! exports provided: birthDateValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "birthDateValidator", function() { return birthDateValidator; });
/**
 * validation function
 * birth date should be less than 10 years
 * @param control
 */
function birthDateValidator(control) {
    var value = control.value;
    var today = new Date();
    var birthDate = new Date(value);
    var age = today.getFullYear() - birthDate.getFullYear();
    var min = 10;
    if (age > min + 1) {
        return null;
    }
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    var reuslt = age >= min ? null : { 'invalidBirthDate': true };
    return reuslt;
}


/***/ }),

/***/ "./src/app/features/register-player/register-player.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/register-player/register-player.component.ts ***!
  \***********************************************************************/
/*! exports provided: RegisterPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPlayerComponent", function() { return RegisterPlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/toast.service */ "./src/app/core/services/toast.service.ts");
/* harmony import */ var src_app_core_validators_birthdate_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/validators/birthdate.validators */ "./src/app/core/validators/birthdate.validators.ts");
/* harmony import */ var src_app_core_services_player_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/player-data.service */ "./src/app/core/services/player-data.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-panel.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-calendar.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-message.js");


















function RegisterPlayerComponent_div_11_p_message_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-message", 22);
} }
function RegisterPlayerComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterPlayerComponent_div_11_p_message_1_Template, 1, 0, "p-message", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.playerform.controls["name"].errors["required"]);
} }
function RegisterPlayerComponent_div_17_p_message_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-message", 25);
} }
function RegisterPlayerComponent_div_17_p_message_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-message", 26);
} }
function RegisterPlayerComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterPlayerComponent_div_17_p_message_1_Template, 1, 0, "p-message", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterPlayerComponent_div_17_p_message_2_Template, 1, 0, "p-message", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.playerform.controls["password"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.playerform.controls["password"].errors["minlength"]);
} }
function RegisterPlayerComponent_div_23_p_message_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-message", 29);
} }
function RegisterPlayerComponent_div_23_p_message_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-message", 30);
} }
function RegisterPlayerComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterPlayerComponent_div_23_p_message_1_Template, 1, 0, "p-message", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterPlayerComponent_div_23_p_message_2_Template, 1, 0, "p-message", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.playerform.controls["emailId"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.playerform.controls["emailId"].errors["email"]);
} }
function RegisterPlayerComponent_div_26_p_message_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-message", 33);
} }
function RegisterPlayerComponent_div_26_p_message_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-message", 34);
} }
function RegisterPlayerComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterPlayerComponent_div_26_p_message_1_Template, 1, 0, "p-message", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterPlayerComponent_div_26_p_message_2_Template, 1, 0, "p-message", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.playerform.controls["birthDate"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.playerform.controls["birthDate"].errors["invalidBirthDate"]);
} }
/**
 * Register player component class
 *
 * @author Francisco Franco
 * @version %I%, %G%
 * @since 1.0
 */
class RegisterPlayerComponent {
    constructor(playerService, router, fb, toastService) {
        this.playerService = playerService;
        this.router = router;
        this.fb = fb;
        this.toastService = toastService;
    }
    ngOnInit() {
        this.playerform = this.fb.group({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])),
            'emailId': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            'birthDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_core_validators_birthdate_validators__WEBPACK_IMPORTED_MODULE_4__["birthDateValidator"]])
        });
        this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version;
    }
    onClickRegisterPlayer() {
        let isRegistered = this.playerService.addPlayer(this.playerform.controls["name"].value, this.playerform.controls["password"].value, this.playerform.controls["emailId"].value, this.playerform.controls["birthDate"].value);
        if (isRegistered) {
            this.router.navigate(['/login']);
            this.toastService.addSingle("success", "", "Player registered.");
        }
    }
    onClickGoToLogin() {
        this.router.navigate(['/login']);
    }
}
RegisterPlayerComponent.ɵfac = function RegisterPlayerComponent_Factory(t) { return new (t || RegisterPlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_player_data_service__WEBPACK_IMPORTED_MODULE_5__["PlayerDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"])); };
RegisterPlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterPlayerComponent, selectors: [["app-register-player"]], decls: 32, vars: 7, consts: [[1, "user-regisration"], [1, "p-grid", "p-nogutter", "p-justify-center", "p-align-center", 2, "height", "100%"], [1, "p-xl-3", "p-lg-6", "p-md-8", "p-sm-10"], [3, "formGroup", "ngSubmit"], ["header", "Player Registration"], [1, "p-grid", "p-justify-center", "p-align-center"], [1, "p-col-12"], [1, "ui-inputgroup"], [1, "ui-inputgroup-addon"], [1, "fa", "fa-user"], ["id", "float-input-playername", "type", "text", "size", "30", "pInputText", "", "formControlName", "name", "placeholder", "player name", "required", ""], ["class", "p-col-12", 4, "ngIf"], [1, "fa", "fa-key"], ["id", "float-input-password", "type", "password", "size", "30", "pInputText", "", "formControlName", "password", "placeholder", "password", "required", ""], [1, "fa", "fa-at"], ["id", "float-input-emailid", "type", "email", "size", "30", "pInputText", "", "formControlName", "emailId", "placeholder", "Email Id", "required", ""], ["formControlName", "birthDate", "placeholder", "Birth date", 3, "showIcon"], [1, "p-grid"], [1, "p-col-6"], ["pButton", "", "type", "button", "label", "Register", 1, "ui-button-raised", 3, "disabled", "click"], ["pButton", "", "type", "button", "label", "Login", 1, "ui-button-raised", 3, "click"], ["severity", "error", "text", "Player name is required", 4, "ngIf"], ["severity", "error", "text", "Player name is required"], ["severity", "error", "text", "Password is required", 4, "ngIf"], ["severity", "error", "text", "Minimum 6 characters required.", 4, "ngIf"], ["severity", "error", "text", "Password is required"], ["severity", "error", "text", "Minimum 6 characters required."], ["severity", "error", "text", "Email is required", 4, "ngIf"], ["severity", "error", "text", "Email is invalid", 4, "ngIf"], ["severity", "error", "text", "Email is required"], ["severity", "error", "text", "Email is invalid"], ["severity", "error", "text", "Birthdate is required", 4, "ngIf"], ["severity", "error", "text", "Minimum age should be 10 years.", 4, "ngIf"], ["severity", "error", "text", "Birthdate is required"], ["severity", "error", "text", "Minimum age should be 10 years."]], template: function RegisterPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterPlayerComponent_Template_form_ngSubmit_3_listener() { return ctx.onClickRegisterPlayer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-panel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RegisterPlayerComponent_div_11_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RegisterPlayerComponent_div_17_Template, 3, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RegisterPlayerComponent_div_23_Template, 3, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "p-calendar", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RegisterPlayerComponent_div_26_Template, 3, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterPlayerComponent_Template_button_click_29_listener() { return ctx.onClickRegisterPlayer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterPlayerComponent_Template_button_click_31_listener() { return ctx.onClickGoToLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.playerform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playerform.controls["name"].errors && ctx.playerform.controls["name"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playerform.controls["password"].errors && ctx.playerform.controls["password"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playerform.controls["emailId"].errors && ctx.playerform.controls["emailId"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showIcon", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playerform.controls["birthDate"].errors && ctx.playerform.controls["birthDate"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.playerform.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], primeng_panel__WEBPACK_IMPORTED_MODULE_7__["Panel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], primeng_calendar__WEBPACK_IMPORTED_MODULE_10__["Calendar"], primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonDirective"], primeng_message__WEBPACK_IMPORTED_MODULE_12__["UIMessage"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3JlZ2lzdGVyLXBsYXllci9yZWdpc3Rlci1wbGF5ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterPlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register-player',
                templateUrl: 'register-player.component.html',
                styleUrls: ['register-player.component.css']
            }]
    }], function () { return [{ type: src_app_core_services_player_data_service__WEBPACK_IMPORTED_MODULE_5__["PlayerDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/register-player/register-player.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/register-player/register-player.module.ts ***!
  \********************************************************************/
/*! exports provided: RegisterPlayerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPlayerModule", function() { return RegisterPlayerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_features_register_player_register_player_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/features/register-player/register-player.component */ "./src/app/features/register-player/register-player.component.ts");
/* harmony import */ var src_app_features_register_player_register_player_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/features/register-player/register-player.routing */ "./src/app/features/register-player/register-player.routing.ts");
/* harmony import */ var src_app_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.common.module */ "./src/app/app.common.module.ts");






class RegisterPlayerModule {
}
RegisterPlayerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RegisterPlayerModule });
RegisterPlayerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RegisterPlayerModule_Factory(t) { return new (t || RegisterPlayerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_features_register_player_register_player_routing__WEBPACK_IMPORTED_MODULE_3__["RegisterPlayerRoutingModule"],
            src_app_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegisterPlayerModule, { declarations: [src_app_features_register_player_register_player_component__WEBPACK_IMPORTED_MODULE_2__["RegisterPlayerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_features_register_player_register_player_routing__WEBPACK_IMPORTED_MODULE_3__["RegisterPlayerRoutingModule"],
        src_app_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterPlayerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_features_register_player_register_player_routing__WEBPACK_IMPORTED_MODULE_3__["RegisterPlayerRoutingModule"],
                    src_app_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"]
                ],
                declarations: [src_app_features_register_player_register_player_component__WEBPACK_IMPORTED_MODULE_2__["RegisterPlayerComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/register-player/register-player.routing.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/register-player/register-player.routing.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterPlayerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPlayerRoutingModule", function() { return RegisterPlayerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_features_register_player_register_player_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/features/register-player/register-player.component */ "./src/app/features/register-player/register-player.component.ts");





const routes = [
    {
        path: '',
        component: src_app_features_register_player_register_player_component__WEBPACK_IMPORTED_MODULE_2__["RegisterPlayerComponent"]
    }
];
class RegisterPlayerRoutingModule {
}
RegisterPlayerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RegisterPlayerRoutingModule });
RegisterPlayerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RegisterPlayerRoutingModule_Factory(t) { return new (t || RegisterPlayerRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegisterPlayerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterPlayerRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-features-register-player-register-player-module.js.map