madscienceapp.controller('personallabController', function($rootScope, $scope, $location, $anchorScroll) {

    console.log("In personalLab Controller");
    
    //Set Background
    $rootScope.viewBackground = "background-personallabPage"; 
    $scope.created = 24;
    $scope.played = 22;   	

    $scope.images = ['1', '2', '3', '4', '5'];

        $scope.exps = [
    {
      url: 'images/personallab/experiment_on.png',
      name: '1'
    },
    {
      url: 'images/personallab/screen_02.png',
      name: '2'
    },
    {
      url: 'images/personallab/screen_02.png',
      name: '3'
    },
    {
      url: 'images/personallab/screen_02.png',
      name: '4'
    },
    {
      url: 'images/personallab/screen_02.png',
      name: '5'
    },
    {
      url: '../images/personallab/reverse_screen_01.png',
      name: '6'
    },
    {
      url: 'images/personallab/screen_04.png',
      name: '7'
    },
    {
      url: 'images/personallab/screen_03.png',
      name: '8'
    },
    {
      url: 'images/personallab/screen_03.png',
      name: '9'
    },
    {
      url: 'images/personallab/screen_03.png',
      name: '10'
    },
    {
      url: 'images/personallab/screen_03.png',
      name: '11'
    },

    {
      url: '../images/personallab/reverse_screen_04.png',
      name: '12'
    },];


});