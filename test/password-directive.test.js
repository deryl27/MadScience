// describe('Register Flow', function() {
//   var $scope, form;
  
//   beforeEach(module('MadScienceApp'));

//   beforeEach(inject(function($compile, $rootScope) {
//     $scope = $rootScope;
//     var element = angular.element(
//       '<form name="form">' +
//       '<input ng-model="user.password" name="password" required password-directive/>' +
//       '</form>'
//     );
//     $scope.user = { password: null }
//     $compile(element)($scope);
//     form = $scope.form;
//   }));

//   describe('password-directive', function() {
//     it('should be valid when input field contains some value', function() {
//       form.password.$setViewValue('123456789');
//       $scope.$digest();
//       expect($scope.user.password).toEqual('123456789');
//       expect(form.password.$valid).toBe(true);
//     });

//     it('should be invalid when input field contains no value', function() {
//       $scope.$digest();
//       expect($scope.user.password).toEqual(null);
//       expect(form.password.$valid).toBe(false);
//     });

//     it('should pass with valid password', function() {
//       form.password.$setViewValue('12345678');
//       $scope.$digest();
//       expect($scope.user.password).toEqual('12345678');
//       expect(form.password.$valid).toBe(true);
//     });

//     it('should not pass with invalid password', function() {
//       form.password.$setViewValue('1234');
//       $scope.$digest();
//       expect($scope.user.password).toEqual('1234');
//       expect(form.password.$valid).toBe(false);
//     });
//   });
// });
