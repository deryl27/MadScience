describe('Experiment Test', function() {

	beforeEach(module('MadScienceApp'));

	var experimentController, scope, location;

	beforeEach(inject (function ($rootScope, $controller, $location) {
		scope = $rootScope.$new();
		
		experimentController = $controller('ExperimentController', {
		'$scope': scope,
		'$location': location
		});
	}));

	it('Valid Comment Added to Json', function () {
		
		var initally =  scope.commentData.comments[1].replies.length;
		scope.commentSend('1', 'Good Experiment');

		var finall =  scope.commentData.comments[1].replies.length;

		expect(initally).toEqual(finall);
		
		
	});

	it('InValid Comment Added to Json', function () {
		
		
		scope.commentSend('1', '');
		expect(scope.showCommentError).toEqual(true);
		
		
	});

	it('Valid Comment Added to Json', function () {
		
		var initally =  scope.commentData.comments.length;
		scope.commentMainSend('Good Experiment');

		var finall =  scope.commentData.comments.length;

		expect(initally+1).toEqual(finall);
		
		
	});

	it('InValid Comment Added to Json', function () {
		
		
		scope.commentMainSend('');
		expect(scope.showCommentMainError).toEqual(true);
		
		
	});
});
