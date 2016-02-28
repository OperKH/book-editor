export function config($logProvider, pagesConstant) {
    'ngInject';
    // Enable log
    $logProvider.debugEnabled(true);

    if (!localStorage.getItem('pages')) {
        let pages = pagesConstant();
        localStorage.setItem('pages', angular.toJson(pages));
    }

}