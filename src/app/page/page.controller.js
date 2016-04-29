export class PageController {
    constructor ($stateParams, page, $state, pagesService, $rootScope, $scope) {
        'ngInject';
        const scope = this;

        scope.page = {...page};
        scope.pageName = $stateParams.pageName;
        scope.isSaveDisabled = true;
        scope.$state = $state;
        scope.savePage = () => {
            pagesService
                .update(scope.pageName, scope.page)
                .then(() => {
                    page = {...scope.page};
                    alert(`Page ${scope.pageName} saved sucsessfully`);
                })
                .catch(() => {
                    alert(`Page ${scope.pageName} save failed`);
                });
        };

        scope.pageChanged = () => {
            scope.isSaveDisabled = scope.page.title === page.title && scope.page.text === page.text;
        };

        const stateChangeStartWatcher = $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState) => {
            if (fromState.name === 'home.page.edit' && toState.name === 'home.page') {
                scope.page = {...page};
            }
        });

        $scope.$on('$destroy', () => {
            stateChangeStartWatcher();
        });


    }
}
