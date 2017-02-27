"use strict";
var directive_factory_1 = require("./directive-factory");
var filter_factory_1 = require("./filter-factory");
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
var Angular = {
    module: module
};
window['Angular'] = Angular;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Angular;
