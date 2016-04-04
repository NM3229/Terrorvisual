var app = angular.module("visualisation", ['ngDialog', 'cfp.hotkeys','720kb.tooltips']);

app.controller("TabController", function($scope, $timeout){
	this.tab = 1;
	this.hideNavbar = false;
	this.navbarUpDown = "\u2191";

	this.setTab = function(newTab){
		this.tab = newTab;
	};

	this.isSet = function(curTab){
		return curTab === this.tab;
	};

	this.toggleNavbar = function(){
		this.hideNavbar = !this.hideNavbar;
	}

});

app.controller('MainCtrl', function ($scope, ngDialog) {
	$scope.clickToOpen = function () {
		ngDialog.open({ template:  'templateId', className: 'ngdialog-theme-default ngdialog-theme-custom' });
	};
});

// app.controller('NavbarCtrl', function($scope, hotkeys) {
// 	$scope.volume = 5;
// 	hotkeys.add({
// 		combo: 'mod+right',
// 		description: 'Go to right tab',
// 		callback: function() {
// 			$scope.volume += 1;
// 		}
// 	});

// 	hotkeys.add({
// 		combo: 'mod+left',
// 		description: 'Go to left tab',
// 		callback: function() {
// 			$scope.volume -= 1;
// 		}
// 	});

// 	hotkeys.add('w', 'Go to Terrorism Wikipedia', function (event) {
//       event.preventDefault();
//       $window.location.href = 'https://en.wikipedia.org/wiki/Terrorism';
//     });

// });

app.controller('TourCtrl', function ($scope, $timeout) {
	this.clickForTour = function () {

	};
});
