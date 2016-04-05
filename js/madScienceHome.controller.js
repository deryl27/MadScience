/**
 * Created by rahul on 3/3/16.
 */

madscienceapp.controller('madScienceController', function($scope, $location, $anchorScroll) {

        console.log("In madScienceContoller Controller");
        $scope.$location = $location;
        $scope.fillBillBoard = function() {
        	console.log("Inside clcked function");
        	// Fill the bill board here.
        }
});
