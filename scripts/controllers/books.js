'use strict';

/**
 * @ngdoc function
 * @name yuxipacificFrontendApp.controller:BooksCtrl
 * @description
 * # BooksCtrl
 * Controller of the yuxipacificFrontendApp
 */
angular.module('yuxipacificFrontendApp')
  .controller('BooksCtrl', function ($scope, $http, APIURL) {

		//$scope.books = Book.getAll(); //fetch all books. Issues a GET to /api/books
	  $http
      .get( APIURL + 'books' )
      .success(function(data){
        $scope.books = data;
      });

	  $scope.deleteMovie = function(book) { // Delete a book. Issues a DELETE to /api/books/:id
	    if (popupService.showPopup('Really delete this?')) {
	      book.$delete(function() {
	        $window.location.href = ''; //redirect to home
	      });
	    }
	  };
  });
