madscienceapp.controller('personallabController', function($rootScope, $scope, $location, $anchorScroll) {

    console.log("In personalLab Controller");
    
    //Set Background
    $rootScope.viewBackground = "background-personallabPage";    
    $scope.pageClass = 'personallab';


    $scope.experiments = [
    {
      url: 'images/exp/exp1.jpg',
      name: 'exp1'
    },
    {
      url: 'images/exp/exp2.jpg',
      name: 'exp2'
    },
    {
      url: 'images/exp/exp3.jpg',
      name: 'exp3'
    },
    {
      url: 'images/exp/exp4.jpg',
      name: 'exp4'
    },
    {
      url: 'images/exp/exp5.jpg',
      name: 'exp5'
    },
    {
      url: 'images/exp/exp6.jpg',
      name: 'exp6'
    },
    {
      url: 'images/exp/exp7.jpg',
      name: 'exp7'
    },
    {
      url: 'images/exp/exp8.jpg',
      name: 'exp8'
    },
    {
      url: 'images/exp/exp9.jpg',
      name: 'exp9'
    }
    ];

    $scope.labs = [
    {
      url: 'images/exp/exp6.jpg',
      name: 'lab1'
    },
    {
      url: 'images/exp/exp7.jpg',
      name: 'lab2'
    },
    {
      url: 'images/exp/exp8.jpg',
      name: 'lab3'
    },
    {
      url: 'images/exp/exp9.jpg',
      name: 'lab4'
    }];


});