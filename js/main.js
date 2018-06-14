let myApp = angular.module('myApp', []);
myApp.factory('Data', function () {
    return {
        message: 'data 来自 service'
    }
});

myApp.filter('reverse', function (Data) {
    return function (text) {
        return text.split('').reverse().join('') + Data.message;
    }
});

myApp.factory('list', function () {
    return [
        {
            a: 'aaa',
            b: 'bbb'
        },
        {
            a: 'ccc',
            b: 'ddd'
        }
    ];
});

myApp.controller('listCtrl', function ($scope, list) {
    $scope.list = list;
});

function FirstCtrl ($scope, Data) {
    $scope.data = Data;
}

function SecondCtrl ($scope, Data) {
    $scope.data = Data;
    console.log($scope.data);
    $scope.reverseMsg = function (message) {
        return message.split('').reverse().join('');
    }
}