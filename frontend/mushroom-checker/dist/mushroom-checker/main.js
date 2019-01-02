(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to the {{ title }}!\n  </h1>\n</div>\n\n<!--<button mat-icon-button [matMenuTriggerFor]=\"menu\">\n    <mat-icon>more_vert</mat-icon>\n  </button>\n  <mat-menu #menu=\"matMenu\">\n    <button mat-menu-item>\n      <mat-icon>dialpad</mat-icon>\n      <span>Redial</span>\n    </button>\n    <button mat-menu-item disabled>\n      <mat-icon>voicemail</mat-icon>\n      <span>Check voicemail</span>\n    </button>\n    <button mat-menu-item>\n      <mat-icon>notifications_off</mat-icon>\n      <span>Disable alerts</span>\n    </button>\n  </mat-menu>\n  -->\n\n \n      <app-mushroom-prediction></app-mushroom-prediction>\n    \n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Mushroom Checker';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _skraus_mushroom_api_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @skraus/mushroom-api-client */ "./node_modules/@skraus/mushroom-api-client/fesm5/skraus-mushroom-api-client.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _mushroom_prediction_mushroom_prediction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mushroom-prediction/mushroom-prediction.component */ "./src/app/mushroom-prediction/mushroom-prediction.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _enum2array_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./enum2array.pipe */ "./src/app/enum2array.pipe.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _mushroom_history_mushroom_history_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mushroom-history/mushroom-history.component */ "./src/app/mushroom-history/mushroom-history.component.ts");






//Importing APi client




//Angular Material



//Angluar Flex


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _mushroom_prediction_mushroom_prediction_component__WEBPACK_IMPORTED_MODULE_9__["MushroomPredictionComponent"],
                _enum2array_pipe__WEBPACK_IMPORTED_MODULE_12__["Enum2arrayPipe"],
                _mushroom_prediction_mushroom_prediction_component__WEBPACK_IMPORTED_MODULE_9__["MushroomPredictionDialog"],
                _mushroom_history_mushroom_history_component__WEBPACK_IMPORTED_MODULE_14__["MushroomHistoryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _skraus_mushroom_api_client__WEBPACK_IMPORTED_MODULE_7__["ApiModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"]
            ],
            providers: [{ provide: _skraus_mushroom_api_client__WEBPACK_IMPORTED_MODULE_7__["BASE_PATH"], useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].API_BASE_PATH } /*,
                  {
                    provide: HTTP_INTERCEPTORS,
                    useClass: HttpErrorInterceptor,
                    multi: true
                  }*/
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [
                _mushroom_prediction_mushroom_prediction_component__WEBPACK_IMPORTED_MODULE_9__["MushroomPredictionDialog"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/enum2array.pipe.ts":
/*!************************************!*\
  !*** ./src/app/enum2array.pipe.ts ***!
  \************************************/
/*! exports provided: Enum2arrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enum2arrayPipe", function() { return Enum2arrayPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Enum2arrayPipe = /** @class */ (function () {
    function Enum2arrayPipe() {
    }
    Enum2arrayPipe.prototype.transform = function (data) {
        return Object.keys(data);
    };
    Enum2arrayPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'enum2array'
        })
    ], Enum2arrayPipe);
    return Enum2arrayPipe;
}());



/***/ }),

