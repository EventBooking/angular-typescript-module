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
                    inject[_i - 0] = arguments[_i];
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
                    inject[_i - 0] = arguments[_i];
                }
                var instance = Angular.Activator.create(type, inject);
                return function () {
                    var options = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        options[_i - 0] = arguments[_i];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci10eXBlc2NyaXB0LW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hY3RpdmF0b3IudHMiLCIuLi9zcmMvZGlyZWN0aXZlLWZhY3RvcnkudHMiLCIuLi9zcmMvZmlsdGVyLWZhY3RvcnkudHMiLCIuLi9zcmMvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQU8sT0FBTyxDQVliO0FBWkQsV0FBTyxPQUFPLEVBQUMsQ0FBQztJQUtaO1FBQUE7UUFNQSxDQUFDO1FBTFUsZ0JBQU0sR0FBYixVQUFjLElBQXFCLEVBQUUsTUFBYTtZQUM5QyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM3QyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDN0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNwQixDQUFDO1FBQ0wsZ0JBQUM7SUFBRCxDQUFDLEFBTkQsSUFNQztJQU5ZLGlCQUFTLFlBTXJCLENBQUE7QUFDTCxDQUFDLEVBWk0sT0FBTyxLQUFQLE9BQU8sUUFZYjtBQ1pELElBQU8sT0FBTyxDQVViO0FBVkQsV0FBTyxPQUFPLEVBQUMsQ0FBQztJQUNaO1FBQUE7UUFRQSxDQUFDO1FBUFUsdUJBQU0sR0FBYixVQUFjLElBQXFCO1lBQy9CLElBQUksU0FBUyxHQUFHO2dCQUFDLGdCQUFnQjtxQkFBaEIsV0FBZ0IsQ0FBaEIsc0JBQWdCLENBQWhCLElBQWdCO29CQUFoQiwrQkFBZ0I7O2dCQUM3QixNQUFNLENBQUMsaUJBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQztZQUNGLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkMsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNyQixD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TSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQseUJBQVEsR0FBUixVQUFTLElBQVksRUFBRSxRQUFRO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCx3QkFBTyxHQUFQLFVBQVEsSUFBWSxFQUFFLE9BQWlCO1lBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCx5QkFBUSxHQUFSLFVBQVMsSUFBWSxFQUFFLEtBQUs7WUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNMLGFBQUM7SUFBRCxDQUFDLEFBbkRELElBbURDO0FBQ0wsQ0FBQyxFQXZFTSxPQUFPLEtBQVAsT0FBTyxRQXVFYiIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZSBBbmd1bGFyIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUFjdGl2YXRvckNsYXNzIHtcclxuICAgICAgICBuZXcgKC4uLnBhcmFtczogYW55W10pO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBBY3RpdmF0b3Ige1xyXG4gICAgICAgIHN0YXRpYyBjcmVhdGUodHlwZTogSUFjdGl2YXRvckNsYXNzLCBwYXJhbXM6IGFueVtdKSB7XHJcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IE9iamVjdC5jcmVhdGUodHlwZS5wcm90b3R5cGUpO1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5jb25zdHJ1Y3Rvci5hcHBseShpbnN0YW5jZSwgcGFyYW1zKTtcclxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm1vZHVsZSBBbmd1bGFyIHtcclxuICAgIGV4cG9ydCBjbGFzcyBEaXJlY3RpdmVGYWN0b3J5IHtcclxuICAgICAgICBzdGF0aWMgY3JlYXRlKHR5cGU6IElBY3RpdmF0b3JDbGFzcyk6IGFueSB7XHJcbiAgICAgICAgICAgIHZhciBkaXJlY3RpdmUgPSAoLi4uaW5qZWN0OiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEFjdGl2YXRvci5jcmVhdGUodHlwZSwgaW5qZWN0KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZGlyZWN0aXZlW1wiJGluamVjdFwiXSA9IHR5cGVbXCIkaW5qZWN0XCJdO1xyXG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm1vZHVsZSBBbmd1bGFyIHtcclxuICAgIGV4cG9ydCBjbGFzcyBGaWx0ZXJGYWN0b3J5IHtcclxuICAgICAgICBzdGF0aWMgY3JlYXRlKHR5cGU6IElBY3RpdmF0b3JDbGFzcyk6IGFueSB7XHJcbiAgICAgICAgICAgIHZhciBmaWx0ZXIgPSAoLi4uaW5qZWN0OiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gQWN0aXZhdG9yLmNyZWF0ZSh0eXBlLCBpbmplY3QpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICguLi5vcHRpb25zOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5maWx0ZXIuYXBwbHkoaW5zdGFuY2UsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZmlsdGVyW1wiJGluamVjdFwiXSA9IHR5cGVbXCIkaW5qZWN0XCJdO1xyXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm1vZHVsZSBBbmd1bGFyIHtcclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gbW9kdWxlKG5hbWU6IHN0cmluZywgbW9kdWxlcz86IHN0cmluZ1tdLCBjb25maWc/OiBGdW5jdGlvbik6IElNb2R1bGUge1xyXG4gICAgICAgIHZhciBtb2QgPSBuZXcgTW9kdWxlKG5hbWUsIG1vZHVsZXMsIGNvbmZpZyk7XHJcbiAgICAgICAgcmV0dXJuIG1vZDtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElNb2R1bGUge1xyXG4gICAgICAgIGNvbmZpZyhhcHBDb25maWc6IEZ1bmN0aW9uKTogSU1vZHVsZTtcclxuICAgICAgICBydW4oYXBwUnVuOiBGdW5jdGlvbik6IElNb2R1bGU7XHJcbiAgICAgICAgY29udHJvbGxlcihuYW1lOiBzdHJpbmcsIGNvbnRyb2xsZXI6IEZ1bmN0aW9uKTogSU1vZHVsZTtcclxuICAgICAgICBkaXJlY3RpdmUobmFtZTogc3RyaW5nLCBkaXJlY3RpdmU6IGFueSk6IElNb2R1bGU7XHJcbiAgICAgICAgZmlsdGVyKG5hbWU6IHN0cmluZywgZmlsdGVyOiBhbnkpOiBJTW9kdWxlO1xyXG4gICAgICAgIHNlcnZpY2UobmFtZTogc3RyaW5nLCBzZXJ2aWNlOiBGdW5jdGlvbik6IElNb2R1bGU7XHJcbiAgICAgICAgcHJvdmlkZXIobmFtZTogc3RyaW5nLCBwcm92aWRlcjogYW55KTogSU1vZHVsZTtcclxuICAgICAgICBmYWN0b3J5KG5hbWU6IHN0cmluZywgZmFjdG9yeTogRnVuY3Rpb24pOiBJTW9kdWxlO1xyXG4gICAgICAgIGNvbnN0YW50KG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IElNb2R1bGU7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgTW9kdWxlIGltcGxlbWVudHMgSU1vZHVsZSB7XHJcbiAgICAgICAgcHJpdmF0ZSBtb2R1bGU6IG5nLklNb2R1bGU7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbW9kdWxlcz86IHN0cmluZ1tdLCBjb25maWc/OiBGdW5jdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKG5hbWUsIG1vZHVsZXMsIGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25maWcoYXBwQ29uZmlnOiBGdW5jdGlvbik6IElNb2R1bGUge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZS5jb25maWcoYXBwQ29uZmlnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBydW4oYXBwUnVuOiBGdW5jdGlvbik6IElNb2R1bGUge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZS5ydW4oYXBwUnVuKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250cm9sbGVyKG5hbWU6IHN0cmluZywgY29udHJvbGxlcjogRnVuY3Rpb24pOiBJTW9kdWxlIHtcclxuICAgICAgICAgICAgdGhpcy5tb2R1bGUuY29udHJvbGxlcihuYW1lLCBjb250cm9sbGVyKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXJlY3RpdmUobmFtZTogc3RyaW5nLCBkaXJlY3RpdmUpOiBJTW9kdWxlIHtcclxuICAgICAgICAgICAgdGhpcy5tb2R1bGUuZGlyZWN0aXZlKG5hbWUsIERpcmVjdGl2ZUZhY3RvcnkuY3JlYXRlKGRpcmVjdGl2ZSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZpbHRlcihuYW1lOiBzdHJpbmcsIGZpbHRlcik6IElNb2R1bGUge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZS5maWx0ZXIobmFtZSwgRmlsdGVyRmFjdG9yeS5jcmVhdGUoZmlsdGVyKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VydmljZShuYW1lOiBzdHJpbmcsIHNlcnZpY2U6IEZ1bmN0aW9uKTogSU1vZHVsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kdWxlLnNlcnZpY2UobmFtZSwgc2VydmljZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdmlkZXIobmFtZTogc3RyaW5nLCBwcm92aWRlcik6IElNb2R1bGUge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZS5wcm92aWRlcihuYW1lLCBwcm92aWRlcik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmFjdG9yeShuYW1lOiBzdHJpbmcsIGZhY3Rvcnk6IEZ1bmN0aW9uKTogSU1vZHVsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kdWxlLmZhY3RvcnkobmFtZSwgZmFjdG9yeSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3RhbnQobmFtZTogc3RyaW5nLCB2YWx1ZSk6IElNb2R1bGUge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZS5jb25zdGFudChuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==