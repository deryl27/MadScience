madscienceapp.controller('profileController', function($scope, $location) {
    $scope.pageClass = 'page-profile';

    $scope.personalDetails = true;
    $scope.demographicDetails = false;
    $scope.interestDetails = false;

    $scope.roles = ['Biology','Computer Science', 'Physics', 'Psychology', 'Sports'];
    $scope.gameplayed = ['Not very often','Often'];
    $scope.games = ['Board Games', 'Card Games', 'Platformers', 'Shooters'];

    $scope.today = function() {
    $scope.dt = new Date();
    };

    $scope.tab1 = true;
    $scope.tab2 = false;
    $scope.tab3 = false;

    $scope.scrollTo = function(id) {
      console.log("id" , id);
      if(id == 1)
      {
        $scope.tab1 = true;
        $scope.tab2 = false;
        $scope.tab3 = false;
      }
      else if(id == 2) 
      {
        $scope.tab1 = false;
        $scope.tab2 = true;
        $scope.tab3 = false;
      }
      else if(id == 3)
      {
         $scope.tab1 = false;
        $scope.tab2 = false;
        $scope.tab3 = true;
      }
    };

    $scope.success = false;
    $scope.savePersonalDetails = function()
    {
      $scope.success = true;
    }

    $scope.saveAvatar = function() 
    {
      $scope.success1 = true;
    }
    $scope.savePassword = function()
    {
      $scope.success2  = true;
    }

    $scope.today();

    $scope.registeruser = {
      avatar: 'Deryl Rodrigues',
      userName: 'deryl',
      type: 'Professor',
      email: 'deryl1234@gmail.com',
      phone: '617-818-0000',
      confirmemail: 'deryl1234@gmail.com',
      userPassword: '12345678',
      userConfirmPassword: '12345678',
      birthday: $scope.dt,
    	interest: 'Biology, Computer Science',
    	game: [],
      emailSetting: 'single',
      nationality: 'India',
      country: 'China',
  
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