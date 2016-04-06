/**
 * Created by rahul on 3/3/16.
 */

madscienceapp.controller('madScienceController', function($scope, $location, $anchorScroll, $rootScope) {

        console.log("In madScienceContoller Controller");
        $scope.$location = $location;
        $scope.fillBillBoard = function() {
        	console.log("Inside clcked function");

        	 $location.path('/experiments');


        	// Fill the bill board here.
        }
});
