/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./node_modules/tslib/tslib.es6.mjs
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* harmony default export */ const tslib_es6 = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
});

;// ./node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map
;// ./node_modules/rxjs/dist/esm5/internal/util/isFunction.js
function isFunction(value) {
    return typeof value === 'function';
}
//# sourceMappingURL=isFunction.js.map
;// ./node_modules/rxjs/dist/esm5/internal/util/isPromise.js

function isPromise(value) {
    return isFunction(value === null || value === void 0 ? void 0 : value.then);
}
//# sourceMappingURL=isPromise.js.map
;// ./node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
function createErrorClass(createImpl) {
    var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}
//# sourceMappingURL=createErrorClass.js.map
;// ./node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js

var UnsubscriptionError = createErrorClass(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors
            ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
            : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});
//# sourceMappingURL=UnsubscriptionError.js.map
;// ./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}
//# sourceMappingURL=arrRemove.js.map
;// ./node_modules/rxjs/dist/esm5/internal/Subscription.js




var Subscription = (function () {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            var initialFinalizer = this.initialTeardown;
            if (isFunction(initialFinalizer)) {
                try {
                    initialFinalizer();
                }
                catch (e) {
                    errors = e instanceof UnsubscriptionError ? e.errors : [e];
                }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                        var finalizer = _finalizers_1_1.value;
                        try {
                            execFinalizer(finalizer);
                        }
                        catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof UnsubscriptionError) {
                                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (errors) {
                throw new UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    };
    Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            arrRemove(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function (teardown) {
        var _finalizers = this._finalizers;
        _finalizers && arrRemove(_finalizers, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = (function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}());

var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe)));
}
function execFinalizer(finalizer) {
    if (isFunction(finalizer)) {
        finalizer();
    }
    else {
        finalizer.unsubscribe();
    }
}
//# sourceMappingURL=Subscription.js.map
;// ./node_modules/rxjs/dist/esm5/internal/config.js
var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false,
};
//# sourceMappingURL=config.js.map
;// ./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js

var timeoutProvider = {
    setTimeout: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var delegate = timeoutProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
            return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
        }
        return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearTimeout: function (handle) {
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined,
};
//# sourceMappingURL=timeoutProvider.js.map
;// ./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js


function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function () {
        var onUnhandledError = config.onUnhandledError;
        if (onUnhandledError) {
            onUnhandledError(err);
        }
        else {
            throw err;
        }
    });
}
//# sourceMappingURL=reportUnhandledError.js.map
;// ./node_modules/rxjs/dist/esm5/internal/util/noop.js
function noop() { }
//# sourceMappingURL=noop.js.map
;// ./node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
var COMPLETE_NOTIFICATION = (function () { return createNotification('C', undefined, undefined); })();
function errorNotification(error) {
    return createNotification('E', undefined, error);
}
function nextNotification(value) {
    return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
    return {
        kind: kind,
        value: value,
        error: error,
    };
}
//# sourceMappingURL=NotificationFactories.js.map
;// ./node_modules/rxjs/dist/esm5/internal/util/errorContext.js

var context = null;
function errorContext(cb) {
    if (config.useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) {
            context = { errorThrown: false, error: null };
        }
        cb();
        if (isRoot) {
            var _a = context, errorThrown = _a.errorThrown, error = _a.error;
            context = null;
            if (errorThrown) {
                throw error;
            }
        }
    }
    else {
        cb();
    }
}
function captureError(err) {
    if (config.useDeprecatedSynchronousErrorHandling && context) {
        context.errorThrown = true;
        context.error = err;
    }
}
//# sourceMappingURL=errorContext.js.map
;// ./node_modules/rxjs/dist/esm5/internal/Subscriber.js









var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if (isSubscription(destination)) {
                destination.add(_this);
            }
        }
        else {
            _this.destination = EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (this.isStopped) {
            handleStoppedNotification(nextNotification(value), this);
        }
        else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (this.isStopped) {
            handleStoppedNotification(errorNotification(err), this);
        }
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (this.isStopped) {
            handleStoppedNotification(COMPLETE_NOTIFICATION, this);
        }
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function () {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    };
    return Subscriber;
}(Subscription));

var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
}
var ConsumerObserver = (function () {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function (value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    ConsumerObserver.prototype.error = function (err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
        else {
            handleUnhandledError(err);
        }
    };
    ConsumerObserver.prototype.complete = function () {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    return ConsumerObserver;
}());
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if (isFunction(observerOrNext) || !observerOrNext) {
            partialObserver = {
                next: (observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined),
                error: error !== null && error !== void 0 ? error : undefined,
                complete: complete !== null && complete !== void 0 ? complete : undefined,
            };
        }
        else {
            var context_1;
            if (_this && config.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function () { return _this.unsubscribe(); };
                partialObserver = {
                    next: observerOrNext.next && bind(observerOrNext.next, context_1),
                    error: observerOrNext.error && bind(observerOrNext.error, context_1),
                    complete: observerOrNext.complete && bind(observerOrNext.complete, context_1),
                };
            }
            else {
                partialObserver = observerOrNext;
            }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}(Subscriber));

function handleUnhandledError(error) {
    if (config.useDeprecatedSynchronousErrorHandling) {
        captureError(error);
    }
    else {
        reportUnhandledError(error);
    }
}
function defaultErrorHandler(err) {
    throw err;
}
function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = config.onStoppedNotification;
    onStoppedNotification && timeoutProvider.setTimeout(function () { return onStoppedNotification(notification, subscriber); });
}
var EMPTY_OBSERVER = {
    closed: true,
    next: noop,
    error: defaultErrorHandler,
    complete: noop,
};
//# sourceMappingURL=Subscriber.js.map
;// ./node_modules/rxjs/dist/esm5/internal/symbol/observable.js
var observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();
//# sourceMappingURL=observable.js.map
;// ./node_modules/rxjs/dist/esm5/internal/util/identity.js
function identity(x) {
    return x;
}
//# sourceMappingURL=identity.js.map
;// ./node_modules/rxjs/dist/esm5/internal/util/pipe.js

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
//# sourceMappingURL=pipe.js.map
;// ./node_modules/rxjs/dist/esm5/internal/Observable.js







