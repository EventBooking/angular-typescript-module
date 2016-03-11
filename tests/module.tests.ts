module Tests {
    export class TestClass {
        constructor(public one, public two) { }
    }
}

describe('Angular module', function() {

    var $filter;
    beforeEach(angular.mock.module('test'));
    beforeEach(inject(function(_$filter_) {
        $filter = _$filter_;
    }));

    describe('Activator', function() {

        it('creates an instance of a class', function() {
            chai.expect(Object.create).to.be.a('function');

            var instance = Angular.Activator.create(Tests.TestClass, ['one', 'two']);
            chai.assert.isDefined(instance);
            chai.assert.isObject(instance);
            chai.assert.equal(instance.one, 'one');
            chai.assert.equal(instance.two, 'two');
        });

    });

});