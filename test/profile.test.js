describe('Main Test', function() {

	beforeEach(module('MadScienceApp'));

	var registerController, scope, location;

	beforeEach(inject (function ($rootScope, $controller, $location) {
		scope = $rootScope.$new();
		
		registerController = $controller('profileController', {
		'$scope': scope,
		'$location': location
		});
	}));

	it('Test the Personal Tab is Working', function () {

		scope.scrollTo(1) ;

		expect(scope.tab1).toEqual(true);
        expect(scope.tab2).toEqual(false);
        expect(scope.tab3).toEqual(false);

	});

	it('Save Personal Details Works', function () {
		scope.savePersonalDetails();

		expect(scope.success).toEqual(true);
	});

	it('Save Avatar Works', function () {
		scope.saveAvatar();

		expect(scope.success1).toEqual(true);
	});

	it('Save Change Password Works', function () {
		scope.savePassword();

		expect(scope.success2).toEqual(true);
	});

	it('Test the Avatar Tab is Working', function () {

		scope.scrollTo(2) ;

		expect(scope.tab1).toEqual(false);
        expect(scope.tab2).toEqual(true);
        expect(scope.tab3).toEqual(false);

	});

	it('Test the Change Password Tab is Working', function () {

		scope.scrollTo(3) ;

		expect(scope.tab1).toEqual(false);
        expect(scope.tab2).toEqual(false);
        expect(scope.tab3).toEqual(true);

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
