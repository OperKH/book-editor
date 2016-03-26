export const treeComponent = {
    controller: treeControllerFn,
    bindings: {
        pagesList: '<'
    },
    templateUrl: 'app/components/tree/tree.template.html'
};

function treeControllerFn() {
    this.pagesListArray = Object.keys(this.pagesList);
    this.openedNodes = [];
    this.isOpened = pageName => this.openedNodes.includes(pageName);
    this.toggleOpened = pageName => {
        const { openedNodes } = this;
        const index = openedNodes.indexOf(pageName);
        if (index === -1) {
            openedNodes.push(pageName);
        } else {
            openedNodes.splice(index, 1);
        }
    };
}
