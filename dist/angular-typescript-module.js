var Angular;
(function (Angular) {
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
    Angular.Activator = Activator;
})(Angular || (Angular = {}));
var Angular;
(function (Angular) {
    var DirectiveFactory = (function () {
        function DirectiveFactory() {
        }
        DirectiveFactory.create = function (type) {
            var directive = function () {
                var inject = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    inject[_i] = arguments[_i];
                }
                return Angular.Activator.create(type, inject);
            };
            directive["$inject"] = type["$inject"];
            return directive;
        };
        return DirectiveFactory;
    }());
    Angular.DirectiveFactory = DirectiveFactory;
})(Angular || (Angular = {}));
var Angular;
(function (Angular) {
    var FilterFactory = (function () {
        function FilterFactory() {
        }
        FilterFactory.create = function (type) {
            var filter = function () {
                var inject = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    inject[_i] = arguments[_i];
                }
                var instance = Angular.Activator.create(type, inject);
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
    Angular.FilterFactory = FilterFactory;
})(Angular || (Angular = {}));
var Angular;
(function (Angular) {
    function module(name, modules, config) {
        var mod = new Module(name, modules, config);
        return mod;
    }
    Angular.module = module;
    var Module = (function () {
        function Module(name, modules, config) {
            this.module = angular.module(name, modules, config);
        }
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
        Module.prototype.component = function (name, options) {
            this.module.component(name, options);
            return this;
        };
        Module.prototype.directive = function (name, directive) {
            this.module.directive(name, Angular.DirectiveFactory.create(directive));
            return this;
        };
        Module.prototype.filter = function (name, filter) {
            this.module.filter(name, Angular.FilterFactory.create(filter));
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
})(Angular || (Angular = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci10eXBlc2NyaXB0LW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hY3RpdmF0b3IudHMiLCIuLi9zcmMvZGlyZWN0aXZlLWZhY3RvcnkudHMiLCIuLi9zcmMvZmlsdGVyLWZhY3RvcnkudHMiLCIuLi9zcmMvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsT0FBTyxDQVloQjtBQVpELFdBQVUsT0FBTztJQUtiO1FBQUE7UUFNQSxDQUFDO1FBTFUsZ0JBQU0sR0FBYixVQUFjLElBQXFCLEVBQUUsTUFBYTtZQUM5QyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM3QyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDN0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNwQixDQUFDO1FBQ0wsZ0JBQUM7SUFBRCxDQUFDLEFBTkQsSUFNQztJQU5ZLGlCQUFTLFlBTXJCLENBQUE7QUFDTCxDQUFDLEVBWlMsT0FBTyxLQUFQLE9BQU8sUUFZaEI7QUNaRCxJQUFVLE9BQU8sQ0FVaEI7QUFWRCxXQUFVLE9BQU87SUFDYjtRQUFBO1FBUUEsQ0FBQztRQVBVLHVCQUFNLEdBQWIsVUFBYyxJQUFxQjtZQUMvQixJQUFJLFNBQVMsR0FBRztnQkFBQyxnQkFBZ0I7cUJBQWhCLFVBQWdCLEVBQWhCLHFCQUFnQixFQUFoQixJQUFnQjtvQkFBaEIsMkJBQWdCOztnQkFDN0IsTUFBTSxDQUFDLFFBQUEsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDO1lBQ0YsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JCLENBQUM7UUFDTCx1QkFB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TSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQsd0JBQU8sR0FBUCxVQUFRLElBQVksRUFBRSxPQUFpQjtZQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQseUJBQVEsR0FBUixVQUFTLElBQVksRUFBRSxRQUFRO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCx3QkFBTyxHQUFQLFVBQVEsSUFBWSxFQUFFLE9BQWlCO1lBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCx5QkFBUSxHQUFSLFVBQVMsSUFBWSxFQUFFLEtBQUs7WUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNMLGFBQUM7SUFBRCxDQUFDLEFBeERELElBd0RDO0FBQ0wsQ0FBQyxFQTVFUyxPQUFPLEtBQVAsT0FBTyxRQTRFaEIiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgQW5ndWxhciB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElBY3RpdmF0b3JDbGFzcyB7XHJcbiAgICAgICAgbmV3ICguLi5wYXJhbXM6IGFueVtdKTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQWN0aXZhdG9yIHtcclxuICAgICAgICBzdGF0aWMgY3JlYXRlKHR5cGU6IElBY3RpdmF0b3JDbGFzcywgcGFyYW1zOiBhbnlbXSkge1xyXG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBPYmplY3QuY3JlYXRlKHR5cGUucHJvdG90eXBlKTtcclxuICAgICAgICAgICAgaW5zdGFuY2UuY29uc3RydWN0b3IuYXBwbHkoaW5zdGFuY2UsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgQW5ndWxhciB7XHJcbiAgICBleHBvcnQgY2xhc3MgRGlyZWN0aXZlRmFjdG9yeSB7XHJcbiAgICAgICAgc3RhdGljIGNyZWF0ZSh0eXBlOiBJQWN0aXZhdG9yQ2xhc3MpOiBhbnkge1xyXG4gICAgICAgICAgICB2YXIgZGlyZWN0aXZlID0gKC4uLmluamVjdDogYW55W10pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBBY3RpdmF0b3IuY3JlYXRlKHR5cGUsIGluamVjdCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRpcmVjdGl2ZVtcIiRpbmplY3RcIl0gPSB0eXBlW1wiJGluamVjdFwiXTtcclxuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgQW5ndWxhciB7XHJcbiAgICBleHBvcnQgY2xhc3MgRmlsdGVyRmFjdG9yeSB7XHJcbiAgICAgICAgc3RhdGljIGNyZWF0ZSh0eXBlOiBJQWN0aXZhdG9yQ2xhc3MpOiBhbnkge1xyXG4gICAgICAgICAgICB2YXIgZmlsdGVyID0gKC4uLmluamVjdDogYW55W10pID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IEFjdGl2YXRvci5jcmVhdGUodHlwZSwgaW5qZWN0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoLi4ub3B0aW9uczogYW55W10pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2UuZmlsdGVyLmFwcGx5KGluc3RhbmNlLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZpbHRlcltcIiRpbmplY3RcIl0gPSB0eXBlW1wiJGluamVjdFwiXTtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgQW5ndWxhciB7XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIG1vZHVsZShuYW1lOiBzdHJpbmcsIG1vZHVsZXM/OiBzdHJpbmdbXSwgY29uZmlnPzogRnVuY3Rpb24pOiBJTW9kdWxlIHtcclxuICAgICAgICB2YXIgbW9kID0gbmV3IE1vZHVsZShuYW1lLCBtb2R1bGVzLCBjb25maWcpO1xyXG4gICAgICAgIHJldHVybiBtb2Q7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJTW9kdWxlIHtcclxuICAgICAgICBjb25maWcoYXBwQ29uZmlnOiBGdW5jdGlvbik6IElNb2R1bGU7XHJcbiAgICAgICAgcnVuKGFwcFJ1bjogRnVuY3Rpb24pOiBJTW9kdWxlO1xyXG4gICAgICAgIGNvbnRyb2xsZXIobmFtZTogc3RyaW5nLCBjb250cm9sbGVyOiBGdW5jdGlvbik6IElNb2R1bGU7XHJcbiAgICAgICAgZGlyZWN0aXZlKG5hbWU6IHN0cmluZywgZGlyZWN0aXZlOiBhbnkpOiBJTW9kdWxlO1xyXG4gICAgICAgIGZpbHRlcihuYW1lOiBzdHJpbmcsIGZpbHRlcjogYW55KTogSU1vZHVsZTtcclxuICAgICAgICBzZXJ2aWNlKG5hbWU6IHN0cmluZywgc2VydmljZTogRnVuY3Rpb24pOiBJTW9kdWxlO1xyXG4gICAgICAgIHByb3ZpZGVyKG5hbWU6IHN0cmluZywgcHJvdmlkZXI6IGFueSk6IElNb2R1bGU7XHJcbiAgICAgICAgZmFjdG9yeShuYW1lOiBzdHJpbmcsIGZhY3Rvcnk6IEZ1bmN0aW9uKTogSU1vZHVsZTtcclxuICAgICAgICBjb25zdGFudChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBJTW9kdWxlO1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIE1vZHVsZSBpbXBsZW1lbnRzIElNb2R1bGUge1xyXG4gICAgICAgIHByaXZhdGUgbW9kdWxlOiBuZy5JTW9kdWxlO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIG1vZHVsZXM/OiBzdHJpbmdbXSwgY29uZmlnPzogRnVuY3Rpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5tb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShuYW1lLCBtb2R1bGVzLCBjb25maWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uZmlnKGFwcENvbmZpZzogRnVuY3Rpb24pOiBJTW9kdWxlIHtcclxuICAgICAgICAgICAgdGhpcy5tb2R1bGUuY29uZmlnKGFwcENvbmZpZyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcnVuKGFwcFJ1bjogRnVuY3Rpb24pOiBJTW9kdWxlIHtcclxuICAgICAgICAgICAgdGhpcy5tb2R1bGUucnVuKGFwcFJ1bik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udHJvbGxlcihuYW1lOiBzdHJpbmcsIGNvbnRyb2xsZXI6IEZ1bmN0aW9uKTogSU1vZHVsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kdWxlLmNvbnRyb2xsZXIobmFtZSwgY29udHJvbGxlciBhcyBhbnkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBvbmVudChuYW1lOiBzdHJpbmcsIG9wdGlvbnM6IGFuZ3VsYXIuSUNvbXBvbmVudE9wdGlvbnMpOiBJTW9kdWxlIHtcclxuICAgICAgICAgICAgdGhpcy5tb2R1bGUuY29tcG9uZW50KG5hbWUsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpcmVjdGl2ZShuYW1lOiBzdHJpbmcsIGRpcmVjdGl2ZSk6IElNb2R1bGUge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZS5kaXJlY3RpdmUobmFtZSwgRGlyZWN0aXZlRmFjdG9yeS5jcmVhdGUoZGlyZWN0aXZlKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmlsdGVyKG5hbWU6IHN0cmluZywgZmlsdGVyKTogSU1vZHVsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kdWxlLmZpbHRlcihuYW1lLCBGaWx0ZXJGYWN0b3J5LmNyZWF0ZShmaWx0ZXIpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXJ2aWNlKG5hbWU6IHN0cmluZywgc2VydmljZTogRnVuY3Rpb24pOiBJTW9kdWxlIHtcclxuICAgICAgICAgICAgdGhpcy5tb2R1bGUuc2VydmljZShuYW1lLCBzZXJ2aWNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm92aWRlcihuYW1lOiBzdHJpbmcsIHByb3ZpZGVyKTogSU1vZHVsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kdWxlLnByb3ZpZGVyKG5hbWUsIHByb3ZpZGVyKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmYWN0b3J5KG5hbWU6IHN0cmluZywgZmFjdG9yeTogRnVuY3Rpb24pOiBJTW9kdWxlIHtcclxuICAgICAgICAgICAgdGhpcy5tb2R1bGUuZmFjdG9yeShuYW1lLCBmYWN0b3J5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdGFudChuYW1lOiBzdHJpbmcsIHZhbHVlKTogSU1vZHVsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kdWxlLmNvbnN0YW50KG5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19