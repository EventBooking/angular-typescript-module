import { Activator } from "./activator";
var DirectiveFactory = (function () {
    function DirectiveFactory() {
    }
    DirectiveFactory.create = function (type) {
        var directive = function () {
            var inject = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                inject[_i] = arguments[_i];
            }
            return Activator.create(type, inject);
        };
        directive["$inject"] = type["$inject"];
        return directive;
    };
    return DirectiveFactory;
}());
export { DirectiveFactory };
