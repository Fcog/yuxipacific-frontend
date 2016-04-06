'use strict';

/**
 * @ngdoc overview
 * @name yuxipacificFrontendApp
 * @description
 * # yuxipacificFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('yuxipacificFrontendApp', [
    'ngAnimate',
    'ngResource',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider, APIURL) {

    // Redirect to the auth state if any other states
    // are requested other than users
    $urlRouterProvider.otherwise('/books');
    
    $stateProvider
      .state('home', {
        url: '/home',
        views: {
          '': { 
            templateUrl: 'views/home.html'
          },
          'register@home': { 
            templateUrl: 'views/auth/register.html'
          },
          'login@home': { 
            templateUrl: 'views/auth/login.html',
            controller: 'AuthCtrl as auth'
          }
         }
      })              
      .state('books', {
        url: '/books',
        templateUrl: 'views/books.html',
        controller: 'BooksCtrl as books'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
      });            
  })
  .run(function($state) {
    $state.go('books'); //make a transition to home state when app starts
  });
