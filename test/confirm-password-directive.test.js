describe('Register Flow', function() {
  var $scope, form, httpBackend;
  
  beforeEach(module('MadScienceApp'));

  beforeEach(inject(function($compile, $rootScope, $httpBackend) {
    $scope = $rootScope.$new();
    httpBackend = $httpBackend;
    var element = angular.element(
      '<form name="form">' +
      '<input ng-model="user.confirmpassword" name="confirmpassword"  required>' +
      '</form>'
    );
    $scope.user = { confirmpassword: null}
    $compile(element)($scope);
    form = $scope.form;
  }));

  describe('confirm-password-directive', function() {
    it('should be valid when confirm password field contains some value', function() {
      form.confirmpassword.$setViewValue('123456789');
      httpBackend.whenGET('views/page-home.html').respond(200, '');
      $scope.$digest();
      expect($scope.user.confirmpassword).toEqual('123456789');
      expect(form.confirmpassword.$valid).toBe(true);
    });

    it('should be invalid when input field contains no value', function() {
      $scope.$digest();
      expect($scope.user.confirmpassword).toEqual(null);
      expect(form.confirmpassword.$valid).toBe(false);
    });
  });
});


describe('Directive: compareto', function () {

  // load the directive's module
  beforeEach(module('MadScienceApp'));

  var scope;

  beforeEach(inject(function($compile, $rootScope) {
    scope = $rootScope.$new();
    var element = angular.element(
      '<form name="form">' +
      '<input ng-model="model.password" type="text" name="password" id="password">' +
      '<input compare-to="model.password" ng-model="model.confirmPassword" type="text" name="confirmPassword" id="confirmPassword">' +
      '</form>'
    );

    scope.model = { password: '', confirmPassword: 'Fd565$dD' };
    $compile(element)(scope);

  }));

  describe('Compare To', function() {

    it('Should contain two elements with the same value', function() {

      // element target
      scope.form.password.$setViewValue('Fd565$dD');
      scope.$digest();
      expect(scope.form.confirmPassword.$valid).toEqual(true);
    });

    it('Should contain two elements with the same value', function() {

      // element target
      scope.form.password.$setViewValue('Fd565$d');
      scope.$digest();
      expect(scope.form.confirmPassword.$valid).toEqual(false);
    });

  });
});