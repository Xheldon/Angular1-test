let myApp = angular.module('app', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'subTpl.html',
        controller: 'ctrl'
    })
        .otherwise({
            template: '没有数据'
        });
});
myApp.controller('ctrl', function ($scope, $q) {
    let defer = $q.defer();
    defer.promise.then(function () {
        alert('好 妙 绝');
    });

    defer.resolve();

    $scope.model = {
        message: '我是一根葱'
    };
});