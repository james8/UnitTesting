(
    function() {
        var app = angular.module('appController', []);

        app.controller('AppCtrl', ['$scope',
            function($scope) {
                $scope.test = "Hello World!!";
                // console.log($scope.test);
            }
        ]);
    }
)();