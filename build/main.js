webpackJsonp([0],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameMusicProvider; });
;
var GameMusicProvider = (function () {
    function GameMusicProvider() {
    }
    GameMusicProvider.getRandomTrack = function () {
        return this.data.tracks[Math.floor(Math.random() * this.data.tracks.length)];
    };
    /**
     * gets the next track in the list after the passed track.
     *
     * @param track currentTrack
     */
    GameMusicProvider.getNextTrack = function (track) {
        var currentTrackIndex = this.data.tracks
            .map(function (item, index) { return ({ index: index, trackName: item.trackName }); })
            .filter(function (item) { return track && item.trackName === track.trackName; })
            .concat([null])
            .map(function (item) { return item ? item.index : null; })[0];
        var nextTrackIndex = (currentTrackIndex !== null && currentTrackIndex + 1 < this.data.tracks.length) ?
            currentTrackIndex + 1 :
            0;
        return this.data.tracks
            .filter(function (item, index) { return index === nextTrackIndex; })
            .concat([null])[0];
    };
    /**
     * returns a track by its name.
     * if none could be found, a random track will be returned.
     */
    GameMusicProvider.getTrackByName = function (trackName) {
        var selectedTracks = this.data.tracks
            .filter(function (track) { return track.trackName.indexOf(trackName + ".m4a") !== -1; });
        return (selectedTracks.length > 0) ?
            selectedTracks[0] :
            this.getNextTrack(null);
    };
    GameMusicProvider.getTracksByIds = function (trackIds) {
        return (!trackIds) ?
            [] :
            this.data.tracks
                .filter(function (track) { return trackIds.indexOf(track.trackName.substr(0, track.trackName.length - 4)) !== -1; });
    };
    return GameMusicProvider;
}());

GameMusicProvider.data = {
    tracks: []
};
//# sourceMappingURL=game-music.provider.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_interval__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__);





//# sourceMappingURL=rxjs.deps.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StorageManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_player_selectors__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Field;
(function (Field) {
    Field[Field["FAVE_IDS"] = 0] = "FAVE_IDS";
})(Field || (Field = {}));
var StorageManager = (function () {
    function StorageManager(store) {
        var _this = this;
        this.store = store;
        this.FIELD_FAVE_IDS = 'faveIds';
        this.store.select(__WEBPACK_IMPORTED_MODULE_2__player_player_selectors__["c" /* getFaveIds */])
            .subscribe(function (faveIds) {
            localStorage.setItem(_this.FIELD_FAVE_IDS, JSON.stringify(faveIds));
        });
    }
    StorageManager.getItem = function (field, defaultValue) {
        var value;
        switch (field) {
            case Field.FAVE_IDS:
                value = localStorage.getItem('faveIds');
                return (value !== null) ?
                    JSON.parse(value) :
                    defaultValue;
            default:
                return null;
        }
    };
    return StorageManager;
}());
StorageManager = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
], StorageManager);

//# sourceMappingURL=storage-manager.provider.js.map

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_player_track_scroller_provider__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_selectors__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_player_player_selectors__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__list_list_source_enum__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(store, navCtrl, location, toastCtrl) {
        this.store = store;
        this.navCtrl = navCtrl;
        this.location = location;
        this.toastCtrl = toastCtrl;
        this.segment = '';
        this.sources = __WEBPACK_IMPORTED_MODULE_7__list_list_source_enum__["a" /* ListSource */];
        this.tracksRendered$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__home_selectors__["a" /* getTracksRendered */]);
        this.faveIds$ = this.store.select(__WEBPACK_IMPORTED_MODULE_6__common_player_player_selectors__["c" /* getFaveIds */]);
        // update url everytime the track changes
        this.store.select(__WEBPACK_IMPORTED_MODULE_6__common_player_player_selectors__["b" /* getCurrentTrack */])
            .filter(function (track) { return track !== null; })
            .subscribe(function (track) {
            var trackUrl = track.trackName.substr(0, track.trackName.length - 4);
            location.replaceState(trackUrl);
        });
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        // listen to the service worker promise in index.html to see if there has been a new update.
        // condition: the service-worker.js needs to have some kind of change - e.g. increment CACHE_VERSION.
        window['isUpdateAvailable']
            .then(function (isAvailable) {
            if (isAvailable) {
                var toast = _this.toastCtrl.create({
                    message: 'New Update available! Reload the webapp to see the latest juicy changes.',
                    position: 'bottom',
                    showCloseButton: true,
                });
                toast.present();
            }
        });
    };
    HomePage.prototype.ngAfterViewInit = function () {
        // setting content for scroller
        __WEBPACK_IMPORTED_MODULE_4__common_player_track_scroller_provider__["a" /* TrackScroller */].content = this.content;
        __WEBPACK_IMPORTED_MODULE_4__common_player_track_scroller_provider__["a" /* TrackScroller */].store = this.store;
        // this.tracksRendered$
        // 	.filter(Boolean)
        // 	.subscribe(() => TrackScroller.scrollToSelectedTrack());
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Content */])
], HomePage.prototype, "content", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/mnt/d/WebProjects/game-music-player-master/src/pages/home/home.html"*/'<ion-header>\n	<ion-navbar>\n\n		<!-- <ion-title>Game Music Player</ion-title> -->\n\n		<navbar-logo></navbar-logo>\n\n		<navbar-search></navbar-search>\n\n		<navbar-music-control></navbar-music-control>\n\n	</ion-navbar>\n	<ion-toolbar>\n		<ion-segment [(ngModel)]="segment">\n			<ion-segment-button value="">\n				All Music\n			</ion-segment-button>\n			<ion-segment-button value="faves">\n				Favourites ({{(faveIds$ | async)?.length}})\n			</ion-segment-button>\n		</ion-segment>\n	</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n	<game-music-list\n		[listSource]="sources.ALL"\n		[hidden]="segment !== \'\'">\n	</game-music-list>\n\n	<game-music-list\n		[listSource]="sources.FAVES"\n		[hidden]="segment !== \'faves\'">\n	</game-music-list>\n\n</ion-content>\n'/*ion-inline-end:"/mnt/d/WebProjects/game-music-player-master/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* Location */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackScroller; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_list_game_music_provider__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_selectors__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rxjs_deps__ = __webpack_require__(131);



