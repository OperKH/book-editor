export class pagesService {
    constructor ($resource, $log) {
        'ngInject';

        this.$log = $log;

        this.pagesResource = () => $resource('https://book-editor.firebaseio.com/pages/:pageName.json', {}, {
            get: {
                method: 'GET',
                transformResponse: data => ({data: angular.fromJson(data)})
            },
            save: {
                method: 'POST',
                transformResponse: data => ({data: angular.fromJson(data)})
            },
            remove: {
                method: 'DELETE',
                transformResponse: data => ({data: angular.fromJson(data)})
            }
        });
    }

    add(pageName, obj) {
        this.$log.log('Call pagesService add');

        //Not tested;
        const promise = this.pagesResource().save({pageName}, obj).$promise.then(resp => resp.data);
        return promise;
    }

    remove(pageName) {
        this.$log.log('Call pagesService remove');

        //Not tested;
        const promise = this.pagesResource().remove({pageName}).$promise.then(resp => resp.data);
        return promise;
    }

    update(pageName, obj) {
        this.$log.log('Call pagesService update');

        //Not tested;
        const promise = this.pagesResource().save({pageName}, obj).$promise.then(resp => resp.data);
        return promise;
    }

    get(pageName) {
        this.$log.log('Call pagesService get');

        const promise = this.pagesResource().get({pageName}).$promise.then(resp => resp.data);
        return promise;
    }

    list() {
        this.$log.log('Call pagesService list');

        const promise = this.pagesResource().get().$promise.then(resp => Object.keys(resp.data));
        return promise;
    }

}
