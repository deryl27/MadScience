madscienceapp.controller('personallabController', function($rootScope, $scope, $location, $anchorScroll) {

    console.log("In personalLab Controller");
    
    //Set Background
    $rootScope.viewBackground = "background-personallabPage"; 
    $scope.created = 24;
    $scope.played = 22;   	

    $scope.images = ['1', '2', '3', '4', '5'];



});