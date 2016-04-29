export function routerConfig($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'main',
            resolve: {
                list: pagesService => pagesService.list()
            }
        })

        .state('home.page', {
            url: 'page/:pageName',
            templateUrl: 'app/page/page.html',
            controller: 'PageController',
            controllerAs: 'pageCtrl',
            resolve: {
                page: ($stateParams, pagesService, $state) => pagesService.get($stateParams.pageName)
                        .then(page => {
                            if (!page) {
                                $state.go('home.newpage', $stateParams);
                            }
                            return page;
                        })
            }
        })
        .state('home.page.edit', {
            url: '/edit',
            templateUrl: 'app/page/page-editor.html'
        })
        .state('home.newpage', {
            url: 'newpage/:pageName',
            template: '<h1>Страница не существует. <a>Создать её?</a></h1>',
            controller: function($stateParams) {
                'ngInject';
                this.stateParams = $stateParams;
            },
            controllerAs: 'newPageCtrl'
        })
        ;


    $urlRouterProvider.otherwise('/');
}
