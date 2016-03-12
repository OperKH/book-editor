export function config($logProvider, pagesConstant, Storage) {
    'ngInject';
    // Enable log
    $logProvider.debugEnabled(true);

    if (!Storage.getItem('pages')) {
        let pages = pagesConstant();
        Storage.setItem('pages', angular.toJson(pages));
    }

}