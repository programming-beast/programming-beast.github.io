let myapp = angular.module('myapp', []);

myapp.controller('myappController', ['$scope', function ($scope) {
    $scope.previewlists = [
        {
            name: "Button effect 3",
            src: "https://code-architects.github.io/button-effect-3/",
            lang: "CSS"
        }
    ];
}]);
