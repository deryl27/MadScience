madscienceapp.controller('registerController', function($scope, $location) {
    $scope.pageClass = 'page-register';

    $scope.personalDetails = true;
    $scope.demographicDetails = false;
    $scope.interestDetails = false;

    $scope.roles = ['Biology','Computer Science', 'Physics', 'Psychology', 'Sports'];
    $scope.gameplayed = ['Not very often','Often'];
    $scope.games = ['Board Games', 'Card Games', 'Platformers', 'Shooters'];

    $scope.today = function() {
    $scope.dt = new Date();
    };
  $scope.today();

    $scope.user = {
     //  userName: 'deryl',
     //  email: 'deryl1234@gmail.com',
     //  confirmemail: 'deryl1234@gmail.com',
     //  userPassword: '12345678',
     //  userConfirmPassword: '12345678',
     //  birthday: $scope.dt,
    	// interest: {'Biology' : true,'Computer Science' : true},
    	// game: [],
     //  emailSetting: 'single',
     //  nationality: 'India',
     //  country: 'China',
  
      gender: 'male',

    };

    $scope.countries = ["USA", "UK", "India", "China"];

    $scope.togglePersonalDetails = function (){
    	$scope.personalDetails = false;
      $scope.interestDetails = false;
      $scope.demographicDetails = true;
    };

     $scope.toggleDemographicDetails = function (){
    	$scope.demographicDetails = false;
    	$scope.personalDetails = false;
      $scope.interestDetails = true;
    	
    };

    $scope.toggleBackDemographicDetails = function (){
      $scope.demographicDetails = false;
      $scope.personalDetails = true;
      $scope.interestDetails = false;
    };

    $scope.togglesBackinterestDetails = function (){
      $scope.personalDetails = false;
    	$scope.demographicDetails = true;
      $scope.interestDetails = false;
    };

    $scope.register = function(user) {
    	console.log("user >>>>>>>>" , user);
      //localStorageService.set('Credentials', user.userName+":"+user.userPassword);
    	$location.path('')
    };

    

 

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