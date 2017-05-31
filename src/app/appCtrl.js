(function(){
	"use strict"

	angular
		.module('app')
		.controller('appCtrl', appCtrl);

appCtrl.$inject = ['$scope'];
		function appCtrl($scope){
			var vm = this;
		}
}());