var Observable = (function () {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
        errorContext(function () {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator
                ?
                    operator.call(subscriber, source)
                : source
                    ?
                        _this._subscribe(subscriber)
                    :
                        _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscriber = new SafeSubscriber({
                next: function (value) {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscriber.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve,
            });
            _this.subscribe(subscriber);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());

function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
    return (value && value instanceof Subscriber) || (isObserver(value) && isSubscription(value));
}
//# sourceMappingURL=Observable.js.map
;// ./node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js


function isInteropObservable(input) {
    return isFunction(input[observable]);
}
//# sourceMappingURL=isInteropObservable.js.map
;// ./node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js

function isAsyncIterable(obj) {
    return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
//# sourceMappingURL=isAsyncIterable.js.map
;// ./node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
//# sourceMappingURL=throwUnobservableError.js.map
;// ./node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator = getSymbolIterator();
//# sourceMappingURL=iterator.js.map
;// ./node_modules/rxjs/dist/esm5/internal/util/isIterable.js


function isIterable(input) {
    return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
}
//# sourceMappingURL=isIterable.js.map
;// ./node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js


function readableStreamLikeToAsyncGenerator(readableStream) {
    return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    reader = readableStream.getReader();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, , 9, 10]);
                    _b.label = 2;
                case 2:
                    if (false) {}
                    return [4, __await(reader.read())];
                case 3:
                    _a = _b.sent(), value = _a.value, done = _a.done;
                    if (!done) return [3, 5];
                    return [4, __await(void 0)];
                case 4: return [2, _b.sent()];
                case 5: return [4, __await(value)];
                case 6: return [4, _b.sent()];
                case 7:
                    _b.sent();
                    return [3, 2];
                case 8: return [3, 10];
                case 9:
                    reader.releaseLock();
                    return [7];
                case 10: return [2];
            }
        });
    });
}
function isReadableStreamLike(obj) {
    return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
//# sourceMappingURL=isReadableStreamLike.js.map
;// ./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js












function innerFrom(input) {
    if (input instanceof Observable) {
        return input;
    }
    if (input != null) {
        if (isInteropObservable(input)) {
            return fromInteropObservable(input);
        }
        if (isArrayLike(input)) {
            return fromArrayLike(input);
        }
        if (isPromise(input)) {
            return fromPromise(input);
        }
        if (isAsyncIterable(input)) {
            return fromAsyncIterable(input);
        }
        if (isIterable(input)) {
            return fromIterable(input);
        }
        if (isReadableStreamLike(input)) {
            return fromReadableStreamLike(input);
        }
    }
    throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
    return new Observable(function (subscriber) {
        var obs = obj[observable]();
        if (isFunction(obs.subscribe)) {
            return obs.subscribe(subscriber);
        }
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    });
}
function fromArrayLike(array) {
    return new Observable(function (subscriber) {
        for (var i = 0; i < array.length && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    });
}
function fromPromise(promise) {
    return new Observable(function (subscriber) {
        promise
            .then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, reportUnhandledError);
    });
}
function fromIterable(iterable) {
    return new Observable(function (subscriber) {
        var e_1, _a;
        try {
            for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
                var value = iterable_1_1.value;
                subscriber.next(value);
                if (subscriber.closed) {
                    return;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        subscriber.complete();
    });
}
function fromAsyncIterable(asyncIterable) {
    return new Observable(function (subscriber) {
        process(asyncIterable, subscriber).catch(function (err) { return subscriber.error(err); });
    });
}
function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function () {
        var value, e_2_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 11]);
                    asyncIterable_1 = __asyncValues(asyncIterable);
                    _b.label = 1;
                case 1: return [4, asyncIterable_1.next()];
                case 2:
                    if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
                    value = asyncIterable_1_1.value;
                    subscriber.next(value);
                    if (subscriber.closed) {
                        return [2];
                    }
                    _b.label = 3;
                case 3: return [3, 1];
                case 4: return [3, 11];
                case 5:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 11];
                case 6:
                    _b.trys.push([6, , 9, 10]);
                    if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
                    return [4, _a.call(asyncIterable_1)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8: return [3, 10];
                case 9:
                    if (e_2) throw e_2.error;
                    return [7];
                case 10: return [7];
                case 11:
                    subscriber.complete();
                    return [2];
            }
        });
    });
}
//# sourceMappingURL=innerFrom.js.map
;// ./node_modules/rxjs/dist/esm5/internal/util/lift.js

function hasLift(source) {
    return isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
    return function (source) {
        if (hasLift(source)) {
            return source.lift(function (liftedSource) {
                try {
                    return init(liftedSource, this);
                }
                catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError('Unable to lift unknown Observable type');
    };
}
//# sourceMappingURL=lift.js.map
;// ./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js


function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = (function (_super) {
    __extends(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext
            ? function (value) {
                try {
                    onNext(value);
                }
                catch (err) {
                    destination.error(err);
                }
            }
            : _super.prototype._next;
        _this._error = onError
            ? function (err) {
                try {
                    onError(err);
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._error;
        _this._complete = onComplete
            ? function () {
                try {
                    onComplete();
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function () {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var closed_1 = this.closed;
            _super.prototype.unsubscribe.call(this);
            !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
        }
    };
    return OperatorSubscriber;
}(Subscriber));

//# sourceMappingURL=OperatorSubscriber.js.map
;// ./node_modules/rxjs/dist/esm5/internal/operators/map.js


function map(project, thisArg) {
    return operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}
//# sourceMappingURL=map.js.map
;// ./node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
    if (delay === void 0) { delay = 0; }
    if (repeat === void 0) { repeat = false; }
    var scheduleSubscription = scheduler.schedule(function () {
        work();
        if (repeat) {
            parentSubscription.add(this.schedule(null, delay));
        }
        else {
            this.unsubscribe();
        }
    }, delay);
    parentSubscription.add(scheduleSubscription);
    if (!repeat) {
        return scheduleSubscription;
    }
}
//# sourceMappingURL=executeSchedule.js.map
;// ./node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js



function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
    var buffer = [];
    var active = 0;
    var index = 0;
    var isComplete = false;
    var checkComplete = function () {
        if (isComplete && !buffer.length && !active) {
            subscriber.complete();
        }
    };
    var outerNext = function (value) { return (active < concurrent ? doInnerSub(value) : buffer.push(value)); };
    var doInnerSub = function (value) {
        expand && subscriber.next(value);
        active++;
        var innerComplete = false;
        innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, function (innerValue) {
            onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
            if (expand) {
                outerNext(innerValue);
            }
            else {
                subscriber.next(innerValue);
            }
        }, function () {
            innerComplete = true;
        }, undefined, function () {
            if (innerComplete) {
                try {
                    active--;
                    var _loop_1 = function () {
                        var bufferedValue = buffer.shift();
                        if (innerSubScheduler) {
                            executeSchedule(subscriber, innerSubScheduler, function () { return doInnerSub(bufferedValue); });
                        }
                        else {
                            doInnerSub(bufferedValue);
                        }
                    };
                    while (buffer.length && active < concurrent) {
                        _loop_1();
                    }
                    checkComplete();
                }
                catch (err) {
                    subscriber.error(err);
                }
            }
        }));
    };
    source.subscribe(createOperatorSubscriber(subscriber, outerNext, function () {
        isComplete = true;
        checkComplete();
    }));
    return function () {
        additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
    };
}
//# sourceMappingURL=mergeInternals.js.map
;// ./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js





function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    if (isFunction(resultSelector)) {
        return mergeMap(function (a, i) { return map(function (b, ii) { return resultSelector(a, b, i, ii); })(innerFrom(project(a, i))); }, concurrent);
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return operate(function (source, subscriber) { return mergeInternals(source, subscriber, project, concurrent); });
}
//# sourceMappingURL=mergeMap.js.map
;// ./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js


var isArray = Array.isArray;
function callOrApply(fn, args) {
    return isArray(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
    return map(function (args) { return callOrApply(fn, args); });
}
//# sourceMappingURL=mapOneOrManyArgs.js.map
;// ./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js







var nodeEventEmitterMethods = ['addListener', 'removeListener'];
var eventTargetMethods = ['addEventListener', 'removeEventListener'];
var jqueryMethods = ['on', 'off'];
function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs(resultSelector));
    }
    var _a = __read(isEventTarget(target)
        ? eventTargetMethods.map(function (methodName) { return function (handler) { return target[methodName](eventName, handler, options); }; })
        :
            isNodeStyleEventEmitter(target)
                ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName))
                : isJQueryStyleEventEmitter(target)
                    ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName))
                    : [], 2), add = _a[0], remove = _a[1];
    if (!add) {
        if (isArrayLike(target)) {
            return mergeMap(function (subTarget) { return fromEvent(subTarget, eventName, options); })(innerFrom(target));
        }
    }
    if (!add) {
        throw new TypeError('Invalid event target');
    }
    return new Observable(function (subscriber) {
        var handler = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return subscriber.next(1 < args.length ? args : args[0]);
        };
        add(handler);
        return function () { return remove(handler); };
    });
}
function toCommonHandlerRegistry(target, eventName) {
    return function (methodName) { return function (handler) { return target[methodName](eventName, handler); }; };
}
function isNodeStyleEventEmitter(target) {
    return isFunction(target.addListener) && isFunction(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
    return isFunction(target.on) && isFunction(target.off);
}
function isEventTarget(target) {
    return isFunction(target.addEventListener) && isFunction(target.removeEventListener);
}
//# sourceMappingURL=fromEvent.js.map
;// ./node_modules/rxjs/dist/esm5/internal/scheduler/Action.js


var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription));

//# sourceMappingURL=Action.js.map
;// ./node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js

var intervalProvider = {
    setInterval: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var delegate = intervalProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
            return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout], __read(args)));
        }
        return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearInterval: function (handle) {
        var delegate = intervalProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
    },
    delegate: undefined,
};
//# sourceMappingURL=intervalProvider.js.map
;// ./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js




