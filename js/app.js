var madscienceapp = angular.module('MadScienceApp' , ['ngRoute' , 'ngAnimate', 'ui.bootstrap', 'LocalStorageModule']);

madscienceapp.run(function($rootScope) {
    $rootScope.currentUser = '';
})

var dummyemail = 'mad@gmail.com';
var dummypassword = 'a_123456';
var image = '../images/team1.jpg';
var dummyname = 'Deryl';

madscienceapp.controller('MadScienceController', ['$scope', 'localStorageService', '$location', '$rootScope', function($scope, localStorageService, $location, $rootScope)
{
  $scope.showModal = false;
  $scope.errormsg = false;
  $scope.currentUser = null;
  $scope.toggleModal = function() {
        $scope.showModal = !$scope.showModal;
    };

  //$scope.currentUser = getCurrentUser();

  localStorageService.remove('Credentials');


  // function getCurrentUser() {
  //   var value = localStorageService.get('Credentials');
  //   console.log("value" , value);

  //   return value;
  // }  

    $scope.submitLogin = function(person) {
      console.log("Person" , person);
      var currentEmail = person.email;
      var currentPassword = person.password;
      
      if(dummyemail == currentEmail && dummypassword == currentPassword) {
        console.log('Success Message');
        $scope.errormsg = false;
        $scope.showModal = false;
        $scope.currentUser = currentEmail;
        $rootScope.currentUser = currentEmail;
        // $location.path('');
      }
      else {
        console.log('Error Message');
        $scope.errormsg = true;
      }
    };

}]);

madscienceapp.config(function($routeProvider) {

    $routeProvider
    // home page
        .when('/', {
            templateUrl: 'views/page-home.html',
            controller: 'mainController'
        })
        .when('/register', {
            templateUrl: 'views/page-register.html',
            controller: 'registerController'

        })
        .when('/edit', {
            templateUrl: 'views/page-profile.html',
            controller: 'profileController'

        })
        .when('/experiments', {
            templateUrl: 'views/experiment.html',
            controller: 'ExperimentController'
        })
        .when('/madworld', {
            templateUrl: 'views/madScienceHome.view.html',
            controller: 'madScienceController'
        })
        .when('/personallab', {
            templateUrl: 'views/personal-lab.html',
            controller: 'personallabController'
        });
});

madscienceapp.directive('modal', function () {
    return {
      templateUrl: 'views/modal.html',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });

