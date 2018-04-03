webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/add-permission/add-permission.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-permission/add-permission.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showRequest\" class=\"container text-center\" style=\"padding: 20px;\">\n  <div class=\"row justify-content-md-center\">\n    <div class=\"col-lg-4 col-md-6 col-sm-12\">\n      <form class=\"form-signin\" (ngSubmit)=\"fireRequest()\">\n        <h1 class=\"display-1 text-center\"><i class=\"fas fa-lock text-danger\"></i></h1>\n        <br>\n        <p><i>EHR: {{ ehrId }}</i></p>\n        <h1 class=\"h3 mb-3 font-weight-normal\">Berechtigung hinzufügen</h1>\n\n        <label for=\"publicKey\" class=\"sr-only\">Public Key</label>\n        <input [(ngModel)]=\"request.publicKey\" name=\"publicKey\" type=\"text\" id=\"publicKey\" class=\"form-control\" placeholder=\"Public Key\" required=\"\" autofocus=\"\">\n        <small class=\"form-text text-muted text-left\">Fügen Sie den Public Key ein den Sie <b>berechtigen</b> wollen.</small>\n        <br>\n        <label for=\"signature\" class=\"sr-only\">Signatur</label>\n        <input [(ngModel)]=\"request.signature\" name=\"requesterSignature\" type=\"number\" id=\"signature\" class=\"form-control\" placeholder=\"Ihre Signatur\" required=\"\">\n        <small class=\"form-text text-muted text-left\">Die Signatur erstellen Sie, indem Sie die Zahl <b>12345</b> mit Ihrem Private Key verschlüsseln.</small>\n        <br>\n        <button class=\"btn btn-lg btn-danger btn-block\" type=\"submit\">Berechtigen</button>\n        <a [routerLink]=\"['/epds']\" class=\"btn btn-default text-center\">Abbrechen</a>\n\n        <p class=\"mt-5 mb-3 text-muted\">© IDPA Blockchain Patientendossier 2018</p>\n      </form>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"showResponse\" class=\"container text-center\" style=\"padding: 20px;\">\n  <div class=\"row justify-content-md-center\">\n    <div class=\"col-lg-4 col-md-6 col-sm-12\">\n      <form class=\"form-signin\">\n        <h1 *ngIf=\"!response.valid\" class=\"display-1 text-center\"><i class=\"fas fa-lock text-danger\"></i></h1>\n        <h1 *ngIf=\"response.valid\" class=\"display-1 text-center\"><i class=\"fas fa-check text-success\"></i></h1>\n        <br>\n        <h1 *ngIf=\"response.valid\" class=\"h3 mb-3 font-weight-normal text-center\">Berechtigung hinzugefügt</h1>\n        <h1 *ngIf=\"!response.valid\" class=\"h3 mb-3 font-weight-normal text-center\">Berechtigung verweigert</h1>\n\n        <ul class=\"list-group mb-3\">\n          <li *ngFor=\"let step of response.permissionSteps\" class=\"list-group-item d-flex justify-content-between lh-condensed\" [ngClass]=\"{'bg-light':step.valid}\">\n            <div [ngClass]=\"{'text-success':step.valid,'text-danger':!step.valid}\">\n              <h6 class=\"my-0\">{{step.title}}</h6>\n              <small class=\"text-muted\" [innerHTML]=\"step.description\"></small>\n            </div>\n            <div *ngIf=\"step.valid\" class=\"text-success\"><h4><i class=\"fas fa-check\"></i></h4></div>\n            <div *ngIf=\"!step.valid\" class=\"text-danger\"><h4><i class=\"fas fa-times\"></i></h4></div>\n          </li>\n        </ul>\n\n        <span *ngIf=\"response.valid\">\n          <p><b>Neue Berechtigungen</b></p>\n\n          <table class=\"table\">\n            <thead>\n            <th>Public Key</th>\n            <th>Besitzer</th>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let premittedPublicKey of permittedPublicKeys\">\n              <td>{{ premittedPublicKey.publicKey }}</td>\n              <td>{{ premittedPublicKey.ownerName }}</td>\n            </tr>\n            </tbody>\n          </table>\n        </span>\n\n        <a *ngIf=\"response.valid\" [routerLink]=\"['/epds']\" class=\"btn btn-lg btn-success btn-block\">Zurück zur Übersicht</a>\n        <button *ngIf=\"!response.valid\" (click)=\"retry()\" class=\"btn btn-lg btn-secondary btn-block\">Erneut versuchen</button>\n\n        <p class=\"mt-5 mb-3 text-muted\">© IDPA Blockchain Patientendossier 2018</p>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/add-permission/add-permission.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPermissionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddPermissionComponent = (function () {
    function AddPermissionComponent(route, http) {
        this.route = route;
        this.http = http;
        this.showRequest = true;
        this.showResponse = false;
        this.request = {};
        this.response = {};
        this.permittedPublicKeys = [];
        this.ehr = {};
    }
    AddPermissionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ehrId = this.route.snapshot.params['id'];
        this.http.get('/ehr/' + this.ehrId).subscribe(function (data) {
            _this.ehr = data;
        });
    };
    AddPermissionComponent.prototype.fireRequest = function () {
        var _this = this;
        this.http.post('/entitle/' + this.ehrId, this.request)
            .subscribe(function (res) {
            _this.response = res;
            _this.showRequest = false;
            _this.showResponse = true;
            _this.reloadPermissionsOfEhr();
        }, function (err) {
            console.log(err);
        });
    };
    AddPermissionComponent.prototype.reloadPermissionsOfEhr = function () {
        var _this = this;
        this.permittedPublicKeys = [];
        this.http.get('/ehr/' + this.ehrId).subscribe(function (data) {
            var _loop_1 = function (i) {
                _this.http.get('/get-pk-owner-name/' + data['permittedPublicKeys'][i]).subscribe(function (response) {
                    _this.permittedPublicKeys.push({
                        publicKey: data['permittedPublicKeys'][i],
                        ownerName: response['name']
                    });
                });
            };
            for (var i = 0; i < data['permittedPublicKeys'].length; i++) {
                _loop_1(i);
            }
        });
    };
    AddPermissionComponent.prototype.retry = function () {
        this.response = {};
        this.request = {};
        this.showRequest = true;
        this.showResponse = false;
    };
    return AddPermissionComponent;
}());
AddPermissionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-add-permission',
        template: __webpack_require__("../../../../../src/app/add-permission/add-permission.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add-permission/add-permission.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], AddPermissionComponent);

var _a, _b;
//# sourceMappingURL=add-permission.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__epds_epds_component__ = __webpack_require__("../../../../../src/app/epds/epds.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__epd_detail_epd_detail_component__ = __webpack_require__("../../../../../src/app/epd-detail/epd-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__epd_create_epd_create_component__ = __webpack_require__("../../../../../src/app/epd-create/epd-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ehr_create_ehr_create_component__ = __webpack_require__("../../../../../src/app/ehr-create/ehr-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__key_create_key_create_component__ = __webpack_require__("../../../../../src/app/key-create/key-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ehr_ehr_component__ = __webpack_require__("../../../../../src/app/ehr/ehr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__texttonumber_tool_texttonumber_tool_component__ = __webpack_require__("../../../../../src/app/texttonumber-tool/texttonumber-tool.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__encryption_tool_encryption_tool_component__ = __webpack_require__("../../../../../src/app/encryption-tool/encryption-tool.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__add_permission_add_permission_component__ = __webpack_require__("../../../../../src/app/add-permission/add-permission.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    {
        path: 'epds',
        component: __WEBPACK_IMPORTED_MODULE_6__epds_epds_component__["a" /* EpdsComponent */],
        data: { title: 'EPD List' }
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */],
        data: { title: 'Home' }
    },
    {
        path: 'epd-detail/:id',
        component: __WEBPACK_IMPORTED_MODULE_7__epd_detail_epd_detail_component__["a" /* EpdDetailComponent */],
        data: { title: 'EPD Details' }
    },
    {
        path: 'epd-create',
        component: __WEBPACK_IMPORTED_MODULE_8__epd_create_epd_create_component__["a" /* EpdCreateComponent */],
        data: { title: 'EPD Erstellen' }
    },
    {
        path: 'ehr-create/:id',
        component: __WEBPACK_IMPORTED_MODULE_9__ehr_create_ehr_create_component__["a" /* EhrCreateComponent */],
        data: { title: 'EHR hinzufügen' }
    },
    {
        path: 'add-permission/:id',
        component: __WEBPACK_IMPORTED_MODULE_14__add_permission_add_permission_component__["a" /* AddPermissionComponent */],
        data: { title: 'Berechtigung hinzufügen' }
    },
    {
        path: 'ehr/:id',
        component: __WEBPACK_IMPORTED_MODULE_11__ehr_ehr_component__["a" /* EhrComponent */],
        data: { title: 'EHR Details' }
    },
    {
        path: 'key-create',
        component: __WEBPACK_IMPORTED_MODULE_10__key_create_key_create_component__["a" /* KeyCreateComponent */],
        data: { title: 'Key Generieren' }
    },
    {
        path: 'texttonumber-tool',
        component: __WEBPACK_IMPORTED_MODULE_12__texttonumber_tool_texttonumber_tool_component__["a" /* TexttonumberToolComponent */],
        data: { title: 'Text2Nummer Tool' }
    },
    {
        path: 'encryption-tool',
        component: __WEBPACK_IMPORTED_MODULE_13__encryption_tool_encryption_tool_component__["a" /* EncryptionToolComponent */],
        data: { title: 'Verschlüsselungs Tool' }
    },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__epds_epds_component__["a" /* EpdsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__epd_detail_epd_detail_component__["a" /* EpdDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_8__epd_create_epd_create_component__["a" /* EpdCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_9__ehr_create_ehr_create_component__["a" /* EhrCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_10__key_create_key_create_component__["a" /* KeyCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_11__ehr_ehr_component__["a" /* EhrComponent */],
            __WEBPACK_IMPORTED_MODULE_12__texttonumber_tool_texttonumber_tool_component__["a" /* TexttonumberToolComponent */],
            __WEBPACK_IMPORTED_MODULE_13__encryption_tool_encryption_tool_component__["a" /* EncryptionToolComponent */],
            __WEBPACK_IMPORTED_MODULE_14__add_permission_add_permission_component__["a" /* AddPermissionComponent */],
            __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            )
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/ehr-create/ehr-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ehr-create/ehr-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-md-center\">\n    <div class=\"col-md-6 col-sm-12\" style=\"margin-top: 40px;\">\n      <div class=\"card mb-4 box-shadow\">\n        <!--<h1 class=\"card-img-top display-1 text-center\" style=\"height: 180px; width: 100%; display: block; color: #706f6f; padding: 40px\"><i class=\"fas fa-database\"></i></h1>-->\n        <h1 class=\"card-img-top display-1 text-center\" style=\"height: 140px; width: 100%; display: block; padding: 40px\"><i class=\"fas fa-database\"></i></h1>\n        <div class=\"card-body\">\n          <h1 class=\"text-center\">EHR hinzufügen</h1>\n              <form enctype=\"multipart/form-data\" (ngSubmit)=\"saveEhr()\" #contactForm=\"ngForm\">\n                <div class=\"form-group\">\n                  <label for=\"name\">Name</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ehr.name\" name=\"name\" id=\"name\" placeholder=\"Röntgenbild\" required>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"image\">Bild</label>\n                  <div class=\"custom-file\">\n                    <input type=\"file\" (change)=\"handleFileInput($event.target.files)\" class=\"custom-file-input\" name=\"image\" id=\"image\" required>\n                    <label class=\"custom-file-label\">Bild auswählen</label>\n                  </div>\n                </div>\n\n                <p class=\"text-center\">\n                  <button type=\"submit\" class=\"btn btn-success btn-block\" [disabled]=\"!contactForm.form.valid\">Speichern</button>\n                  <a [routerLink]=\"['/epds']\" class=\"btn btn-default\">Abbrechen</a>\n                </p>\n              </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ehr-create/ehr-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EhrCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EhrCreateComponent = (function () {
    function EhrCreateComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.ehr = {};
        this.epdId = '';
        this.fileToUpload = null;
    }
    EhrCreateComponent.prototype.ngOnInit = function () {
        this.epdId = this.route.snapshot.params['id'];
    };
    EhrCreateComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
    };
    EhrCreateComponent.prototype.saveEhr = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('image', this.fileToUpload, this.fileToUpload.name);
        formData.append('name', this.ehr['name']);
        this.http.post('/epd/' + this.epdId + '/ehr', formData)
            .subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['/epds']);
        }, function (err) {
            console.log(err);
        });
    };
    return EhrCreateComponent;
}());
EhrCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-ehr-create',
        template: __webpack_require__("../../../../../src/app/ehr-create/ehr-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ehr-create/ehr-create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], EhrCreateComponent);

var _a, _b, _c;
//# sourceMappingURL=ehr-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/ehr/ehr.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.form-signin .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-signin .form-control:focus {\n  z-index: 2;\n}\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ehr/ehr.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showRequestAccess\" class=\"container text-center\" style=\"padding: 20px;\">\n  <div class=\"row justify-content-md-center\">\n    <div class=\"col-md-6 col-sm-12\">\n      <form class=\"form-signin\" (ngSubmit)=\"requestAccess()\">\n        <h1 class=\"display-1 text-center\"><i class=\"fas fa-lock text-danger\"></i></h1>\n        <br>\n        <p><i>EHR: {{ ehr.id }}</i></p>\n        <h1 class=\"h3 mb-3 font-weight-normal\">EHR Zugriff anfordern</h1>\n\n        <label for=\"publicKey\" class=\"sr-only\">Ihr Public Key</label>\n        <input [(ngModel)]=\"accessRequest.requesterPublicKey\" name=\"requesterPublicKey\" type=\"text\" id=\"publicKey\" class=\"form-control\" placeholder=\"Ihr Public Key\" required=\"\" autofocus=\"\">\n        <small class=\"form-text text-muted text-left\">Fügen Sie Ihren Public Key hier ein.</small>\n        <br>\n        <label for=\"signature\" class=\"sr-only\">Signatur</label>\n        <input [(ngModel)]=\"accessRequest.requesterSignature\" name=\"requesterSignature\" type=\"number\" id=\"signature\" class=\"form-control\" placeholder=\"Ihre Signatur\" required=\"\">\n        <small class=\"form-text text-muted text-left\">Die Signatur erstellen Sie, indem Sie die Zahl 12345 mit Ihrem Private Key verschlüsseln. Benutzen sie das Verschlüsselungstool dazu.</small>\n        <br>\n        <button class=\"btn btn-lg btn-danger btn-block\" type=\"submit\">Zugriff anfordern</button>\n        <a [routerLink]=\"['/epds']\" class=\"btn btn-default text-center\">Abbrechen</a>\n\n        <p class=\"mt-5 mb-3 text-muted\">© IDPA Blockchain Patientendossier 2018</p>\n      </form>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"showAccessResponse\" class=\"container\" style=\"padding: 20px;\">\n  <div class=\"row justify-content-md-center\">\n    <div class=\"col-md-6 col-sm-12\">\n      <form class=\"form-signin\">\n        <h1 *ngIf=\"!accessResponse.valid\" class=\"display-1 text-center\"><i class=\"fas fa-lock text-danger\"></i></h1>\n        <h1 *ngIf=\"accessResponse.valid\" class=\"display-1 text-center\"><i class=\"fas fa-unlock text-success\"></i></h1>\n        <br>\n        <h1 *ngIf=\"accessResponse.valid\" class=\"h3 mb-3 font-weight-normal text-center\">Zugriff gewährt</h1>\n        <h1 *ngIf=\"!accessResponse.valid\" class=\"h3 mb-3 font-weight-normal text-center\">Zugriff verweigert</h1>\n\n        <ul class=\"list-group mb-3\">\n          <li *ngFor=\"let step of accessResponse.ehrAccessSteps\" class=\"list-group-item d-flex justify-content-between lh-condensed\" [ngClass]=\"{'bg-light':step.valid}\">\n            <div [ngClass]=\"{'text-success':step.valid,'text-danger':!step.valid}\">\n              <h6 class=\"my-0\">{{step.title}}</h6>\n              <small class=\"text-muted\" [innerHTML]=\"step.description\"></small>\n            </div>\n            <div *ngIf=\"step.valid\" class=\"text-success\"><h4><i class=\"fas fa-check\"></i></h4></div>\n            <div *ngIf=\"!step.valid\" class=\"text-danger\"><h4><i class=\"fas fa-times\"></i></h4></div>\n          </li>\n        </ul>\n\n        <button *ngIf=\"accessResponse.valid\" (click)=\"showEhr = true; showAccessResponse = false\" class=\"btn btn-lg btn-success btn-block\">Weiter zum EHR</button>\n        <button *ngIf=\"!accessResponse.valid\" (click)=\"retry()\" class=\"btn btn-lg btn-secondary btn-block\">Erneut versuchen</button>\n\n        <p class=\"mt-5 mb-3 text-muted\">© IDPA Blockchain Patientendossier 2018</p>\n      </form>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"showEhr\" class=\"container\">\n  <div class=\"row justify-content-md-center\">\n    <div class=\"col-md-6\" style=\"margin-top: 40px;\">\n      <div class=\"card mb-4 box-shadow\">\n        <!--<h1 class=\"card-img-top display-1 text-center\" style=\"height: 180px; width: 100%; display: block; color: #706f6f; padding: 40px\"><i class=\"fas fa-database\"></i></h1>-->\n        <img class=\"card-img-top\" alt=\"{{ehr.name}} [100%x225]\" style=\"height: 225px; width: 100%; display: block;\" src=\"{{ ehr.imageUrl }}\" data-holder-rendered=\"true\">\n        <div class=\"card-body\">\n          <div class=\"d-flex justify-content-between align-items-center\">\n            <h3>EHR</h3><small class=\"text-muted\"><i>{{ ehr.id }}</i></small>\n          </div>\n\n          <br>\n\n          <p>Beschreibung: <span style=\"float: right;\"><i>{{ ehr.name }}</i></span></p>\n          <p>Im EPD von: <span style=\"float: right;\"><i>{{ ehr.ownerName }}</i></span></p>\n\n          <br>\n\n          <hr>\n\n          <p>Berechtigungen</p>\n\n          <table class=\"table\">\n            <thead>\n              <th>Public Key</th>\n              <th>Besitzer</th>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let premittedPublicKey of permittedPublicKeys\">\n              <td>{{ premittedPublicKey.publicKey }}</td>\n              <td>{{ premittedPublicKey.ownerName }}</td>\n            </tr>\n            </tbody>\n          </table>\n          <a [routerLink]=\"['/epds']\" class=\"btn btn-secondary btn-block\">Zurück</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ehr/ehr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EhrComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EhrComponent = (function () {
    function EhrComponent(route, http) {
        this.route = route;
        this.http = http;
        this.showRequestAccess = true;
        this.showAccessResponse = false;
        this.showEhr = false;
        this.ehr = {};
        this.accessResponse = {};
        this.accessRequest = {};
        this.permittedPublicKeys = [];
    }
    EhrComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ehrId = this.route.snapshot.params['id'];
        this.http.get('/ehr/' + this.ehrId).subscribe(function (data) {
            _this.ehr = data;
            var _loop_1 = function (i) {
                _this.http.get('/get-pk-owner-name/' + _this.ehr['permittedPublicKeys'][i]).subscribe(function (response) {
                    _this.permittedPublicKeys.push({
                        publicKey: _this.ehr['permittedPublicKeys'][i],
                        ownerName: response['name']
                    });
                });
            };
            for (var i = 0; i < _this.ehr['permittedPublicKeys'].length; i++) {
                _loop_1(i);
            }
        });
    };
    EhrComponent.prototype.requestAccess = function () {
        var _this = this;
        this.http.post('/ehr-access-request/' + this.ehrId, this.accessRequest)
            .subscribe(function (res) {
            _this.accessResponse = res;
            _this.showRequestAccess = false;
            _this.showEhr = false;
            _this.showAccessResponse = true;
        }, function (err) {
            console.log(err);
        });
    };
    EhrComponent.prototype.retry = function () {
        this.accessResponse = {};
        this.accessRequest = {};
        this.showRequestAccess = true;
        this.showEhr = false;
        this.showAccessResponse = false;
    };
    EhrComponent.prototype.openEhr = function () {
        this.showRequestAccess = false;
        this.showAccessResponse = false;
        this.showEhr = true;
    };
    return EhrComponent;
}());
EhrComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-ehr',
        template: __webpack_require__("../../../../../src/app/ehr/ehr.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ehr/ehr.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], EhrComponent);

var _a, _b;
//# sourceMappingURL=ehr.component.js.map

/***/ }),