var TrackScroller = (function () {
    function TrackScroller() {
    }
    TrackScroller.scrollToSelectedTrack = function (selectedClass) {
        var _this = this;
        if (selectedClass === void 0) { selectedClass = '.game-music-list-item--selected'; }
        var ROW_HEIGHT = 48;
        this.store.select(__WEBPACK_IMPORTED_MODULE_1__player_selectors__["b" /* getCurrentTrack */])
            .first()
            .subscribe(function (currentTrack) {
            var trackIndex = __WEBPACK_IMPORTED_MODULE_0__pages_home_list_game_music_provider__["a" /* GameMusicProvider */].data.tracks
                .reduce(function (obj, item, index) {
                return (item === currentTrack) ?
                    index :
                    obj;
            }, 0);
            _this.content.scrollTo(0, trackIndex * ROW_HEIGHT, 600);
        });
    };
    return TrackScroller;
}());

//# sourceMappingURL=track-scroller.provider.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListSource; });
var ListSource;
(function (ListSource) {
    ListSource[ListSource["ALL"] = 0] = "ALL";
    ListSource[ListSource["FAVES"] = 1] = "FAVES";
})(ListSource || (ListSource = {}));
//# sourceMappingURL=list-source.enum.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VolumeSlider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_selectors__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__player_actions__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VolumeSlider = (function () {
    function VolumeSlider(store, playerActions) {
        var _this = this;
        this.store = store;
        this.playerActions = playerActions;
        this.store.select(__WEBPACK_IMPORTED_MODULE_2__player_selectors__["e" /* getVolume */])
            .subscribe(function (volume) { return _this.sliderValue = volume; });
    }
    VolumeSlider.prototype.onRangeChanged = function (evt) {
        this.store.dispatch(this.playerActions.setVolume(this.sliderValue));
    };
    return VolumeSlider;
}());
VolumeSlider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n\t\t<ion-item>\n\t\t\t<ion-range\n\t\t\t\tmin=\"0\"\n\t\t\t\tmax=\"100\"\n\t\t\t\tstep=\"10\"\n\t\t\t\tsnaps=\"false\"\n\t\t\t\tcolor=\"dark\"\n\t\t\t\t[(ngModel)]=\"sliderValue\"\n\t\t\t\t(ionChange)=\"onRangeChanged()\">\n\n\t\t\t\t<ion-icon range-left name=\"volume-mute\"></ion-icon>\n     \t\t\t<ion-icon range-right name=\"volume-up\"></ion-icon>\n\t\t\t</ion-range>\n\t\t</ion-item>\n\t",
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_3__player_actions__["a" /* PlayerActions */]])
], VolumeSlider);

//# sourceMappingURL=volume-slider.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioState; });
/* harmony export (immutable) */ __webpack_exports__["b"] = PlayerReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_actions__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_storage_manager_provider__ = __webpack_require__(139);


