export const treeComponent = {
    controller: treeControllerFn,
    bindings: {
        pagesList: '<'
    },
    templateUrl: 'app/components/tree/tree.template.html'
};

function treeControllerFn() {
    this.pagesListArray = Object.keys(this.pagesList);
}
