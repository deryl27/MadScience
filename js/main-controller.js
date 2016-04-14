madscienceapp.controller('mainController', function($rootScope, $scope, $location, $timeout) {
	//Setting the homaPage background.
    $rootScope.viewBackground = "background-homePage";
    $scope.myValue = false;

    $scope.gotoPage = function()
    {	
    	console.log("In ");
    	$timeout(function () {
    		console.log("HELLO W ORLD");
    		$location.path("/madworld");	
    	}, 800);
    }
});