var AudioState;
(function (AudioState) {
    AudioState[AudioState["UNLOADED"] = 0] = "UNLOADED";
    AudioState[AudioState["LOADING"] = 1] = "LOADING";
    AudioState[AudioState["LOADED"] = 2] = "LOADED";
})(AudioState || (AudioState = {}));
var defaultState = {
    volume: 30,
    isShuffle: true,
    isRepeat: false,
    isPlaying: false,
    isMuted: false,
    currentTrack: null,
    trackListDownloaded: false,
    audioState: AudioState.UNLOADED,
    faveIds: __WEBPACK_IMPORTED_MODULE_1__storage_storage_manager_provider__["b" /* StorageManager */].getItem(__WEBPACK_IMPORTED_MODULE_1__storage_storage_manager_provider__["a" /* Field */].FAVE_IDS, []),
    trackFilter: '',
};
function PlayerReducer(state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__player_actions__["a" /* PlayerActions */].TOGGLE_SETTING:
            var changedSetting = {};
            changedSetting[action.payload] = !state[action.payload];
            return Object.assign({}, state, changedSetting);
        case __WEBPACK_IMPORTED_MODULE_0__player_actions__["a" /* PlayerActions */].SET_VOLUME:
            return Object.assign({}, state, { volume: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__player_actions__["a" /* PlayerActions */].SELECT_TRACK:
            var changedState = Object.assign({}, state, { currentTrack: action.payload });
            changedState.isPlaying = (action.payload === null) ?
                false :
                true;
            return changedState;
        case __WEBPACK_IMPORTED_MODULE_0__player_actions__["a" /* PlayerActions */].SET_AUDIO_STATE:
            var changedAudioState = { audioState: action.payload };
            return Object.assign({}, state, changedAudioState);
        case __WEBPACK_IMPORTED_MODULE_0__player_actions__["a" /* PlayerActions */].SET_LIST_DOWNLOADED:
            return Object.assign({}, state, { trackListDownloaded: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__player_actions__["a" /* PlayerActions */].TOGGLE_FAVE_TRACK:
            // check if track needs to be added or removed
            var trackName_1 = action.payload.trackName.substr(0, action.payload.trackName.length - 4);
            var faveIds = (state.faveIds.indexOf(trackName_1) !== -1) ?
                state.faveIds.filter(function (faveId) { return faveId !== trackName_1; }) :
                state.faveIds.concat(trackName_1);
            return Object.assign({}, state, { faveIds: faveIds });
        case __WEBPACK_IMPORTED_MODULE_0__player_actions__["a" /* PlayerActions */].SET_SEARCH_FILTER:
            var trackFilter = action.payload;
            return Object.assign({}, state, { trackFilter: trackFilter });
        default:
            return state;
    }
}
//# sourceMappingURL=player.reducer.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(290);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_list_game_music_list_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_nav_navbar_music_control_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_player_playback_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_list_game_music_list_item_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_list_game_music_list_item_more_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_reducers__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_player_player_actions__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home_actions__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__common_tracking_google_analytics_tracker_provider__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__common_pipes_duration_formatter__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__common_player_volume_slider_volume_slider_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_storage_storage_manager_provider__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home_nav_navbar_search_component__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_home_nav_navbar_logo_component__ = __webpack_require__(419);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_17__common_player_volume_slider_volume_slider_component__["a" /* VolumeSlider */],
            __WEBPACK_IMPORTED_MODULE_9__common_player_playback_component__["a" /* Playback */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_list_game_music_list_component__["a" /* GameMusicList */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_list_game_music_list_item_component__["a" /* GameMusicListItem */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_list_game_music_list_item_more_component__["a" /* GameMusicListItemMore */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_nav_navbar_music_control_component__["a" /* NavbarMusicControl */],
            __WEBPACK_IMPORTED_MODULE_19__pages_home_nav_navbar_search_component__["a" /* NavbarSearch */],
            __WEBPACK_IMPORTED_MODULE_20__pages_home_nav_navbar_logo_component__["a" /* NavbarLogo */],
            __WEBPACK_IMPORTED_MODULE_16__common_pipes_duration_formatter__["a" /* DurationFormatter */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], {}, {
                links: [
                    { component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], name: 'Home', segment: ':trackName' }
                ],
            }),
            __WEBPACK_IMPORTED_MODULE_7__ngrx_store__["b" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_12__app_reducers__["a" /* reducer */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_17__common_player_volume_slider_volume_slider_component__["a" /* VolumeSlider */],
        ],
        providers: [
            // {provide: LocationStrategy, useClass: PathLocationStrategy}, // when not using shebangs as location
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_13__common_player_player_actions__["a" /* PlayerActions */],
            __WEBPACK_IMPORTED_MODULE_14__pages_home_home_actions__["a" /* HomeActions */],
            __WEBPACK_IMPORTED_MODULE_15__common_tracking_google_analytics_tracker_provider__["a" /* GoogleAnalyticsTracker */],
            __WEBPACK_IMPORTED_MODULE_18__common_storage_storage_manager_provider__["b" /* StorageManager */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_database__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var firebaseConfig = {
    apiKey: 'AIzaSyD-qlduY4Mu89iXzch-OosGjf0dPb5zFLI',
    authDomain: 'game-music-player.firebaseapp.com',
    databaseURL: 'https://game-music-player.firebaseio.com',
    storageBucket: 'game-music-player.appspot.com',
    messagingSenderId: '26986259894'
};
var AppComponent = (function () {
    function AppComponent(platform) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */];
        __WEBPACK_IMPORTED_MODULE_3_firebase_app__["initializeApp"](firebaseConfig);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/mnt/d/WebProjects/game-music-player-master/src/app/app.html"*/'<playback></playback>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/mnt/d/WebProjects/game-music-player-master/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */]])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getPlayerState */
/* unused harmony export fetchVolume */
/* unused harmony export fetchIsShuffle */
/* unused harmony export fetchIsRepeat */
/* unused harmony export fetchIsPlaying */
/* unused harmony export fetchIsMuted */
/* unused harmony export fetchCurrentTrack */
/* unused harmony export fetchTracklistDownloaded */
/* unused harmony export fetchAudioState */
/* unused harmony export fetchFaveIds */
/* unused harmony export fetchTrackFilter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getVolume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isShuffle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isRepeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isPlaying; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isMuted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCurrentTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isTracklistDownloaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAudioState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getFaveIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getTrackFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);

function getPlayerState(state) {
    return state.player;
}
;
function fetchVolume(state) {
    return state.volume;
}
function fetchIsShuffle(state) {
    return state.isShuffle;
}
function fetchIsRepeat(state) {
    return state.isRepeat;
}
function fetchIsPlaying(state) {
    return state.isPlaying;
}
function fetchIsMuted(state) {
    return state.isMuted;
}
function fetchCurrentTrack(state) {
    return state.currentTrack;
}
function fetchTracklistDownloaded(state) {
    return state.trackListDownloaded;
}
function fetchAudioState(state) {
    return state.audioState;
}
function fetchFaveIds(state) {
    return state.faveIds;
}
function fetchTrackFilter(state) {
    return state.trackFilter;
}
// *************************** PUBLIC API's ****************************
var getVolume = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getPlayerState, fetchVolume);
var isShuffle = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getPlayerState, fetchIsShuffle);
var isRepeat = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getPlayerState, fetchIsRepeat);
var isPlaying = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getPlayerState, fetchIsPlaying);
var isMuted = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getPlayerState, fetchIsMuted);
var getCurrentTrack = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getPlayerState, fetchCurrentTrack);
var isTracklistDownloaded = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getPlayerState, fetchTracklistDownloaded);
var getAudioState = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getPlayerState, fetchAudioState);
var getFaveIds = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getPlayerState, fetchFaveIds);
var getTrackFilter = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getPlayerState, fetchTrackFilter);
//# sourceMappingURL=player.selectors.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_list_game_music_provider__ = __webpack_require__(130);

var PlayerActions = (function () {
    function PlayerActions() {
    }
    PlayerActions.prototype.toggleSetting = function (settingKey) {
        return {
            type: PlayerActions.TOGGLE_SETTING,
            payload: settingKey
        };
    };
    PlayerActions.prototype.setVolume = function (volume) {
        return {
            type: PlayerActions.SET_VOLUME,
            payload: volume
        };
    };
    PlayerActions.prototype.selectTrack = function (track) {
        return {
            type: PlayerActions.SELECT_TRACK,
            payload: track
        };
    };
    PlayerActions.prototype.nextTrack = function (currentTrack, isShuffle) {
        var track = (isShuffle) ?
            __WEBPACK_IMPORTED_MODULE_0__pages_home_list_game_music_provider__["a" /* GameMusicProvider */].getRandomTrack() :
            __WEBPACK_IMPORTED_MODULE_0__pages_home_list_game_music_provider__["a" /* GameMusicProvider */].getNextTrack(currentTrack);
        return {
            type: PlayerActions.SELECT_TRACK,
            payload: track
        };
    };
    PlayerActions.prototype.setAudioState = function (audioState) {
        return {
            type: PlayerActions.SET_AUDIO_STATE,
            payload: audioState
        };
    };
    PlayerActions.prototype.setListDownloaded = function () {
        return {
            type: PlayerActions.SET_LIST_DOWNLOADED,
            payload: true
        };
    };
    PlayerActions.prototype.toggleFaveTrack = function (track) {
        return {
            type: PlayerActions.TOGGLE_FAVE_TRACK,
            payload: track
        };
    };
    PlayerActions.prototype.setSearchFiter = function (filter) {
        return {
            type: PlayerActions.SET_SEARCH_FILTER,
            payload: filter
        };
    };
    return PlayerActions;
}());

PlayerActions.TOGGLE_SETTING = 'TOGGLE_SETTING';
PlayerActions.SELECT_TRACK = 'SELECT_TRACK';
PlayerActions.SET_AUDIO_STATE = 'SET_AUDIO_STATE';
PlayerActions.SET_VOLUME = 'SET_VOLUME';
PlayerActions.SET_LIST_DOWNLOADED = 'SET_LIST_DOWNLOADED';
PlayerActions.TOGGLE_FAVE_TRACK = 'TOGGLE_FAVE_TRACK';
PlayerActions.SET_SEARCH_FILTER = 'SET_SEARCH_FILTER';
//# sourceMappingURL=player.actions.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getHomeState */
/* unused harmony export fetchTracksRendered */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTracksRendered; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);

function getHomeState(state) {
    return state.home;
}
;
function fetchTracksRendered(state) {
    return state.tracksRendered;
}
// *************************** PUBLIC API's ****************************
var getTracksRendered = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getHomeState, fetchTracksRendered);
//# sourceMappingURL=home.selectors.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameMusicList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_player_player_selectors__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__game_music_provider__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_player_player_actions__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_actions__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_player_player_selectors__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__list_source_enum__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_storage_storage_manager_provider__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_rxjs_deps__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var GameMusicList = (function () {
    function GameMusicList(http, location, store, playerActions, homeActions, storeManager) {
        this.http = http;
        this.location = location;
        this.store = store;
        this.playerActions = playerActions;
        this.homeActions = homeActions;
        this.storeManager = storeManager;
        this.BUFFERED_ITEM_AMOUNT = 50;
        this.trackLimit = 1;
        this.tracksData = __WEBPACK_IMPORTED_MODULE_6__game_music_provider__["a" /* GameMusicProvider */].data;
        this.bufferedTracks = [];
        this.FIELD_TRACKS = 'tracks';
        this.FIELD_TRACK_VERSION = 'trackVersion';
        this.currentTrack$ = this.store.select(__WEBPACK_IMPORTED_MODULE_10__common_player_player_selectors__["b" /* getCurrentTrack */]);
        this.listDownloaded$ = this.store.select(__WEBPACK_IMPORTED_MODULE_10__common_player_player_selectors__["j" /* isTracklistDownloaded */]);
        this.faveIds$ = this.store.select(__WEBPACK_IMPORTED_MODULE_10__common_player_player_selectors__["c" /* getFaveIds */]);
        this.trackFilter$ = this.store.select(__WEBPACK_IMPORTED_MODULE_0__common_player_player_selectors__["d" /* getTrackFilter */]);
        // decide if the track is selected
        // this.currentTrack$
        // 	.filter(currentTrack => !!currentTrack)
        // 	.subscribe(currentTrack => this.selectedTrack = currentTrack);
    }
    GameMusicList.prototype.ngOnInit = function () {
        var _this = this;
        if (this.listSource === __WEBPACK_IMPORTED_MODULE_11__list_source_enum__["a" /* ListSource */].ALL) {
            this.loadTracks()
                .subscribe(function (tracks) {
                _this.tracksData.tracks = tracks;
                _this.bufferedTracks = _this.tracksData.tracks
                    .slice(0, _this.BUFFERED_ITEM_AMOUNT);
                // in case of an update, don't replay the track.
                // that means there is already a track playing.
                // @todo
                // check if there is a track in the url already to play initially
                var wantedTrackName = _this.location.path()
                    .replace('/', ''); // remove the slashes
                var track = (!wantedTrackName) ?
                    __WEBPACK_IMPORTED_MODULE_6__game_music_provider__["a" /* GameMusicProvider */].getRandomTrack() :
                    __WEBPACK_IMPORTED_MODULE_6__game_music_provider__["a" /* GameMusicProvider */].getTrackByName(wantedTrackName);
                _this.store.dispatch(_this.playerActions.selectTrack(track));
                _this.store.dispatch(_this.playerActions.setListDownloaded());
            });
            // apply filtering to bufferedTracks
            this.trackFilter$
                .subscribe(function (trackFilter) {
                // only filter if there has been tracksData already there
                if (_this.tracksData.tracks.length > 0) {
                    _this.trackLimit = 1; // resetting the trackLimit
                    _this.trackFilter = trackFilter;
                    _this.addMoreTracks(_this.tracksData.tracks);
                }
            });
        }
        else if (this.listSource === __WEBPACK_IMPORTED_MODULE_11__list_source_enum__["a" /* ListSource */].FAVES) {
            this.listDownloaded$
                .filter(Boolean)
                .subscribe(function (faveIds) {
                _this.faveIds$
                    .subscribe(function (faveIds) {
                    _this.faveTracks = __WEBPACK_IMPORTED_MODULE_6__game_music_provider__["a" /* GameMusicProvider */].getTracksByIds(faveIds);
                    _this.bufferedTracks = _this.faveTracks
                        .slice(0, _this.BUFFERED_ITEM_AMOUNT);
                });
            });
        }
    };
    GameMusicList.prototype.showMoreTracks = function (infiniteScroll) {
        var targetTracks = (this.listSource === __WEBPACK_IMPORTED_MODULE_11__list_source_enum__["a" /* ListSource */].ALL) ?
            this.tracksData.tracks :
            this.faveTracks;
        this.addMoreTracks(targetTracks);
        infiniteScroll.complete();
    };
    GameMusicList.prototype.isInfiniteScrollEnabled = function () {
        return (this.trackLimit * this.BUFFERED_ITEM_AMOUNT) < this.tracksData.tracks.length;
    };
    GameMusicList.prototype.addMoreTracks = function (targetTracks) {
        var _this = this;
        this.bufferedTracks = targetTracks
            .filter(function (track) { return !_this.trackFilter || (track.creator.toLowerCase().indexOf(_this.trackFilter.toLowerCase()) !== -1 ||
            track.trackName.toLowerCase().indexOf(_this.trackFilter.toLowerCase()) !== -1); })
            .slice(0, this.BUFFERED_ITEM_AMOUNT * this.trackLimit);
        this.trackLimit++;
    };
    /**
     * check to load the tracks from localStorage first and update the cache later again.
     */
    GameMusicList.prototype.loadTracks = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            // check if track version is the same like in the localStorage
            var tracks = localStorage.getItem(_this.FIELD_TRACKS);
            __WEBPACK_IMPORTED_MODULE_7_firebase_app__["database"]()
                .ref('versions/tracks')
                .once('value')
                .then(function (snapshot) {
                var localVersion = parseInt("" + localStorage.getItem(_this.FIELD_TRACK_VERSION), 10);
                var defactoVersion = snapshot.val() || 0; // should never be 0… ¯\_(ツ)_/¯
                if ((!localVersion && tracks) || localVersion < defactoVersion) {
                    // track entries are old.
                    // update localStorage and refetch `FIELD_TRACKS`.
                    _this.fetchTracks()
                        .subscribe(function (tracks) {
                        observer.next(tracks);
                        observer.complete();
                    });
                }
                else {
                    observer.complete();
                }
                localStorage.setItem(_this.FIELD_TRACK_VERSION, defactoVersion);
            });
            if (tracks) {
                observer.next(JSON.parse(tracks));
            }
            else {
                _this.fetchTracks()
                    .subscribe(function (tracks) { return observer.next(tracks); });
            }
        });
    };
    GameMusicList.prototype.fetchTracks = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            __WEBPACK_IMPORTED_MODULE_7_firebase_app__["database"]()
                .ref('/tracks')
                .once('value')
                .then(function (snapshot) {
                var val = snapshot.val();
                var result = Object.keys(val)
                    .map(function (key) { return val[key]; });
                observer.next(result);
                // save the tracks in localStorage for caching
                localStorage.setItem(_this.FIELD_TRACKS, JSON.stringify(result));
            });
        });
    };
    return GameMusicList;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], GameMusicList.prototype, "listSource", void 0);
