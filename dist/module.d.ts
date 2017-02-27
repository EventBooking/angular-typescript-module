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
declare var Angular: {
    module: (name: string, modules?: string[], config?: Function) => IModule;
};
export default Angular;
