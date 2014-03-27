(function () {
	'use strict';

	angular.module('atelier.calendar', [])
		.controller('CalendarCtrl', ['$scope', function ($scope) {

		// TODO localization
		var months = [
			'Janeiro',
			'Fevereiro',
			'Março',
			'Abril',
			'Maio',
			'Junho',
			'Julho',
			'Agosto',
			'Setembro',
			'Outubro',
			'Novembro',
			'Dezembro'
		];

		$scope.today = new Date();

		$scope.current = {
			date: $scope.today,
			month: {
				value: undefined,
				name: undefined
			},
			year: undefined,
			calendar: undefined
		};

		updateCurrentDate();

		$scope.prevMonth = function () {

			var currentMonth = $scope.current.month.value;

			if (currentMonth === 0) {
				$scope.current.date.setFullYear($scope.current.year - 1);
				$scope.current.date.setMonth(11);
			} else {
				$scope.current.date.setMonth(currentMonth - 1);
			}

			updateCurrentDate();
		};

		$scope.nextMonth = function () {

			var currentMonth = $scope.current.month.value;

			if (currentMonth === 11) {
				$scope.current.date.setFullYear($scope.current.year + 1);
				$scope.current.date.setMonth(0);
			} else {
				$scope.current.date.setMonth(currentMonth + 1);
			}

			updateCurrentDate();
		};

		function updateCurrentDate() {

			var monthStart = new Date($scope.current.date.getFullYear(), $scope.current.date.getMonth(), 1);
			var monthEnd = new Date($scope.current.date.getFullYear(), $scope.current.date.getMonth() + 1, 1);
			var monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
			var numberOfWeeks = Math.ceil((monthLength + monthStart.getDay()) / 7);

			var calendar = [];

			for (var i = 0; i < numberOfWeeks; i++) {

				calendar[i] = [];

				for (var j = 0; j < 7; j++) {
					if (i === 0 && j < monthStart.getDay()) {
						calendar[i][j] = "";
					} else if (i === numberOfWeeks - 1 && monthEnd.getDay() !== 0 && j >= monthEnd.getDay()) {
						calendar[i][j] = "";
					} else {
						calendar[i][j] = (i * 7 - monthStart.getDay()) + j + 1;
					}
				}
			}

			$scope.current = {
				date: $scope.current.date,
				month: {
					value: $scope.current.date.getMonth(),
					name: months[$scope.current.date.getMonth()]
				},
				year: $scope.current.date.getFullYear(),
				calendar: calendar
			};
		}

	}]);

}());
