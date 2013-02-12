'use strict';

/* Controllers */

function BigDaddy($scope, $timeout, tiles) {
    $scope.backgroundColor = "#ffffff";

    function renewTiles() {
        $scope.tiles = tiles.getTiles();
        $timeout(renewTiles, 5000);
    }

    renewTiles();

    tiles.registerMaster(function (message) {
        $scope.backgroundColor = message; 
    });
}

function Partial1Controller($scope, tiles) {
    $scope.x = "This is a binding";

    $scope.callback = tiles.register('Partial1');

    $scope.callReg = function() {
        $scope.callback("#77BDF0");
    };
}

function Partial2Controller($scope, tiles) {
    $scope.metric = "This is a metric";

    $scope.callback = tiles.register('Partial2');

    $scope.callReg = function() {
        $scope.callback("#C1BBC6")
    }
}