/***/ "./src/app/mushroom-history/mushroom-history.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/mushroom-history/mushroom-history.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@media screen and (max-width: 1280px) {\n    .mat-table {\n      border: 0;\n      vertical-align: middle\n    }\n  \n    .mat-table caption {\n      font-size: 1em;\n    }\n    \n   \n    .mat-table .mat-header-cell {\n      \n      border: 10px solid;\n      clip: rect(0 0 0 0);\n      height: 1px;\n      margin: -1px;\n      padding: 0;\n      position: absolute;\n      width: 1px;\n    }\n    \n    .mat-table .mat-row {\n      border-bottom: 5px solid #ddd;\n      display: block;\n    }\n   \n    .mat-table .mat-row:nth-child(even) {background: #CCC}\n    .mat-table .mat-row:nth-child(odd) {background: #FFF}\n    .mat-cell, .mat-header-cell {\n        overflow: hidden;\n        word-wrap: break-word;\n      }\n    .mat-table .mat-cell {\n      border-bottom: 1px solid #ddd;\n      display: block;\n      font-size: .9em;\n      text-align: right;\n      font-weight: bold;\n      height:30px;\n      margin-bottom: 4%;\n      \n    }\n    .mat-table .mat-cell:before {\n      /*\n      * aria-label has no advantage, it won't be read inside a table\n      content: attr(aria-label);\n      */\n      content: attr(id);\n      float: left;\n      text-transform: uppercase;\n      font-weight: normal;\n      \n      font-size: .85em;\n    }\n    .mat-table .mat-cell:last-child {\n      border-bottom: 0;\n    }\n      .mat-table .mat-cell:first-child {\n      margin-top: 4%;\n    }\n  }\n\n  \n\n  .mat-table {\n    overflow: scroll;\n    word-wrap: break-word;\n    max-width: 1280px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVzaHJvb20taGlzdG9yeS9tdXNocm9vbS1oaXN0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0k7TUFDRSxVQUFVO01BQ1Ysc0JBQXNCO0tBQ3ZCOztJQUVEO01BQ0UsZUFBZTtLQUNoQjs7O0lBR0Q7O01BRUUsbUJBQW1CO01BQ25CLG9CQUFvQjtNQUNwQixZQUFZO01BQ1osYUFBYTtNQUNiLFdBQVc7TUFDWCxtQkFBbUI7TUFDbkIsV0FBVztLQUNaOztJQUVEO01BQ0UsOEJBQThCO01BQzlCLGVBQWU7S0FDaEI7O0lBRUQscUNBQXFDLGdCQUFnQixDQUFDO0lBQ3RELG9DQUFvQyxnQkFBZ0IsQ0FBQztJQUNyRDtRQUNJLGlCQUFpQjtRQUNqQixzQkFBc0I7T0FDdkI7SUFDSDtNQUNFLDhCQUE4QjtNQUM5QixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLGtCQUFrQjs7S0FFbkI7SUFDRDtNQUNFOzs7UUFHRTtNQUNGLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osMEJBQTBCO01BQzFCLG9CQUFvQjs7TUFFcEIsaUJBQWlCO0tBQ2xCO0lBQ0Q7TUFDRSxpQkFBaUI7S0FDbEI7TUFDQztNQUNBLGVBQWU7S0FDaEI7R0FDRjs7OztFQUlEO0lBQ0UsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixrQkFBa0I7R0FDbkIiLCJmaWxlIjoic3JjL2FwcC9tdXNocm9vbS1oaXN0b3J5L211c2hyb29tLWhpc3RvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gICAgLm1hdC10YWJsZSB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG4gICAgfVxuICBcbiAgICAubWF0LXRhYmxlIGNhcHRpb24ge1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgfVxuICAgIFxuICAgXG4gICAgLm1hdC10YWJsZSAubWF0LWhlYWRlci1jZWxsIHtcbiAgICAgIFxuICAgICAgYm9yZGVyOiAxMHB4IHNvbGlkO1xuICAgICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgbWFyZ2luOiAtMXB4O1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxcHg7XG4gICAgfVxuICAgIFxuICAgIC5tYXQtdGFibGUgLm1hdC1yb3cge1xuICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNkZGQ7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICBcbiAgICAubWF0LXRhYmxlIC5tYXQtcm93Om50aC1jaGlsZChldmVuKSB7YmFja2dyb3VuZDogI0NDQ31cbiAgICAubWF0LXRhYmxlIC5tYXQtcm93Om50aC1jaGlsZChvZGQpIHtiYWNrZ3JvdW5kOiAjRkZGfVxuICAgIC5tYXQtY2VsbCwgLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgIH1cbiAgICAubWF0LXRhYmxlIC5tYXQtY2VsbCB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAuOWVtO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGhlaWdodDozMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNCU7XG4gICAgICBcbiAgICB9XG4gICAgLm1hdC10YWJsZSAubWF0LWNlbGw6YmVmb3JlIHtcbiAgICAgIC8qXG4gICAgICAqIGFyaWEtbGFiZWwgaGFzIG5vIGFkdmFudGFnZSwgaXQgd29uJ3QgYmUgcmVhZCBpbnNpZGUgYSB0YWJsZVxuICAgICAgY29udGVudDogYXR0cihhcmlhLWxhYmVsKTtcbiAgICAgICovXG4gICAgICBjb250ZW50OiBhdHRyKGlkKTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBcbiAgICAgIGZvbnQtc2l6ZTogLjg1ZW07XG4gICAgfVxuICAgIC5tYXQtdGFibGUgLm1hdC1jZWxsOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICB9XG4gICAgICAubWF0LXRhYmxlIC5tYXQtY2VsbDpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tdG9wOiA0JTtcbiAgICB9XG4gIH1cblxuICBcblxuICAubWF0LXRhYmxlIHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBtYXgtd2lkdGg6IDEyODBweDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/mushroom-history/mushroom-history.component.html":
/*!******************************************************************!*\
  !*** ./src/app/mushroom-history/mushroom-history.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--<div *ngFor=\"let item of object | keyvalue\">\n    {{item.key}}:{{item.value}}\n  </div>\n-->\n<!--\n{{test}}\n<input [(ngModel)]=\"test\">\n  <mat-table [dataSource]=\"mushrooms\" class=\"mat-table\">\n\n       Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\"\n    \n\n    <ng-container *ngFor=\"let col of displayedColumns\" matColumnDef=\"{{col}}\">\n        <mat-header-cell mat-header-cell *matHeaderCellDef> {{col}} </mat-header-cell>\n        <mat-cell id=\"{{col}}\" *matCellDef=\"let element\"  > {{getEnumMember(col,element[col])}} </mat-cell>\n      </ng-container>      \n      \n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n    \n-->\n\n<mat-accordion>\n \n    <mat-expansion-panel *ngFor=\"let mushroom of mushrooms\" >\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n         Mushroom was probably {{getEnumMember(\"class\",mushroom.class)}}\n        </mat-panel-title>\n        <mat-panel-description>\n         Open to view Details\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <mat-list>\n          <mat-list-item *ngFor=\"let col of displayedColumns\" role=\"listitem\">{{col}}: {{getEnumMember(col,mushroom[col])}}</mat-list-item>\n      </mat-list>\n    </mat-expansion-panel>"

/***/ }),

