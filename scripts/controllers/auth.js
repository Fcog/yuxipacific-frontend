'use strict';

/**
 * @ngdoc function
 * @name yuxipacificFrontendApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the yuxipacificFrontendApp
 */
angular.module('yuxipacificFrontendApp')
  .controller('AuthCtrl', function ($auth, $state) {

    var vm = this;

    vm.login = function() {
      var credentials = {
        email: vm.email,
        password: vm.password
      }
      
      // Use Satellizer's $auth service to login
      $auth.login(credentials).then(function(data) {
          // If login is successful, redirect to the books state
          $state.go('books');
      }, function(error) {
          console.log(error);
          //$state.go('books');
      });
    }
  });
