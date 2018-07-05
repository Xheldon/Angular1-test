angular.module('buttonDirective', []).directive('buttonWithName', function () {
    return {
        restrict: 'E',
        scope: {
            name: '@'
        },
        template: '<button>{{name}}</button>'
    }
});