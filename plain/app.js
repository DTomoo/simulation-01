var app = angular.module('simulationApp', []);

app.controller('mainCtrl', function($scope, $timeout) {

$scope.age = 0;
$scope.displayAge = $scope.age;
$scope.interval = 100;
$scope.displayEveryXthStep = 1;

var running = false;
	
$scope.start = function() {
	if (!running) {
		running = true;
		nextStep();
	}
};
$scope.stop = function() {
	if (running) {
		running = false;
	};
};
$scope.reset = function() {
	$scope.age = 0;
};

var nextStep = function() {
	if (running) {
		step();
		$timeout(nextStep, $scope.interval);
	}
};

var step = function() {
	if (running) { 
		$scope.age += 1;
	
		if ($scope.age % $scope.displayEveryXthStep == 0) {
			$scope.displayAge = $scope.age;
		}
	}
};

});