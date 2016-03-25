export function routerConfig($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'main',
            resolve: {
                list: (pagesService) => pagesService.list()
            }
        })

        .state('home.page', {
            url: 'page/:pageName',
            templateUrl: 'app/page/page.html',
            controller: 'PageController',
            controllerAs: 'pageCtrl'
        });


    $urlRouterProvider.otherwise('/');
}