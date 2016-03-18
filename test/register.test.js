describe('Main Test', function() {

	beforeEach(module('MadScienceApp'));

	var registerController, scope, location;

	beforeEach(inject (function ($rootScope, $controller, $location) {
		scope = $rootScope.$new();
		
		registerController = $controller('registerController', {
		'$scope': scope,
		'$location': location
		});
	}));

	it('Person Details validate the toggle', function () {
		scope.personalDetails = true;
		scope.demographicDetails = false;
		scope.interestDetails = false;

		scope.togglePersonalDetails();

		expect(scope.personalDetails).toEqual(false);
		expect(scope.demographicDetails).toEqual(true);
		expect(scope.interestDetails).toEqual(false);
	});

	it('DemoGraphic Details validate the toggle', function () {
		scope.personalDetails = false;
		scope.demographicDetails = true;
		scope.interestDetails = false;
		
		scope.toggleDemographicDetails();

		expect(scope.personalDetails).toEqual(false);
		expect(scope.demographicDetails).toEqual(false);
		expect(scope.interestDetails).toEqual(true);

	});

	it('DemoGraphic Details validate the toggle to personalDetails', function () {
		scope.personalDetails = false;
		scope.demographicDetails = true;
		scope.interestDetails = false;
		
		scope.toggleBackDemographicDetails();

		expect(scope.personalDetails).toEqual(true);
		expect(scope.demographicDetails).toEqual(false);
		expect(scope.interestDetails).toEqual(false);

	});

	it('Activities Details validate the toggle', function () {
		scope.personalDetails = false;
		scope.demographicDetails = false;
		scope.interestDetails = true;
		
		scope.togglesBackinterestDetails();

		expect(scope.personalDetails).toEqual(false);
		expect(scope.demographicDetails).toEqual(true);
		expect(scope.interestDetails).toEqual(false);
	});

	it('Clear of Date Field', function () {
		scope.dt = new Date();

		scope.clear();

		expect(scope.dt).toEqual(null);
	});

	it('Date Picker Open', function () {
		scope.popup1.opened = false;

		scope.open1();

		expect(scope.popup1.opened).toEqual(true);
	});

	it('Date Picker Open', function () {
		scope.popup1.opened = false;

		scope.open1();

		expect(scope.popup1.opened).toEqual(true);
	});

	// it('test the location after submit click', function() {
	// 	location.path('/register');
		
	// 	scope.register({});

	// 	expect(location.path).toEqual('');

	// });

});
