'use strict';

/**
 * @ngdoc service
 * @name yuxipacificFrontendApp.Book
 * @description
 * # Book
 * Factory in the yuxipacificFrontendApp.
 */
angular.module('yuxipacificFrontendApp')
  .factory('Book', function ($resource, APIURL) {
    // Public API here
    return $resource(APIURL + 'books/:id', { id: '@id' }, {
      update: {
        method: 'PUT'
      }
    });
  });
