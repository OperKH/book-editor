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

        it('should return data', inject((pagesService, Storage, $timeout) => {
            spyOn(Storage, 'getItem').and.callFake(() => {

                const obj = {
                    superKey: null,
                    test: 8080,
                    Javascript: 'cool',
                    magic: 'exists'
                };

                return angular.toJson(obj);

            });

            let result;
            pagesService.list().then(data => {
                result = data;
            });
            $timeout.flush();
            expect(result).toEqual(jasmine.any(Array));
            expect(result.length === 4).toBeTruthy();
            expect(result[3]).toEqual('magic');


        }));
    });


});


function testServiceFn(fnName) {
    it('should exist', inject(pagesService => {
        expect(pagesService[fnName]).not.toEqual(undefined);
    }));

    it('should be function', inject(pagesService => {
        expect(pagesService[fnName]).toEqual(jasmine.any(Function));
    }));

    it('should return object', inject(pagesService => {
        expect(pagesService[fnName]()).toEqual(jasmine.any(Object));
    }));
    it('should return object with promise', inject(pagesService => {
        expect(pagesService[fnName]().then).toEqual(jasmine.any(Function));
    }));

}