GameMusicList = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'game-music-list',
        template: "\n\t\t<ion-list>\n\t\t\t<game-music-list-item\n\t\t\t\t*ngFor=\"let track of bufferedTracks; let idx = index\"\n\t\t\t\t[track]=\"track\"\n\t\t\t\t[isSelected]=\"(currentTrack$ | async)?.trackName === track.trackName\"\n\t\t\t\t[idx]=\"idx\">\n\t\t\t</game-music-list-item>\n\t\t</ion-list>\n\n\t\t<ion-infinite-scroll\n\t\t\t(ionInfinite)=\"showMoreTracks($event)\"\n\t\t\tthreshold=\"100%\"\n\t\t\t[enabled]=\"isInfiniteScrollEnabled()\">\n\t\t\t<ion-infinite-scroll-content></ion-infinite-scroll-content>\n\t\t</ion-infinite-scroll>\n\t"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__angular_common__["e" /* Location */],
        __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_8__common_player_player_actions__["a" /* PlayerActions */],
        __WEBPACK_IMPORTED_MODULE_9__home_actions__["a" /* HomeActions */],
        __WEBPACK_IMPORTED_MODULE_12__common_storage_storage_manager_provider__["b" /* StorageManager */]])
], GameMusicList);

//# sourceMappingURL=game-music-list.component.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarMusicControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_player_player_actions__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_player_player_selectors__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_tracking_google_analytics_tracker_provider__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_player_volume_slider_volume_slider_component__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NavbarMusicControl = (function () {
    function NavbarMusicControl(store, playerActions, googleAnalyticsTracker, popoverCtrl) {
        this.store = store;
        this.playerActions = playerActions;
        this.googleAnalyticsTracker = googleAnalyticsTracker;
        this.popoverCtrl = popoverCtrl;
        this.isShuffle$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__common_player_player_selectors__["i" /* isShuffle */]);
        this.isRepeat$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__common_player_player_selectors__["h" /* isRepeat */]);
    }
    NavbarMusicControl.prototype.toggleSetting = function (settingKey) {
        this.store.dispatch(this.playerActions.toggleSetting(settingKey));
    };
    NavbarMusicControl.prototype.openVolumeSlider = function (evt) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__common_player_volume_slider_volume_slider_component__["a" /* VolumeSlider */]);
        popover.present({
            ev: evt
        });
    };
    NavbarMusicControl.prototype.trackClickout = function () {
        this.googleAnalyticsTracker.trackEvent('page', {
            action: 'project_clicked'
        });
    };
    return NavbarMusicControl;
}());
NavbarMusicControl = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'navbar-music-control',
        template: "\n\t\t<ion-buttons start end class=\"navbar-music-control\">\n\t\t\t<button ion-button icon-only start (click)=\"openVolumeSlider($event)\" class=\"navbar-music-control--active\">\n\t\t\t\t<ion-icon [name]=\"(volume$ | async) == 0 ? 'volume-off' : 'volume-up'\"></ion-icon>\n\t\t\t</button>\n\t\t\t<button ion-button icon-only (click)=\"toggleSetting('isRepeat')\" [ngClass]=\"{'navbar-music-control--active': (isRepeat$ | async)}\">\n\t\t\t\t<ion-icon name=\"repeat\"></ion-icon>\n\t\t\t</button>\n\t\t\t<!--\n\t\t\t<button ion-button icon-only (click)=\"toggleSetting('isShuffle')\" [ngClass]=\"{'navbar-music-control--active': (isShuffle$ | async)}\">\n\t\t\t\t<ion-icon name=\"shuffle\"></ion-icon>\n\t\t\t</button>\n\t\t\t-->\n\t\t\t<a (click)=\"track\" href=\"https://github.com/zwacky/game-music-player\" target=\"_blank\" rel=\"noopener\" ion-button icon-only class=\"navbar-music-control--active\" title=\"Go to GitHub project\">\n\t\t\t\t<ion-icon name=\"logo-github\"></ion-icon>\n\t\t\t</a>\n\t\t</ion-buttons>\n\t"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_2__common_player_player_actions__["a" /* PlayerActions */],
        __WEBPACK_IMPORTED_MODULE_4__common_tracking_google_analytics_tracker_provider__["a" /* GoogleAnalyticsTracker */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* PopoverController */]])
], NavbarMusicControl);

