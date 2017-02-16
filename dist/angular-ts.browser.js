/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Activator = (function () {
    function Activator() {
    }
    Activator.create = function (type, params) {
        var instance = Object.create(type.prototype);
        instance.constructor.apply(instance, params);
        return instance;
    };
    return Activator;
}());
exports.Activator = Activator;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var activator_1 = __webpack_require__(0);
var DirectiveFactory = (function () {
    function DirectiveFactory() {
    }
    DirectiveFactory.create = function (type) {
        var directive = function () {
            var inject = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                inject[_i] = arguments[_i];
            }
            return activator_1.Activator.create(type, inject);
        };
        directive["$inject"] = type["$inject"];
        return directive;
    };
    return DirectiveFactory;
}());
exports.DirectiveFactory = DirectiveFactory;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var activator_1 = __webpack_require__(0);
var FilterFactory = (function () {
    function FilterFactory() {
    }
    FilterFactory.create = function (type) {
        var filter = function () {
            var inject = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                inject[_i] = arguments[_i];
            }
            var instance = activator_1.Activator.create(type, inject);
            return function () {
                var options = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    options[_i] = arguments[_i];
                }
                return instance.filter.apply(instance, options);
            };
        };
        filter["$inject"] = type["$inject"];
        return filter;
    };
    return FilterFactory;
}());
exports.FilterFactory = FilterFactory;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var directive_factory_1 = __webpack_require__(1);
var filter_factory_1 = __webpack_require__(2);
function module(name, modules, config) {
    var mod = new Module(name, modules, config);
    return mod;
}
var Module = (function () {
    function Module(name, modules, config) {
        this.module = angular.module(name, modules, config);
    }
    Object.defineProperty(Module.prototype, "name", {
        get: function () {
            return this.module.name;
        },
        enumerable: true,
        configurable: true
    });
    Module.prototype.config = function (appConfig) {
        this.module.config(appConfig);
        return this;
    };
    Module.prototype.run = function (appRun) {
        this.module.run(appRun);
        return this;
    };
    Module.prototype.controller = function (name, controller) {
        this.module.controller(name, controller);
        return name;
    };
    Module.prototype.directive = function (name, directive) {
        this.module.directive(name, directive_factory_1.DirectiveFactory.create(directive));
        return name;
    };
    Module.prototype.filter = function (name, filter) {
        this.module.filter(name, filter_factory_1.FilterFactory.create(filter));
        return name;
    };
    Module.prototype.service = function (name, service) {
        this.module.service(name, service);
        return name;
    };
    Module.prototype.provider = function (name, provider) {
        this.module.provider(name, provider);
        return name;
    };
    Module.prototype.factory = function (name, factory) {
        this.module.factory(name, factory);
        return name;
    };
    Module.prototype.constant = function (name, value) {
        this.module.constant(name, value);
        return name;
    };
    return Module;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    module: module
};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzEzM2Q0OGUzODZkZTZiNmU4MTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGl2YXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlLWZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlci1mYWN0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzVEQTtJQUFBO0lBTUEsQ0FBQztJQUxVLGdCQUFNLEdBQWIsVUFBYyxJQUFxQixFQUFFLE1BQWE7UUFDOUMsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0MsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQztBQU5ZLDhCQUFTOzs7Ozs7Ozs7QUNKdEIseUNBQXlEO0FBRXpEO0lBQUE7SUFRQSxDQUFDO0lBUFUsdUJBQU0sR0FBYixVQUFjLElBQXFC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TUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsOEJBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx3QkFBTyxHQUFQLFVBQVEsSUFBWSxFQUFFLE9BQWlCO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx5QkFBUSxHQUFSLFVBQVMsSUFBWSxFQUFFLFFBQVE7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELHdCQUFPLEdBQVAsVUFBUSxJQUFZLEVBQUUsT0FBaUI7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELHlCQUFRLEdBQVIsVUFBUyxJQUFZLEVBQUUsS0FBSztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUM7O0FBRUQsa0JBQWU7SUFDWCxNQUFNLEVBQUUsTUFBTTtDQUNqQiIsImZpbGUiOiJhbmd1bGFyLXRzLmJyb3dzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjMTMzZDQ4ZTM4NmRlNmI2ZTgxMiIsImV4cG9ydCBpbnRlcmZhY2UgSUFjdGl2YXRvckNsYXNzIHtcclxuICAgIG5ldyAoLi4ucGFyYW1zOiBhbnlbXSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBY3RpdmF0b3Ige1xyXG4gICAgc3RhdGljIGNyZWF0ZSh0eXBlOiBJQWN0aXZhdG9yQ2xhc3MsIHBhcmFtczogYW55W10pIHtcclxuICAgICAgICB2YXIgaW5zdGFuY2UgPSBPYmplY3QuY3JlYXRlKHR5cGUucHJvdG90eXBlKTtcclxuICAgICAgICBpbnN0YW5jZS5jb25zdHJ1Y3Rvci5hcHBseShpbnN0YW5jZSwgcGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjdGl2YXRvci50cyIsImltcG9ydCB7IElBY3RpdmF0b3JDbGFzcywgQWN0aXZhdG9yIH0gZnJvbSBcIi4vYWN0aXZhdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlyZWN0aXZlRmFjdG9yeSB7XHJcbiAgICBzdGF0aWMgY3JlYXRlKHR5cGU6IElBY3RpdmF0b3JDbGFzcyk6IGFueSB7XHJcbiAgICAgICAgdmFyIGRpcmVjdGl2ZSA9ICguLi5pbmplY3Q6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBBY3RpdmF0b3IuY3JlYXRlKHR5cGUsIGluamVjdCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkaXJlY3RpdmVbXCIkaW5qZWN0XCJdID0gdHlwZVtcIiRpbmplY3RcIl07XHJcbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaXJlY3RpdmUtZmFjdG9yeS50cyIsImltcG9ydCB7IElBY3RpdmF0b3JDbGFzcywgQWN0aXZhdG9yIH0gZnJvbSBcIi4vYWN0aXZhdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsdGVyRmFjdG9yeSB7XHJcbiAgICBzdGF0aWMgY3JlYXRlKHR5cGU6IElBY3RpdmF0b3JDbGFzcyk6IGFueSB7XHJcbiAgICAgICAgdmFyIGZpbHRlciA9ICguLi5pbmplY3Q6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IEFjdGl2YXRvci5jcmVhdGUodHlwZSwgaW5qZWN0KTtcclxuICAgICAgICAgICAgcmV0dXJuICguLi5vcHRpb25zOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLmZpbHRlci5hcHBseShpbnN0YW5jZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmaWx0ZXJbXCIkaW5qZWN0XCJdID0gdHlwZVtcIiRpbmplY3RcIl07XHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcjtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9maWx0ZXItZmFjdG9yeS50cyIsImltcG9ydCB7IERpcmVjdGl2ZUZhY3RvcnkgfSBmcm9tIFwiLi9kaXJlY3RpdmUtZmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJGYWN0b3J5IH0gZnJvbSBcIi4vZmlsdGVyLWZhY3RvcnlcIjtcclxuXHJcbmZ1bmN0aW9uIG1vZHVsZShuYW1lOiBzdHJpbmcsIG1vZHVsZXM/OiBzdHJpbmdbXSwgY29uZmlnPzogRnVuY3Rpb24pOiBJTW9kdWxlIHtcclxuICAgIHZhciBtb2QgPSBuZXcgTW9kdWxlKG5hbWUsIG1vZHVsZXMsIGNvbmZpZyk7XHJcbiAgICByZXR1cm4gbW9kO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNb2R1bGUge1xyXG4gICAgY29uZmlnKGFwcENvbmZpZzogRnVuY3Rpb24pOiBJTW9kdWxlO1xyXG4gICAgcnVuKGFwcFJ1bjogRnVuY3Rpb24pOiBJTW9kdWxlO1xyXG4gICAgY29udHJvbGxlcihuYW1lOiBzdHJpbmcsIGNvbnRyb2xsZXI6IEZ1bmN0aW9uKTogc3RyaW5nO1xyXG4gICAgZGlyZWN0aXZlKG5hbWU6IHN0cmluZywgZGlyZWN0aXZlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmaWx0ZXIobmFtZTogc3RyaW5nLCBmaWx0ZXI6IGFueSk6IHN0cmluZztcclxuICAgIHNlcnZpY2UobmFtZTogc3RyaW5nLCBzZXJ2aWNlOiBGdW5jdGlvbik6IHN0cmluZztcclxuICAgIHByb3ZpZGVyKG5hbWU6IHN0cmluZywgcHJvdmlkZXI6IGFueSk6IHN0cmluZztcclxuICAgIGZhY3RvcnkobmFtZTogc3RyaW5nLCBmYWN0b3J5OiBGdW5jdGlvbik6IHN0cmluZztcclxuICAgIGNvbnN0YW50KG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgTW9kdWxlIGltcGxlbWVudHMgSU1vZHVsZSB7XHJcbiAgICBwcml2YXRlIG1vZHVsZTogbmcuSU1vZHVsZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIG1vZHVsZXM/OiBzdHJpbmdbXSwgY29uZmlnPzogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLm1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKG5hbWUsIG1vZHVsZXMsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tb2R1bGUubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25maWcoYXBwQ29uZmlnOiBGdW5jdGlvbik6IElNb2R1bGUge1xyXG4gICAgICAgIHRoaXMubW9kdWxlLmNvbmZpZyhhcHBDb25maWcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bihhcHBSdW46IEZ1bmN0aW9uKTogSU1vZHVsZSB7XHJcbiAgICAgICAgdGhpcy5tb2R1bGUucnVuKGFwcFJ1bik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29udHJvbGxlcihuYW1lOiBzdHJpbmcsIGNvbnRyb2xsZXI6IEZ1bmN0aW9uIHwgYW55KTogc3RyaW5nIHtcclxuICAgICAgICB0aGlzLm1vZHVsZS5jb250cm9sbGVyKG5hbWUsIGNvbnRyb2xsZXIpO1xyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGRpcmVjdGl2ZShuYW1lOiBzdHJpbmcsIGRpcmVjdGl2ZSk6IHN0cmluZyB7XHJcbiAgICAgICAgdGhpcy5tb2R1bGUuZGlyZWN0aXZlKG5hbWUsIERpcmVjdGl2ZUZhY3RvcnkuY3JlYXRlKGRpcmVjdGl2ZSkpO1xyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcihuYW1lOiBzdHJpbmcsIGZpbHRlcik6IHN0cmluZyB7XHJcbiAgICAgICAgdGhpcy5tb2R1bGUuZmlsdGVyKG5hbWUsIEZpbHRlckZhY3RvcnkuY3JlYXRlKGZpbHRlcikpO1xyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNlcnZpY2UobmFtZTogc3RyaW5nLCBzZXJ2aWNlOiBGdW5jdGlvbik6IHN0cmluZyB7XHJcbiAgICAgICAgdGhpcy5tb2R1bGUuc2VydmljZShuYW1lLCBzZXJ2aWNlKTtcclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm92aWRlcihuYW1lOiBzdHJpbmcsIHByb3ZpZGVyKTogc3RyaW5nIHtcclxuICAgICAgICB0aGlzLm1vZHVsZS5wcm92aWRlcihuYW1lLCBwcm92aWRlcik7XHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZmFjdG9yeShuYW1lOiBzdHJpbmcsIGZhY3Rvcnk6IEZ1bmN0aW9uKTogc3RyaW5nIHtcclxuICAgICAgICB0aGlzLm1vZHVsZS5mYWN0b3J5KG5hbWUsIGZhY3RvcnkpO1xyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0YW50KG5hbWU6IHN0cmluZywgdmFsdWUpOiBzdHJpbmcge1xyXG4gICAgICAgIHRoaXMubW9kdWxlLmNvbnN0YW50KG5hbWUsIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbW9kdWxlOiBtb2R1bGVcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGUudHMiXSwic291cmNlUm9vdCI6IiJ9