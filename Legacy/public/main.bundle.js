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

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_views_pages_page_component__ = __webpack_require__("../../../../../src/app/components/views/pages/page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_views_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/views/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_views_login_login_component__ = __webpack_require__("../../../../../src/app/components/views/login/login.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Zinc Imports



var routes = [
    { path: '', redirectTo: '/pages', pathMatch: 'full' },
    { path: 'pages', component: __WEBPACK_IMPORTED_MODULE_2__components_views_pages_page_component__["a" /* PageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__components_views_login_login_component__["a" /* LoginComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__components_views_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

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
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: "\n  <style>\n  @import url('https://fonts.googleapis.com/css?family=Raleway:200,400,600|Roboto:200,400,600');\n  </style>\n<nav-top></nav-top>\n<router-outlet></router-outlet>\n<nav-bottom></nav-bottom>\n"
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_navigation_nav_bottom_component__ = __webpack_require__("../../../../../src/app/components/navigation/nav-bottom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navigation_nav_top_component__ = __webpack_require__("../../../../../src/app/components/navigation/nav-top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_views_pages_page_component__ = __webpack_require__("../../../../../src/app/components/views/pages/page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_views_login_login_component__ = __webpack_require__("../../../../../src/app/components/views/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_views_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/views/page-not-found/page-not-found.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_navigation_nav_bottom_component__["a" /* NavBottomComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_navigation_nav_top_component__["a" /* NavTopComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_views_pages_page_component__["a" /* PageComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_views_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_views_login_login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/navigation/nav-bottom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBottomComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBottomComponent = (function () {
    function NavBottomComponent() {
        this.github = {
            title: 'GitHub',
            link: 'https://github.com/dbarroso1/Zinc-CMS',
            about: 'https://github.com/dbarroso1/Zinc-CMS'
        };
    }
    NavBottomComponent.prototype.ngOnInit = function () {
    };
    return NavBottomComponent;
}());
NavBottomComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'nav-bottom',
        template: __webpack_require__("../../../../../src/app/components/navigation/templates/nav-bottom.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navigation/templates/nav-bottom.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavBottomComponent);

//# sourceMappingURL=nav-bottom.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navigation/nav-top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavTopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavTopComponent = (function () {
    function NavTopComponent() {
    }
    NavTopComponent.prototype.ngOnInit = function () {
    };
    return NavTopComponent;
}());
NavTopComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'nav-top',
        template: __webpack_require__("../../../../../src/app/components/navigation/templates/nav-top.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navigation/templates/nav-top.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavTopComponent);

//# sourceMappingURL=nav-top.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navigation/templates/nav-bottom.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\r\n    z-index: 5;\r\n    padding: 1rem; \r\n    background: #272727;\r\n    text-align: center;\r\n    font-family: 'Roboto', sans-serif;\r\n  }\r\n\r\n/* 1. Meta Sections\r\n * Area of the footer the has Links \r\n */\r\n#meta{\r\n    font-size: 12px;\r\n    display: inline;\r\n    color: white;\r\n} #meta a {\r\n    text-decoration: none;\r\n    color: inherit;\r\n    transition: 200ms;\r\n} #meta a:hover {\r\n    color: #FFB0FF;\r\n}\r\n\r\n/* 2. Footer Sections\r\n * Area of the footer that has the Copywright info and App info\r\n */\r\n#copywright{\r\n    color: white;\r\n    font-size: 12px;\r\n} #copywright a{\r\n    text-decoration: none;\r\n    color: inherit;\r\n    transition: 200ms;\r\n} #copywright a:hover {\r\n    color: #FFB0FF;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigation/templates/nav-bottom.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div id=\"meta\">\n    <a href=\"#\"> Home </a> |\n    <a href=\"#\"> Sign in </a> |\n    <a href=\"#\"> Sign up </a> |\n    <a [href]=github.about> About </a> |\n    <a [href]=github.link> {{github.title}} </a>\n  </div>\n  <div id=\"copywright\">\n    <a href=\"http://zn30.us\">2017 © Zinc Media Corp</a>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/navigation/templates/nav-top.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navi-wrapper{\r\n    z-index: 10;\r\n    position: fixed;\r\n    right: 0;\r\n    top: 0;\r\n    left: 0;\r\n    background: #272727;\r\n    font-family: 'Raleway', sans-serif;\r\n    padding: 10px 12px;\r\n}\r\n.navi-logo{\r\n    float: left;\r\n}.navi-logo a {\r\n    color: white;\r\n    text-decoration: none;\r\n}.navi-logo #text-logo{\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n}\r\n.navi-login{\r\n    float: right;\r\n}\r\n\r\n\r\nul {\r\n    float: right;\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n}\r\nli {\r\n    float: left;\r\n}li a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    text-decoration: none;\r\n}li a:hover {\r\n    background-color: #111;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigation/templates/nav-top.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navi-wrapper\">\n  <div class=\"navi-container\">\n    <div class=\"navi-logo\">\n      <!-- Either Image or Text Logo -->\n      <a id=\"text-logo\" href=\"/\">Zinc-CMS</a>\n      <img src=\"\" alt=\"\">\n    </div>\n    <div class=\"navi-login\">\n      <ul>\n        <li>\n          <a href=\"/login\"> Sign In </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/views/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/views/login/template/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/views/login/template/login.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/views/login/template/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    margin-top: 40px;\r\n    padding-top: 10%;\r\n    background: #E7E7E7;\r\n    position: relative;\r\n    z-index: 1;\r\n    top: 0;\r\n}\r\n.login-wrapper{  \r\n    display: block;\r\n    margin: auto;\r\n    width: 40%;\r\n    padding: 24px;\r\n    background: #fff;\r\n    border-radius: 2px;\r\n    text-align: center;     \r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n} .login-wrapper input{ \r\n    margin: 6px 3px;\r\n    padding: 2px 6px;\r\n}.login-wrapper button{ \r\n    padding: 4px;\r\n    margin: 6px;\r\n    width: 128px;\r\n} .login-wrapper #login-header {\r\n    font-family: 'Raleway', sans-serif;\r\n} .login-wrapper #login-container {\r\n    font-family: 'Roboto', sans-serif;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/views/login/template/login.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"login-wrapper\">\n    <div id=\"login-header\">\n      <h1>Login to Zinc</h1>\n      <hr>\n    </div>\n    <div id=\"login-container\">\n      <form>\n        <br>  \n        <p>Please Enter your username and password to continue</p>\n        <br>\n        <label>Username:</label>\n        <input type=\"text\" placeholder=\"Username\">\n        <br>\n        <label>Password:</label>\n        <input type=\"password\" placeholder=\"Password\">\n        <br>\n        <button type=\"submit\">Submit</button>\n      </form>\n      <hr>\n      <br>\n      <p>Forgot your Password? <a href=\"/recover-pass\">Click here</a> or if you</p>\n      <p>don't have an account yet? <a href=\"/register\">Reister Now!</a></p>\n      <br>\n      <p>Not sure why your here? <a href=\"/\">Go Back.</a></p>    \n    </div>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/views/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-page-not-found',
        template: "\n  <style> body{ margin-top: 40px; font-family: 'Raleway', sans-serif; }.error{ margin: auto; width: 50%; padding: 10px; text-align: center; } </style>\n  <body>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n    <div class=\"error\">\n    <img src=\"http://i.imgur.com/Waq9PDp.png\">\n      <h2>Uh, oh! Page Not Found! </h2>\n      <a style=\"text-decoration: none;\" href='/'> \u2B05 Go Home? </a>\n    </div>\n  </body>\n  "
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/views/pages/page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageComponent = (function () {
    function PageComponent() {
        this.meta = {
            'siteTitle': 'Zinc-CMS',
            'siteTagline': '> Zinc, a better way to blog.',
            'SiteFavicon': './assets/favicon.ico',
        };
        this.data = {
            "title": "Welcome to Zinc",
            "author": "Admin",
            "creation-date": "today",
            "body": [
                "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam mollis turpis et congue auctor. Curabitur porttitor consectetur est sodales lobortis. Mauris ut imperdiet erat. Aliquam erat volutpat. Morbi imperdiet tempor nunc, in semper est interdum eget. Morbi velit tellus, tincidunt nec ante id, pretium egestas diam.",
                "Vivamus rutrum vulputate odio nec mattis. Pellentesque quam ex, condimentum vel leo imperdiet, vestibulum luctus quam. Proin arcu magna, finibus sed eros vitae, vehicula lobortis mauris. Aenean gravida purus nunc, sed volutpat nisi mattis non. Nam vitae est et elit rhoncus venenatis volutpat sit amet diam. Praesent ultrices volutpat enim, eget pellentesque tellus sollicitudin eget. Suspendisse nec mauris libero. Sed blandit urna tortor, eget malesuada ex volutpat eget. Etiam condimentum leo tellus, sit amet finibus odio semper vitae.",
                "Mauris massa ligula, rutrum quis accumsan ut, vulputate sit amet risus. Mauris sollicitudin enim in pretium tristique. Nulla sit amet augue scelerisque, luctus nunc et, semper augue. Aenean ac fermentum dui, sed interdum augue. Sed ullamcorper diam non cursus scelerisque. Curabitur in purus et magna mollis imperdiet a vitae quam. Aenean et pharetra nisl. Quisque imperdiet turpis quis augue ullamcorper dictum. Sed vitae mollis tellus, at lacinia turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur quis congue erat."
            ],
            "tags": "#Welcome",
            "featuredImg": './assets/cyetxpa1.jpg'
        };
    }
    PageComponent.prototype.ngOnInit = function () {
    };
    return PageComponent;
}());
PageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-page',
        template: __webpack_require__("../../../../../src/app/components/views/pages/template/page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/views/pages/template/page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageComponent);

//# sourceMappingURL=page.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/views/pages/template/page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Margin is to compensate for Top-Navi Bars height */\r\nbody {\r\n    margin-top: 40px;\r\n    background: #E7E7E7;\r\n    position: relative;\r\n    z-index: 1;\r\n    top: 0;\r\n} .banner-wrapper{\r\n    background: #976666;\r\n    height: 90vh;\r\n    border-bottom: 2px dashed #000;\r\n    overflow: hidden;\r\n} .banner-wrapper .banner-container{\r\n    width: 100%;\r\n} .banner-wrapper .banner-container img{\r\n    overflow: hidden;\r\n    -o-object-fit: fill;\r\n       object-fit: fill;\r\n} .banner-wrapper .banner-container section{\r\n    padding-left: 5%;\r\n    position: absolute; \r\n    top: 200px; \r\n    left: 0; \r\n    width: 50%;\r\n} .banner-wrapper .banner-container section h1{\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 64px;\r\n    color: white;\r\n} .banner-wrapper .banner-container section a{\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 32px;\r\n    color: white;\r\n}\r\n.page-wrapper {\r\n    margin: 0 15%;\r\n} .page-wrapper h1, h2, h3, h4, h5 {\r\n    font-family: 'Raleway', sans-serif;\r\n    padding: 2px;\r\n} .page-wrapper a, p {\r\n    font-family: 'Roboto', sans-serif;\r\n} .page-wrapper .page-content {\r\n    background: white;\r\n    padding: 48px 24px ;\r\n} .page-wrapper .page-content #page-header {\r\n    margin-bottom: 12px;\r\n} .page-wrapper .page-content #page-body p {\r\n    text-indent: 48px;\r\n    padding-bottom: 24px;\r\n} .page-wrapper .page-content #page-footer {\r\n    border-top: 1px solid #A7A7A7;\r\n    padding: 24px 0;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/views/pages/template/page.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n    <div class=\"banner-wrapper\">\n        <div class=\"banner-container\">\n            <section>\n                <h1>{{meta.siteTitle}}</h1>\n                <a>{{meta.siteTagline}}</a>\n            </section>\n            <img [src]='data.featuredImg' alt=\"Banner Image\">\n        </div>\n    </div>\n    <div class=\"page-wrapper\">\n        <div class=\"page-content\">\n            <!-- Page Header -->\n            <div id=\"page-header\">\n                <h1> {{data.title}} </h1>\n                <a>By: {{data.author}}</a>\n            </div>\n            <!-- Page Body -->\n            <div id=\"page-body\">\n                    <p>{{data.body[0]}}</p>\n                    <p>{{data.body[1]}}</p>\n                    <p>{{data.body[2]}}</p>\n            </div>\n            <div id=\"page-footer\">\n            </div>\n        </div>\n    </div>\n</body>"

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