//# sourceMappingURL=navbar-music-control.component.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Playback; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_howler__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_howler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_howler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__track_scroller_provider__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__player_reducer__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__player_actions__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__player_selectors__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tracking_google_analytics_tracker_provider__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rxjs_deps__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var Playback = (function () {
    function Playback(store, playerActions, googleAnalyticsTracker) {
        var _this = this;
        this.store = store;
        this.playerActions = playerActions;
        this.googleAnalyticsTracker = googleAnalyticsTracker;
        this.seekerValue = 0;
        this.seekerStyle = {};
        this.trackDuration = 0;
        this.volumeLevel = 0;
        this.currentTrack = null;
        this.pausedTrack = null;
        this.tempPlayerState = {
            isShuffle: null,
            isRepeat: null,
        };
        this.isRangeSliderMoving = false;
        this.volume$ = this.store.select(__WEBPACK_IMPORTED_MODULE_7__player_selectors__["e" /* getVolume */]);
        this.isMuted$ = this.store.select(__WEBPACK_IMPORTED_MODULE_7__player_selectors__["f" /* isMuted */]);
        this.currentTrack$ = this.store.select(__WEBPACK_IMPORTED_MODULE_7__player_selectors__["b" /* getCurrentTrack */]);
        this.isPlaying$ = this.store.select(__WEBPACK_IMPORTED_MODULE_7__player_selectors__["g" /* isPlaying */]);
        this.isShuffle$ = this.store.select(__WEBPACK_IMPORTED_MODULE_7__player_selectors__["i" /* isShuffle */]);
        this.isRepeat$ = this.store.select(__WEBPACK_IMPORTED_MODULE_7__player_selectors__["h" /* isRepeat */]);
        this.audioState$ = this.store.select(__WEBPACK_IMPORTED_MODULE_7__player_selectors__["a" /* getAudioState */]);
        __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"]
            .interval(200)
            .subscribe(function () {
            if (_this.audioState === __WEBPACK_IMPORTED_MODULE_5__player_reducer__["a" /* AudioState */].LOADED && !_this.isRangeSliderMoving) {
                _this.seekerValue = _this.audio.seek() / _this.trackDuration * 100;
            }
        });
        // bind space to toggling play/pause and omit if a input field is focused (search)
        window.addEventListener('keydown', function (evt) {
            if (evt.which === 32 && ['input'].indexOf(document.activeElement.tagName.toLowerCase()) === -1) {
                evt.preventDefault();
                _this.togglePlay('space');
            }
        });
        // handle volume
        this.volume$
            .subscribe(function (volume) {
            _this.volumeLevel = volume;
            _this.setPlayerVolume(volume);
        });
        // handle muted
        this.isMuted$
            .subscribe(function (isMuted) { return _this.setPlayerVolume((isMuted) ? 0 : _this.volumeLevel); });
        // handle track loading
        this.currentTrack$
            .filter(function (track) { return track !== null; })
            .subscribe(function (track) {
            // check if the same track is already loaded. if yes, restart it.
            if (_this.currentTrack === track) {
                if (_this.audioState === __WEBPACK_IMPORTED_MODULE_5__player_reducer__["a" /* AudioState */].LOADED) {
                    _this.audio.seek(0);
                }
            }
            else {
                var base = 'https://tracks.gamemusicplayer.io';
                var url_1 = base + "/" + track.trackName;
                if (_this.audio) {
                    _this.audio.stop();
                }
                // have it wrapped around timeout for no ugly race conditions
                setTimeout(function () {
                    _this.audio = new __WEBPACK_IMPORTED_MODULE_3_howler__["Howl"]({
                        src: url_1,
                        autoplay: true,
                        volume: _this.volumeLevel / 100,
                        html5: true,
                        onload: function () { return _this.onTrackLoaded(); },
                        onend: function () { return _this.onTrackEnded(); },
                        onseek: function () { return _this.onSeeked(); },
                    });
                });
                _this.currentTrack = track;
                _this.store.dispatch(_this.playerActions.setAudioState(__WEBPACK_IMPORTED_MODULE_5__player_reducer__["a" /* AudioState */].LOADING));
                if (_this.seekerObserver) {
                    _this.seekerObserver.next(0);
                }
                _this.trackDuration = 0;
            }
        });
        // handle pause tracking
        // - only if a track has been loaded
        // - only unpause if it's the same track when it's been paused
        this.isPlaying$
            .subscribe(function (isPlaying) {
            if (!isPlaying) {
                if (_this.audio) {
                    _this.audio.pause();
                    _this.pausedTrack = _this.currentTrack;
                }
            }
            else {
                // only start playing the track if it's been the same that has been halted
                if (_this.audio && _this.pausedTrack === _this.currentTrack) {
                    _this.audio.play();
                }
            }
        });
        // handle isShuffle property
        this.isShuffle$
            .subscribe(function (isShuffle) { return _this.tempPlayerState.isShuffle = isShuffle; });
        // handle isRepeat property
        this.isRepeat$
            .subscribe(function (isRepeat) { return _this.tempPlayerState.isRepeat = isRepeat; });
        // handle seeker value
        this.audioState$
            .subscribe(function (audioState) {
            _this.audioState = audioState;
            if (audioState === __WEBPACK_IMPORTED_MODULE_5__player_reducer__["a" /* AudioState */].LOADING) {
                _this.seekerValue = 0;
            }
        });
        /**
         * update the current track duration position upon:
         * - every 1 seconds
         * - when the player is playing/pausing
         */
        this.trackDurationPosition$ = __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].merge(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"]
            .create(function (observer) { return _this.seekerObserver = observer; }), __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"]
            .interval(500)
            .map(function () { return (_this.audioState === __WEBPACK_IMPORTED_MODULE_5__player_reducer__["a" /* AudioState */].LOADED) ? _this.audio.seek() : 0; }));
    }
    Playback.prototype.togglePlay = function (triggeredBy) {
        if (triggeredBy === void 0) { triggeredBy = 'click'; }
        this.store.dispatch(this.playerActions.toggleSetting('isPlaying'));
        this.googleAnalyticsTracker.trackEvent('player', {
            action: 'toggle_play',
            label: triggeredBy
        });
    };
    Playback.prototype.toggleFave = function () {
        this.store.dispatch(this.playerActions.toggleFaveTrack(this.currentTrack));
        this.trackFaveToggled(this.currentTrack.trackName);
    };
    Playback.prototype.nextTrack = function () {
        var percentageCompleted = this.audio.seek() / this.trackDuration * 100;
        this.trackCompleted(parseInt((percentageCompleted).toFixed(0)));
        this.trackNextClicked();
        this.store.dispatch(this.playerActions.nextTrack(this.currentTrack, this.tempPlayerState.isShuffle));
    };
    Playback.prototype.scrollToTrack = function () {
        __WEBPACK_IMPORTED_MODULE_4__track_scroller_provider__["a" /* TrackScroller */].scrollToSelectedTrack();
    };
    /**
     * event upon changeing the range manually.
     */
    Playback.prototype.onRangeChanged = function (evt) {
        if (this.audioState === __WEBPACK_IMPORTED_MODULE_5__player_reducer__["a" /* AudioState */].LOADED) {
            var seconds = this.trackDuration * (evt.target.value / 100);
            this.audio.seek(seconds);
            this.isRangeSliderMoving = false;
        }
    };
    Playback.prototype.onRangeStarted = function () {
        this.isRangeSliderMoving = true;
    };
    Playback.prototype.onTrackLoaded = function () {
        this.store.dispatch(this.playerActions.setAudioState(__WEBPACK_IMPORTED_MODULE_5__player_reducer__["a" /* AudioState */].LOADED));
        this.trackDuration = this.audio.duration();
        this.googleAnalyticsTracker.trackEvent('track', {
            action: 'started',
            label: this.currentTrack.trackName
        });
    };
    Playback.prototype.onTrackEnded = function () {
        if (this.tempPlayerState.isRepeat) {
            this.audio.play();
        }
        else {
            this.store.dispatch(this.playerActions.setAudioState(__WEBPACK_IMPORTED_MODULE_5__player_reducer__["a" /* AudioState */].UNLOADED));
            this.store.dispatch(this.playerActions.nextTrack(this.currentTrack, this.tempPlayerState.isShuffle));
            // needs to unload otherwise onstop event will be triggered twice
            this.audio.unload();
        }
        this.trackCompleted(100);
    };
    /**
     * whenever the user sought (ha! thought I didn't know the past tense of seek didcha!) on the player.
     */
    Playback.prototype.onSeeked = function () {
        this.seekerObserver.next(this.audio.seek());
    };
    Playback.prototype.setPlayerVolume = function (volume) {
        if (this.audio) {
            this.audio.volume(volume / 100);
        }
    };
    Playback.prototype.trackCompleted = function (percentage) {
        this.googleAnalyticsTracker.trackEvent('track', {
            action: 'completed',
            label: percentage,
            nonInteraction: true,
        });
    };
    Playback.prototype.trackNextClicked = function () {
        this.googleAnalyticsTracker.trackEvent('player', {
            action: 'next_clicked'
        });
    };
    Playback.prototype.trackFaveToggled = function (trackName) {
        this.googleAnalyticsTracker.trackEvent('player', {
            action: 'fave_toggled',
            label: trackName
        });
    };
    return Playback;
}());
Playback = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'playback',
        template: "\n\t\t<ion-footer>\n\t\t\t<div class=\"playback\" [ngClass]=\"{'playback--shown': true}\">\n\n\t\t\t\t<input\n\t\t\t\t\ttype=\"range\"\n\t\t\t\t\tclass=\"playback__seeker\"\n\t\t\t\t\t[value]=\"seekerValue\"\n\t\t\t\t\tstep=\"0.01\"\n\t\t\t\t\t(change)=\"onRangeChanged($event)\"\n\t\t\t\t\t(input)=\"onRangeStarted()\">\n\n\t\t\t\t<ion-fab top left edge class=\"playback--fab\" (click)=\"togglePlay()\">\n\t\t\t\t\t<button ion-fab>\n\t\t\t\t\t\t<!-- <ion-icon [name]=\"(currentTrack$ | async)?.isFaved ? 'heart' : 'heart-outline'\"></ion-icon> -->\n\t\t\t\t\t\t<ion-icon [name]=\"(isPlaying$ | async) ? 'pause' : 'play'\"></ion-icon>\n\t\t\t\t\t</button>\n\t\t\t\t</ion-fab>\n\n\t\t\t\t<ion-toolbar>\n\n\t\t\t\t\t<div class=\"playback__timing\">\n\t\t\t\t\t\t<span class=\"playback__timing--current\">{{ (trackDurationPosition$ | async) | fromSeconds }}</span>\n\t\t\t\t\t\t<span class=\"playback__timing--separator\">/</span>\n\t\t\t\t\t\t<span class=\"playback__timing--total\">{{ trackDuration | fromSeconds }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"playback__control\">\n\t\t\t\t\t\t<ion-buttons class=\"playback__control__buttons\">\n\t\t\t\t\t\t\t<button ion-button icon-only end (click)=\"nextTrack()\">\n\t\t\t\t\t\t\t\t<ion-icon name=\"skip-forward\"></ion-icon>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button ion-button icon-only end (click)=\"toggleFave()\">\n\t\t\t\t\t\t\t\t<ion-icon name=\"heart\" color=\"dark\"></ion-icon>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<!--\n\t\t\t\t\t\t\t<button ion-button icon-only start (click)=\"openVolumeSlider($event)\">\n\t\t\t\t\t\t\t\t<ion-icon [name]=\"(volume$ | async) == 0 ? 'volume-off' : 'volume-up'\"></ion-icon>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"playback__display\" (click)=\"scrollToTrack()\" *ngIf=\"(currentTrack$ | async)\">\n\t\t\t\t\t\t<div class=\"playback__display--creator\">{{ (currentTrack$ | async)?.creator }}</div>\n\t\t\t\t\t\t<div class=\"playback__display--title\">{{ (currentTrack$ | async)?.title }}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-toolbar>\n\t\t\t</div>\n\t\t</ion-footer>\n\t"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_6__player_actions__["a" /* PlayerActions */],
        __WEBPACK_IMPORTED_MODULE_8__tracking_google_analytics_tracker_provider__["a" /* GoogleAnalyticsTracker */]])
], Playback);

