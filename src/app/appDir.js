(function(){
	"use strict"

	angular
		.module('app')
		.directive('appDir', appDir);


		ExampleController.$inject = ['$scope'];
		appDir.$inject = ['$timeout'];
		function appDir($timeout){
			var directive = {
				restrict: 'EA',
				templateUrl: 'templates/dir.html',
				replace: true,
				scope: {
					completed: '='
				},
				link: linkFunc,
				controller: ExampleController,
				controllerAs: 'vm'
			};

			return directive;

			function linkFunc(scope, el, attr, ctrl) {
				var completed = attr.completed;
				var circle = el.children();
				$timeout(function() {
					circle.css('height', completed+'%');
				}, 1000);
			}
		}

		function ExampleController($scope, $timeout) {
			var vm = this;
			vm.completed = $scope.completed;
			console.log('vm.height = ', vm.completed);
		}
}());