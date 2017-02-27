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