//# sourceMappingURL=playback.component.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameMusicListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_player_player_actions__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_tracking_google_analytics_tracker_provider__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_actions__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameMusicListItem = (function () {
    function GameMusicListItem(store, playerActions, googleAnalyticsTracker, homeActions) {
        this.store = store;
        this.playerActions = playerActions;
        this.googleAnalyticsTracker = googleAnalyticsTracker;
        this.homeActions = homeActions;
    }
    GameMusicListItem.prototype.ngOnInit = function () {
        if (this.idx === 0) {
            this.store.dispatch(this.homeActions.setRendered(true));
        }
    };
    GameMusicListItem.prototype.selectTrack = function (track) {
        // check if the track will be restarted
        if (this.isSelected) {
            this.store.dispatch(this.playerActions.selectTrack(null));
            this.googleAnalyticsTracker.trackEvent('player', {
                action: 'track_selected_restart',
                label: track.trackName
            });
        }
        this.store.dispatch(this.playerActions.selectTrack(track));
        this.googleAnalyticsTracker.trackEvent('player', {
            action: 'track_selected',
            label: track.trackName
        });
    };
    return GameMusicListItem;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], GameMusicListItem.prototype, "track", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], GameMusicListItem.prototype, "isSelected", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], GameMusicListItem.prototype, "idx", void 0);
