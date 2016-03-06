export class PageController {
    constructor ($stateParams, pagesService) {
        'ngInject';

        this.pageName = $stateParams.pageName;

        pagesService.get(this.pageName).then(page => this.page = page);
    }
}