/***/ "../../../../../src/app/encryption-tool/encryption-tool.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/encryption-tool/encryption-tool.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-md-center\">\n    <div class=\"col-md-6 col-sm-12\" style=\"margin-top: 40px;\">\n      <div class=\"card mb-4 box-shadow\">\n        <!--<h1 class=\"card-img-top display-1 text-center\" style=\"height: 180px; width: 100%; display: block; color: #706f6f; padding: 40px\"><i class=\"fas fa-database\"></i></h1>-->\n        <h1 class=\"card-img-top display-1 text-center\" style=\"height: 140px; width: 100%; display: block; padding: 40px\"><i class=\"fas fa-user-secret\"></i></h1>\n        <div class=\"card-body\">\n          <h1 class=\"text-center\">Verschlüsseln</h1>\n          <form (ngSubmit)=\"encryptText()\" #contactForm=\"ngForm\">\n            <div class=\"form-group\">\n              <label for=\"number\">Nummer</label>\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"number\" name=\"number\" id=\"number\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"key\">Schlüssel</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"key\" name=\"key\" id=\"key\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"encrypted\">Verschlüsselt</label>\n              <input readonly type=\"number\" class=\"form-control\" [(ngModel)]=\"encrypted\" name=\"encrypted\" id=\"encrypted\">\n            </div>\n            <p class=\"text-center\">\n              <button type=\"submit\" class=\"btn btn-success btn-block\">Verschlüsseln</button>\n              <a [routerLink]=\"['/epds']\" class=\"btn btn-default\">Zurück</a>\n            </p>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/encryption-tool/encryption-tool.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncryptionToolComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EncryptionToolComponent = (function () {
    function EncryptionToolComponent(http) {
        this.http = http;
    }
    EncryptionToolComponent.prototype.ngOnInit = function () {
    };
    EncryptionToolComponent.prototype.encryptText = function () {
        var _this = this;
        this.http.post('/encrypt', { key: this.key, number: this.number })
            .subscribe(function (res) {
            _this.encrypted = res['encryptedNumber'];
        }, function (err) {
            console.log(err);
        });
    };
    return EncryptionToolComponent;
}());
EncryptionToolComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-encryption-tool',
        template: __webpack_require__("../../../../../src/app/encryption-tool/encryption-tool.component.html"),
        styles: [__webpack_require__("../../../../../src/app/encryption-tool/encryption-tool.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], EncryptionToolComponent);

var _a;
//# sourceMappingURL=encryption-tool.component.js.map

/***/ }),

