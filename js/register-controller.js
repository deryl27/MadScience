madscienceapp.controller('registerController', function($scope, $location) {
    $scope.pageClass = 'page-register';

    $scope.personalDetails = false;
    $scope.demographicDetails = true;
    $scope.interestDetails = true;

    $scope.roles = ['Biology','Computer Science', 'Physics', 'Psychology', 'Sports'];
    $scope.gameplayed = ['Not very often','Often'];
    $scope.games = ['Board Games', 'Card Games', 'Platformers', 'Shooters'];

    $scope.user = {
    	interest: [],
    	game: [],
    	gender: 'male'

    };

     $scope.lov_state = [
        { 'description': 'Alabama'},
        { 'description': 'Florida'},
        { 'description': 'California'},
        { 'description': 'Delaware'}
    ];

    $scope.countries = ["USA", "UK", "India", "China"];

    $scope.togglePersonalDetails = function (){
    	$scope.personalDetails = !$scope.personalDetails;
    	// $scope.demographicDetails = true;
    	// $scope.interestDetails = true;
    	console.log(">>> INSIDE THE TOGGLE");
    };

     $scope.toggleDemographicDetails = function (){
    	$scope.demographicDetails = !$scope.demographicDetails;
    	// $scope.personalDetails = true;
    	// $scope.interestDetails = true;
    	console.log(">>> INSIDE THE TOGGLE");
    	console.log(">>>" , $scope.user.interest);
    };

    $scope.togglesinterestDetails = function (){
    	$scope.interestDetails = !$scope.interestDetails;
    	if($scope.interestDetails)
    		$scope.personalDetails = false;
    	$scope.demographicDetails = true;
    	// $scope.demographicDetails = !$scope.demographicDetails;
    	// $scope.personalDetails = true;
    	
    };

    $scope.register = function(user) {
    	console.log("user >>>>>>>>" , user);
    	$location.path('')
    };

    

     $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  

  $scope.dateOptions = {
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };


  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

 
  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };


});