var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        var _a;
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, _id, delay) {
        if (delay === void 0) { delay = 0; }
        return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (_scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay != null && this.delay === delay && this.pending === false) {
            return id;
        }
        if (id != null) {
            intervalProvider.clearInterval(id);
        }
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, _delay) {
        var errored = false;
        var errorValue;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = e ? e : new Error('Scheduled action threw falsy error');
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype.unsubscribe = function () {
        if (!this.closed) {
            var _a = this, id = _a.id, scheduler = _a.scheduler;
            var actions = scheduler.actions;
            this.work = this.state = this.scheduler = null;
            this.pending = false;
            arrRemove(actions, this);
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, null);
            }
            this.delay = null;
            _super.prototype.unsubscribe.call(this);
        }
    };
    return AsyncAction;
}(Action));

//# sourceMappingURL=AsyncAction.js.map
;// ./node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js
var dateTimestampProvider = {
    now: function () {
        return (dateTimestampProvider.delegate || Date).now();
    },
    delegate: undefined,
};
//# sourceMappingURL=dateTimestampProvider.js.map
;// ./node_modules/rxjs/dist/esm5/internal/Scheduler.js

var Scheduler = (function () {
    function Scheduler(schedulerActionCtor, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.schedulerActionCtor(this, work).schedule(state, delay);
    };
    Scheduler.now = dateTimestampProvider.now;
    return Scheduler;
}());

//# sourceMappingURL=Scheduler.js.map
;// ./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js


var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        var _this = _super.call(this, SchedulerAction, now) || this;
        _this.actions = [];
        _this._active = false;
        return _this;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this._active) {
            actions.push(action);
            return;
        }
        var error;
        this._active = true;
        do {
            if ((error = action.execute(action.state, action.delay))) {
                break;
            }
        } while ((action = actions.shift()));
        this._active = false;
        if (error) {
            while ((action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler));

//# sourceMappingURL=AsyncScheduler.js.map
;// ./node_modules/rxjs/dist/esm5/internal/scheduler/async.js


var asyncScheduler = new AsyncScheduler(AsyncAction);
var async_async = (/* unused pure expression or super */ null && (asyncScheduler));
//# sourceMappingURL=async.js.map
;// ./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js



function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = asyncScheduler; }
    return operate(function (source, subscriber) {
        var activeTask = null;
        var lastValue = null;
        var lastTime = null;
        var emit = function () {
            if (activeTask) {
                activeTask.unsubscribe();
                activeTask = null;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        };
        function emitWhenIdle() {
            var targetTime = lastTime + dueTime;
            var now = scheduler.now();
            if (now < targetTime) {
                activeTask = this.schedule(undefined, targetTime - now);
                subscriber.add(activeTask);
                return;
            }
            emit();
        }
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            lastValue = value;
            lastTime = scheduler.now();
            if (!activeTask) {
                activeTask = scheduler.schedule(emitWhenIdle, dueTime);
                subscriber.add(activeTask);
            }
        }, function () {
            emit();
            subscriber.complete();
        }, undefined, function () {
            lastValue = activeTask = null;
        }));
    });
}
//# sourceMappingURL=debounceTime.js.map
;// ./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js



function distinctUntilChanged(comparator, keySelector) {
    if (keySelector === void 0) { keySelector = identity; }
    comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
    return operate(function (source, subscriber) {
        var previousKey;
        var first = true;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            var currentKey = keySelector(value);
            if (first || !comparator(previousKey, currentKey)) {
                first = false;
                previousKey = currentKey;
                subscriber.next(value);
            }
        }));
    });
}
function defaultCompare(a, b) {
    return a === b;
}
//# sourceMappingURL=distinctUntilChanged.js.map
;// ./src/js/searchLink.js
function searchLink(text) {
  const res = /https?:\/\//gm.test(text);
  if (res) {
    const allWords = text.split(" ");
    const resWord = [];
    allWords.forEach(word => {
      if (/https?:\/\//gm.test(word)) {
        resWord.push(`<a href="${word}" target="_blank">${word}</a>`);
      } else {
        resWord.push(word);
      }
    });
    return resWord.join(" ");
  } else {
    return text;
  }
}
;// ./src/js/Modal.js
class Modal {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }
  showTextModal(text) {
    this.parentEl.insertAdjacentHTML("afterbegin", `
      <div class="modal-upper">
        <div class="modal-upper-text">${text}</div>
        <div class="modal-upper-close">✖</div>
      </div>
      `);
  }
  showModalOnErrorGeo() {
    this.parentEl.insertAdjacentHTML("afterbegin", `
              <div class="modal-geo">
                <h3>Что то пошло не так</h3>
                <p>
                  К сожалению, нам не удалось определить ваше местоположение, пожалуйста,
                  дайте разрешение на использование геолокации, либо введите координаты
                  вручную
                </p>
                <p>Широта и долгота через запятую</p>
                <input type="text" class="coords-input" />
                <div class="btn-block">
                  <button class="cancel-geo">Отмена</button>
                  <button class="ok-geo">ОК</button>
                </div>
              </div>
              `);
  }
  showImportModal() {
    this.parentEl.insertAdjacentHTML("afterbegin", `
              <div class="modal-import">
                <h3>Импорт чата</h3>
                <p>
                  Введите уникальный идентификатор 
                </p>
                <input type="text" class="import-input" />
                <div class="btn-block">
                  <button class="cancel-import">Отмена</button>
                  <button class="ok-import">ОК</button>
                </div>
              </div>
              `);
  }
}
;// ./src/js/ChaosOrganizer.js


