'use strict';

/* Controllers */

function BigDaddy($scope, tiles) {
    $scope.partial = tiles.getTile();
    $scope.backgroundColor = "#ffffff";

    tiles.registerMaster(function (message) {
        $scope.backgroundColor = message; 
    });

    $scope.move = function() {
        $scope.partial = tiles.getTile();
    };
}

function Partial1Controller($scope, tiles) {
    $scope.x = "This is a binding";

    $scope.callback = tiles.register('Partial1');

    $scope.callReg = function() {
        $scope.callback("#ff0000");
    };
}

function Partial2Controller() {
}
