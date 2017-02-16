module.exports =
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGFlZjBmMzUwM2YwNzBkYWU0MjciLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGl2YXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlLWZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlci1mYWN0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUM1REE7SUFBQTtJQU1BLENBQUM7SUFMVSxnQkFBTSxHQUFiLFVBQWMsSUFBcUIsRUFBRSxNQUFhO1FBQzlDLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUM7QUFOWSw4QkFBUzs7Ozs7Ozs7O0FDSnRCLHlDQUF5RDtBQUV6RDtJQUFBO0lBUUEsQ0FBQztJQVBVLHVCQUFNLEdBQWIsVUFBYyxJQUFxQjtRQUMvQixJQUFJLFNBQVMsR0FBRztZQUFDLGdCQUFnQjtpQkFBaEIsVUFBZ0IsRUFBaEIscUJBQWdCLEVBQWhCLElBQWdCO2dCQUFoQiwyQkFBZ0I7O1lBQzdCLE1BQU0sQ0FBQyxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDO1FBQ0YsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUM7QUFSWSw0Q0FBZ0I7Ozs7Ozs7OztBQ0Y3Qix5Q0FBeUQ7QUFFekQ7SUFBQTtJQVdBLENBQUM7SUFWVSxvQkFBTSxHQUFiLFVBQWMsSUFBcUI7UUFDL0IsSUFBSSxNQUFNLEdBQUc7WUFBQyxnQkFBZ0I7aUJBQWhCLFVBQWdCLEVBQWhCLHFCQUFnQixFQUFoQixJQUFnQjtnQkFBaEIsMkJBQWdCOztZQUMxQixJQUFJLFFBQVEsR0FBRyxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDOUMsTUFBTSxDQUFDO2dCQUFDLGlCQUFpQjtxQkFBakIsVUFBaUIsRUFBakIscUJBQWlCLEVBQWpCLElBQWlCO29CQUFqQiw0QkFBaUI7O2dCQUNyQixNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3BELENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQztRQUNGLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDO0FBWFksc0NBQWE7Ozs7Ozs7OztBQ0YxQixpREFBdUQ7QUFDdkQsOENBQWlEO0FBRWpELGdCQUFnQixJQUFZLEVBQUUsT0FBa0IsRUFBRSxNQUFpQjtJQUMvRCxJQUFJLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDZixDQUFDO0FBZUQ7SUFHSSxnQkFBWSxJQUFZLEVBQUUsT0FBa0IsRUFBRSxNQUFpQjtRQUMzRCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsc0JBQUksd0JBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUVELHVCQUFNLEdBQU4sVUFBTyxTQUFtQjtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxvQkFBRyxHQUFILFVBQUksTUFBZ0I7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsMkJBQVUsR0FBVixVQUFXLElBQVksRUFBRSxVQUEwQjtRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsMEJBQVMsR0FBVCxVQUFVLElBQVksRUFBRSxTQUFTO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxvQ0FBZ0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNoRSxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx1QkFBTSxHQUFOLFVBQU8sSUFBWSxFQUFFLE1BQU07UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLDhCQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsd0JBQU8sR0FBUCxVQUFRLElBQVksRUFBRSxPQUFpQjtRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQseUJBQVEsR0FBUixVQUFTLElBQVksRUFBRSxRQUFRO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx3QkFBTyxHQUFQLFVBQVEsSUFBWSxFQUFFLE9BQWlCO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx5QkFBUSxHQUFSLFVBQVMsSUFBWSxFQUFFLEtBQUs7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDOztBQUVELGtCQUFlO0lBQ1gsTUFBTSxFQUFFLE1BQU07Q0FDakIiLCJmaWxlIjoiYW5ndWxhci10cy5icm93c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNGFlZjBmMzUwM2YwNzBkYWU0MjciLCJleHBvcnQgaW50ZXJmYWNlIElBY3RpdmF0b3JDbGFzcyB7XHJcbiAgICBuZXcgKC4uLnBhcmFtczogYW55W10pO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWN0aXZhdG9yIHtcclxuICAgIHN0YXRpYyBjcmVhdGUodHlwZTogSUFjdGl2YXRvckNsYXNzLCBwYXJhbXM6IGFueVtdKSB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlID0gT2JqZWN0LmNyZWF0ZSh0eXBlLnByb3RvdHlwZSk7XHJcbiAgICAgICAgaW5zdGFuY2UuY29uc3RydWN0b3IuYXBwbHkoaW5zdGFuY2UsIHBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hY3RpdmF0b3IudHMiLCJpbXBvcnQgeyBJQWN0aXZhdG9yQ2xhc3MsIEFjdGl2YXRvciB9IGZyb20gXCIuL2FjdGl2YXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZUZhY3Rvcnkge1xyXG4gICAgc3RhdGljIGNyZWF0ZSh0eXBlOiBJQWN0aXZhdG9yQ2xhc3MpOiBhbnkge1xyXG4gICAgICAgIHZhciBkaXJlY3RpdmUgPSAoLi4uaW5qZWN0OiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gQWN0aXZhdG9yLmNyZWF0ZSh0eXBlLCBpbmplY3QpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZGlyZWN0aXZlW1wiJGluamVjdFwiXSA9IHR5cGVbXCIkaW5qZWN0XCJdO1xyXG4gICAgICAgIHJldHVybiBkaXJlY3RpdmU7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlyZWN0aXZlLWZhY3RvcnkudHMiLCJpbXBvcnQgeyBJQWN0aXZhdG9yQ2xhc3MsIEFjdGl2YXRvciB9IGZyb20gXCIuL2FjdGl2YXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlckZhY3Rvcnkge1xyXG4gICAgc3RhdGljIGNyZWF0ZSh0eXBlOiBJQWN0aXZhdG9yQ2xhc3MpOiBhbnkge1xyXG4gICAgICAgIHZhciBmaWx0ZXIgPSAoLi4uaW5qZWN0OiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBBY3RpdmF0b3IuY3JlYXRlKHR5cGUsIGluamVjdCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoLi4ub3B0aW9uczogYW55W10pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5maWx0ZXIuYXBwbHkoaW5zdGFuY2UsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmlsdGVyW1wiJGluamVjdFwiXSA9IHR5cGVbXCIkaW5qZWN0XCJdO1xyXG4gICAgICAgIHJldHVybiBmaWx0ZXI7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZmlsdGVyLWZhY3RvcnkudHMiLCJpbXBvcnQgeyBEaXJlY3RpdmVGYWN0b3J5IH0gZnJvbSBcIi4vZGlyZWN0aXZlLWZhY3RvcnlcIjtcclxuaW1wb3J0IHsgRmlsdGVyRmFjdG9yeSB9IGZyb20gXCIuL2ZpbHRlci1mYWN0b3J5XCI7XHJcblxyXG5mdW5jdGlvbiBtb2R1bGUobmFtZTogc3RyaW5nLCBtb2R1bGVzPzogc3RyaW5nW10sIGNvbmZpZz86IEZ1bmN0aW9uKTogSU1vZHVsZSB7XHJcbiAgICB2YXIgbW9kID0gbmV3IE1vZHVsZShuYW1lLCBtb2R1bGVzLCBjb25maWcpO1xyXG4gICAgcmV0dXJuIG1vZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTW9kdWxlIHtcclxuICAgIGNvbmZpZyhhcHBDb25maWc6IEZ1bmN0aW9uKTogSU1vZHVsZTtcclxuICAgIHJ1bihhcHBSdW46IEZ1bmN0aW9uKTogSU1vZHVsZTtcclxuICAgIGNvbnRyb2xsZXIobmFtZTogc3RyaW5nLCBjb250cm9sbGVyOiBGdW5jdGlvbik6IHN0cmluZztcclxuICAgIGRpcmVjdGl2ZShuYW1lOiBzdHJpbmcsIGRpcmVjdGl2ZTogYW55KTogc3RyaW5nO1xyXG4gICAgZmlsdGVyKG5hbWU6IHN0cmluZywgZmlsdGVyOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBzZXJ2aWNlKG5hbWU6IHN0cmluZywgc2VydmljZTogRnVuY3Rpb24pOiBzdHJpbmc7XHJcbiAgICBwcm92aWRlcihuYW1lOiBzdHJpbmcsIHByb3ZpZGVyOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBmYWN0b3J5KG5hbWU6IHN0cmluZywgZmFjdG9yeTogRnVuY3Rpb24pOiBzdHJpbmc7XHJcbiAgICBjb25zdGFudChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNsYXNzIE1vZHVsZSBpbXBsZW1lbnRzIElNb2R1bGUge1xyXG4gICAgcHJpdmF0ZSBtb2R1bGU6IG5nLklNb2R1bGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBtb2R1bGVzPzogc3RyaW5nW10sIGNvbmZpZz86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5tb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShuYW1lLCBtb2R1bGVzLCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlnKGFwcENvbmZpZzogRnVuY3Rpb24pOiBJTW9kdWxlIHtcclxuICAgICAgICB0aGlzLm1vZHVsZS5jb25maWcoYXBwQ29uZmlnKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBydW4oYXBwUnVuOiBGdW5jdGlvbik6IElNb2R1bGUge1xyXG4gICAgICAgIHRoaXMubW9kdWxlLnJ1bihhcHBSdW4pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRyb2xsZXIobmFtZTogc3RyaW5nLCBjb250cm9sbGVyOiBGdW5jdGlvbiB8IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgdGhpcy5tb2R1bGUuY29udHJvbGxlcihuYW1lLCBjb250cm9sbGVyKTtcclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBkaXJlY3RpdmUobmFtZTogc3RyaW5nLCBkaXJlY3RpdmUpOiBzdHJpbmcge1xyXG4gICAgICAgIHRoaXMubW9kdWxlLmRpcmVjdGl2ZShuYW1lLCBEaXJlY3RpdmVGYWN0b3J5LmNyZWF0ZShkaXJlY3RpdmUpKTtcclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIobmFtZTogc3RyaW5nLCBmaWx0ZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIHRoaXMubW9kdWxlLmZpbHRlcihuYW1lLCBGaWx0ZXJGYWN0b3J5LmNyZWF0ZShmaWx0ZXIpKTtcclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXJ2aWNlKG5hbWU6IHN0cmluZywgc2VydmljZTogRnVuY3Rpb24pOiBzdHJpbmcge1xyXG4gICAgICAgIHRoaXMubW9kdWxlLnNlcnZpY2UobmFtZSwgc2VydmljZSk7XHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdmlkZXIobmFtZTogc3RyaW5nLCBwcm92aWRlcik6IHN0cmluZyB7XHJcbiAgICAgICAgdGhpcy5tb2R1bGUucHJvdmlkZXIobmFtZSwgcHJvdmlkZXIpO1xyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGZhY3RvcnkobmFtZTogc3RyaW5nLCBmYWN0b3J5OiBGdW5jdGlvbik6IHN0cmluZyB7XHJcbiAgICAgICAgdGhpcy5tb2R1bGUuZmFjdG9yeShuYW1lLCBmYWN0b3J5KTtcclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdGFudChuYW1lOiBzdHJpbmcsIHZhbHVlKTogc3RyaW5nIHtcclxuICAgICAgICB0aGlzLm1vZHVsZS5jb25zdGFudChuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG1vZHVsZTogbW9kdWxlXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==