angular.module('personalApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('about', {
        url: '/',
        templateUrl: 'views/about.html',
        controller: 'mainController'
    })

    $stateProvider
      .state('resume', {
          url: '/resume',
          templateUrl: 'views/resume.html',
          controller: 'mainController'
      })

    $stateProvider
      .state('contact', {
          url: '/contact',
          templateUrl: 'views/contact.html',
          controller: 'mainController'
      })

    $urlRouterProvider
      .otherwise('/')

 });
