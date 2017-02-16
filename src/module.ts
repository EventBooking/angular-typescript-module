import { DirectiveFactory } from "./directive-factory";
import { FilterFactory } from "./filter-factory";

function module(name: string, modules?: string[], config?: Function): IModule {
    var mod = new Module(name, modules, config);
    return mod;
}

export interface IModule {
    config(appConfig: Function): IModule;
    run(appRun: Function): IModule;
    controller(name: string, controller: Function): string;
    directive(name: string, directive: any): string;
    filter(name: string, filter: any): string;
    service(name: string, service: Function): string;
    provider(name: string, provider: any): string;
    factory(name: string, factory: Function): string;
    constant(name: string, value: any): string;
    name: string;
}

class Module implements IModule {
    private module: ng.IModule;

    constructor(name: string, modules?: string[], config?: Function) {
        this.module = angular.module(name, modules, config);
    }

    get name(): string {
        return this.module.name;
    }

    config(appConfig: Function): IModule {
        this.module.config(appConfig);
        return this;
    }

    run(appRun: Function): IModule {
        this.module.run(appRun);
        return this;
    }

    controller(name: string, controller: Function | any): string {
        this.module.controller(name, controller);
        return name;
    }

    directive(name: string, directive): string {
        this.module.directive(name, DirectiveFactory.create(directive));
        return name;
    }

    filter(name: string, filter): string {
        this.module.filter(name, FilterFactory.create(filter));
        return name;
    }

    service(name: string, service: Function): string {
        this.module.service(name, service);
        return name;
    }

    provider(name: string, provider): string {
        this.module.provider(name, provider);
        return name;
    }

    factory(name: string, factory: Function): string {
        this.module.factory(name, factory);
        return name;
    }

    constant(name: string, value): string {
        this.module.constant(name, value);
        return name;
    }
}

export default {
    module: module
}