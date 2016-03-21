/**
 * Created by Wes on 3/20/2016.
 */
//This will contain the controller used by the app (CardListCtrl and CardDetailCtrl)
//Get a handle on our app
var hsdbControllers = angular.module('hsdbControllers', []);
//Add the controller that handles the list of cards
//The array being passed in are the dependencies that need to be injected
hsdbControllers.controller('CardListCtrl', ['$scope', '$http',
    function($scope, $http){
        //Request the cards JSON file (this could be a backend server but that's way to complex for a simple little app
        // like this. On success, we set the scope.cards to be the data (all the cards). Angular is a bro and
        //automagically parses the json for us. Thanks, angular!
        $http.get('cards/cards.json').success(function(data){
            $scope.cards = data;
        });

        //The orderprop property determines how the cards will be sorted. By default, we'll do mana cost
        //If this wasn't set then when the page first loads there would be an empty sorting option that would then
        //disappear after the user makes a selection.
        $scope.orderProp = 'mana';
    }]);

//Add the controller that handles the details of a card when it is selected by the user
//The $routeParams will contain the card ID of the card that was clicked. We'll use this to get all the important info
hsdbControllers.controller('CardDetailCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams){
        $scope.cardId = $routeParams.cardId;
        //Get it with JSON this time to play with JSON and also to easily parse the correct card
        $.getJSON("cards/cards.json", function(data){
            console.log("Success");
            console.log($routeParams.cardId);
            //console.log("The data is: " + data);
            //find the right card in the JSON
          var result = jQuery.grep(data, function(n, i){
                //console.log(n.name);
                return n.id == $routeParams.cardId;
            });
            //console.log(result);

            console.log(result[0].name.toString());
            //Assign the parts of the card we want to the scope
            //Because we are executing code outside of Angular's knowledge (inside the $.getJSON method) we have to
            //manually called $scope.$digest() for it to "see" the changes.
            $scope.cardName = result[0].name;
            $scope.description = result[0].description;
            $scope.image_url = result[0].image_url;
            $scope.type = result[0].type;
            $scope.quality = result[0].quality;
            $scope.collectible = result[0].collectible;
            $scope.set = result[0].set;
            $scope.mana = result[0].mana;
            $scope.attack = result[0].attack;
            $scope.health = result[0].health;
            $scope.hero = result[0].hero;

            $scope.$digest();
        });

       //$scope.cardName = result[0].name.toString();

    }]);