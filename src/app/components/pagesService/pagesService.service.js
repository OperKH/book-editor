export class pagesService {
    constructor ($resource, $log, $q) {
        'ngInject';

        this.$log = $log;
        this.$q = $q;
        this.pagesStructureKey = 'pagesStructure';
        this.updateStructure = (pageName, obj, parentPageName) => {
            if (parentPageName) {
                return this.list().then(pagesStructure => {
                    let queue = [{
                        parentPage: pagesStructure,
                        parentPath: this.pagesStructureKey
                    }];

                    while (queue.length) {
                        let index = 0;
                        const currentQueueElement = queue.shift();
                        const { parentPage, parentPath } = currentQueueElement;
                        const currentPagesList = parentPage.children;
                        for (var currentPageName in currentPagesList) {
                            if (currentPageName === parentPageName) {
                                const newChildren = {
                                    [pageName]: {
                                        empty: true
                                    }
                                };
                                const config = {
                                    pages: `${parentPath}/children/${currentPageName}/children`
                                };
                                return {newChildren, config};
                            } else {
                                if (currentPagesList[currentPageName].children) {
                                    const newQeueu = {
                                        parentPage: currentPagesList[currentPageName],
                                        parentPath: `${parentPath}/children/${currentPageName}`
                                    };
                                    queue.push(newQeueu);
                                }
                            }
                        }
                        index++;
                    }
                    return $q.reject('parentPageName not found');
                }).then(data => {
                    const { newChildren, config } = data;
                    return this.pagesResource().update(config, newChildren).$promise.then(resp => resp.data);
                });
            } else {
                $q.reject('parentPageName not recieved');
            }
        };

        this.pagesResource = () => $resource('https://book-editor.firebaseio.com/:pages/:pageName.json', {}, {
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
            },
            update: {
                method: 'PATCH',
                transformResponse: data => ({data: angular.fromJson(data)})
            },
            add: {
                method: 'PUT',
                transformResponse: data => ({data: angular.fromJson(data)})
            }
        });
    }

    add(pageName, obj, parentPageName) {
        const {$log, pagesResource, pagesStructureKey, updateStructure, $q} = this;
        $log.log('Call pagesService add');

        const promisesArr = [];

        const promise1 = updateStructure(pageName, obj, parentPageName);
        promisesArr.push(promise1);

        const config = {
            pages: 'pages',
            pageName
        };

        const promise2 = pagesResource().add(config, obj).$promise.then(resp => resp.data);
        promisesArr.push(promise2);
        return $q.all(promisesArr);

    }

    remove(pageName) {
        const {$log, pagesResource} = this;
        $log.log('Call pagesService remove');

        const config = {
            pages: 'pages',
            pageName
        };

        //Not tested;
        const promise = pagesResource().remove(config).$promise.then(resp => resp.data);
        return promise;
    }

    update(pageName, obj) {
        const {$log, pagesResource} = this;
        $log.log('Call pagesService update');

        const config = {
            pages: 'pages',
            pageName
        };

        const promise = pagesResource().update(config, obj).$promise.then(resp => resp.data);
        return promise;
    }

    get(pageName) {
        const {$log, pagesResource} = this;
        $log.log('Call pagesService get');

        const config = {
            pages: 'pages',
            pageName
        };

        const promise = pagesResource().get(config).$promise.then(resp => resp.data);
        return promise;
    }

    list() {
        const {$log, pagesResource, pagesStructureKey} = this;

        $log.log('Call pagesService list');

        const config = {
            pages: pagesStructureKey
        };

        const promise = pagesResource().get(config).$promise.then(resp => resp.data);
        return promise;
    }

}