/***/ "./src/app/mushroom-history/mushroom-history.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/mushroom-history/mushroom-history.component.ts ***!
  \****************************************************************/
/*! exports provided: MushroomHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MushroomHistoryComponent", function() { return MushroomHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _skraus_mushroom_api_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skraus/mushroom-api-client */ "./node_modules/@skraus/mushroom-api-client/fesm5/skraus-mushroom-api-client.js");



var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
var MushroomHistoryComponent = /** @class */ (function () {
    function MushroomHistoryComponent(mushroomService) {
        this.mushroomService = mushroomService;
        this.test = this.getEnumMember('bruises', "f");
    }
    MushroomHistoryComponent.prototype.ngOnInit = function () {
        this.getHistory();
        this.mushrooms[0];
    };
    MushroomHistoryComponent.prototype.getEnumMember = function (propertyName, value) {
        //Converting property Name to Enum Name
        var enumName = propertyName.replace(/(\-\w)/g, function (m) { return m[1].toUpperCase(); });
        enumName = enumName.charAt(0).toUpperCase() + enumName.slice(1) + "Enum";
        console.log("enum Name = " + enumName);
        for (var _i = 0, _a = Object.keys(_skraus_mushroom_api_client__WEBPACK_IMPORTED_MODULE_2__["_Mushroom"][enumName]); _i < _a.length; _i++) {
            var key = _a[_i];
            if (_skraus_mushroom_api_client__WEBPACK_IMPORTED_MODULE_2__["_Mushroom"][enumName][key] == value) {
                console.log("Found Key" + key);
                return key;
            }
        }
        // Object.keys(_Mushroom['BruisesEnum'])[0]
    };
    MushroomHistoryComponent.prototype.getHistory = function () {
        var _this = this;
        this.isLoading = true;
        this.mushroomService.getHistory().subscribe(function (mushrooms) {
            _this.mushrooms = mushrooms;
            _this.isLoading = false;
            _this.displayedColumns = Object.keys(_this.mushrooms[0]);
        });
    };
    MushroomHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mushroom-history',
            template: __webpack_require__(/*! ./mushroom-history.component.html */ "./src/app/mushroom-history/mushroom-history.component.html"),
            styles: [__webpack_require__(/*! ./mushroom-history.component.css */ "./src/app/mushroom-history/mushroom-history.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_skraus_mushroom_api_client__WEBPACK_IMPORTED_MODULE_2__["MushroomService"]])
    ], MushroomHistoryComponent);
    return MushroomHistoryComponent;
}());