const modal = new Modal(document.body);
class ChaosOrganizer {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }
  static get markup() {
    return `
    <div class="container">
      <div class="header">
        <div class="header__name">Chaos Organizer</div>
        <input type="text" name="" id="" class="search-message none" />
        <div class="input-search-close none">✖</div>
        <div class="header__buttons">
          <img
            src="http://localhost:7070/search.png"
            alt="search"
            class="header__search"
          />
          <img src="http://localhost:7070/more.png" alt="" class="header__more" />
          <div class="modal-more none">
            <div class="modal-more-item import">Импорт чата</div>
            <div class="modal-more-item geo">Отправить гео-локацию</div>
            <div class="modal-more-item video-message">
              Записать видео-сообщение
            </div>
            <div class="modal-more-item favorites">
              Посмотреть все избранные сообщения
            </div>
            <div class="modal-more-item audio-message">
              Посмотреть все аудио-сообщения
            </div>
            <div class="modal-more-item video-message">
              Посмотреть все видео-сообщения
            </div>
            <div class="modal-more-item image-message">
              Посмотреть все изображения
            </div>
            <div class="modal-more-item file-message">
              Посмотреть все сообщения с файлами
            </div>
            <div class="close-modal-more">✖</div>
          </div>
        </div>
      </div>

      <div class="pin-message none"></div>

      <section class="messages">
        <div class="messages__container"></div>
      </section>

      <section class="input">
        <div class="drop none">
          <input class="drop-file" type="file" />
          <div class="placeholder-drop"></div>
        </div>

        <div class="input__file">
          <input type="file" class="input-file-btn" />
          <img
            src="http://localhost:7070/file.png"
            alt="file"
            class="input__file-placeholder"
          />
        </div>
        <input type="text" class="input__input" />
        <img
          src="http://localhost:7070/smile.png"
          alt="smile"
          class="input__smile"
        />

        <div class="smiles none">
          <div class="emoji emoji-smile">😂</div>
          <div class="emoji emoji-finger">👉</div>
          <div class="emoji emoji-sad">😞</div>
        </div>

        <img
          src="http://localhost:7070/microphone.png"
          alt="voice"
          class="input__voice"
        />
      </section>
    </div>
    `;
  }
  async bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    try {
      if (navigator.serviceWorker) {
        await navigator.serviceWorker.register("/service-worker.js");
        console.log("sw registered");
      }
    } catch (e) {
      console.log(e);
    }
    this.initialFetch();
    const dropFile = document.querySelector(".drop-file");
    const inputFileBtn = document.querySelector(".input-file-btn");
    inputFileBtn.addEventListener("change", e => this.onFileChange(e));
    dropFile.addEventListener("change", e => this.onFileChange(e));
    document.querySelector(".messages__container").addEventListener("dragenter", () => {
      const placeHolder = document.querySelector(".drop");
      placeHolder.style.display = "block";
    });
    document.querySelector(".messages").addEventListener("dragenter", () => {
      const placeHolder = document.querySelector(".drop");
      placeHolder.style.display = "block";
    });
    document.querySelector(".drop").addEventListener("dragleave", e => {
      e.currentTarget.style.display = "none";
    });
    dropFile.addEventListener("drop", () => {
      document.querySelector(".drop").style.display = "none";
    });
    const mainInput = document.querySelector(".input__input");
    mainInput.addEventListener("keydown", e => this.onKeyDownInMainInput(e));
    document.body.addEventListener("click", e => this.onClickBody(e));
  }
  initialFetch() {
    const currId = localStorage.getItem("id");
    if (currId) {
      fetch(`http://localhost:7070/api/import/${currId}/null`).then(r => r.json()).then(r => {
        const messageContainer = document.querySelector(".messages__container");
        if (r.pinId) {
          const pinMessage = document.querySelector(".pin-message");
          pinMessage.classList.remove("none");
          pinMessage.insertAdjacentHTML("afterbegin", `
              <div class="pinned-message" data-id="${r.pinId}">Pinned message</div>
              <div class="pinned-message-text">
                ${r.pinBody}
              </div>
              <div class="unpin">✖</div>
              `);
        }
        r.messages.forEach(msg => {
          switch (msg.type) {
            case "text":
              {
                let clicked;
                if (msg.star) {
                  clicked = "clicked";
                } else {
                  clicked = "unclicked";
                }
                const result = searchLink(msg.body);
                messageContainer.insertAdjacentHTML("beforeend", `
                   <div class="messege messages__message user" data-id="${msg.id}" data-pin="${msg.pinned}" data-star="${msg.star}">
                      <p class="messages__message-text">
                        ${result}
                      </p>
                      <div class="messages__message-time">${msg.time}</div>
                      <div class="star">
                        <img src="http://localhost:7070/star-${clicked}.png" alt="" class="star-${clicked}"/>
                      </div>
                      <div class="pin">📌</div>
                    </div>
                  `);
                return;
              }
            case "image":
              {
                messageContainer.insertAdjacentHTML("beforeend", `
                  <div class="messege messages__message-img user" data-id="${msg.id}">
                    <div class="messages__message-time-img">${msg.time}</div>

                    <img
                      src="http://localhost:7070/${msg.body}"
                      alt=""
                      class="messages__message-image"
                    />
                  </div>
                  `);
                return;
              }
            case "video":
              {
                messageContainer.insertAdjacentHTML("beforeend", `
                  <div class="messege messages__message-video user" data-id="${msg.id}">
                    <video src="http://localhost:7070/${msg.body}" controls></video>
                    <div class="messages__message-time-video">${msg.time}</div>
                  </div>
                  `);
                return;
              }
            case "audio":
              {
                messageContainer.insertAdjacentHTML("beforeend", `
                  <div class="messege messages__message-audio user" data-id="${msg.id}">
                    <audio
                      class="messages__message-audio-aud"
                      src="http://localhost:7070/${msg.body}"
                      controls
                    ></audio>
                    <div class="messages__message-time-audio">${msg.time}</div>
                  </div>
                  `);
                return;
              }
            case "file":
              {
                messageContainer.insertAdjacentHTML("beforeend", `
                  <div class="messege messages__message-file user" data-id="${msg.id}">
                    <div class="file">
                      <img src="http://localhost:7070/file.png" alt="" class="file-icon" />
                      <div class="file-desc">
                        <div class="file-desc-name">${msg.body}</div>
                      </div>
                    </div>
                    <div class="messages__message-time-file">${msg.time}</div>
                  </div>
                  `);
                return;
              }
          }
        });
      });
    } else {
      fetch("http://localhost:7070/api/init-chat", {
        method: "POST"
      }).then(r => r.json()).then(r => {
        localStorage.setItem("id", r.id);
        modal.showTextModal(`Уникальный итендификатор для экспорта чата: \n${r.id}`);
      });
    }
  }
  async onClickBody(e) {
    // Открытие закрытие дополнительного меню
    if (e.target.classList.contains("header__more")) {
      e.target.nextElementSibling.classList.toggle("none");
    }

    // Закрытие дополнительного меню
    if (e.target.classList.contains("close-modal-more")) {
      e.target.closest(".modal-more").classList.add("none");
    }

    // Открытие поля поиска
    if (e.target.classList.contains("header__search")) {
      const header = e.target.closest(".header");
      const inputSearch = header.querySelector(".search-message");
      const inputSearchClose = header.querySelector(".input-search-close");
      inputSearch.classList.remove("none");
      inputSearchClose.classList.remove("none");
    }

    // Закрытие поля поиска
    if (e.target.classList.contains("input-search-close")) {
      const header = e.target.closest(".header");
      const inputSearch = header.querySelector(".search-message");
      inputSearch.value = "";
      inputSearch.classList.add("none");
      e.target.classList.add("none");
      const currId = localStorage.getItem("id");
      if (currId) {
        fetch(`http://localhost:7070/api/import/${currId}/null`).then(r => r.json()).then(r => {
          const messageContainer = document.querySelector(".messages__container");
          messageContainer.innerHTML = "";
          r.messages.forEach(msg => {
            switch (msg.type) {
              case "text":
                {
                  let clicked;
                  if (msg.star) {
                    clicked = "clicked";
                  } else {
                    clicked = "unclicked";
                  }
                  const result = searchLink(msg.body);
                  messageContainer.insertAdjacentHTML("beforeend", `
                   <div class="messege messages__message user" data-id="${msg.id}" data-pin="${msg.pinned}" data-star="${msg.star}">
                      <p class="messages__message-text">
                        ${result}
                      </p>
                      <div class="messages__message-time">${msg.time}</div>
                      <div class="star">
                        <img src="http://localhost:7070/star-${clicked}.png" alt="" class="star-${clicked}"/>
                      </div>
                      <div class="pin">📌</div>
                    </div>
                  `);
                  return;
                }
              case "image":
                {
                  messageContainer.insertAdjacentHTML("beforeend", `
                  <div class="messege messages__message-img user" data-id="${msg.id}">
                    <div class="messages__message-time-img">${msg.time}</div>

                    <img
                      src="http://localhost:7070/${msg.body}"
                      alt=""
                      class="messages__message-image"
                    />
                  </div>
                  `);
                  return;
                }
              case "video":
                {
                  messageContainer.insertAdjacentHTML("beforeend", `
                  <div class="messege messages__message-video user" data-id="${msg.id}">
                    <video src="http://localhost:7070/${msg.body}" controls></video>
                    <div class="messages__message-time-video">${msg.time}</div>
                  </div>
                  `);
                  return;
                }
              case "audio":
                {
                  messageContainer.insertAdjacentHTML("beforeend", `
                  <div class="messege messages__message-audio user" data-id="${msg.id}">
                    <audio
                      class="messages__message-audio-aud"
                      src="http://localhost:7070/${msg.body}"
                      controls
                    ></audio>
                    <div class="messages__message-time-audio">${msg.time}</div>
                  </div>
                  `);
                  return;
                }
              case "file":
                {
                  messageContainer.insertAdjacentHTML("beforeend", `
                  <div class="messege messages__message-file user" data-id="${msg.id}">
                    <div class="file">
                      <img src="http://localhost:7070/file.png" alt="" class="file-icon" />
                      <div class="file-desc">
                        <div class="file-desc-name">${msg.body}</div>
                      </div>
                    </div>
                    <div class="messages__message-time-file">${msg.time}</div>
                  </div>
                  `);
                  return;
                }
            }
          });
        });
      }
    }

    // Удаление информативной модалки
    if (e.target.classList.contains("modal-upper-close")) {
      e.target.closest(".modal-upper").remove();
    }
    if (e.target.classList.contains("star-unclicked")) {
      const message = e.target.closest(".messages__message");
      const {
        id
      } = message.dataset;
      fetch("http://localhost:7070/api/add-star", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify({
          idChat: localStorage.id,
          idMessage: id
        })
      }).then(r => r.json()).then(r => {
        if (r.Status) {
          message.dataset.star = "true";
          e.target.className = "star-clicked";
          e.target.src = "http://localhost:7070/star-clicked.png";
        }
      });
    }
    if (e.target.classList.contains("star-clicked")) {
      const message = e.target.closest(".messages__message");
      const {
        id
      } = message.dataset;
      fetch("http://localhost:7070/api/remove-star", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify({
          idChat: localStorage.id,
          idMessage: id
        })
      }).then(r => r.json()).then(r => {
        if (r.Status) {
          message.dataset.star = "false";
          e.target.className = "star-unclicked";
          e.target.src = "http://localhost:7070/star-unclicked.png";
        }
      });
    }
    if (e.target.classList.contains("pin")) {
      const msg = e.target.closest(".messages__message");
      if (msg.dataset.pin === "false") {
        const pinCon = document.querySelector(".pin-message");
        if (!pinCon.hasChildNodes()) {
          const {
            id
          } = msg.dataset;
          fetch("http://localhost:7070/api/add-pin", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify({
              idChat: localStorage.id,
              idMessage: id,
              previousPinId: false
            })
          }).then(r => r.json()).then(r => {
            if (r.Status) {
              const text = msg.querySelector(".messages__message-text");
              pinCon.innerHTML = `
           <div class="pinned-message" data-id="${msg.dataset.id}">Pinned message</div>
            <div class="pinned-message-text">
              ${text.innerText}
            </div>
            <div class="unpin">✖</div>
          `;
              pinCon.classList.remove("none");
              msg.dataset.pin = "true";
            }
          });
        } else {
          pinCon.innerHTML = "";
          const pinnedMessageElement = document.querySelector(`[data-pin=true]`);
          const {
            id: oldId
          } = pinnedMessageElement.dataset;
          pinnedMessageElement.dataset.pin = false;
          const {
            id
          } = msg.dataset;
          fetch("http://localhost:7070/api/add-pin", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify({
              idChat: localStorage.id,
              idMessage: id,
              previousPinId: oldId
            })
          }).then(r => r.json()).then(r => {
            if (r.Status) {
              const text = msg.querySelector(".messages__message-text");
              pinCon.innerHTML = `
           <div class="pinned-message" data-id="${msg.dataset.id}">Pinned message</div>
            <div class="pinned-message-text">
              ${text.innerText}
            </div>
            <div class="unpin">✖</div>
          `;
              msg.dataset.pin = "true";
            }
          });
        }
      }
    }
    if (e.target.classList.contains("unpin")) {
      const pinCon = e.target.closest(".pin-message");
      pinCon.innerHTML = "";
      pinCon.classList.add("none");
      const pinnedMsg = document.querySelector("[data-pin=true]");
      const {
        id
      } = pinnedMsg.dataset;
      fetch("http://localhost:7070/api/remove-pin", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify({
          idChat: localStorage.id,
          idMessage: id
        })
      });
    }

    // Скачаивание файла
    if (e.target.classList.contains("file") || e.target.classList.contains("file-desc-name") || e.target.classList.contains("file-icon")) {
      const msg = e.target.closest(".messages__message-file");
      const elWithUrl = msg.querySelector(".file-desc-name");
      const url = document.createElement("a");
      url.href = `http://localhost:7070/${elWithUrl.innerText}`;
      url.download = `${elWithUrl.innerText}`;
      url.target = "_blank";
      document.body.append(url);
      url.click();
      url.remove();
    }
    if (e.target.classList.contains("input__voice")) {
      const test = document.querySelector(".audio-btn-block");
      const testTwo = document.querySelector(".video-btn-block");
      if (test || testTwo) {
        modal.showTextModal("Уже ведётся запись");
        return;
      }
      if (navigator.mediaDevices) {
        try {
          const inputCon = e.target.closest(".input");
          const firstBtn = inputCon.querySelector(".input__smile");
          const secondBtn = inputCon.querySelector(".input__voice");
          firstBtn.classList.add("none");
          secondBtn.classList.add("none");
          inputCon.insertAdjacentHTML("beforeend", `
        <div class="audio-btn-block">
          <div class="audio-done">✔</div>
          <div class="audio-time"><span class="audio-minutes">00</span>:<span class="audio-seconds">00</span></div>
          <div class="audio-cancel">✖</div>
        </div>
        `);
          const minutes = document.querySelector(".audio-minutes");
          const seconds = document.querySelector(".audio-seconds");
          const timeInterval = setInterval(() => {
            seconds.innerText = Number(seconds.innerText) + 1;
            if (seconds.innerText.length === 1) {
              seconds.innerText = "0" + seconds.innerText;
            }
            if (seconds.innerText === "60") {
              seconds.innerText = "00";
              minutes.innerText = Number(minutes.innerText) + 1;
              if (minutes.innerText.length === 1) {
                minutes.innerText = "0" + minutes.innerText;
              }
            }
          }, 1000);
          const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: false
          });
          const recorder = new MediaRecorder(stream);
          const chunks = [];
          let done = false;
          recorder.addEventListener("dataavailable", e => {
            chunks.push(e.data);
          });
          recorder.addEventListener("stop", () => {
            if (done) {
              const file = new File(chunks, "audio.mp3");
              const data = new FormData();
              data.append("file", file);
              data.append("type", "audio");
              data.append("chatId", localStorage.id);
              fetch("http://localhost:7070/api/add-file", {
                method: "POST",
                body: data
              }).then(r => r.json()).then(r => {
                if (r.Status) {
                  const messageCon = document.querySelector(".messages__container");
                  messageCon.insertAdjacentHTML("beforeend", `
            <div class="messege messages__message-audio user" data-id="${r.idMessage}">
              <audio
                class="messages__message-audio-aud"
                src="http://localhost:7070/${r.idMessage}.${r.extension}"
                controls
              ></audio>
              <div class="messages__message-time-audio">${r.time}</div>
            </div>
      `);
                }
              });
            }
          });
          recorder.start();
          const audioDone = document.querySelector(".audio-done");
          const audioCancel = document.querySelector(".audio-cancel");
          audioCancel.addEventListener("click", e => {
            recorder.stop();
            stream.getTracks().forEach(track => track.stop());
            e.target.closest(".audio-btn-block").remove();
            firstBtn.classList.remove("none");
            secondBtn.classList.remove("none");
            clearInterval(timeInterval);
          });
          audioDone.addEventListener("click", e => {
            done = true;
            recorder.stop();
            stream.getTracks().forEach(track => track.stop());
            e.target.closest(".audio-btn-block").remove();
            firstBtn.classList.remove("none");
            secondBtn.classList.remove("none");
            clearInterval(timeInterval);
          });
        } catch (e) {
          modal.showTextModal("Необходимо включить микрофон");
        }
      } else {
        modal.showTextModal("Ваш браузер не поддерживает запись аудио и видео");
        return;
      }
    }
    if (e.target.classList.contains("video-message")) {
      const test = document.querySelector(".audio-btn-block");
      const testTwo = document.querySelector(".video-btn-block");
      if (test || testTwo) {
        modal.showTextModal("Уже ведётся запись");
        return;
      }
      if (navigator.mediaDevices) {
        try {
          const inputCon = e.target.closest(".input");
          const firstBtn = inputCon.querySelector(".input__smile");
          const secondBtn = inputCon.querySelector(".input__voice");
          firstBtn.classList.add("none");
          secondBtn.classList.add("none");
          inputCon.insertAdjacentHTML("beforeend", `
            <div class="video-btn-block">
              <div class="video-done">✔</div>
              <div class="video-time"><span class="video-minutes">00</span>:<span class="video-seconds">00</span></div>
              <div class="video-cancel">✖</div>
            </div>
            `);
          const minutes = document.querySelector(".video-minutes");
          const seconds = document.querySelector(".video-seconds");
          const timeInterval = setInterval(() => {
            seconds.innerText = Number(seconds.innerText) + 1;
            if (seconds.innerText.length === 1) {
              seconds.innerText = "0" + seconds.innerText;
            }
            if (seconds.innerText === "60") {
              seconds.innerText = "00";
              minutes.innerText = Number(minutes.innerText) + 1;
              if (minutes.innerText.length === 1) {
                minutes.innerText = "0" + minutes.innerText;
              }
            }
          }, 1000);
          const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
          });
          const recorder = new MediaRecorder(stream);
          const chunks = [];
          let done = false;
          recorder.addEventListener("dataavailable", e => {
            chunks.push(e.data);
          });
          recorder.addEventListener("stop", () => {
            if (done) {
              const file = new File(chunks, "video.mp4");
              const data = new FormData();
              data.append("file", file);
              data.append("type", "video");
              data.append("chatId", localStorage.id);
              fetch("http://localhost:7070/api/add-file", {
                method: "POST",
                body: data
              }).then(r => r.json()).then(r => {
                if (r.Status) {
                  const messageCon = document.querySelector(".messages__container");
                  messageCon.insertAdjacentHTML("beforeend", `
                      <div class="messege messages__message-audio user" data-id="${r.idMessage}">
                        <audio
                          class="messages__message-audio-aud"
                          src="http://localhost:7070/${r.idMessage}.${r.extension}"
                          controls
                        ></audio>
                        <div class="messages__message-time-audio">${r.time}</div>
                      </div>
                      `);
                }
              });
            }
          });
          recorder.start();
          const audioDone = document.querySelector(".video-done");
          const audioCancel = document.querySelector(".video-cancel");
          audioCancel.addEventListener("click", e => {
            recorder.stop();
            stream.getTracks().forEach(track => track.stop());
            e.target.closest(".video-btn-block").remove();
            firstBtn.classList.remove("none");
            secondBtn.classList.remove("none");
            clearInterval(timeInterval);
          });
          audioDone.addEventListener("click", e => {
            done = true;
            recorder.stop();
            stream.getTracks().forEach(track => track.stop());
            e.target.closest(".video-btn-block").remove();
            firstBtn.classList.remove("none");
            secondBtn.classList.remove("none");
            clearInterval(timeInterval);
          });
        } catch (e) {
          modal.showTextModal("Необходимо включить микрофон и камеру");
        }
      } else {
        modal.showTextModal("Ваш браузер не поддерживает запись аудио и видео");
        return;
      }
    }
    if (e.target.classList.contains("geo")) {
      if (navigator.geolocation) {
        e.target.closest(".modal-more").classList.add("none");
        navigator.geolocation.getCurrentPosition(data => {
          const {
            latitude,
            longitude
          } = data.coords;
          const formattedCoords = `[${latitude}, ${longitude}]`;
          fetch("http://localhost:7070/api/add-text-message", {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify({
              id: localStorage.id,
              star: false,
              crypto: false,
              body: formattedCoords,
              pinned: false
            })
          }).then(r => r.json()).then(r => {
            if (r.Status) {
              const messagesContainer = document.querySelector(".messages__container");
              messagesContainer.insertAdjacentHTML("beforeend", `
                <div class="messege messages__message user" data-id="${r.id}" data-pin="false" data-star="false">
                  <p class="messages__message-text">
                    ${formattedCoords}
                  </p>
                  <div class="messages__message-time">${r.time}</div>
                  <div class="star">
                    <img src="http://localhost:7070/star-unclicked.png" alt="" class="star-unclicked"/>
                  </div>
                  <div class="pin">📌</div>
                </div>
                `);
            }
          });
        }, () => {
          modal.showModalOnErrorGeo();
          // todo
          const cancel = document.querySelector(".cancel-geo");
          cancel.addEventListener("click", e => {
            e.target.closest(".modal-geo").remove();
          });
          const okButton = document.querySelector(".ok-geo");
          okButton.addEventListener("click", e => {
            const modal = e.target.closest(".modal-geo");
            const coordsInput = modal.querySelector(".coords-input");
            const coordsInputValue = coordsInput.value;
            const testCaseOne = /^-?\d+\.\d+, ?-?\d+\.\d+$/gm.test(coordsInputValue);
            const testCaseTwo = /^\[-?\d+\.\d+, ?-?\d+\.\d+\]$/gm.test(coordsInputValue);
            if (testCaseOne || testCaseTwo) {
              modal.remove();
              fetch("http://localhost:7070/api/add-text-message", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json;charset=utf-8"
                },
                body: JSON.stringify({
                  id: localStorage.id,
                  star: false,
                  crypto: false,
                  body: coordsInputValue,
                  pinned: false
                })
              }).then(r => r.json()).then(r => {
                if (r.Status) {
                  const messagesContainer = document.querySelector(".messages__container");
                  messagesContainer.innerHTML = "";
                  messagesContainer.insertAdjacentHTML("beforeend", `
                        <div class="messege messages__message user" data-id="${r.id}" data-pin="false" data-star="false">
                          <p class="messages__message-text">
                            ${coordsInputValue}
                          </p>
                          <div class="messages__message-time">${r.time}</div>
                          <div class="star">
                            <img src="http://localhost:7070/star-unclicked.png" alt="" class="star-unclicked"/>
                          </div>
                          <div class="pin">📌</div>
                        </div>
                        `);
                }
              });
            } else {
              coordsInput.value = "Введите верные координаты";
              coordsInput.setAttribute("disabled", true);
              setTimeout(() => {
                coordsInput.value = "";
                coordsInput.removeAttribute("disabled");
              }, 1000);
            }
          });
        });
      }
    }
    if (e.target.classList.contains("import")) {
      e.target.closest(".modal-more").classList.add("none");
      modal.showImportModal();
    }
    if (e.target.classList.contains("cancel-import")) {
      e.target.closest(".modal-import").remove();
    }
    if (e.target.classList.contains("ok-import")) {
      const modal = e.target.closest(".modal-import");
      const modalInput = modal.querySelector(".import-input");
      modal.remove();
      fetch(`http://localhost:7070/api/import/${modalInput.value}/null`).then(r => r.json()).then(r => {
        if (!r.status) {
          this.parentEl.insertAdjacentHTML("afterbegin", `
            <div class="modal-upper">
              <div class="modal-upper-text">Чат не найден</div>
              <div class="modal-upper-close">✖</div>
            </div>
            `);
          return;
        }
        const messageContainer = document.querySelector(".messages__container");
        messageContainer.innerHTML = "";
        if (r.pinId) {
          const pinMessage = document.querySelector(".pin-message");
          pinMessage.classList.remove("none");
          pinMessage.insertAdjacentHTML("afterbegin", `
              <div class="pinned-message" data-id="${r.pinId}">Pinned message</div>
              <div class="pinned-message-text">
                ${r.pinBody}
              </div>
              <div class="unpin">✖</div>
              `);
        }
        r.messages.forEach(msg => {
          switch (msg.type) {
            case "text":
              {
                let clicked;
                if (msg.star) {
                  clicked = "clicked";
                } else {
                  clicked = "unclicked";
                }
                const result = searchLink(msg.body);
                messageContainer.insertAdjacentHTML("beforeend", `
                   <div class="messege messages__message user" data-id="${msg.id}" data-pin="${msg.pinned}" data-star="${msg.star}">
                      <p class="messages__message-text">
                        ${result}
                      </p>
                      <div class="messages__message-time">${msg.time}</div>
                      <div class="star">
                        <img src="http://localhost:7070/star-${clicked}.png" alt="" class="star-${clicked}"/>
                      </div>
                      <div class="pin">📌</div>
                    </div>
                  `);
                return;
              }
            case "image":
              {
                messageContainer.insertAdjacentHTML("beforeend", `
                  <div class="messege messages__message-img user" data-id="${msg.id}">
                    <div class="messages__message-time-img">${msg.time}</div>

                    <img
                      src="http://localhost:7070/${msg.body}"
                      alt=""
                      class="messages__message-image"
                    />
                  </div>
                  `);
                return;
              }
            case "video":
              {
                messageContainer.insertAdjacentHTML("beforeend", `
                  <div class="messege messages__message-video user" data-id="${msg.id}">
                    <video src="http://localhost:7070/${msg.body}" controls></video>
                    <div class="messages__message-time-video">${msg.time}</div>
                  </div>
                  `);
                return;
              }
            case "audio":
              {
                messageContainer.insertAdjacentHTML("beforeend", `
                  <div class="messege messages__message-audio user" data-id="${msg.id}">
                    <audio
                      class="messages__message-audio-aud"
                      src="http://localhost:7070/${msg.body}"
                      controls
                    ></audio>
                    <div class="messages__message-time-audio">${msg.time}</div>
                  </div>
                  `);
                return;
              }
            case "file":
              {
                messageContainer.insertAdjacentHTML("beforeend", `
                  <div class="messege messages__message-file user" data-id="${msg.id}">
                    <div class="file">
                      <img src="http://localhost:7070/file.png" alt="" class="file-icon" />
                      <div class="file-desc">
                        <div class="file-desc-name">${msg.body}</div>
                      </div>
                    </div>
                    <div class="messages__message-time-file">${msg.time}</div>
                  </div>
                  `);
                return;
              }
          }
        });
      });
    }
    if (e.target.classList.contains("favorites")) {
      fetch(`http://localhost:7070/api/${localStorage.id}/all-star`).then(r => r.json()).then(r => {
        const messageContainer = document.querySelector(".messages__container");
        messageContainer.innerHTML = "";
        r.forEach(msg => {
          let clicked;
          if (msg.star) {
            clicked = "clicked";
          } else {
            clicked = "unclicked";
          }
          const result = searchLink(msg.body);
          messageContainer.insertAdjacentHTML("beforeend", `
                   <div class="messege messages__message user" data-id="${msg.id}" data-pin="${msg.pinned}" data-star="${msg.star}">
                      <p class="messages__message-text">
                        ${result}
                      </p>
                      <div class="messages__message-time">${msg.time}</div>
                      <div class="star">
                        <img src="http://localhost:7070/star-${clicked}.png" alt="" class="star-${clicked}"/>
                      </div>
                      <div class="pin">📌</div>
                    </div>
                  `);
        });
      });
    }
    if (e.target.classList.contains("audio-message")) {
      fetch(`http://localhost:7070/api/${localStorage.id}/all-audio`).then(r => r.json()).then(r => {
        e.target.closest(".modal-more").classList.add("none");
        const messageContainer = document.querySelector(".messages__container");
        messageContainer.innerHTML = "";
        r.forEach(msg => {
          messageContainer.insertAdjacentHTML("beforeend", `
                  <div class="messege messages__message-audio user" data-id="${msg.id}">
                    <audio
                      class="messages__message-audio-aud"
                      src="http://localhost:7070/${msg.body}"
                      controls
                    ></audio>
                    <div class="messages__message-time-audio">${msg.time}</div>
                  </div>
                  `);
        });
      });
    }
    if (e.target.classList.contains("video-message")) {
      fetch(`http://localhost:7070/api/${localStorage.id}/all-video`).then(r => r.json()).then(r => {
        e.target.closest(".modal-more").classList.add("none");
        const messageContainer = document.querySelector(".messages__container");
        messageContainer.innerHTML = "";
        r.forEach(msg => {
          messageContainer.insertAdjacentHTML("beforeend", `
                  <div class="messege messages__message-video user" data-id="${msg.id}">
                    <video src="http://localhost:7070/${msg.body}" controls></video>
                    <div class="messages__message-time-video">${msg.time}</div>
                  </div>
                  `);
        });
      });
    }
    if (e.target.classList.contains("image-message")) {
      fetch(`http://localhost:7070/api/${localStorage.id}/all-images`).then(r => r.json()).then(r => {
        e.target.closest(".modal-more").classList.add("none");
        const messageContainer = document.querySelector(".messages__container");
        messageContainer.innerHTML = "";
        r.forEach(msg => {
          messageContainer.insertAdjacentHTML("beforeend", `
                  <div class="messege messages__message-img user" data-id="${msg.id}">
                    <div class="messages__message-time-img">${msg.time}</div>

                    <img
                      src="http://localhost:7070/${msg.body}"
                      alt=""
                      class="messages__message-image"
                    />
                  </div>
                  `);
        });
      });
    }
    if (e.target.classList.contains("file-message")) {
      fetch(`http://localhost:7070/api/${localStorage.id}/all-files`).then(r => r.json()).then(r => {
        e.target.closest(".modal-more").classList.add("none");
        const messageContainer = document.querySelector(".messages__container");
        messageContainer.innerHTML = "";
        r.forEach(msg => {
          messageContainer.insertAdjacentHTML("beforeend", `
                  <div class="messege messages__message-file user" data-id="${msg.id}">
                    <div class="file">
                      <img src="http://localhost:7070/file.png" alt="" class="file-icon" />
                      <div class="file-desc">
                        <div class="file-desc-name">${msg.body}</div>
                      </div>
                    </div>
                    <div class="messages__message-time-file">${msg.time}</div>
                  </div>
                  `);
        });
      });
    }
    if (e.target.classList.contains("input__smile")) {
      document.querySelector(".smiles").classList.toggle("none");
    }
    if (e.target.classList.contains("emoji")) {
      const mainInput = document.querySelector(".input__input");
      mainInput.value = mainInput.value + e.target.innerText;
    }
  }
  onKeyDownInMainInput(e) {
    if (e.code === "Enter") {
      if (e.target.value === "") {
        modal.showTextModal("Нельзя отправить пустое сообщение");
      } else {
        fetch("http://localhost:7070/api/add-text-message", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8"
          },
          body: JSON.stringify({
            id: localStorage.id,
            star: false,
            crypto: false,
            body: e.target.value,
            pinned: false
          })
        }).then(r => r.json()).then(r => {
          if (r.Status) {
            const result = searchLink(e.target.value);
            const messagesContainer = document.querySelector(".messages__container");
            messagesContainer.insertAdjacentHTML("beforeend", `
                <div class="messege messages__message user" data-id="${r.id}" data-pin="false" data-star="false">
                  <p class="messages__message-text">
                    ${result}
                  </p>
                  <div class="messages__message-time">${r.time}</div>
                  <div class="star">
                    <img src="http://localhost:7070/star-unclicked.png" alt="" class="star-unclicked"/>
                  </div>
                  <div class="pin">📌</div>
                </div>
                `);
            e.target.value = "";
          }
        });
      }
    }
  }
  fileReader(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.addEventListener("load", e => {
        resolve(e.target.result);
      });
      fileReader.addEventListener("error", e => {
        reject(e.target.error);
      });
      fileReader.readAsDataURL(file);
    });
  }
  async onFileChange(e) {
    const fileType = e.target.files[0].type;
    if (fileType.startsWith("video")) {
      const formDate = new FormData();
      formDate.append("file", e.target.files[0]);
      formDate.append("chatId", localStorage.id);
      formDate.append("type", "video");
      fetch("http://localhost:7070/api/add-file", {
        method: "POST",
        body: formDate
      }).then(r => r.json()).then(r => {
        if (r.Status) {
          const messageCon = document.querySelector(".messages__container");
          messageCon.insertAdjacentHTML("beforeend", `
            <div class="messege messages__message-video user" data-id="${r.idMessage}">
            <video src="http://localhost:7070/${r.idMessage}.${r.extension}" controls></video>
            <div class="messages__message-time-video">${r.time}</div>
          </div>
      `);
        }
      });
    }
    if (fileType.startsWith("audio")) {
      const formDate = new FormData();
      formDate.append("file", e.target.files[0]);
      formDate.append("chatId", localStorage.id);
      formDate.append("type", "audio");
      fetch("http://localhost:7070/api/add-file", {
        method: "POST",
        body: formDate
      }).then(r => r.json()).then(r => {
        if (r.Status) {
          const messageCon = document.querySelector(".messages__container");
          messageCon.insertAdjacentHTML("beforeend", `
            <div class="messege messages__message-audio user" data-id="${r.idMessage}">
              <audio
                class="messages__message-audio-aud"
                src="http://localhost:7070/${r.idMessage}.${r.extension}"
                controls
              ></audio>
              <div class="messages__message-time-audio">${r.time}</div>
            </div>
      `);
        }
      });
    }
    if (fileType.startsWith("image")) {
      const formDate = new FormData();
      formDate.append("file", e.target.files[0]);
      formDate.append("chatId", localStorage.id);
      formDate.append("type", "image");
      fetch("http://localhost:7070/api/add-file", {
        method: "POST",
        body: formDate
      }).then(r => r.json()).then(r => {
        if (r.Status) {
          const messageCon = document.querySelector(".messages__container");
          messageCon.insertAdjacentHTML("beforeend", `
            <div class="messege messages__message-img user" data-id="${r.idMessage}">
              <div class="messages__message-time-img">${r.time}</div>

              <img
                src="http://localhost:7070/${r.idMessage}.${r.extension}"
                alt=""
                class="messages__message-image"
              />
            </div>
      `);
        }
      });
    }
    if (fileType === "") {
      const formDate = new FormData();
      formDate.append("file", e.target.files[0]);
      formDate.append("chatId", localStorage.id);
      formDate.append("type", "file");
      fetch("http://localhost:7070/api/add-file", {
        method: "POST",
        body: formDate
      }).then(r => r.json()).then(r => {
        if (r.Status) {
          const messageCon = document.querySelector(".messages__container");
          messageCon.insertAdjacentHTML("beforeend", `
            <div class="messege messages__message-file user" data-id="${r.id}">
            <div class="file">
              <img src="http://localhost:7070/file.png" alt="" class="file-icon" />
              <div class="file-desc">
                <div class="file-desc-name">${r.idMessage}</div>
              </div>
            </div>
            <div class="messages__message-time-file">${r.time}</div>
          </div>
      `);
        }
      });
    }
    e.target.value = "";
  }
}
;// ./src/js/app.js




