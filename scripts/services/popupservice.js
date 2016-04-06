'use strict';

/**
 * @ngdoc service
 * @name yuxipacificFrontendApp.popupService
 * @description
 * # popupService
 * Service in the yuxipacificFrontendApp.
 */
angular.module('yuxipacificFrontendApp')
  .service('popupService', function ($window) {
    this.showPopup=function(message){
        return $window.confirm(message);
    }
  });
