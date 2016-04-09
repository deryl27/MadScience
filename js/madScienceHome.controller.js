/**
 * Created by rahul on 3/3/16.
 */


madscienceapp.controller('madScienceController', function($rootScope, $scope, $location, $anchorScroll) {

    console.log("In madScienceContoller Controller");
    
    //Experiment Tab should always be open on arriving in Mad World
    $scope.tabModel = "Experiment";
    $scope.experimentContent = "Click on any Window";


    $scope.experimentWindows = [
	
		    {billBoardImage : "imageURL1", nameOnWindow : "Exp1"},
		    {billBoardImage : "imageURL2", nameOnWindow : "Exp2"},
		    {billBoardImage : "imageURL3", nameOnWindow : "Exp3"},
		    {billBoardImage : "imageURL4", nameOnWindow : "Exp4"},
		    {billBoardImage : "imageURL5", nameOnWindow : "Exp5"},
		    {billBoardImage : "imageURL6", nameOnWindow : "Exp6"}
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
        	//Display Experiment Images.
        	$scope.experimentContent = experiment.billBoardImage;
        }
});
