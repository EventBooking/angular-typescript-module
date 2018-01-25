declare namespace Angular {
    interface IActivatorClass {
        new (...params: any[]): any;
    }
    class Activator {
        static create(type: IActivatorClass, params: any[]): any;
    }
}
declare namespace Angular {
    class DirectiveFactory {
        static create(type: IActivatorClass): any;
    }
}
declare namespace Angular {
    class FilterFactory {
        static create(type: IActivatorClass): any;
    }
}
declare namespace Angular {
    function module(name: string, modules?: string[], config?: Function): IModule;
    interface IModule {
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
}