const chaosOrganizer = new ChaosOrganizer(document.body);
chaosOrganizer.bindToDOM();
function render() {
  const firstEl = document.querySelector(".messege");
  const firstElCoords = firstEl.getBoundingClientRect();
  if (firstElCoords.y < 0) {
    return;
  }
  const messegeId = firstEl.dataset.id;
  fetch(`http://localhost:7070/api/import/${localStorage.id}/${messegeId}`).then(r => r.json()).then(r => {
    r.messages.forEach(msg => {
      switch (msg.type) {
        case "text":
          {
            let clicked;
            if (msg.star) {
              clicked = "clicked";
            } else {
              clicked = "unclicked";
            }
            const result = searchLink(msg.body);
            firstEl.insertAdjacentHTML("beforebegin", `
                   <div class="messege messages__message user" data-id="${msg.id}" data-pin="${msg.pinned}" data-star="${msg.star}">
                      <p class="messages__message-text">
                        ${result}
                      </p>
                      <div class="messages__message-time">${msg.time}</div>
                      <div class="star">
                        <img src="http://localhost:7070/star-${clicked}.png" alt="" class="star-${clicked}"/>
                      </div>
                      <div class="pin">📌</div>
                    </div>
                  `);
            return;
          }
        case "image":
          {
            firstEl.insertAdjacentHTML("beforebegin", `
                  <div class="messege messages__message-img user" data-id="${msg.id}">
                    <div class="messages__message-time-img">${msg.time}</div>

                    <img
                      src="http://localhost:7070/${msg.body}"
                      alt=""
                      class="messages__message-image"
                    />
                  </div>
                  `);
            return;
          }
        case "video":
          {
            firstEl.insertAdjacentHTML("beforebegin", `
                  <div class="messege messages__message-video user" data-id="${msg.id}">
                    <video src="http://localhost:7070/${msg.body}" controls></video>
                    <div class="messages__message-time-video">${msg.time}</div>
                  </div>
                  `);
            return;
          }
        case "audio":
          {
            firstEl.insertAdjacentHTML("beforebegin", `
                  <div class="messege messages__message-audio user" data-id="${msg.id}">
                    <audio
                      class="messages__message-audio-aud"
                      src="http://localhost:7070/${msg.body}"
                      controls
                    ></audio>
                    <div class="messages__message-time-audio">${msg.time}</div>
                  </div>
                  `);
            return;
          }
        case "file":
          {
            firstEl.insertAdjacentHTML("beforebegin", `
                  <div class="messege messages__message-file user" data-id="${msg.id}">
                    <div class="file">
                      <img src="http://localhost:7070/file.png" alt="" class="file-icon" />
                      <div class="file-desc">
                        <div class="file-desc-name">${msg.body}</div>
                      </div>
                    </div>
                    <div class="messages__message-time-file">${msg.time}</div>
                  </div>
                  `);
            return;
          }
      }
    });
  });
}
function renderSearched(r) {
  if (r === "") {
    const currId = localStorage.getItem("id");
    if (currId) {
      fetch(`http://localhost:7070/api/import/${currId}/null`).then(r => r.json()).then(r => {
        const messageContainer = document.querySelector(".messages__container");
        messageContainer.innerHTML = "";
        r.messages.forEach(msg => {
          switch (msg.type) {
            case "text":
              {
                let clicked;
                if (msg.star) {
                  clicked = "clicked";
                } else {
                  clicked = "unclicked";
                }
                const result = searchLink(msg.body);
                messageContainer.insertAdjacentHTML("beforeend", `
                   <div class="messege messages__message user" data-id="${msg.id}" data-pin="${msg.pinned}" data-star="${msg.star}">
                      <p class="messages__message-text">
                        ${result}
                      </p>
                      <div class="messages__message-time">${msg.time}</div>
                      <div class="star">
                        <img src="http://localhost:7070/star-${clicked}.png" alt="" class="star-${clicked}"/>
                      </div>
                      <div class="pin">📌</div>
                    </div>
                  `);
                return;
              }
            case "image":
              {
                messageContainer.insertAdjacentHTML("beforeend", `
                  <div class="messege messages__message-img user" data-id="${msg.id}">
                    <div class="messages__message-time-img">${msg.time}</div>

                    <img
                      src="http://localhost:7070/${msg.body}"
                      alt=""
                      class="messages__message-image"
                    />
                  </div>
                  `);
                return;
              }
            case "video":
              {
                messageContainer.insertAdjacentHTML("beforeend", `
                  <div class="messege messages__message-video user" data-id="${msg.id}">
                    <video src="http://localhost:7070/${msg.body}" controls></video>
                    <div class="messages__message-time-video">${msg.time}</div>
                  </div>
                  `);
                return;
              }
            case "audio":
              {
                messageContainer.insertAdjacentHTML("beforeend", `
                  <div class="messege messages__message-audio user" data-id="${msg.id}">
                    <audio
                      class="messages__message-audio-aud"
                      src="http://localhost:7070/${msg.body}"
                      controls
                    ></audio>
                    <div class="messages__message-time-audio">${msg.time}</div>
                  </div>
                  `);
                return;
              }
            case "file":
              {
                messageContainer.insertAdjacentHTML("beforeend", `
                  <div class="messege messages__message-file user" data-id="${msg.id}">
                    <div class="file">
                      <img src="http://localhost:7070/file.png" alt="" class="file-icon" />
                      <div class="file-desc">
                        <div class="file-desc-name">${msg.body}</div>
                      </div>
                    </div>
                    <div class="messages__message-time-file">${msg.time}</div>
                  </div>
                  `);
                return;
              }
          }
        });
      });
    }
  } else {
    fetch(`http://localhost:7070/api/search-messages/${localStorage.id}/${r}`).then(r => r.json()).then(r => {
      const messageContainer = document.querySelector(".messages__container");
      messageContainer.innerHTML = "";
      r.forEach(msg => {
        let clicked;
        if (msg.star) {
          clicked = "clicked";
        } else {
          clicked = "unclicked";
        }
        const result = searchLink(msg.body);
        messageContainer.insertAdjacentHTML("beforeend", `
                   <div class="messege messages__message user" data-id="${msg.id}" data-pin="${msg.pinned}" data-star="${msg.star}">
                      <p class="messages__message-text">
                        ${result}
                      </p>
                      <div class="messages__message-time">${msg.time}</div>
                      <div class="star">
                        <img src="http://localhost:7070/star-${clicked}.png" alt="" class="star-${clicked}"/>
                      </div>
                      <div class="pin">📌</div>
                    </div>
                  `);
        return;
      });
    });
  }
}
fromEvent(document.querySelector(".messages"), "scroll").pipe(debounceTime(200), map(e => e.target)).subscribe(r => render(r));
fromEvent(document.querySelector(".search-message"), "input").pipe(debounceTime(400), map(e => e.target.value), distinctUntilChanged()).subscribe(r => renderSearched(r));
;// ./src/index.js


/******/ })()
;