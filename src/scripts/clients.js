var app = app || angular.module('app', []);

app.controller('ClientsCtrl', ['$scope', function($scope) {

	$scope.changes = false;

	$scope.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

	$scope.clients = [
		{
			name: 'Agueda Cocco'
		},
		{
			name: 'Alla Lathan'
		},
		{
			name: 'Angelia Haglund'
		},
		{
			name: 'Barbera Belew'
		},
		{
			name: 'Belva Laboy'
		},
		{
			name: 'Camellia Fleener'
		},
		{
			name: 'Caren Hendon'
		},
		{
			name: 'Catharine Yamamoto'
		},
		{
			name: 'Cleta Ell'
		},
		{
			name: '_Cleta Ell'
		},
		{
			name: 'Crista Tawil'
		},
		{
			name: 'Curt Kos'
		},
		{
			name: 'Daina Silvas'
		},
		{
			name: 'Deanne Shabazz'
		},
		{
			name: 'Donella Weise'
		},
		{
			name: 'Dora Bleich'
		},
		{
			name: 'Earnestine Purves'
		},
		{
			name: 'Emelda Weese'
		},
		{
			name: 'Ericka Sellman'
		},
		{
			name: 'Estefana Bullock'
		},
		{
			name: 'Everett Edelstein'
		},
		{
			name: 'Jeanene Pouncey'
		},
		{
			name: 'Jerrell Lundholm'
		},
		{
			name: 'Jesica Lenihan'
		},
		{
			name: 'Kimber Harnois'
		},
		{
			name: 'Lesia Judd'
		},
		{
			name: 'Lianne Fogarty'
		},
		{
			name: 'Liliana Hurtt'
		},
		{
			name: 'Lindsy Toro'
		},
		{
			name: 'Lon Courter'
		},
		{
			name: 'Maile Faller'
		},
		{
			name: 'Mariette Popa'
		},
		{
			name: 'Marth Gipson'
		},
		{
			name: 'Maryann Lord'
		},
		{
			name: 'Mitch Pappalardo'
		},
		{
			name: 'Neoma Deforge'
		},
		{
			name: 'Saul Neumeister'
		},
		{
			name: 'Shelli Rizzo'
		},
		{
			name: 'Sherill Huffine'
		},
		{
			name: 'Sherrell Bibby'
		},
		{
			name: 'Sherri Bonavita'
		},
		{
			name: 'Shirely Czarnecki'
		},
		{
			name: 'Steffanie Franks'
		},
		{
			name: 'Tiffanie Kilroy'
		},
		{
			name: 'Tomas Platner'
		},
		{
			name: 'Veronique Lama'
		},
		{
			name: 'Vivienne Kuster'
		},
		{
			name: 'Wenona Prieto'
		},
		{
			name: 'Winnie Kaneshiro'
		},
		{
			name: 'Zane Houtz'
		},
		{
			name: 'Zenobia Manrique'
		}
	];

	$scope.searchInput = '';

	$scope.activeClient = undefined;

	$scope.selectClient = function (client) {

		if ($scope.changes) {
			$scope.confirm.show = true;
			return;
		}

		if ($scope.activeClient == client) {
			$scope.activeClient = undefined;
		} else {
			$scope.activeClient = client;
		}
	};

	$scope.addClient = function () {
		$scope.activeClient = undefined;
		$scope.changes = true;
	};

	$scope.confirm = {
		show: false,
		message: "lorem",
		close: function () {
			$scope.changes = false;
			this.show = false;
		}
	};
}]);