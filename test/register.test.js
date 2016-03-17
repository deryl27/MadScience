describe('Main Test', function() {

	beforeEach(module('MadScienceApp'));

	var registerController,
	scope;



	beforeEach(inject (function ($rootScope, $controller) {
		scope = $rootScope.$new();

	

		registerController = $controller('registerController', {
		'$scope': scope
		});
	}));

	it('Person Details validate the toggle', function () {
		scope.personalDetails = false;

		scope.togglePersonalDetails();

		expect(scope.personalDetails).toEqual(true);
	});

	it('DemoGraphic Details validate the toggle', function () {
		scope.demographicDetails = false;
		
		scope.toggleDemographicDetails();

		expect(scope.demographicDetails).toEqual(true);
	});

	it('Activities Details validate the toggle', function () {
		scope.interestDetails = false;
		
		scope.togglesinterestDetails();

		expect(scope.interestDetails).toEqual(true);
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

});
