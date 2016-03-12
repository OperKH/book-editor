export class MainController {
    constructor (pagesService, $log) {
        'ngInject';

        pagesService.list().then((data) => {
            this.pagesList = data;
        }).catch((error) => {
            $log.log(error);
        });
    }
}
