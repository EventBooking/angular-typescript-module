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
    name: string;
}
declare var _default: {
    module: (name: string, modules?: string[], config?: Function) => IModule;
};
export default _default;
