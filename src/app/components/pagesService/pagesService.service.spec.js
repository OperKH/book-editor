describe('service pagesService', () => {
    beforeEach(angular.mock.module('bookEditor'));

    it('should be registered', inject(pagesService => {
        expect(pagesService).not.toEqual(null);
    }));

    describe('pagesService add', () => {
        let fnName = 'add';
        testServiceFn(fnName);
    });

    describe('pagesService remove', () => {
        let fnName = 'remove';
        testServiceFn(fnName);
    });

    describe('pagesService update', () => {
        let fnName = 'update';
        testServiceFn(fnName);
    });

    describe('pagesService get', () => {
        let fnName = 'get';
        testServiceFn(fnName);
    });

    describe('pagesService list', () => {
        let fnName = 'list';
        testServiceFn(fnName);
    });


});


function testServiceFn(fnName) {
    it('should exist', inject(pagesService => {
        expect(pagesService[fnName]).not.toEqual(undefined);
    }));

    it('should be function', inject(pagesService => {
        expect(typeof(pagesService[fnName])).toEqual("function");
    }));

    it('should return object', inject(pagesService => {
        expect(typeof(pagesService[fnName]())).toEqual("object");
    }));
    it('should return object with promise', inject(pagesService => {
        expect(pagesService[fnName]().hasOwnProperty('$$state')).toBeTruthy();
    }));

}