/***/ "../../../../../src/app/epd-create/epd-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/epd-create/epd-create.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row justify-content-md-center\">\n    <div class=\"col-md-6 col-sm-12\" style=\"margin-top: 40px;\">\n      <div class=\"card mb-4 box-shadow\">\n        <h1 class=\"card-img-top display-1 text-center\" style=\"height: 140px; width: 100%; display: block; padding: 40px\"><i class=\"fas fa-plus-circle\"></i></h1>\n        <div class=\"card-body\">\n          <h1 class=\"text-center\">EPD eröffnen</h1>\n          <form (ngSubmit)=\"saveEpd()\" #contactForm=\"ngForm\">\n            <div class=\"form-group\">\n              <label for=\"name\">Name</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"epd.name\" name=\"name\" id=\"name\" placeholder=\"Hans Muster\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"publicKey\">Public Key</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"epd.publicKey\" name=\"publicKey\" placeholder=\"54321N123456\" id=\"publicKey\" required>\n            </div>\n            <p class=\"text-center\">\n              <button type=\"submit\" class=\"btn btn-success btn-block\" [disabled]=\"!contactForm.form.valid\">Eröffnen</button>\n              <a [routerLink]=\"['/epds']\" class=\"btn btn-default\">Abbrechen</a>\n            </p>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/epd-create/epd-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EpdCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EpdCreateComponent = (function () {
    function EpdCreateComponent(http, router) {
        this.http = http;
        this.router = router;
        this.epd = {};
    }
    EpdCreateComponent.prototype.ngOnInit = function () {
    };
    EpdCreateComponent.prototype.saveEpd = function () {
        var _this = this;
        this.http.post('/epd', this.epd)
            .subscribe(function (res) {
            _this.router.navigate(['/epds']);
        }, function (err) {
            console.log(err);
        });
    };
    return EpdCreateComponent;
}());
EpdCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-epd-create',
        template: __webpack_require__("../../../../../src/app/epd-create/epd-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/epd-create/epd-create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], EpdCreateComponent);

var _a, _b;
//# sourceMappingURL=epd-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/epd-detail/epd-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/epd-detail/epd-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p><a [routerLink]=\"['/epds']\">Zurück</a></p>\n  <h1>EPD: {{ epd.name }}</h1>\n  <a [routerLink]=\"['/ehr-create', epd.id]\" class=\"btn btn-default btn-lg\">Daten hinzufügen\n    <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n  </a>\n  <dl *ngFor=\"let ehr of epd.ehrs\" class=\"list\">\n    <dt>Name</dt>\n    <dd>{{ ehr.name }}</dd>\n    <dt>Permissions</dt>\n    <dd *ngFor=\"let permittedPublicKey of ehr.permittedPublicKeys\">{{ permittedPublicKey }}</dd>\n  </dl>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/epd-detail/epd-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EpdDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EpdDetailComponent = (function () {
    function EpdDetailComponent(route, http) {
        this.route = route;
        this.http = http;
        this.epd = {};
    }
    EpdDetailComponent.prototype.ngOnInit = function () {
        this.getEpdDetail(this.route.snapshot.params['id']);
    };
    EpdDetailComponent.prototype.getEpdDetail = function (id) {
        var _this = this;
        this.http.get('/epd/' + id).subscribe(function (data) {
            _this.epd = data;
        });
    };
    return EpdDetailComponent;
}());
EpdDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-epd-detail',
        template: __webpack_require__("../../../../../src/app/epd-detail/epd-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/epd-detail/epd-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], EpdDetailComponent);

var _a, _b;
//# sourceMappingURL=epd-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/epds/epds.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/epds/epds.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div _ngcontent-c1=\"\" class=\"col-sm-12 text-center m-5\">\n      <h1 _ngcontent-c1=\"\" class=\"jumbotron-heading\">EPDs</h1>\n    </div>\n\n    <div *ngFor=\"let epd of epds\" class=\"col-md-4\">\n      <div class=\"card mb-4 box-shadow\">\n        <img class=\"card-img-top\" alt=\"{{epd.name}} [100%x225]\" style=\"height: 225px; width: 100%; display: block;\" src=\"/assets/front_page_logo_v5.svg\" data-holder-rendered=\"true\">\n        <hr>\n        <div class=\"card-body\">\n          <div class=\"d-flex justify-content-between align-items-center\">\n            <h3>{{ epd.name }}</h3><small class=\"text-muted\">9 mins</small>\n          </div>\n\n          <p>Public Key: <span class=\"text-right\" style=\"float:right;\"><i>{{ epd.publicKey }}</i></span></p>\n\n          <p>Daten</p>\n\n          <table class=\"table\">\n            <thead>\n              <th>Record</th>\n              <th>Berechtigen</th>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let ehr of epd.ehrs\">\n              <td><a [routerLink]=\"['/ehr', ehr.id]\">{{ (ehr.id.length>12)? (ehr.id | slice:0:12)+'..':(ehr.id) }}</a></td>\n              <td><a [routerLink]=\"['/add-permission', ehr.id]\" class=\"btn btn-outline-danger btn-sm\"><i class=\"fas fa-lock\"></i></a></td>\n            </tr>\n            </tbody>\n          </table>\n          <a [routerLink]=\"['/ehr-create', epd.id]\" class=\"btn btn-secondary btn-block\">EHR hinzufügen</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"card mb-4 box-shadow\">\n        <img class=\"card-img-top\" style=\"height: 225px; width: 100%; display: block;\" src=\"/assets/plus.svg\" data-holder-rendered=\"true\">\n        <div class=\"card-body\">\n          <a [routerLink]=\"['/epd-create']\" class=\"btn btn-primary btn-block\">Neues EPD eröffnen</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <hr>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h1>Tools</h1>\n    </div>\n    <div class=\"col-md-4 col-sm-12\">\n      <div class=\"card mb-4 box-shadow\">\n        <h1 class=\"card-img-top display-1 text-center\" style=\"height: 140px; width: 100%; display: block; color: #706f6f; padding: 40px\"><i class=\"fas fa-key\"></i></h1>\n        <div class=\"card-body\">\n          <h3 class=\"text-center\">Schlüsselpaare erzeugen</h3>\n          <br>\n          <a [routerLink]=\"['/key-create']\" class=\"btn btn-secondary btn-block\">Tool öffnen</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4 col-sm-12\">\n      <div class=\"card mb-4 box-shadow\">\n        <h1 class=\"card-img-top display-1 text-center\" style=\"height: 140px; width: 100%; display: block; color: #706f6f; padding: 40px\"><i class=\"fas fa-user-secret\"></i></h1>\n        <div class=\"card-body\">\n          <h3 class=\"text-center\">Verschlüsseln</h3>\n          <br>\n          <a [routerLink]=\"['/encryption-tool']\" class=\"btn btn-secondary btn-block\">Tool öffnen</a>\n        </div>\n      </div>\n    </div>\n    <!--\n    <div class=\"col-md-4 col-sm-12\">\n      <div class=\"card mb-4 box-shadow\">\n        <h1 class=\"card-img-top display-1 text-center\" style=\"height: 140px; width: 100%; display: block; color: #706f6f; padding: 40px\"><i class=\"fas fa-exchange-alt\"></i></h1>\n        <div class=\"card-body\">\n          <h3 class=\"text-center\">Text zu Nummer</h3>\n          <br>\n          <a [routerLink]=\"['/texttonumber-tool']\" class=\"btn btn-secondary btn-block\">Tool öffnen</a>\n        </div>\n      </div>\n    </div>\n     -->\n  </div>\n  <p class=\"mt-5 mb-3 text-muted\">© IDPA Blockchain Patientendossier</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/epds/epds.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EpdsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EpdsComponent = (function () {
    function EpdsComponent(http) {
        this.http = http;
    }
    EpdsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/epd').subscribe(function (data) {
            _this.epds = data;
        });
    };
    EpdsComponent.prototype.saveEpd = function () {
        var _this = this;
        this.http.post('/epd', this.test)
            .subscribe(function (res) {
            _this.epds.push(res);
            _this.test.name = null;
            _this.test.publicKey = null;
        }, function (err) {
            console.log(err);
        });
    };
    return EpdsComponent;
}());
EpdsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-epds',
        template: __webpack_require__("../../../../../src/app/epds/epds.component.html"),
        styles: [__webpack_require__("../../../../../src/app/epds/epds.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], EpdsComponent);

var _a;
//# sourceMappingURL=epds.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n * Globals\n */\n\n/* Links */\na,\na:focus,\na:hover {\n  color: #fff;\n}\n\n/* Custom default button */\n.btn-secondary,\n.btn-secondary:hover,\n.btn-secondary:focus {\n  color: #333;\n  text-shadow: none; /* Prevent inheritance from `body` */\n  background-color: #fff;\n  border: .05rem solid #fff;\n}\n\n\n/*\n * Base structure\n */\n\n#home_container {\n  height: 100%;\n  background-color: #333;\n}\n\n#home_container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  color: #fff;\n  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);\n  box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);\n}\n\n.cover-container {\n  max-width: 42em;\n}\n\n\n/*\n * Header\n */\n.masthead {\n  margin-bottom: 2rem;\n}\n\n.masthead-brand {\n  margin-bottom: 0;\n}\n\n.nav-masthead .nav-link {\n  padding: .25rem 0;\n  font-weight: 700;\n  color: rgba(255, 255, 255, .5);\n  background-color: transparent;\n  border-bottom: .25rem solid transparent;\n}\n\n.nav-masthead .nav-link:hover,\n.nav-masthead .nav-link:focus {\n  border-bottom-color: rgba(255, 255, 255, .25);\n}\n\n.nav-masthead .nav-link + .nav-link {\n  margin-left: 1rem;\n}\n\n.nav-masthead .active {\n  color: #fff;\n  border-bottom-color: #fff;\n}\n\n@media (min-width: 48em) {\n  .masthead-brand {\n    float: left;\n  }\n  .nav-masthead {\n    float: right;\n  }\n}\n\n\n/*\n * Cover\n */\n.cover {\n  padding: 0 1.5rem;\n}\n.cover .btn-lg {\n  padding: .75rem 1.25rem;\n  font-weight: 700;\n}\n\n\n/*\n * Footer\n */\n.mastfoot {\n  color: rgba(255, 255, 255, .5);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"home_container\">\n<div class=\"cover-container d-flex h-100 p-3 mx-auto flex-column text-center\">\n  <header class=\"masthead mb-auto\">\n    <div class=\"inner\">\n    </div>\n  </header>\n\n  <main role=\"main\" class=\"inner cover\">\n    <img src=\"/assets/front_page_logo@3x.svg\" alt=\"\">\n    <h1 class=\"cover-heading\">Blockchain Patientendossier</h1>\n    <p class=\"lead\">Für unsere Matura Arbeit haben einen Prototyp entwickelt. Durch asymmetrische Verschlüsselung soll ein Lösungsansatz für ein blockchainbasiertes EPD aufgezeigt werden.</p>\n    <p class=\"lead\">\n      <a [routerLink]=\"['/epds']\" class=\"btn btn-lg btn-secondary\">Hands on!</a>\n    </p>\n  </main>\n\n  <footer class=\"mastfoot mt-auto\">\n    <div class=\"inner\">\n      <p><a href=\"mailto:noethiger.mike@gmail.com\" target=\"_top\">Mike Nöthiger</a> & <a href=\"mailto:ga.solongoo@gmail.com\" target=\"_top\">Solongoo Gantulga</a></p>\n    </div>\n  </footer>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/key-create/key-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/key-create/key-create.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n  <div class=\"row justify-content-md-center\">\n    <div class=\"col-md-6 col-sm-12\" style=\"margin-top: 40px;\">\n      <div class=\"card mb-4 box-shadow\">\n        <!--<h1 class=\"card-img-top display-1 text-center\" style=\"height: 180px; width: 100%; display: block; color: #706f6f; padding: 40px\"><i class=\"fas fa-database\"></i></h1>-->\n        <h1 class=\"card-img-top display-1 text-center\" style=\"height: 140px; width: 100%; display: block; padding: 40px\"><i class=\"fas fa-key\"></i></h1>\n        <div class=\"card-body\">\n          <h1 class=\"text-center\">Schlüsselpaar erzeugen</h1>\n\n          <form (ngSubmit)=\"generateKeys()\" #contactForm=\"ngForm\">\n            <div class=\"form-group\">\n              <label for=\"size\">Schlüssellänge</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"generation.size\" name=\"size\" id=\"size\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"publicKey\">Public Key</label>\n              <input readonly type=\"text\" class=\"form-control\" [(ngModel)]=\"keypair.publicKey\" name=\"publicKey\" id=\"publicKey\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"privateKey\">Private Key</label>\n              <input readonly type=\"text\" class=\"form-control\" [(ngModel)]=\"keypair.privateKey\" name=\"privateKey\" id=\"privateKey\">\n            </div>\n            <p class=\"text-center\">\n              <button type=\"submit\" class=\"btn btn-success btn-block\">Erzeugen</button>\n              <a [routerLink]=\"['/epds']\" class=\"btn btn-default\">Abbrechen</a>\n            </p>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row justify-content-md-center\">\n    <div class=\"col-md-6 col-sm-12\">\n      <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\n        <span class=\"text-muted\">Herleitung</span>\n      </h4>\n      <ul class=\"list-group mb-3\">\n        <li *ngFor=\"let step of keypair.keyCreationSteps\" class=\"list-group-item d-flex justify-content-between lh-condensed\">\n          <div>\n            <h6 class=\"my-0\">{{step.title}}</h6>\n            <small class=\"text-muted\" [innerHTML]=\"step.description\"></small>\n          </div>\n          <div><h4><span class=\"badge badge-secondary badge-pill\">{{ keypair.keyCreationSteps.indexOf(step) + 1 }}</span></h4></div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/key-create/key-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KeyCreateComponent = (function () {
    function KeyCreateComponent(http) {
        this.http = http;
        this.keypair = {};
        this.generation = {
            size: 3
        };
    }
    KeyCreateComponent.prototype.ngOnInit = function () {
        this.generateKeys();
    };
    KeyCreateComponent.prototype.generateKeys = function () {
        var _this = this;
        this.http.post('/keys', this.generation)
            .subscribe(function (res) {
            _this.keypair = res;
        }, function (err) {
            console.log(err);
        });
    };
    return KeyCreateComponent;
}());
KeyCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-key-create',
        template: __webpack_require__("../../../../../src/app/key-create/key-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/key-create/key-create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], KeyCreateComponent);

var _a;
//# sourceMappingURL=key-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/texttonumber-tool/texttonumber-tool.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/texttonumber-tool/texttonumber-tool.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"display-1 text-center\"><i class=\"fas fa-exchange-alt\"></i></h1>\n  <h1 class=\"text-center\">Text zu Nummern</h1>\n  <div class=\"row justify-content-md-center\">\n    <div class=\"col-md-6 cold-sm-12\">\n      <form (ngSubmit)=\"convertText()\" #contactForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"text\">Text</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"text\" name=\"text\" id=\"text\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"number\">Nummer</label>\n          <input readonly type=\"text\" class=\"form-control\" [(ngModel)]=\"number\" name=\"number\" id=\"number\">\n        </div>\n        <div class=\"form-group\">\n          <a [routerLink]=\"['/epds']\" class=\"btn btn-default\">Zurück</a>\n          <button type=\"submit\" class=\"btn btn-success\">Konvertieren</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/texttonumber-tool/texttonumber-tool.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TexttonumberToolComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TexttonumberToolComponent = (function () {
    function TexttonumberToolComponent(http) {
        this.http = http;
    }
    TexttonumberToolComponent.prototype.ngOnInit = function () {
        this.text = 'secret';
        this.convertText();
    };
    TexttonumberToolComponent.prototype.convertText = function () {
        var _this = this;
        this.http.post('/utility/texttonumber', { text: this.text })
            .subscribe(function (res) {
            _this.number = res['number'];
        }, function (err) {
            console.log(err);
        });
    };
    return TexttonumberToolComponent;
}());
TexttonumberToolComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-texttonumber-tool',
        template: __webpack_require__("../../../../../src/app/texttonumber-tool/texttonumber-tool.component.html"),
        styles: [__webpack_require__("../../../../../src/app/texttonumber-tool/texttonumber-tool.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], TexttonumberToolComponent);

var _a;
//# sourceMappingURL=texttonumber-tool.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map