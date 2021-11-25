/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/ts/ipinfo.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/ts/ipinfo.ts":
/*!*****************************!*\
  !*** ./assets/ts/ipinfo.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_functions_background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib-functions-background */ "./assets/ts/lib-functions-background.ts");
/* harmony import */ var _lib_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib-functions */ "./assets/ts/lib-functions.ts");
/*
* IP Info Plus
* Developer: Mr Abir Ahamed
* Website: https://www.mishusoft.com
* Official Link: https://download.mishusoft.com/addons/ipinfoplus/
* */
// https://pretagteam.com/question/add-a-separate-html-file-into-createreactapp


const ipd = Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('ipd-address');
const ipb = Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('ipd-search-btn');
const ipl = Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('ip-info-plus-app-bottom');
const ipt = Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('ip-info-plus-app-data-table');
function getIPInfo() {
    ipd.style = 'width:59% !important;';
    ipb.value = 'Getting data..';
    ipl.textContent = 'Loading...';
    ipt.setAttribute('style', 'display:none;');
    Object(_lib_functions_background__WEBPACK_IMPORTED_MODULE_0__["sendRequest"])({
        method: "GET",
        url: 'https://api.ipdata.co/' + ipd.value + '?api-key=test',
        async: true,
        header: [{ name: "Accept", value: "application/json" }]
    }, function (IpDataReply) {
        ipd.style = 'width:71% !important;';
        ipb.value = 'Search';
        Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('ip-info-plus-app-data-table').removeAttribute('style');
        ipl.textContent = 'IP INFORMATION:';
        Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('ipd-address').value = IpDataReply.ip;
        Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('client-ip').textContent = IpDataReply.ip;
        Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('client-visual-location').href = 'https://www.google.com/maps/@' + IpDataReply.latitude + ',' + IpDataReply.longitude + ',19z';
        Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('client-city').textContent = IpDataReply.city;
        Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('client-region').textContent = IpDataReply.region;
        Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('client-country').textContent = IpDataReply.country_name + ' (' + IpDataReply.country_code + ') ';
        let country_flag = Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["createElement"])([{ 'img': { 'style': 'width: 10px;height: 8px;', 'src': IpDataReply.flag, 'alt': 'FLAG' } }]);
        Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('client-country').appendChild(country_flag);
        Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('client-continent-name').textContent = IpDataReply.continent_name + ' (' + IpDataReply.continent_code + ')';
        Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('client-post').textContent = IpDataReply.postal;
        Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('client-asn-name').href = 'https://' + IpDataReply.asn.domain;
        Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('client-asn-name').textContent = IpDataReply.asn.name + ' [' + IpDataReply.asn.type + ']';
        let language = '';
        for (let n in IpDataReply.languages) {
            language += IpDataReply.languages[n].name + '[' + IpDataReply.languages[n].native + ']; ';
        }
        Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('client-language').textContent = language;
        Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('client-currency-name').textContent = IpDataReply.currency.name;
        Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('client-currency-code').textContent = IpDataReply.currency.code;
        Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('client-currency-symbol').textContent = IpDataReply.currency.symbol;
        Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('client-time-zone-name').textContent = IpDataReply.time_zone.name;
        Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('client-time-zone-abbr').textContent = IpDataReply.time_zone.abbr;
        Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('client-time-zone-offset').textContent = IpDataReply.time_zone.offset;
        Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('client-time-zone-is-dist').textContent = IpDataReply.time_zone.is_dst;
        Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('client-time-zone-current-time').textContent = IpDataReply.time_zone.current_time;
    });
}
getIPInfo();
ipd.addEventListener('change', getIPInfo, false);
ipb.addEventListener('click', getIPInfo, false);
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
}, false);


/***/ }),

/***/ "./assets/ts/lib-functions-background.ts":
/*!***********************************************!*\
  !*** ./assets/ts/lib-functions-background.ts ***!
  \***********************************************/
