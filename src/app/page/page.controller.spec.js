describe('Page Controller', () => {
    let vm;

    beforeEach(angular.mock.module('bookEditor'));

    beforeEach(inject(($controller) => {
        vm = $controller('MainController');
    }));

    it('should be registered', () => {
        expect(vm).not.toEqual(null);
    });
});