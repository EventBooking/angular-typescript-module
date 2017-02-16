import { DirectiveFactory } from "./directive-factory";
import { FilterFactory } from "./filter-factory";
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
        return this;
    };
    Module.prototype.directive = function (name, directive) {
        this.module.directive(name, DirectiveFactory.create(directive));
        return this;
    };
    Module.prototype.filter = function (name, filter) {
        this.module.filter(name, FilterFactory.create(filter));
        return this;
    };
    Module.prototype.service = function (name, service) {
        this.module.service(name, service);
        return this;
    };
    Module.prototype.provider = function (name, provider) {
        this.module.provider(name, provider);
        return this;
    };
    Module.prototype.factory = function (name, factory) {
        this.module.factory(name, factory);
        return this;
    };
    Module.prototype.constant = function (name, value) {
        this.module.constant(name, value);
        return this;
    };
    return Module;
}());
export default {
    module: module
};
