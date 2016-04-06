/**
 * Created by rahul on 3/3/16.
 */

madscienceapp.controller('madScienceController', function($rootScope, $scope, $location, $anchorScroll) {

    console.log("In madScienceContoller Controller");
    
    //Set Background
    $rootScope.viewBackground = "background-madWorldPage";    	



        $scope.$location = $location;
        $scope.fillBillBoard = function() {
        	console.log("Inside clcked function");
        	// Fill the bill board here.
        	//$scope.billBoardLabelModel = 

        }
});
