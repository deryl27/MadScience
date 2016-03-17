describe('Main Test', function() {

	beforeEach(module('MadScienceApp'));

	var HousingAppController,
	scope;



	beforeEach(inject (function ($rootScope, $controller) {
		scope = $rootScope.$new();
		HousingAppController = $controller('MadScienceController', {
		'$scope': scope
		});
	}));

	it('valid password and invalid username', function () {
		InvalidPerson = {
			email : 'ad@gmail.com',
			password : 'a_123456'
		}
		scope.errormsg = false;
		scope.submitLogin(InvalidPerson);
		expect(scope.errormsg).toEqual(true);
	});

	it('invalid password and valid username', function () {
		InvalidPerson = {
			email : 'mad@gmail.com',
			password : 'a_132456'
		}
		scope.errormsg = false;
		scope.submitLogin(InvalidPerson);
		expect(scope.errormsg).toEqual(true);
	});

	it('valid password and valid username', function () {
		Person = {
			email : 'mad@gmail.com',
			password : 'a_123456'
		}
		scope.errormsg = false;
		scope.submitLogin(Person);
		expect(scope.errormsg).toEqual(false);
	});

	it('toggle of modal', function () {
		scope.showModal = false;
		scope.toggleModal();

		expect(scope.showModal).toEqual(true);
	});

});

// describe('Login Test', function(){
//     var greetings = [{message:'hello friend'}];
//     var $controller;
//     var $scope;
//     var $httpBackend;
//     var $q;
//     beforeEach(function() {

//         module('MadScienceApp');

//         inject(function ($injector) {
//             $scope = $injector.get('$rootScope').$new();
//             $controller = $injector.get('$controller');
//             $httpBackend = $injector.get('$httpBackend');
//             $q = $injector.get('$q');
//         });

//     });
//     it('should load mocked greetings', function(){

//         $httpBackend.whenGET('http:/localhost:3000/getGreeting').respond(200, greetings);
//         $controller('MadScienceController',{'$scope':$scope});
//         $httpBackend.flush(); //needed to resolve and handle promise returned by $http

//         expect($scope.greetings).toEqual(greetings);
//     });
// });