export class pagesService {
    constructor ($q, $timeout, $log, Storage) {
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

        this.getPages = () => {
            var pages = angular.fromJson(Storage.getItem('pages'));
            return pages;
        };

        this.savePages = pages => {
            Storage.setItem('pages', angular.toJson(pages));
        };


    }

    add(pageName, obj) {
        this.$log.log('Call pagesService add');

        const pages = this.getPages();
        pages[pageName] = obj;
        this.savePages(pages);

        const errorMessage = `Could not add page: ${pageName}`;
        const deferred = this.createDefered(obj, errorMessage);
        return deferred.promise;
    }

    remove(pageName) {
        this.$log.log('Call pagesService remove');

        const pages = this.getPages();
        delete pages[pageName];
        this.savePages(pages);

        const resolveData = `Successfully removed page: ${pageName}`;
        const errorMessage = `Could not remove page: ${pageName}`;
        const deferred = this.createDefered(resolveData, errorMessage);
        return deferred.promise;
    }

    update(pageName, obj) {
        this.$log.log('Call pagesService update');

        const pages = this.getPages();
        pages[pageName] = obj;
        this.savePages(pages);

        const errorMessage = `Could not save page: ${pageName}`;
        const deferred = this.createDefered(obj, errorMessage);
        return deferred.promise;
    }

    get(pageName) {
        this.$log.log('Call pagesService get');

        const pages = this.getPages();
        const page = pages[pageName];

        const errorMessage = `No pages with name: ${pageName}`;
        const deferred = this.createDefered(page, errorMessage);
        return deferred.promise;
    }

    list() {
        this.$log.log('Call pagesService list');

        const pages = this.getPages();
        const pagesList = Object.keys(pages);

        const errorMessage = `No pagesList`;
        const deferred = this.createDefered(pagesList, errorMessage);
        return deferred.promise;
    }

}