/***/ }),

/***/ "./src/app/mushroom-prediction/mushroom-prediction-dialog.html":
/*!*********************************************************************!*\
  !*** ./src/app/mushroom-prediction/mushroom-prediction-dialog.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Hi User</h1>\n<div mat-dialog-content>\n  <p>Your mushroom is probably {{mushroom}}</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button cdkFocusInitial (click)=\"onClick()\">Ok, Thank you.</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/mushroom-prediction/mushroom-prediction.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/mushroom-prediction/mushroom-prediction.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    min-height: 100%;\n    width: 100%;\n  }\n\n  h3 {\n      text-align: center;\n  }\n\n  .overlay {\n      position: fixed;\n      top: 45%;\n    left: 45%;\n   \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVzaHJvb20tcHJlZGljdGlvbi9tdXNocm9vbS1wcmVkaWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtHQUNiOztFQUVEO01BQ0ksbUJBQW1CO0dBQ3RCOztFQUVEO01BQ0ksZ0JBQWdCO01BQ2hCLFNBQVM7SUFDWCxVQUFVOztHQUVYIiwiZmlsZSI6InNyYy9hcHAvbXVzaHJvb20tcHJlZGljdGlvbi9tdXNocm9vbS1wcmVkaWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgaDMge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLm92ZXJsYXkge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiA0NSU7XG4gICAgbGVmdDogNDUlO1xuICAgXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/mushroom-prediction/mushroom-prediction.component.html":
/*!************************************************************************!*\
  !*** ./src/app/mushroom-prediction/mushroom-prediction.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-spinner class=\"overlay\" *ngIf=\"isLoading\"></mat-spinner>\n<div fxLayout=\"row\" fxLayoutAlign=\"center\">\n   \n    <span fxFlex=\"0 1 90%\">\n<h3>Please describe your mushroom to find out if it is safe to eat</h3>\n<!--<mat-form-field>\n<mat-select placeholder=\"test\"><mat-option value=\"test\">test</mat-option></mat-select>\n</mat-form-field>\n-->\n\n<div class=\"container\" fxLayout=\"column\" fxLayoutWrap fxLayoutAlign=\"center\" >\n<div class=\"container\" fxLayout=\"row wrap\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"15px\" fxLayoutAlign=\"center\">\n\n<mat-form-field *ngFor=\"let feature of MushroomFeatures\" fxFlex=\"0 1 calc(25% - 15px)\"  fxFlex.lt-md=\"0 1 calc(50% - 15px)\"\nfxFlex.lt-sm=\"100%\">\n \n\n  <!----  <label>{{feature.name}}: </label><select matNativeControl  [(ngModel)]=\"feature.value\" >-->\n      <mat-select class=\"form-control\" placeholder=\"{{feature.name}}\" [(value)]=\"feature.value\" required>\n    \n        <mat-option  *ngFor=\"let opt of getValues(feature.Enum)\" value=\"{{feature.Enum[opt]}}\">{{opt}}</mat-option>\n\n      </mat-select>\n      \n    \n  <!--</select>-->\n</mat-form-field>\n</div>\n<button mat-raised-button color=\"primary\" (click)=\"getPrediction()\">Can I eat it?</button>\n<h3>Previous Mushroom Classifications:</h3>\n<app-mushroom-history></app-mushroom-history>\n</div>\n\n\n</span>\n    </div>\n<!---\n<input [ngModel]=\"mushroom['class']\" />\n<div *ngFor=\"let feature of MushroomFeatures\">\n  {{mushroom[feature.name]}}\n</div>-->\n<!--\n<mat-select placeholder=\"{{feature.name}}\" [(value)]=\"mushroom[feature.name]\">\n<mat-option *ngFor=\"let opt of Object.keys(feature.Enum)\" value=\"feature.Enum[opt]\" >opt</mat-option>\n</mat-select>\n\n-->\n <!----<mat-select placeholder=\"cap shape\" [(value)]=\"capShape\"> \n  <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\"> \n    {{food.viewValue}}\n  </mat-option> --\n  <mat-option value=\"b\" >bell</mat-option>\n  <mat-option value=\"c\" >canonic</mat-option>\n</mat-select> -->\n\n<!--/*//TODO: MAT select // CORS //RESULT Display (Autocomplete with validation?) MessageService?-->"

