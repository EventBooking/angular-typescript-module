namespace Angular {

    export function module(name: string, modules?: string[], config?: Function): IModule {
        var mod = new Module(name, modules, config);
        return mod;
    }

    export interface IModule {
        config(appConfig: Function): IModule;
        run(appRun: Function): IModule;
        controller(name: string, controller: Function): IModule;
        directive(name: string, directive: any): IModule;
        filter(name: string, filter: any): IModule;
        service(name: string, service: Function): IModule;
        provider(name: string, provider: any): IModule;
        factory(name: string, factory: Function): IModule;
        constant(name: string, value: any): IModule;
    }

    class Module implements IModule {
        private module: ng.IModule;

        constructor(name: string, modules?: string[], config?: Function) {
            this.module = angular.module(name, modules, config);
        }

        config(appConfig: Function): IModule {
            this.module.config(appConfig);
            return this;
        }

        run(appRun: Function): IModule {
            this.module.run(appRun);
            return this;
        }

        controller(name: string, controller: Function): IModule {
            this.module.controller(name, controller as any);
            return this;
        }

        component(name: string, options: angular.IComponentOptions): IModule {
            this.module.component(name, options);
            return this;
        }

        directive(name: string, directive): IModule {
            this.module.directive(name, DirectiveFactory.create(directive));
            return this;
        }

        filter(name: string, filter): IModule {
            this.module.filter(name, FilterFactory.create(filter));
            return this;
        }

        service(name: string, service: Function): IModule {
            this.module.service(name, service);
            return this;
        }

        provider(name: string, provider): IModule {
            this.module.provider(name, provider);
            return this;
        }

        factory(name: string, factory: Function): IModule {
            this.module.factory(name, factory);
            return this;
        }

        constant(name: string, value): IModule {
            this.module.constant(name, value);
            return this;
        }
    }
}