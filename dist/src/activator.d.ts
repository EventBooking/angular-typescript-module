export interface IActivatorClass {
    new (...params: any[]): any;
}
export declare class Activator {
    static create(type: IActivatorClass, params: any[]): any;
}
