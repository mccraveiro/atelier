var app = angular.module('atelier', [
    'atelier.calendar',
    'atelier.clients',
    'atelier.titleBar'
]);

// Filter array by first letter
// list: input array
// letter: letter to filter or '!A-Z' to filter words outside A-Z range
// key: optional key in list array
app.filter("firstLetter", function () {

    return function (list, letter, key) {

        if (!(list instanceof Array)) return list;
        if (list.length === 0) return list;

        var result = [];
        var value = "";

        for (var i = 0; i < list.length; i++) {
			value = key ? list[i][key] : list[i];

			if (letter === '!A-Z' && (value.toLowerCase().charCodeAt(0) < 97 || value.toLowerCase().charCodeAt(0) > 122)) {
				// not A-Z or a-z
				result.push(list[i]);
			} else if (letter !== '!A-Z' && value.charAt(0).toLowerCase() === letter.toLowerCase()) {
				// equal letter (case-insensitive)
				result.push(list[i]);
			}
        }

        return result;
    };
});

app.controller('MainCtrl', ['$scope', function($scope) {

	$scope.Page = {
		Home: false,
		Clients: true,
		Calendar: false,
		Stats: false,
		Settings: false
	};

	$scope.goTo = function(page) {
		angular.forEach($scope.Page, function(value, key){
			$scope.Page[key] = false;
		});
		$scope.Page[page] = true;
	};
}]);

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