GameMusicListItem = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'game-music-list-item',
        template: "\n\t\t<button\n\t\t\tion-item\n\t\t\tclass=\"game-music-list-item\"\n\t\t\t[ngClass]=\"{'game-music-list-item--selected': isSelected}\"\n\t\t\t(click)=\"selectTrack(track)\">\n\t\t\t<div class=\"game-music-list-item__container\">\n\t\t\t\t<div class=\"game-music-list-item__container__symbol\">\n\t\t\t\t\t<ion-icon name=\"musical-notes\"></ion-icon>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"game-music-list-item__container__bold\">\n\t\t\t\t\t{{ track.creator }}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"game-music-list-item__container__casual\">\n\t\t\t\t\t{{ track.title }}\n\t\t\t\t</div>\n\t\t\t\t<game-music-list-item-more></game-music-list-item-more>\n\t\t\t</div>\n\t\t\t<!-- <strong>{{ track.creator }}</strong> {{ track.title}} -->\n\t\t</button>\n\t",
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_2__common_player_player_actions__["a" /* PlayerActions */],
        __WEBPACK_IMPORTED_MODULE_3__common_tracking_google_analytics_tracker_provider__["a" /* GoogleAnalyticsTracker */],
        __WEBPACK_IMPORTED_MODULE_4__home_actions__["a" /* HomeActions */]])
], GameMusicListItem);

