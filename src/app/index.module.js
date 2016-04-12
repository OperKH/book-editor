/* global moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { PageController } from './page/page.controller';
import { pagesService } from '../app/components/pagesService/pagesService.service';
import { pagesConstant } from '../app/components/pagesConstant/pagesConstant.constant';
import { treeComponent } from '../app/components/tree/tree.component';
// import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
// import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
// import { NavbarDirective } from '../app/components/navbar/navbar.directive';
// import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('bookEditor', ['ngAnimate', 'ngSanitize', 'ngMessages', 'ngResource', 'ui.router', 'ui.bootstrap', 'btford.markdown'])
  .constant('moment', moment)
  .constant('pagesConstant', pagesConstant)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('pagesService', pagesService)
  // .service('githubContributor', GithubContributorService)
  // .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .controller('PageController', PageController)
  .component('tree', treeComponent)
  // .directive('acmeNavbar', NavbarDirective)
  // .directive('acmeMalarkey', MalarkeyDirective)
  ;