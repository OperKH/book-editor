describe('service pagesService', () => {
    beforeEach(angular.mock.module('bookEditor'));

    it('should be registered', inject(pagesService => {
        expect(pagesService).not.toEqual(null);
    }));

    describe('pagesService add', () => {
        const fnName = 'add';
        const pageName = 'jasminePage';
        const url = 'https://book-editor.firebaseio.com/pages/'+pageName+'.json';
        testServiceFn(fnName);

        it('should reject a promise on error', inject((pagesService, $httpBackend) => {
            $httpBackend.when('POST', url).respond(500);
            let status;
            pagesService[fnName](pageName, {})
                .then(() => {
                    status = 200;
                })
                .catch(resp => {
                    status = resp.status;
                });
            $httpBackend.flush();
            expect(status).toEqual(500);
        }));

    describe('pagesService remove', () => {
        const fnName = 'remove';
        const pageName = 'jasminePage';
        const url = 'https://book-editor.firebaseio.com/pages/'+pageName+'.json';
        testServiceFn(fnName);

        it('should reject a promise on error', inject((pagesService, $httpBackend) => {
            $httpBackend.when('DELETE', url).respond(500);
            let status;
            pagesService[fnName](pageName)
                .then(() => {
                    status = 200;
                })
                .catch(resp => {
                    status = resp.status;
                });
            $httpBackend.flush();
            expect(status).toEqual(500);
        }));
    });

    describe('pagesService update', () => {
        const fnName = 'update';
        const pageName = 'jasminePage';
        const url = 'https://book-editor.firebaseio.com/pages/'+pageName+'.json';
        testServiceFn(fnName);

        it('should reject a promise on error', inject((pagesService, $httpBackend) => {
            $httpBackend.when('POST', url).respond(500);
            let status;
            pagesService[fnName](pageName, {})
                .then(() => {
                    status = 200;
                })
                .catch(resp => {
                    status = resp.status;
                });
            $httpBackend.flush();
            expect(status).toEqual(500);
        }));
    });

    describe('pagesService get', () => {
        const fnName = 'get';
        const pageName = 'jasminePage';
        const url = 'https://book-editor.firebaseio.com/pages/'+pageName+'.json';
        testServiceFn(fnName);

        it('should return data', inject((pagesService, $httpBackend) => {
            $httpBackend.when('GET', url).respond(200, {
                title: 'testTitle',
                text: 'testText'
            });
            let data;
            pagesService[fnName](pageName)
                .then(resp => {
                    data = resp;
                });
            $httpBackend.flush();
            expect(data).toEqual(jasmine.any(Object));
            expect(data.text).not.toEqual(undefined);
            expect(data.text).toEqual('testText');
        }));

        it('should reject a promise on error', inject((pagesService, $httpBackend) => {
            $httpBackend.when('GET', url).respond(500);
            let status;
            pagesService[fnName](pageName)
                .then(() => {
                    status = 200;
                })
                .catch(resp => {
                    status = resp.status;
                });
            $httpBackend.flush();
            expect(status).toEqual(500);
        }));
    });

    describe('pagesService list', () => {
        const fnName = 'list';
        const url = 'https://book-editor.firebaseio.com/pages.json';
        testServiceFn(fnName);

        it('should return data', inject((pagesService, $httpBackend) => {
            $httpBackend.when('GET', url).respond(200, {
                superKey: null,
                test: 8080,
                Javascript: 'cool',
                magic: 'exists'
            });
            let data;
            pagesService[fnName]()
                .then(resp => {
                    data = resp;
                });
            $httpBackend.flush();
            expect(data).toEqual(jasmine.any(Array));
            expect(data.length === 4).toBeTruthy();
            expect(data[3]).toEqual('magic');
        }));

        it('should reject a promise on error', inject((pagesService, $httpBackend) => {
            $httpBackend.when('GET', url).respond(500);
            let status;
            pagesService[fnName]()
                .then(() => {
                    status = 200;
                })
                .catch(resp => {
                    status = resp.status;
                });
            $httpBackend.flush();
            expect(status).toEqual(500);
        }));

    });

});


});


function testServiceFn(fnName) {
    it('should exist', inject(pagesService => {
        expect(pagesService[fnName]).not.toEqual(undefined);
    }));

    it('should be function', inject(pagesService => {
        expect(pagesService[fnName]).toEqual(jasmine.any(Function));
    }));

    it('should return a promise', inject(pagesService => {
        expect(pagesService[fnName]().then).toEqual(jasmine.any(Function));
    }));
}