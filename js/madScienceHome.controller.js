/**
 * Created by rahul on 3/3/16.
 */

madscienceapp.controller('madScienceController', function($rootScope, $scope, $location, $anchorScroll) {

    console.log("In madScienceContoller Controller");
    
    //Experiment Tab should always be open on arriving in Mad World
    $scope.tabModel = "Experiment";

    $scope.experimentWindows = [
	
		    {billBoardImage : "imageURL", nameOnWindow : "Exp1"},
		    {billBoardImage : "imageURL", nameOnWindow : "Exp2"},
		    {billBoardImage : "imageURL", nameOnWindow : "Exp3"},
		    {billBoardImage : "imageURL", nameOnWindow : "Exp4"},
		    {billBoardImage : "imageURL", nameOnWindow : "Exp5"},
		    {billBoardImage : "imageURL", nameOnWindow : "Exp6"}
    ];


    //Set Background
    $rootScope.viewBackground = "background-madWorldPage";    	

        $scope.$location = $location;


        // On Click of any window. Load the billBoard with that experiment Image.
        $scope.displayExperimentData = function(experiment) {
        	console.log("Inside experiment Tab");
        	//Go To the Experiment Tab
        	var openedTab = $scope.tabModel;
        	if (openedTab === "Filter") {
        		$scope.tabModel = "Experiment";
        	}
        }
});
