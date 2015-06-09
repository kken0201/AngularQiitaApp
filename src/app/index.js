'use strict';

angular.module('angularQiitaApp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial', 'ngMdIcons'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

      // .state('home',{
      //   url: '/',
      //   templateUrl:'app/main/main.html',
      //     'views': {
      //       'MainContent': {
      //           'templateUrl':'app/components/list/list.html',
      //           'controller': 'MainCtrl'
      //       }
      //     }
      // })
      // .state('home.detail',{
      //   url: '/detail/:detail_id',
      //     'views': {
      //       'MainContent': {
      //         'templateUrl': 'app/conponents/detail/detail.html',
      //         'controller': 'DetailCtrl'
      //       }
      //     }
      // });

    $urlRouterProvider.otherwise('/');
  })
;