//# sourceMappingURL=game-music-list-item.component.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameMusicListItemMore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GameMusicListItemMore = (function () {
    function GameMusicListItemMore() {
    }
    return GameMusicListItemMore;
}());
GameMusicListItemMore = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'game-music-list-item-more',
        template: "\n\t\t<div class=\"game-music-list-item__container__more\" clear>\n\n\t\t</div>\n\t",
    })
], GameMusicListItemMore);

//# sourceMappingURL=game-music-list-item-more.component.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export developmentReducer */
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_player_player_reducer__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home_reducer__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_core__ = __webpack_require__(235);





var reducers = {
    player: __WEBPACK_IMPORTED_MODULE_0__common_player_player_reducer__["b" /* PlayerReducer */],
    home: __WEBPACK_IMPORTED_MODULE_1__pages_home_home_reducer__["a" /* HomeReducer */],
};
var developmentReducer = Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_core__["a" /* compose */])(__WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze__["storeFreeze"], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["c" /* combineReducers */])(reducers);
var productionReducer = Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["c" /* combineReducers */])(reducers);
function reducer(state, action) {
    // TODO set reducers according to environment (dev, prod)
    var environment = 'dev';
    return (environment === 'dev') ?
        productionReducer(state, action) :
        developmentReducer(state, action);
}
//# sourceMappingURL=app.reducers.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = HomeReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_actions__ = __webpack_require__(82);

;
var defaultState = {
    tracksRendered: false,
};
function HomeReducer(state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__home_actions__["a" /* HomeActions */].RENDERED:
            var changedSetting = {
                tracksRendered: action.payload
            };
            return Object.assign({}, state, changedSetting);
        default:
            return state;
    }
}
//# sourceMappingURL=home.reducer.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DurationFormatter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DurationFormatter = (function () {
    function DurationFormatter() {
    }
    DurationFormatter.prototype.transform = function (value) {
        var minutes = Math.floor(value / 60);
        var seconds = Math.floor(value - (minutes * 60));
        return [
            ('00' + minutes).substr(-2),
            ('00' + seconds).substr(-2),
        ].join(':');
    };
    return DurationFormatter;
}());
DurationFormatter = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'fromSeconds' })
], DurationFormatter);

//# sourceMappingURL=duration-formatter.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarSearch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_tracking_google_analytics_tracker_provider__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_player_player_actions__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarSearch = (function () {
    function NavbarSearch(store, playerActions, googleAnalyticsTracker) {
        var _this = this;
        this.store = store;
        this.playerActions = playerActions;
        this.googleAnalyticsTracker = googleAnalyticsTracker;
        // bind cmd + f / ctrl + f to automatically focus on the search input
        window.addEventListener('keydown', function (evt) {
            if ((evt.ctrlKey || evt.metaKey) && evt.keyCode === 70) {
                evt.preventDefault();
                _this.navbarSearch.setFocus();
            }
        });
    }
    /**
     * every keystroke updates the filter.
     *
     * @param evt {Event}
     */
    NavbarSearch.prototype.changedInput = function (evt) {
        if (evt.keyCode === 27) {
            evt.target.blur();
        }
        else {
            var value = evt.target.value;
            this.store.dispatch(this.playerActions.setSearchFiter(value));
        }
    };
    /**
     * blur event is treated as a successful search.
     * searches that are done, but result in a bounce are therefore not tracked.
     */
    NavbarSearch.prototype.blurred = function (evt) {
        var value = evt.target.value;
        if (value) {
            this.googleAnalyticsTracker.trackEvent('player', {
                action: 'searched',
                label: value
            });
        }
    };
    return NavbarSearch;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_14" /* ViewChild */])('navbarsearch'),
    __metadata("design:type", Object)
], NavbarSearch.prototype, "navbarSearch", void 0);
NavbarSearch = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'navbar-search',
        template: "\n\t<ion-item>\n\t\t<ion-input\n\t\t\t#navbarsearch\n\t\t\ttype=\"text\"\n\t\t\tplaceholder=\"Search track or game\u2026\"\n\t\t\t(keyup)=\"changedInput($event)\"\n\t\t\t(blur)=\"blurred($event)\">\n\t\t</ion-input>\n\t</ion-item>\n\t"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_1__common_player_player_actions__["a" /* PlayerActions */],
        __WEBPACK_IMPORTED_MODULE_0__common_tracking_google_analytics_tracker_provider__["a" /* GoogleAnalyticsTracker */]])
], NavbarSearch);

//# sourceMappingURL=navbar-search.component.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarLogo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarLogo = (function () {
    function NavbarLogo() {
    }
    return NavbarLogo;
}());
NavbarLogo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'navbar-logo',
        template: "\n\t\t<div style=\"display: inline-block; height: 100%; padding: 15px 0 0 15px;\">\n\t\t\t<img\n\t\t\t\tsrc=\"/assets/logo/gamemusicplayer-logo.png\"\n\t\t\t\talt=\"Game Music Player\"\n\t\t\t\ttitle=\"Game Music Player\"\n\t\t\t\tstyle=\"display: inline-block; vertical-align: middle; width: 40px; border: 1px solid #29434e; border-radius: 50%;;\">\n\t\t</div>\n\t"
    }),
    __metadata("design:paramtypes", [])
], NavbarLogo);

//# sourceMappingURL=navbar-logo.component.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleAnalyticsTracker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GoogleAnalyticsTracker = (function () {
    function GoogleAnalyticsTracker() {
    }
    GoogleAnalyticsTracker.prototype.trackEvent = function (category, properties) {
        var nonInteraction = ('nonInteraction' in properties) ?
            properties.nonInteraction :
            false;
        ga('send', 'event', category, properties.action, properties.label, properties.value, { nonInteraction: nonInteraction });
    };
    return GoogleAnalyticsTracker;
}());
GoogleAnalyticsTracker = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], GoogleAnalyticsTracker);

//# sourceMappingURL=google-analytics-tracker.provider.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeActions; });
var HomeActions = (function () {
    function HomeActions() {
    }
    HomeActions.prototype.setRendered = function (value) {
        return {
            type: HomeActions.RENDERED,
            payload: value
        };
    };
    return HomeActions;
}());

HomeActions.RENDERED = 'RENDERED';
//# sourceMappingURL=home.actions.js.map

/***/ })

},[273]);
//# sourceMappingURL=main.js.map