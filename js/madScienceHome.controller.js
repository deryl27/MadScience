/**
 * Created by rahul on 3/3/16.
 */

madscienceapp.controller('madScienceController', function($rootScope, $scope, $location, $anchorScroll) {

    console.log("In madScienceContoller Controller");
    $scope.clicked = false;
    $scope.clickedFilter = false;
    $scope.experimentWindows = [{left : "123px", top : "243px", name : "button1"},
    {left : "222px", top : "543px", name : "button2"},
    {left : "13px", top : "23px", name : "button3"},
    {left : "13px", top : "23px", name : "button4"},
    {left : "13px", top : "23px", name : "button5"},
    {left : "13px", top : "23px", name : "button6"}
    ];


    //Set Background
    $rootScope.viewBackground = "background-madWorldPage";    	



        $scope.$location = $location;

        $scope.displayCategories = function() {
        	$scope.clicked = false;
        	$scope.clickedFilter = !$scope.clickedFilter;
        }

        $scope.displayExperimentData = function(experiment) {
        	console.log("Inside experiment Tab");
        	$scope.clicked = true;
        	$scope.clickedFilter = false;
        }
});
