import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, J as src_url_equal, b as insert_hydration, H as append_hydration, u as set_data, C as noop, K as handle_promise, L as update_await_block_branch, f as transition_in, t as transition_out, x as create_component, y as claim_component, z as mount_component, A as destroy_component, v as binding_callbacks, M as bind$1, N as set_input_value, O as listen, P as to_number, Q as add_flush_callback, e as empty, g as group_outros, d as check_outros } from "../../chunks/index-e7fa54cd.js";
import { c as commonjsGlobal, V as VirtualScroll, l as lodash_debounce } from "../../chunks/VirtualScroll-b6cbfc97.js";
var dist = {};
var tslibExports = {};
var tslib = {
  get exports() {
    return tslibExports;
  },
  set exports(v) {
    tslibExports = v;
  }
};
(function(module) {
  var __extends;
  var __assign;
  var __rest;
  var __decorate;
  var __param;
  var __esDecorate;
  var __runInitializers;
  var __propKey;
  var __setFunctionName;
  var __metadata;
  var __awaiter;
  var __generator;
  var __exportStar;
  var __values;
  var __read;
  var __spread;
  var __spreadArrays;
  var __spreadArray;
  var __await;
  var __asyncGenerator;
  var __asyncDelegator;
  var __asyncValues;
  var __makeTemplateObject;
  var __importStar;
  var __importDefault;
  var __classPrivateFieldGet;
  var __classPrivateFieldSet;
  var __classPrivateFieldIn;
  var __createBinding;
  (function(factory) {
    var root = typeof commonjsGlobal === "object" ? commonjsGlobal : typeof self === "object" ? self : typeof this === "object" ? this : {};
    {
      factory(createExporter(root, createExporter(module.exports)));
    }
    function createExporter(exports, previous) {
      if (exports !== root) {
        if (typeof Object.create === "function") {
          Object.defineProperty(exports, "__esModule", { value: true });
        } else {
          exports.__esModule = true;
        }
      }
      return function(id, v) {
        return exports[id] = previous ? previous(id, v) : v;
      };
    }
  })(function(exporter) {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
      d.__proto__ = b;
    } || function(d, b) {
      for (var p in b)
        if (Object.prototype.hasOwnProperty.call(b, p))
          d[p] = b[p];
    };
    __extends = function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    __rest = function(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    __decorate = function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
      else
        for (var i = decorators.length - 1; i >= 0; i--)
          if (d = decorators[i])
            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    __param = function(paramIndex, decorator) {
      return function(target, key) {
        decorator(target, key, paramIndex);
      };
    };
    __esDecorate = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
      function accept(f) {
        if (f !== void 0 && typeof f !== "function")
          throw new TypeError("Function expected");
        return f;
      }
      var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
      var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
      var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
      var _, done = false;
      for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn)
          context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access)
          context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
          if (done)
            throw new TypeError("Cannot add initializers after decoration has completed");
          extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
          if (result === void 0)
            continue;
          if (result === null || typeof result !== "object")
            throw new TypeError("Object expected");
          if (_ = accept(result.get))
            descriptor.get = _;
          if (_ = accept(result.set))
            descriptor.set = _;
          if (_ = accept(result.init))
            initializers.push(_);
        } else if (_ = accept(result)) {
          if (kind === "field")
            initializers.push(_);
          else
            descriptor[key] = _;
        }
      }
      if (target)
        Object.defineProperty(target, contextIn.name, descriptor);
      done = true;
    };
    __runInitializers = function(thisArg, initializers, value) {
      var useValue = arguments.length > 2;
      for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
      }
      return useValue ? value : void 0;
    };
    __propKey = function(x) {
      return typeof x === "symbol" ? x : "".concat(x);
    };
    __setFunctionName = function(f, name2, prefix) {
      if (typeof name2 === "symbol")
        name2 = name2.description ? "[".concat(name2.description, "]") : "";
      return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name2) : name2 });
    };
    __metadata = function(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
    };
    __awaiter = function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    __generator = function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    __exportStar = function(m, o) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
          __createBinding(o, m, p);
    };
    __createBinding = Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    };
    __values = function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    __read = function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    __spread = function() {
      for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
      return ar;
    };
    __spreadArrays = function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++)
        s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
      return r;
    };
    __spreadArray = function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    __await = function(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    };
    __asyncGenerator = function(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i;
      function verb(n) {
        if (g[n])
          i[n] = function(v) {
            return new Promise(function(a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle2(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle2(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle2(f, v) {
        if (f(v), q.shift(), q.length)
          resume(q[0][0], q[0][1]);
      }
    };
    __asyncDelegator = function(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function() {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function(v) {
          return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
        } : f;
      }
    };
    __asyncValues = function(o) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator], i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function(v) {
          return new Promise(function(resolve, reject) {
            v = o[n](v), settle2(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle2(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v2) {
          resolve({ value: v2, done: d });
        }, reject);
      }
    };
    __makeTemplateObject = function(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    };
    var __setModuleDefault = Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    };
    __importStar = function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    __importDefault = function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    __classPrivateFieldGet = function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    __classPrivateFieldSet = function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    __classPrivateFieldIn = function(state, receiver) {
      if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
        throw new TypeError("Cannot use 'in' operator on non-object");
      return typeof state === "function" ? receiver === state : state.has(receiver);
    };
    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__esDecorate", __esDecorate);
    exporter("__runInitializers", __runInitializers);
    exporter("__propKey", __propKey);
    exporter("__setFunctionName", __setFunctionName);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    exporter("__classPrivateFieldIn", __classPrivateFieldIn);
  });
})(tslib);
var models = {};
var Berry = {};
var berry = {};
var hasRequiredBerry$1;
function requireBerry$1() {
  if (hasRequiredBerry$1)
    return berry;
  hasRequiredBerry$1 = 1;
  Object.defineProperty(berry, "__esModule", { value: true });
  return berry;
}
var hasRequiredBerry;
function requireBerry() {
  if (hasRequiredBerry)
    return Berry;
  hasRequiredBerry = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = tslibExports;
    tslib_1.__exportStar(requireBerry$1(), exports);
  })(Berry);
  return Berry;
}
var Common = {};
var resource = {};
var hasRequiredResource;
function requireResource() {
  if (hasRequiredResource)
    return resource;
  hasRequiredResource = 1;
  Object.defineProperty(resource, "__esModule", { value: true });
  return resource;
}
var language = {};
var hasRequiredLanguage;
function requireLanguage() {
  if (hasRequiredLanguage)
    return language;
  hasRequiredLanguage = 1;
  Object.defineProperty(language, "__esModule", { value: true });
  return language;
}
var name = {};
var hasRequiredName;
function requireName() {
  if (hasRequiredName)
    return name;
  hasRequiredName = 1;
  Object.defineProperty(name, "__esModule", { value: true });
  return name;
}
var description = {};
var hasRequiredDescription;
function requireDescription() {
  if (hasRequiredDescription)
    return description;
  hasRequiredDescription = 1;
  Object.defineProperty(description, "__esModule", { value: true });
  return description;
}
var effect = {};
var hasRequiredEffect;
function requireEffect() {
  if (hasRequiredEffect)
    return effect;
  hasRequiredEffect = 1;
  Object.defineProperty(effect, "__esModule", { value: true });
  return effect;
}
var encounter$2 = {};
var hasRequiredEncounter$3;
function requireEncounter$3() {
  if (hasRequiredEncounter$3)
    return encounter$2;
  hasRequiredEncounter$3 = 1;
  Object.defineProperty(encounter$2, "__esModule", { value: true });
  return encounter$2;
}
var flavorText = {};
var hasRequiredFlavorText;
function requireFlavorText() {
  if (hasRequiredFlavorText)
    return flavorText;
  hasRequiredFlavorText = 1;
  Object.defineProperty(flavorText, "__esModule", { value: true });
  return flavorText;
}
var generation$1 = {};
var hasRequiredGeneration$1;
function requireGeneration$1() {
  if (hasRequiredGeneration$1)
    return generation$1;
  hasRequiredGeneration$1 = 1;
  Object.defineProperty(generation$1, "__esModule", { value: true });
  return generation$1;
}
var machine$1 = {};
var hasRequiredMachine$2;
function requireMachine$2() {
  if (hasRequiredMachine$2)
    return machine$1;
  hasRequiredMachine$2 = 1;
  Object.defineProperty(machine$1, "__esModule", { value: true });
  return machine$1;
}
var verbose = {};
var hasRequiredVerbose;
function requireVerbose() {
  if (hasRequiredVerbose)
    return verbose;
  hasRequiredVerbose = 1;
  Object.defineProperty(verbose, "__esModule", { value: true });
  return verbose;
}
var version$1 = {};
var hasRequiredVersion$1;
function requireVersion$1() {
  if (hasRequiredVersion$1)
    return version$1;
  hasRequiredVersion$1 = 1;
  Object.defineProperty(version$1, "__esModule", { value: true });
  return version$1;
}
var hasRequiredCommon;
function requireCommon() {
  if (hasRequiredCommon)
    return Common;
  hasRequiredCommon = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = tslibExports;
    tslib_1.__exportStar(requireResource(), exports);
    tslib_1.__exportStar(requireLanguage(), exports);
    tslib_1.__exportStar(requireName(), exports);
    tslib_1.__exportStar(requireDescription(), exports);
    tslib_1.__exportStar(requireEffect(), exports);
    tslib_1.__exportStar(requireEncounter$3(), exports);
    tslib_1.__exportStar(requireFlavorText(), exports);
    tslib_1.__exportStar(requireGeneration$1(), exports);
    tslib_1.__exportStar(requireMachine$2(), exports);
    tslib_1.__exportStar(requireVerbose(), exports);
    tslib_1.__exportStar(requireVersion$1(), exports);
  })(Common);
  return Common;
}
var Contest = {};
var contest = {};
var hasRequiredContest$1;
function requireContest$1() {
  if (hasRequiredContest$1)
    return contest;
  hasRequiredContest$1 = 1;
  Object.defineProperty(contest, "__esModule", { value: true });
  return contest;
}
var hasRequiredContest;
function requireContest() {
  if (hasRequiredContest)
    return Contest;
  hasRequiredContest = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = tslibExports;
    tslib_1.__exportStar(requireContest$1(), exports);
  })(Contest);
  return Contest;
}
var Encounter = {};
var encounter$1 = {};
var hasRequiredEncounter$2;
function requireEncounter$2() {
  if (hasRequiredEncounter$2)
    return encounter$1;
  hasRequiredEncounter$2 = 1;
  Object.defineProperty(encounter$1, "__esModule", { value: true });
  return encounter$1;
}
var hasRequiredEncounter$1;
function requireEncounter$1() {
  if (hasRequiredEncounter$1)
    return Encounter;
  hasRequiredEncounter$1 = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = tslibExports;
    tslib_1.__exportStar(requireEncounter$2(), exports);
  })(Encounter);
  return Encounter;
}
var Evolution = {};
var evolution = {};
var hasRequiredEvolution$1;
function requireEvolution$1() {
  if (hasRequiredEvolution$1)
    return evolution;
  hasRequiredEvolution$1 = 1;
  Object.defineProperty(evolution, "__esModule", { value: true });
  return evolution;
}
var hasRequiredEvolution;
function requireEvolution() {
  if (hasRequiredEvolution)
    return Evolution;
  hasRequiredEvolution = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = tslibExports;
    tslib_1.__exportStar(requireEvolution$1(), exports);
  })(Evolution);
  return Evolution;
}
var Game = {};
var generation = {};
var hasRequiredGeneration;
function requireGeneration() {
  if (hasRequiredGeneration)
    return generation;
  hasRequiredGeneration = 1;
  Object.defineProperty(generation, "__esModule", { value: true });
  return generation;
}
var pokedex = {};
var hasRequiredPokedex;
function requirePokedex() {
  if (hasRequiredPokedex)
    return pokedex;
  hasRequiredPokedex = 1;
  Object.defineProperty(pokedex, "__esModule", { value: true });
  return pokedex;
}
var pokemonEntry = {};
var hasRequiredPokemonEntry;
function requirePokemonEntry() {
  if (hasRequiredPokemonEntry)
    return pokemonEntry;
  hasRequiredPokemonEntry = 1;
  Object.defineProperty(pokemonEntry, "__esModule", { value: true });
  return pokemonEntry;
}
var version = {};
var hasRequiredVersion;
function requireVersion() {
  if (hasRequiredVersion)
    return version;
  hasRequiredVersion = 1;
  Object.defineProperty(version, "__esModule", { value: true });
  return version;
}
var hasRequiredGame;
function requireGame() {
  if (hasRequiredGame)
    return Game;
  hasRequiredGame = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = tslibExports;
    tslib_1.__exportStar(requireGeneration(), exports);
    tslib_1.__exportStar(requirePokedex(), exports);
    tslib_1.__exportStar(requirePokemonEntry(), exports);
    tslib_1.__exportStar(requireVersion(), exports);
  })(Game);
  return Game;
}
var Item = {};
var item = {};
var hasRequiredItem$1;
function requireItem$1() {
  if (hasRequiredItem$1)
    return item;
  hasRequiredItem$1 = 1;
  Object.defineProperty(item, "__esModule", { value: true });
  return item;
}
var hasRequiredItem;
function requireItem() {
  if (hasRequiredItem)
    return Item;
  hasRequiredItem = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = tslibExports;
    tslib_1.__exportStar(requireItem$1(), exports);
  })(Item);
  return Item;
}
var Location = {};
var encounter = {};
var hasRequiredEncounter;
function requireEncounter() {
  if (hasRequiredEncounter)
    return encounter;
  hasRequiredEncounter = 1;
  Object.defineProperty(encounter, "__esModule", { value: true });
  return encounter;
}
var location = {};
var hasRequiredLocation$1;
function requireLocation$1() {
  if (hasRequiredLocation$1)
    return location;
  hasRequiredLocation$1 = 1;
  Object.defineProperty(location, "__esModule", { value: true });
  return location;
}
var palpark = {};
var hasRequiredPalpark;
function requirePalpark() {
  if (hasRequiredPalpark)
    return palpark;
  hasRequiredPalpark = 1;
  Object.defineProperty(palpark, "__esModule", { value: true });
  return palpark;
}
var region = {};
var hasRequiredRegion;
function requireRegion() {
  if (hasRequiredRegion)
    return region;
  hasRequiredRegion = 1;
  Object.defineProperty(region, "__esModule", { value: true });
  return region;
}
var hasRequiredLocation;
function requireLocation() {
  if (hasRequiredLocation)
    return Location;
  hasRequiredLocation = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = tslibExports;
    tslib_1.__exportStar(requireEncounter(), exports);
    tslib_1.__exportStar(requireLocation$1(), exports);
    tslib_1.__exportStar(requirePalpark(), exports);
    tslib_1.__exportStar(requireRegion(), exports);
  })(Location);
  return Location;
}
var Machine = {};
var machine = {};
var hasRequiredMachine$1;
function requireMachine$1() {
  if (hasRequiredMachine$1)
    return machine;
  hasRequiredMachine$1 = 1;
  Object.defineProperty(machine, "__esModule", { value: true });
  return machine;
}
var hasRequiredMachine;
function requireMachine() {
  if (hasRequiredMachine)
    return Machine;
  hasRequiredMachine = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = tslibExports;
    tslib_1.__exportStar(requireMachine$1(), exports);
  })(Machine);
  return Machine;
}
var Moves = {};
var moves$1 = {};
var hasRequiredMoves$2;
function requireMoves$2() {
  if (hasRequiredMoves$2)
    return moves$1;
  hasRequiredMoves$2 = 1;
  Object.defineProperty(moves$1, "__esModule", { value: true });
  return moves$1;
}
var hasRequiredMoves$1;
function requireMoves$1() {
  if (hasRequiredMoves$1)
    return Moves;
  hasRequiredMoves$1 = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = tslibExports;
    tslib_1.__exportStar(requireMoves$2(), exports);
  })(Moves);
  return Moves;
}
var Pokemon = {};
var ability = {};
var hasRequiredAbility;
function requireAbility() {
  if (hasRequiredAbility)
    return ability;
  hasRequiredAbility = 1;
  Object.defineProperty(ability, "__esModule", { value: true });
  return ability;
}
var characteristics = {};
var hasRequiredCharacteristics;
function requireCharacteristics() {
  if (hasRequiredCharacteristics)
    return characteristics;
  hasRequiredCharacteristics = 1;
  Object.defineProperty(characteristics, "__esModule", { value: true });
  return characteristics;
}
var eggGroup = {};
var hasRequiredEggGroup;
function requireEggGroup() {
  if (hasRequiredEggGroup)
    return eggGroup;
  hasRequiredEggGroup = 1;
  Object.defineProperty(eggGroup, "__esModule", { value: true });
  return eggGroup;
}
var gender = {};
var hasRequiredGender;
function requireGender() {
  if (hasRequiredGender)
    return gender;
  hasRequiredGender = 1;
  Object.defineProperty(gender, "__esModule", { value: true });
  return gender;
}
var growthRates = {};
var hasRequiredGrowthRates;
function requireGrowthRates() {
  if (hasRequiredGrowthRates)
    return growthRates;
  hasRequiredGrowthRates = 1;
  Object.defineProperty(growthRates, "__esModule", { value: true });
  return growthRates;
}
var nature = {};
var hasRequiredNature;
function requireNature() {
  if (hasRequiredNature)
    return nature;
  hasRequiredNature = 1;
  Object.defineProperty(nature, "__esModule", { value: true });
  return nature;
}
var pokeathlonStat = {};
var hasRequiredPokeathlonStat;
function requirePokeathlonStat() {
  if (hasRequiredPokeathlonStat)
    return pokeathlonStat;
  hasRequiredPokeathlonStat = 1;
  Object.defineProperty(pokeathlonStat, "__esModule", { value: true });
  return pokeathlonStat;
}
var stats = {};
var hasRequiredStats;
function requireStats() {
  if (hasRequiredStats)
    return stats;
  hasRequiredStats = 1;
  Object.defineProperty(stats, "__esModule", { value: true });
  return stats;
}
var type = {};
var hasRequiredType;
function requireType() {
  if (hasRequiredType)
    return type;
  hasRequiredType = 1;
  Object.defineProperty(type, "__esModule", { value: true });
  return type;
}
var pokemon = {};
var hasRequiredPokemon$1;
function requirePokemon$1() {
  if (hasRequiredPokemon$1)
    return pokemon;
  hasRequiredPokemon$1 = 1;
  Object.defineProperty(pokemon, "__esModule", { value: true });
  return pokemon;
}
var hasRequiredPokemon;
function requirePokemon() {
  if (hasRequiredPokemon)
    return Pokemon;
  hasRequiredPokemon = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = tslibExports;
    tslib_1.__exportStar(requireAbility(), exports);
    tslib_1.__exportStar(requireCharacteristics(), exports);
    tslib_1.__exportStar(requireEggGroup(), exports);
    tslib_1.__exportStar(requireGender(), exports);
    tslib_1.__exportStar(requireGrowthRates(), exports);
    tslib_1.__exportStar(requireNature(), exports);
    tslib_1.__exportStar(requirePokeathlonStat(), exports);
    tslib_1.__exportStar(requireStats(), exports);
    tslib_1.__exportStar(requireType(), exports);
    tslib_1.__exportStar(requirePokemon$1(), exports);
  })(Pokemon);
  return Pokemon;
}
var hasRequiredModels;
function requireModels() {
  if (hasRequiredModels)
    return models;
  hasRequiredModels = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = tslibExports;
    tslib_1.__exportStar(requireBerry(), exports);
    tslib_1.__exportStar(requireCommon(), exports);
    tslib_1.__exportStar(requireContest(), exports);
    tslib_1.__exportStar(requireEncounter$1(), exports);
    tslib_1.__exportStar(requireEvolution(), exports);
    tslib_1.__exportStar(requireGame(), exports);
    tslib_1.__exportStar(requireItem(), exports);
    tslib_1.__exportStar(requireLocation(), exports);
    tslib_1.__exportStar(requireMachine(), exports);
    tslib_1.__exportStar(requireMoves$1(), exports);
    tslib_1.__exportStar(requirePokemon(), exports);
  })(models);
  return models;
}
var clients = {};
var berry_client = {};
var constants = {};
var base$1 = {};
var hasRequiredBase$1;
function requireBase$1() {
  if (hasRequiredBase$1)
    return base$1;
  hasRequiredBase$1 = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BaseURL = void 0;
    (function(BaseURL) {
      BaseURL["REST"] = "https://pokeapi.co/api/v2";
    })(exports.BaseURL || (exports.BaseURL = {}));
  })(base$1);
  return base$1;
}
var endpoints = {};
var hasRequiredEndpoints;
function requireEndpoints() {
  if (hasRequiredEndpoints)
    return endpoints;
  hasRequiredEndpoints = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Endpoints = void 0;
    (function(Endpoints) {
      Endpoints["Berry"] = "/berry";
      Endpoints["BerryFirmness"] = "/berry-firmness";
      Endpoints["BerryFlavor"] = "/berry-flavor";
      Endpoints["ContestType"] = "/contest-type";
      Endpoints["ContestEffect"] = "/contest-effect";
      Endpoints["SuperContestEffect"] = "/super-contest-effect";
      Endpoints["EncouterMethod"] = "/encounter-method";
      Endpoints["EncounterCondition"] = "/encounter-condition";
      Endpoints["EncouterConditionValue"] = "/encounter-condition-value";
      Endpoints["EvolutionChain"] = "/evolution-chain";
      Endpoints["EvolutionTrigger"] = "/evolution-trigger";
      Endpoints["Generation"] = "/generation";
      Endpoints["Pokedex"] = "/pokedex";
      Endpoints["Version"] = "/version";
      Endpoints["VersionGroup"] = "/version-group";
      Endpoints["Item"] = "/item";
      Endpoints["ItemAttribute"] = "/item-attribute";
      Endpoints["ItemCategory"] = "/item-category";
      Endpoints["ItemFlingEffect"] = "/item-fling-effect";
      Endpoints["ItemPocket"] = "/item-pocket";
      Endpoints["Location"] = "/location";
      Endpoints["LocationArea"] = "/location-area";
      Endpoints["PalParkArea"] = "/pal-park-area";
      Endpoints["Region"] = "/region";
      Endpoints["Machine"] = "/machine";
      Endpoints["Move"] = "/move";
      Endpoints["MoveAilment"] = "/move-ailment";
      Endpoints["MoveBattleStyle"] = "/move-battle-style";
      Endpoints["MoveCategory"] = "/move-category";
      Endpoints["MoveDamageClass"] = "/move-damage-class";
      Endpoints["MoveLearnMethod"] = "/move-learn-method";
      Endpoints["MoveTarget"] = "/move-target";
      Endpoints["Ability"] = "/ability";
      Endpoints["Characteristic"] = "/characteristic";
      Endpoints["EggGroup"] = "/egg-group";
      Endpoints["Gender"] = "/gender";
      Endpoints["GrowthRate"] = "/growth-rate";
      Endpoints["Nature"] = "/nature";
      Endpoints["PokeathlonStat"] = "/pokeathlon-stat";
      Endpoints["Pokemon"] = "/pokemon";
      Endpoints["PokemonLocationArea"] = "/pokemon/:id/encounters";
      Endpoints["PokemonColor"] = "/pokemon-color";
      Endpoints["PokemonForm"] = "/pokemon-form";
      Endpoints["PokemonHabitat"] = "/pokemon-habitat";
      Endpoints["PokemonShape"] = "/pokemon-shape";
      Endpoints["PokemonSpecies"] = "/pokemon-species";
      Endpoints["Stat"] = "/stat";
      Endpoints["Type"] = "/type";
      Endpoints["Language"] = "/language";
    })(exports.Endpoints || (exports.Endpoints = {}));
  })(endpoints);
  return endpoints;
}
var berries = {};
var hasRequiredBerries;
function requireBerries() {
  if (hasRequiredBerries)
    return berries;
  hasRequiredBerries = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BerryFlavors = exports.BerryFirmnesses = exports.Berries = void 0;
    (function(Berries) {
      Berries[Berries["CHERI"] = 1] = "CHERI";
      Berries[Berries["CHESTO"] = 2] = "CHESTO";
      Berries[Berries["PECHA"] = 3] = "PECHA";
      Berries[Berries["RAWST"] = 4] = "RAWST";
      Berries[Berries["ASPEAR"] = 5] = "ASPEAR";
      Berries[Berries["LEPPA"] = 6] = "LEPPA";
      Berries[Berries["ORAN"] = 7] = "ORAN";
      Berries[Berries["PERSIM"] = 8] = "PERSIM";
      Berries[Berries["LUM"] = 9] = "LUM";
      Berries[Berries["SITRUS"] = 10] = "SITRUS";
      Berries[Berries["FIGY"] = 11] = "FIGY";
      Berries[Berries["WIKI"] = 12] = "WIKI";
      Berries[Berries["MAGO"] = 13] = "MAGO";
      Berries[Berries["AGUAV"] = 14] = "AGUAV";
      Berries[Berries["IAPAPA"] = 15] = "IAPAPA";
      Berries[Berries["RAZZ"] = 16] = "RAZZ";
      Berries[Berries["BLUK"] = 17] = "BLUK";
      Berries[Berries["NANAB"] = 18] = "NANAB";
      Berries[Berries["WEPEAR"] = 19] = "WEPEAR";
      Berries[Berries["PINAP"] = 20] = "PINAP";
      Berries[Berries["POMEG"] = 21] = "POMEG";
      Berries[Berries["KELPSY"] = 22] = "KELPSY";
      Berries[Berries["QUALOT"] = 23] = "QUALOT";
      Berries[Berries["HONDEW"] = 24] = "HONDEW";
      Berries[Berries["GREPA"] = 25] = "GREPA";
      Berries[Berries["TAMATO"] = 26] = "TAMATO";
      Berries[Berries["CORNN"] = 27] = "CORNN";
      Berries[Berries["MAGOST"] = 28] = "MAGOST";
      Berries[Berries["RABUTA"] = 29] = "RABUTA";
      Berries[Berries["NOMEL"] = 30] = "NOMEL";
      Berries[Berries["SPELON"] = 31] = "SPELON";
      Berries[Berries["PAMTRE"] = 32] = "PAMTRE";
      Berries[Berries["WATMEL"] = 33] = "WATMEL";
      Berries[Berries["DURIN"] = 34] = "DURIN";
      Berries[Berries["BELUE"] = 35] = "BELUE";
      Berries[Berries["OCCA"] = 36] = "OCCA";
      Berries[Berries["PASSHO"] = 37] = "PASSHO";
      Berries[Berries["WACAN"] = 38] = "WACAN";
      Berries[Berries["RINDO"] = 39] = "RINDO";
      Berries[Berries["YACHE"] = 40] = "YACHE";
      Berries[Berries["CHOPLE"] = 41] = "CHOPLE";
      Berries[Berries["KEBIA"] = 42] = "KEBIA";
      Berries[Berries["SHUCA"] = 43] = "SHUCA";
      Berries[Berries["COBA"] = 44] = "COBA";
      Berries[Berries["PAYAPA"] = 45] = "PAYAPA";
      Berries[Berries["TANGA"] = 46] = "TANGA";
      Berries[Berries["CHARTI"] = 47] = "CHARTI";
      Berries[Berries["KASIB"] = 48] = "KASIB";
      Berries[Berries["HABAN"] = 49] = "HABAN";
      Berries[Berries["COLBUR"] = 50] = "COLBUR";
      Berries[Berries["BABIRI"] = 51] = "BABIRI";
      Berries[Berries["CHILAN"] = 52] = "CHILAN";
      Berries[Berries["LIECHI"] = 53] = "LIECHI";
      Berries[Berries["GANLON"] = 54] = "GANLON";
      Berries[Berries["SALAC"] = 55] = "SALAC";
      Berries[Berries["PETAYA"] = 56] = "PETAYA";
      Berries[Berries["APICOT"] = 57] = "APICOT";
      Berries[Berries["LANSAT"] = 58] = "LANSAT";
      Berries[Berries["STARF"] = 59] = "STARF";
      Berries[Berries["ENIGMA"] = 60] = "ENIGMA";
      Berries[Berries["MICLE"] = 61] = "MICLE";
      Berries[Berries["CUSTAP"] = 62] = "CUSTAP";
      Berries[Berries["JABOCA"] = 63] = "JABOCA";
      Berries[Berries["ROWAP"] = 64] = "ROWAP";
    })(exports.Berries || (exports.Berries = {}));
    (function(BerryFirmnesses) {
      BerryFirmnesses[BerryFirmnesses["VERY_SOFT"] = 1] = "VERY_SOFT";
      BerryFirmnesses[BerryFirmnesses["SOFT"] = 2] = "SOFT";
      BerryFirmnesses[BerryFirmnesses["HARD"] = 3] = "HARD";
      BerryFirmnesses[BerryFirmnesses["VERY_HARD"] = 4] = "VERY_HARD";
      BerryFirmnesses[BerryFirmnesses["SUPER_HARD"] = 5] = "SUPER_HARD";
    })(exports.BerryFirmnesses || (exports.BerryFirmnesses = {}));
    (function(BerryFlavors) {
      BerryFlavors[BerryFlavors["SPICY"] = 1] = "SPICY";
      BerryFlavors[BerryFlavors["DRY"] = 2] = "DRY";
      BerryFlavors[BerryFlavors["SWEET"] = 3] = "SWEET";
      BerryFlavors[BerryFlavors["BITTER"] = 4] = "BITTER";
      BerryFlavors[BerryFlavors["SOUR"] = 5] = "SOUR";
    })(exports.BerryFlavors || (exports.BerryFlavors = {}));
  })(berries);
  return berries;
}
var contests = {};
var hasRequiredContests;
function requireContests() {
  if (hasRequiredContests)
    return contests;
  hasRequiredContests = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContestTypes = void 0;
    (function(ContestTypes) {
      ContestTypes[ContestTypes["COOL"] = 1] = "COOL";
      ContestTypes[ContestTypes["BEAUTY"] = 2] = "BEAUTY";
      ContestTypes[ContestTypes["CUTE"] = 3] = "CUTE";
      ContestTypes[ContestTypes["SMART"] = 4] = "SMART";
      ContestTypes[ContestTypes["TOUGH"] = 5] = "TOUGH";
    })(exports.ContestTypes || (exports.ContestTypes = {}));
  })(contests);
  return contests;
}
var encounters = {};
var hasRequiredEncounters;
function requireEncounters() {
  if (hasRequiredEncounters)
    return encounters;
  hasRequiredEncounters = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EncounterConditionValues = exports.EncounterConditions = exports.EncounterMethods = void 0;
    (function(EncounterMethods) {
      EncounterMethods[EncounterMethods["WALK"] = 1] = "WALK";
      EncounterMethods[EncounterMethods["OLD_ROD"] = 2] = "OLD_ROD";
      EncounterMethods[EncounterMethods["GOOD_ROD"] = 3] = "GOOD_ROD";
      EncounterMethods[EncounterMethods["SUPER_ROD"] = 4] = "SUPER_ROD";
      EncounterMethods[EncounterMethods["SURF"] = 5] = "SURF";
      EncounterMethods[EncounterMethods["ROCK_SMASH"] = 6] = "ROCK_SMASH";
      EncounterMethods[EncounterMethods["HEADBUTT"] = 7] = "HEADBUTT";
      EncounterMethods[EncounterMethods["DARK_GRASS"] = 8] = "DARK_GRASS";
      EncounterMethods[EncounterMethods["GRASS_SPOTS"] = 9] = "GRASS_SPOTS";
      EncounterMethods[EncounterMethods["CAVE_SPOTS"] = 10] = "CAVE_SPOTS";
      EncounterMethods[EncounterMethods["BRIDGE_SPOTS"] = 11] = "BRIDGE_SPOTS";
      EncounterMethods[EncounterMethods["SUPER_ROD_SPOTS"] = 12] = "SUPER_ROD_SPOTS";
      EncounterMethods[EncounterMethods["SURF_SPOTS"] = 13] = "SURF_SPOTS";
      EncounterMethods[EncounterMethods["YELLOW_FLOWERS"] = 14] = "YELLOW_FLOWERS";
      EncounterMethods[EncounterMethods["PURPLE_FLOWERS"] = 15] = "PURPLE_FLOWERS";
      EncounterMethods[EncounterMethods["RED_FLOWERS"] = 16] = "RED_FLOWERS";
      EncounterMethods[EncounterMethods["ROUGH_TERRAIN"] = 17] = "ROUGH_TERRAIN";
      EncounterMethods[EncounterMethods["GIFT"] = 18] = "GIFT";
      EncounterMethods[EncounterMethods["GIFT_EGG"] = 19] = "GIFT_EGG";
      EncounterMethods[EncounterMethods["ONLY_ONE"] = 20] = "ONLY_ONE";
      EncounterMethods[EncounterMethods["POKEFLUTE"] = 21] = "POKEFLUTE";
      EncounterMethods[EncounterMethods["HEADBUTT_LOW"] = 22] = "HEADBUTT_LOW";
      EncounterMethods[EncounterMethods["HEADBUTT_NORMAL"] = 23] = "HEADBUTT_NORMAL";
      EncounterMethods[EncounterMethods["HEADBUT_HIGH"] = 24] = "HEADBUT_HIGH";
      EncounterMethods[EncounterMethods["SQUIRT_BOTTLE"] = 25] = "SQUIRT_BOTTLE";
      EncounterMethods[EncounterMethods["WAILMER_PAIL"] = 26] = "WAILMER_PAIL";
      EncounterMethods[EncounterMethods["SEAWEED"] = 27] = "SEAWEED";
    })(exports.EncounterMethods || (exports.EncounterMethods = {}));
    (function(EncounterConditions) {
      EncounterConditions[EncounterConditions["SWARM"] = 1] = "SWARM";
      EncounterConditions[EncounterConditions["TIME"] = 2] = "TIME";
      EncounterConditions[EncounterConditions["RADAR"] = 3] = "RADAR";
      EncounterConditions[EncounterConditions["SLOT2"] = 4] = "SLOT2";
      EncounterConditions[EncounterConditions["RADIO"] = 5] = "RADIO";
      EncounterConditions[EncounterConditions["SEASON"] = 6] = "SEASON";
      EncounterConditions[EncounterConditions["STARTER"] = 7] = "STARTER";
      EncounterConditions[EncounterConditions["TV_OPTION"] = 8] = "TV_OPTION";
      EncounterConditions[EncounterConditions["STORY_PROGRESS"] = 9] = "STORY_PROGRESS";
      EncounterConditions[EncounterConditions["OTHER"] = 10] = "OTHER";
    })(exports.EncounterConditions || (exports.EncounterConditions = {}));
    (function(EncounterConditionValues) {
      EncounterConditionValues[EncounterConditionValues["SWARM_YES"] = 1] = "SWARM_YES";
      EncounterConditionValues[EncounterConditionValues["SWARM_NO"] = 2] = "SWARM_NO";
      EncounterConditionValues[EncounterConditionValues["TIME_MORNING"] = 3] = "TIME_MORNING";
      EncounterConditionValues[EncounterConditionValues["TIME_DAY"] = 4] = "TIME_DAY";
      EncounterConditionValues[EncounterConditionValues["TIME_NIGHT"] = 5] = "TIME_NIGHT";
      EncounterConditionValues[EncounterConditionValues["RADAR_ON"] = 6] = "RADAR_ON";
      EncounterConditionValues[EncounterConditionValues["RADAR_OFF"] = 7] = "RADAR_OFF";
      EncounterConditionValues[EncounterConditionValues["SLOT2_NONE"] = 8] = "SLOT2_NONE";
      EncounterConditionValues[EncounterConditionValues["SLOT2_RUBY"] = 9] = "SLOT2_RUBY";
      EncounterConditionValues[EncounterConditionValues["SLOT2_SAPHIRE"] = 10] = "SLOT2_SAPHIRE";
      EncounterConditionValues[EncounterConditionValues["SLOT2_EMERALD"] = 11] = "SLOT2_EMERALD";
      EncounterConditionValues[EncounterConditionValues["SLOT2_FIRERED"] = 12] = "SLOT2_FIRERED";
      EncounterConditionValues[EncounterConditionValues["SLOT2_LEAFGREEN"] = 13] = "SLOT2_LEAFGREEN";
      EncounterConditionValues[EncounterConditionValues["RADIO_OFF"] = 14] = "RADIO_OFF";
      EncounterConditionValues[EncounterConditionValues["RADIO_HOEN"] = 15] = "RADIO_HOEN";
      EncounterConditionValues[EncounterConditionValues["RADIO_SINNOH"] = 16] = "RADIO_SINNOH";
      EncounterConditionValues[EncounterConditionValues["SEASON_SPRING"] = 17] = "SEASON_SPRING";
      EncounterConditionValues[EncounterConditionValues["SEASON_SUMMER"] = 18] = "SEASON_SUMMER";
      EncounterConditionValues[EncounterConditionValues["SWASON_AUTUMN"] = 19] = "SWASON_AUTUMN";
      EncounterConditionValues[EncounterConditionValues["SEASON_WINTER"] = 20] = "SEASON_WINTER";
      EncounterConditionValues[EncounterConditionValues["STARTER_BULBASAUR"] = 21] = "STARTER_BULBASAUR";
      EncounterConditionValues[EncounterConditionValues["STARTER_SQUIRTLE"] = 22] = "STARTER_SQUIRTLE";
      EncounterConditionValues[EncounterConditionValues["STARTER_CHARMANDER"] = 23] = "STARTER_CHARMANDER";
      EncounterConditionValues[EncounterConditionValues["STARTER_CHESPIN"] = 24] = "STARTER_CHESPIN";
      EncounterConditionValues[EncounterConditionValues["STARTER_FENNEKIN"] = 25] = "STARTER_FENNEKIN";
      EncounterConditionValues[EncounterConditionValues["STARTER_FROAKIE"] = 26] = "STARTER_FROAKIE";
      EncounterConditionValues[EncounterConditionValues["TV_OPTION_BLUE"] = 27] = "TV_OPTION_BLUE";
      EncounterConditionValues[EncounterConditionValues["TV_OPTION_RED"] = 28] = "TV_OPTION_RED";
      EncounterConditionValues[EncounterConditionValues["STORY_PROGRESS_AWAKENED_BEASTS"] = 29] = "STORY_PROGRESS_AWAKENED_BEASTS";
      EncounterConditionValues[EncounterConditionValues["STORY_PROGRESS_BEAT_GALACTIC_CORONET"] = 30] = "STORY_PROGRESS_BEAT_GALACTIC_CORONET";
      EncounterConditionValues[EncounterConditionValues["STORY_PROGRESS_OAK_ETERNA_CITY"] = 31] = "STORY_PROGRESS_OAK_ETERNA_CITY";
      EncounterConditionValues[EncounterConditionValues["STORY_PROGRESS_OAK_VERMILION_COPYCAT"] = 32] = "STORY_PROGRESS_OAK_VERMILION_COPYCAT";
      EncounterConditionValues[EncounterConditionValues["STORY_PROGRESS_MET_TORNADUS_THUNDURUS"] = 33] = "STORY_PROGRESS_MET_TORNADUS_THUNDURUS";
      EncounterConditionValues[EncounterConditionValues["STORY_PROGRESS_BEAT_ELITE_FOUR_ROUND_TWO"] = 34] = "STORY_PROGRESS_BEAT_ELITE_FOUR_ROUND_TWO";
      EncounterConditionValues[EncounterConditionValues["STORY_PROGRESS_HALL_OF_FAME"] = 35] = "STORY_PROGRESS_HALL_OF_FAME";
      EncounterConditionValues[EncounterConditionValues["STORY_PROGRESS_NONE"] = 36] = "STORY_PROGRESS_NONE";
      EncounterConditionValues[EncounterConditionValues["STORY_PROGRESS_NATIONAL_DEX"] = 37] = "STORY_PROGRESS_NATIONAL_DEX";
      EncounterConditionValues[EncounterConditionValues["OTHER_NONE"] = 38] = "OTHER_NONE";
      EncounterConditionValues[EncounterConditionValues["OTHER_SNORLAX_LL_BEAT_LEAGUE"] = 39] = "OTHER_SNORLAX_LL_BEAT_LEAGUE";
    })(exports.EncounterConditionValues || (exports.EncounterConditionValues = {}));
  })(encounters);
  return encounters;
}
var evolutions = {};
var hasRequiredEvolutions;
function requireEvolutions() {
  if (hasRequiredEvolutions)
    return evolutions;
  hasRequiredEvolutions = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EvolutionTriggers = void 0;
    (function(EvolutionTriggers) {
      EvolutionTriggers[EvolutionTriggers["LEVEL_UP"] = 1] = "LEVEL_UP";
      EvolutionTriggers[EvolutionTriggers["TRADE"] = 2] = "TRADE";
      EvolutionTriggers[EvolutionTriggers["USE_ITEM"] = 3] = "USE_ITEM";
      EvolutionTriggers[EvolutionTriggers["SHED"] = 4] = "SHED";
      EvolutionTriggers[EvolutionTriggers["SPIN"] = 5] = "SPIN";
      EvolutionTriggers[EvolutionTriggers["TOWER_OF_DARKNESS"] = 6] = "TOWER_OF_DARKNESS";
      EvolutionTriggers[EvolutionTriggers["TOWER_OF_WATER"] = 7] = "TOWER_OF_WATER";
      EvolutionTriggers[EvolutionTriggers["THREE_CRITICAL_HITS"] = 8] = "THREE_CRITICAL_HITS";
      EvolutionTriggers[EvolutionTriggers["TAKE_DAMAGE"] = 9] = "TAKE_DAMAGE";
      EvolutionTriggers[EvolutionTriggers["OTHER"] = 10] = "OTHER";
    })(exports.EvolutionTriggers || (exports.EvolutionTriggers = {}));
  })(evolutions);
  return evolutions;
}
var games = {};
var hasRequiredGames;
function requireGames() {
  if (hasRequiredGames)
    return games;
  hasRequiredGames = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VersionGroups = exports.Versions = exports.Pokedexes = exports.Generations = void 0;
    (function(Generations) {
      Generations[Generations["GENERATION_I"] = 1] = "GENERATION_I";
      Generations[Generations["GENERATION_II"] = 2] = "GENERATION_II";
      Generations[Generations["GENERATION_III"] = 3] = "GENERATION_III";
      Generations[Generations["GENERATION_IV"] = 4] = "GENERATION_IV";
      Generations[Generations["GENERATION_V"] = 5] = "GENERATION_V";
      Generations[Generations["GENERATION_VI"] = 6] = "GENERATION_VI";
      Generations[Generations["GENERATION_VII"] = 7] = "GENERATION_VII";
      Generations[Generations["GENERATION_VIII"] = 8] = "GENERATION_VIII";
    })(exports.Generations || (exports.Generations = {}));
    (function(Pokedexes) {
      Pokedexes[Pokedexes["NATIONAL"] = 1] = "NATIONAL";
      Pokedexes[Pokedexes["KANTO"] = 2] = "KANTO";
      Pokedexes[Pokedexes["ORIGINAL_JOHTO"] = 3] = "ORIGINAL_JOHTO";
      Pokedexes[Pokedexes["HOENN"] = 4] = "HOENN";
      Pokedexes[Pokedexes["ORIGINAL_SINNOH"] = 5] = "ORIGINAL_SINNOH";
      Pokedexes[Pokedexes["EXTENDED_SINNOH"] = 6] = "EXTENDED_SINNOH";
      Pokedexes[Pokedexes["UPDATED_JOHTO"] = 7] = "UPDATED_JOHTO";
      Pokedexes[Pokedexes["ORIGINAL_UNOVA"] = 8] = "ORIGINAL_UNOVA";
      Pokedexes[Pokedexes["UPDATED_UNOVA"] = 9] = "UPDATED_UNOVA";
      Pokedexes[Pokedexes["CONQUEST_GALLERY"] = 11] = "CONQUEST_GALLERY";
      Pokedexes[Pokedexes["KALOS_CENTRAL"] = 12] = "KALOS_CENTRAL";
      Pokedexes[Pokedexes["KALOS_COASTAL"] = 13] = "KALOS_COASTAL";
      Pokedexes[Pokedexes["KALOS_MONTAIN"] = 14] = "KALOS_MONTAIN";
      Pokedexes[Pokedexes["UPDATED_HOENN"] = 15] = "UPDATED_HOENN";
      Pokedexes[Pokedexes["ORIGINAL_ALOLA"] = 16] = "ORIGINAL_ALOLA";
      Pokedexes[Pokedexes["ORIGINAL_MELEMELE"] = 17] = "ORIGINAL_MELEMELE";
      Pokedexes[Pokedexes["ORIGINAL_AKALA"] = 18] = "ORIGINAL_AKALA";
      Pokedexes[Pokedexes["ORIGINAL_ULAULA"] = 19] = "ORIGINAL_ULAULA";
      Pokedexes[Pokedexes["ORIGINAL_PONI"] = 20] = "ORIGINAL_PONI";
      Pokedexes[Pokedexes["UPDATED_ALOLA"] = 21] = "UPDATED_ALOLA";
      Pokedexes[Pokedexes["UPDATED_MELEMELE"] = 22] = "UPDATED_MELEMELE";
      Pokedexes[Pokedexes["UPDATED_AKALA"] = 23] = "UPDATED_AKALA";
      Pokedexes[Pokedexes["UPDATED_ULAULA"] = 24] = "UPDATED_ULAULA";
      Pokedexes[Pokedexes["UPDATED_PONI"] = 25] = "UPDATED_PONI";
      Pokedexes[Pokedexes["UPDATED_KANTO"] = 26] = "UPDATED_KANTO";
      Pokedexes[Pokedexes["GALAR"] = 27] = "GALAR";
      Pokedexes[Pokedexes["ISLE_OF_ARMOR"] = 28] = "ISLE_OF_ARMOR";
      Pokedexes[Pokedexes["CROWN_TUNDRA"] = 29] = "CROWN_TUNDRA";
    })(exports.Pokedexes || (exports.Pokedexes = {}));
    (function(Versions) {
      Versions[Versions["RED"] = 1] = "RED";
      Versions[Versions["BLUE"] = 2] = "BLUE";
      Versions[Versions["YELLOW"] = 3] = "YELLOW";
      Versions[Versions["GOLD"] = 4] = "GOLD";
      Versions[Versions["SILVER"] = 5] = "SILVER";
      Versions[Versions["CRYSTAL"] = 6] = "CRYSTAL";
      Versions[Versions["RUBY"] = 7] = "RUBY";
      Versions[Versions["SAPPHIRE"] = 8] = "SAPPHIRE";
      Versions[Versions["EMERALD"] = 9] = "EMERALD";
      Versions[Versions["FIRERED"] = 10] = "FIRERED";
      Versions[Versions["LEAFGREEN"] = 11] = "LEAFGREEN";
      Versions[Versions["DIAMOND"] = 12] = "DIAMOND";
      Versions[Versions["PEARL"] = 13] = "PEARL";
      Versions[Versions["PLATINUM"] = 14] = "PLATINUM";
      Versions[Versions["HEARTGOLD"] = 15] = "HEARTGOLD";
      Versions[Versions["SOULSILVER"] = 16] = "SOULSILVER";
      Versions[Versions["BLACK"] = 17] = "BLACK";
      Versions[Versions["WHITE"] = 18] = "WHITE";
      Versions[Versions["COLOSSEUM"] = 19] = "COLOSSEUM";
      Versions[Versions["XD"] = 20] = "XD";
      Versions[Versions["BLACK_2"] = 21] = "BLACK_2";
      Versions[Versions["WHITE_2"] = 22] = "WHITE_2";
      Versions[Versions["X"] = 23] = "X";
      Versions[Versions["Y"] = 24] = "Y";
      Versions[Versions["OMEGA_RUBY"] = 25] = "OMEGA_RUBY";
      Versions[Versions["ALPHA_SAPPHIRE"] = 26] = "ALPHA_SAPPHIRE";
      Versions[Versions["SUN"] = 27] = "SUN";
      Versions[Versions["MOON"] = 28] = "MOON";
      Versions[Versions["ULTRA_SUN"] = 29] = "ULTRA_SUN";
      Versions[Versions["ULTRA_MOON"] = 30] = "ULTRA_MOON";
      Versions[Versions["LETS_GO_PIKACHU"] = 31] = "LETS_GO_PIKACHU";
      Versions[Versions["LETS_GO_EEVEE"] = 32] = "LETS_GO_EEVEE";
      Versions[Versions["SWORD"] = 33] = "SWORD";
      Versions[Versions["SHIELD"] = 34] = "SHIELD";
      Versions[Versions["THE_ISLE_OF_ARMOR"] = 35] = "THE_ISLE_OF_ARMOR";
      Versions[Versions["THE_CROWN_TUNDRA"] = 36] = "THE_CROWN_TUNDRA";
      Versions[Versions["BRILLIANT_DIAMOND"] = 37] = "BRILLIANT_DIAMOND";
      Versions[Versions["SHINING_PEARL"] = 38] = "SHINING_PEARL";
      Versions[Versions["LEGENDS_ARCEUS"] = 39] = "LEGENDS_ARCEUS";
    })(exports.Versions || (exports.Versions = {}));
    (function(VersionGroups) {
      VersionGroups[VersionGroups["RED_BLUE"] = 1] = "RED_BLUE";
      VersionGroups[VersionGroups["YELLOW"] = 2] = "YELLOW";
      VersionGroups[VersionGroups["GOLD_SILVER"] = 3] = "GOLD_SILVER";
      VersionGroups[VersionGroups["CRYSTAL"] = 4] = "CRYSTAL";
      VersionGroups[VersionGroups["RUBY_SAPPHIRE"] = 5] = "RUBY_SAPPHIRE";
      VersionGroups[VersionGroups["EMERALD"] = 6] = "EMERALD";
      VersionGroups[VersionGroups["FIRERED_LEAFGREEN"] = 7] = "FIRERED_LEAFGREEN";
      VersionGroups[VersionGroups["DIAMOND_PEARL"] = 8] = "DIAMOND_PEARL";
      VersionGroups[VersionGroups["PLATINUM"] = 9] = "PLATINUM";
      VersionGroups[VersionGroups["HEARTGOLD_SOULSILVER"] = 10] = "HEARTGOLD_SOULSILVER";
      VersionGroups[VersionGroups["BLACK_WHITE"] = 11] = "BLACK_WHITE";
      VersionGroups[VersionGroups["COLOSSEUM"] = 12] = "COLOSSEUM";
      VersionGroups[VersionGroups["XD"] = 13] = "XD";
      VersionGroups[VersionGroups["BLACK_2_WHITE_2"] = 14] = "BLACK_2_WHITE_2";
      VersionGroups[VersionGroups["X_Y"] = 15] = "X_Y";
      VersionGroups[VersionGroups["OMEGA_RUBY_ALPHA_SAPPHIRE"] = 16] = "OMEGA_RUBY_ALPHA_SAPPHIRE";
      VersionGroups[VersionGroups["SUN_MOON"] = 17] = "SUN_MOON";
      VersionGroups[VersionGroups["ULTRA_SUN_ULTRA_MOON"] = 18] = "ULTRA_SUN_ULTRA_MOON";
      VersionGroups[VersionGroups["LETS_GO"] = 19] = "LETS_GO";
      VersionGroups[VersionGroups["SWORD_SHIELD"] = 20] = "SWORD_SHIELD";
      VersionGroups[VersionGroups["THE_ISLE_OF_ARMOR"] = 21] = "THE_ISLE_OF_ARMOR";
      VersionGroups[VersionGroups["THE_CROWN_TUNDRA"] = 22] = "THE_CROWN_TUNDRA";
      VersionGroups[VersionGroups["BRILLIANT_DIAMOND_AND_SHINING_PEARL"] = 23] = "BRILLIANT_DIAMOND_AND_SHINING_PEARL";
      VersionGroups[VersionGroups["LEGENDS_ARCEUS"] = 24] = "LEGENDS_ARCEUS";
    })(exports.VersionGroups || (exports.VersionGroups = {}));
  })(games);
  return games;
}
var locations = {};
var hasRequiredLocations;
function requireLocations() {
  if (hasRequiredLocations)
    return locations;
  hasRequiredLocations = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PalParkAreas = exports.Regions = void 0;
    (function(Regions) {
      Regions[Regions["KANTO"] = 1] = "KANTO";
      Regions[Regions["JOHTO"] = 2] = "JOHTO";
      Regions[Regions["HOENN"] = 3] = "HOENN";
      Regions[Regions["SINNOH"] = 4] = "SINNOH";
      Regions[Regions["UNOVA"] = 5] = "UNOVA";
      Regions[Regions["KALOS"] = 6] = "KALOS";
      Regions[Regions["ALOLA"] = 7] = "ALOLA";
      Regions[Regions["GALAR"] = 8] = "GALAR";
      Regions[Regions["HISUI"] = 9] = "HISUI";
    })(exports.Regions || (exports.Regions = {}));
    (function(PalParkAreas) {
      PalParkAreas[PalParkAreas["FOREST"] = 1] = "FOREST";
      PalParkAreas[PalParkAreas["FIELD"] = 2] = "FIELD";
      PalParkAreas[PalParkAreas["MOUNTAIN"] = 3] = "MOUNTAIN";
      PalParkAreas[PalParkAreas["POND"] = 4] = "POND";
      PalParkAreas[PalParkAreas["SEA"] = 5] = "SEA";
    })(exports.PalParkAreas || (exports.PalParkAreas = {}));
  })(locations);
  return locations;
}
var moves = {};
var hasRequiredMoves;
function requireMoves() {
  if (hasRequiredMoves)
    return moves;
  hasRequiredMoves = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MoveTargets = exports.MoveLearnMethods = exports.MoveDamageClasses = exports.MoveCategories = exports.MoveBattleStyles = exports.MoveAilmtents = void 0;
    (function(MoveAilmtents) {
      MoveAilmtents[MoveAilmtents["UNKNOWN"] = -1] = "UNKNOWN";
      MoveAilmtents[MoveAilmtents["NONE"] = 0] = "NONE";
      MoveAilmtents[MoveAilmtents["PARALYSIS"] = 1] = "PARALYSIS";
      MoveAilmtents[MoveAilmtents["SLEEP"] = 2] = "SLEEP";
      MoveAilmtents[MoveAilmtents["FREEZE"] = 3] = "FREEZE";
      MoveAilmtents[MoveAilmtents["BURN"] = 4] = "BURN";
      MoveAilmtents[MoveAilmtents["POISON"] = 5] = "POISON";
      MoveAilmtents[MoveAilmtents["CONFUSION"] = 6] = "CONFUSION";
      MoveAilmtents[MoveAilmtents["INFATUATION"] = 7] = "INFATUATION";
      MoveAilmtents[MoveAilmtents["TRAP"] = 8] = "TRAP";
      MoveAilmtents[MoveAilmtents["NIGHTMARE"] = 9] = "NIGHTMARE";
      MoveAilmtents[MoveAilmtents["TORMENT"] = 12] = "TORMENT";
      MoveAilmtents[MoveAilmtents["DISABLE"] = 13] = "DISABLE";
      MoveAilmtents[MoveAilmtents["YAWN"] = 14] = "YAWN";
      MoveAilmtents[MoveAilmtents["HEAL_BLOCK"] = 15] = "HEAL_BLOCK";
      MoveAilmtents[MoveAilmtents["NO_TYPE_IMMUNITY"] = 17] = "NO_TYPE_IMMUNITY";
      MoveAilmtents[MoveAilmtents["LEECH_SEED"] = 18] = "LEECH_SEED";
      MoveAilmtents[MoveAilmtents["EMBARGO"] = 19] = "EMBARGO";
      MoveAilmtents[MoveAilmtents["PERISH_SONG"] = 20] = "PERISH_SONG";
      MoveAilmtents[MoveAilmtents["INGRAIN"] = 21] = "INGRAIN";
      MoveAilmtents[MoveAilmtents["SILENCE"] = 24] = "SILENCE";
      MoveAilmtents[MoveAilmtents["TAR_SHOT"] = 42] = "TAR_SHOT";
    })(exports.MoveAilmtents || (exports.MoveAilmtents = {}));
    (function(MoveBattleStyles) {
      MoveBattleStyles[MoveBattleStyles["ATTACK"] = 1] = "ATTACK";
      MoveBattleStyles[MoveBattleStyles["DEFENSE"] = 2] = "DEFENSE";
      MoveBattleStyles[MoveBattleStyles["SUPPORT"] = 3] = "SUPPORT";
    })(exports.MoveBattleStyles || (exports.MoveBattleStyles = {}));
    (function(MoveCategories) {
      MoveCategories[MoveCategories["DAMAGE"] = 0] = "DAMAGE";
      MoveCategories[MoveCategories["AILMENT"] = 1] = "AILMENT";
      MoveCategories[MoveCategories["NET_GOOD_STATS"] = 2] = "NET_GOOD_STATS";
      MoveCategories[MoveCategories["HEAL"] = 3] = "HEAL";
      MoveCategories[MoveCategories["DAMAGE_AILMENT"] = 4] = "DAMAGE_AILMENT";
      MoveCategories[MoveCategories["SWAGGER"] = 5] = "SWAGGER";
      MoveCategories[MoveCategories["DAMAGE_LOWER"] = 6] = "DAMAGE_LOWER";
      MoveCategories[MoveCategories["DAMAGE_RAISE"] = 7] = "DAMAGE_RAISE";
      MoveCategories[MoveCategories["DAMAGE_HEAL"] = 8] = "DAMAGE_HEAL";
      MoveCategories[MoveCategories["OHKO"] = 9] = "OHKO";
      MoveCategories[MoveCategories["WHOLE_FIELD_EFFECT"] = 10] = "WHOLE_FIELD_EFFECT";
      MoveCategories[MoveCategories["FIELD_EFFECT"] = 11] = "FIELD_EFFECT";
      MoveCategories[MoveCategories["FORCE_SWITCH"] = 12] = "FORCE_SWITCH";
      MoveCategories[MoveCategories["UNIQUE"] = 13] = "UNIQUE";
    })(exports.MoveCategories || (exports.MoveCategories = {}));
    (function(MoveDamageClasses) {
      MoveDamageClasses[MoveDamageClasses["STATUS"] = 1] = "STATUS";
      MoveDamageClasses[MoveDamageClasses["PHYSICAL"] = 2] = "PHYSICAL";
      MoveDamageClasses[MoveDamageClasses["SPECIAL"] = 3] = "SPECIAL";
    })(exports.MoveDamageClasses || (exports.MoveDamageClasses = {}));
    (function(MoveLearnMethods) {
      MoveLearnMethods[MoveLearnMethods["LEVEL_UP"] = 1] = "LEVEL_UP";
      MoveLearnMethods[MoveLearnMethods["EGG"] = 2] = "EGG";
      MoveLearnMethods[MoveLearnMethods["TUTOR"] = 3] = "TUTOR";
      MoveLearnMethods[MoveLearnMethods["MACHINE"] = 4] = "MACHINE";
      MoveLearnMethods[MoveLearnMethods["STADIUM_SURFING_PIKACHU"] = 5] = "STADIUM_SURFING_PIKACHU";
      MoveLearnMethods[MoveLearnMethods["LIGHT_BALL_EGG"] = 6] = "LIGHT_BALL_EGG";
      MoveLearnMethods[MoveLearnMethods["COLOSSEUM_PURIFICATION"] = 7] = "COLOSSEUM_PURIFICATION";
      MoveLearnMethods[MoveLearnMethods["XD_SHADOW"] = 8] = "XD_SHADOW";
      MoveLearnMethods[MoveLearnMethods["XD_PURIFICATION"] = 9] = "XD_PURIFICATION";
      MoveLearnMethods[MoveLearnMethods["FORM_CHANGE"] = 10] = "FORM_CHANGE";
    })(exports.MoveLearnMethods || (exports.MoveLearnMethods = {}));
    (function(MoveTargets) {
      MoveTargets[MoveTargets["SPECIFIC_MOVE"] = 1] = "SPECIFIC_MOVE";
      MoveTargets[MoveTargets["SELECTED_POKEMON_ME_FIRST"] = 2] = "SELECTED_POKEMON_ME_FIRST";
      MoveTargets[MoveTargets["ALLY"] = 3] = "ALLY";
      MoveTargets[MoveTargets["USERS_FIELD"] = 4] = "USERS_FIELD";
      MoveTargets[MoveTargets["USER_OR_ALLY"] = 5] = "USER_OR_ALLY";
      MoveTargets[MoveTargets["OPPONENTS_FIELD"] = 6] = "OPPONENTS_FIELD";
      MoveTargets[MoveTargets["USER"] = 7] = "USER";
      MoveTargets[MoveTargets["RANDOM_OPPONENT"] = 8] = "RANDOM_OPPONENT";
      MoveTargets[MoveTargets["ALL_OTHER_POKEMON"] = 9] = "ALL_OTHER_POKEMON";
      MoveTargets[MoveTargets["SELECTED_POKEMON"] = 10] = "SELECTED_POKEMON";
      MoveTargets[MoveTargets["ALL_OPPONENTS"] = 11] = "ALL_OPPONENTS";
      MoveTargets[MoveTargets["ENTIRE_FIELD"] = 12] = "ENTIRE_FIELD";
      MoveTargets[MoveTargets["USER_AND_ALIES"] = 13] = "USER_AND_ALIES";
      MoveTargets[MoveTargets["ALL_POKEMON"] = 14] = "ALL_POKEMON";
      MoveTargets[MoveTargets["ALL_ALLIES"] = 15] = "ALL_ALLIES";
    })(exports.MoveTargets || (exports.MoveTargets = {}));
  })(moves);
  return moves;
}
var pokemons = {};
var hasRequiredPokemons;
function requirePokemons() {
  if (hasRequiredPokemons)
    return pokemons;
  hasRequiredPokemons = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Types = exports.Stats = exports.PokemonShapes = exports.PokemonHabitats = exports.PokemonColors = exports.PokeathlonStats = exports.Natures = exports.GrowthRates = exports.Genders = exports.EggGroups = void 0;
    (function(EggGroups) {
      EggGroups[EggGroups["MONSTER"] = 1] = "MONSTER";
      EggGroups[EggGroups["WATER1"] = 2] = "WATER1";
      EggGroups[EggGroups["BUG"] = 3] = "BUG";
      EggGroups[EggGroups["FLYING"] = 4] = "FLYING";
      EggGroups[EggGroups["GROUND"] = 5] = "GROUND";
      EggGroups[EggGroups["FAIRY"] = 6] = "FAIRY";
      EggGroups[EggGroups["PLANT"] = 7] = "PLANT";
      EggGroups[EggGroups["HUMANSHAPE"] = 8] = "HUMANSHAPE";
      EggGroups[EggGroups["WATER3"] = 9] = "WATER3";
      EggGroups[EggGroups["MINERAL"] = 10] = "MINERAL";
      EggGroups[EggGroups["INDETERMINATE"] = 11] = "INDETERMINATE";
      EggGroups[EggGroups["WATER2"] = 12] = "WATER2";
      EggGroups[EggGroups["DITTO"] = 13] = "DITTO";
      EggGroups[EggGroups["DRAGON"] = 14] = "DRAGON";
      EggGroups[EggGroups["NO_EGGS"] = 15] = "NO_EGGS";
    })(exports.EggGroups || (exports.EggGroups = {}));
    (function(Genders) {
      Genders[Genders["FEMALE"] = 1] = "FEMALE";
      Genders[Genders["MALE"] = 2] = "MALE";
      Genders[Genders["GENDERLESS"] = 3] = "GENDERLESS";
    })(exports.Genders || (exports.Genders = {}));
    (function(GrowthRates) {
      GrowthRates[GrowthRates["SLOW"] = 1] = "SLOW";
      GrowthRates[GrowthRates["MEDIUM"] = 2] = "MEDIUM";
      GrowthRates[GrowthRates["FAST"] = 3] = "FAST";
      GrowthRates[GrowthRates["MEDIUM_SLOW"] = 4] = "MEDIUM_SLOW";
      GrowthRates[GrowthRates["SLOW_THEN_VERY_FAST"] = 5] = "SLOW_THEN_VERY_FAST";
      GrowthRates[GrowthRates["FAST_THEN_VERY_SLOW"] = 6] = "FAST_THEN_VERY_SLOW";
    })(exports.GrowthRates || (exports.GrowthRates = {}));
    (function(Natures) {
      Natures[Natures["HARDY"] = 1] = "HARDY";
      Natures[Natures["BOLD"] = 2] = "BOLD";
      Natures[Natures["MODEST"] = 3] = "MODEST";
      Natures[Natures["CALM"] = 4] = "CALM";
      Natures[Natures["TIMID"] = 5] = "TIMID";
      Natures[Natures["LONELY"] = 6] = "LONELY";
      Natures[Natures["DOCILE"] = 7] = "DOCILE";
      Natures[Natures["MILD"] = 8] = "MILD";
      Natures[Natures["GENTLE"] = 9] = "GENTLE";
      Natures[Natures["HASTY"] = 10] = "HASTY";
      Natures[Natures["ADAMANT"] = 11] = "ADAMANT";
      Natures[Natures["IMPISH"] = 12] = "IMPISH";
      Natures[Natures["BASHFUL"] = 13] = "BASHFUL";
      Natures[Natures["CAREFUL"] = 14] = "CAREFUL";
      Natures[Natures["RASH"] = 15] = "RASH";
      Natures[Natures["JOLLY"] = 16] = "JOLLY";
      Natures[Natures["NAUGHTY"] = 17] = "NAUGHTY";
      Natures[Natures["LAX"] = 18] = "LAX";
      Natures[Natures["QUIRKY"] = 19] = "QUIRKY";
      Natures[Natures["NAIVE"] = 20] = "NAIVE";
      Natures[Natures["BRAVE"] = 21] = "BRAVE";
      Natures[Natures["RELAXED"] = 22] = "RELAXED";
      Natures[Natures["QUIET"] = 23] = "QUIET";
      Natures[Natures["SASSY"] = 24] = "SASSY";
      Natures[Natures["SERIOUS"] = 25] = "SERIOUS";
    })(exports.Natures || (exports.Natures = {}));
    (function(PokeathlonStats) {
      PokeathlonStats[PokeathlonStats["SPEED"] = 1] = "SPEED";
      PokeathlonStats[PokeathlonStats["POWER"] = 2] = "POWER";
      PokeathlonStats[PokeathlonStats["SKILL"] = 3] = "SKILL";
      PokeathlonStats[PokeathlonStats["STAMINA"] = 4] = "STAMINA";
      PokeathlonStats[PokeathlonStats["JUMP"] = 5] = "JUMP";
    })(exports.PokeathlonStats || (exports.PokeathlonStats = {}));
    (function(PokemonColors) {
      PokemonColors[PokemonColors["BLACK"] = 1] = "BLACK";
      PokemonColors[PokemonColors["BLUE"] = 2] = "BLUE";
      PokemonColors[PokemonColors["BROWN"] = 3] = "BROWN";
      PokemonColors[PokemonColors["GRAY"] = 4] = "GRAY";
      PokemonColors[PokemonColors["GREEN"] = 5] = "GREEN";
      PokemonColors[PokemonColors["PINK"] = 6] = "PINK";
      PokemonColors[PokemonColors["PURPLE"] = 7] = "PURPLE";
      PokemonColors[PokemonColors["RED"] = 8] = "RED";
      PokemonColors[PokemonColors["WHITE"] = 9] = "WHITE";
      PokemonColors[PokemonColors["YELLOW"] = 10] = "YELLOW";
    })(exports.PokemonColors || (exports.PokemonColors = {}));
    (function(PokemonHabitats) {
      PokemonHabitats[PokemonHabitats["CAVE"] = 1] = "CAVE";
      PokemonHabitats[PokemonHabitats["FOREST"] = 2] = "FOREST";
      PokemonHabitats[PokemonHabitats["GRASSLAND"] = 3] = "GRASSLAND";
      PokemonHabitats[PokemonHabitats["MONTAIN"] = 4] = "MONTAIN";
      PokemonHabitats[PokemonHabitats["RARE"] = 5] = "RARE";
      PokemonHabitats[PokemonHabitats["ROUGH_TERRAIN"] = 6] = "ROUGH_TERRAIN";
      PokemonHabitats[PokemonHabitats["SEA"] = 7] = "SEA";
      PokemonHabitats[PokemonHabitats["URBAN"] = 8] = "URBAN";
      PokemonHabitats[PokemonHabitats["WATERS_EDGE"] = 9] = "WATERS_EDGE";
    })(exports.PokemonHabitats || (exports.PokemonHabitats = {}));
    (function(PokemonShapes) {
      PokemonShapes[PokemonShapes["BALL"] = 1] = "BALL";
      PokemonShapes[PokemonShapes["SQUIGGLE"] = 2] = "SQUIGGLE";
      PokemonShapes[PokemonShapes["FISH"] = 3] = "FISH";
      PokemonShapes[PokemonShapes["ARMS"] = 4] = "ARMS";
      PokemonShapes[PokemonShapes["BLOB"] = 5] = "BLOB";
      PokemonShapes[PokemonShapes["UPRIGHT"] = 6] = "UPRIGHT";
      PokemonShapes[PokemonShapes["LEGS"] = 7] = "LEGS";
      PokemonShapes[PokemonShapes["QUADRUPED"] = 8] = "QUADRUPED";
      PokemonShapes[PokemonShapes["WINGS"] = 9] = "WINGS";
      PokemonShapes[PokemonShapes["TENTACLES"] = 10] = "TENTACLES";
      PokemonShapes[PokemonShapes["HEADS"] = 11] = "HEADS";
      PokemonShapes[PokemonShapes["HUMANOID"] = 12] = "HUMANOID";
      PokemonShapes[PokemonShapes["BUG_WINGS"] = 13] = "BUG_WINGS";
      PokemonShapes[PokemonShapes["ARMOR"] = 14] = "ARMOR";
    })(exports.PokemonShapes || (exports.PokemonShapes = {}));
    (function(Stats) {
      Stats[Stats["HP"] = 1] = "HP";
      Stats[Stats["ATTACK"] = 2] = "ATTACK";
      Stats[Stats["DEFENSE"] = 3] = "DEFENSE";
      Stats[Stats["SPECIAL_ATTACK"] = 4] = "SPECIAL_ATTACK";
      Stats[Stats["SPECIAL_DEFENSE"] = 5] = "SPECIAL_DEFENSE";
      Stats[Stats["SPEED"] = 6] = "SPEED";
      Stats[Stats["ACCURACY"] = 7] = "ACCURACY";
      Stats[Stats["EVASION"] = 8] = "EVASION";
    })(exports.Stats || (exports.Stats = {}));
    (function(Types) {
      Types[Types["NORMAL"] = 1] = "NORMAL";
      Types[Types["FIGHTING"] = 2] = "FIGHTING";
      Types[Types["FLYING"] = 3] = "FLYING";
      Types[Types["POISON"] = 4] = "POISON";
      Types[Types["GROUND"] = 5] = "GROUND";
      Types[Types["ROCK"] = 6] = "ROCK";
      Types[Types["BUG"] = 7] = "BUG";
      Types[Types["GHOST"] = 8] = "GHOST";
      Types[Types["STEEL"] = 9] = "STEEL";
      Types[Types["FIRE"] = 10] = "FIRE";
      Types[Types["WATER"] = 11] = "WATER";
      Types[Types["GRASS"] = 12] = "GRASS";
      Types[Types["ELECTRIC"] = 13] = "ELECTRIC";
      Types[Types["PSYCHIC"] = 14] = "PSYCHIC";
      Types[Types["ICE"] = 15] = "ICE";
      Types[Types["DRAGON"] = 16] = "DRAGON";
      Types[Types["DARK"] = 17] = "DARK";
      Types[Types["FAIRY"] = 18] = "FAIRY";
      Types[Types["UNKNOWN"] = 10001] = "UNKNOWN";
      Types[Types["SHADOW"] = 10002] = "SHADOW";
    })(exports.Types || (exports.Types = {}));
  })(pokemons);
  return pokemons;
}
var utilities = {};
var hasRequiredUtilities;
function requireUtilities() {
  if (hasRequiredUtilities)
    return utilities;
  hasRequiredUtilities = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Languages = void 0;
    (function(Languages) {
      Languages[Languages["JA_HRKT"] = 1] = "JA_HRKT";
      Languages[Languages["ROOMAJI"] = 2] = "ROOMAJI";
      Languages[Languages["KO"] = 3] = "KO";
      Languages[Languages["ZH_HANT"] = 4] = "ZH_HANT";
      Languages[Languages["FR"] = 5] = "FR";
      Languages[Languages["DE"] = 6] = "DE";
      Languages[Languages["ES"] = 7] = "ES";
      Languages[Languages["IT"] = 8] = "IT";
      Languages[Languages["EN"] = 9] = "EN";
      Languages[Languages["CS"] = 10] = "CS";
      Languages[Languages["JA"] = 11] = "JA";
      Languages[Languages["ZH_HANS"] = 12] = "ZH_HANS";
      Languages[Languages["PT_BR"] = 13] = "PT_BR";
    })(exports.Languages || (exports.Languages = {}));
  })(utilities);
  return utilities;
}
var items = {};
var hasRequiredItems;
function requireItems() {
  if (hasRequiredItems)
    return items;
  hasRequiredItems = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ItemPockets = exports.ItemFlingEffects = exports.ItemCategories = exports.ItemAttributes = void 0;
    (function(ItemAttributes) {
      ItemAttributes[ItemAttributes["COUNTABLE"] = 1] = "COUNTABLE";
      ItemAttributes[ItemAttributes["CONSUMABLE"] = 2] = "CONSUMABLE";
      ItemAttributes[ItemAttributes["USABLE_OVERWORLD"] = 3] = "USABLE_OVERWORLD";
      ItemAttributes[ItemAttributes["USABLE_IN_BATTLE"] = 4] = "USABLE_IN_BATTLE";
      ItemAttributes[ItemAttributes["HOLDABLE"] = 5] = "HOLDABLE";
      ItemAttributes[ItemAttributes["HOLDABLE_PASSIVE"] = 6] = "HOLDABLE_PASSIVE";
      ItemAttributes[ItemAttributes["HOLDABLE_ACTIVE"] = 7] = "HOLDABLE_ACTIVE";
      ItemAttributes[ItemAttributes["UNDERGROUND"] = 8] = "UNDERGROUND";
    })(exports.ItemAttributes || (exports.ItemAttributes = {}));
    (function(ItemCategories) {
      ItemCategories[ItemCategories["STAT_BOOSTS"] = 1] = "STAT_BOOSTS";
      ItemCategories[ItemCategories["EFFORT_DROP"] = 2] = "EFFORT_DROP";
      ItemCategories[ItemCategories["MEDICINE"] = 3] = "MEDICINE";
      ItemCategories[ItemCategories["OTHER"] = 4] = "OTHER";
      ItemCategories[ItemCategories["IN_A_PINCH"] = 5] = "IN_A_PINCH";
      ItemCategories[ItemCategories["PICKY_HEALING"] = 6] = "PICKY_HEALING";
      ItemCategories[ItemCategories["TYPE_PROTECTION"] = 7] = "TYPE_PROTECTION";
      ItemCategories[ItemCategories["BAKING_ONLY"] = 8] = "BAKING_ONLY";
      ItemCategories[ItemCategories["COLLECTIBLES"] = 9] = "COLLECTIBLES";
      ItemCategories[ItemCategories["EVOLUTION"] = 10] = "EVOLUTION";
      ItemCategories[ItemCategories["SPELUNKING"] = 11] = "SPELUNKING";
      ItemCategories[ItemCategories["HELD_ITEMS"] = 12] = "HELD_ITEMS";
      ItemCategories[ItemCategories["CHOICE"] = 13] = "CHOICE";
      ItemCategories[ItemCategories["EFFORT_TRAINING"] = 14] = "EFFORT_TRAINING";
      ItemCategories[ItemCategories["BAD_HELD_ITEMS"] = 15] = "BAD_HELD_ITEMS";
      ItemCategories[ItemCategories["TRAINING"] = 16] = "TRAINING";
      ItemCategories[ItemCategories["PLATES"] = 17] = "PLATES";
      ItemCategories[ItemCategories["SPECIES_SPECIFIC"] = 18] = "SPECIES_SPECIFIC";
      ItemCategories[ItemCategories["TYPE_ENHANCEMENT"] = 19] = "TYPE_ENHANCEMENT";
      ItemCategories[ItemCategories["EVENT_ITEMS"] = 20] = "EVENT_ITEMS";
      ItemCategories[ItemCategories["GAMEPLAY"] = 21] = "GAMEPLAY";
      ItemCategories[ItemCategories["PLOT_ADVANCEMENT"] = 22] = "PLOT_ADVANCEMENT";
      ItemCategories[ItemCategories["UNUSED"] = 23] = "UNUSED";
      ItemCategories[ItemCategories["LOOT"] = 24] = "LOOT";
      ItemCategories[ItemCategories["ALL_MAIL"] = 25] = "ALL_MAIL";
      ItemCategories[ItemCategories["VITAMINS"] = 26] = "VITAMINS";
      ItemCategories[ItemCategories["HEALING"] = 27] = "HEALING";
      ItemCategories[ItemCategories["PP_RECOVERY"] = 28] = "PP_RECOVERY";
      ItemCategories[ItemCategories["REVIVAL"] = 29] = "REVIVAL";
      ItemCategories[ItemCategories["STATUS_CURES"] = 30] = "STATUS_CURES";
      ItemCategories[ItemCategories["MULCH"] = 32] = "MULCH";
      ItemCategories[ItemCategories["SPECIAL_BALLS"] = 33] = "SPECIAL_BALLS";
      ItemCategories[ItemCategories["STANDARD_BALLS"] = 34] = "STANDARD_BALLS";
      ItemCategories[ItemCategories["DEX_COMPLETION"] = 35] = "DEX_COMPLETION";
      ItemCategories[ItemCategories["SCARVES"] = 36] = "SCARVES";
      ItemCategories[ItemCategories["ALL_MACHINES"] = 37] = "ALL_MACHINES";
      ItemCategories[ItemCategories["FLUTES"] = 38] = "FLUTES";
      ItemCategories[ItemCategories["APRICORN_BALLS"] = 39] = "APRICORN_BALLS";
      ItemCategories[ItemCategories["APRICORN_BOX"] = 40] = "APRICORN_BOX";
      ItemCategories[ItemCategories["DATA_CARDS"] = 41] = "DATA_CARDS";
      ItemCategories[ItemCategories["JEWELS"] = 42] = "JEWELS";
      ItemCategories[ItemCategories["MIRACLE_SHOOTER"] = 43] = "MIRACLE_SHOOTER";
      ItemCategories[ItemCategories["MEGA_STONES"] = 44] = "MEGA_STONES";
      ItemCategories[ItemCategories["MEMORIES"] = 45] = "MEMORIES";
      ItemCategories[ItemCategories["Z_CRYSTALS"] = 46] = "Z_CRYSTALS";
      ItemCategories[ItemCategories["SPECIES_CANDIES"] = 47] = "SPECIES_CANDIES";
      ItemCategories[ItemCategories["CATCHING_BONUS"] = 48] = "CATCHING_BONUS";
      ItemCategories[ItemCategories["DYNAMAX_CRISTALS"] = 49] = "DYNAMAX_CRISTALS";
      ItemCategories[ItemCategories["NATURE_MINTS"] = 50] = "NATURE_MINTS";
      ItemCategories[ItemCategories["CURRY_INGREDIENTS"] = 51] = "CURRY_INGREDIENTS";
    })(exports.ItemCategories || (exports.ItemCategories = {}));
    (function(ItemFlingEffects) {
      ItemFlingEffects[ItemFlingEffects["BADLY_POISON"] = 1] = "BADLY_POISON";
      ItemFlingEffects[ItemFlingEffects["BURN"] = 2] = "BURN";
      ItemFlingEffects[ItemFlingEffects["BERRY_EFFECT"] = 3] = "BERRY_EFFECT";
      ItemFlingEffects[ItemFlingEffects["HERB_EFFECT"] = 4] = "HERB_EFFECT";
      ItemFlingEffects[ItemFlingEffects["PARALYZE"] = 5] = "PARALYZE";
      ItemFlingEffects[ItemFlingEffects["POISON"] = 6] = "POISON";
      ItemFlingEffects[ItemFlingEffects["FLINCH"] = 7] = "FLINCH";
    })(exports.ItemFlingEffects || (exports.ItemFlingEffects = {}));
    (function(ItemPockets) {
      ItemPockets[ItemPockets["MISC"] = 1] = "MISC";
      ItemPockets[ItemPockets["MEDICINE"] = 2] = "MEDICINE";
      ItemPockets[ItemPockets["POKEBALLS"] = 3] = "POKEBALLS";
      ItemPockets[ItemPockets["MACHINES"] = 4] = "MACHINES";
      ItemPockets[ItemPockets["BERRIES"] = 5] = "BERRIES";
      ItemPockets[ItemPockets["MAIL"] = 6] = "MAIL";
      ItemPockets[ItemPockets["BATTLE"] = 7] = "BATTLE";
      ItemPockets[ItemPockets["KEY"] = 8] = "KEY";
    })(exports.ItemPockets || (exports.ItemPockets = {}));
  })(items);
  return items;
}
var hasRequiredConstants;
function requireConstants() {
  if (hasRequiredConstants)
    return constants;
  hasRequiredConstants = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = tslibExports;
    tslib_1.__exportStar(requireBase$1(), exports);
    tslib_1.__exportStar(requireEndpoints(), exports);
    tslib_1.__exportStar(requireBerries(), exports);
    tslib_1.__exportStar(requireContests(), exports);
    tslib_1.__exportStar(requireEncounters(), exports);
    tslib_1.__exportStar(requireEvolutions(), exports);
    tslib_1.__exportStar(requireGames(), exports);
    tslib_1.__exportStar(requireLocations(), exports);
    tslib_1.__exportStar(requireMoves(), exports);
    tslib_1.__exportStar(requirePokemons(), exports);
    tslib_1.__exportStar(requireUtilities(), exports);
    tslib_1.__exportStar(requireItems(), exports);
  })(constants);
  return constants;
}
var base = {};
var cacheExports = {};
var cache = {
  get exports() {
    return cacheExports;
  },
  set exports(v) {
    cacheExports = v;
  }
};
var axiosExports$1 = {};
var axios$1 = {
  get exports() {
    return axiosExports$1;
  },
  set exports(v) {
    axiosExports$1 = v;
  }
};
var axiosExports = {};
var axios = {
  get exports() {
    return axiosExports;
  },
  set exports(v) {
    axiosExports = v;
  }
};
var bind;
var hasRequiredBind;
function requireBind() {
  if (hasRequiredBind)
    return bind;
  hasRequiredBind = 1;
  bind = function bind2(fn, thisArg) {
    return function wrap() {
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
      return fn.apply(thisArg, args);
    };
  };
  return bind;
}
var utils;
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils)
    return utils;
  hasRequiredUtils = 1;
  var bind2 = requireBind();
  var toString = Object.prototype.toString;
  var kindOf = function(cache2) {
    return function(thing) {
      var str = toString.call(thing);
      return cache2[str] || (cache2[str] = str.slice(8, -1).toLowerCase());
    };
  }(/* @__PURE__ */ Object.create(null));
  function kindOfTest(type2) {
    type2 = type2.toLowerCase();
    return function isKindOf(thing) {
      return kindOf(thing) === type2;
    };
  }
  function isArray(val) {
    return Array.isArray(val);
  }
  function isUndefined(val) {
    return typeof val === "undefined";
  }
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
  }
  var isArrayBuffer = kindOfTest("ArrayBuffer");
  function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }
  function isString(val) {
    return typeof val === "string";
  }
  function isNumber(val) {
    return typeof val === "number";
  }
  function isObject(val) {
    return val !== null && typeof val === "object";
  }
  function isPlainObject(val) {
    if (kindOf(val) !== "object") {
      return false;
    }
    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
  }
  var isDate = kindOfTest("Date");
  var isFile = kindOfTest("File");
  var isBlob = kindOfTest("Blob");
  var isFileList = kindOfTest("FileList");
  function isFunction(val) {
    return toString.call(val) === "[object Function]";
  }
  function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
  }
  function isFormData(thing) {
    var pattern = "[object FormData]";
    return thing && (typeof FormData === "function" && thing instanceof FormData || toString.call(thing) === pattern || isFunction(thing.toString) && thing.toString() === pattern);
  }
  var isURLSearchParams = kindOfTest("URLSearchParams");
  function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
  }
  function isStandardBrowserEnv() {
    if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
      return false;
    }
    return typeof window !== "undefined" && typeof document !== "undefined";
  }
  function forEach(obj, fn) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (var i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  function merge() {
    var result = {};
    function assignValue(val, key) {
      if (isPlainObject(result[key]) && isPlainObject(val)) {
        result[key] = merge(result[key], val);
      } else if (isPlainObject(val)) {
        result[key] = merge({}, val);
      } else if (isArray(val)) {
        result[key] = val.slice();
      } else {
        result[key] = val;
      }
    }
    for (var i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }
    return result;
  }
  function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
      if (thisArg && typeof val === "function") {
        a[key] = bind2(val, thisArg);
      } else {
        a[key] = val;
      }
    });
    return a;
  }
  function stripBOM(content) {
    if (content.charCodeAt(0) === 65279) {
      content = content.slice(1);
    }
    return content;
  }
  function inherits(constructor, superConstructor, props, descriptors) {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    props && Object.assign(constructor.prototype, props);
  }
  function toFlatObject(sourceObj, destObj, filter) {
    var props;
    var i;
    var prop;
    var merged = {};
    destObj = destObj || {};
    do {
      props = Object.getOwnPropertyNames(sourceObj);
      i = props.length;
      while (i-- > 0) {
        prop = props[i];
        if (!merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = Object.getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
  }
  function endsWith(str, searchString, position) {
    str = String(str);
    if (position === void 0 || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    var lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  }
  function toArray(thing) {
    if (!thing)
      return null;
    var i = thing.length;
    if (isUndefined(i))
      return null;
    var arr = new Array(i);
    while (i-- > 0) {
      arr[i] = thing[i];
    }
    return arr;
  }
  var isTypedArray = function(TypedArray) {
    return function(thing) {
      return TypedArray && thing instanceof TypedArray;
    };
  }(typeof Uint8Array !== "undefined" && Object.getPrototypeOf(Uint8Array));
  utils = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isObject,
    isPlainObject,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isFunction,
    isStream,
    isURLSearchParams,
    isStandardBrowserEnv,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    isTypedArray,
    isFileList
  };
  return utils;
}
var buildURL;
var hasRequiredBuildURL;
function requireBuildURL() {
  if (hasRequiredBuildURL)
    return buildURL;
  hasRequiredBuildURL = 1;
  var utils2 = requireUtils();
  function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  buildURL = function buildURL2(url, params, paramsSerializer) {
    if (!params) {
      return url;
    }
    var serializedParams;
    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (utils2.isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      var parts = [];
      utils2.forEach(params, function serialize(val, key) {
        if (val === null || typeof val === "undefined") {
          return;
        }
        if (utils2.isArray(val)) {
          key = key + "[]";
        } else {
          val = [val];
        }
        utils2.forEach(val, function parseValue(v) {
          if (utils2.isDate(v)) {
            v = v.toISOString();
          } else if (utils2.isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(encode(key) + "=" + encode(v));
        });
      });
      serializedParams = parts.join("&");
    }
    if (serializedParams) {
      var hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  };
  return buildURL;
}
var InterceptorManager_1;
var hasRequiredInterceptorManager;
function requireInterceptorManager() {
  if (hasRequiredInterceptorManager)
    return InterceptorManager_1;
  hasRequiredInterceptorManager = 1;
  var utils2 = requireUtils();
  function InterceptorManager() {
    this.handlers = [];
  }
  InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  };
  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  InterceptorManager.prototype.forEach = function forEach(fn) {
    utils2.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  };
  InterceptorManager_1 = InterceptorManager;
  return InterceptorManager_1;
}
var normalizeHeaderName;
var hasRequiredNormalizeHeaderName;
function requireNormalizeHeaderName() {
  if (hasRequiredNormalizeHeaderName)
    return normalizeHeaderName;
  hasRequiredNormalizeHeaderName = 1;
  var utils2 = requireUtils();
  normalizeHeaderName = function normalizeHeaderName2(headers, normalizedName) {
    utils2.forEach(headers, function processHeader(value, name2) {
      if (name2 !== normalizedName && name2.toUpperCase() === normalizedName.toUpperCase()) {
        headers[normalizedName] = value;
        delete headers[name2];
      }
    });
  };
  return normalizeHeaderName;
}
var AxiosError_1;
var hasRequiredAxiosError;
function requireAxiosError() {
  if (hasRequiredAxiosError)
    return AxiosError_1;
  hasRequiredAxiosError = 1;
  var utils2 = requireUtils();
  function AxiosError(message, code, config, request, response) {
    Error.call(this);
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
  }
  utils2.inherits(AxiosError, Error, {
    toJSON: function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: this.config,
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  var prototype = AxiosError.prototype;
  var descriptors = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED"
    // eslint-disable-next-line func-names
  ].forEach(function(code) {
    descriptors[code] = { value: code };
  });
  Object.defineProperties(AxiosError, descriptors);
  Object.defineProperty(prototype, "isAxiosError", { value: true });
  AxiosError.from = function(error, code, config, request, response, customProps) {
    var axiosError = Object.create(prototype);
    utils2.toFlatObject(error, axiosError, function filter(obj) {
      return obj !== Error.prototype;
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  };
  AxiosError_1 = AxiosError;
  return AxiosError_1;
}
var transitional;
var hasRequiredTransitional;
function requireTransitional() {
  if (hasRequiredTransitional)
    return transitional;
  hasRequiredTransitional = 1;
  transitional = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };
  return transitional;
}
var toFormData_1;
var hasRequiredToFormData;
function requireToFormData() {
  if (hasRequiredToFormData)
    return toFormData_1;
  hasRequiredToFormData = 1;
  var utils2 = requireUtils();
  function toFormData(obj, formData) {
    formData = formData || new FormData();
    var stack = [];
    function convertValue(value) {
      if (value === null)
        return "";
      if (utils2.isDate(value)) {
        return value.toISOString();
      }
      if (utils2.isArrayBuffer(value) || utils2.isTypedArray(value)) {
        return typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
      }
      return value;
    }
    function build(data2, parentKey) {
      if (utils2.isPlainObject(data2) || utils2.isArray(data2)) {
        if (stack.indexOf(data2) !== -1) {
          throw Error("Circular reference detected in " + parentKey);
        }
        stack.push(data2);
        utils2.forEach(data2, function each(value, key) {
          if (utils2.isUndefined(value))
            return;
          var fullKey = parentKey ? parentKey + "." + key : key;
          var arr;
          if (value && !parentKey && typeof value === "object") {
            if (utils2.endsWith(key, "{}")) {
              value = JSON.stringify(value);
            } else if (utils2.endsWith(key, "[]") && (arr = utils2.toArray(value))) {
              arr.forEach(function(el) {
                !utils2.isUndefined(el) && formData.append(fullKey, convertValue(el));
              });
              return;
            }
          }
          build(value, fullKey);
        });
        stack.pop();
      } else {
        formData.append(parentKey, convertValue(data2));
      }
    }
    build(obj);
    return formData;
  }
  toFormData_1 = toFormData;
  return toFormData_1;
}
var settle;
var hasRequiredSettle;
function requireSettle() {
  if (hasRequiredSettle)
    return settle;
  hasRequiredSettle = 1;
  var AxiosError = requireAxiosError();
  settle = function settle2(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError(
        "Request failed with status code " + response.status,
        [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      ));
    }
  };
  return settle;
}
var cookies;
var hasRequiredCookies;
function requireCookies() {
  if (hasRequiredCookies)
    return cookies;
  hasRequiredCookies = 1;
  var utils2 = requireUtils();
  cookies = utils2.isStandardBrowserEnv() ? (
    // Standard browser envs support document.cookie
    function standardBrowserEnv() {
      return {
        write: function write(name2, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name2 + "=" + encodeURIComponent(value));
          if (utils2.isNumber(expires)) {
            cookie.push("expires=" + new Date(expires).toGMTString());
          }
          if (utils2.isString(path)) {
            cookie.push("path=" + path);
          }
          if (utils2.isString(domain)) {
            cookie.push("domain=" + domain);
          }
          if (secure === true) {
            cookie.push("secure");
          }
          document.cookie = cookie.join("; ");
        },
        read: function read(name2) {
          var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name2 + ")=([^;]*)"));
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name2) {
          this.write(name2, "", Date.now() - 864e5);
        }
      };
    }()
  ) : (
    // Non standard browser env (web workers, react-native) lack needed support.
    function nonStandardBrowserEnv() {
      return {
        write: function write() {
        },
        read: function read() {
          return null;
        },
        remove: function remove() {
        }
      };
    }()
  );
  return cookies;
}
var isAbsoluteURL;
var hasRequiredIsAbsoluteURL;
function requireIsAbsoluteURL() {
  if (hasRequiredIsAbsoluteURL)
    return isAbsoluteURL;
  hasRequiredIsAbsoluteURL = 1;
  isAbsoluteURL = function isAbsoluteURL2(url) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  };
  return isAbsoluteURL;
}
var combineURLs;
var hasRequiredCombineURLs;
function requireCombineURLs() {
  if (hasRequiredCombineURLs)
    return combineURLs;
  hasRequiredCombineURLs = 1;
  combineURLs = function combineURLs2(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  };
  return combineURLs;
}
var buildFullPath;
var hasRequiredBuildFullPath;
function requireBuildFullPath() {
  if (hasRequiredBuildFullPath)
    return buildFullPath;
  hasRequiredBuildFullPath = 1;
  var isAbsoluteURL2 = requireIsAbsoluteURL();
  var combineURLs2 = requireCombineURLs();
  buildFullPath = function buildFullPath2(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL2(requestedURL)) {
      return combineURLs2(baseURL, requestedURL);
    }
    return requestedURL;
  };
  return buildFullPath;
}
var parseHeaders;
var hasRequiredParseHeaders;
function requireParseHeaders() {
  if (hasRequiredParseHeaders)
    return parseHeaders;
  hasRequiredParseHeaders = 1;
  var utils2 = requireUtils();
  var ignoreDuplicateOf = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  parseHeaders = function parseHeaders2(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
    if (!headers) {
      return parsed;
    }
    utils2.forEach(headers.split("\n"), function parser(line) {
      i = line.indexOf(":");
      key = utils2.trim(line.substr(0, i)).toLowerCase();
      val = utils2.trim(line.substr(i + 1));
      if (key) {
        if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
          return;
        }
        if (key === "set-cookie") {
          parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
        } else {
          parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
        }
      }
    });
    return parsed;
  };
  return parseHeaders;
}
var isURLSameOrigin;
var hasRequiredIsURLSameOrigin;
function requireIsURLSameOrigin() {
  if (hasRequiredIsURLSameOrigin)
    return isURLSameOrigin;
  hasRequiredIsURLSameOrigin = 1;
  var utils2 = requireUtils();
  isURLSameOrigin = utils2.isStandardBrowserEnv() ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement("a");
      var originURL;
      function resolveURL(url) {
        var href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin2(requestURL) {
        var parsed = utils2.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    function nonStandardBrowserEnv() {
      return function isURLSameOrigin2() {
        return true;
      };
    }()
  );
  return isURLSameOrigin;
}
var CanceledError_1;
var hasRequiredCanceledError;
function requireCanceledError() {
  if (hasRequiredCanceledError)
    return CanceledError_1;
  hasRequiredCanceledError = 1;
  var AxiosError = requireAxiosError();
  var utils2 = requireUtils();
  function CanceledError(message) {
    AxiosError.call(this, message == null ? "canceled" : message, AxiosError.ERR_CANCELED);
    this.name = "CanceledError";
  }
  utils2.inherits(CanceledError, AxiosError, {
    __CANCEL__: true
  });
  CanceledError_1 = CanceledError;
  return CanceledError_1;
}
var parseProtocol;
var hasRequiredParseProtocol;
function requireParseProtocol() {
  if (hasRequiredParseProtocol)
    return parseProtocol;
  hasRequiredParseProtocol = 1;
  parseProtocol = function parseProtocol2(url) {
    var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
  };
  return parseProtocol;
}
var xhr;
var hasRequiredXhr;
function requireXhr() {
  if (hasRequiredXhr)
    return xhr;
  hasRequiredXhr = 1;
  var utils2 = requireUtils();
  var settle2 = requireSettle();
  var cookies2 = requireCookies();
  var buildURL2 = requireBuildURL();
  var buildFullPath2 = requireBuildFullPath();
  var parseHeaders2 = requireParseHeaders();
  var isURLSameOrigin2 = requireIsURLSameOrigin();
  var transitionalDefaults = requireTransitional();
  var AxiosError = requireAxiosError();
  var CanceledError = requireCanceledError();
  var parseProtocol2 = requireParseProtocol();
  xhr = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      var requestData = config.data;
      var requestHeaders = config.headers;
      var responseType = config.responseType;
      var onCanceled;
      function done() {
        if (config.cancelToken) {
          config.cancelToken.unsubscribe(onCanceled);
        }
        if (config.signal) {
          config.signal.removeEventListener("abort", onCanceled);
        }
      }
      if (utils2.isFormData(requestData) && utils2.isStandardBrowserEnv()) {
        delete requestHeaders["Content-Type"];
      }
      var request = new XMLHttpRequest();
      if (config.auth) {
        var username = config.auth.username || "";
        var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
        requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
      }
      var fullPath = buildFullPath2(config.baseURL, config.url);
      request.open(config.method.toUpperCase(), buildURL2(fullPath, config.params, config.paramsSerializer), true);
      request.timeout = config.timeout;
      function onloadend() {
        if (!request) {
          return;
        }
        var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders2(request.getAllResponseHeaders()) : null;
        var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
        var response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request
        };
        settle2(function _resolve(value) {
          resolve(value);
          done();
        }, function _reject(err) {
          reject(err);
          done();
        }, response);
        request = null;
      }
      if ("onloadend" in request) {
        request.onloadend = onloadend;
      } else {
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
            return;
          }
          setTimeout(onloadend);
        };
      }
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config, request));
        request = null;
      };
      request.onerror = function handleError() {
        reject(new AxiosError("Network Error", AxiosError.ERR_NETWORK, config, request, request));
        request = null;
      };
      request.ontimeout = function handleTimeout() {
        var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
        var transitional2 = config.transitional || transitionalDefaults;
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(new AxiosError(
          timeoutErrorMessage,
          transitional2.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
          config,
          request
        ));
        request = null;
      };
      if (utils2.isStandardBrowserEnv()) {
        var xsrfValue = (config.withCredentials || isURLSameOrigin2(fullPath)) && config.xsrfCookieName ? cookies2.read(config.xsrfCookieName) : void 0;
        if (xsrfValue) {
          requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
      }
      if ("setRequestHeader" in request) {
        utils2.forEach(requestHeaders, function setRequestHeader(val, key) {
          if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
            delete requestHeaders[key];
          } else {
            request.setRequestHeader(key, val);
          }
        });
      }
      if (!utils2.isUndefined(config.withCredentials)) {
        request.withCredentials = !!config.withCredentials;
      }
      if (responseType && responseType !== "json") {
        request.responseType = config.responseType;
      }
      if (typeof config.onDownloadProgress === "function") {
        request.addEventListener("progress", config.onDownloadProgress);
      }
      if (typeof config.onUploadProgress === "function" && request.upload) {
        request.upload.addEventListener("progress", config.onUploadProgress);
      }
      if (config.cancelToken || config.signal) {
        onCanceled = function(cancel) {
          if (!request) {
            return;
          }
          reject(!cancel || cancel && cancel.type ? new CanceledError() : cancel);
          request.abort();
          request = null;
        };
        config.cancelToken && config.cancelToken.subscribe(onCanceled);
        if (config.signal) {
          config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
      }
      if (!requestData) {
        requestData = null;
      }
      var protocol = parseProtocol2(fullPath);
      if (protocol && ["http", "https", "file"].indexOf(protocol) === -1) {
        reject(new AxiosError("Unsupported protocol " + protocol + ":", AxiosError.ERR_BAD_REQUEST, config));
        return;
      }
      request.send(requestData);
    });
  };
  return xhr;
}
var _null;
var hasRequired_null;
function require_null() {
  if (hasRequired_null)
    return _null;
  hasRequired_null = 1;
  _null = null;
  return _null;
}
var defaults_1;
var hasRequiredDefaults;
function requireDefaults() {
  if (hasRequiredDefaults)
    return defaults_1;
  hasRequiredDefaults = 1;
  var utils2 = requireUtils();
  var normalizeHeaderName2 = requireNormalizeHeaderName();
  var AxiosError = requireAxiosError();
  var transitionalDefaults = requireTransitional();
  var toFormData = requireToFormData();
  var DEFAULT_CONTENT_TYPE = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  function setContentTypeIfUnset(headers, value) {
    if (!utils2.isUndefined(headers) && utils2.isUndefined(headers["Content-Type"])) {
      headers["Content-Type"] = value;
    }
  }
  function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== "undefined") {
      adapter = requireXhr();
    } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
      adapter = requireXhr();
    }
    return adapter;
  }
  function stringifySafely(rawValue, parser, encoder) {
    if (utils2.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils2.trim(rawValue);
      } catch (e) {
        if (e.name !== "SyntaxError") {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  var defaults = {
    transitional: transitionalDefaults,
    adapter: getDefaultAdapter(),
    transformRequest: [function transformRequest(data2, headers) {
      normalizeHeaderName2(headers, "Accept");
      normalizeHeaderName2(headers, "Content-Type");
      if (utils2.isFormData(data2) || utils2.isArrayBuffer(data2) || utils2.isBuffer(data2) || utils2.isStream(data2) || utils2.isFile(data2) || utils2.isBlob(data2)) {
        return data2;
      }
      if (utils2.isArrayBufferView(data2)) {
        return data2.buffer;
      }
      if (utils2.isURLSearchParams(data2)) {
        setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
        return data2.toString();
      }
      var isObjectPayload = utils2.isObject(data2);
      var contentType = headers && headers["Content-Type"];
      var isFileList;
      if ((isFileList = utils2.isFileList(data2)) || isObjectPayload && contentType === "multipart/form-data") {
        var _FormData = this.env && this.env.FormData;
        return toFormData(isFileList ? { "files[]": data2 } : data2, _FormData && new _FormData());
      } else if (isObjectPayload || contentType === "application/json") {
        setContentTypeIfUnset(headers, "application/json");
        return stringifySafely(data2);
      }
      return data2;
    }],
    transformResponse: [function transformResponse(data2) {
      var transitional2 = this.transitional || defaults.transitional;
      var silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
      var forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
      var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
      if (strictJSONParsing || forcedJSONParsing && utils2.isString(data2) && data2.length) {
        try {
          return JSON.parse(data2);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === "SyntaxError") {
              throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }
      return data2;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: require_null()
    },
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        "Accept": "application/json, text/plain, */*"
      }
    }
  };
  utils2.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
  });
  utils2.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    defaults.headers[method] = utils2.merge(DEFAULT_CONTENT_TYPE);
  });
  defaults_1 = defaults;
  return defaults_1;
}
var transformData;
var hasRequiredTransformData;
function requireTransformData() {
  if (hasRequiredTransformData)
    return transformData;
  hasRequiredTransformData = 1;
  var utils2 = requireUtils();
  var defaults = requireDefaults();
  transformData = function transformData2(data2, headers, fns) {
    var context = this || defaults;
    utils2.forEach(fns, function transform(fn) {
      data2 = fn.call(context, data2, headers);
    });
    return data2;
  };
  return transformData;
}
var isCancel;
var hasRequiredIsCancel;
function requireIsCancel() {
  if (hasRequiredIsCancel)
    return isCancel;
  hasRequiredIsCancel = 1;
  isCancel = function isCancel2(value) {
    return !!(value && value.__CANCEL__);
  };
  return isCancel;
}
var dispatchRequest;
var hasRequiredDispatchRequest;
function requireDispatchRequest() {
  if (hasRequiredDispatchRequest)
    return dispatchRequest;
  hasRequiredDispatchRequest = 1;
  var utils2 = requireUtils();
  var transformData2 = requireTransformData();
  var isCancel2 = requireIsCancel();
  var defaults = requireDefaults();
  var CanceledError = requireCanceledError();
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new CanceledError();
    }
  }
  dispatchRequest = function dispatchRequest2(config) {
    throwIfCancellationRequested(config);
    config.headers = config.headers || {};
    config.data = transformData2.call(
      config,
      config.data,
      config.headers,
      config.transformRequest
    );
    config.headers = utils2.merge(
      config.headers.common || {},
      config.headers[config.method] || {},
      config.headers
    );
    utils2.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      function cleanHeaderConfig(method) {
        delete config.headers[method];
      }
    );
    var adapter = config.adapter || defaults.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      response.data = transformData2.call(
        config,
        response.data,
        response.headers,
        config.transformResponse
      );
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel2(reason)) {
        throwIfCancellationRequested(config);
        if (reason && reason.response) {
          reason.response.data = transformData2.call(
            config,
            reason.response.data,
            reason.response.headers,
            config.transformResponse
          );
        }
      }
      return Promise.reject(reason);
    });
  };
  return dispatchRequest;
}
var mergeConfig;
var hasRequiredMergeConfig;
function requireMergeConfig() {
  if (hasRequiredMergeConfig)
    return mergeConfig;
  hasRequiredMergeConfig = 1;
  var utils2 = requireUtils();
  mergeConfig = function mergeConfig2(config1, config2) {
    config2 = config2 || {};
    var config = {};
    function getMergedValue(target, source) {
      if (utils2.isPlainObject(target) && utils2.isPlainObject(source)) {
        return utils2.merge(target, source);
      } else if (utils2.isPlainObject(source)) {
        return utils2.merge({}, source);
      } else if (utils2.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(prop) {
      if (!utils2.isUndefined(config2[prop])) {
        return getMergedValue(config1[prop], config2[prop]);
      } else if (!utils2.isUndefined(config1[prop])) {
        return getMergedValue(void 0, config1[prop]);
      }
    }
    function valueFromConfig2(prop) {
      if (!utils2.isUndefined(config2[prop])) {
        return getMergedValue(void 0, config2[prop]);
      }
    }
    function defaultToConfig2(prop) {
      if (!utils2.isUndefined(config2[prop])) {
        return getMergedValue(void 0, config2[prop]);
      } else if (!utils2.isUndefined(config1[prop])) {
        return getMergedValue(void 0, config1[prop]);
      }
    }
    function mergeDirectKeys(prop) {
      if (prop in config2) {
        return getMergedValue(config1[prop], config2[prop]);
      } else if (prop in config1) {
        return getMergedValue(void 0, config1[prop]);
      }
    }
    var mergeMap = {
      "url": valueFromConfig2,
      "method": valueFromConfig2,
      "data": valueFromConfig2,
      "baseURL": defaultToConfig2,
      "transformRequest": defaultToConfig2,
      "transformResponse": defaultToConfig2,
      "paramsSerializer": defaultToConfig2,
      "timeout": defaultToConfig2,
      "timeoutMessage": defaultToConfig2,
      "withCredentials": defaultToConfig2,
      "adapter": defaultToConfig2,
      "responseType": defaultToConfig2,
      "xsrfCookieName": defaultToConfig2,
      "xsrfHeaderName": defaultToConfig2,
      "onUploadProgress": defaultToConfig2,
      "onDownloadProgress": defaultToConfig2,
      "decompress": defaultToConfig2,
      "maxContentLength": defaultToConfig2,
      "maxBodyLength": defaultToConfig2,
      "beforeRedirect": defaultToConfig2,
      "transport": defaultToConfig2,
      "httpAgent": defaultToConfig2,
      "httpsAgent": defaultToConfig2,
      "cancelToken": defaultToConfig2,
      "socketPath": defaultToConfig2,
      "responseEncoding": defaultToConfig2,
      "validateStatus": mergeDirectKeys
    };
    utils2.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
      var merge = mergeMap[prop] || mergeDeepProperties;
      var configValue = merge(prop);
      utils2.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
  };
  return mergeConfig;
}
var data;
var hasRequiredData;
function requireData() {
  if (hasRequiredData)
    return data;
  hasRequiredData = 1;
  data = {
    "version": "0.27.2"
  };
  return data;
}
var validator;
var hasRequiredValidator;
function requireValidator() {
  if (hasRequiredValidator)
    return validator;
  hasRequiredValidator = 1;
  var VERSION = requireData().version;
  var AxiosError = requireAxiosError();
  var validators = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type2, i) {
    validators[type2] = function validator2(thing) {
      return typeof thing === type2 || "a" + (i < 1 ? "n " : " ") + type2;
    };
  });
  var deprecatedWarnings = {};
  validators.transitional = function transitional2(validator2, version2, message) {
    function formatMessage(opt, desc) {
      return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    return function(value, opt, opts) {
      if (validator2 === false) {
        throw new AxiosError(
          formatMessage(opt, " has been removed" + (version2 ? " in " + version2 : "")),
          AxiosError.ERR_DEPRECATED
        );
      }
      if (version2 && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        console.warn(
          formatMessage(
            opt,
            " has been deprecated since v" + version2 + " and will be removed in the near future"
          )
        );
      }
      return validator2 ? validator2(value, opt, opts) : true;
    };
  };
  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") {
      throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
    }
    var keys = Object.keys(options);
    var i = keys.length;
    while (i-- > 0) {
      var opt = keys[i];
      var validator2 = schema[opt];
      if (validator2) {
        var value = options[opt];
        var result = value === void 0 || validator2(value, opt, options);
        if (result !== true) {
          throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
      }
    }
  }
  validator = {
    assertOptions,
    validators
  };
  return validator;
}
var Axios_1;
var hasRequiredAxios$2;
function requireAxios$2() {
  if (hasRequiredAxios$2)
    return Axios_1;
  hasRequiredAxios$2 = 1;
  var utils2 = requireUtils();
  var buildURL2 = requireBuildURL();
  var InterceptorManager = requireInterceptorManager();
  var dispatchRequest2 = requireDispatchRequest();
  var mergeConfig2 = requireMergeConfig();
  var buildFullPath2 = requireBuildFullPath();
  var validator2 = requireValidator();
  var validators = validator2.validators;
  function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }
  Axios.prototype.request = function request(configOrUrl, config) {
    if (typeof configOrUrl === "string") {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig2(this.defaults, config);
    if (config.method) {
      config.method = config.method.toLowerCase();
    } else if (this.defaults.method) {
      config.method = this.defaults.method.toLowerCase();
    } else {
      config.method = "get";
    }
    var transitional2 = config.transitional;
    if (transitional2 !== void 0) {
      validator2.assertOptions(transitional2, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }
    var requestInterceptorChain = [];
    var synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    var responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    var promise;
    if (!synchronousRequestInterceptors) {
      var chain = [dispatchRequest2, void 0];
      Array.prototype.unshift.apply(chain, requestInterceptorChain);
      chain = chain.concat(responseInterceptorChain);
      promise = Promise.resolve(config);
      while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift());
      }
      return promise;
    }
    var newConfig = config;
    while (requestInterceptorChain.length) {
      var onFulfilled = requestInterceptorChain.shift();
      var onRejected = requestInterceptorChain.shift();
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected(error);
        break;
      }
    }
    try {
      promise = dispatchRequest2(newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    while (responseInterceptorChain.length) {
      promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
    }
    return promise;
  };
  Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig2(this.defaults, config);
    var fullPath = buildFullPath2(config.baseURL, config.url);
    return buildURL2(fullPath, config.params, config.paramsSerializer);
  };
  utils2.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
    Axios.prototype[method] = function(url, config) {
      return this.request(mergeConfig2(config || {}, {
        method,
        url,
        data: (config || {}).data
      }));
    };
  });
  utils2.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    function generateHTTPMethod(isForm) {
      return function httpMethod(url, data2, config) {
        return this.request(mergeConfig2(config || {}, {
          method,
          headers: isForm ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url,
          data: data2
        }));
      };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
  });
  Axios_1 = Axios;
  return Axios_1;
}
var CancelToken_1;
var hasRequiredCancelToken;
function requireCancelToken() {
  if (hasRequiredCancelToken)
    return CancelToken_1;
  hasRequiredCancelToken = 1;
  var CanceledError = requireCanceledError();
  function CancelToken(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    var token = this;
    this.promise.then(function(cancel) {
      if (!token._listeners)
        return;
      var i;
      var l = token._listeners.length;
      for (i = 0; i < l; i++) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });
    this.promise.then = function(onfulfilled) {
      var _resolve;
      var promise = new Promise(function(resolve) {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message) {
      if (token.reason) {
        return;
      }
      token.reason = new CanceledError(message);
      resolvePromise(token.reason);
    });
  }
  CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  };
  CancelToken.prototype.subscribe = function subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  };
  CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    var index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  };
  CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  };
  CancelToken_1 = CancelToken;
  return CancelToken_1;
}
var spread;
var hasRequiredSpread;
function requireSpread() {
  if (hasRequiredSpread)
    return spread;
  hasRequiredSpread = 1;
  spread = function spread2(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  };
  return spread;
}
var isAxiosError;
var hasRequiredIsAxiosError;
function requireIsAxiosError() {
  if (hasRequiredIsAxiosError)
    return isAxiosError;
  hasRequiredIsAxiosError = 1;
  var utils2 = requireUtils();
  isAxiosError = function isAxiosError2(payload) {
    return utils2.isObject(payload) && payload.isAxiosError === true;
  };
  return isAxiosError;
}
var hasRequiredAxios$1;
function requireAxios$1() {
  if (hasRequiredAxios$1)
    return axiosExports;
  hasRequiredAxios$1 = 1;
  var utils2 = requireUtils();
  var bind2 = requireBind();
  var Axios = requireAxios$2();
  var mergeConfig2 = requireMergeConfig();
  var defaults = requireDefaults();
  function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance2 = bind2(Axios.prototype.request, context);
    utils2.extend(instance2, Axios.prototype, context);
    utils2.extend(instance2, context);
    instance2.create = function create(instanceConfig) {
      return createInstance(mergeConfig2(defaultConfig, instanceConfig));
    };
    return instance2;
  }
  var axios$12 = createInstance(defaults);
  axios$12.Axios = Axios;
  axios$12.CanceledError = requireCanceledError();
  axios$12.CancelToken = requireCancelToken();
  axios$12.isCancel = requireIsCancel();
  axios$12.VERSION = requireData().version;
  axios$12.toFormData = requireToFormData();
  axios$12.AxiosError = requireAxiosError();
  axios$12.Cancel = axios$12.CanceledError;
  axios$12.all = function all(promises) {
    return Promise.all(promises);
  };
  axios$12.spread = requireSpread();
  axios$12.isAxiosError = requireIsAxiosError();
  axios.exports = axios$12;
  axiosExports.default = axios$12;
  return axiosExports;
}
var hasRequiredAxios;
function requireAxios() {
  if (hasRequiredAxios)
    return axiosExports$1;
  hasRequiredAxios = 1;
  (function(module) {
    module.exports = requireAxios$1();
  })(axios$1);
  return axiosExports$1;
}
var hasRequiredCache;
function requireCache() {
  if (hasRequiredCache)
    return cacheExports;
  hasRequiredCache = 1;
  (function(module, exports) {
    (function webpackUniversalModuleDefinition(root, factory) {
      module.exports = factory(requireAxios());
    })(window, function(__WEBPACK_EXTERNAL_MODULE_axios__) {
      return (
        /******/
        function(modules) {
          var installedModules = {};
          function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
              return installedModules[moduleId].exports;
            }
            var module2 = installedModules[moduleId] = {
              /******/
              i: moduleId,
              /******/
              l: false,
              /******/
              exports: {}
              /******/
            };
            modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
            module2.l = true;
            return module2.exports;
          }
          __webpack_require__.m = modules;
          __webpack_require__.c = installedModules;
          __webpack_require__.d = function(exports2, name2, getter) {
            if (!__webpack_require__.o(exports2, name2)) {
              Object.defineProperty(exports2, name2, { enumerable: true, get: getter });
            }
          };
          __webpack_require__.r = function(exports2) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
              Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
            }
            Object.defineProperty(exports2, "__esModule", { value: true });
          };
          __webpack_require__.t = function(value, mode) {
            if (mode & 1)
              value = __webpack_require__(value);
            if (mode & 8)
              return value;
            if (mode & 4 && typeof value === "object" && value && value.__esModule)
              return value;
            var ns = /* @__PURE__ */ Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, "default", { enumerable: true, value });
            if (mode & 2 && typeof value != "string")
              for (var key in value)
                __webpack_require__.d(ns, key, function(key2) {
                  return value[key2];
                }.bind(null, key));
            return ns;
          };
          __webpack_require__.n = function(module2) {
            var getter = module2 && module2.__esModule ? (
              /******/
              function getDefault() {
                return module2["default"];
              }
            ) : (
              /******/
              function getModuleExports() {
                return module2;
              }
            );
            __webpack_require__.d(getter, "a", getter);
            return getter;
          };
          __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          };
          __webpack_require__.p = "";
          return __webpack_require__(__webpack_require__.s = "./src/index.js");
        }({
          /***/
          "./node_modules/cache-control-esm/index.js": (
            /*!*************************************************!*\
              !*** ./node_modules/cache-control-esm/index.js ***!
              \*************************************************/
            /*! exports provided: CacheControl, parse, format, default */
            /***/
            function(module2, __webpack_exports__, __webpack_require__) {
              __webpack_require__.r(__webpack_exports__);
              __webpack_require__.d(__webpack_exports__, "CacheControl", function() {
                return CacheControl;
              });
              __webpack_require__.d(__webpack_exports__, "parse", function() {
                return parse;
              });
              __webpack_require__.d(__webpack_exports__, "format", function() {
                return format;
              });
              __webpack_require__(
                /*! core-js/modules/es6.array.from */
                "./node_modules/core-js/modules/es6.array.from.js"
              );
              __webpack_require__(
                /*! core-js/modules/es6.function.name */
                "./node_modules/core-js/modules/es6.function.name.js"
              );
              __webpack_require__(
                /*! core-js/modules/es6.object.to-string */
                "./node_modules/core-js/modules/es6.object.to-string.js"
              );
              __webpack_require__(
                /*! core-js/modules/web.dom.iterable */
                "./node_modules/core-js/modules/web.dom.iterable.js"
              );
              __webpack_require__(
                /*! core-js/modules/es7.symbol.async-iterator */
                "./node_modules/core-js/modules/es7.symbol.async-iterator.js"
              );
              __webpack_require__(
                /*! core-js/modules/es6.symbol */
                "./node_modules/core-js/modules/es6.symbol.js"
              );
              __webpack_require__(
                /*! core-js/modules/es6.regexp.split */
                "./node_modules/core-js/modules/es6.regexp.split.js"
              );
              __webpack_require__(
                /*! core-js/modules/es6.number.is-finite */
                "./node_modules/core-js/modules/es6.number.is-finite.js"
              );
              function _slicedToArray(arr, i) {
                return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
              }
              function _nonIterableRest() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              function _unsupportedIterableToArray(o, minLen) {
                if (!o)
                  return;
                if (typeof o === "string")
                  return _arrayLikeToArray(o, minLen);
                var n = Object.prototype.toString.call(o).slice(8, -1);
                if (n === "Object" && o.constructor)
                  n = o.constructor.name;
                if (n === "Map" || n === "Set")
                  return Array.from(o);
                if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                  return _arrayLikeToArray(o, minLen);
              }
              function _arrayLikeToArray(arr, len) {
                if (len == null || len > arr.length)
                  len = arr.length;
                for (var i = 0, arr2 = new Array(len); i < len; i++) {
                  arr2[i] = arr[i];
                }
                return arr2;
              }
              function _iterableToArrayLimit(arr, i) {
                if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
                  return;
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = void 0;
                try {
                  for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);
                    if (i && _arr.length === i)
                      break;
                  }
                } catch (err) {
                  _d = true;
                  _e = err;
                } finally {
                  try {
                    if (!_n && _i["return"] != null)
                      _i["return"]();
                  } finally {
                    if (_d)
                      throw _e;
                  }
                }
                return _arr;
              }
              function _arrayWithHoles(arr) {
                if (Array.isArray(arr))
                  return arr;
              }
              function _classCallCheck(instance2, Constructor) {
                if (!(instance2 instanceof Constructor)) {
                  throw new TypeError("Cannot call a class as a function");
                }
              }
              function _defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor)
                    descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              function _createClass(Constructor, protoProps, staticProps) {
                if (protoProps)
                  _defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                  _defineProperties(Constructor, staticProps);
                return Constructor;
              }
              var HEADER_REGEXP = /([a-zA-Z][a-zA-Z_-]*)\s*(?:=(?:"([^"]*)"|([^ \t",;]*)))?/g;
              var STRINGS = {
                maxAge: "max-age",
                sharedMaxAge: "s-maxage",
                maxStale: "max-stale",
                minFresh: "min-fresh",
                immutable: "immutable",
                mustRevalidate: "must-revalidate",
                noCache: "no-cache",
                noStore: "no-store",
                noTransform: "no-transform",
                onlyIfCached: "only-if-cached",
                "private": "private",
                proxyRevalidate: "proxy-revalidate",
                "public": "public"
              };
              function parseBooleanOnly(value) {
                return value === null;
              }
              function parseDuration(value) {
                if (!value) {
                  return null;
                }
                var duration = parseInt(value, 10);
                if (!Number.isFinite(duration) || duration < 0) {
                  return null;
                }
                return duration;
              }
              var CacheControl = /* @__PURE__ */ function() {
                function CacheControl2() {
                  _classCallCheck(this, CacheControl2);
                  this.maxAge = null;
                  this.sharedMaxAge = null;
                  this.maxStale = null;
                  this.maxStaleDuration = null;
                  this.minFresh = null;
                  this.immutable = null;
                  this.mustRevalidate = null;
                  this.noCache = null;
                  this.noStore = null;
                  this.noTransform = null;
                  this.onlyIfCached = null;
                  this["private"] = null;
                  this.proxyRevalidate = null;
                  this["public"] = null;
                }
                _createClass(CacheControl2, [{
                  key: "parse",
                  value: function parse2(header) {
                    if (!header || header.length === 0) {
                      return this;
                    }
                    var values = {};
                    var matches = header.match(HEADER_REGEXP) || [];
                    Array.prototype.forEach.call(matches, function(match) {
                      var tokens = match.split("=", 2);
                      var _tokens = _slicedToArray(tokens, 1), key = _tokens[0];
                      var value = null;
                      if (tokens.length > 1) {
                        value = tokens[1].trim();
                      }
                      values[key.toLowerCase()] = value;
                    });
                    this.maxAge = parseDuration(values[STRINGS.maxAge]);
                    this.sharedMaxAge = parseDuration(values[STRINGS.sharedMaxAge]);
                    this.maxStale = parseBooleanOnly(values[STRINGS.maxStale]);
                    this.maxStaleDuration = parseDuration(values[STRINGS.maxStale]);
                    if (this.maxStaleDuration) {
                      this.maxStale = true;
                    }
                    this.minFresh = parseDuration(values[STRINGS.minFresh]);
                    this.immutable = parseBooleanOnly(values[STRINGS.immutable]);
                    this.mustRevalidate = parseBooleanOnly(values[STRINGS.mustRevalidate]);
                    this.noCache = parseBooleanOnly(values[STRINGS.noCache]);
                    this.noStore = parseBooleanOnly(values[STRINGS.noStore]);
                    this.noTransform = parseBooleanOnly(values[STRINGS.noTransform]);
                    this.onlyIfCached = parseBooleanOnly(values[STRINGS.onlyIfCached]);
                    this["private"] = parseBooleanOnly(values[STRINGS["private"]]);
                    this.proxyRevalidate = parseBooleanOnly(values[STRINGS.proxyRevalidate]);
                    this["public"] = parseBooleanOnly(values[STRINGS["public"]]);
                    return this;
                  }
                }, {
                  key: "format",
                  value: function format2() {
                    var tokens = [];
                    if (this.maxAge) {
                      tokens.push("".concat(STRINGS.maxAge, "=").concat(this.maxAge));
                    }
                    if (this.sharedMaxAge) {
                      tokens.push("".concat(STRINGS.sharedMaxAge, "=").concat(this.sharedMaxAge));
                    }
                    if (this.maxStale) {
                      if (this.maxStaleDuration) {
                        tokens.push("".concat(STRINGS.maxStale, "=").concat(this.maxStaleDuration));
                      } else {
                        tokens.push(STRINGS.maxStale);
                      }
                    }
                    if (this.minFresh) {
                      tokens.push("".concat(STRINGS.minFresh, "=").concat(this.minFresh));
                    }
                    if (this.immutable) {
                      tokens.push(STRINGS.immutable);
                    }
                    if (this.mustRevalidate) {
                      tokens.push(STRINGS.mustRevalidate);
                    }
                    if (this.noCache) {
                      tokens.push(STRINGS.noCache);
                    }
                    if (this.noStore) {
                      tokens.push(STRINGS.noStore);
                    }
                    if (this.noTransform) {
                      tokens.push(STRINGS.noTransform);
                    }
                    if (this.onlyIfCached) {
                      tokens.push(STRINGS.onlyIfCached);
                    }
                    if (this["private"]) {
                      tokens.push(STRINGS["private"]);
                    }
                    if (this.proxyRevalidate) {
                      tokens.push(STRINGS.proxyRevalidate);
                    }
                    if (this["public"]) {
                      tokens.push(STRINGS["public"]);
                    }
                    return tokens.join(", ");
                  }
                }]);
                return CacheControl2;
              }();
              function parse(header) {
                var cc = new CacheControl();
                return cc.parse(header);
              }
              function format(cc) {
                if (!(cc instanceof CacheControl)) {
                  return CacheControl.prototype.format.call(cc);
                }
                return cc.format();
              }
              __webpack_exports__["default"] = {
                CacheControl,
                parse,
                format
              };
            }
          ),
          /***/
          "./node_modules/charenc/charenc.js": (
            /*!*****************************************!*\
              !*** ./node_modules/charenc/charenc.js ***!
              \*****************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              var charenc = {
                // UTF-8 encoding
                utf8: {
                  // Convert a string to a byte array
                  stringToBytes: function(str) {
                    return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
                  },
                  // Convert a byte array to a string
                  bytesToString: function(bytes) {
                    return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
                  }
                },
                // Binary encoding
                bin: {
                  // Convert a string to a byte array
                  stringToBytes: function(str) {
                    for (var bytes = [], i = 0; i < str.length; i++)
                      bytes.push(str.charCodeAt(i) & 255);
                    return bytes;
                  },
                  // Convert a byte array to a string
                  bytesToString: function(bytes) {
                    for (var str = [], i = 0; i < bytes.length; i++)
                      str.push(String.fromCharCode(bytes[i]));
                    return str.join("");
                  }
                }
              };
              module2.exports = charenc;
            }
          ),
          /***/
          "./node_modules/core-js/modules/_a-function.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/modules/_a-function.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = function(it) {
                if (typeof it != "function")
                  throw TypeError(it + " is not a function!");
                return it;
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_add-to-unscopables.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
              \*************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var UNSCOPABLES = __webpack_require__(
                /*! ./_wks */
                "./node_modules/core-js/modules/_wks.js"
              )("unscopables");
              var ArrayProto = Array.prototype;
              if (ArrayProto[UNSCOPABLES] == void 0)
                __webpack_require__(
                  /*! ./_hide */
                  "./node_modules/core-js/modules/_hide.js"
                )(ArrayProto, UNSCOPABLES, {});
              module2.exports = function(key) {
                ArrayProto[UNSCOPABLES][key] = true;
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_advance-string-index.js": (
            /*!***************************************************************!*\
              !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
              \***************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var at = __webpack_require__(
                /*! ./_string-at */
                "./node_modules/core-js/modules/_string-at.js"
              )(true);
              module2.exports = function(S, index, unicode) {
                return index + (unicode ? at(S, index).length : 1);
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_an-object.js": (
            /*!****************************************************!*\
              !*** ./node_modules/core-js/modules/_an-object.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var isObject = __webpack_require__(
                /*! ./_is-object */
                "./node_modules/core-js/modules/_is-object.js"
              );
              module2.exports = function(it) {
                if (!isObject(it))
                  throw TypeError(it + " is not an object!");
                return it;
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_array-includes.js": (
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/modules/_array-includes.js ***!
              \*********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var toIObject = __webpack_require__(
                /*! ./_to-iobject */
                "./node_modules/core-js/modules/_to-iobject.js"
              );
              var toLength = __webpack_require__(
                /*! ./_to-length */
                "./node_modules/core-js/modules/_to-length.js"
              );
              var toAbsoluteIndex = __webpack_require__(
                /*! ./_to-absolute-index */
                "./node_modules/core-js/modules/_to-absolute-index.js"
              );
              module2.exports = function(IS_INCLUDES) {
                return function($this, el, fromIndex) {
                  var O = toIObject($this);
                  var length = toLength(O.length);
                  var index = toAbsoluteIndex(fromIndex, length);
                  var value;
                  if (IS_INCLUDES && el != el)
                    while (length > index) {
                      value = O[index++];
                      if (value != value)
                        return true;
                    }
                  else
                    for (; length > index; index++)
                      if (IS_INCLUDES || index in O) {
                        if (O[index] === el)
                          return IS_INCLUDES || index || 0;
                      }
                  return !IS_INCLUDES && -1;
                };
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_classof.js": (
            /*!**************************************************!*\
              !*** ./node_modules/core-js/modules/_classof.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var cof = __webpack_require__(
                /*! ./_cof */
                "./node_modules/core-js/modules/_cof.js"
              );
              var TAG = __webpack_require__(
                /*! ./_wks */
                "./node_modules/core-js/modules/_wks.js"
              )("toStringTag");
              var ARG = cof(function() {
                return arguments;
              }()) == "Arguments";
              var tryGet = function(it, key) {
                try {
                  return it[key];
                } catch (e) {
                }
              };
              module2.exports = function(it) {
                var O, T, B;
                return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (T = tryGet(O = Object(it), TAG)) == "string" ? T : ARG ? cof(O) : (B = cof(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : B;
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_cof.js": (
            /*!**********************************************!*\
              !*** ./node_modules/core-js/modules/_cof.js ***!
              \**********************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              var toString = {}.toString;
              module2.exports = function(it) {
                return toString.call(it).slice(8, -1);
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_core.js": (
            /*!***********************************************!*\
              !*** ./node_modules/core-js/modules/_core.js ***!
              \***********************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              var core = module2.exports = { version: "2.6.12" };
              if (typeof __e == "number")
                __e = core;
            }
          ),
          /***/
          "./node_modules/core-js/modules/_create-property.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/modules/_create-property.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var $defineProperty = __webpack_require__(
                /*! ./_object-dp */
                "./node_modules/core-js/modules/_object-dp.js"
              );
              var createDesc = __webpack_require__(
                /*! ./_property-desc */
                "./node_modules/core-js/modules/_property-desc.js"
              );
              module2.exports = function(object, index, value) {
                if (index in object)
                  $defineProperty.f(object, index, createDesc(0, value));
                else
                  object[index] = value;
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_ctx.js": (
            /*!**********************************************!*\
              !*** ./node_modules/core-js/modules/_ctx.js ***!
              \**********************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var aFunction = __webpack_require__(
                /*! ./_a-function */
                "./node_modules/core-js/modules/_a-function.js"
              );
              module2.exports = function(fn, that, length) {
                aFunction(fn);
                if (that === void 0)
                  return fn;
                switch (length) {
                  case 1:
                    return function(a) {
                      return fn.call(that, a);
                    };
                  case 2:
                    return function(a, b) {
                      return fn.call(that, a, b);
                    };
                  case 3:
                    return function(a, b, c) {
                      return fn.call(that, a, b, c);
                    };
                }
                return function() {
                  return fn.apply(that, arguments);
                };
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_defined.js": (
            /*!**************************************************!*\
              !*** ./node_modules/core-js/modules/_defined.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = function(it) {
                if (it == void 0)
                  throw TypeError("Can't call method on  " + it);
                return it;
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_descriptors.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/modules/_descriptors.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              module2.exports = !__webpack_require__(
                /*! ./_fails */
                "./node_modules/core-js/modules/_fails.js"
              )(function() {
                return Object.defineProperty({}, "a", { get: function() {
                  return 7;
                } }).a != 7;
              });
            }
          ),
          /***/
          "./node_modules/core-js/modules/_dom-create.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/modules/_dom-create.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var isObject = __webpack_require__(
                /*! ./_is-object */
                "./node_modules/core-js/modules/_is-object.js"
              );
              var document2 = __webpack_require__(
                /*! ./_global */
                "./node_modules/core-js/modules/_global.js"
              ).document;
              var is = isObject(document2) && isObject(document2.createElement);
              module2.exports = function(it) {
                return is ? document2.createElement(it) : {};
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_enum-bug-keys.js": (
            /*!********************************************************!*\
              !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
              \********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
            }
          ),
          /***/
          "./node_modules/core-js/modules/_enum-keys.js": (
            /*!****************************************************!*\
              !*** ./node_modules/core-js/modules/_enum-keys.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var getKeys = __webpack_require__(
                /*! ./_object-keys */
                "./node_modules/core-js/modules/_object-keys.js"
              );
              var gOPS = __webpack_require__(
                /*! ./_object-gops */
                "./node_modules/core-js/modules/_object-gops.js"
              );
              var pIE = __webpack_require__(
                /*! ./_object-pie */
                "./node_modules/core-js/modules/_object-pie.js"
              );
              module2.exports = function(it) {
                var result = getKeys(it);
                var getSymbols = gOPS.f;
                if (getSymbols) {
                  var symbols = getSymbols(it);
                  var isEnum = pIE.f;
                  var i = 0;
                  var key;
                  while (symbols.length > i)
                    if (isEnum.call(it, key = symbols[i++]))
                      result.push(key);
                }
                return result;
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_export.js": (
            /*!*************************************************!*\
              !*** ./node_modules/core-js/modules/_export.js ***!
              \*************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var global = __webpack_require__(
                /*! ./_global */
                "./node_modules/core-js/modules/_global.js"
              );
              var core = __webpack_require__(
                /*! ./_core */
                "./node_modules/core-js/modules/_core.js"
              );
              var hide = __webpack_require__(
                /*! ./_hide */
                "./node_modules/core-js/modules/_hide.js"
              );
              var redefine = __webpack_require__(
                /*! ./_redefine */
                "./node_modules/core-js/modules/_redefine.js"
              );
              var ctx = __webpack_require__(
                /*! ./_ctx */
                "./node_modules/core-js/modules/_ctx.js"
              );
              var PROTOTYPE = "prototype";
              var $export = function(type2, name2, source) {
                var IS_FORCED = type2 & $export.F;
                var IS_GLOBAL = type2 & $export.G;
                var IS_STATIC = type2 & $export.S;
                var IS_PROTO = type2 & $export.P;
                var IS_BIND = type2 & $export.B;
                var target = IS_GLOBAL ? global : IS_STATIC ? global[name2] || (global[name2] = {}) : (global[name2] || {})[PROTOTYPE];
                var exports3 = IS_GLOBAL ? core : core[name2] || (core[name2] = {});
                var expProto = exports3[PROTOTYPE] || (exports3[PROTOTYPE] = {});
                var key, own, out, exp;
                if (IS_GLOBAL)
                  source = name2;
                for (key in source) {
                  own = !IS_FORCED && target && target[key] !== void 0;
                  out = (own ? target : source)[key];
                  exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
                  if (target)
                    redefine(target, key, out, type2 & $export.U);
                  if (exports3[key] != out)
                    hide(exports3, key, exp);
                  if (IS_PROTO && expProto[key] != out)
                    expProto[key] = out;
                }
              };
              global.core = core;
              $export.F = 1;
              $export.G = 2;
              $export.S = 4;
              $export.P = 8;
              $export.B = 16;
              $export.W = 32;
              $export.U = 64;
              $export.R = 128;
              module2.exports = $export;
            }
          ),
          /***/
          "./node_modules/core-js/modules/_fails-is-regexp.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var MATCH = __webpack_require__(
                /*! ./_wks */
                "./node_modules/core-js/modules/_wks.js"
              )("match");
              module2.exports = function(KEY) {
                var re = /./;
                try {
                  "/./"[KEY](re);
                } catch (e) {
                  try {
                    re[MATCH] = false;
                    return !"/./"[KEY](re);
                  } catch (f) {
                  }
                }
                return true;
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_fails.js": (
            /*!************************************************!*\
              !*** ./node_modules/core-js/modules/_fails.js ***!
              \************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = function(exec) {
                try {
                  return !!exec();
                } catch (e) {
                  return true;
                }
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_fix-re-wks.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              __webpack_require__(
                /*! ./es6.regexp.exec */
                "./node_modules/core-js/modules/es6.regexp.exec.js"
              );
              var redefine = __webpack_require__(
                /*! ./_redefine */
                "./node_modules/core-js/modules/_redefine.js"
              );
              var hide = __webpack_require__(
                /*! ./_hide */
                "./node_modules/core-js/modules/_hide.js"
              );
              var fails = __webpack_require__(
                /*! ./_fails */
                "./node_modules/core-js/modules/_fails.js"
              );
              var defined = __webpack_require__(
                /*! ./_defined */
                "./node_modules/core-js/modules/_defined.js"
              );
              var wks = __webpack_require__(
                /*! ./_wks */
                "./node_modules/core-js/modules/_wks.js"
              );
              var regexpExec = __webpack_require__(
                /*! ./_regexp-exec */
                "./node_modules/core-js/modules/_regexp-exec.js"
              );
              var SPECIES = wks("species");
              var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
                var re = /./;
                re.exec = function() {
                  var result = [];
                  result.groups = { a: "7" };
                  return result;
                };
                return "".replace(re, "$<a>") !== "7";
              });
              var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function() {
                var re = /(?:)/;
                var originalExec = re.exec;
                re.exec = function() {
                  return originalExec.apply(this, arguments);
                };
                var result = "ab".split(re);
                return result.length === 2 && result[0] === "a" && result[1] === "b";
              }();
              module2.exports = function(KEY, length, exec) {
                var SYMBOL = wks(KEY);
                var DELEGATES_TO_SYMBOL = !fails(function() {
                  var O = {};
                  O[SYMBOL] = function() {
                    return 7;
                  };
                  return ""[KEY](O) != 7;
                });
                var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function() {
                  var execCalled = false;
                  var re = /a/;
                  re.exec = function() {
                    execCalled = true;
                    return null;
                  };
                  if (KEY === "split") {
                    re.constructor = {};
                    re.constructor[SPECIES] = function() {
                      return re;
                    };
                  }
                  re[SYMBOL]("");
                  return !execCalled;
                }) : void 0;
                if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === "replace" && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === "split" && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
                  var nativeRegExpMethod = /./[SYMBOL];
                  var fns = exec(
                    defined,
                    SYMBOL,
                    ""[KEY],
                    function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
                      if (regexp.exec === regexpExec) {
                        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
                        }
                        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
                      }
                      return { done: false };
                    }
                  );
                  var strfn = fns[0];
                  var rxfn = fns[1];
                  redefine(String.prototype, KEY, strfn);
                  hide(
                    RegExp.prototype,
                    SYMBOL,
                    length == 2 ? function(string, arg) {
                      return rxfn.call(string, this, arg);
                    } : function(string) {
                      return rxfn.call(string, this);
                    }
                  );
                }
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_flags.js": (
            /*!************************************************!*\
              !*** ./node_modules/core-js/modules/_flags.js ***!
              \************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var anObject = __webpack_require__(
                /*! ./_an-object */
                "./node_modules/core-js/modules/_an-object.js"
              );
              module2.exports = function() {
                var that = anObject(this);
                var result = "";
                if (that.global)
                  result += "g";
                if (that.ignoreCase)
                  result += "i";
                if (that.multiline)
                  result += "m";
                if (that.unicode)
                  result += "u";
                if (that.sticky)
                  result += "y";
                return result;
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_function-to-string.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/modules/_function-to-string.js ***!
              \*************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              module2.exports = __webpack_require__(
                /*! ./_shared */
                "./node_modules/core-js/modules/_shared.js"
              )("native-function-to-string", Function.toString);
            }
          ),
          /***/
          "./node_modules/core-js/modules/_global.js": (
            /*!*************************************************!*\
              !*** ./node_modules/core-js/modules/_global.js ***!
              \*************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              var global = module2.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
              if (typeof __g == "number")
                __g = global;
            }
          ),
          /***/
          "./node_modules/core-js/modules/_has.js": (
            /*!**********************************************!*\
              !*** ./node_modules/core-js/modules/_has.js ***!
              \**********************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              var hasOwnProperty = {}.hasOwnProperty;
              module2.exports = function(it, key) {
                return hasOwnProperty.call(it, key);
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_hide.js": (
            /*!***********************************************!*\
              !*** ./node_modules/core-js/modules/_hide.js ***!
              \***********************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var dP = __webpack_require__(
                /*! ./_object-dp */
                "./node_modules/core-js/modules/_object-dp.js"
              );
              var createDesc = __webpack_require__(
                /*! ./_property-desc */
                "./node_modules/core-js/modules/_property-desc.js"
              );
              module2.exports = __webpack_require__(
                /*! ./_descriptors */
                "./node_modules/core-js/modules/_descriptors.js"
              ) ? function(object, key, value) {
                return dP.f(object, key, createDesc(1, value));
              } : function(object, key, value) {
                object[key] = value;
                return object;
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_html.js": (
            /*!***********************************************!*\
              !*** ./node_modules/core-js/modules/_html.js ***!
              \***********************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var document2 = __webpack_require__(
                /*! ./_global */
                "./node_modules/core-js/modules/_global.js"
              ).document;
              module2.exports = document2 && document2.documentElement;
            }
          ),
          /***/
          "./node_modules/core-js/modules/_ie8-dom-define.js": (
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
              \*********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              module2.exports = !__webpack_require__(
                /*! ./_descriptors */
                "./node_modules/core-js/modules/_descriptors.js"
              ) && !__webpack_require__(
                /*! ./_fails */
                "./node_modules/core-js/modules/_fails.js"
              )(function() {
                return Object.defineProperty(__webpack_require__(
                  /*! ./_dom-create */
                  "./node_modules/core-js/modules/_dom-create.js"
                )("div"), "a", { get: function() {
                  return 7;
                } }).a != 7;
              });
            }
          ),
          /***/
          "./node_modules/core-js/modules/_iobject.js": (
            /*!**************************************************!*\
              !*** ./node_modules/core-js/modules/_iobject.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var cof = __webpack_require__(
                /*! ./_cof */
                "./node_modules/core-js/modules/_cof.js"
              );
              module2.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
                return cof(it) == "String" ? it.split("") : Object(it);
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_is-array-iter.js": (
            /*!********************************************************!*\
              !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
              \********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var Iterators = __webpack_require__(
                /*! ./_iterators */
                "./node_modules/core-js/modules/_iterators.js"
              );
              var ITERATOR = __webpack_require__(
                /*! ./_wks */
                "./node_modules/core-js/modules/_wks.js"
              )("iterator");
              var ArrayProto = Array.prototype;
              module2.exports = function(it) {
                return it !== void 0 && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_is-array.js": (
            /*!***************************************************!*\
              !*** ./node_modules/core-js/modules/_is-array.js ***!
              \***************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var cof = __webpack_require__(
                /*! ./_cof */
                "./node_modules/core-js/modules/_cof.js"
              );
              module2.exports = Array.isArray || function isArray(arg) {
                return cof(arg) == "Array";
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_is-object.js": (
            /*!****************************************************!*\
              !*** ./node_modules/core-js/modules/_is-object.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = function(it) {
                return typeof it === "object" ? it !== null : typeof it === "function";
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_is-regexp.js": (
            /*!****************************************************!*\
              !*** ./node_modules/core-js/modules/_is-regexp.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var isObject = __webpack_require__(
                /*! ./_is-object */
                "./node_modules/core-js/modules/_is-object.js"
              );
              var cof = __webpack_require__(
                /*! ./_cof */
                "./node_modules/core-js/modules/_cof.js"
              );
              var MATCH = __webpack_require__(
                /*! ./_wks */
                "./node_modules/core-js/modules/_wks.js"
              )("match");
              module2.exports = function(it) {
                var isRegExp;
                return isObject(it) && ((isRegExp = it[MATCH]) !== void 0 ? !!isRegExp : cof(it) == "RegExp");
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_iter-call.js": (
            /*!****************************************************!*\
              !*** ./node_modules/core-js/modules/_iter-call.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var anObject = __webpack_require__(
                /*! ./_an-object */
                "./node_modules/core-js/modules/_an-object.js"
              );
              module2.exports = function(iterator, fn, value, entries) {
                try {
                  return entries ? fn(anObject(value)[0], value[1]) : fn(value);
                } catch (e) {
                  var ret = iterator["return"];
                  if (ret !== void 0)
                    anObject(ret.call(iterator));
                  throw e;
                }
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_iter-create.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/modules/_iter-create.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var create = __webpack_require__(
                /*! ./_object-create */
                "./node_modules/core-js/modules/_object-create.js"
              );
              var descriptor = __webpack_require__(
                /*! ./_property-desc */
                "./node_modules/core-js/modules/_property-desc.js"
              );
              var setToStringTag = __webpack_require__(
                /*! ./_set-to-string-tag */
                "./node_modules/core-js/modules/_set-to-string-tag.js"
              );
              var IteratorPrototype = {};
              __webpack_require__(
                /*! ./_hide */
                "./node_modules/core-js/modules/_hide.js"
              )(IteratorPrototype, __webpack_require__(
                /*! ./_wks */
                "./node_modules/core-js/modules/_wks.js"
              )("iterator"), function() {
                return this;
              });
              module2.exports = function(Constructor, NAME, next) {
                Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
                setToStringTag(Constructor, NAME + " Iterator");
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_iter-define.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/modules/_iter-define.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var LIBRARY = __webpack_require__(
                /*! ./_library */
                "./node_modules/core-js/modules/_library.js"
              );
              var $export = __webpack_require__(
                /*! ./_export */
                "./node_modules/core-js/modules/_export.js"
              );
              var redefine = __webpack_require__(
                /*! ./_redefine */
                "./node_modules/core-js/modules/_redefine.js"
              );
              var hide = __webpack_require__(
                /*! ./_hide */
                "./node_modules/core-js/modules/_hide.js"
              );
              var Iterators = __webpack_require__(
                /*! ./_iterators */
                "./node_modules/core-js/modules/_iterators.js"
              );
              var $iterCreate = __webpack_require__(
                /*! ./_iter-create */
                "./node_modules/core-js/modules/_iter-create.js"
              );
              var setToStringTag = __webpack_require__(
                /*! ./_set-to-string-tag */
                "./node_modules/core-js/modules/_set-to-string-tag.js"
              );
              var getPrototypeOf = __webpack_require__(
                /*! ./_object-gpo */
                "./node_modules/core-js/modules/_object-gpo.js"
              );
              var ITERATOR = __webpack_require__(
                /*! ./_wks */
                "./node_modules/core-js/modules/_wks.js"
              )("iterator");
              var BUGGY = !([].keys && "next" in [].keys());
              var FF_ITERATOR = "@@iterator";
              var KEYS = "keys";
              var VALUES = "values";
              var returnThis = function() {
                return this;
              };
              module2.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
                $iterCreate(Constructor, NAME, next);
                var getMethod = function(kind) {
                  if (!BUGGY && kind in proto)
                    return proto[kind];
                  switch (kind) {
                    case KEYS:
                      return function keys() {
                        return new Constructor(this, kind);
                      };
                    case VALUES:
                      return function values() {
                        return new Constructor(this, kind);
                      };
                  }
                  return function entries() {
                    return new Constructor(this, kind);
                  };
                };
                var TAG = NAME + " Iterator";
                var DEF_VALUES = DEFAULT == VALUES;
                var VALUES_BUG = false;
                var proto = Base.prototype;
                var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
                var $default = $native || getMethod(DEFAULT);
                var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod("entries") : void 0;
                var $anyNative = NAME == "Array" ? proto.entries || $native : $native;
                var methods, key, IteratorPrototype;
                if ($anyNative) {
                  IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
                  if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
                    setToStringTag(IteratorPrototype, TAG, true);
                    if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != "function")
                      hide(IteratorPrototype, ITERATOR, returnThis);
                  }
                }
                if (DEF_VALUES && $native && $native.name !== VALUES) {
                  VALUES_BUG = true;
                  $default = function values() {
                    return $native.call(this);
                  };
                }
                if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
                  hide(proto, ITERATOR, $default);
                }
                Iterators[NAME] = $default;
                Iterators[TAG] = returnThis;
                if (DEFAULT) {
                  methods = {
                    values: DEF_VALUES ? $default : getMethod(VALUES),
                    keys: IS_SET ? $default : getMethod(KEYS),
                    entries: $entries
                  };
                  if (FORCED)
                    for (key in methods) {
                      if (!(key in proto))
                        redefine(proto, key, methods[key]);
                    }
                  else
                    $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
                }
                return methods;
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_iter-detect.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/modules/_iter-detect.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var ITERATOR = __webpack_require__(
                /*! ./_wks */
                "./node_modules/core-js/modules/_wks.js"
              )("iterator");
              var SAFE_CLOSING = false;
              try {
                var riter = [7][ITERATOR]();
                riter["return"] = function() {
                  SAFE_CLOSING = true;
                };
                Array.from(riter, function() {
                  throw 2;
                });
              } catch (e) {
              }
              module2.exports = function(exec, skipClosing) {
                if (!skipClosing && !SAFE_CLOSING)
                  return false;
                var safe = false;
                try {
                  var arr = [7];
                  var iter = arr[ITERATOR]();
                  iter.next = function() {
                    return { done: safe = true };
                  };
                  arr[ITERATOR] = function() {
                    return iter;
                  };
                  exec(arr);
                } catch (e) {
                }
                return safe;
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_iter-step.js": (
            /*!****************************************************!*\
              !*** ./node_modules/core-js/modules/_iter-step.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = function(done, value) {
                return { value, done: !!done };
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_iterators.js": (
            /*!****************************************************!*\
              !*** ./node_modules/core-js/modules/_iterators.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = {};
            }
          ),
          /***/
          "./node_modules/core-js/modules/_library.js": (
            /*!**************************************************!*\
              !*** ./node_modules/core-js/modules/_library.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = false;
            }
          ),
          /***/
          "./node_modules/core-js/modules/_meta.js": (
            /*!***********************************************!*\
              !*** ./node_modules/core-js/modules/_meta.js ***!
              \***********************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var META = __webpack_require__(
                /*! ./_uid */
                "./node_modules/core-js/modules/_uid.js"
              )("meta");
              var isObject = __webpack_require__(
                /*! ./_is-object */
                "./node_modules/core-js/modules/_is-object.js"
              );
              var has = __webpack_require__(
                /*! ./_has */
                "./node_modules/core-js/modules/_has.js"
              );
              var setDesc = __webpack_require__(
                /*! ./_object-dp */
                "./node_modules/core-js/modules/_object-dp.js"
              ).f;
              var id = 0;
              var isExtensible = Object.isExtensible || function() {
                return true;
              };
              var FREEZE = !__webpack_require__(
                /*! ./_fails */
                "./node_modules/core-js/modules/_fails.js"
              )(function() {
                return isExtensible(Object.preventExtensions({}));
              });
              var setMeta = function(it) {
                setDesc(it, META, { value: {
                  i: "O" + ++id,
                  // object ID
                  w: {}
                  // weak collections IDs
                } });
              };
              var fastKey = function(it, create) {
                if (!isObject(it))
                  return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
                if (!has(it, META)) {
                  if (!isExtensible(it))
                    return "F";
                  if (!create)
                    return "E";
                  setMeta(it);
                }
                return it[META].i;
              };
              var getWeak = function(it, create) {
                if (!has(it, META)) {
                  if (!isExtensible(it))
                    return true;
                  if (!create)
                    return false;
                  setMeta(it);
                }
                return it[META].w;
              };
              var onFreeze = function(it) {
                if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META))
                  setMeta(it);
                return it;
              };
              var meta = module2.exports = {
                KEY: META,
                NEED: false,
                fastKey,
                getWeak,
                onFreeze
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_object-create.js": (
            /*!********************************************************!*\
              !*** ./node_modules/core-js/modules/_object-create.js ***!
              \********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var anObject = __webpack_require__(
                /*! ./_an-object */
                "./node_modules/core-js/modules/_an-object.js"
              );
              var dPs = __webpack_require__(
                /*! ./_object-dps */
                "./node_modules/core-js/modules/_object-dps.js"
              );
              var enumBugKeys = __webpack_require__(
                /*! ./_enum-bug-keys */
                "./node_modules/core-js/modules/_enum-bug-keys.js"
              );
              var IE_PROTO = __webpack_require__(
                /*! ./_shared-key */
                "./node_modules/core-js/modules/_shared-key.js"
              )("IE_PROTO");
              var Empty = function() {
              };
              var PROTOTYPE = "prototype";
              var createDict = function() {
                var iframe = __webpack_require__(
                  /*! ./_dom-create */
                  "./node_modules/core-js/modules/_dom-create.js"
                )("iframe");
                var i = enumBugKeys.length;
                var lt = "<";
                var gt = ">";
                var iframeDocument;
                iframe.style.display = "none";
                __webpack_require__(
                  /*! ./_html */
                  "./node_modules/core-js/modules/_html.js"
                ).appendChild(iframe);
                iframe.src = "javascript:";
                iframeDocument = iframe.contentWindow.document;
                iframeDocument.open();
                iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
                iframeDocument.close();
                createDict = iframeDocument.F;
                while (i--)
                  delete createDict[PROTOTYPE][enumBugKeys[i]];
                return createDict();
              };
              module2.exports = Object.create || function create(O, Properties) {
                var result;
                if (O !== null) {
                  Empty[PROTOTYPE] = anObject(O);
                  result = new Empty();
                  Empty[PROTOTYPE] = null;
                  result[IE_PROTO] = O;
                } else
                  result = createDict();
                return Properties === void 0 ? result : dPs(result, Properties);
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_object-dp.js": (
            /*!****************************************************!*\
              !*** ./node_modules/core-js/modules/_object-dp.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var anObject = __webpack_require__(
                /*! ./_an-object */
                "./node_modules/core-js/modules/_an-object.js"
              );
              var IE8_DOM_DEFINE = __webpack_require__(
                /*! ./_ie8-dom-define */
                "./node_modules/core-js/modules/_ie8-dom-define.js"
              );
              var toPrimitive = __webpack_require__(
                /*! ./_to-primitive */
                "./node_modules/core-js/modules/_to-primitive.js"
              );
              var dP = Object.defineProperty;
              exports2.f = __webpack_require__(
                /*! ./_descriptors */
                "./node_modules/core-js/modules/_descriptors.js"
              ) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPrimitive(P, true);
                anObject(Attributes);
                if (IE8_DOM_DEFINE)
                  try {
                    return dP(O, P, Attributes);
                  } catch (e) {
                  }
                if ("get" in Attributes || "set" in Attributes)
                  throw TypeError("Accessors not supported!");
                if ("value" in Attributes)
                  O[P] = Attributes.value;
                return O;
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_object-dps.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/modules/_object-dps.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var dP = __webpack_require__(
                /*! ./_object-dp */
                "./node_modules/core-js/modules/_object-dp.js"
              );
              var anObject = __webpack_require__(
                /*! ./_an-object */
                "./node_modules/core-js/modules/_an-object.js"
              );
              var getKeys = __webpack_require__(
                /*! ./_object-keys */
                "./node_modules/core-js/modules/_object-keys.js"
              );
              module2.exports = __webpack_require__(
                /*! ./_descriptors */
                "./node_modules/core-js/modules/_descriptors.js"
              ) ? Object.defineProperties : function defineProperties(O, Properties) {
                anObject(O);
                var keys = getKeys(Properties);
                var length = keys.length;
                var i = 0;
                var P;
                while (length > i)
                  dP.f(O, P = keys[i++], Properties[P]);
                return O;
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_object-gopd.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/modules/_object-gopd.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var pIE = __webpack_require__(
                /*! ./_object-pie */
                "./node_modules/core-js/modules/_object-pie.js"
              );
              var createDesc = __webpack_require__(
                /*! ./_property-desc */
                "./node_modules/core-js/modules/_property-desc.js"
              );
              var toIObject = __webpack_require__(
                /*! ./_to-iobject */
                "./node_modules/core-js/modules/_to-iobject.js"
              );
              var toPrimitive = __webpack_require__(
                /*! ./_to-primitive */
                "./node_modules/core-js/modules/_to-primitive.js"
              );
              var has = __webpack_require__(
                /*! ./_has */
                "./node_modules/core-js/modules/_has.js"
              );
              var IE8_DOM_DEFINE = __webpack_require__(
                /*! ./_ie8-dom-define */
                "./node_modules/core-js/modules/_ie8-dom-define.js"
              );
              var gOPD = Object.getOwnPropertyDescriptor;
              exports2.f = __webpack_require__(
                /*! ./_descriptors */
                "./node_modules/core-js/modules/_descriptors.js"
              ) ? gOPD : function getOwnPropertyDescriptor(O, P) {
                O = toIObject(O);
                P = toPrimitive(P, true);
                if (IE8_DOM_DEFINE)
                  try {
                    return gOPD(O, P);
                  } catch (e) {
                  }
                if (has(O, P))
                  return createDesc(!pIE.f.call(O, P), O[P]);
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_object-gopn-ext.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var toIObject = __webpack_require__(
                /*! ./_to-iobject */
                "./node_modules/core-js/modules/_to-iobject.js"
              );
              var gOPN = __webpack_require__(
                /*! ./_object-gopn */
                "./node_modules/core-js/modules/_object-gopn.js"
              ).f;
              var toString = {}.toString;
              var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
              var getWindowNames = function(it) {
                try {
                  return gOPN(it);
                } catch (e) {
                  return windowNames.slice();
                }
              };
              module2.exports.f = function getOwnPropertyNames(it) {
                return windowNames && toString.call(it) == "[object Window]" ? getWindowNames(it) : gOPN(toIObject(it));
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_object-gopn.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/modules/_object-gopn.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var $keys = __webpack_require__(
                /*! ./_object-keys-internal */
                "./node_modules/core-js/modules/_object-keys-internal.js"
              );
              var hiddenKeys = __webpack_require__(
                /*! ./_enum-bug-keys */
                "./node_modules/core-js/modules/_enum-bug-keys.js"
              ).concat("length", "prototype");
              exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
                return $keys(O, hiddenKeys);
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_object-gops.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/modules/_object-gops.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              exports2.f = Object.getOwnPropertySymbols;
            }
          ),
          /***/
          "./node_modules/core-js/modules/_object-gpo.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/modules/_object-gpo.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var has = __webpack_require__(
                /*! ./_has */
                "./node_modules/core-js/modules/_has.js"
              );
              var toObject = __webpack_require__(
                /*! ./_to-object */
                "./node_modules/core-js/modules/_to-object.js"
              );
              var IE_PROTO = __webpack_require__(
                /*! ./_shared-key */
                "./node_modules/core-js/modules/_shared-key.js"
              )("IE_PROTO");
              var ObjectProto = Object.prototype;
              module2.exports = Object.getPrototypeOf || function(O) {
                O = toObject(O);
                if (has(O, IE_PROTO))
                  return O[IE_PROTO];
                if (typeof O.constructor == "function" && O instanceof O.constructor) {
                  return O.constructor.prototype;
                }
                return O instanceof Object ? ObjectProto : null;
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_object-keys-internal.js": (
            /*!***************************************************************!*\
              !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
              \***************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var has = __webpack_require__(
                /*! ./_has */
                "./node_modules/core-js/modules/_has.js"
              );
              var toIObject = __webpack_require__(
                /*! ./_to-iobject */
                "./node_modules/core-js/modules/_to-iobject.js"
              );
              var arrayIndexOf = __webpack_require__(
                /*! ./_array-includes */
                "./node_modules/core-js/modules/_array-includes.js"
              )(false);
              var IE_PROTO = __webpack_require__(
                /*! ./_shared-key */
                "./node_modules/core-js/modules/_shared-key.js"
              )("IE_PROTO");
              module2.exports = function(object, names) {
                var O = toIObject(object);
                var i = 0;
                var result = [];
                var key;
                for (key in O)
                  if (key != IE_PROTO)
                    has(O, key) && result.push(key);
                while (names.length > i)
                  if (has(O, key = names[i++])) {
                    ~arrayIndexOf(result, key) || result.push(key);
                  }
                return result;
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_object-keys.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/modules/_object-keys.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var $keys = __webpack_require__(
                /*! ./_object-keys-internal */
                "./node_modules/core-js/modules/_object-keys-internal.js"
              );
              var enumBugKeys = __webpack_require__(
                /*! ./_enum-bug-keys */
                "./node_modules/core-js/modules/_enum-bug-keys.js"
              );
              module2.exports = Object.keys || function keys(O) {
                return $keys(O, enumBugKeys);
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_object-pie.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/modules/_object-pie.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              exports2.f = {}.propertyIsEnumerable;
            }
          ),
          /***/
          "./node_modules/core-js/modules/_own-keys.js": (
            /*!***************************************************!*\
              !*** ./node_modules/core-js/modules/_own-keys.js ***!
              \***************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var gOPN = __webpack_require__(
                /*! ./_object-gopn */
                "./node_modules/core-js/modules/_object-gopn.js"
              );
              var gOPS = __webpack_require__(
                /*! ./_object-gops */
                "./node_modules/core-js/modules/_object-gops.js"
              );
              var anObject = __webpack_require__(
                /*! ./_an-object */
                "./node_modules/core-js/modules/_an-object.js"
              );
              var Reflect2 = __webpack_require__(
                /*! ./_global */
                "./node_modules/core-js/modules/_global.js"
              ).Reflect;
              module2.exports = Reflect2 && Reflect2.ownKeys || function ownKeys(it) {
                var keys = gOPN.f(anObject(it));
                var getSymbols = gOPS.f;
                return getSymbols ? keys.concat(getSymbols(it)) : keys;
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_property-desc.js": (
            /*!********************************************************!*\
              !*** ./node_modules/core-js/modules/_property-desc.js ***!
              \********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = function(bitmap, value) {
                return {
                  enumerable: !(bitmap & 1),
                  configurable: !(bitmap & 2),
                  writable: !(bitmap & 4),
                  value
                };
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_redefine.js": (
            /*!***************************************************!*\
              !*** ./node_modules/core-js/modules/_redefine.js ***!
              \***************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var global = __webpack_require__(
                /*! ./_global */
                "./node_modules/core-js/modules/_global.js"
              );
              var hide = __webpack_require__(
                /*! ./_hide */
                "./node_modules/core-js/modules/_hide.js"
              );
              var has = __webpack_require__(
                /*! ./_has */
                "./node_modules/core-js/modules/_has.js"
              );
              var SRC = __webpack_require__(
                /*! ./_uid */
                "./node_modules/core-js/modules/_uid.js"
              )("src");
              var $toString = __webpack_require__(
                /*! ./_function-to-string */
                "./node_modules/core-js/modules/_function-to-string.js"
              );
              var TO_STRING = "toString";
              var TPL = ("" + $toString).split(TO_STRING);
              __webpack_require__(
                /*! ./_core */
                "./node_modules/core-js/modules/_core.js"
              ).inspectSource = function(it) {
                return $toString.call(it);
              };
              (module2.exports = function(O, key, val, safe) {
                var isFunction = typeof val == "function";
                if (isFunction)
                  has(val, "name") || hide(val, "name", key);
                if (O[key] === val)
                  return;
                if (isFunction)
                  has(val, SRC) || hide(val, SRC, O[key] ? "" + O[key] : TPL.join(String(key)));
                if (O === global) {
                  O[key] = val;
                } else if (!safe) {
                  delete O[key];
                  hide(O, key, val);
                } else if (O[key]) {
                  O[key] = val;
                } else {
                  hide(O, key, val);
                }
              })(Function.prototype, TO_STRING, function toString() {
                return typeof this == "function" && this[SRC] || $toString.call(this);
              });
            }
          ),
          /***/
          "./node_modules/core-js/modules/_regexp-exec-abstract.js": (
            /*!***************************************************************!*\
              !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
              \***************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var classof = __webpack_require__(
                /*! ./_classof */
                "./node_modules/core-js/modules/_classof.js"
              );
              var builtinExec = RegExp.prototype.exec;
              module2.exports = function(R, S) {
                var exec = R.exec;
                if (typeof exec === "function") {
                  var result = exec.call(R, S);
                  if (typeof result !== "object") {
                    throw new TypeError("RegExp exec method returned something other than an Object or null");
                  }
                  return result;
                }
                if (classof(R) !== "RegExp") {
                  throw new TypeError("RegExp#exec called on incompatible receiver");
                }
                return builtinExec.call(R, S);
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_regexp-exec.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var regexpFlags = __webpack_require__(
                /*! ./_flags */
                "./node_modules/core-js/modules/_flags.js"
              );
              var nativeExec = RegExp.prototype.exec;
              var nativeReplace = String.prototype.replace;
              var patchedExec = nativeExec;
              var LAST_INDEX = "lastIndex";
              var UPDATES_LAST_INDEX_WRONG = function() {
                var re1 = /a/, re2 = /b*/g;
                nativeExec.call(re1, "a");
                nativeExec.call(re2, "a");
                return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
              }();
              var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
              var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;
              if (PATCH) {
                patchedExec = function exec(str) {
                  var re = this;
                  var lastIndex, reCopy, match, i;
                  if (NPCG_INCLUDED) {
                    reCopy = new RegExp("^" + re.source + "$(?!\\s)", regexpFlags.call(re));
                  }
                  if (UPDATES_LAST_INDEX_WRONG)
                    lastIndex = re[LAST_INDEX];
                  match = nativeExec.call(re, str);
                  if (UPDATES_LAST_INDEX_WRONG && match) {
                    re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
                  }
                  if (NPCG_INCLUDED && match && match.length > 1) {
                    nativeReplace.call(match[0], reCopy, function() {
                      for (i = 1; i < arguments.length - 2; i++) {
                        if (arguments[i] === void 0)
                          match[i] = void 0;
                      }
                    });
                  }
                  return match;
                };
              }
              module2.exports = patchedExec;
            }
          ),
          /***/
          "./node_modules/core-js/modules/_set-to-string-tag.js": (
            /*!************************************************************!*\
              !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
              \************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var def = __webpack_require__(
                /*! ./_object-dp */
                "./node_modules/core-js/modules/_object-dp.js"
              ).f;
              var has = __webpack_require__(
                /*! ./_has */
                "./node_modules/core-js/modules/_has.js"
              );
              var TAG = __webpack_require__(
                /*! ./_wks */
                "./node_modules/core-js/modules/_wks.js"
              )("toStringTag");
              module2.exports = function(it, tag, stat) {
                if (it && !has(it = stat ? it : it.prototype, TAG))
                  def(it, TAG, { configurable: true, value: tag });
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_shared-key.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/modules/_shared-key.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var shared = __webpack_require__(
                /*! ./_shared */
                "./node_modules/core-js/modules/_shared.js"
              )("keys");
              var uid = __webpack_require__(
                /*! ./_uid */
                "./node_modules/core-js/modules/_uid.js"
              );
              module2.exports = function(key) {
                return shared[key] || (shared[key] = uid(key));
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_shared.js": (
            /*!*************************************************!*\
              !*** ./node_modules/core-js/modules/_shared.js ***!
              \*************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var core = __webpack_require__(
                /*! ./_core */
                "./node_modules/core-js/modules/_core.js"
              );
              var global = __webpack_require__(
                /*! ./_global */
                "./node_modules/core-js/modules/_global.js"
              );
              var SHARED = "__core-js_shared__";
              var store = global[SHARED] || (global[SHARED] = {});
              (module2.exports = function(key, value) {
                return store[key] || (store[key] = value !== void 0 ? value : {});
              })("versions", []).push({
                version: core.version,
                mode: __webpack_require__(
                  /*! ./_library */
                  "./node_modules/core-js/modules/_library.js"
                ) ? "pure" : "global",
                copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
              });
            }
          ),
          /***/
          "./node_modules/core-js/modules/_species-constructor.js": (
            /*!**************************************************************!*\
              !*** ./node_modules/core-js/modules/_species-constructor.js ***!
              \**************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var anObject = __webpack_require__(
                /*! ./_an-object */
                "./node_modules/core-js/modules/_an-object.js"
              );
              var aFunction = __webpack_require__(
                /*! ./_a-function */
                "./node_modules/core-js/modules/_a-function.js"
              );
              var SPECIES = __webpack_require__(
                /*! ./_wks */
                "./node_modules/core-js/modules/_wks.js"
              )("species");
              module2.exports = function(O, D) {
                var C = anObject(O).constructor;
                var S;
                return C === void 0 || (S = anObject(C)[SPECIES]) == void 0 ? D : aFunction(S);
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_string-at.js": (
            /*!****************************************************!*\
              !*** ./node_modules/core-js/modules/_string-at.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var toInteger = __webpack_require__(
                /*! ./_to-integer */
                "./node_modules/core-js/modules/_to-integer.js"
              );
              var defined = __webpack_require__(
                /*! ./_defined */
                "./node_modules/core-js/modules/_defined.js"
              );
              module2.exports = function(TO_STRING) {
                return function(that, pos) {
                  var s = String(defined(that));
                  var i = toInteger(pos);
                  var l = s.length;
                  var a, b;
                  if (i < 0 || i >= l)
                    return TO_STRING ? "" : void 0;
                  a = s.charCodeAt(i);
                  return a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 55296 << 10) + (b - 56320) + 65536;
                };
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_string-context.js": (
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/modules/_string-context.js ***!
              \*********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var isRegExp = __webpack_require__(
                /*! ./_is-regexp */
                "./node_modules/core-js/modules/_is-regexp.js"
              );
              var defined = __webpack_require__(
                /*! ./_defined */
                "./node_modules/core-js/modules/_defined.js"
              );
              module2.exports = function(that, searchString, NAME) {
                if (isRegExp(searchString))
                  throw TypeError("String#" + NAME + " doesn't accept regex!");
                return String(defined(that));
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_to-absolute-index.js": (
            /*!************************************************************!*\
              !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
              \************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var toInteger = __webpack_require__(
                /*! ./_to-integer */
                "./node_modules/core-js/modules/_to-integer.js"
              );
              var max = Math.max;
              var min = Math.min;
              module2.exports = function(index, length) {
                index = toInteger(index);
                return index < 0 ? max(index + length, 0) : min(index, length);
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_to-integer.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/modules/_to-integer.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              var ceil = Math.ceil;
              var floor = Math.floor;
              module2.exports = function(it) {
                return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_to-iobject.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/modules/_to-iobject.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var IObject = __webpack_require__(
                /*! ./_iobject */
                "./node_modules/core-js/modules/_iobject.js"
              );
              var defined = __webpack_require__(
                /*! ./_defined */
                "./node_modules/core-js/modules/_defined.js"
              );
              module2.exports = function(it) {
                return IObject(defined(it));
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_to-length.js": (
            /*!****************************************************!*\
              !*** ./node_modules/core-js/modules/_to-length.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var toInteger = __webpack_require__(
                /*! ./_to-integer */
                "./node_modules/core-js/modules/_to-integer.js"
              );
              var min = Math.min;
              module2.exports = function(it) {
                return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_to-object.js": (
            /*!****************************************************!*\
              !*** ./node_modules/core-js/modules/_to-object.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var defined = __webpack_require__(
                /*! ./_defined */
                "./node_modules/core-js/modules/_defined.js"
              );
              module2.exports = function(it) {
                return Object(defined(it));
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_to-primitive.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/modules/_to-primitive.js ***!
              \*******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var isObject = __webpack_require__(
                /*! ./_is-object */
                "./node_modules/core-js/modules/_is-object.js"
              );
              module2.exports = function(it, S) {
                if (!isObject(it))
                  return it;
                var fn, val;
                if (S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it)))
                  return val;
                if (typeof (fn = it.valueOf) == "function" && !isObject(val = fn.call(it)))
                  return val;
                if (!S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it)))
                  return val;
                throw TypeError("Can't convert object to primitive value");
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_uid.js": (
            /*!**********************************************!*\
              !*** ./node_modules/core-js/modules/_uid.js ***!
              \**********************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              var id = 0;
              var px = Math.random();
              module2.exports = function(key) {
                return "Symbol(".concat(key === void 0 ? "" : key, ")_", (++id + px).toString(36));
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_wks-define.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/modules/_wks-define.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var global = __webpack_require__(
                /*! ./_global */
                "./node_modules/core-js/modules/_global.js"
              );
              var core = __webpack_require__(
                /*! ./_core */
                "./node_modules/core-js/modules/_core.js"
              );
              var LIBRARY = __webpack_require__(
                /*! ./_library */
                "./node_modules/core-js/modules/_library.js"
              );
              var wksExt = __webpack_require__(
                /*! ./_wks-ext */
                "./node_modules/core-js/modules/_wks-ext.js"
              );
              var defineProperty = __webpack_require__(
                /*! ./_object-dp */
                "./node_modules/core-js/modules/_object-dp.js"
              ).f;
              module2.exports = function(name2) {
                var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
                if (name2.charAt(0) != "_" && !(name2 in $Symbol))
                  defineProperty($Symbol, name2, { value: wksExt.f(name2) });
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/_wks-ext.js": (
            /*!**************************************************!*\
              !*** ./node_modules/core-js/modules/_wks-ext.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              exports2.f = __webpack_require__(
                /*! ./_wks */
                "./node_modules/core-js/modules/_wks.js"
              );
            }
          ),
          /***/
          "./node_modules/core-js/modules/_wks.js": (
            /*!**********************************************!*\
              !*** ./node_modules/core-js/modules/_wks.js ***!
              \**********************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var store = __webpack_require__(
                /*! ./_shared */
                "./node_modules/core-js/modules/_shared.js"
              )("wks");
              var uid = __webpack_require__(
                /*! ./_uid */
                "./node_modules/core-js/modules/_uid.js"
              );
              var Symbol2 = __webpack_require__(
                /*! ./_global */
                "./node_modules/core-js/modules/_global.js"
              ).Symbol;
              var USE_SYMBOL = typeof Symbol2 == "function";
              var $exports = module2.exports = function(name2) {
                return store[name2] || (store[name2] = USE_SYMBOL && Symbol2[name2] || (USE_SYMBOL ? Symbol2 : uid)("Symbol." + name2));
              };
              $exports.store = store;
            }
          ),
          /***/
          "./node_modules/core-js/modules/core.get-iterator-method.js": (
            /*!******************************************************************!*\
              !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
              \******************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var classof = __webpack_require__(
                /*! ./_classof */
                "./node_modules/core-js/modules/_classof.js"
              );
              var ITERATOR = __webpack_require__(
                /*! ./_wks */
                "./node_modules/core-js/modules/_wks.js"
              )("iterator");
              var Iterators = __webpack_require__(
                /*! ./_iterators */
                "./node_modules/core-js/modules/_iterators.js"
              );
              module2.exports = __webpack_require__(
                /*! ./_core */
                "./node_modules/core-js/modules/_core.js"
              ).getIteratorMethod = function(it) {
                if (it != void 0)
                  return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/es6.array.from.js": (
            /*!********************************************************!*\
              !*** ./node_modules/core-js/modules/es6.array.from.js ***!
              \********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var ctx = __webpack_require__(
                /*! ./_ctx */
                "./node_modules/core-js/modules/_ctx.js"
              );
              var $export = __webpack_require__(
                /*! ./_export */
                "./node_modules/core-js/modules/_export.js"
              );
              var toObject = __webpack_require__(
                /*! ./_to-object */
                "./node_modules/core-js/modules/_to-object.js"
              );
              var call = __webpack_require__(
                /*! ./_iter-call */
                "./node_modules/core-js/modules/_iter-call.js"
              );
              var isArrayIter = __webpack_require__(
                /*! ./_is-array-iter */
                "./node_modules/core-js/modules/_is-array-iter.js"
              );
              var toLength = __webpack_require__(
                /*! ./_to-length */
                "./node_modules/core-js/modules/_to-length.js"
              );
              var createProperty = __webpack_require__(
                /*! ./_create-property */
                "./node_modules/core-js/modules/_create-property.js"
              );
              var getIterFn = __webpack_require__(
                /*! ./core.get-iterator-method */
                "./node_modules/core-js/modules/core.get-iterator-method.js"
              );
              $export($export.S + $export.F * !__webpack_require__(
                /*! ./_iter-detect */
                "./node_modules/core-js/modules/_iter-detect.js"
              )(function(iter) {
                Array.from(iter);
              }), "Array", {
                // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
                from: function from(arrayLike) {
                  var O = toObject(arrayLike);
                  var C = typeof this == "function" ? this : Array;
                  var aLen = arguments.length;
                  var mapfn = aLen > 1 ? arguments[1] : void 0;
                  var mapping = mapfn !== void 0;
                  var index = 0;
                  var iterFn = getIterFn(O);
                  var length, result, step, iterator;
                  if (mapping)
                    mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : void 0, 2);
                  if (iterFn != void 0 && !(C == Array && isArrayIter(iterFn))) {
                    for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
                      createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
                    }
                  } else {
                    length = toLength(O.length);
                    for (result = new C(length); length > index; index++) {
                      createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
                    }
                  }
                  result.length = index;
                  return result;
                }
              });
            }
          ),
          /***/
          "./node_modules/core-js/modules/es6.array.iterator.js": (
            /*!************************************************************!*\
              !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
              \************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var addToUnscopables = __webpack_require__(
                /*! ./_add-to-unscopables */
                "./node_modules/core-js/modules/_add-to-unscopables.js"
              );
              var step = __webpack_require__(
                /*! ./_iter-step */
                "./node_modules/core-js/modules/_iter-step.js"
              );
              var Iterators = __webpack_require__(
                /*! ./_iterators */
                "./node_modules/core-js/modules/_iterators.js"
              );
              var toIObject = __webpack_require__(
                /*! ./_to-iobject */
                "./node_modules/core-js/modules/_to-iobject.js"
              );
              module2.exports = __webpack_require__(
                /*! ./_iter-define */
                "./node_modules/core-js/modules/_iter-define.js"
              )(Array, "Array", function(iterated, kind) {
                this._t = toIObject(iterated);
                this._i = 0;
                this._k = kind;
              }, function() {
                var O = this._t;
                var kind = this._k;
                var index = this._i++;
                if (!O || index >= O.length) {
                  this._t = void 0;
                  return step(1);
                }
                if (kind == "keys")
                  return step(0, index);
                if (kind == "values")
                  return step(0, O[index]);
                return step(0, [index, O[index]]);
              }, "values");
              Iterators.Arguments = Iterators.Array;
              addToUnscopables("keys");
              addToUnscopables("values");
              addToUnscopables("entries");
            }
          ),
          /***/
          "./node_modules/core-js/modules/es6.function.name.js": (
            /*!***********************************************************!*\
              !*** ./node_modules/core-js/modules/es6.function.name.js ***!
              \***********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var dP = __webpack_require__(
                /*! ./_object-dp */
                "./node_modules/core-js/modules/_object-dp.js"
              ).f;
              var FProto = Function.prototype;
              var nameRE = /^\s*function ([^ (]*)/;
              var NAME = "name";
              NAME in FProto || __webpack_require__(
                /*! ./_descriptors */
                "./node_modules/core-js/modules/_descriptors.js"
              ) && dP(FProto, NAME, {
                configurable: true,
                get: function() {
                  try {
                    return ("" + this).match(nameRE)[1];
                  } catch (e) {
                    return "";
                  }
                }
              });
            }
          ),
          /***/
          "./node_modules/core-js/modules/es6.number.is-finite.js": (
            /*!**************************************************************!*\
              !*** ./node_modules/core-js/modules/es6.number.is-finite.js ***!
              \**************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var $export = __webpack_require__(
                /*! ./_export */
                "./node_modules/core-js/modules/_export.js"
              );
              var _isFinite = __webpack_require__(
                /*! ./_global */
                "./node_modules/core-js/modules/_global.js"
              ).isFinite;
              $export($export.S, "Number", {
                isFinite: function isFinite(it) {
                  return typeof it == "number" && _isFinite(it);
                }
              });
            }
          ),
          /***/
          "./node_modules/core-js/modules/es6.object.to-string.js": (
            /*!**************************************************************!*\
              !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
              \**************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var classof = __webpack_require__(
                /*! ./_classof */
                "./node_modules/core-js/modules/_classof.js"
              );
              var test = {};
              test[__webpack_require__(
                /*! ./_wks */
                "./node_modules/core-js/modules/_wks.js"
              )("toStringTag")] = "z";
              if (test + "" != "[object z]") {
                __webpack_require__(
                  /*! ./_redefine */
                  "./node_modules/core-js/modules/_redefine.js"
                )(Object.prototype, "toString", function toString() {
                  return "[object " + classof(this) + "]";
                }, true);
              }
            }
          ),
          /***/
          "./node_modules/core-js/modules/es6.regexp.exec.js": (
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
              \*********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var regexpExec = __webpack_require__(
                /*! ./_regexp-exec */
                "./node_modules/core-js/modules/_regexp-exec.js"
              );
              __webpack_require__(
                /*! ./_export */
                "./node_modules/core-js/modules/_export.js"
              )({
                target: "RegExp",
                proto: true,
                forced: regexpExec !== /./.exec
              }, {
                exec: regexpExec
              });
            }
          ),
          /***/
          "./node_modules/core-js/modules/es6.regexp.split.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var isRegExp = __webpack_require__(
                /*! ./_is-regexp */
                "./node_modules/core-js/modules/_is-regexp.js"
              );
              var anObject = __webpack_require__(
                /*! ./_an-object */
                "./node_modules/core-js/modules/_an-object.js"
              );
              var speciesConstructor = __webpack_require__(
                /*! ./_species-constructor */
                "./node_modules/core-js/modules/_species-constructor.js"
              );
              var advanceStringIndex = __webpack_require__(
                /*! ./_advance-string-index */
                "./node_modules/core-js/modules/_advance-string-index.js"
              );
              var toLength = __webpack_require__(
                /*! ./_to-length */
                "./node_modules/core-js/modules/_to-length.js"
              );
              var callRegExpExec = __webpack_require__(
                /*! ./_regexp-exec-abstract */
                "./node_modules/core-js/modules/_regexp-exec-abstract.js"
              );
              var regexpExec = __webpack_require__(
                /*! ./_regexp-exec */
                "./node_modules/core-js/modules/_regexp-exec.js"
              );
              var fails = __webpack_require__(
                /*! ./_fails */
                "./node_modules/core-js/modules/_fails.js"
              );
              var $min = Math.min;
              var $push = [].push;
              var $SPLIT = "split";
              var LENGTH = "length";
              var LAST_INDEX = "lastIndex";
              var MAX_UINT32 = 4294967295;
              var SUPPORTS_Y = !fails(function() {
              });
              __webpack_require__(
                /*! ./_fix-re-wks */
                "./node_modules/core-js/modules/_fix-re-wks.js"
              )("split", 2, function(defined, SPLIT, $split, maybeCallNative) {
                var internalSplit;
                if ("abbc"[$SPLIT](/(b)*/)[1] == "c" || "test"[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || "ab"[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || "."[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || "."[$SPLIT](/()()/)[LENGTH] > 1 || ""[$SPLIT](/.?/)[LENGTH]) {
                  internalSplit = function(separator, limit2) {
                    var string = String(this);
                    if (separator === void 0 && limit2 === 0)
                      return [];
                    if (!isRegExp(separator))
                      return $split.call(string, separator, limit2);
                    var output = [];
                    var flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.unicode ? "u" : "") + (separator.sticky ? "y" : "");
                    var lastLastIndex = 0;
                    var splitLimit = limit2 === void 0 ? MAX_UINT32 : limit2 >>> 0;
                    var separatorCopy = new RegExp(separator.source, flags + "g");
                    var match, lastIndex, lastLength;
                    while (match = regexpExec.call(separatorCopy, string)) {
                      lastIndex = separatorCopy[LAST_INDEX];
                      if (lastIndex > lastLastIndex) {
                        output.push(string.slice(lastLastIndex, match.index));
                        if (match[LENGTH] > 1 && match.index < string[LENGTH])
                          $push.apply(output, match.slice(1));
                        lastLength = match[0][LENGTH];
                        lastLastIndex = lastIndex;
                        if (output[LENGTH] >= splitLimit)
                          break;
                      }
                      if (separatorCopy[LAST_INDEX] === match.index)
                        separatorCopy[LAST_INDEX]++;
                    }
                    if (lastLastIndex === string[LENGTH]) {
                      if (lastLength || !separatorCopy.test(""))
                        output.push("");
                    } else
                      output.push(string.slice(lastLastIndex));
                    return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
                  };
                } else if ("0"[$SPLIT](void 0, 0)[LENGTH]) {
                  internalSplit = function(separator, limit2) {
                    return separator === void 0 && limit2 === 0 ? [] : $split.call(this, separator, limit2);
                  };
                } else {
                  internalSplit = $split;
                }
                return [
                  // `String.prototype.split` method
                  // https://tc39.github.io/ecma262/#sec-string.prototype.split
                  function split(separator, limit2) {
                    var O = defined(this);
                    var splitter = separator == void 0 ? void 0 : separator[SPLIT];
                    return splitter !== void 0 ? splitter.call(separator, O, limit2) : internalSplit.call(String(O), separator, limit2);
                  },
                  // `RegExp.prototype[@@split]` method
                  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
                  //
                  // NOTE: This cannot be properly polyfilled in engines that don't support
                  // the 'y' flag.
                  function(regexp, limit2) {
                    var res = maybeCallNative(internalSplit, regexp, this, limit2, internalSplit !== $split);
                    if (res.done)
                      return res.value;
                    var rx = anObject(regexp);
                    var S = String(this);
                    var C = speciesConstructor(rx, RegExp);
                    var unicodeMatching = rx.unicode;
                    var flags = (rx.ignoreCase ? "i" : "") + (rx.multiline ? "m" : "") + (rx.unicode ? "u" : "") + (SUPPORTS_Y ? "y" : "g");
                    var splitter = new C(SUPPORTS_Y ? rx : "^(?:" + rx.source + ")", flags);
                    var lim = limit2 === void 0 ? MAX_UINT32 : limit2 >>> 0;
                    if (lim === 0)
                      return [];
                    if (S.length === 0)
                      return callRegExpExec(splitter, S) === null ? [S] : [];
                    var p = 0;
                    var q = 0;
                    var A = [];
                    while (q < S.length) {
                      splitter.lastIndex = SUPPORTS_Y ? q : 0;
                      var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
                      var e;
                      if (z === null || (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
                        q = advanceStringIndex(S, q, unicodeMatching);
                      } else {
                        A.push(S.slice(p, q));
                        if (A.length === lim)
                          return A;
                        for (var i = 1; i <= z.length - 1; i++) {
                          A.push(z[i]);
                          if (A.length === lim)
                            return A;
                        }
                        q = p = e;
                      }
                    }
                    A.push(S.slice(p));
                    return A;
                  }
                ];
              });
            }
          ),
          /***/
          "./node_modules/core-js/modules/es6.string.includes.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
              \*************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var $export = __webpack_require__(
                /*! ./_export */
                "./node_modules/core-js/modules/_export.js"
              );
              var context = __webpack_require__(
                /*! ./_string-context */
                "./node_modules/core-js/modules/_string-context.js"
              );
              var INCLUDES = "includes";
              $export($export.P + $export.F * __webpack_require__(
                /*! ./_fails-is-regexp */
                "./node_modules/core-js/modules/_fails-is-regexp.js"
              )(INCLUDES), "String", {
                includes: function includes(searchString) {
                  return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            }
          ),
          /***/
          "./node_modules/core-js/modules/es6.symbol.js": (
            /*!****************************************************!*\
              !*** ./node_modules/core-js/modules/es6.symbol.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var global = __webpack_require__(
                /*! ./_global */
                "./node_modules/core-js/modules/_global.js"
              );
              var has = __webpack_require__(
                /*! ./_has */
                "./node_modules/core-js/modules/_has.js"
              );
              var DESCRIPTORS = __webpack_require__(
                /*! ./_descriptors */
                "./node_modules/core-js/modules/_descriptors.js"
              );
              var $export = __webpack_require__(
                /*! ./_export */
                "./node_modules/core-js/modules/_export.js"
              );
              var redefine = __webpack_require__(
                /*! ./_redefine */
                "./node_modules/core-js/modules/_redefine.js"
              );
              var META = __webpack_require__(
                /*! ./_meta */
                "./node_modules/core-js/modules/_meta.js"
              ).KEY;
              var $fails = __webpack_require__(
                /*! ./_fails */
                "./node_modules/core-js/modules/_fails.js"
              );
              var shared = __webpack_require__(
                /*! ./_shared */
                "./node_modules/core-js/modules/_shared.js"
              );
              var setToStringTag = __webpack_require__(
                /*! ./_set-to-string-tag */
                "./node_modules/core-js/modules/_set-to-string-tag.js"
              );
              var uid = __webpack_require__(
                /*! ./_uid */
                "./node_modules/core-js/modules/_uid.js"
              );
              var wks = __webpack_require__(
                /*! ./_wks */
                "./node_modules/core-js/modules/_wks.js"
              );
              var wksExt = __webpack_require__(
                /*! ./_wks-ext */
                "./node_modules/core-js/modules/_wks-ext.js"
              );
              var wksDefine = __webpack_require__(
                /*! ./_wks-define */
                "./node_modules/core-js/modules/_wks-define.js"
              );
              var enumKeys = __webpack_require__(
                /*! ./_enum-keys */
                "./node_modules/core-js/modules/_enum-keys.js"
              );
              var isArray = __webpack_require__(
                /*! ./_is-array */
                "./node_modules/core-js/modules/_is-array.js"
              );
              var anObject = __webpack_require__(
                /*! ./_an-object */
                "./node_modules/core-js/modules/_an-object.js"
              );
              var isObject = __webpack_require__(
                /*! ./_is-object */
                "./node_modules/core-js/modules/_is-object.js"
              );
              var toObject = __webpack_require__(
                /*! ./_to-object */
                "./node_modules/core-js/modules/_to-object.js"
              );
              var toIObject = __webpack_require__(
                /*! ./_to-iobject */
                "./node_modules/core-js/modules/_to-iobject.js"
              );
              var toPrimitive = __webpack_require__(
                /*! ./_to-primitive */
                "./node_modules/core-js/modules/_to-primitive.js"
              );
              var createDesc = __webpack_require__(
                /*! ./_property-desc */
                "./node_modules/core-js/modules/_property-desc.js"
              );
              var _create = __webpack_require__(
                /*! ./_object-create */
                "./node_modules/core-js/modules/_object-create.js"
              );
              var gOPNExt = __webpack_require__(
                /*! ./_object-gopn-ext */
                "./node_modules/core-js/modules/_object-gopn-ext.js"
              );
              var $GOPD = __webpack_require__(
                /*! ./_object-gopd */
                "./node_modules/core-js/modules/_object-gopd.js"
              );
              var $GOPS = __webpack_require__(
                /*! ./_object-gops */
                "./node_modules/core-js/modules/_object-gops.js"
              );
              var $DP = __webpack_require__(
                /*! ./_object-dp */
                "./node_modules/core-js/modules/_object-dp.js"
              );
              var $keys = __webpack_require__(
                /*! ./_object-keys */
                "./node_modules/core-js/modules/_object-keys.js"
              );
              var gOPD = $GOPD.f;
              var dP = $DP.f;
              var gOPN = gOPNExt.f;
              var $Symbol = global.Symbol;
              var $JSON = global.JSON;
              var _stringify = $JSON && $JSON.stringify;
              var PROTOTYPE = "prototype";
              var HIDDEN = wks("_hidden");
              var TO_PRIMITIVE = wks("toPrimitive");
              var isEnum = {}.propertyIsEnumerable;
              var SymbolRegistry = shared("symbol-registry");
              var AllSymbols = shared("symbols");
              var OPSymbols = shared("op-symbols");
              var ObjectProto = Object[PROTOTYPE];
              var USE_NATIVE = typeof $Symbol == "function" && !!$GOPS.f;
              var QObject = global.QObject;
              var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
              var setSymbolDesc = DESCRIPTORS && $fails(function() {
                return _create(dP({}, "a", {
                  get: function() {
                    return dP(this, "a", { value: 7 }).a;
                  }
                })).a != 7;
              }) ? function(it, key, D) {
                var protoDesc = gOPD(ObjectProto, key);
                if (protoDesc)
                  delete ObjectProto[key];
                dP(it, key, D);
                if (protoDesc && it !== ObjectProto)
                  dP(ObjectProto, key, protoDesc);
              } : dP;
              var wrap = function(tag) {
                var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
                sym._k = tag;
                return sym;
              };
              var isSymbol = USE_NATIVE && typeof $Symbol.iterator == "symbol" ? function(it) {
                return typeof it == "symbol";
              } : function(it) {
                return it instanceof $Symbol;
              };
              var $defineProperty = function defineProperty(it, key, D) {
                if (it === ObjectProto)
                  $defineProperty(OPSymbols, key, D);
                anObject(it);
                key = toPrimitive(key, true);
                anObject(D);
                if (has(AllSymbols, key)) {
                  if (!D.enumerable) {
                    if (!has(it, HIDDEN))
                      dP(it, HIDDEN, createDesc(1, {}));
                    it[HIDDEN][key] = true;
                  } else {
                    if (has(it, HIDDEN) && it[HIDDEN][key])
                      it[HIDDEN][key] = false;
                    D = _create(D, { enumerable: createDesc(0, false) });
                  }
                  return setSymbolDesc(it, key, D);
                }
                return dP(it, key, D);
              };
              var $defineProperties = function defineProperties(it, P) {
                anObject(it);
                var keys = enumKeys(P = toIObject(P));
                var i = 0;
                var l = keys.length;
                var key;
                while (l > i)
                  $defineProperty(it, key = keys[i++], P[key]);
                return it;
              };
              var $create = function create(it, P) {
                return P === void 0 ? _create(it) : $defineProperties(_create(it), P);
              };
              var $propertyIsEnumerable = function propertyIsEnumerable(key) {
                var E = isEnum.call(this, key = toPrimitive(key, true));
                if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))
                  return false;
                return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
              };
              var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
                it = toIObject(it);
                key = toPrimitive(key, true);
                if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))
                  return;
                var D = gOPD(it, key);
                if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))
                  D.enumerable = true;
                return D;
              };
              var $getOwnPropertyNames = function getOwnPropertyNames(it) {
                var names = gOPN(toIObject(it));
                var result = [];
                var i = 0;
                var key;
                while (names.length > i) {
                  if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)
                    result.push(key);
                }
                return result;
              };
              var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
                var IS_OP = it === ObjectProto;
                var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
                var result = [];
                var i = 0;
                var key;
                while (names.length > i) {
                  if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))
                    result.push(AllSymbols[key]);
                }
                return result;
              };
              if (!USE_NATIVE) {
                $Symbol = function Symbol2() {
                  if (this instanceof $Symbol)
                    throw TypeError("Symbol is not a constructor!");
                  var tag = uid(arguments.length > 0 ? arguments[0] : void 0);
                  var $set = function(value) {
                    if (this === ObjectProto)
                      $set.call(OPSymbols, value);
                    if (has(this, HIDDEN) && has(this[HIDDEN], tag))
                      this[HIDDEN][tag] = false;
                    setSymbolDesc(this, tag, createDesc(1, value));
                  };
                  if (DESCRIPTORS && setter)
                    setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
                  return wrap(tag);
                };
                redefine($Symbol[PROTOTYPE], "toString", function toString() {
                  return this._k;
                });
                $GOPD.f = $getOwnPropertyDescriptor;
                $DP.f = $defineProperty;
                __webpack_require__(
                  /*! ./_object-gopn */
                  "./node_modules/core-js/modules/_object-gopn.js"
                ).f = gOPNExt.f = $getOwnPropertyNames;
                __webpack_require__(
                  /*! ./_object-pie */
                  "./node_modules/core-js/modules/_object-pie.js"
                ).f = $propertyIsEnumerable;
                $GOPS.f = $getOwnPropertySymbols;
                if (DESCRIPTORS && !__webpack_require__(
                  /*! ./_library */
                  "./node_modules/core-js/modules/_library.js"
                )) {
                  redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable, true);
                }
                wksExt.f = function(name2) {
                  return wrap(wks(name2));
                };
              }
              $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
              for (var es6Symbols = (
                // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
                "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(",")
              ), j = 0; es6Symbols.length > j; )
                wks(es6Symbols[j++]);
              for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k; )
                wksDefine(wellKnownSymbols[k++]);
              $export($export.S + $export.F * !USE_NATIVE, "Symbol", {
                // 19.4.2.1 Symbol.for(key)
                "for": function(key) {
                  return has(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
                },
                // 19.4.2.5 Symbol.keyFor(sym)
                keyFor: function keyFor(sym) {
                  if (!isSymbol(sym))
                    throw TypeError(sym + " is not a symbol!");
                  for (var key in SymbolRegistry)
                    if (SymbolRegistry[key] === sym)
                      return key;
                },
                useSetter: function() {
                  setter = true;
                },
                useSimple: function() {
                  setter = false;
                }
              });
              $export($export.S + $export.F * !USE_NATIVE, "Object", {
                // 19.1.2.2 Object.create(O [, Properties])
                create: $create,
                // 19.1.2.4 Object.defineProperty(O, P, Attributes)
                defineProperty: $defineProperty,
                // 19.1.2.3 Object.defineProperties(O, Properties)
                defineProperties: $defineProperties,
                // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
                getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
                // 19.1.2.7 Object.getOwnPropertyNames(O)
                getOwnPropertyNames: $getOwnPropertyNames,
                // 19.1.2.8 Object.getOwnPropertySymbols(O)
                getOwnPropertySymbols: $getOwnPropertySymbols
              });
              var FAILS_ON_PRIMITIVES = $fails(function() {
                $GOPS.f(1);
              });
              $export($export.S + $export.F * FAILS_ON_PRIMITIVES, "Object", {
                getOwnPropertySymbols: function getOwnPropertySymbols(it) {
                  return $GOPS.f(toObject(it));
                }
              });
              $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
                var S = $Symbol();
                return _stringify([S]) != "[null]" || _stringify({ a: S }) != "{}" || _stringify(Object(S)) != "{}";
              })), "JSON", {
                stringify: function stringify(it) {
                  var args = [it];
                  var i = 1;
                  var replacer, $replacer;
                  while (arguments.length > i)
                    args.push(arguments[i++]);
                  $replacer = replacer = args[1];
                  if (!isObject(replacer) && it === void 0 || isSymbol(it))
                    return;
                  if (!isArray(replacer))
                    replacer = function(key, value) {
                      if (typeof $replacer == "function")
                        value = $replacer.call(this, key, value);
                      if (!isSymbol(value))
                        return value;
                    };
                  args[1] = replacer;
                  return _stringify.apply($JSON, args);
                }
              });
              $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(
                /*! ./_hide */
                "./node_modules/core-js/modules/_hide.js"
              )($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
              setToStringTag($Symbol, "Symbol");
              setToStringTag(Math, "Math", true);
              setToStringTag(global.JSON, "JSON", true);
            }
          ),
          /***/
          "./node_modules/core-js/modules/es7.array.includes.js": (
            /*!************************************************************!*\
              !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
              \************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var $export = __webpack_require__(
                /*! ./_export */
                "./node_modules/core-js/modules/_export.js"
              );
              var $includes = __webpack_require__(
                /*! ./_array-includes */
                "./node_modules/core-js/modules/_array-includes.js"
              )(true);
              $export($export.P, "Array", {
                includes: function includes(el) {
                  return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
              __webpack_require__(
                /*! ./_add-to-unscopables */
                "./node_modules/core-js/modules/_add-to-unscopables.js"
              )("includes");
            }
          ),
          /***/
          "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js": (
            /*!*********************************************************************************!*\
              !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
              \*********************************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var $export = __webpack_require__(
                /*! ./_export */
                "./node_modules/core-js/modules/_export.js"
              );
              var ownKeys = __webpack_require__(
                /*! ./_own-keys */
                "./node_modules/core-js/modules/_own-keys.js"
              );
              var toIObject = __webpack_require__(
                /*! ./_to-iobject */
                "./node_modules/core-js/modules/_to-iobject.js"
              );
              var gOPD = __webpack_require__(
                /*! ./_object-gopd */
                "./node_modules/core-js/modules/_object-gopd.js"
              );
              var createProperty = __webpack_require__(
                /*! ./_create-property */
                "./node_modules/core-js/modules/_create-property.js"
              );
              $export($export.S, "Object", {
                getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
                  var O = toIObject(object);
                  var getDesc = gOPD.f;
                  var keys = ownKeys(O);
                  var result = {};
                  var i = 0;
                  var key, desc;
                  while (keys.length > i) {
                    desc = getDesc(O, key = keys[i++]);
                    if (desc !== void 0)
                      createProperty(result, key, desc);
                  }
                  return result;
                }
              });
            }
          ),
          /***/
          "./node_modules/core-js/modules/es7.symbol.async-iterator.js": (
            /*!*******************************************************************!*\
              !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
              \*******************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              __webpack_require__(
                /*! ./_wks-define */
                "./node_modules/core-js/modules/_wks-define.js"
              )("asyncIterator");
            }
          ),
          /***/
          "./node_modules/core-js/modules/web.dom.iterable.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var $iterators = __webpack_require__(
                /*! ./es6.array.iterator */
                "./node_modules/core-js/modules/es6.array.iterator.js"
              );
              var getKeys = __webpack_require__(
                /*! ./_object-keys */
                "./node_modules/core-js/modules/_object-keys.js"
              );
              var redefine = __webpack_require__(
                /*! ./_redefine */
                "./node_modules/core-js/modules/_redefine.js"
              );
              var global = __webpack_require__(
                /*! ./_global */
                "./node_modules/core-js/modules/_global.js"
              );
              var hide = __webpack_require__(
                /*! ./_hide */
                "./node_modules/core-js/modules/_hide.js"
              );
              var Iterators = __webpack_require__(
                /*! ./_iterators */
                "./node_modules/core-js/modules/_iterators.js"
              );
              var wks = __webpack_require__(
                /*! ./_wks */
                "./node_modules/core-js/modules/_wks.js"
              );
              var ITERATOR = wks("iterator");
              var TO_STRING_TAG = wks("toStringTag");
              var ArrayValues = Iterators.Array;
              var DOMIterables = {
                CSSRuleList: true,
                // TODO: Not spec compliant, should be false.
                CSSStyleDeclaration: false,
                CSSValueList: false,
                ClientRectList: false,
                DOMRectList: false,
                DOMStringList: false,
                DOMTokenList: true,
                DataTransferItemList: false,
                FileList: false,
                HTMLAllCollection: false,
                HTMLCollection: false,
                HTMLFormElement: false,
                HTMLSelectElement: false,
                MediaList: true,
                // TODO: Not spec compliant, should be false.
                MimeTypeArray: false,
                NamedNodeMap: false,
                NodeList: true,
                PaintRequestList: false,
                Plugin: false,
                PluginArray: false,
                SVGLengthList: false,
                SVGNumberList: false,
                SVGPathSegList: false,
                SVGPointList: false,
                SVGStringList: false,
                SVGTransformList: false,
                SourceBufferList: false,
                StyleSheetList: true,
                // TODO: Not spec compliant, should be false.
                TextTrackCueList: false,
                TextTrackList: false,
                TouchList: false
              };
              for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
                var NAME = collections[i];
                var explicit = DOMIterables[NAME];
                var Collection = global[NAME];
                var proto = Collection && Collection.prototype;
                var key;
                if (proto) {
                  if (!proto[ITERATOR])
                    hide(proto, ITERATOR, ArrayValues);
                  if (!proto[TO_STRING_TAG])
                    hide(proto, TO_STRING_TAG, NAME);
                  Iterators[NAME] = ArrayValues;
                  if (explicit) {
                    for (key in $iterators)
                      if (!proto[key])
                        redefine(proto, key, $iterators[key], true);
                  }
                }
              }
            }
          ),
          /***/
          "./node_modules/crypt/crypt.js": (
            /*!*************************************!*\
              !*** ./node_modules/crypt/crypt.js ***!
              \*************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              (function() {
                var base64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", crypt = {
                  // Bit-wise rotation left
                  rotl: function(n, b) {
                    return n << b | n >>> 32 - b;
                  },
                  // Bit-wise rotation right
                  rotr: function(n, b) {
                    return n << 32 - b | n >>> b;
                  },
                  // Swap big-endian to little-endian and vice versa
                  endian: function(n) {
                    if (n.constructor == Number) {
                      return crypt.rotl(n, 8) & 16711935 | crypt.rotl(n, 24) & 4278255360;
                    }
                    for (var i = 0; i < n.length; i++)
                      n[i] = crypt.endian(n[i]);
                    return n;
                  },
                  // Generate an array of any length of random bytes
                  randomBytes: function(n) {
                    for (var bytes = []; n > 0; n--)
                      bytes.push(Math.floor(Math.random() * 256));
                    return bytes;
                  },
                  // Convert a byte array to big-endian 32-bit words
                  bytesToWords: function(bytes) {
                    for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
                      words[b >>> 5] |= bytes[i] << 24 - b % 32;
                    return words;
                  },
                  // Convert big-endian 32-bit words to a byte array
                  wordsToBytes: function(words) {
                    for (var bytes = [], b = 0; b < words.length * 32; b += 8)
                      bytes.push(words[b >>> 5] >>> 24 - b % 32 & 255);
                    return bytes;
                  },
                  // Convert a byte array to a hex string
                  bytesToHex: function(bytes) {
                    for (var hex = [], i = 0; i < bytes.length; i++) {
                      hex.push((bytes[i] >>> 4).toString(16));
                      hex.push((bytes[i] & 15).toString(16));
                    }
                    return hex.join("");
                  },
                  // Convert a hex string to a byte array
                  hexToBytes: function(hex) {
                    for (var bytes = [], c = 0; c < hex.length; c += 2)
                      bytes.push(parseInt(hex.substr(c, 2), 16));
                    return bytes;
                  },
                  // Convert a byte array to a base-64 string
                  bytesToBase64: function(bytes) {
                    for (var base64 = [], i = 0; i < bytes.length; i += 3) {
                      var triplet = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
                      for (var j = 0; j < 4; j++)
                        if (i * 8 + j * 6 <= bytes.length * 8)
                          base64.push(base64map.charAt(triplet >>> 6 * (3 - j) & 63));
                        else
                          base64.push("=");
                    }
                    return base64.join("");
                  },
                  // Convert a base-64 string to a byte array
                  base64ToBytes: function(base64) {
                    base64 = base64.replace(/[^A-Z0-9+\/]/ig, "");
                    for (var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4) {
                      if (imod4 == 0)
                        continue;
                      bytes.push((base64map.indexOf(base64.charAt(i - 1)) & Math.pow(2, -2 * imod4 + 8) - 1) << imod4 * 2 | base64map.indexOf(base64.charAt(i)) >>> 6 - imod4 * 2);
                    }
                    return bytes;
                  }
                };
                module2.exports = crypt;
              })();
            }
          ),
          /***/
          "./node_modules/is-buffer/index.js": (
            /*!*****************************************!*\
              !*** ./node_modules/is-buffer/index.js ***!
              \*****************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              /*!
               * Determine if an object is a Buffer
               *
               * @author   Feross Aboukhadijeh <https://feross.org>
               * @license  MIT
               */
              module2.exports = function(obj) {
                return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
              };
              function isBuffer(obj) {
                return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
              }
              function isSlowBuffer(obj) {
                return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isBuffer(obj.slice(0, 0));
              }
            }
          ),
          /***/
          "./node_modules/md5/md5.js": (
            /*!*********************************!*\
              !*** ./node_modules/md5/md5.js ***!
              \*********************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              (function() {
                var crypt = __webpack_require__(
                  /*! crypt */
                  "./node_modules/crypt/crypt.js"
                ), utf8 = __webpack_require__(
                  /*! charenc */
                  "./node_modules/charenc/charenc.js"
                ).utf8, isBuffer = __webpack_require__(
                  /*! is-buffer */
                  "./node_modules/is-buffer/index.js"
                ), bin = __webpack_require__(
                  /*! charenc */
                  "./node_modules/charenc/charenc.js"
                ).bin, md5 = function(message, options) {
                  if (message.constructor == String)
                    if (options && options.encoding === "binary")
                      message = bin.stringToBytes(message);
                    else
                      message = utf8.stringToBytes(message);
                  else if (isBuffer(message))
                    message = Array.prototype.slice.call(message, 0);
                  else if (!Array.isArray(message) && message.constructor !== Uint8Array)
                    message = message.toString();
                  var m = crypt.bytesToWords(message), l = message.length * 8, a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
                  for (var i = 0; i < m.length; i++) {
                    m[i] = (m[i] << 8 | m[i] >>> 24) & 16711935 | (m[i] << 24 | m[i] >>> 8) & 4278255360;
                  }
                  m[l >>> 5] |= 128 << l % 32;
                  m[(l + 64 >>> 9 << 4) + 14] = l;
                  var FF = md5._ff, GG = md5._gg, HH = md5._hh, II = md5._ii;
                  for (var i = 0; i < m.length; i += 16) {
                    var aa = a, bb = b, cc = c, dd = d;
                    a = FF(a, b, c, d, m[i + 0], 7, -680876936);
                    d = FF(d, a, b, c, m[i + 1], 12, -389564586);
                    c = FF(c, d, a, b, m[i + 2], 17, 606105819);
                    b = FF(b, c, d, a, m[i + 3], 22, -1044525330);
                    a = FF(a, b, c, d, m[i + 4], 7, -176418897);
                    d = FF(d, a, b, c, m[i + 5], 12, 1200080426);
                    c = FF(c, d, a, b, m[i + 6], 17, -1473231341);
                    b = FF(b, c, d, a, m[i + 7], 22, -45705983);
                    a = FF(a, b, c, d, m[i + 8], 7, 1770035416);
                    d = FF(d, a, b, c, m[i + 9], 12, -1958414417);
                    c = FF(c, d, a, b, m[i + 10], 17, -42063);
                    b = FF(b, c, d, a, m[i + 11], 22, -1990404162);
                    a = FF(a, b, c, d, m[i + 12], 7, 1804603682);
                    d = FF(d, a, b, c, m[i + 13], 12, -40341101);
                    c = FF(c, d, a, b, m[i + 14], 17, -1502002290);
                    b = FF(b, c, d, a, m[i + 15], 22, 1236535329);
                    a = GG(a, b, c, d, m[i + 1], 5, -165796510);
                    d = GG(d, a, b, c, m[i + 6], 9, -1069501632);
                    c = GG(c, d, a, b, m[i + 11], 14, 643717713);
                    b = GG(b, c, d, a, m[i + 0], 20, -373897302);
                    a = GG(a, b, c, d, m[i + 5], 5, -701558691);
                    d = GG(d, a, b, c, m[i + 10], 9, 38016083);
                    c = GG(c, d, a, b, m[i + 15], 14, -660478335);
                    b = GG(b, c, d, a, m[i + 4], 20, -405537848);
                    a = GG(a, b, c, d, m[i + 9], 5, 568446438);
                    d = GG(d, a, b, c, m[i + 14], 9, -1019803690);
                    c = GG(c, d, a, b, m[i + 3], 14, -187363961);
                    b = GG(b, c, d, a, m[i + 8], 20, 1163531501);
                    a = GG(a, b, c, d, m[i + 13], 5, -1444681467);
                    d = GG(d, a, b, c, m[i + 2], 9, -51403784);
                    c = GG(c, d, a, b, m[i + 7], 14, 1735328473);
                    b = GG(b, c, d, a, m[i + 12], 20, -1926607734);
                    a = HH(a, b, c, d, m[i + 5], 4, -378558);
                    d = HH(d, a, b, c, m[i + 8], 11, -2022574463);
                    c = HH(c, d, a, b, m[i + 11], 16, 1839030562);
                    b = HH(b, c, d, a, m[i + 14], 23, -35309556);
                    a = HH(a, b, c, d, m[i + 1], 4, -1530992060);
                    d = HH(d, a, b, c, m[i + 4], 11, 1272893353);
                    c = HH(c, d, a, b, m[i + 7], 16, -155497632);
                    b = HH(b, c, d, a, m[i + 10], 23, -1094730640);
                    a = HH(a, b, c, d, m[i + 13], 4, 681279174);
                    d = HH(d, a, b, c, m[i + 0], 11, -358537222);
                    c = HH(c, d, a, b, m[i + 3], 16, -722521979);
                    b = HH(b, c, d, a, m[i + 6], 23, 76029189);
                    a = HH(a, b, c, d, m[i + 9], 4, -640364487);
                    d = HH(d, a, b, c, m[i + 12], 11, -421815835);
                    c = HH(c, d, a, b, m[i + 15], 16, 530742520);
                    b = HH(b, c, d, a, m[i + 2], 23, -995338651);
                    a = II(a, b, c, d, m[i + 0], 6, -198630844);
                    d = II(d, a, b, c, m[i + 7], 10, 1126891415);
                    c = II(c, d, a, b, m[i + 14], 15, -1416354905);
                    b = II(b, c, d, a, m[i + 5], 21, -57434055);
                    a = II(a, b, c, d, m[i + 12], 6, 1700485571);
                    d = II(d, a, b, c, m[i + 3], 10, -1894986606);
                    c = II(c, d, a, b, m[i + 10], 15, -1051523);
                    b = II(b, c, d, a, m[i + 1], 21, -2054922799);
                    a = II(a, b, c, d, m[i + 8], 6, 1873313359);
                    d = II(d, a, b, c, m[i + 15], 10, -30611744);
                    c = II(c, d, a, b, m[i + 6], 15, -1560198380);
                    b = II(b, c, d, a, m[i + 13], 21, 1309151649);
                    a = II(a, b, c, d, m[i + 4], 6, -145523070);
                    d = II(d, a, b, c, m[i + 11], 10, -1120210379);
                    c = II(c, d, a, b, m[i + 2], 15, 718787259);
                    b = II(b, c, d, a, m[i + 9], 21, -343485551);
                    a = a + aa >>> 0;
                    b = b + bb >>> 0;
                    c = c + cc >>> 0;
                    d = d + dd >>> 0;
                  }
                  return crypt.endian([a, b, c, d]);
                };
                md5._ff = function(a, b, c, d, x, s, t) {
                  var n = a + (b & c | ~b & d) + (x >>> 0) + t;
                  return (n << s | n >>> 32 - s) + b;
                };
                md5._gg = function(a, b, c, d, x, s, t) {
                  var n = a + (b & d | c & ~d) + (x >>> 0) + t;
                  return (n << s | n >>> 32 - s) + b;
                };
                md5._hh = function(a, b, c, d, x, s, t) {
                  var n = a + (b ^ c ^ d) + (x >>> 0) + t;
                  return (n << s | n >>> 32 - s) + b;
                };
                md5._ii = function(a, b, c, d, x, s, t) {
                  var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
                  return (n << s | n >>> 32 - s) + b;
                };
                md5._blocksize = 16;
                md5._digestsize = 16;
                module2.exports = function(message, options) {
                  if (message === void 0 || message === null)
                    throw new Error("Illegal argument " + message);
                  var digestbytes = crypt.wordsToBytes(md5(message, options));
                  return options && options.asBytes ? digestbytes : options && options.asString ? bin.bytesToString(digestbytes) : crypt.bytesToHex(digestbytes);
                };
              })();
            }
          ),
          /***/
          "./node_modules/regenerator-runtime/runtime.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/regenerator-runtime/runtime.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var runtime = function(exports3) {
                var Op = Object.prototype;
                var hasOwn = Op.hasOwnProperty;
                var undefined$1;
                var $Symbol = typeof Symbol === "function" ? Symbol : {};
                var iteratorSymbol = $Symbol.iterator || "@@iterator";
                var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
                var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
                function define(obj, key, value) {
                  Object.defineProperty(obj, key, {
                    value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  });
                  return obj[key];
                }
                try {
                  define({}, "");
                } catch (err) {
                  define = function(obj, key, value) {
                    return obj[key] = value;
                  };
                }
                function wrap(innerFn, outerFn, self2, tryLocsList) {
                  var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
                  var generator = Object.create(protoGenerator.prototype);
                  var context = new Context(tryLocsList || []);
                  generator._invoke = makeInvokeMethod(innerFn, self2, context);
                  return generator;
                }
                exports3.wrap = wrap;
                function tryCatch(fn, obj, arg) {
                  try {
                    return { type: "normal", arg: fn.call(obj, arg) };
                  } catch (err) {
                    return { type: "throw", arg: err };
                  }
                }
                var GenStateSuspendedStart = "suspendedStart";
                var GenStateSuspendedYield = "suspendedYield";
                var GenStateExecuting = "executing";
                var GenStateCompleted = "completed";
                var ContinueSentinel = {};
                function Generator() {
                }
                function GeneratorFunction() {
                }
                function GeneratorFunctionPrototype() {
                }
                var IteratorPrototype = {};
                IteratorPrototype[iteratorSymbol] = function() {
                  return this;
                };
                var getProto = Object.getPrototypeOf;
                var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
                if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
                  IteratorPrototype = NativeIteratorPrototype;
                }
                var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
                GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
                GeneratorFunctionPrototype.constructor = GeneratorFunction;
                GeneratorFunction.displayName = define(
                  GeneratorFunctionPrototype,
                  toStringTagSymbol,
                  "GeneratorFunction"
                );
                function defineIteratorMethods(prototype) {
                  ["next", "throw", "return"].forEach(function(method) {
                    define(prototype, method, function(arg) {
                      return this._invoke(method, arg);
                    });
                  });
                }
                exports3.isGeneratorFunction = function(genFun) {
                  var ctor = typeof genFun === "function" && genFun.constructor;
                  return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
                  // do is to check its .name property.
                  (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
                };
                exports3.mark = function(genFun) {
                  if (Object.setPrototypeOf) {
                    Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
                  } else {
                    genFun.__proto__ = GeneratorFunctionPrototype;
                    define(genFun, toStringTagSymbol, "GeneratorFunction");
                  }
                  genFun.prototype = Object.create(Gp);
                  return genFun;
                };
                exports3.awrap = function(arg) {
                  return { __await: arg };
                };
                function AsyncIterator(generator, PromiseImpl) {
                  function invoke(method, arg, resolve, reject) {
                    var record = tryCatch(generator[method], generator, arg);
                    if (record.type === "throw") {
                      reject(record.arg);
                    } else {
                      var result = record.arg;
                      var value = result.value;
                      if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
                        return PromiseImpl.resolve(value.__await).then(function(value2) {
                          invoke("next", value2, resolve, reject);
                        }, function(err) {
                          invoke("throw", err, resolve, reject);
                        });
                      }
                      return PromiseImpl.resolve(value).then(function(unwrapped) {
                        result.value = unwrapped;
                        resolve(result);
                      }, function(error) {
                        return invoke("throw", error, resolve, reject);
                      });
                    }
                  }
                  var previousPromise;
                  function enqueue(method, arg) {
                    function callInvokeWithMethodAndArg() {
                      return new PromiseImpl(function(resolve, reject) {
                        invoke(method, arg, resolve, reject);
                      });
                    }
                    return previousPromise = // If enqueue has been called before, then we want to wait until
                    // all previous Promises have been resolved before calling invoke,
                    // so that results are always delivered in the correct order. If
                    // enqueue has not been called before, then it is important to
                    // call invoke immediately, without waiting on a callback to fire,
                    // so that the async generator function has the opportunity to do
                    // any necessary setup in a predictable way. This predictability
                    // is why the Promise constructor synchronously invokes its
                    // executor callback, and why async functions synchronously
                    // execute code before the first await. Since we implement simple
                    // async functions in terms of async generators, it is especially
                    // important to get this right, even though it requires care.
                    previousPromise ? previousPromise.then(
                      callInvokeWithMethodAndArg,
                      // Avoid propagating failures to Promises returned by later
                      // invocations of the iterator.
                      callInvokeWithMethodAndArg
                    ) : callInvokeWithMethodAndArg();
                  }
                  this._invoke = enqueue;
                }
                defineIteratorMethods(AsyncIterator.prototype);
                AsyncIterator.prototype[asyncIteratorSymbol] = function() {
                  return this;
                };
                exports3.AsyncIterator = AsyncIterator;
                exports3.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
                  if (PromiseImpl === void 0)
                    PromiseImpl = Promise;
                  var iter = new AsyncIterator(
                    wrap(innerFn, outerFn, self2, tryLocsList),
                    PromiseImpl
                  );
                  return exports3.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
                    return result.done ? result.value : iter.next();
                  });
                };
                function makeInvokeMethod(innerFn, self2, context) {
                  var state = GenStateSuspendedStart;
                  return function invoke(method, arg) {
                    if (state === GenStateExecuting) {
                      throw new Error("Generator is already running");
                    }
                    if (state === GenStateCompleted) {
                      if (method === "throw") {
                        throw arg;
                      }
                      return doneResult();
                    }
                    context.method = method;
                    context.arg = arg;
                    while (true) {
                      var delegate = context.delegate;
                      if (delegate) {
                        var delegateResult = maybeInvokeDelegate(delegate, context);
                        if (delegateResult) {
                          if (delegateResult === ContinueSentinel)
                            continue;
                          return delegateResult;
                        }
                      }
                      if (context.method === "next") {
                        context.sent = context._sent = context.arg;
                      } else if (context.method === "throw") {
                        if (state === GenStateSuspendedStart) {
                          state = GenStateCompleted;
                          throw context.arg;
                        }
                        context.dispatchException(context.arg);
                      } else if (context.method === "return") {
                        context.abrupt("return", context.arg);
                      }
                      state = GenStateExecuting;
                      var record = tryCatch(innerFn, self2, context);
                      if (record.type === "normal") {
                        state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                        if (record.arg === ContinueSentinel) {
                          continue;
                        }
                        return {
                          value: record.arg,
                          done: context.done
                        };
                      } else if (record.type === "throw") {
                        state = GenStateCompleted;
                        context.method = "throw";
                        context.arg = record.arg;
                      }
                    }
                  };
                }
                function maybeInvokeDelegate(delegate, context) {
                  var method = delegate.iterator[context.method];
                  if (method === undefined$1) {
                    context.delegate = null;
                    if (context.method === "throw") {
                      if (delegate.iterator["return"]) {
                        context.method = "return";
                        context.arg = undefined$1;
                        maybeInvokeDelegate(delegate, context);
                        if (context.method === "throw") {
                          return ContinueSentinel;
                        }
                      }
                      context.method = "throw";
                      context.arg = new TypeError(
                        "The iterator does not provide a 'throw' method"
                      );
                    }
                    return ContinueSentinel;
                  }
                  var record = tryCatch(method, delegate.iterator, context.arg);
                  if (record.type === "throw") {
                    context.method = "throw";
                    context.arg = record.arg;
                    context.delegate = null;
                    return ContinueSentinel;
                  }
                  var info = record.arg;
                  if (!info) {
                    context.method = "throw";
                    context.arg = new TypeError("iterator result is not an object");
                    context.delegate = null;
                    return ContinueSentinel;
                  }
                  if (info.done) {
                    context[delegate.resultName] = info.value;
                    context.next = delegate.nextLoc;
                    if (context.method !== "return") {
                      context.method = "next";
                      context.arg = undefined$1;
                    }
                  } else {
                    return info;
                  }
                  context.delegate = null;
                  return ContinueSentinel;
                }
                defineIteratorMethods(Gp);
                define(Gp, toStringTagSymbol, "Generator");
                Gp[iteratorSymbol] = function() {
                  return this;
                };
                Gp.toString = function() {
                  return "[object Generator]";
                };
                function pushTryEntry(locs) {
                  var entry = { tryLoc: locs[0] };
                  if (1 in locs) {
                    entry.catchLoc = locs[1];
                  }
                  if (2 in locs) {
                    entry.finallyLoc = locs[2];
                    entry.afterLoc = locs[3];
                  }
                  this.tryEntries.push(entry);
                }
                function resetTryEntry(entry) {
                  var record = entry.completion || {};
                  record.type = "normal";
                  delete record.arg;
                  entry.completion = record;
                }
                function Context(tryLocsList) {
                  this.tryEntries = [{ tryLoc: "root" }];
                  tryLocsList.forEach(pushTryEntry, this);
                  this.reset(true);
                }
                exports3.keys = function(object) {
                  var keys = [];
                  for (var key in object) {
                    keys.push(key);
                  }
                  keys.reverse();
                  return function next() {
                    while (keys.length) {
                      var key2 = keys.pop();
                      if (key2 in object) {
                        next.value = key2;
                        next.done = false;
                        return next;
                      }
                    }
                    next.done = true;
                    return next;
                  };
                };
                function values(iterable) {
                  if (iterable) {
                    var iteratorMethod = iterable[iteratorSymbol];
                    if (iteratorMethod) {
                      return iteratorMethod.call(iterable);
                    }
                    if (typeof iterable.next === "function") {
                      return iterable;
                    }
                    if (!isNaN(iterable.length)) {
                      var i = -1, next = function next2() {
                        while (++i < iterable.length) {
                          if (hasOwn.call(iterable, i)) {
                            next2.value = iterable[i];
                            next2.done = false;
                            return next2;
                          }
                        }
                        next2.value = undefined$1;
                        next2.done = true;
                        return next2;
                      };
                      return next.next = next;
                    }
                  }
                  return { next: doneResult };
                }
                exports3.values = values;
                function doneResult() {
                  return { value: undefined$1, done: true };
                }
                Context.prototype = {
                  constructor: Context,
                  reset: function(skipTempReset) {
                    this.prev = 0;
                    this.next = 0;
                    this.sent = this._sent = undefined$1;
                    this.done = false;
                    this.delegate = null;
                    this.method = "next";
                    this.arg = undefined$1;
                    this.tryEntries.forEach(resetTryEntry);
                    if (!skipTempReset) {
                      for (var name2 in this) {
                        if (name2.charAt(0) === "t" && hasOwn.call(this, name2) && !isNaN(+name2.slice(1))) {
                          this[name2] = undefined$1;
                        }
                      }
                    }
                  },
                  stop: function() {
                    this.done = true;
                    var rootEntry = this.tryEntries[0];
                    var rootRecord = rootEntry.completion;
                    if (rootRecord.type === "throw") {
                      throw rootRecord.arg;
                    }
                    return this.rval;
                  },
                  dispatchException: function(exception) {
                    if (this.done) {
                      throw exception;
                    }
                    var context = this;
                    function handle(loc, caught) {
                      record.type = "throw";
                      record.arg = exception;
                      context.next = loc;
                      if (caught) {
                        context.method = "next";
                        context.arg = undefined$1;
                      }
                      return !!caught;
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                      var entry = this.tryEntries[i];
                      var record = entry.completion;
                      if (entry.tryLoc === "root") {
                        return handle("end");
                      }
                      if (entry.tryLoc <= this.prev) {
                        var hasCatch = hasOwn.call(entry, "catchLoc");
                        var hasFinally = hasOwn.call(entry, "finallyLoc");
                        if (hasCatch && hasFinally) {
                          if (this.prev < entry.catchLoc) {
                            return handle(entry.catchLoc, true);
                          } else if (this.prev < entry.finallyLoc) {
                            return handle(entry.finallyLoc);
                          }
                        } else if (hasCatch) {
                          if (this.prev < entry.catchLoc) {
                            return handle(entry.catchLoc, true);
                          }
                        } else if (hasFinally) {
                          if (this.prev < entry.finallyLoc) {
                            return handle(entry.finallyLoc);
                          }
                        } else {
                          throw new Error("try statement without catch or finally");
                        }
                      }
                    }
                  },
                  abrupt: function(type2, arg) {
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                      var entry = this.tryEntries[i];
                      if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                        var finallyEntry = entry;
                        break;
                      }
                    }
                    if (finallyEntry && (type2 === "break" || type2 === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
                      finallyEntry = null;
                    }
                    var record = finallyEntry ? finallyEntry.completion : {};
                    record.type = type2;
                    record.arg = arg;
                    if (finallyEntry) {
                      this.method = "next";
                      this.next = finallyEntry.finallyLoc;
                      return ContinueSentinel;
                    }
                    return this.complete(record);
                  },
                  complete: function(record, afterLoc) {
                    if (record.type === "throw") {
                      throw record.arg;
                    }
                    if (record.type === "break" || record.type === "continue") {
                      this.next = record.arg;
                    } else if (record.type === "return") {
                      this.rval = this.arg = record.arg;
                      this.method = "return";
                      this.next = "end";
                    } else if (record.type === "normal" && afterLoc) {
                      this.next = afterLoc;
                    }
                    return ContinueSentinel;
                  },
                  finish: function(finallyLoc) {
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                      var entry = this.tryEntries[i];
                      if (entry.finallyLoc === finallyLoc) {
                        this.complete(entry.completion, entry.afterLoc);
                        resetTryEntry(entry);
                        return ContinueSentinel;
                      }
                    }
                  },
                  "catch": function(tryLoc) {
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                      var entry = this.tryEntries[i];
                      if (entry.tryLoc === tryLoc) {
                        var record = entry.completion;
                        if (record.type === "throw") {
                          var thrown = record.arg;
                          resetTryEntry(entry);
                        }
                        return thrown;
                      }
                    }
                    throw new Error("illegal catch attempt");
                  },
                  delegateYield: function(iterable, resultName, nextLoc) {
                    this.delegate = {
                      iterator: values(iterable),
                      resultName,
                      nextLoc
                    };
                    if (this.method === "next") {
                      this.arg = undefined$1;
                    }
                    return ContinueSentinel;
                  }
                };
                return exports3;
              }(
                // If this script is executing as a CommonJS module, use module.exports
                // as the regeneratorRuntime namespace. Otherwise create a new empty
                // object. Either way, the resulting object will be used to initialize
                // the regeneratorRuntime variable at the top of this file.
                module2.exports
              );
              try {
                regeneratorRuntime = runtime;
              } catch (accidentalStrictMode) {
                Function("r", "regeneratorRuntime = r")(runtime);
              }
            }
          ),
          /***/
          "./src/api.js": (
            /*!********************!*\
              !*** ./src/api.js ***!
              \********************/
            /*! exports provided: setup, setupCache, serializeQuery, default */
            /***/
            function(module2, __webpack_exports__, __webpack_require__) {
              __webpack_require__.r(__webpack_exports__);
              __webpack_require__.d(__webpack_exports__, "setup", function() {
                return setup;
              });
              __webpack_require__.d(__webpack_exports__, "setupCache", function() {
                return setupCache;
              });
              __webpack_require__(
                /*! core-js/modules/es7.object.get-own-property-descriptors */
                "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js"
              );
              __webpack_require__(
                /*! core-js/modules/es6.symbol */
                "./node_modules/core-js/modules/es6.symbol.js"
              );
              __webpack_require__(
                /*! core-js/modules/es6.array.iterator */
                "./node_modules/core-js/modules/es6.array.iterator.js"
              );
              __webpack_require__(
                /*! core-js/modules/es6.object.to-string */
                "./node_modules/core-js/modules/es6.object.to-string.js"
              );
              __webpack_require__(
                /*! regenerator-runtime/runtime */
                "./node_modules/regenerator-runtime/runtime.js"
              );
              var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                /*! axios */
                "axios"
              );
              var axios__WEBPACK_IMPORTED_MODULE_5___default = /* @__PURE__ */ __webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
              var _request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                /*! ./request */
                "./src/request.js"
              );
              var _cache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                /*! ./cache */
                "./src/cache.js"
              );
              __webpack_require__.d(__webpack_exports__, "serializeQuery", function() {
                return _cache__WEBPACK_IMPORTED_MODULE_7__["serializeQuery"];
              });
              var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
                /*! ./config */
                "./src/config.js"
              );
              var _utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
                /*! ./utilities */
                "./src/utilities.js"
              );
              function _objectWithoutProperties(source, excluded) {
                if (source == null)
                  return {};
                var target = _objectWithoutPropertiesLoose(source, excluded);
                var key, i;
                if (Object.getOwnPropertySymbols) {
                  var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
                  for (i = 0; i < sourceSymbolKeys.length; i++) {
                    key = sourceSymbolKeys[i];
                    if (excluded.indexOf(key) >= 0)
                      continue;
                    if (!Object.prototype.propertyIsEnumerable.call(source, key))
                      continue;
                    target[key] = source[key];
                  }
                }
                return target;
              }
              function _objectWithoutPropertiesLoose(source, excluded) {
                if (source == null)
                  return {};
                var target = {};
                var sourceKeys = Object.keys(source);
                var key, i;
                for (i = 0; i < sourceKeys.length; i++) {
                  key = sourceKeys[i];
                  if (excluded.indexOf(key) >= 0)
                    continue;
                  target[key] = source[key];
                }
                return target;
              }
              function ownKeys(object, enumerableOnly) {
                var keys = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                  var symbols = Object.getOwnPropertySymbols(object);
                  if (enumerableOnly)
                    symbols = symbols.filter(function(sym) {
                      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                    });
                  keys.push.apply(keys, symbols);
                }
                return keys;
              }
              function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i] != null ? arguments[i] : {};
                  if (i % 2) {
                    ownKeys(Object(source), true).forEach(function(key) {
                      _defineProperty(target, key, source[key]);
                    });
                  } else if (Object.getOwnPropertyDescriptors) {
                    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
                  } else {
                    ownKeys(Object(source)).forEach(function(key) {
                      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                    });
                  }
                }
                return target;
              }
              function _defineProperty(obj, key, value) {
                if (key in obj) {
                  Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
                } else {
                  obj[key] = value;
                }
                return obj;
              }
              function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
                try {
                  var info = gen[key](arg);
                  var value = info.value;
                } catch (error) {
                  reject(error);
                  return;
                }
                if (info.done) {
                  resolve(value);
                } else {
                  Promise.resolve(value).then(_next, _throw);
                }
              }
              function _asyncToGenerator(fn) {
                return function() {
                  var self2 = this, args = arguments;
                  return new Promise(function(resolve, reject) {
                    var gen = fn.apply(self2, args);
                    function _next(value) {
                      asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                    }
                    function _throw(err) {
                      asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                    }
                    _next(void 0);
                  });
                };
              }
              function setupCache() {
                var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                config = Object(_config__WEBPACK_IMPORTED_MODULE_8__["makeConfig"])(config);
                function adapter(_x) {
                  return _adapter.apply(this, arguments);
                }
                function _adapter() {
                  _adapter = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee(req) {
                    var reqConfig, res, next, networkError, readOnError;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            reqConfig = Object(_config__WEBPACK_IMPORTED_MODULE_8__["mergeRequestConfig"])(config, req);
                            _context.next = 3;
                            return Object(_request__WEBPACK_IMPORTED_MODULE_6__["default"])(reqConfig, req);
                          case 3:
                            res = _context.sent;
                            next = res.next;
                            if (Object(_utilities__WEBPACK_IMPORTED_MODULE_9__["isFunction"])(next)) {
                              _context.next = 7;
                              break;
                            }
                            return _context.abrupt("return", next);
                          case 7:
                            _context.prev = 7;
                            _context.next = 10;
                            return reqConfig.adapter(req);
                          case 10:
                            res = _context.sent;
                            _context.next = 16;
                            break;
                          case 13:
                            _context.prev = 13;
                            _context.t0 = _context["catch"](7);
                            networkError = _context.t0;
                          case 16:
                            if (!networkError) {
                              _context.next = 31;
                              break;
                            }
                            readOnError = Object(_utilities__WEBPACK_IMPORTED_MODULE_9__["isFunction"])(reqConfig.readOnError) ? reqConfig.readOnError(networkError, req) : reqConfig.readOnError;
                            if (!readOnError) {
                              _context.next = 30;
                              break;
                            }
                            _context.prev = 19;
                            reqConfig.acceptStale = true;
                            _context.next = 23;
                            return Object(_request__WEBPACK_IMPORTED_MODULE_6__["default"])(reqConfig, req);
                          case 23:
                            res = _context.sent;
                            res.next.request.stale = true;
                            return _context.abrupt("return", res.next);
                          case 28:
                            _context.prev = 28;
                            _context.t1 = _context["catch"](19);
                          case 30:
                            throw networkError;
                          case 31:
                            return _context.abrupt("return", next(res));
                          case 32:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[7, 13], [19, 28]]);
                  }));
                  return _adapter.apply(this, arguments);
                }
                return {
                  adapter,
                  config,
                  store: config.store
                };
              }
              function setup() {
                var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var instanceConfig = _objectSpread(_objectSpread(_objectSpread({}, _config__WEBPACK_IMPORTED_MODULE_8__["defaults"].axios), config), {}, {
                  cache: _objectSpread(_objectSpread({}, _config__WEBPACK_IMPORTED_MODULE_8__["defaults"].axios.cache), config.cache)
                });
                var cache2 = setupCache(instanceConfig.cache);
                instanceConfig.cache;
                var axiosConfig = _objectWithoutProperties(instanceConfig, ["cache"]);
                var api2 = axios__WEBPACK_IMPORTED_MODULE_5___default.a.create(_objectSpread(_objectSpread({}, axiosConfig), {}, {
                  adapter: cache2.adapter
                }));
                api2.cache = cache2.store;
                return api2;
              }
              __webpack_exports__["default"] = {
                setup,
                setupCache,
                serializeQuery: _cache__WEBPACK_IMPORTED_MODULE_7__["serializeQuery"]
              };
            }
          ),
          /***/
          "./src/cache.js": (
            /*!**********************!*\
              !*** ./src/cache.js ***!
              \**********************/
            /*! exports provided: read, write, key, invalidate, serializeQuery, default */
            /***/
            function(module2, __webpack_exports__, __webpack_require__) {
              __webpack_require__.r(__webpack_exports__);
              __webpack_require__.d(__webpack_exports__, "read", function() {
                return read;
              });
              __webpack_require__.d(__webpack_exports__, "write", function() {
                return write;
              });
              __webpack_require__.d(__webpack_exports__, "key", function() {
                return key;
              });
              __webpack_require__.d(__webpack_exports__, "invalidate", function() {
                return invalidate;
              });
              __webpack_require__.d(__webpack_exports__, "serializeQuery", function() {
                return serializeQuery;
              });
              __webpack_require__(
                /*! core-js/modules/es7.array.includes */
                "./node_modules/core-js/modules/es7.array.includes.js"
              );
              __webpack_require__(
                /*! core-js/modules/es6.string.includes */
                "./node_modules/core-js/modules/es6.string.includes.js"
              );
              __webpack_require__(
                /*! regenerator-runtime/runtime */
                "./node_modules/regenerator-runtime/runtime.js"
              );
              __webpack_require__(
                /*! core-js/modules/es6.array.iterator */
                "./node_modules/core-js/modules/es6.array.iterator.js"
              );
              __webpack_require__(
                /*! core-js/modules/es6.object.to-string */
                "./node_modules/core-js/modules/es6.object.to-string.js"
              );
              var _utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                /*! ./utilities */
                "./src/utilities.js"
              );
              var md5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                /*! md5 */
                "./node_modules/md5/md5.js"
              );
              var md5__WEBPACK_IMPORTED_MODULE_6___default = /* @__PURE__ */ __webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_6__);
              var _serialize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                /*! ./serialize */
                "./src/serialize.js"
              );
              function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key2, arg) {
                try {
                  var info = gen[key2](arg);
                  var value = info.value;
                } catch (error) {
                  reject(error);
                  return;
                }
                if (info.done) {
                  resolve(value);
                } else {
                  Promise.resolve(value).then(_next, _throw);
                }
              }
              function _asyncToGenerator(fn) {
                return function() {
                  var self2 = this, args = arguments;
                  return new Promise(function(resolve, reject) {
                    var gen = fn.apply(self2, args);
                    function _next(value) {
                      asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                    }
                    function _throw(err) {
                      asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                    }
                    _next(void 0);
                  });
                };
              }
              function write(_x, _x2, _x3) {
                return _write.apply(this, arguments);
              }
              function _write() {
                _write = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee(config, req, res) {
                  var entry;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.prev = 0;
                          entry = {
                            expires: config.expires,
                            data: Object(_serialize__WEBPACK_IMPORTED_MODULE_7__["default"])(config, req, res)
                          };
                          _context.next = 4;
                          return config.store.setItem(config.uuid, entry);
                        case 4:
                          _context.next = 19;
                          break;
                        case 6:
                          _context.prev = 6;
                          _context.t0 = _context["catch"](0);
                          config.debug("Could not store response", _context.t0);
                          if (!config.clearOnError) {
                            _context.next = 18;
                            break;
                          }
                          _context.prev = 10;
                          _context.next = 13;
                          return config.store.clear();
                        case 13:
                          _context.next = 18;
                          break;
                        case 15:
                          _context.prev = 15;
                          _context.t1 = _context["catch"](10);
                          config.debug("Could not clear store", _context.t1);
                        case 18:
                          return _context.abrupt("return", false);
                        case 19:
                          return _context.abrupt("return", true);
                        case 20:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, null, [[0, 6], [10, 15]]);
                }));
                return _write.apply(this, arguments);
              }
              function read(_x4, _x5) {
                return _read.apply(this, arguments);
              }
              function _read() {
                _read = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee2(config, req) {
                  var uuid, ignoreCache, entry, error, expires, data2, offline, _error;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          uuid = config.uuid, ignoreCache = config.ignoreCache;
                          _context2.next = 3;
                          return config.store.getItem(uuid);
                        case 3:
                          entry = _context2.sent;
                          if (!(ignoreCache || !entry || !entry.data)) {
                            _context2.next = 10;
                            break;
                          }
                          config.debug("cache-miss", req.url);
                          error = new Error();
                          error.reason = "cache-miss";
                          error.message = "Entry not found from cache";
                          throw error;
                        case 10:
                          expires = entry.expires, data2 = entry.data;
                          offline = typeof navigator !== "undefined" && "onLine" in navigator && !navigator.onLine;
                          if (!(!offline && !config.acceptStale && expires !== 0 && expires < Date.now())) {
                            _context2.next = 18;
                            break;
                          }
                          config.debug("cache-stale", req.url);
                          _error = new Error();
                          _error.reason = "cache-stale";
                          _error.message = "Entry is stale";
                          throw _error;
                        case 18:
                          config.debug(config.acceptStale ? "cache-hit-stale" : "cache-hit", req.url);
                          return _context2.abrupt("return", data2);
                        case 20:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));
                return _read.apply(this, arguments);
              }
              function key(config) {
                if (Object(_utilities__WEBPACK_IMPORTED_MODULE_5__["isFunction"])(config.key))
                  return config.key;
                var cacheKey;
                if (Object(_utilities__WEBPACK_IMPORTED_MODULE_5__["isString"])(config.key)) {
                  cacheKey = function cacheKey2(req) {
                    var url = "".concat(req.baseURL ? req.baseURL : "").concat(req.url);
                    var key2 = "".concat(config.key, "/").concat(url).concat(serializeQuery(req));
                    return req.data ? key2 + md5__WEBPACK_IMPORTED_MODULE_6___default()(req.data) : key2;
                  };
                } else {
                  cacheKey = function cacheKey2(req) {
                    var url = "".concat(req.baseURL ? req.baseURL : "").concat(req.url);
                    var key2 = url + serializeQuery(req);
                    return req.data ? key2 + md5__WEBPACK_IMPORTED_MODULE_6___default()(req.data) : key2;
                  };
                }
                return cacheKey;
              }
              function defaultInvalidate(_x6, _x7) {
                return _defaultInvalidate.apply(this, arguments);
              }
              function _defaultInvalidate() {
                _defaultInvalidate = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee3(config, req) {
                  var method;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          method = req.method.toLowerCase();
                          if (!config.exclude.methods.includes(method)) {
                            _context3.next = 4;
                            break;
                          }
                          _context3.next = 4;
                          return config.store.removeItem(config.uuid);
                        case 4:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));
                return _defaultInvalidate.apply(this, arguments);
              }
              function invalidate() {
                var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                if (Object(_utilities__WEBPACK_IMPORTED_MODULE_5__["isFunction"])(config.invalidate))
                  return config.invalidate;
                return defaultInvalidate;
              }
              function serializeQuery(req) {
                if (!req.params)
                  return "";
                if (typeof URLSearchParams === "undefined")
                  return JSON.stringify(req.params);
                var params = req.params;
                var isInstanceOfURLSearchParams = req.params instanceof URLSearchParams;
                if (!isInstanceOfURLSearchParams) {
                  params = new URLSearchParams();
                  Object.keys(req.params).forEach(function(key2) {
                    return params.append(key2, req.params[key2]);
                  });
                }
                return "?".concat(params.toString());
              }
              __webpack_exports__["default"] = {
                read,
                write,
                key,
                invalidate,
                serializeQuery
              };
            }
          ),
          /***/
          "./src/config.js": (
            /*!***********************!*\
              !*** ./src/config.js ***!
              \***********************/
            /*! exports provided: defaults, makeConfig, mergeRequestConfig, default */
            /***/
            function(module2, __webpack_exports__, __webpack_require__) {
              __webpack_require__.r(__webpack_exports__);
              __webpack_require__.d(__webpack_exports__, "defaults", function() {
                return defaults;
              });
              __webpack_require__.d(__webpack_exports__, "makeConfig", function() {
                return makeConfig;
              });
              __webpack_require__.d(__webpack_exports__, "mergeRequestConfig", function() {
                return mergeRequestConfig;
              });
              __webpack_require__(
                /*! core-js/modules/es7.object.get-own-property-descriptors */
                "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js"
              );
              __webpack_require__(
                /*! core-js/modules/es6.symbol */
                "./node_modules/core-js/modules/es6.symbol.js"
              );
              __webpack_require__(
                /*! core-js/modules/es6.array.iterator */
                "./node_modules/core-js/modules/es6.array.iterator.js"
              );
              __webpack_require__(
                /*! core-js/modules/es6.object.to-string */
                "./node_modules/core-js/modules/es6.object.to-string.js"
              );
              var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! axios */
                "axios"
              );
              var axios__WEBPACK_IMPORTED_MODULE_4___default = /* @__PURE__ */ __webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
              var _memory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                /*! ./memory */
                "./src/memory.js"
              );
              var _cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                /*! ./cache */
                "./src/cache.js"
              );
              function ownKeys(object, enumerableOnly) {
                var keys = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                  var symbols = Object.getOwnPropertySymbols(object);
                  if (enumerableOnly)
                    symbols = symbols.filter(function(sym) {
                      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                    });
                  keys.push.apply(keys, symbols);
                }
                return keys;
              }
              function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i] != null ? arguments[i] : {};
                  if (i % 2) {
                    ownKeys(Object(source), true).forEach(function(key) {
                      _defineProperty(target, key, source[key]);
                    });
                  } else if (Object.getOwnPropertyDescriptors) {
                    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
                  } else {
                    ownKeys(Object(source)).forEach(function(key) {
                      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                    });
                  }
                }
                return target;
              }
              function _defineProperty(obj, key, value) {
                if (key in obj) {
                  Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
                } else {
                  obj[key] = value;
                }
                return obj;
              }
              var noop2 = function noop3() {
              };
              var debug = function debug2() {
                var _console;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                return (_console = console).log.apply(_console, ["[axios-cache-adapter]"].concat(args));
              };
              var defaults = {
                // Default settings when solely creating the cache adapter with setupCache.
                cache: {
                  maxAge: 0,
                  limit: false,
                  store: null,
                  key: null,
                  invalidate: null,
                  exclude: {
                    paths: [],
                    query: true,
                    filter: null,
                    methods: ["post", "patch", "put", "delete"]
                  },
                  adapter: axios__WEBPACK_IMPORTED_MODULE_4___default.a.defaults.adapter,
                  clearOnStale: true,
                  clearOnError: true,
                  readOnError: false,
                  readHeaders: false,
                  debug: false,
                  ignoreCache: false
                },
                // Additional defaults when creating the axios instance with the cache adapter.
                axios: {
                  cache: {
                    maxAge: 15 * 60 * 1e3
                  }
                }
              };
              var disallowedPerRequestKeys = ["limit", "store", "adapter", "uuid", "acceptStale"];
              var makeConfig = function makeConfig2() {
                var override = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var config = _objectSpread(_objectSpread(_objectSpread({}, defaults.cache), override), {}, {
                  exclude: _objectSpread(_objectSpread({}, defaults.cache.exclude), override.exclude)
                });
                config.key = Object(_cache__WEBPACK_IMPORTED_MODULE_6__["key"])(config);
                config.invalidate = Object(_cache__WEBPACK_IMPORTED_MODULE_6__["invalidate"])(config);
                if (config.debug !== false) {
                  config.debug = typeof config.debug === "function" ? config.debug : debug;
                } else {
                  config.debug = noop2;
                }
                if (!config.store)
                  config.store = new _memory__WEBPACK_IMPORTED_MODULE_5__["default"]();
                config.debug("Global cache config", config);
                return config;
              };
              var mergeRequestConfig = function mergeRequestConfig2(config, req) {
                var requestConfig = req.cache || {};
                if (requestConfig) {
                  disallowedPerRequestKeys.forEach(function(key) {
                    return requestConfig[key] ? delete requestConfig[key] : void 0;
                  });
                }
                var mergedConfig = _objectSpread(_objectSpread(_objectSpread({}, config), requestConfig), {}, {
                  exclude: _objectSpread(_objectSpread({}, config.exclude), requestConfig.exclude)
                });
                if (mergedConfig.debug === true) {
                  mergedConfig.debug = debug;
                }
                if (requestConfig.key) {
                  mergedConfig.key = Object(_cache__WEBPACK_IMPORTED_MODULE_6__["key"])(requestConfig);
                }
                mergedConfig.uuid = mergedConfig.key(req);
                config.debug("Request config for ".concat(req.url), mergedConfig);
                return mergedConfig;
              };
              __webpack_exports__["default"] = {
                defaults,
                makeConfig,
                mergeRequestConfig
              };
            }
          ),
          /***/
          "./src/exclude.js": (
            /*!************************!*\
              !*** ./src/exclude.js ***!
              \************************/
            /*! exports provided: default */
            /***/
            function(module2, __webpack_exports__, __webpack_require__) {
              __webpack_require__.r(__webpack_exports__);
              __webpack_require__(
                /*! core-js/modules/es6.array.iterator */
                "./node_modules/core-js/modules/es6.array.iterator.js"
              );
              __webpack_require__(
                /*! core-js/modules/es6.object.to-string */
                "./node_modules/core-js/modules/es6.object.to-string.js"
              );
              __webpack_require__(
                /*! core-js/modules/es7.array.includes */
                "./node_modules/core-js/modules/es7.array.includes.js"
              );
              __webpack_require__(
                /*! core-js/modules/es6.string.includes */
                "./node_modules/core-js/modules/es6.string.includes.js"
              );
              var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! ./utilities */
                "./src/utilities.js"
              );
              function exclude() {
                var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var req = arguments.length > 1 ? arguments[1] : void 0;
                var _config$exclude = config.exclude, exclude2 = _config$exclude === void 0 ? {} : _config$exclude, debug = config.debug;
                var method = req.method.toLowerCase();
                if (method === "head" || exclude2.methods.includes(method)) {
                  debug("Excluding request by HTTP method ".concat(req.url));
                  return true;
                }
                if (typeof exclude2.filter === "function" && exclude2.filter(req)) {
                  debug("Excluding request by filter ".concat(req.url));
                  return true;
                }
                var hasQueryParams = /\?.*$/.test(req.url) || Object(_utilities__WEBPACK_IMPORTED_MODULE_4__["isObject"])(req.params) && Object.keys(req.params).length !== 0 || typeof URLSearchParams !== "undefined" && req.params instanceof URLSearchParams;
                if (exclude2.query && hasQueryParams) {
                  debug("Excluding request by query ".concat(req.url));
                  return true;
                }
                var paths = exclude2.paths || [];
                var found = paths.some(function(regexp) {
                  return req.url.match(regexp);
                });
                if (found) {
                  debug("Excluding request by url match ".concat(req.url));
                  return true;
                }
                return false;
              }
              __webpack_exports__["default"] = exclude;
            }
          ),
          /***/
          "./src/index.js": (
            /*!**********************!*\
              !*** ./src/index.js ***!
              \**********************/
            /*! exports provided: setup, setupCache, serializeQuery, default */
            /***/
            function(module2, __webpack_exports__, __webpack_require__) {
              __webpack_require__.r(__webpack_exports__);
              var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! ./api */
                "./src/api.js"
              );
              __webpack_require__.d(__webpack_exports__, "setup", function() {
                return _api__WEBPACK_IMPORTED_MODULE_0__["setup"];
              });
              __webpack_require__.d(__webpack_exports__, "setupCache", function() {
                return _api__WEBPACK_IMPORTED_MODULE_0__["setupCache"];
              });
              __webpack_require__.d(__webpack_exports__, "serializeQuery", function() {
                return _api__WEBPACK_IMPORTED_MODULE_0__["serializeQuery"];
              });
              __webpack_require__.d(__webpack_exports__, "default", function() {
                return _api__WEBPACK_IMPORTED_MODULE_0__["default"];
              });
            }
          ),
          /***/
          "./src/limit.js": (
            /*!**********************!*\
              !*** ./src/limit.js ***!
              \**********************/
            /*! exports provided: default */
            /***/
            function(module2, __webpack_exports__, __webpack_require__) {
              __webpack_require__.r(__webpack_exports__);
              __webpack_require__(
                /*! regenerator-runtime/runtime */
                "./node_modules/regenerator-runtime/runtime.js"
              );
              __webpack_require__(
                /*! core-js/modules/es6.object.to-string */
                "./node_modules/core-js/modules/es6.object.to-string.js"
              );
              function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
                try {
                  var info = gen[key](arg);
                  var value = info.value;
                } catch (error) {
                  reject(error);
                  return;
                }
                if (info.done) {
                  resolve(value);
                } else {
                  Promise.resolve(value).then(_next, _throw);
                }
              }
              function _asyncToGenerator(fn) {
                return function() {
                  var self2 = this, args = arguments;
                  return new Promise(function(resolve, reject) {
                    var gen = fn.apply(self2, args);
                    function _next(value) {
                      asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                    }
                    function _throw(err) {
                      asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                    }
                    _next(void 0);
                  });
                };
              }
              function limit2(_x) {
                return _limit.apply(this, arguments);
              }
              function _limit() {
                _limit = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee(config) {
                  var length, firstItem;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return config.store.length();
                        case 2:
                          length = _context.sent;
                          if (!(length < config.limit)) {
                            _context.next = 5;
                            break;
                          }
                          return _context.abrupt("return");
                        case 5:
                          config.debug("Current store size: ".concat(length));
                          _context.next = 8;
                          return config.store.iterate(function(value, key) {
                            if (!firstItem)
                              firstItem = {
                                value,
                                key
                              };
                            if (value.expires < firstItem.value.expires)
                              firstItem = {
                                value,
                                key
                              };
                          });
                        case 8:
                          if (!firstItem) {
                            _context.next = 12;
                            break;
                          }
                          config.debug("Removing item: ".concat(firstItem.key));
                          _context.next = 12;
                          return config.store.removeItem(firstItem.key);
                        case 12:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));
                return _limit.apply(this, arguments);
              }
              __webpack_exports__["default"] = limit2;
            }
          ),
          /***/
          "./src/memory.js": (
            /*!***********************!*\
              !*** ./src/memory.js ***!
              \***********************/
            /*! exports provided: default */
            /***/
            function(module2, __webpack_exports__, __webpack_require__) {
              __webpack_require__.r(__webpack_exports__);
              __webpack_require__(
                /*! core-js/modules/es6.array.iterator */
                "./node_modules/core-js/modules/es6.array.iterator.js"
              );
              __webpack_require__(
                /*! core-js/modules/es6.object.to-string */
                "./node_modules/core-js/modules/es6.object.to-string.js"
              );
              __webpack_require__(
                /*! regenerator-runtime/runtime */
                "./node_modules/regenerator-runtime/runtime.js"
              );
              var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! ./utilities */
                "./src/utilities.js"
              );
              function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
                try {
                  var info = gen[key](arg);
                  var value = info.value;
                } catch (error) {
                  reject(error);
                  return;
                }
                if (info.done) {
                  resolve(value);
                } else {
                  Promise.resolve(value).then(_next, _throw);
                }
              }
              function _asyncToGenerator(fn) {
                return function() {
                  var self2 = this, args = arguments;
                  return new Promise(function(resolve, reject) {
                    var gen = fn.apply(self2, args);
                    function _next(value) {
                      asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                    }
                    function _throw(err) {
                      asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                    }
                    _next(void 0);
                  });
                };
              }
              function _classCallCheck(instance2, Constructor) {
                if (!(instance2 instanceof Constructor)) {
                  throw new TypeError("Cannot call a class as a function");
                }
              }
              function _defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor)
                    descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              function _createClass(Constructor, protoProps, staticProps) {
                if (protoProps)
                  _defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                  _defineProperties(Constructor, staticProps);
                return Constructor;
              }
              var MemoryStore = /* @__PURE__ */ function() {
                function MemoryStore2() {
                  _classCallCheck(this, MemoryStore2);
                  this.store = {};
                }
                _createClass(MemoryStore2, [{
                  key: "getItem",
                  value: function() {
                    var _getItem = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee(key) {
                      var item2;
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              item2 = this.store[key] || null;
                              return _context.abrupt("return", JSON.parse(item2));
                            case 2:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee, this);
                    }));
                    function getItem(_x) {
                      return _getItem.apply(this, arguments);
                    }
                    return getItem;
                  }()
                }, {
                  key: "setItem",
                  value: function() {
                    var _setItem = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee2(key, value) {
                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              this.store[key] = JSON.stringify(value);
                              return _context2.abrupt("return", value);
                            case 2:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2, this);
                    }));
                    function setItem(_x2, _x3) {
                      return _setItem.apply(this, arguments);
                    }
                    return setItem;
                  }()
                }, {
                  key: "removeItem",
                  value: function() {
                    var _removeItem = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee3(key) {
                      return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              delete this.store[key];
                            case 1:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3, this);
                    }));
                    function removeItem(_x4) {
                      return _removeItem.apply(this, arguments);
                    }
                    return removeItem;
                  }()
                }, {
                  key: "clear",
                  value: function() {
                    var _clear = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee4() {
                      return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                          switch (_context4.prev = _context4.next) {
                            case 0:
                              this.store = {};
                            case 1:
                            case "end":
                              return _context4.stop();
                          }
                        }
                      }, _callee4, this);
                    }));
                    function clear() {
                      return _clear.apply(this, arguments);
                    }
                    return clear;
                  }()
                }, {
                  key: "length",
                  value: function() {
                    var _length = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee5() {
                      return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                          switch (_context5.prev = _context5.next) {
                            case 0:
                              return _context5.abrupt("return", Object.keys(this.store).length);
                            case 1:
                            case "end":
                              return _context5.stop();
                          }
                        }
                      }, _callee5, this);
                    }));
                    function length() {
                      return _length.apply(this, arguments);
                    }
                    return length;
                  }()
                }, {
                  key: "iterate",
                  value: function iterate(fn) {
                    return Promise.all(Object(_utilities__WEBPACK_IMPORTED_MODULE_3__["mapObject"])(this.store, fn));
                  }
                }]);
                return MemoryStore2;
              }();
              __webpack_exports__["default"] = MemoryStore;
            }
          ),
          /***/
          "./src/request.js": (
            /*!************************!*\
              !*** ./src/request.js ***!
              \************************/
            /*! exports provided: default */
            /***/
            function(module2, __webpack_exports__, __webpack_require__) {
              __webpack_require__.r(__webpack_exports__);
              __webpack_require__(
                /*! regenerator-runtime/runtime */
                "./node_modules/regenerator-runtime/runtime.js"
              );
              __webpack_require__(
                /*! core-js/modules/es6.object.to-string */
                "./node_modules/core-js/modules/es6.object.to-string.js"
              );
              var _response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! ./response */
                "./src/response.js"
              );
              var _exclude__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! ./exclude */
                "./src/exclude.js"
              );
              var _cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! ./cache */
                "./src/cache.js"
              );
              function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
                try {
                  var info = gen[key](arg);
                  var value = info.value;
                } catch (error) {
                  reject(error);
                  return;
                }
                if (info.done) {
                  resolve(value);
                } else {
                  Promise.resolve(value).then(_next, _throw);
                }
              }
              function _asyncToGenerator(fn) {
                return function() {
                  var self2 = this, args = arguments;
                  return new Promise(function(resolve, reject) {
                    var gen = fn.apply(self2, args);
                    function _next(value) {
                      asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                    }
                    function _throw(err) {
                      asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                    }
                    _next(void 0);
                  });
                };
              }
              function request(_x, _x2) {
                return _request.apply(this, arguments);
              }
              function _request() {
                _request = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee(config, req) {
                  var next, res, excludeFromCache;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          excludeFromCache = function _excludeFromCache() {
                            config.excludeFromCache = true;
                            return {
                              config,
                              next
                            };
                          };
                          config.debug("uuid", config.uuid);
                          next = function next2() {
                            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                              args[_key] = arguments[_key];
                            }
                            return _response__WEBPACK_IMPORTED_MODULE_2__["default"].apply(void 0, [config, req].concat(args));
                          };
                          _context.next = 5;
                          return config.invalidate(config, req);
                        case 5:
                          if (!Object(_exclude__WEBPACK_IMPORTED_MODULE_3__["default"])(config, req)) {
                            _context.next = 7;
                            break;
                          }
                          return _context.abrupt("return", excludeFromCache());
                        case 7:
                          _context.prev = 7;
                          _context.next = 10;
                          return Object(_cache__WEBPACK_IMPORTED_MODULE_4__["read"])(config, req);
                        case 10:
                          res = _context.sent;
                          res.config = req;
                          res.request = {
                            fromCache: true
                          };
                          return _context.abrupt("return", {
                            config,
                            next: res
                          });
                        case 16:
                          _context.prev = 16;
                          _context.t0 = _context["catch"](7);
                          if (!(config.clearOnStale && _context.t0.reason === "cache-stale")) {
                            _context.next = 21;
                            break;
                          }
                          _context.next = 21;
                          return config.store.removeItem(config.uuid);
                        case 21:
                          return _context.abrupt("return", {
                            config,
                            next
                          });
                        case 22:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, null, [[7, 16]]);
                }));
                return _request.apply(this, arguments);
              }
              __webpack_exports__["default"] = request;
            }
          ),
          /***/
          "./src/response.js": (
            /*!*************************!*\
              !*** ./src/response.js ***!
              \*************************/
            /*! exports provided: default */
            /***/
            function(module2, __webpack_exports__, __webpack_require__) {
              __webpack_require__.r(__webpack_exports__);
              __webpack_require__(
                /*! regenerator-runtime/runtime */
                "./node_modules/regenerator-runtime/runtime.js"
              );
              __webpack_require__(
                /*! core-js/modules/es6.object.to-string */
                "./node_modules/core-js/modules/es6.object.to-string.js"
              );
              var _limit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! ./limit */
                "./src/limit.js"
              );
              var _cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! ./cache */
                "./src/cache.js"
              );
              var cache_control_esm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! cache-control-esm */
                "./node_modules/cache-control-esm/index.js"
              );
              function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
                try {
                  var info = gen[key](arg);
                  var value = info.value;
                } catch (error) {
                  reject(error);
                  return;
                }
                if (info.done) {
                  resolve(value);
                } else {
                  Promise.resolve(value).then(_next, _throw);
                }
              }
              function _asyncToGenerator(fn) {
                return function() {
                  var self2 = this, args = arguments;
                  return new Promise(function(resolve, reject) {
                    var gen = fn.apply(self2, args);
                    function _next(value) {
                      asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                    }
                    function _throw(err) {
                      asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                    }
                    _next(void 0);
                  });
                };
              }
              function response(_x, _x2, _x3) {
                return _response.apply(this, arguments);
              }
              function _response() {
                _response = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee(config, req, res) {
                  var _res$request, request, _res$headers, headers, cacheControl;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _res$request = res.request, request = _res$request === void 0 ? {} : _res$request, _res$headers = res.headers, headers = _res$headers === void 0 ? {} : _res$headers;
                          if (!(["arraybuffer", "blob"].indexOf(request.responseType) > -1)) {
                            _context.next = 3;
                            break;
                          }
                          return _context.abrupt("return", res);
                        case 3:
                          cacheControl = {};
                          if (config.readHeaders) {
                            if (headers["cache-control"]) {
                              cacheControl = Object(cache_control_esm__WEBPACK_IMPORTED_MODULE_4__["parse"])(headers["cache-control"]);
                              if (cacheControl.noCache || cacheControl.noStore) {
                                config.excludeFromCache = true;
                              }
                            } else if (headers.expires) {
                              config.expires = new Date(headers.expires).getTime();
                            } else {
                              config.expires = new Date().getTime();
                            }
                          }
                          if (config.excludeFromCache) {
                            _context.next = 15;
                            break;
                          }
                          if (cacheControl.maxAge || cacheControl.maxAge === 0) {
                            config.expires = Date.now() + cacheControl.maxAge * 1e3;
                          } else if (!config.readHeaders) {
                            config.expires = config.maxAge === 0 ? Date.now() : Date.now() + config.maxAge;
                          }
                          if (!config.limit) {
                            _context.next = 11;
                            break;
                          }
                          config.debug("Detected limit: ".concat(config.limit));
                          _context.next = 11;
                          return Object(_limit__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
                        case 11:
                          _context.next = 13;
                          return Object(_cache__WEBPACK_IMPORTED_MODULE_3__["write"])(config, req, res);
                        case 13:
                          _context.next = 16;
                          break;
                        case 15:
                          res.request.excludedFromCache = true;
                        case 16:
                          return _context.abrupt("return", res);
                        case 17:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));
                return _response.apply(this, arguments);
              }
              __webpack_exports__["default"] = response;
            }
          ),
          /***/
          "./src/serialize.js": (
            /*!**************************!*\
              !*** ./src/serialize.js ***!
              \**************************/
            /*! exports provided: default */
            /***/
            function(module2, __webpack_exports__, __webpack_require__) {
              __webpack_require__.r(__webpack_exports__);
              __webpack_require__(
                /*! core-js/modules/es6.symbol */
                "./node_modules/core-js/modules/es6.symbol.js"
              );
              __webpack_require__(
                /*! core-js/modules/es6.array.iterator */
                "./node_modules/core-js/modules/es6.array.iterator.js"
              );
              __webpack_require__(
                /*! core-js/modules/es6.object.to-string */
                "./node_modules/core-js/modules/es6.object.to-string.js"
              );
              function _objectWithoutProperties(source, excluded) {
                if (source == null)
                  return {};
                var target = _objectWithoutPropertiesLoose(source, excluded);
                var key, i;
                if (Object.getOwnPropertySymbols) {
                  var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
                  for (i = 0; i < sourceSymbolKeys.length; i++) {
                    key = sourceSymbolKeys[i];
                    if (excluded.indexOf(key) >= 0)
                      continue;
                    if (!Object.prototype.propertyIsEnumerable.call(source, key))
                      continue;
                    target[key] = source[key];
                  }
                }
                return target;
              }
              function _objectWithoutPropertiesLoose(source, excluded) {
                if (source == null)
                  return {};
                var target = {};
                var sourceKeys = Object.keys(source);
                var key, i;
                for (i = 0; i < sourceKeys.length; i++) {
                  key = sourceKeys[i];
                  if (excluded.indexOf(key) >= 0)
                    continue;
                  target[key] = source[key];
                }
                return target;
              }
              function serialize(config, req, res) {
                if (res.data) {
                  try {
                    res.data = JSON.parse(res.data);
                  } catch (err) {
                    config.debug("Could not parse data as JSON", err);
                  }
                }
                res.request;
                res.config;
                var serialized = _objectWithoutProperties(res, ["request", "config"]);
                return serialized;
              }
              __webpack_exports__["default"] = serialize;
            }
          ),
          /***/
          "./src/utilities.js": (
            /*!**************************!*\
              !*** ./src/utilities.js ***!
              \**************************/
            /*! exports provided: isObject, getTag, isFunction, isString, mapObject */
            /***/
            function(module2, __webpack_exports__, __webpack_require__) {
              __webpack_require__.r(__webpack_exports__);
              __webpack_require__.d(__webpack_exports__, "isObject", function() {
                return isObject;
              });
              __webpack_require__.d(__webpack_exports__, "getTag", function() {
                return getTag;
              });
              __webpack_require__.d(__webpack_exports__, "isFunction", function() {
                return isFunction;
              });
              __webpack_require__.d(__webpack_exports__, "isString", function() {
                return isString;
              });
              __webpack_require__.d(__webpack_exports__, "mapObject", function() {
                return mapObject;
              });
              __webpack_require__(
                /*! core-js/modules/es7.symbol.async-iterator */
                "./node_modules/core-js/modules/es7.symbol.async-iterator.js"
              );
              __webpack_require__(
                /*! core-js/modules/es6.symbol */
                "./node_modules/core-js/modules/es6.symbol.js"
              );
              __webpack_require__(
                /*! core-js/modules/es6.array.iterator */
                "./node_modules/core-js/modules/es6.array.iterator.js"
              );
              __webpack_require__(
                /*! core-js/modules/es6.object.to-string */
                "./node_modules/core-js/modules/es6.object.to-string.js"
              );
              function _typeof(obj) {
                "@babel/helpers - typeof";
                if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                  _typeof = function _typeof2(obj2) {
                    return typeof obj2;
                  };
                } else {
                  _typeof = function _typeof2(obj2) {
                    return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                  };
                }
                return _typeof(obj);
              }
              function isObject(value) {
                var type2 = _typeof(value);
                return value != null && (type2 === "object" || type2 === "function");
              }
              function getTag(value) {
                if (value === null) {
                  return value === void 0 ? "[object Undefined]" : "[object Null]";
                }
                return Object.prototype.toString.call(value);
              }
              function isFunction(value) {
                if (!isObject(value)) {
                  return false;
                }
                var tag = getTag(value);
                return tag === "[object Function]" || tag === "[object AsyncFunction]" || tag === "[object GeneratorFunction]" || tag === "[object Proxy]";
              }
              function isString(value) {
                var type2 = _typeof(value);
                return type2 === "string" || type2 === "object" && value != null && !Array.isArray(value) && getTag(value) === "[object String]";
              }
              function mapObject(value, fn) {
                if (!isObject(value)) {
                  return [];
                }
                return Object.keys(value).map(function(key) {
                  return fn(value[key], key);
                });
              }
            }
          ),
          /***/
          "axios": (
            /*!*************************************************************************************!*\
              !*** external {"umd":"axios","amd":"axios","commonjs":"axios","commonjs2":"axios"} ***!
              \*************************************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = __WEBPACK_EXTERNAL_MODULE_axios__;
            }
          )
          /******/
        })
      );
    });
  })(cache);
  return cacheExports;
}
var logger = {};
var quickFormatUnescaped;
var hasRequiredQuickFormatUnescaped;
function requireQuickFormatUnescaped() {
  if (hasRequiredQuickFormatUnescaped)
    return quickFormatUnescaped;
  hasRequiredQuickFormatUnescaped = 1;
  function tryStringify(o) {
    try {
      return JSON.stringify(o);
    } catch (e) {
      return '"[Circular]"';
    }
  }
  quickFormatUnescaped = format;
  function format(f, args, opts) {
    var ss = opts && opts.stringify || tryStringify;
    var offset2 = 1;
    if (typeof f === "object" && f !== null) {
      var len = args.length + offset2;
      if (len === 1)
        return f;
      var objects = new Array(len);
      objects[0] = ss(f);
      for (var index = 1; index < len; index++) {
        objects[index] = ss(args[index]);
      }
      return objects.join(" ");
    }
    if (typeof f !== "string") {
      return f;
    }
    var argLen = args.length;
    if (argLen === 0)
      return f;
    var str = "";
    var a = 1 - offset2;
    var lastPos = -1;
    var flen = f && f.length || 0;
    for (var i = 0; i < flen; ) {
      if (f.charCodeAt(i) === 37 && i + 1 < flen) {
        lastPos = lastPos > -1 ? lastPos : 0;
        switch (f.charCodeAt(i + 1)) {
          case 100:
          case 102:
            if (a >= argLen)
              break;
            if (args[a] == null)
              break;
            if (lastPos < i)
              str += f.slice(lastPos, i);
            str += Number(args[a]);
            lastPos = i + 2;
            i++;
            break;
          case 105:
            if (a >= argLen)
              break;
            if (args[a] == null)
              break;
            if (lastPos < i)
              str += f.slice(lastPos, i);
            str += Math.floor(Number(args[a]));
            lastPos = i + 2;
            i++;
            break;
          case 79:
          case 111:
          case 106:
            if (a >= argLen)
              break;
            if (args[a] === void 0)
              break;
            if (lastPos < i)
              str += f.slice(lastPos, i);
            var type2 = typeof args[a];
            if (type2 === "string") {
              str += "'" + args[a] + "'";
              lastPos = i + 2;
              i++;
              break;
            }
            if (type2 === "function") {
              str += args[a].name || "<anonymous>";
              lastPos = i + 2;
              i++;
              break;
            }
            str += ss(args[a]);
            lastPos = i + 2;
            i++;
            break;
          case 115:
            if (a >= argLen)
              break;
            if (lastPos < i)
              str += f.slice(lastPos, i);
            str += String(args[a]);
            lastPos = i + 2;
            i++;
            break;
          case 37:
            if (lastPos < i)
              str += f.slice(lastPos, i);
            str += "%";
            lastPos = i + 2;
            i++;
            a--;
            break;
        }
        ++a;
      }
      ++i;
    }
    if (lastPos === -1)
      return f;
    else if (lastPos < flen) {
      str += f.slice(lastPos);
    }
    return str;
  }
  return quickFormatUnescaped;
}
var browser;
var hasRequiredBrowser;
function requireBrowser() {
  if (hasRequiredBrowser)
    return browser;
  hasRequiredBrowser = 1;
  const format = requireQuickFormatUnescaped();
  browser = pino;
  const _console = pfGlobalThisOrFallback().console || {};
  const stdSerializers = {
    mapHttpRequest: mock,
    mapHttpResponse: mock,
    wrapRequestSerializer: passthrough,
    wrapResponseSerializer: passthrough,
    wrapErrorSerializer: passthrough,
    req: mock,
    res: mock,
    err: asErrValue
  };
  function shouldSerialize(serialize, serializers) {
    if (Array.isArray(serialize)) {
      const hasToFilter = serialize.filter(function(k) {
        return k !== "!stdSerializers.err";
      });
      return hasToFilter;
    } else if (serialize === true) {
      return Object.keys(serializers);
    }
    return false;
  }
  function pino(opts) {
    opts = opts || {};
    opts.browser = opts.browser || {};
    const transmit2 = opts.browser.transmit;
    if (transmit2 && typeof transmit2.send !== "function") {
      throw Error("pino: transmit option must have a send function");
    }
    const proto = opts.browser.write || _console;
    if (opts.browser.write)
      opts.browser.asObject = true;
    const serializers = opts.serializers || {};
    const serialize = shouldSerialize(opts.browser.serialize, serializers);
    let stdErrSerialize = opts.browser.serialize;
    if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf("!stdSerializers.err") > -1)
      stdErrSerialize = false;
    const levels = ["error", "fatal", "warn", "info", "debug", "trace"];
    if (typeof proto === "function") {
      proto.error = proto.fatal = proto.warn = proto.info = proto.debug = proto.trace = proto;
    }
    if (opts.enabled === false || opts.browser.disabled)
      opts.level = "silent";
    const level = opts.level || "info";
    const logger2 = Object.create(proto);
    if (!logger2.log)
      logger2.log = noop2;
    Object.defineProperty(logger2, "levelVal", {
      get: getLevelVal
    });
    Object.defineProperty(logger2, "level", {
      get: getLevel,
      set: setLevel
    });
    const setOpts = {
      transmit: transmit2,
      serialize,
      asObject: opts.browser.asObject,
      levels,
      timestamp: getTimeFunction(opts)
    };
    logger2.levels = pino.levels;
    logger2.level = level;
    logger2.setMaxListeners = logger2.getMaxListeners = logger2.emit = logger2.addListener = logger2.on = logger2.prependListener = logger2.once = logger2.prependOnceListener = logger2.removeListener = logger2.removeAllListeners = logger2.listeners = logger2.listenerCount = logger2.eventNames = logger2.write = logger2.flush = noop2;
    logger2.serializers = serializers;
    logger2._serialize = serialize;
    logger2._stdErrSerialize = stdErrSerialize;
    logger2.child = child;
    if (transmit2)
      logger2._logEvent = createLogEventShape();
    function getLevelVal() {
      return this.level === "silent" ? Infinity : this.levels.values[this.level];
    }
    function getLevel() {
      return this._level;
    }
    function setLevel(level2) {
      if (level2 !== "silent" && !this.levels.values[level2]) {
        throw Error("unknown level " + level2);
      }
      this._level = level2;
      set(setOpts, logger2, "error", "log");
      set(setOpts, logger2, "fatal", "error");
      set(setOpts, logger2, "warn", "error");
      set(setOpts, logger2, "info", "log");
      set(setOpts, logger2, "debug", "log");
      set(setOpts, logger2, "trace", "log");
    }
    function child(bindings, childOptions) {
      if (!bindings) {
        throw new Error("missing bindings for child Pino");
      }
      childOptions = childOptions || {};
      if (serialize && bindings.serializers) {
        childOptions.serializers = bindings.serializers;
      }
      const childOptionsSerializers = childOptions.serializers;
      if (serialize && childOptionsSerializers) {
        var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
        var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
        delete bindings.serializers;
        applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize);
      }
      function Child(parent) {
        this._childLevel = (parent._childLevel | 0) + 1;
        this.error = bind2(parent, bindings, "error");
        this.fatal = bind2(parent, bindings, "fatal");
        this.warn = bind2(parent, bindings, "warn");
        this.info = bind2(parent, bindings, "info");
        this.debug = bind2(parent, bindings, "debug");
        this.trace = bind2(parent, bindings, "trace");
        if (childSerializers) {
          this.serializers = childSerializers;
          this._serialize = childSerialize;
        }
        if (transmit2) {
          this._logEvent = createLogEventShape(
            [].concat(parent._logEvent.bindings, bindings)
          );
        }
      }
      Child.prototype = this;
      return new Child(this);
    }
    return logger2;
  }
  pino.levels = {
    values: {
      fatal: 60,
      error: 50,
      warn: 40,
      info: 30,
      debug: 20,
      trace: 10
    },
    labels: {
      10: "trace",
      20: "debug",
      30: "info",
      40: "warn",
      50: "error",
      60: "fatal"
    }
  };
  pino.stdSerializers = stdSerializers;
  pino.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime });
  function set(opts, logger2, level, fallback) {
    const proto = Object.getPrototypeOf(logger2);
    logger2[level] = logger2.levelVal > logger2.levels.values[level] ? noop2 : proto[level] ? proto[level] : _console[level] || _console[fallback] || noop2;
    wrap(opts, logger2, level);
  }
  function wrap(opts, logger2, level) {
    if (!opts.transmit && logger2[level] === noop2)
      return;
    logger2[level] = function(write) {
      return function LOG() {
        const ts = opts.timestamp();
        const args = new Array(arguments.length);
        const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
        for (var i = 0; i < args.length; i++)
          args[i] = arguments[i];
        if (opts.serialize && !opts.asObject) {
          applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
        }
        if (opts.asObject)
          write.call(proto, asObject(this, level, args, ts));
        else
          write.apply(proto, args);
        if (opts.transmit) {
          const transmitLevel = opts.transmit.level || logger2.level;
          const transmitValue = pino.levels.values[transmitLevel];
          const methodValue = pino.levels.values[level];
          if (methodValue < transmitValue)
            return;
          transmit(this, {
            ts,
            methodLevel: level,
            methodValue,
            transmitLevel,
            transmitValue: pino.levels.values[opts.transmit.level || logger2.level],
            send: opts.transmit.send,
            val: logger2.levelVal
          }, args);
        }
      };
    }(logger2[level]);
  }
  function asObject(logger2, level, args, ts) {
    if (logger2._serialize)
      applySerializers(args, logger2._serialize, logger2.serializers, logger2._stdErrSerialize);
    const argsCloned = args.slice();
    let msg = argsCloned[0];
    const o = {};
    if (ts) {
      o.time = ts;
    }
    o.level = pino.levels.values[level];
    let lvl = (logger2._childLevel | 0) + 1;
    if (lvl < 1)
      lvl = 1;
    if (msg !== null && typeof msg === "object") {
      while (lvl-- && typeof argsCloned[0] === "object") {
        Object.assign(o, argsCloned.shift());
      }
      msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : void 0;
    } else if (typeof msg === "string")
      msg = format(argsCloned.shift(), argsCloned);
    if (msg !== void 0)
      o.msg = msg;
    return o;
  }
  function applySerializers(args, serialize, serializers, stdErrSerialize) {
    for (const i in args) {
      if (stdErrSerialize && args[i] instanceof Error) {
        args[i] = pino.stdSerializers.err(args[i]);
      } else if (typeof args[i] === "object" && !Array.isArray(args[i])) {
        for (const k in args[i]) {
          if (serialize && serialize.indexOf(k) > -1 && k in serializers) {
            args[i][k] = serializers[k](args[i][k]);
          }
        }
      }
    }
  }
  function bind2(parent, bindings, level) {
    return function() {
      const args = new Array(1 + arguments.length);
      args[0] = bindings;
      for (var i = 1; i < args.length; i++) {
        args[i] = arguments[i - 1];
      }
      return parent[level].apply(this, args);
    };
  }
  function transmit(logger2, opts, args) {
    const send = opts.send;
    const ts = opts.ts;
    const methodLevel = opts.methodLevel;
    const methodValue = opts.methodValue;
    const val = opts.val;
    const bindings = logger2._logEvent.bindings;
    applySerializers(
      args,
      logger2._serialize || Object.keys(logger2.serializers),
      logger2.serializers,
      logger2._stdErrSerialize === void 0 ? true : logger2._stdErrSerialize
    );
    logger2._logEvent.ts = ts;
    logger2._logEvent.messages = args.filter(function(arg) {
      return bindings.indexOf(arg) === -1;
    });
    logger2._logEvent.level.label = methodLevel;
    logger2._logEvent.level.value = methodValue;
    send(methodLevel, logger2._logEvent, val);
    logger2._logEvent = createLogEventShape(bindings);
  }
  function createLogEventShape(bindings) {
    return {
      ts: 0,
      messages: [],
      bindings: bindings || [],
      level: { label: "", value: 0 }
    };
  }
  function asErrValue(err) {
    const obj = {
      type: err.constructor.name,
      msg: err.message,
      stack: err.stack
    };
    for (const key in err) {
      if (obj[key] === void 0) {
        obj[key] = err[key];
      }
    }
    return obj;
  }
  function getTimeFunction(opts) {
    if (typeof opts.timestamp === "function") {
      return opts.timestamp;
    }
    if (opts.timestamp === false) {
      return nullTime;
    }
    return epochTime;
  }
  function mock() {
    return {};
  }
  function passthrough(a) {
    return a;
  }
  function noop2() {
  }
  function nullTime() {
    return false;
  }
  function epochTime() {
    return Date.now();
  }
  function unixTime() {
    return Math.round(Date.now() / 1e3);
  }
  function isoTime() {
    return new Date(Date.now()).toISOString();
  }
  function pfGlobalThisOrFallback() {
    function defd(o) {
      return typeof o !== "undefined" && o;
    }
    try {
      if (typeof globalThis !== "undefined")
        return globalThis;
      Object.defineProperty(Object.prototype, "globalThis", {
        get: function() {
          delete Object.prototype.globalThis;
          return this.globalThis = this;
        },
        configurable: true
      });
      return globalThis;
    } catch (e) {
      return defd(self) || defd(window) || defd(this) || {};
    }
  }
  return browser;
}
var hasRequiredLogger;
function requireLogger() {
  if (hasRequiredLogger)
    return logger;
  hasRequiredLogger = 1;
  Object.defineProperty(logger, "__esModule", { value: true });
  logger.handleResponseError = logger.handleResponse = logger.handleRequestError = logger.handleRequest = logger.createLogger = void 0;
  const tslib_1 = tslibExports;
  const pino_1 = tslib_1.__importDefault(requireBrowser());
  const createLogger = (options) => (0, pino_1.default)(options);
  logger.createLogger = createLogger;
  const handleRequest = (config, logger2) => {
    var _a;
    logger2.info(`[ Request Config ] ${((_a = config.method) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || ""} | ${config.url || ""}`);
    return config;
  };
  logger.handleRequest = handleRequest;
  const handleRequestError = (error, logger2) => {
    logger2.error(`[ Request Error ] CODE ${error.code || "UNKNOWN"} | ${error.message}`);
    throw error;
  };
  logger.handleRequestError = handleRequestError;
  const handleResponse = (response, logger2) => {
    logger2.info(response.data);
    return response;
  };
  logger.handleResponse = handleResponse;
  const handleResponseError = (error, logger2) => {
    logger2.error(`[ Response Error ] CODE ${error.code || "UNKNOWN"} | ${error.message}`);
    throw error;
  };
  logger.handleResponseError = handleResponseError;
  return logger;
}
var hasRequiredBase;
function requireBase() {
  if (hasRequiredBase)
    return base;
  hasRequiredBase = 1;
  Object.defineProperty(base, "__esModule", { value: true });
  base.BaseClient = void 0;
  const axios_cache_adapter_1 = requireCache();
  const constants_1 = requireConstants();
  const logger_1 = requireLogger();
  class BaseClient {
    /**
     *
     */
    constructor(clientOptions) {
      var _a, _b, _c;
      this.api = (0, axios_cache_adapter_1.setup)({
        baseURL: (_a = clientOptions === null || clientOptions === void 0 ? void 0 : clientOptions.baseURL) !== null && _a !== void 0 ? _a : constants_1.BaseURL.REST,
        headers: {
          "Content-Type": "application/json"
        },
        cache: Object.assign({ maxAge: ((_b = clientOptions === null || clientOptions === void 0 ? void 0 : clientOptions.cacheOptions) === null || _b === void 0 ? void 0 : _b.maxAge) || 0 }, clientOptions === null || clientOptions === void 0 ? void 0 : clientOptions.cacheOptions)
      });
      this.logger = (0, logger_1.createLogger)(Object.assign({ enabled: !(((_c = clientOptions === null || clientOptions === void 0 ? void 0 : clientOptions.logOptions) === null || _c === void 0 ? void 0 : _c.enabled) === void 0 || (clientOptions === null || clientOptions === void 0 ? void 0 : clientOptions.logOptions.enabled) === false) }, clientOptions === null || clientOptions === void 0 ? void 0 : clientOptions.logOptions));
      this.api.interceptors.request.use((config) => (0, logger_1.handleRequest)(config, this.logger), (error) => (0, logger_1.handleRequestError)(error, this.logger));
      this.api.interceptors.response.use((response) => (0, logger_1.handleResponse)(response, this.logger), (error) => (0, logger_1.handleResponseError)(error, this.logger));
    }
  }
  base.BaseClient = BaseClient;
  return base;
}
var hasRequiredBerry_client;
function requireBerry_client() {
  if (hasRequiredBerry_client)
    return berry_client;
  hasRequiredBerry_client = 1;
  Object.defineProperty(berry_client, "__esModule", { value: true });
  berry_client.BerryClient = void 0;
  const tslib_1 = tslibExports;
  const constants_1 = requireConstants();
  const base_1 = requireBase();
  class BerryClient extends base_1.BaseClient {
    constructor(clientOptions) {
      super(clientOptions);
    }
    /**
     * Get a Berry by it's name
     * @param name The berry name
     * @returns A Berry
     */
    getBerryByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Berry}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Berry by it's ID
     * @param id The Berry ID
     * @returns A Berry
     */
    getBerryById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Berry}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Berry Firmness by it's ID
     * @param id The Berry ID
     * @returns Berry Firmness
     */
    getBerryFirmnessById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.BerryFirmness}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Berry Firmness by it's ID
     * @param name The Berry name
     * @returns Berry Firmness
     */
    getBerryFirmnessByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.BerryFirmness}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their nature.
     * Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.
     * @param id The Berry Flavor ID
     * @returns Berry Flavor
     */
    getBerryFlavorById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.BerryFlavor}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their nature.
     * Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.
     * @param name The Berry Flavor name
     * @returns Berry Flavor
     */
    getBerryFlavorByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.BerryFlavor}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Berries
     * @param offset The first item that you will get
     * @param limit How many berries per page
     * @returns A list of berries
     */
    listBerries(offset2, limit2) {
      return new Promise((resolve, reject) => {
        this.api.get(`${constants_1.Endpoints.Berry}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
      });
    }
    /**
     * List Berries
     * @param offset The first item that you will get
     * @param limit How many berry firmnesses per page
     * @returns A list of berry firmnesses
     */
    listBerryFirmnesses(offset2, limit2) {
      return new Promise((resolve, reject) => {
        this.api.get(`${constants_1.Endpoints.BerryFirmness}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
      });
    }
    /**
     * List Berry Flavors
     * @param offset The first item that you will get
     * @param limit How many Berry Flavors per page
     * @returns A list of Berry Flavors
     */
    listBerryFlavors(offset2, limit2) {
      return new Promise((resolve, reject) => {
        this.api.get(`${constants_1.Endpoints.BerryFlavor}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
      });
    }
  }
  berry_client.BerryClient = BerryClient;
  return berry_client;
}
var contest_client = {};
var hasRequiredContest_client;
function requireContest_client() {
  if (hasRequiredContest_client)
    return contest_client;
  hasRequiredContest_client = 1;
  Object.defineProperty(contest_client, "__esModule", { value: true });
  contest_client.ContestClient = void 0;
  const tslib_1 = tslibExports;
  const constants_1 = requireConstants();
  const base_1 = requireBase();
  class ContestClient extends base_1.BaseClient {
    /**
     * @argument clientOptions Options for the client.
     */
    constructor(clientOptions) {
      super(clientOptions);
    }
    /**
     * Get a Contest Type by it's name
     * @param name  The contest type name
     * @returns A Contest Type
     */
    getContestTypeByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.ContestType}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Contest Type by it's ID
     * @param id The Contest Type ID
     * @returns A Contest Type
     */
    getContestTypeById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.ContestType}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Contest Effect by it's ID
     * @param id The Contest Effect ID
     * @returns Contest Effect
     */
    getContestEffectById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.ContestEffect}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Super Contest Effect by it's ID
     * @param id The Super Contest Effect ID
     * @returns Super Contest Effect
     */
    getSuperContestEffectById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.SuperContestEffect}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Contest Types
     * @param offset The first item that you will get
     * @param limit How many contest types per page
     * @returns A list of contest types
     */
    listContestTypes(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.ContestType}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Contest Effects
     * @param offset The first item that you will get
     * @param limit How many contest effects per page
     * @returns A list of contest effects
     */
    listContestEffects(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.ContestEffect}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Super Contest Effects
     * @param offset The first item that you will get
     * @param limit How many Super Contest Effect per page
     * @returns A list of Super Contest Effect
     */
    listSuperContestEffects(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.SuperContestEffect}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
  }
  contest_client.ContestClient = ContestClient;
  return contest_client;
}
var encounter_client = {};
var hasRequiredEncounter_client;
function requireEncounter_client() {
  if (hasRequiredEncounter_client)
    return encounter_client;
  hasRequiredEncounter_client = 1;
  Object.defineProperty(encounter_client, "__esModule", { value: true });
  encounter_client.EncounterClient = void 0;
  const tslib_1 = tslibExports;
  const constants_1 = requireConstants();
  const base_1 = requireBase();
  class EncounterClient extends base_1.BaseClient {
    /**
     * @argument clientOptions Options for the client.
     */
    constructor(clientOptions) {
      super(clientOptions);
    }
    /**
     * Get an Encounter Method by it's name
     * @param name The Encounter Method name
     * @returns An Encounter Method
     */
    getEncounterMethodByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.EncouterMethod}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get an Encounter Method by it's ID
     * @param id The Encounter Method ID
     * @returns An Encounter Method
     */
    getEncounterMethodById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.EncouterMethod}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get an Encounter Condition by it's ID
     * @param id The Encounter Condition ID
     * @returns An Encounter Condition
     */
    getEncounterConditionById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.EncounterCondition}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get an Encounter Condition by it's name
     * @param name The Encounter Condition name
     * @returns An Encounter Condition
     */
    getEncounterConditionByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.EncounterCondition}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get an Encounter Condition Value by it's name
     * @param name The Encounter Condition Value name
     * @returns An Encounter Condition Value
     */
    getEncounterConditionValueByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.EncouterConditionValue}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get an Encounter Condition Value by it's ID
     * @param id The Encounter Condition Value ID
     * @returns An Encounter Condition Value
     */
    getEncounterConditionValueById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.EncouterConditionValue}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Encounter Methods
     * @param offset The first item that you will get
     * @param limit How many Encounter Methods per page
     * @returns A list of Encounter Methods
     */
    listEncounterMethods(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.EncouterMethod}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Encounter Conditions
     * @param offset The first item that you will get
     * @param limit How many Encounter Conditions per page
     * @returns A list of Encounter Methods
     */
    listEncounterConditions(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.EncounterCondition}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Encounter Condition Values
     * @param offset The first item that you will get
     * @param limit How many Encounter Condition Values per page
     * @returns A list of Encounter Condition Values
     */
    listEncounterConditionValues(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.EncouterConditionValue}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
  }
  encounter_client.EncounterClient = EncounterClient;
  return encounter_client;
}
var evolution_client = {};
var hasRequiredEvolution_client;
function requireEvolution_client() {
  if (hasRequiredEvolution_client)
    return evolution_client;
  hasRequiredEvolution_client = 1;
  Object.defineProperty(evolution_client, "__esModule", { value: true });
  evolution_client.EvolutionClient = void 0;
  const tslib_1 = tslibExports;
  const constants_1 = requireConstants();
  const base_1 = requireBase();
  class EvolutionClient extends base_1.BaseClient {
    /**
     * @argument clientOptions Options for the client.
     */
    constructor(clientOptions) {
      super(clientOptions);
    }
    /**
     * Get an Evolution Chain by it's ID
     * @param id The Evolution Chain ID
     * @returns An Evolution Chain
     */
    getEvolutionChainById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.EvolutionChain}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get an Evolution Trigger by it's ID
     * @param id The Evolution Trigger ID
     * @returns An Evolution Trigger
     */
    getEvolutionTriggerById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.EvolutionTrigger}/${id}`).then((response) => resolve(response.data)).catch((error) => {
            reject(error);
          });
        });
      });
    }
    /**
     * Get an Evolution Trigger by it's name
     * @param name The Evolution Trigger name
     * @returns An Evolution Trigger
     */
    getEvolutionTriggerByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.EvolutionTrigger}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Evolution Chains
     * @param offset The first item that you will get
     * @param limit How many Evolution Chains per page
     * @returns A list of Evolution Chains
     */
    listEvolutionChains(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.EvolutionChain}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Evolution Triggers
     * @param offset The first item that you will get
     * @param limit How many Evolution Triggers per page
     * @returns A list of Evolution Triggers
     */
    listEvolutionTriggers(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.EvolutionTrigger}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
  }
  evolution_client.EvolutionClient = EvolutionClient;
  return evolution_client;
}
var game_client = {};
var hasRequiredGame_client;
function requireGame_client() {
  if (hasRequiredGame_client)
    return game_client;
  hasRequiredGame_client = 1;
  Object.defineProperty(game_client, "__esModule", { value: true });
  game_client.GameClient = void 0;
  const tslib_1 = tslibExports;
  const constants_1 = requireConstants();
  const base_1 = requireBase();
  class GameClient extends base_1.BaseClient {
    /**
     * @argument clientOptions Options for the client.
     */
    constructor(clientOptions) {
      super(clientOptions);
    }
    /**
     * Get a Generation by it's name
     * @param name The generation name
     * @returns A Generation
     */
    getGenerationByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Generation}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Generation by it's ID
     * @param id The generation ID
     * @returns A Generation
     */
    getGenerationById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Generation}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Pokedex by it's name
     * @param name The pokedex name
     * @returns A Pokedex
     */
    getPokedexByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Pokedex}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Pokedex by it's ID
     * @param id The pokedex ID
     * @returns A Pokedex
     */
    getPokedexById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Pokedex}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Version by it's name
     * @param name The version name
     * @returns A Version
     */
    getVersionByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Version}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Version by it's ID
     * @param id The version ID
     * @returns A Version
     */
    getVersionById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Version}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Version Group by it's name
     * @param name The version group name
     * @returns A Version Group
     */
    getVersionGroupByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.VersionGroup}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Version Group by it's ID
     * @param id The version group ID
     * @returns A Version Group
     */
    getVersionGroupById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.VersionGroup}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Generations
     * @param offset The first item that you will get
     * @param limit How many Generations per page
     * @returns A list of Generations
     */
    listGenerations(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Generation}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Pokedexes
     * @param offset The first item that you will get
     * @param limit How many Pokedexes per page
     * @returns A list of Pokedexes
     */
    listPokedexes(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Pokedex}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Versions
     * @param offset The first item that you will get
     * @param limit How many Versions per page
     * @returns A list of Versions
     */
    listVersions(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Version}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Version Groups
     * @param offset The first item that you will get
     * @param limit How many Version Groups per page
     * @returns A list of Version Groups
     */
    listVersionGroups(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.VersionGroup}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
  }
  game_client.GameClient = GameClient;
  return game_client;
}
var item_client = {};
var hasRequiredItem_client;
function requireItem_client() {
  if (hasRequiredItem_client)
    return item_client;
  hasRequiredItem_client = 1;
  Object.defineProperty(item_client, "__esModule", { value: true });
  item_client.ItemClient = void 0;
  const tslib_1 = tslibExports;
  const endpoints_1 = requireEndpoints();
  const base_1 = requireBase();
  class ItemClient extends base_1.BaseClient {
    /**
     * @argument clientOptions Options for the client.
     */
    constructor(clientOptions) {
      super(clientOptions);
    }
    /**
     * Get an Item by it's name
     * @param name The item name
     * @returns An Item
     */
    getItemByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${endpoints_1.Endpoints.Item}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get an Item by it's ID
     * @param id The item ID
     * @returns An Item
     */
    getItemById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${endpoints_1.Endpoints.Item}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get an Item Attribute by it's name
     * @param name The item attribute name
     * @returns An Item Attribute
     */
    getItemAttributeByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${endpoints_1.Endpoints.ItemAttribute}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get an Item Attribute by it's ID
     * @param id The item attribute ID
     * @returns An Item Attribute
     */
    getItemAttributeById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${endpoints_1.Endpoints.ItemAttribute}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get an Item Category by it's name
     * @param name The item category name
     * @returns An Item Category
     */
    getItemCategoryByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${endpoints_1.Endpoints.ItemCategory}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get an Item Category by it's ID
     * @param id The item category ID
     * @returns An Item Category
     */
    getItemCategoryById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${endpoints_1.Endpoints.ItemCategory}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get an Item Filing Effect by it's name
     * @param name The item filing effect name
     * @returns An Item Filing Effect
     */
    getItemFlingEffectByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${endpoints_1.Endpoints.ItemFlingEffect}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get an Item Filing Effect by it's ID
     * @param id The item filing effect ID
     * @returns An Item Filing Effect
     */
    getItemFlingEffectById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${endpoints_1.Endpoints.ItemFlingEffect}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get an Item Pocket by it's name
     * @param name The item pocket name
     * @returns An Item Pocket
     */
    getItemPocketByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${endpoints_1.Endpoints.ItemPocket}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get an Item Pocket by it's ID
     * @param id The item pocket ID
     * @returns An Item Pocket
     */
    getItemPocketById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${endpoints_1.Endpoints.ItemPocket}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Items
     * @param offset The first item that you will get
     * @param limit How many Items per page
     * @returns A list of Items
     */
    listItems(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${endpoints_1.Endpoints.Item}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Item Attributes
     * @param offset The first item that you will get
     * @param limit How many Item Attributes per page
     * @returns A list of Item Attributes
     */
    listItemAttributes(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${endpoints_1.Endpoints.ItemAttribute}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Item Categories
     * @param offset The first item that you will get
     * @param limit How many Item Categories per page
     * @returns A list of Item Categories
     */
    listItemCategories(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${endpoints_1.Endpoints.ItemCategory}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Item Filing Effects
     * @param offset The first item that you will get
     * @param limit How many Item Filing Effects per page
     * @returns A list of Item Filing Effects
     */
    listItemFilingEffects(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${endpoints_1.Endpoints.ItemFlingEffect}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Item Pockets
     * @param offset The first item that you will get
     * @param limit How many Item Pockets per page
     * @returns A list of Item Pockets
     */
    listItemPockets(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${endpoints_1.Endpoints.ItemPocket}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
  }
  item_client.ItemClient = ItemClient;
  return item_client;
}
var location_client = {};
var hasRequiredLocation_client;
function requireLocation_client() {
  if (hasRequiredLocation_client)
    return location_client;
  hasRequiredLocation_client = 1;
  Object.defineProperty(location_client, "__esModule", { value: true });
  location_client.LocationClient = void 0;
  const tslib_1 = tslibExports;
  const constants_1 = requireConstants();
  const base_1 = requireBase();
  class LocationClient extends base_1.BaseClient {
    /**
     * @argument clientOptions Options for the client.
     */
    constructor(clientOptions) {
      super(clientOptions);
    }
    /**
     * Get a Location by it's name
     * @param name The Location name
     * @returns A Location
     */
    getLocationByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Location}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Location by it's ID
     * @param id The Location ID
     * @returns A location
     */
    getLocationById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Location}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Location Area by it's name
     * @param name The Location Area name
     * @returns A Location Area
     */
    getLocationAreaByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.LocationArea}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Location Area by it's ID
     * @param id The Location Area ID
     * @returns A Location Area
     */
    getLocationAreaById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.LocationArea}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Pal Park Area by it's name
     * @param name The Pal Park Area name
     * @returns A Pal Park Area
     */
    getPalParkAreaByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.PalParkArea}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Pal Park Area by it's ID
     * @param id The Pal Park Area ID
     * @returns A Pal Park Area
     */
    getPalParkAreaById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.PalParkArea}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Region by it's name
     * @param name The Region name
     * @returns A Region
     */
    getRegionByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Region}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Region by it's ID
     * @param id The Region ID
     * @returns A Region
     */
    getRegionById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Region}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Locations
     * @param offset The first item that you will get
     * @param limit How many Locations per page
     * @returns A list of Locations
     */
    listLocations(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Location}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Location Areas
     * @param offset The first item that you will get
     * @param limit How many Locations per page
     * @returns A list of Location Areas
     */
    listLocationAreas(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.LocationArea}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Pal Park Areas
     * @param offset The first item that you will get
     * @param limit How many Pal Park Areas per page
     * @returns A list of Pal Park Areas
     */
    listPalParkAreas(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.PalParkArea}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Regions
     * @param offset The first item that you will get
     * @param limit How many Regions per page
     * @returns A list of Regions
     */
    listRegions(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Region}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
  }
  location_client.LocationClient = LocationClient;
  return location_client;
}
var machine_client = {};
var hasRequiredMachine_client;
function requireMachine_client() {
  if (hasRequiredMachine_client)
    return machine_client;
  hasRequiredMachine_client = 1;
  Object.defineProperty(machine_client, "__esModule", { value: true });
  machine_client.MachineClient = void 0;
  const tslib_1 = tslibExports;
  const constants_1 = requireConstants();
  const base_1 = requireBase();
  class MachineClient extends base_1.BaseClient {
    /**
     * @argument clientOptions Options for the client.
     */
    constructor(clientOptions) {
      super(clientOptions);
    }
    /**
     * Get a Machine by it's ID
     * @param id The Machine ID
     * @returns A Machine
     */
    getMachineById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Machine}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Machines
     * @param offset The first item that you will get
     * @param limit How many Machines per page
     * @returns A list of Machines
     */
    listMachines(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Machine}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
  }
  machine_client.MachineClient = MachineClient;
  return machine_client;
}
var move_client = {};
var hasRequiredMove_client;
function requireMove_client() {
  if (hasRequiredMove_client)
    return move_client;
  hasRequiredMove_client = 1;
  Object.defineProperty(move_client, "__esModule", { value: true });
  move_client.MoveClient = void 0;
  const tslib_1 = tslibExports;
  const constants_1 = requireConstants();
  const base_1 = requireBase();
  class MoveClient extends base_1.BaseClient {
    /**
     * @argument clientOptions Options for the client.
     */
    constructor(clientOptions) {
      super(clientOptions);
    }
    /**
     * Get a Move by it's name
     * @param name The move name
     * @returns A Move
     */
    getMoveByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Move}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Move by it's ID
     * @param id The Move ID
     * @returns A Move
     */
    getMoveById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Move}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Move Ailment by it's name
     * @param name The Move Ailment name
     * @returns A Move Ailment
     */
    getMoveAilmentByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.MoveAilment}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Move Ailment by it's ID
     * @param id The Move Ailment ID
     * @returns A Move Ailment
     */
    getMoveAilmentById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.MoveAilment}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Move Battle Style by it's name
     * @param name The Move Battle Style name
     * @returns A Move Battle Style
     */
    getMoveBattleStyleByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.MoveBattleStyle}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Move Battle Style by it's ID
     * @param id The Move Battle Style ID
     * @returns A Move Battle Style
     */
    getMoveBattleStyleById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.MoveBattleStyle}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Move Battle Category by it's name
     * @param name The Move Category name
     * @returns A Move Category
     */
    getMoveCategoryByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.MoveCategory}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Move Battle Category by it's ID
     * @param id The Move Category ID
     * @returns A Move Category
     */
    getMoveCategoryById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.MoveCategory}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Move Damage Class by it's name
     * @param name The Move Damage Class name
     * @returns A Move Damage Class
     */
    getMoveDamageClassByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.MoveDamageClass}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Move Damage Class by it's ID
     * @param id The Move Damage Class ID
     * @returns A Move Damage Class
     */
    getMoveDamageClassById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.MoveDamageClass}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Move Learn Method by it's name
     * @param name The Move Learn Method name
     * @returns A Move Learn Method
     */
    getMoveLearnMethodByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.MoveLearnMethod}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Move Learn Method by it's ID
     * @param id The Move Learn Method ID
     * @returns A Move Learn Method
     */
    getMoveLearnMethodById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.MoveLearnMethod}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Move Target by it's name
     * @param name The Move Target name
     * @returns A Move Target
     */
    getMoveTargetByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.MoveTarget}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Move Target by it's ID
     * @param id The Move Target ID
     * @returns A Move Target
     */
    getMoveTargetById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.MoveTarget}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Moves
     * @param offset The first item that you will get
     * @param limit How many Moves per page
     * @returns A list of Moves
     */
    listMoves(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Move}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Move Ailments
     * @param offset The first item that you will get
     * @param limit How many Move Ailments per page
     * @returns A list of Move Ailments
     */
    listMoveAilments(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.MoveAilment}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Move Battle Styles
     * @param offset The first item that you will get
     * @param limit How many Move Battle Styles per page
     * @returns A list of Move Battle Styles
     */
    listMoveBattleStyles(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.MoveBattleStyle}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Move Categories
     * @param offset The first item that you will get
     * @param limit How many Move Categories per page
     * @returns A list of Move Categories
     */
    listMoveCategories(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.MoveCategory}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Move Damage Classes
     * @param offset The first item that you will get
     * @param limit How many Move Damage Classes per page
     * @returns A list of Move Damage Classes
     */
    listMoveDamageClasses(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.MoveDamageClass}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Move Learn Methods
     * @param offset The first item that you will get
     * @param limit How many Move Learn Methods per page
     * @returns A list of Move Learn Methods
     */
    listMoveLearnMethods(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.MoveLearnMethod}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Move Targets
     * @param offset The first item that you will get
     * @param limit How many Move Targets per page
     * @returns A list of Move Targets
     */
    listMoveTargets(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.MoveTarget}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
  }
  move_client.MoveClient = MoveClient;
  return move_client;
}
var pokemon_client = {};
var hasRequiredPokemon_client;
function requirePokemon_client() {
  if (hasRequiredPokemon_client)
    return pokemon_client;
  hasRequiredPokemon_client = 1;
  Object.defineProperty(pokemon_client, "__esModule", { value: true });
  pokemon_client.PokemonClient = void 0;
  const tslib_1 = tslibExports;
  const constants_1 = requireConstants();
  const base_1 = requireBase();
  class PokemonClient extends base_1.BaseClient {
    /**
     * @argument clientOptions Options for the client.
     */
    constructor(clientOptions) {
      super(clientOptions);
    }
    /**
     * Get an Ability by it's name
     * @param name The Ability name
     * @returns An Ability
     */
    getAbilityByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Ability}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get an Ability by it's ID
     * @param id The Ability ID
     * @returns An Ability
     */
    getAbilityById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Ability}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Characteristic by it's ID
     * @param id The Characteristic ID
     * @returns A Characteristic
     */
    getCharacteristicById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Characteristic}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get an Egg Group by it's name
     * @param name The Egg Group name
     * @returns An Egg Group
     */
    getEggGroupByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.EggGroup}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get an Egg Group by it's ID
     * @param id The Egg Group ID
     * @returns An Egg Group
     */
    getEggGroupById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.EggGroup}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Gender by it's name
     * @param name The gender name
     * @returns An Egg Group
     */
    getGenderByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Gender}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Gender by it's ID
     * @param id The Gender ID
     * @returns A Gender
     */
    getGenderById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Gender}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Growth Rate by it's name
     * @param name The Growth Rate name
     * @returns A Growth Rate
     */
    getGrowthRateByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.GrowthRate}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Growth Rate by it's ID
     * @param id The Growth Rate ID
     * @returns A Growth Rate
     */
    getGrowthRateById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.GrowthRate}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Nature by it's name
     * @param name The Nature name
     * @returns A Nature
     */
    getNatureByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Nature}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Nature by it's ID
     * @param id The Nature ID
     * @returns A Nature
     */
    getNatureById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Nature}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Pokeathlon Stat by it's name
     * @param name The Pokeathlon Stat name
     * @returns A Pokeathlon Stat
     */
    getPokeathlonStatByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.PokeathlonStat}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Pokeathlon Stat by it's ID
     * @param id The Pokeathlon Stat ID
     * @returns A Pokeathlon Stat
     */
    getPokeathlonStatById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.PokeathlonStat}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Pokemon by it's name
     * @param name The Pokemon name
     * @returns A Pokemon Stat
     */
    getPokemonByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Pokemon}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Pokemon by it's ID
     * @param id The Pokemon ID
     * @returns A Pokemon
     */
    getPokemonById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Pokemon}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Pokemon Location Area by it's ID
     * @param id The Pokemon Location Area ID
     * @returns A Pokemon Location Area
     */
    getPokemonLocationAreaById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.PokemonLocationArea.replace(":id", id.toString())}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Pokemon Color by it's name
     * @param name The Pokemon Color name
     * @returns A Pokemon Color
     */
    getPokemonColorByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.PokemonColor}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Pokemon Color by it's ID
     * @param id The Pokemon Color ID
     * @returns A Pokemon Color
     */
    getPokemonColorById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.PokemonColor}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Pokemon Form by it's name
     * @param name The Pokemon Form name
     * @returns A Pokemon Form
     */
    getPokemonFormByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.PokemonForm}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Pokemon Form by it's ID
     * @param id The Pokemon Form ID
     * @returns A Pokemon Form
     */
    getPokemonFormById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.PokemonForm}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Pokemon Habitat by it's name
     * @param name The Pokemon Habitat name
     * @returns A Pokemon Habitat
     */
    getPokemonHabitatByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.PokemonHabitat}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Pokemon Habitat by it's ID
     * @param id The Pokemon Habitat Form ID
     * @returns A Pokemon Habitat
     */
    getPokemonHabitatById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.PokemonHabitat}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Pokemon Shape by it's name
     * @param name The Pokemon Shape name
     * @returns A Pokemon Shape
     */
    getPokemonShapeByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.PokemonShape}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Pokemon Shape by it's ID
     * @param id The Pokemon Shape Form ID
     * @returns A Pokemon Shape
     */
    getPokemonShapeById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.PokemonShape}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Pokemon Species by it's name
     * @param name The Pokemon Species name
     * @returns A Pokemon Species
     */
    getPokemonSpeciesByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.PokemonSpecies}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Pokemon Species by it's ID
     * @param id The Pokemon Species Form ID
     * @returns A Pokemon Species
     */
    getPokemonSpeciesById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.PokemonSpecies}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Stat by it's name
     * @param name The Stat name
     * @returns A Stat
     */
    getStatByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Stat}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Stat by it's ID
     * @param id The Stat ID
     * @returns A Stat
     */
    getStatById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Stat}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Type by it's name
     * @param name The Type name
     * @returns A Type
     */
    getTypeByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Type}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Type by it's ID
     * @param id The Type ID
     * @returns A Type
     */
    getTypeById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Type}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Abilities
     * @param offset The first item that you will get
     * @param limit How many Abilities per page
     * @returns A list of Abilities
     */
    listAbilities(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Ability}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Characteristics
     * @param offset The first item that you will get
     * @param limit How many Characteristics per page
     * @returns A list of Characteristics
     */
    listCharacteristics(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Characteristic}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Egg Groups
     * @param offset The first item that you will get
     * @param limit How many Egg Groups per page
     * @returns A list of Egg Groups
     */
    listEggGroups(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.EggGroup}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Genders
     * @param offset The first item that you will get
     * @param limit How many Genders per page
     * @returns A list of Genders
     */
    listGenders(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Gender}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Growth Rates
     * @param offset The first item that you will get
     * @param limit How many Growth Rates per page
     * @returns A list of Growth Rates
     */
    listGrowthRates(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.GrowthRate}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Natures
     * @param offset The first item that you will get
     * @param limit How many Growth Natures per page
     * @returns A list of Natures
     */
    listNatures(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Nature}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Pokeathlon Stats
     * @param offset The first item that you will get
     * @param limit How many Pokeathlon Stats per page
     * @returns A list of Pokeathlon Stats
     */
    listPokeathlonStats(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.PokeathlonStat}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Pokemons
     * @param offset The first item that you will get
     * @param limit How many Pokemons Stats per page
     * @returns A list of Pokemons
     */
    listPokemons(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Pokemon}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Pokemon Colors
     * @param offset The first item that you will get
     * @param limit How many Pokemon Colors per page
     * @returns A list of Pokemon Colors
     */
    listPokemonColors(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.PokemonColor}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Pokemon Forms
     * @param offset The first item that you will get
     * @param limit How many Pokemon Forms per page
     * @returns A list of Pokemon Forms
     */
    listPokemonForms(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.PokemonForm}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Pokemon Habitats
     * @param offset The first item that you will get
     * @param limit How many Pokemon Habitats per page
     * @returns A list of Pokemon Habitats
     */
    listPokemonHabitats(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.PokemonHabitat}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Pokemon Shapes
     * @param offset The first item that you will get
     * @param limit How many Pokemon Shapes per page
     * @returns A list of Pokemon Shapes
     */
    listPokemonShapes(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.PokemonShape}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Pokemon Species
     * @param offset The first item that you will get
     * @param limit How many Pokemon Species per page
     * @returns A list of Pokemon Species
     */
    listPokemonSpecies(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.PokemonSpecies}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Stats
     * @param offset The first item that you will get
     * @param limit How many Stats per page
     * @returns A list of Stats
     */
    listStats(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Stat}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * List Types
     * @param offset The first item that you will get
     * @param limit How many Types per page
     * @returns A list of Types
     */
    listTypes(offset2, limit2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Type}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
  }
  pokemon_client.PokemonClient = PokemonClient;
  return pokemon_client;
}
var utility_client = {};
var hasRequiredUtility_client;
function requireUtility_client() {
  if (hasRequiredUtility_client)
    return utility_client;
  hasRequiredUtility_client = 1;
  Object.defineProperty(utility_client, "__esModule", { value: true });
  utility_client.UtilityClient = void 0;
  const tslib_1 = tslibExports;
  const constants_1 = requireConstants();
  const base_1 = requireBase();
  class UtilityClient extends base_1.BaseClient {
    constructor(clientOptions) {
      super(clientOptions);
    }
    /**
     * Get a Language by it's ID
     * @param id The Language ID
     * @returns Language
     */
    getLanguageById(id) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Language}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Language by it's name
     * @param name The Language name
     * @returns Language
     */
    getLanguageByName(name2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(`${constants_1.Endpoints.Language}/${name2}`).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /**
     * Get a Resource by it's url
     * @param url The Resource url
     * @returns Resource
     */
    /* eslint-disable @typescript-eslint/no-explicit-any */
    getResourceByUrl(url) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          this.api.get(url, { baseURL: "" }).then((response) => resolve(response.data)).catch((error) => reject(error));
        });
      });
    }
    /* eslint-enable @typescript-eslint/no-explicit-any */
    /**
     * List Languages
     * @param offset The first item that you will get
     * @param limit How many Languages per page
     * @returns A list of Languages
     */
    listLanguages(offset2, limit2) {
      return new Promise((resolve, reject) => {
        this.api.get(`${constants_1.Endpoints.Language}?offset=${offset2 || 0}&limit=${limit2 || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
      });
    }
  }
  utility_client.UtilityClient = UtilityClient;
  return utility_client;
}
var main_client = {};
var hasRequiredMain_client;
function requireMain_client() {
  if (hasRequiredMain_client)
    return main_client;
  hasRequiredMain_client = 1;
  Object.defineProperty(main_client, "__esModule", { value: true });
  main_client.MainClient = void 0;
  const base_1 = requireBase();
  const berry_client_1 = requireBerry_client();
  const contest_client_1 = requireContest_client();
  const encounter_client_1 = requireEncounter_client();
  const evolution_client_1 = requireEvolution_client();
  const game_client_1 = requireGame_client();
  const item_client_1 = requireItem_client();
  const location_client_1 = requireLocation_client();
  const machine_client_1 = requireMachine_client();
  const move_client_1 = requireMove_client();
  const pokemon_client_1 = requirePokemon_client();
  class MainClient extends base_1.BaseClient {
    constructor(clientOptions) {
      super(clientOptions);
      this.berry = new berry_client_1.BerryClient(clientOptions);
      this.contest = new contest_client_1.ContestClient(clientOptions);
      this.encounter = new encounter_client_1.EncounterClient(clientOptions);
      this.evolution = new evolution_client_1.EvolutionClient(clientOptions);
      this.game = new game_client_1.GameClient(clientOptions);
      this.item = new item_client_1.ItemClient(clientOptions);
      this.location = new location_client_1.LocationClient(clientOptions);
      this.machine = new machine_client_1.MachineClient(clientOptions);
      this.move = new move_client_1.MoveClient(clientOptions);
      this.pokemon = new pokemon_client_1.PokemonClient(clientOptions);
    }
  }
  main_client.MainClient = MainClient;
  return main_client;
}
var hasRequiredClients;
function requireClients() {
  if (hasRequiredClients)
    return clients;
  hasRequiredClients = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = tslibExports;
    tslib_1.__exportStar(requireBerry_client(), exports);
    tslib_1.__exportStar(requireContest_client(), exports);
    tslib_1.__exportStar(requireEncounter_client(), exports);
    tslib_1.__exportStar(requireEvolution_client(), exports);
    tslib_1.__exportStar(requireGame_client(), exports);
    tslib_1.__exportStar(requireItem_client(), exports);
    tslib_1.__exportStar(requireLocation_client(), exports);
    tslib_1.__exportStar(requireMachine_client(), exports);
    tslib_1.__exportStar(requireMove_client(), exports);
    tslib_1.__exportStar(requirePokemon_client(), exports);
    tslib_1.__exportStar(requireUtility_client(), exports);
    tslib_1.__exportStar(requireMain_client(), exports);
  })(clients);
  return clients;
}
var structures = {};
var hasRequiredStructures;
function requireStructures() {
  if (hasRequiredStructures)
    return structures;
  hasRequiredStructures = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = tslibExports;
    tslib_1.__exportStar(requireBase(), exports);
  })(structures);
  return structures;
}
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Constants = void 0;
  const tslib_1 = tslibExports;
  tslib_1.__exportStar(requireModels(), exports);
  tslib_1.__exportStar(requireClients(), exports);
  tslib_1.__exportStar(requireConstants(), exports);
  tslib_1.__exportStar(requireStructures(), exports);
  exports.Constants = tslib_1.__importStar(requireConstants());
})(dist);
const api = new dist.PokemonClient();
const getPokemonByName = (name2) => {
  return api.getPokemonByName(name2);
};
const getList = (offset2, limit2) => {
  return api.listPokemons(offset2, limit2);
};
const pokemonApi = {
  getPokemonByName,
  getList
};
const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};
const PokemonInfo_svelte_svelte_type_style_lang = "";
function create_fragment$3(ctx) {
  let div1;
  let div0;
  let t0;
  let t1;
  let t2_value = (
    /*pokemon*/
    ctx[0].id + ""
  );
  let t2;
  let t3;
  let t4;
  let img;
  let img_src_value;
  let img_alt_value;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      t0 = text(
        /*capitalizedName*/
        ctx[3]
      );
      t1 = text(" (");
      t2 = text(t2_value);
      t3 = text(")");
      t4 = space();
      img = element("img");
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(
        div0_nodes,
        /*capitalizedName*/
        ctx[3]
      );
      t1 = claim_text(div0_nodes, " (");
      t2 = claim_text(div0_nodes, t2_value);
      t3 = claim_text(div0_nodes, ")");
      div0_nodes.forEach(detach);
      t4 = claim_space(div1_nodes);
      img = claim_element(div1_nodes, "IMG", { src: true, alt: true });
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "pokemon-info__name svelte-1t2a0vv");
      if (!src_url_equal(img.src, img_src_value = /*spriteSrc*/
      ctx[2]))
        attr(img, "src", img_src_value);
      attr(img, "alt", img_alt_value = /*name*/
      ctx[1] + " sprite");
      attr(div1, "class", "pokemon-info");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, t0);
      append_hydration(div0, t1);
      append_hydration(div0, t2);
      append_hydration(div0, t3);
      append_hydration(div1, t4);
      append_hydration(div1, img);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*capitalizedName*/
      8)
        set_data(
          t0,
          /*capitalizedName*/
          ctx2[3]
        );
      if (dirty & /*pokemon*/
      1 && t2_value !== (t2_value = /*pokemon*/
      ctx2[0].id + ""))
        set_data(t2, t2_value);
      if (dirty & /*spriteSrc*/
      4 && !src_url_equal(img.src, img_src_value = /*spriteSrc*/
      ctx2[2])) {
        attr(img, "src", img_src_value);
      }
      if (dirty & /*name*/
      2 && img_alt_value !== (img_alt_value = /*name*/
      ctx2[1] + " sprite")) {
        attr(img, "alt", img_alt_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let name2;
  let capitalizedName;
  let spriteSrc;
  let { pokemon: pokemon2 } = $$props;
  $$self.$$set = ($$props2) => {
    if ("pokemon" in $$props2)
      $$invalidate(0, pokemon2 = $$props2.pokemon);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*pokemon*/
    1) {
      $$invalidate(1, name2 = pokemon2.name);
    }
    if ($$self.$$.dirty & /*name*/
    2) {
      $$invalidate(3, capitalizedName = capitalize(name2));
    }
    if ($$self.$$.dirty & /*pokemon*/
    1) {
      $$invalidate(2, spriteSrc = pokemon2.sprites.front_default);
    }
  };
  return [pokemon2, name2, spriteSrc, capitalizedName];
}
class PokemonInfo extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { pokemon: 0 });
  }
}
const PokemonCard_svelte_svelte_type_style_lang = "";
function create_catch_block$1(ctx) {
  let t0;
  let t1_value = (
    /*error*/
    ctx[4] + ""
  );
  let t1;
  return {
    c() {
      t0 = text("Error: ");
      t1 = text(t1_value);
    },
    l(nodes) {
      t0 = claim_text(nodes, "Error: ");
      t1 = claim_text(nodes, t1_value);
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
    }
  };
}
function create_then_block$1(ctx) {
  let pokemoninfo;
  let current;
  pokemoninfo = new PokemonInfo({ props: { pokemon: (
    /*pokemon*/
    ctx[3]
  ) } });
  return {
    c() {
      create_component(pokemoninfo.$$.fragment);
    },
    l(nodes) {
      claim_component(pokemoninfo.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(pokemoninfo, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(pokemoninfo.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(pokemoninfo.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(pokemoninfo, detaching);
    }
  };
}
function create_pending_block$1(ctx) {
  let t;
  return {
    c() {
      t = text("...pokemon loading");
    },
    l(nodes) {
      t = claim_text(nodes, "...pokemon loading");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$2(ctx) {
  let div;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: true,
    pending: create_pending_block$1,
    then: create_then_block$1,
    catch: create_catch_block$1,
    value: 3,
    error: 4,
    blocks: [, , ,]
  };
  handle_promise(
    /*promise*/
    ctx[0],
    info
  );
  return {
    c() {
      div = element("div");
      info.block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      info.block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "pokemon-card svelte-1uanphx");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      info.block.m(div, info.anchor = null);
      info.mount = () => div;
      info.anchor = null;
      current = true;
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      update_await_block_branch(info, ctx, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      info.block.d();
      info.token = null;
      info = null;
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let { name: name2 = "" } = $$props;
  const { getPokemonByName: getPokemonByName2 } = pokemonApi;
  let promise = getPokemonByName2(name2);
  $$self.$$set = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(1, name2 = $$props2.name);
  };
  return [promise, name2];
}
class PokemonCard extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { name: 1 });
  }
}
const PokemonCardList_svelte_svelte_type_style_lang = "";
function create_else_block(ctx) {
  var _a;
  let pokemoncard;
  let current;
  pokemoncard = new PokemonCard({ props: { name: (
    /*el*/
    (_a = ctx[11]) == null ? void 0 : _a.name
  ) } });
  return {
    c() {
      create_component(pokemoncard.$$.fragment);
    },
    l(nodes) {
      claim_component(pokemoncard.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(pokemoncard, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      var _a2;
      const pokemoncard_changes = {};
      if (dirty & /*el*/
      2048)
        pokemoncard_changes.name = /*el*/
        (_a2 = ctx2[11]) == null ? void 0 : _a2.name;
      pokemoncard.$set(pokemoncard_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(pokemoncard.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(pokemoncard.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(pokemoncard, detaching);
    }
  };
}
function create_if_block(ctx) {
  let t;
  return {
    c() {
      t = text("Pokemon is loading");
    },
    l(nodes) {
      t = claim_text(nodes, "Pokemon is loading");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (!/*el*/
    ctx2[11])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment$1(ctx) {
  let div0;
  let t0;
  let t1;
  let t2;
  let div1;
  let t3;
  let t4_value = (
    /*data*/
    ctx[0].length + ""
  );
  let t4;
  let t5;
  let div2;
  let t6;
  let input;
  let t7;
  let div4;
  let div3;
  let virtualscroll;
  let updating_elementCount;
  let current;
  let mounted;
  let dispose;
  function virtualscroll_elementCount_binding(value) {
    ctx[6](value);
  }
  let virtualscroll_props = {
    data: (
      /*data*/
      ctx[0]
    ),
    elementsPerRow: (
      /*elementsPerRow*/
      ctx[1]
    ),
    $$slots: {
      default: [create_default_slot, ({ el }) => ({ 11: el }), ({ el }) => el ? 2048 : 0]
    },
    $$scope: { ctx }
  };
  if (
    /*total*/
    ctx[2] !== void 0
  ) {
    virtualscroll_props.elementCount = /*total*/
    ctx[2];
  }
  virtualscroll = new VirtualScroll({ props: virtualscroll_props });
  binding_callbacks.push(() => bind$1(virtualscroll, "elementCount", virtualscroll_elementCount_binding));
  virtualscroll.$on(
    "endReached",
    /*debouncedHandleEnd*/
    ctx[3]
  );
  return {
    c() {
      div0 = element("div");
      t0 = text("Total: ");
      t1 = text(
        /*total*/
        ctx[2]
      );
      t2 = space();
      div1 = element("div");
      t3 = text("data: ");
      t4 = text(t4_value);
      t5 = space();
      div2 = element("div");
      t6 = text("Elements per row: ");
      input = element("input");
      t7 = space();
      div4 = element("div");
      div3 = element("div");
      create_component(virtualscroll.$$.fragment);
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", {});
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "Total: ");
      t1 = claim_text(
        div0_nodes,
        /*total*/
        ctx[2]
      );
      div0_nodes.forEach(detach);
      t2 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {});
      var div1_nodes = children(div1);
      t3 = claim_text(div1_nodes, "data: ");
      t4 = claim_text(div1_nodes, t4_value);
      div1_nodes.forEach(detach);
      t5 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", {});
      var div2_nodes = children(div2);
      t6 = claim_text(div2_nodes, "Elements per row: ");
      input = claim_element(div2_nodes, "INPUT", { type: true, min: true, max: true });
      div2_nodes.forEach(detach);
      t7 = claim_space(nodes);
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      claim_component(virtualscroll.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(input, "type", "number");
      attr(input, "min", "1");
      attr(input, "max", "30");
      attr(div3, "class", "pokemon-card-list__main svelte-rhllxr");
      attr(div4, "class", "pokemon-card-list svelte-rhllxr");
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      append_hydration(div0, t0);
      append_hydration(div0, t1);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, div1, anchor);
      append_hydration(div1, t3);
      append_hydration(div1, t4);
      insert_hydration(target, t5, anchor);
      insert_hydration(target, div2, anchor);
      append_hydration(div2, t6);
      append_hydration(div2, input);
      set_input_value(
        input,
        /*elementsPerRow*/
        ctx[1]
      );
      insert_hydration(target, t7, anchor);
      insert_hydration(target, div4, anchor);
      append_hydration(div4, div3);
      mount_component(virtualscroll, div3, null);
      current = true;
      if (!mounted) {
        dispose = listen(
          input,
          "input",
          /*input_input_handler*/
          ctx[5]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & /*total*/
      4)
        set_data(
          t1,
          /*total*/
          ctx2[2]
        );
      if ((!current || dirty & /*data*/
      1) && t4_value !== (t4_value = /*data*/
      ctx2[0].length + ""))
        set_data(t4, t4_value);
      if (dirty & /*elementsPerRow*/
      2 && to_number(input.value) !== /*elementsPerRow*/
      ctx2[1]) {
        set_input_value(
          input,
          /*elementsPerRow*/
          ctx2[1]
        );
      }
      const virtualscroll_changes = {};
      if (dirty & /*data*/
      1)
        virtualscroll_changes.data = /*data*/
        ctx2[0];
      if (dirty & /*elementsPerRow*/
      2)
        virtualscroll_changes.elementsPerRow = /*elementsPerRow*/
        ctx2[1];
      if (dirty & /*$$scope, el*/
      6144) {
        virtualscroll_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_elementCount && dirty & /*total*/
      4) {
        updating_elementCount = true;
        virtualscroll_changes.elementCount = /*total*/
        ctx2[2];
        add_flush_callback(() => updating_elementCount = false);
      }
      virtualscroll.$set(virtualscroll_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(virtualscroll.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(virtualscroll.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div0);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(div1);
      if (detaching)
        detach(t5);
      if (detaching)
        detach(div2);
      if (detaching)
        detach(t7);
      if (detaching)
        detach(div4);
      destroy_component(virtualscroll);
      mounted = false;
      dispose();
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let total;
  const { getList: getList2 } = pokemonApi;
  let { list } = $$props;
  let data2 = [...list.results];
  let elementPool = 0;
  const getWithElPool = async () => {
    if (elementPool === 0) {
      return;
    }
    const newData = getList2(data2.length, elementPool);
    elementPool = 0;
    $$invalidate(0, data2 = [...data2, ...(await newData).results]);
  };
  const handleEndReached = (event) => {
    const newElsNeeded = event.detail;
    elementPool += newElsNeeded;
    getWithElPool();
  };
  const debouncedHandleEnd = lodash_debounce(handleEndReached, 100);
  let elementsPerRow = 4;
  function input_input_handler() {
    elementsPerRow = to_number(this.value);
    $$invalidate(1, elementsPerRow);
  }
  function virtualscroll_elementCount_binding(value) {
    total = value;
    $$invalidate(2, total), $$invalidate(4, list);
  }
  $$self.$$set = ($$props2) => {
    if ("list" in $$props2)
      $$invalidate(4, list = $$props2.list);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*list*/
    16) {
      $$invalidate(2, total = list.count);
    }
  };
  return [
    data2,
    elementsPerRow,
    total,
    debouncedHandleEnd,
    list,
    input_input_handler,
    virtualscroll_elementCount_binding
  ];
}
class PokemonCardList extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { list: 4 });
  }
}
function create_catch_block(ctx) {
  let t0;
  let t1_value = (
    /*error*/
    ctx[5] + ""
  );
  let t1;
  return {
    c() {
      t0 = text("Error: ");
      t1 = text(t1_value);
    },
    l(nodes) {
      t0 = claim_text(nodes, "Error: ");
      t1 = claim_text(nodes, t1_value);
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*promise*/
      1 && t1_value !== (t1_value = /*error*/
      ctx2[5] + ""))
        set_data(t1, t1_value);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
    }
  };
}
function create_then_block(ctx) {
  let pokemoncardlist;
  let current;
  pokemoncardlist = new PokemonCardList({ props: { list: (
    /*list*/
    ctx[4]
  ) } });
  return {
    c() {
      create_component(pokemoncardlist.$$.fragment);
    },
    l(nodes) {
      claim_component(pokemoncardlist.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(pokemoncardlist, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const pokemoncardlist_changes = {};
      if (dirty & /*promise*/
      1)
        pokemoncardlist_changes.list = /*list*/
        ctx2[4];
      pokemoncardlist.$set(pokemoncardlist_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(pokemoncardlist.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(pokemoncardlist.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(pokemoncardlist, detaching);
    }
  };
}
function create_pending_block(ctx) {
  let t;
  return {
    c() {
      t = text("...Loading");
    },
    l(nodes) {
      t = claim_text(nodes, "...Loading");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment(ctx) {
  let div;
  let h1;
  let t0;
  let t1;
  let main;
  let promise_1;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: true,
    pending: create_pending_block,
    then: create_then_block,
    catch: create_catch_block,
    value: 4,
    error: 5,
    blocks: [, , ,]
  };
  handle_promise(promise_1 = /*promise*/
  ctx[0], info);
  return {
    c() {
      div = element("div");
      h1 = element("h1");
      t0 = text("Svelte Pokemon Pet Project");
      t1 = space();
      main = element("main");
      info.block.c();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Svelte Pokemon Pet Project");
      h1_nodes.forEach(detach);
      t1 = claim_space(div_nodes);
      main = claim_element(div_nodes, "MAIN", {});
      var main_nodes = children(main);
      info.block.l(main_nodes);
      main_nodes.forEach(detach);
      div_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, h1);
      append_hydration(h1, t0);
      append_hydration(div, t1);
      append_hydration(div, main);
      info.block.m(main, info.anchor = null);
      info.mount = () => main;
      info.anchor = null;
      current = true;
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      info.ctx = ctx;
      if (dirty & /*promise*/
      1 && promise_1 !== (promise_1 = /*promise*/
      ctx[0]) && handle_promise(promise_1, info))
        ;
      else {
        update_await_block_branch(info, ctx, dirty);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      info.block.d();
      info.token = null;
      info = null;
    }
  };
}
let offset = 0;
let limit = 30;
function instance($$self, $$props, $$invalidate) {
  const { getList: getList2 } = pokemonApi;
  const getPokemonList = () => {
    return getList2(offset, limit);
  };
  let promise = getPokemonList();
  return [promise];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
