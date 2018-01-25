namespace Angular {
    export class FilterFactory {
        static create(type: IActivatorClass): any {
            var filter = (...inject: any[]) => {
                var instance = Activator.create(type, inject);
                return (...options: any[]) => {
                    return instance.filter.apply(instance, options);
                };
            };
            filter["$inject"] = type["$inject"];
            return filter;
        }
    }
}