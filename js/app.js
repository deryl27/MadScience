var madscienceapp = angular.module('MadScienceApp' , ['ngRoute' , 'ngAnimate']);

var dummyemail = 'mad@gmail.com';
var dummypassword = 'a_123456';

madscienceapp.controller('MadScienceController', ['$scope', function($scope)
{

	$scope.showModal = false;
	$scope.errormsg = false;
	$scope.toggleModal = function() {

        $scope.showModal = !$scope.showModal;
    };

    $scope.submitLogin = function(person) {
    	console.log("Person" , person);
    	var currentEmail = person.email;
    	var currentPassword = person.password;
    	

    	if(dummyemail == currentEmail && dummypassword == currentPassword) {
    		console.log('Success Message');
    		$scope.errormsg = false;
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


madscienceapp.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});