/***/ }),

/***/ "./src/app/mushroom-prediction/mushroom-prediction.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/mushroom-prediction/mushroom-prediction.component.ts ***!
  \**********************************************************************/
/*! exports provided: MushroomPredictionComponent, MushroomPredictionDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MushroomPredictionComponent", function() { return MushroomPredictionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MushroomPredictionDialog", function() { return MushroomPredictionDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _skraus_mushroom_api_client___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skraus/mushroom-api-client/ */ "./node_modules/@skraus/mushroom-api-client/fesm5/skraus-mushroom-api-client.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var MushroomPredictionComponent = /** @class */ (function () {
    function MushroomPredictionComponent(mushroomService, dialog, snackBar) {
        this.mushroomService = mushroomService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.mushroom = new _skraus_mushroom_api_client___WEBPACK_IMPORTED_MODULE_2__["Mushroom"]();
    }
    MushroomPredictionComponent.prototype.ngOnInit = function () {
        /*this.mushroom = {"capShape": _Mushroom.CapShapeEnum.Bell}*/
        this.MushroomFeatures = [
            {
                name: "cap-shape",
                Enum: _skraus_mushroom_api_client___WEBPACK_IMPORTED_MODULE_2__["_Mushroom"].CapShapeEnum,
                value: ""
            },
            {
                name: "cap-surface",
                Enum: _skraus_mushroom_api_client___WEBPACK_IMPORTED_MODULE_2__["_Mushroom"].CapSurfaceEnum,
                value: ""
            },
            {
                name: "cap-color",
                Enum: _skraus_mushroom_api_client___WEBPACK_IMPORTED_MODULE_2__["_Mushroom"].CapColorEnum,
                value: ""
            },
            {
                name: "bruises",
                Enum: _skraus_mushroom_api_client___WEBPACK_IMPORTED_MODULE_2__["_Mushroom"].BruisesEnum,
                value: ""
            },
            {
                name: "odor",
                Enum: _skraus_mushroom_api_client___WEBPACK_IMPORTED_MODULE_2__["_Mushroom"].OdorEnum,
                value: ""
            },
            {
                name: "gill-attachment",
                Enum: _skraus_mushroom_api_client___WEBPACK_IMPORTED_MODULE_2__["_Mushroom"].GillAttachmentEnum,
                value: ""
            },
            {
                name: "gill-spacing",
                Enum: _skraus_mushroom_api_client___WEBPACK_IMPORTED_MODULE_2__["_Mushroom"].GillSpacingEnum,
                value: ""
            },
            {
                name: "gill-size",
                Enum: _skraus_mushroom_api_client___WEBPACK_IMPORTED_MODULE_2__["_Mushroom"].GillSizeEnum,
                value: ""
            },
            {
                name: "gill-color",
                Enum: _skraus_mushroom_api_client___WEBPACK_IMPORTED_MODULE_2__["_Mushroom"].GillColorEnum,
                value: ""
            },
            {
                name: "stalk-shape",
                Enum: _skraus_mushroom_api_client___WEBPACK_IMPORTED_MODULE_2__["_Mushroom"].StalkShapeEnum,
                value: ""
            },
            {
                name: "stalk-root",
                Enum: _skraus_mushroom_api_client___WEBPACK_IMPORTED_MODULE_2__["_Mushroom"].StalkRootEnum,
                value: ""
            },
            {
                name: "stalk-surface-above-ring",
                Enum: _skraus_mushroom_api_client___WEBPACK_IMPORTED_MODULE_2__["_Mushroom"].StalkSurfaceAboveRingEnum,
                value: ""
            },
            {
                name: "stalk-surface-below-ring",
                Enum: _skraus_mushroom_api_client___WEBPACK_IMPORTED_MODULE_2__["_Mushroom"].StalkSurfaceBelowRingEnum,
                value: ""
            },
            {
                name: "stalk-color-above-ring",
                Enum: _skraus_mushroom_api_client___WEBPACK_IMPORTED_MODULE_2__["_Mushroom"].StalkColorAboveRingEnum,
                value: ""
            },
            {
                name: "stalk-color-below-ring",
                Enum: _skraus_mushroom_api_client___WEBPACK_IMPORTED_MODULE_2__["_Mushroom"].StalkColorBelowRingEnum,
                value: ""
            },
            {
                name: "veil-type",
                Enum: _skraus_mushroom_api_client___WEBPACK_IMPORTED_MODULE_2__["_Mushroom"].VeilTypeEnum,
                value: ""
            },
            {
                name: "veil-color",
                Enum: _skraus_mushroom_api_client___WEBPACK_IMPORTED_MODULE_2__["_Mushroom"].VeilColorEnum,
                value: ""
            },
            {
                name: "ring-number",
                Enum: _skraus_mushroom_api_client___WEBPACK_IMPORTED_MODULE_2__["_Mushroom"].RingNumberEnum,
                value: ""
            },
            {
                name: "ring-type",
                Enum: _skraus_mushroom_api_client___WEBPACK_IMPORTED_MODULE_2__["_Mushroom"].RingTypeEnum,
                value: ""
            },
            {
                name: "spore-print-color",
                Enum: _skraus_mushroom_api_client___WEBPACK_IMPORTED_MODULE_2__["_Mushroom"].SporePrintColorEnum,
                value: ""
            },
            {
                name: "population",
                Enum: _skraus_mushroom_api_client___WEBPACK_IMPORTED_MODULE_2__["_Mushroom"].PopulationEnum,
                value: ""
            },
            {
                name: "habitat",
                Enum: _skraus_mushroom_api_client___WEBPACK_IMPORTED_MODULE_2__["_Mushroom"].HabitatEnum,
                value: ""
            }
        ];
    };
    MushroomPredictionComponent.prototype.getValues = function (featureEnum) {
        return Object.keys(featureEnum);
    };
    MushroomPredictionComponent.prototype.getPrediction = function () {
        var _this = this;
        this.isLoading = true;
        this.mushroom = new _skraus_mushroom_api_client___WEBPACK_IMPORTED_MODULE_2__["Mushroom"]();
        for (var _i = 0, _a = this.MushroomFeatures; _i < _a.length; _i++) {
            var feature = _a[_i];
            this.mushroom[feature.name] = feature.value;
        }
        this.mushroomService.predict(this.mushroom).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            console.error('error getting Mushroom prediction', error);
            _this.isLoading = false;
            var errMsg = (error.message) ? error.message : error.status ? error.status + " - " + error.statusText : 'Server error';
            _this.openSnackBar(errMsg, "OK");
            return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(error);
        })).subscribe(function (mushroom) {
            _this.mushroom = mushroom;
            _this.isLoading = false;
            _this.openDialog();
        });
    };
    MushroomPredictionComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    MushroomPredictionComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(MushroomPredictionDialog, {
            width: '250px',
            data: this.mushroom.class == 'e' ? 'eatable' : 'posionous'
        });
    };
    MushroomPredictionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mushroom-prediction',
            template: __webpack_require__(/*! ./mushroom-prediction.component.html */ "./src/app/mushroom-prediction/mushroom-prediction.component.html"),
            styles: [__webpack_require__(/*! ./mushroom-prediction.component.css */ "./src/app/mushroom-prediction/mushroom-prediction.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_skraus_mushroom_api_client___WEBPACK_IMPORTED_MODULE_2__["MushroomService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], MushroomPredictionComponent);
    return MushroomPredictionComponent;
}());

var MushroomPredictionDialog = /** @class */ (function () {
    function MushroomPredictionDialog(dialogRef, mushroom) {
        this.dialogRef = dialogRef;
        this.mushroom = mushroom;
    }
    MushroomPredictionDialog.prototype.onClick = function () {
        this.dialogRef.close();
    };
    MushroomPredictionDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mushroom-prediction-dialog',
            template: __webpack_require__(/*! ./mushroom-prediction-dialog.html */ "./src/app/mushroom-prediction/mushroom-prediction-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], String])
    ], MushroomPredictionDialog);
    return MushroomPredictionDialog;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    API_BASE_PATH: 'http://localhost:8080/v1'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sven/Documents/Development/mushroom/frontend/mushroom-checker/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map