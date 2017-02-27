import { Activator } from "./activator";
var FilterFactory = (function () {
    function FilterFactory() {
    }
    FilterFactory.create = function (type) {
        var filter = function () {
            var inject = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                inject[_i] = arguments[_i];
            }
            var instance = Activator.create(type, inject);
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
export { FilterFactory };
