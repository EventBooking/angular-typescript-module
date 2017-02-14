import { IActivatorClass, Activator } from "./activator";

export class DirectiveFactory {
    static create(type: IActivatorClass): any {
        var directive = (...inject: any[]) => {
            return Activator.create(type, inject);
        };
        directive["$inject"] = type["$inject"];
        return directive;
    }
}