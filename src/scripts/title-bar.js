var app = app || angular.module('app', []);

app.controller('TitleBarCtrl', ['$scope', function($scope) {

	var w = chrome.app.window.current();

	// bring to foreground
	w.show();

	$scope.Minimize = function () {

		if (w.isMinimized()) {
			w.restore();
		} else {
			w.minimize();
		}
	};

	$scope.Maximize = function () {

		if (w.isMaximized()) {
			w.restore();
		} else {
			w.maximize();
		}
	};

	$scope.Close = function () {
		w.close();
	};
}]);