'use strict';

// Declare app level module which depends on views, and components
angular.module('hsdbApp', [
    'ngRoute',
    'hsdbAnimations',
    'hsdbControllers'
]).config(['$routeProvider', function ($routeProvider) {
    //This section handles routing. When the URL is /cards, show the list of all cards, if the URL contains a cardID,
    //then go to the card detail page. Otherwise, default to the list of cards
    $routeProvider.when('/cards', {
        templateUrl: 'partials/card-list.html',
        controller: 'CardListCtrl'
    }).when('/cards/:cardId', {
        templateUrl: 'partials/card-detail.html',
        controller: 'CardDetailCtrl'
    }).otherwise({redirectTo: '/cards'});
}]);
