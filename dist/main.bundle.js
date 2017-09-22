webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categorize_categorize_component__ = __webpack_require__("../../../../../src/app/categorize/categorize.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
    { path: "dashboard", component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: "list", component: __WEBPACK_IMPORTED_MODULE_4__list_list_component__["a" /* ListComponent */] },
    { path: "list/:index", component: __WEBPACK_IMPORTED_MODULE_4__list_list_component__["a" /* ListComponent */] },
    { path: "categorize/:category/:document", component: __WEBPACK_IMPORTED_MODULE_2__categorize_categorize_component__["a" /* CategorizeComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
/* unused harmony export MyHammerConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categorize_categorize_component__ = __webpack_require__("../../../../../src/app/categorize/categorize.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_document_types_service__ = __webpack_require__("../../../../../src/app/shared/document-types.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_documents_service__ = __webpack_require__("../../../../../src/app/shared/documents.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var MyHammerConfig = (function (_super) {
    __extends(MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            // override hammerjs default configuration
            'pan': { threshold: 5 },
            'swipe': {
                velocity: 0.4,
                threshold: 20,
                direction: 31 // /!\ ugly hack to allow swipe in all direction
            },
        };
        return _this;
    }
    return MyHammerConfig;
}(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* HammerGestureConfig */]));

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__categorize_categorize_component__["a" /* CategorizeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__list_list_component__["a" /* ListComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__shared_document_types_service__["a" /* DocumentTypesService */],
            __WEBPACK_IMPORTED_MODULE_9__shared_documents_service__["a" /* DocumentsService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* HAMMER_GESTURE_CONFIG */],
                useClass: MyHammerConfig
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/categorize/categorize.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/categorize/categorize.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{category.name}}</h1>\n\n<p>\n  Belegtyp wählen:\n</p>\n\n<span *ngFor=\"let documentType of allDocumentTypes\">\n  <input type=\"radio\" name=\"document_type\" value=\"{{documentType}}\" [(ngModel)]=\"selectedDocumentType\"> {{documentType}} <br>\n</span>\n\n<p>\n  <a routerLink=\"/dashboard\">Zurück</a>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/categorize/categorize.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategorizeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_document_types_service__ = __webpack_require__("../../../../../src/app/shared/document-types.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_documents_service__ = __webpack_require__("../../../../../src/app/shared/documents.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategorizeComponent = (function () {
    function CategorizeComponent(route, router, documentTypesService, documentsService) {
        this.route = route;
        this.router = router;
        this.documentTypesService = documentTypesService;
        this.documentsService = documentsService;
    }
    Object.defineProperty(CategorizeComponent.prototype, "selectedDocumentType", {
        set: function (value) {
            this._selectedDocumentType = value;
            this.document.category = this.category.id;
            this.document.type = this._selectedDocumentType;
            this.router.navigate(['/dashboard']);
        },
        enumerable: true,
        configurable: true
    });
    CategorizeComponent.prototype.ngOnInit = function () {
        this.refreshRouterParameters(this.route.snapshot.params);
        this.category = this.documentTypesService.getCategory(this.categoryId);
        this.allDocumentTypes = this.category.availableTypes.map(function (t) { return t.name; });
        this.document = this.documentsService.getDocument(this.documentId);
        console.log(this.document);
    };
    CategorizeComponent.prototype.refreshRouterParameters = function (params) {
        this.categoryId = params.category;
        this.documentId = parseInt(params.document);
    };
    return CategorizeComponent;
}());
CategorizeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-categorize',
        template: __webpack_require__("../../../../../src/app/categorize/categorize.component.html"),
        styles: [__webpack_require__("../../../../../src/app/categorize/categorize.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_document_types_service__["a" /* DocumentTypesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_document_types_service__["a" /* DocumentTypesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_documents_service__["a" /* DocumentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_documents_service__["a" /* DocumentsService */]) === "function" && _d || Object])
], CategorizeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=categorize.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div\n  (swipeleft)=\"swipe($event.type)\"\n  (swiperight)=\"swipe($event.type)\"\n  (swipeup)=\"swipe($event.type)\"\n  (swipedown)=\"swipe($event.type)\"\n>\n  <img\n    class=\"mySlides img-responsive\"\n    [src]=\"'assets/images/' + document.image\">\n</div>\n\n<a [routerLink]=\"['/categorize', 'incoming_invoice', document.id]\">Rechnungseingang</a>\n<a [routerLink]=\"['/categorize', 'outgoing_invoice', document.id]\">Rechnungsausgang</a>\n<a [routerLink]=\"['/categorize', 'cash_register', document.id]\">Kasse</a>\n<a [routerLink]=\"['/categorize', 'other', document.id]\">Sonstige</a>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_documents_service__ = __webpack_require__("../../../../../src/app/shared/documents.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(router, service) {
        this.router = router;
        this.service = service;
        this.selectCategory = [
            { swipe: 'left', category: 'outgoing_invoice' },
            { swipe: 'right', category: 'incoming_invoice' },
            { swipe: 'up', category: 'cash_register' },
            { swipe: 'down', category: 'other' },
        ];
    }
    DashboardComponent.prototype.swipe = function (action) {
        console.log('swipe it baby!' + action);
        var category = this.selectCategory
            .filter(function (d) { return 'swipe' + d.swipe === action; })
            .map(function (d) { return d.category; })[0];
        this.router.navigate(['/categorize', category, this.document.id]);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.documents = this.service
            .getAllDocuments()
            .filter(function (d) { return !d.category; });
        this.document = this.documents[0];
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_documents_service__["a" /* DocumentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_documents_service__["a" /* DocumentsService */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{currentDocument.category}}</h1>\n<h2>{{currentDocument.type}}</h2>\n<p>\n  <img src=\"assets/images/{{currentDocument.image}}\">\n</p>\n\n<a (click)=\"previousDocument()\">Zurück</a>\n<a (click)=\"nextDocument()\">Vor</a>\n\n<button>Rückgängig</button>\n"

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_documents_service__ = __webpack_require__("../../../../../src/app/shared/documents.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = (function () {
    function ListComponent(route, service) {
        this.route = route;
        this.service = service;
        this.currentIndex = 0;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.refreshRouteParameters(this.route.snapshot.params);
        this.documents = this.service.getAllDocuments();
        this.refreshDocument();
    };
    ListComponent.prototype.previousDocument = function () {
        if (this.currentIndex <= 0) {
            return;
        }
        this.currentIndex--;
        this.refreshDocument();
    };
    ListComponent.prototype.nextDocument = function () {
        if (this.currentIndex >= this.documents.length) {
            return;
        }
        this.currentIndex++;
        this.refreshDocument();
    };
    ListComponent.prototype.refreshRouteParameters = function (params) {
        this.currentIndex = params.index || 0;
    };
    ListComponent.prototype.refreshDocument = function () {
        this.currentDocument = this.documents[this.currentIndex];
    };
    return ListComponent;
}());
ListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-list',
        template: __webpack_require__("../../../../../src/app/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/list/list.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_documents_service__["a" /* DocumentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_documents_service__["a" /* DocumentsService */]) === "function" && _b || Object])
], ListComponent);

