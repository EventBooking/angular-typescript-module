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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci10eXBlc2NyaXB0LW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hY3RpdmF0b3IudHMiLCIuLi9zcmMvZGlyZWN0aXZlLWZhY3RvcnkudHMiLCIuLi9zcmMvZmlsdGVyLWZhY3RvcnkudHMiLCIuLi9zcmMvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQU8sT0FBTyxDQVliO0FBWkQsV0FBTyxPQUFPO0lBS1Y7UUFBQTtRQU1BLENBQUM7UUFMVSxnQkFBTSxHQUFiLFVBQWMsSUFBcUIsRUFBRSxNQUFhO1lBQzlDLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzdDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM3QyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3BCLENBQUM7UUFDTCxnQkFBQztJQUFELENBQUMsQUFORCxJQU1DO0lBTlksaUJBQVMsWUFNckIsQ0FBQTtBQUNMLENBQUMsRUFaTSxPQUFPLEtBQVAsT0FBTyxRQVliO0FDWkQsSUFBTyxPQUFPLENBVWI7QUFWRCxXQUFPLE9BQU87SUFDVjtRQUFBO1FBUUEsQ0FBQztRQVBVLHVCQUFNLEdBQWIsVUFBYyxJQUFxQjtZQUMvQixJQUFJLFNBQVMsR0FBRztnQkFBQyxnQkFBZ0I7cUJBQWhCLFVBQWdCLEVBQWhCLHFCQUFnQixFQUFoQixJQUFnQjtvQkFBaEIsMkJBQWdCOztnQkFDN0IsTUFBTSxDQUFDLFFBQUEsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDO1lBQ0YsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JCLENBQUM7UUFDTCx1QkFBQztJ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RUFBRSxPQUFPLENBQUMsQ0FBQztZQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCx5QkFBUSxHQUFSLFVBQVMsSUFBWSxFQUFFLFFBQVE7WUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELHdCQUFPLEdBQVAsVUFBUSxJQUFZLEVBQUUsT0FBaUI7WUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELHlCQUFRLEdBQVIsVUFBUyxJQUFZLEVBQUUsS0FBSztZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0wsYUFBQztJQUFELENBQUMsQUFuREQsSUFtREM7QUFDTCxDQUFDLEVBdkVNLE9BQU8sS0FBUCxPQUFPLFFBdUViIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlIEFuZ3VsYXIge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJQWN0aXZhdG9yQ2xhc3Mge1xyXG4gICAgICAgIG5ldyAoLi4ucGFyYW1zOiBhbnlbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEFjdGl2YXRvciB7XHJcbiAgICAgICAgc3RhdGljIGNyZWF0ZSh0eXBlOiBJQWN0aXZhdG9yQ2xhc3MsIHBhcmFtczogYW55W10pIHtcclxuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gT2JqZWN0LmNyZWF0ZSh0eXBlLnByb3RvdHlwZSk7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLmNvbnN0cnVjdG9yLmFwcGx5KGluc3RhbmNlLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibW9kdWxlIEFuZ3VsYXIge1xyXG4gICAgZXhwb3J0IGNsYXNzIERpcmVjdGl2ZUZhY3Rvcnkge1xyXG4gICAgICAgIHN0YXRpYyBjcmVhdGUodHlwZTogSUFjdGl2YXRvckNsYXNzKTogYW55IHtcclxuICAgICAgICAgICAgdmFyIGRpcmVjdGl2ZSA9ICguLi5pbmplY3Q6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQWN0aXZhdG9yLmNyZWF0ZSh0eXBlLCBpbmplY3QpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkaXJlY3RpdmVbXCIkaW5qZWN0XCJdID0gdHlwZVtcIiRpbmplY3RcIl07XHJcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibW9kdWxlIEFuZ3VsYXIge1xyXG4gICAgZXhwb3J0IGNsYXNzIEZpbHRlckZhY3Rvcnkge1xyXG4gICAgICAgIHN0YXRpYyBjcmVhdGUodHlwZTogSUFjdGl2YXRvckNsYXNzKTogYW55IHtcclxuICAgICAgICAgICAgdmFyIGZpbHRlciA9ICguLi5pbmplY3Q6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBBY3RpdmF0b3IuY3JlYXRlKHR5cGUsIGluamVjdCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKC4uLm9wdGlvbnM6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLmZpbHRlci5hcHBseShpbnN0YW5jZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmaWx0ZXJbXCIkaW5qZWN0XCJdID0gdHlwZVtcIiRpbmplY3RcIl07XHJcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibW9kdWxlIEFuZ3VsYXIge1xyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBtb2R1bGUobmFtZTogc3RyaW5nLCBtb2R1bGVzPzogc3RyaW5nW10sIGNvbmZpZz86IEZ1bmN0aW9uKTogSU1vZHVsZSB7XHJcbiAgICAgICAgdmFyIG1vZCA9IG5ldyBNb2R1bGUobmFtZSwgbW9kdWxlcywgY29uZmlnKTtcclxuICAgICAgICByZXR1cm4gbW9kO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSU1vZHVsZSB7XHJcbiAgICAgICAgY29uZmlnKGFwcENvbmZpZzogRnVuY3Rpb24pOiBJTW9kdWxlO1xyXG4gICAgICAgIHJ1bihhcHBSdW46IEZ1bmN0aW9uKTogSU1vZHVsZTtcclxuICAgICAgICBjb250cm9sbGVyKG5hbWU6IHN0cmluZywgY29udHJvbGxlcjogRnVuY3Rpb24pOiBJTW9kdWxlO1xyXG4gICAgICAgIGRpcmVjdGl2ZShuYW1lOiBzdHJpbmcsIGRpcmVjdGl2ZTogYW55KTogSU1vZHVsZTtcclxuICAgICAgICBmaWx0ZXIobmFtZTogc3RyaW5nLCBmaWx0ZXI6IGFueSk6IElNb2R1bGU7XHJcbiAgICAgICAgc2VydmljZShuYW1lOiBzdHJpbmcsIHNlcnZpY2U6IEZ1bmN0aW9uKTogSU1vZHVsZTtcclxuICAgICAgICBwcm92aWRlcihuYW1lOiBzdHJpbmcsIHByb3ZpZGVyOiBhbnkpOiBJTW9kdWxlO1xyXG4gICAgICAgIGZhY3RvcnkobmFtZTogc3RyaW5nLCBmYWN0b3J5OiBGdW5jdGlvbik6IElNb2R1bGU7XHJcbiAgICAgICAgY29uc3RhbnQobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogSU1vZHVsZTtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBNb2R1bGUgaW1wbGVtZW50cyBJTW9kdWxlIHtcclxuICAgICAgICBwcml2YXRlIG1vZHVsZTogbmcuSU1vZHVsZTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBtb2R1bGVzPzogc3RyaW5nW10sIGNvbmZpZz86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kdWxlID0gYW5ndWxhci5tb2R1bGUobmFtZSwgbW9kdWxlcywgY29uZmlnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbmZpZyhhcHBDb25maWc6IEZ1bmN0aW9uKTogSU1vZHVsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kdWxlLmNvbmZpZyhhcHBDb25maWcpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJ1bihhcHBSdW46IEZ1bmN0aW9uKTogSU1vZHVsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kdWxlLnJ1bihhcHBSdW4pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRyb2xsZXIobmFtZTogc3RyaW5nLCBjb250cm9sbGVyOiBGdW5jdGlvbik6IElNb2R1bGUge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZS5jb250cm9sbGVyKG5hbWUsIGNvbnRyb2xsZXIgYXMgYW55KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXJlY3RpdmUobmFtZTogc3RyaW5nLCBkaXJlY3RpdmUpOiBJTW9kdWxlIHtcclxuICAgICAgICAgICAgdGhpcy5tb2R1bGUuZGlyZWN0aXZlKG5hbWUsIERpcmVjdGl2ZUZhY3RvcnkuY3JlYXRlKGRpcmVjdGl2ZSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZpbHRlcihuYW1lOiBzdHJpbmcsIGZpbHRlcik6IElNb2R1bGUge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZS5maWx0ZXIobmFtZSwgRmlsdGVyRmFjdG9yeS5jcmVhdGUoZmlsdGVyKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VydmljZShuYW1lOiBzdHJpbmcsIHNlcnZpY2U6IEZ1bmN0aW9uKTogSU1vZHVsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kdWxlLnNlcnZpY2UobmFtZSwgc2VydmljZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdmlkZXIobmFtZTogc3RyaW5nLCBwcm92aWRlcik6IElNb2R1bGUge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZS5wcm92aWRlcihuYW1lLCBwcm92aWRlcik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmFjdG9yeShuYW1lOiBzdHJpbmcsIGZhY3Rvcnk6IEZ1bmN0aW9uKTogSU1vZHVsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kdWxlLmZhY3RvcnkobmFtZSwgZmFjdG9yeSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3RhbnQobmFtZTogc3RyaW5nLCB2YWx1ZSk6IElNb2R1bGUge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZS5jb25zdGFudChuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==