/*! exports provided: IsJsonString, sendRequest, optimizeAppSettingObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsJsonString", function() { return IsJsonString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendRequest", function() { return sendRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optimizeAppSettingObject", function() { return optimizeAppSettingObject; });
function IsJsonString(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
function sendRequest(options, callback) {
    let dataType;
    /*console.group('XHR request');
    console.log(options);*/
    if (typeof options === "object") {
        /*console.info('options is object');*/
        if (options.method !== null && options.url !== null) {
            /*console.info('method and url found');*/
            let request = new XMLHttpRequest();
            /*console.info('creating xhr request');*/
            request.open(options.method, options.url, options.async);
            /*console.info('opening url with xhr request');
            console.info('setting xhr request header');*/
            if (options.header !== null && typeof options.header == "object") {
                for (let i = 0; i < options.header.length; i++) {
                    request.setRequestHeader(options.header[i].name, options.header[i].value);
                    if (options.header[i].value.indexOf('form') !== -1) {
                        dataType = 'formData';
                    }
                    if (options.header[i].value.indexOf('json') !== -1) {
                        dataType = 'jsonData';
                    }
                }
            }
            /*else {
                console.error("Error: Invalid headers.");
            }*/
            if (options.data !== null && typeof options.data == "object") {
                if (dataType === 'jsonData') {
                    /*console.info(options.data);*/
                    request.send(JSON.stringify(options.data));
                }
                if (dataType === 'formData') {
                    let formData = new FormData();
                    Object.keys(options.data).forEach(function (key) {
                        formData.append(key, options.data[key]);
                    });
                    /*console.info(options.data);
                    console.info(formData);*/
                    request.send(formData);
                }
            }
            else {
                request.send();
            }
            /*console.info('sending data with xhr request');*/
            request.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    /*console.info('getting data with xhr request');
                    console.log(this.responseText);*/
                    if (IsJsonString(this.responseText)) {
                        let data = JSON.parse(this.responseText);
                        if (callback) {
                            callback(data);
                        }
                    }
                }
            };
        }
        else {
            console.error("Error: METHOD and URL empty.");
        }
    }
    else {
        console.error("Error: Invalid options.");
    }
    console.groupEnd();
}
function optimizeAppSettingObject(setting, options, callbackFn, fallbackFn) {
    /*console.log(setting);
    console.log(options);
    console.log(Object.keys(setting));*/
    if (options.length !== 0) {
        options.forEach(function (item) {
            Object.keys(item).forEach(function (__opt_Key) {
                Object.keys(setting).forEach(function (__obj_Key) {
                    if (__opt_Key === __obj_Key) {
                        item[__opt_Key].forEach(function (__opt_sub_key) {
                            Object.keys(setting[__obj_Key]).forEach(function (__obj_sub_key) {
                                if (__opt_sub_key !== __obj_sub_key && __obj_sub_key === '') {
                                    /*console.log("__opt_sub_key undefined...");
                                    console.log(__opt_sub_key);*/
                                    if (fallbackFn) {
                                        return fallbackFn();
                                    }
                                } /*else {
                                    console.log("__obj_Key...");
                                    console.log(__obj_Key);
                                    console.log("setting[__objKey]...");
                                    console.log(setting[__obj_Key]);
                                    console.log("[__sub_key]...");
                                    console.log(__obj_sub_key);
                                    console.log("setting[__objKey][__sub_key]...");
                                    console.log(setting[__obj_Key][__obj_sub_key]);
                                }*/
                            });
                        });
                    }
                });
            });
        });
        if (callbackFn) {
            return callbackFn(setting);
        }
    }
}


/***/ }),

/***/ "./assets/ts/lib-functions.ts":
/*!************************************!*\
  !*** ./assets/ts/lib-functions.ts ***!
  \************************************/
