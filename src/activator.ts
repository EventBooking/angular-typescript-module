module Angular {
    export interface IActivatorClass {
        new (...params: any[]);
    }

    export class Activator {
        static create(type: IActivatorClass, params: any[]) {
            var instance = Object.create(type.prototype);
            instance.constructor.apply(instance, params);
            return instance;
        }
    }
}