export class pagesService {
    constructor (Firebase, $rootScope, $log) {
        'ngInject';

        this.$rootScope = $rootScope;
        this.$log = $log;

        const rootRef = new Firebase('https://book-editor.firebaseio.com/');
        const pagesRef = rootRef.child('pages');

        this.firebasePaegesRef = pagesRef;
    }

    add(pageName, obj) {
        this.$log.log('Call pagesService add');

        //Not tested;
        const pageRef = this.firebasePaegesRef.child(pageName);
        const promise = pageRef.set(obj).then(snapshot => snapshot.val());

        promise.then(() => {
            this.$rootScope.$applyAsync();
        });

        return promise;
    }

    remove(pageName) {
        this.$log.log('Call pagesService remove');

        this.$log.log('Call pagesService add');

        //Not tested;
        const pageRef = this.firebasePaegesRef.child(pageName);
        const promise = pageRef.remove().then(snapshot => snapshot.val());

        promise.then(() => {
            this.$rootScope.$applyAsync();
        });

        return promise;
    }

    update(pageName, obj) {
        this.$log.log('Call pagesService update');

        //Not tested;
        const pageRef = this.firebasePaegesRef.child(pageName);
        const promise = pageRef.set(obj).then(snapshot => snapshot.val());

        promise.then(() => {
            this.$rootScope.$applyAsync();
        });

        return promise;
    }

    get(pageName) {
        this.$log.log('Call pagesService get');

        const pageRef = this.firebasePaegesRef.child(pageName);
        const promise = pageRef.once("value").then(snapshot => snapshot.val());

        promise.then(() => {
            this.$rootScope.$applyAsync();
        });

        return promise;
    }

    list() {
        this.$log.log('Call pagesService list');

        const promise = this.firebasePaegesRef.once("value")
            .then(snapshot => {
                let pagesList = [];
                snapshot.forEach(pageSnapshot => {
                    pagesList.push(pageSnapshot.key());
                });
                return pagesList;
            });

            promise.then(() => {
                this.$rootScope.$applyAsync();
            });

        return promise;
    }

}