/*! exports provided: retrieveDate, checkDuplicate, createElement, captureElementById, captureElementByClassName, captureElementByTagName, getLoggedInUsersEarned, getLoggedInUsersReferralsAttracted, getLoggedInUsersEarnedByReferrals, currencyFormat, numberFormat, startTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retrieveDate", function() { return retrieveDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDuplicate", function() { return checkDuplicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureElementById", function() { return captureElementById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureElementByClassName", function() { return captureElementByClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureElementByTagName", function() { return captureElementByTagName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoggedInUsersEarned", function() { return getLoggedInUsersEarned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoggedInUsersReferralsAttracted", function() { return getLoggedInUsersReferralsAttracted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoggedInUsersEarnedByReferrals", function() { return getLoggedInUsersEarnedByReferrals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currencyFormat", function() { return currencyFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberFormat", function() { return numberFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTimer", function() { return startTimer; });
function retrieveDate(presetDate) {
    let d, hours, format;
    if (presetDate) {
        d = new Date(presetDate);
    }
    else {
        d = new Date();
    }
    let months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (d.getHours() === 0) {
        hours = '12';
    }
    else { // @ts-ignore
        if (d.getHours() >= '12') {
            hours = d.getHours() - 12;
        }
        else {
            hours = d.getHours();
        }
    }
    // @ts-ignore
    if (d.getHours() >= '12') {
        format = 'PM';
    }
    else {
        format = 'AM';
    }
    return (days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear() + ', ' + hours + ':' + d.getMinutes() + ' ' + format);
}
function checkDuplicate(str) {
    for (let i = 0; i < str.length; i++) {
        let re = new RegExp("[^" + str[i] + "]", "g");
        if (str.replace(re, "").length >= 2) {
            return true;
        }
    }
    return false;
}
function createElement(node_data) {
    let element, i, j, k;
    for (i in node_data) {
        let data = node_data[i];
        for (j in data) {
            let elementName = j;
            let elementData = data[j];
            element = document.createElement(elementName);
            for (k in elementData) {
                let element_attribute = k;
                let element_attribute_value = elementData[k];
                element.setAttribute(element_attribute, element_attribute_value);
            }
        }
    }
    return element;
}
function captureElementById(elementId) {
    if (document.querySelector('#' + elementId) !== null) {
        return document.querySelector('#' + elementId);
    }
}
function captureElementByClassName(ClassName) {
    if (document.querySelector('.' + ClassName) !== null) {
        return document.querySelector('.' + ClassName);
    }
}
function captureElementByTagName(TagName) {
    if (document.querySelector(TagName) !== null) {
        return document.querySelector(TagName);
    }
}
function getLoggedInUsersEarned() {
    var _a;
    return (_a = captureElementById('moneycount').textContent) === null || _a === void 0 ? void 0 : _a.replace(/\s\$/g, '').replace(/\./, '');
}
function getLoggedInUsersReferralsAttracted() {
    var _a;
    return (_a = captureElementById('refcount').textContent) === null || _a === void 0 ? void 0 : _a.replace(/\s/g, '');
}
function getLoggedInUsersEarnedByReferrals() {
    var _a;
    return (_a = captureElementById('refmoney').textContent) === null || _a === void 0 ? void 0 : _a.replace(/\s\$/g, '').replace(/\./, '');
}
function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
function numberFormat(num) {
    return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
function startTimer(duration, display) {
    var timer = duration, /*hours,*/ minutes, seconds;
    /*let seconds:any = parseInt(String(duration), 10);*/
    setInterval(function () {
        /*let days: any = Math.floor(seconds / (3600 * 24));
        seconds -= days * 3600 * 24;
        let hours: any = Math.floor(seconds / 3600);
        seconds -= hours * 3600;
        let minutes: any = Math.floor(seconds / 60);
        seconds -= minutes * 60;*/
        /*hours = parseInt(String(timer / 3600), 10);*/
        minutes = parseInt(String(timer / 60), 10);
        seconds = parseInt(String(timer % 60), 10);
        /*hours = hours < 10 ? "0" + hours : hours;*/
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = /*days + " Days, " + hours + " Hours, " +*/ minutes + " Minutes, " + seconds + " Seconds";
        if (--timer < 0) {
            /*alert(timer)*/
            timer = duration;
        }
    }, 1000);
}


/***/ })

/******/ });
//# sourceMappingURL=ip-info-plus.js.map