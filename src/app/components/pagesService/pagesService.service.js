export class pagesService {
    constructor ($q, $timeout, $log) {
        'ngInject';

        this.$log = $log;

        this.createDefered = (resolveData, errorMessage) => {
            let deferred = $q.defer();
            $timeout(() => {
                if (resolveData) {
                    deferred.resolve(resolveData);
                } else {
                    deferred.reject(errorMessage);
                }
            }, 1000);
            return deferred;
        };

    }

    add(pageName, obj) {
        this.$log.log('Call pagesService add');

        let pages = getPages();
        pages[pageName] = obj;
        savePages(pages);

        let errorMessage = `Could not add page: ${pageName}`;
        let deferred = this.createDefered(obj, errorMessage);
        return deferred.promise;
    }

    remove(pageName) {
        this.$log.log('Call pagesService remove');

        let pages = getPages();
        delete pages[pageName];
        savePages(pages);

        let resolveData = `Successfully removed page: ${pageName}`;
        let errorMessage = `Could not remove page: ${pageName}`;
        let deferred = this.createDefered(resolveData, errorMessage);
        return deferred.promise;
    }

    update(pageName, obj) {
        this.$log.log('Call pagesService update');

        let pages = getPages();
        pages[pageName] = obj;
        savePages(pages);

        let errorMessage = `Could not save page: ${pageName}`;
        let deferred = this.createDefered(obj, errorMessage);
        return deferred.promise;
    }

    get(pageName) {
        this.$log.log('Call pagesService get');

        let pages = getPages();
        let page = pages[pageName];

        let errorMessage = `No pages with name: ${pageName}`;
        let deferred = this.createDefered(page, errorMessage);
        return deferred.promise;
    }

    list() {
        this.$log.log('Call pagesService list');

        let pages = getPages();
        let pagesList = Object.keys(pages);

        let errorMessage = `No pagesList`;
        let deferred = this.createDefered(pagesList, errorMessage);
        return deferred.promise;
    }

}

function getPages() {
    var pages = angular.fromJson(localStorage.getItem('pages'));
    return pages;
}
function savePages(pages) {
    localStorage.setItem('pages', angular.toJson(pages));
}
