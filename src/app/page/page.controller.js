export class PageController {
    constructor ($stateParams, $state, pagesService) {
        'ngInject';
        const scope = this;

        scope.pageName = $stateParams.pageName;
        scope.$state = $state;

        pagesService
            .get(scope.pageName)
            .then(page => scope.page = page);

    }
}
