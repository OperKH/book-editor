describe('constant pagesConstant', () => {
    beforeEach(angular.mock.module('bookEditor'));

    it('should be registered', inject(pagesService => {
        expect(pagesService).not.toEqual(null);
    }));

});