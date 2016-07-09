(
    function() {
        var app = angular.module("unitTestingApp", [
            "ui.router",
            "appController"
        ]);

        app.config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state("home", {
                    url:            "/home",
                    templateUrl:    "/dev/wads/SiteAssets/UnitTestingApp/partial-view.html",
                    controller:     "AppCtrl"
                });
                
            $urlRouterProvider.otherwise("/home");
        });
    }
)();