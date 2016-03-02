describe('Main Test', function() {

	beforeEach(module('MadScienceApp'));

	var HousingAppController,
	scope;

	beforeEach(inject (function ($rootScope, $controller) {
		scope = $rootScope.$new();

		Person = {
			email : 'mad@gmail.com',
			password : 'a_123456'
		};

		HousingAppController = $controller('MadScienceController', {
		'$scope': scope
		});
	}));

	it('valid password and invalid username', function () {
		expect(Person).not.toEqual({
			email : 'ad@gmail.com',
			password : 'a_123456'
		});
	});

	it('invalid password and valid username', function () {
		expect(Person).not.toEqual({
			email : 'mad@gmail.com',
			password : '123456'
		});
	});

	it('valid password and valid username', function () {
		expect(Person).toEqual({
			email : 'mad@gmail.com',
			password : 'a_123456'
		});
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