var _a, _b;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/category.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
var Category = (function () {
    function Category(name, id, availableTypes) {
        this.name = name;
        this.id = id;
        this.availableTypes = availableTypes;
    }
    return Category;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ "../../../../../src/app/shared/document-type.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentType; });
var DocumentType = (function () {
    function DocumentType(name) {
        this.name = name;
    }
    return DocumentType;
}());

//# sourceMappingURL=document-type.js.map

/***/ }),

/***/ "../../../../../src/app/shared/document-types.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentTypesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category__ = __webpack_require__("../../../../../src/app/shared/category.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__document_type__ = __webpack_require__("../../../../../src/app/shared/document-type.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocumentTypesService = (function () {
    function DocumentTypesService() {
        this.nothing = new __WEBPACK_IMPORTED_MODULE_2__document_type__["a" /* DocumentType */]("Keine Auswahl");
        this.categories = [
            new __WEBPACK_IMPORTED_MODULE_1__category__["a" /* Category */]("Rechnungseingang", "incoming_invoice", [
                this.nothing,
                new __WEBPACK_IMPORTED_MODULE_2__document_type__["a" /* DocumentType */]("Hauptsitz"),
                new __WEBPACK_IMPORTED_MODULE_2__document_type__["a" /* DocumentType */]("Filiale 1"),
                new __WEBPACK_IMPORTED_MODULE_2__document_type__["a" /* DocumentType */]("Filiale 2"),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__category__["a" /* Category */]("Rechnungsausgang", "outgoing_invoice", [
                this.nothing,
                new __WEBPACK_IMPORTED_MODULE_2__document_type__["a" /* DocumentType */]("Hauptsitz"),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__category__["a" /* Category */]("Kasse", "cash_register", [
                this.nothing,
                new __WEBPACK_IMPORTED_MODULE_2__document_type__["a" /* DocumentType */]("Hauptsitz"),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__category__["a" /* Category */]("Sonstige", "other", [
                this.nothing,
                new __WEBPACK_IMPORTED_MODULE_2__document_type__["a" /* DocumentType */]("Hauptsitz"),
            ]),
        ];
    }
    DocumentTypesService.prototype.getCategory = function (id) {
        var found = this
            .getAllCategories()
            .filter(function (c) { return c.id === id; })[0];
        return found;
    };
    DocumentTypesService.prototype.getAllCategories = function () {
        return this.categories;
    };
    return DocumentTypesService;
}());
DocumentTypesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DocumentTypesService);

//# sourceMappingURL=document-types.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/document.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Document; });
var Document = (function () {
    function Document(id, image) {
        this.id = id;
        this.image = image;
    }
    return Document;
}());

//# sourceMappingURL=document.js.map

/***/ }),

/***/ "../../../../../src/app/shared/documents.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__document__ = __webpack_require__("../../../../../src/app/shared/document.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentsService = (function () {
    function DocumentsService() {
        this.documents = [
            new __WEBPACK_IMPORTED_MODULE_1__document__["a" /* Document */](1, 'invoice1.png'),
            new __WEBPACK_IMPORTED_MODULE_1__document__["a" /* Document */](2, 'invoice2.png'),
            new __WEBPACK_IMPORTED_MODULE_1__document__["a" /* Document */](3, 'invoice3.jpg'),
            new __WEBPACK_IMPORTED_MODULE_1__document__["a" /* Document */](4, 'invoice4.jpg'),
            new __WEBPACK_IMPORTED_MODULE_1__document__["a" /* Document */](5, 'invoice5.png'),
        ];
    }
    DocumentsService.prototype.getAllDocuments = function () {
        return this.documents;
    };
    DocumentsService.prototype.getDocument = function (documentId) {
        return this
            .getAllDocuments()
            .filter(function (d) { return d.id === documentId; })[0];
    };
    return DocumentsService;
}());
DocumentsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DocumentsService);

//# sourceMappingURL=documents.service.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map