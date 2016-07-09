describe("appController", function() {
    var $scope, $controller;

    // Get access to angular module
    beforeEach(module("appController"));

    // Get access to angular controller & initialize scope variable
    beforeEach(inject(function(_$controller_, _$rootScope_) {
        $scope      = _$rootScope_.$new();
        $controller = _$controller_('AppCtrl', { $scope: $scope });
    }));

    describe("$scope.test", function() {
        it("should display 'Hello World!!'", function() {
            expect($scope.test).toEqual('Hello World!!');
        });
    });

    describe("$scope.inputTest", function() {
        it("should contain 'Pokemon'", function() {
            expect($scope.inputTest).toBeUndefined();
            
            $scope.inputTest = "Pokemon";
            expect($scope.inputTest).toEqual('Pokemon');
        });
    });

    it("should display 'test' message", function() {
        expect("test").toBe("test");
    });
});