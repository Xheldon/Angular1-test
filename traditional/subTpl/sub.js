let myApp = angular.module('app', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'subTpl.html',
        controller: 'ctrl'
    }).when('/resolve', {
        templateUrl: 'subTpl.html',
        controller: 'resolveTest',
        resolve: {
            aaa: function ($q, $timeout) { // 这个 aaa 取任意名字均可 ???
                let defer = $q.defer();
                $timeout(function () {
                    defer.resolve(); // resolve 完了, 该路由界面才会加载
                }, 3000);
                return defer.promise; // 别忘了 return
            }
        }
    }).when('/outerCtrlResolve', {
        templateUrl: 'subTpl.html',
        controller: 'resolveOuterTest',
        resolve: {
            loadData: myAppCtrl.loadData, // 两个都加载完了才会返回结果
            preData: myAppCtrl.preData
        }
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

myApp.controller('resolveTest', function ($scope, $q) {
    $scope.model = {
        message: '我是一根葱'
    };
});

let myAppCtrl = myApp.controller('resolveOuterTest', function ($scope, $q) {
    $scope.model = {
        message: '我是一根葱'
    };
});
myAppCtrl.loadData = function ($q, $timeout) {
    let defer = $q.defer();
    $timeout(function () {
        defer.resolve();
    }, 3000);
    return defer.promise;
};
myAppCtrl.preData = function ($q, $timeout) {
    let defer = $q.defer();
    $timeout(function () {
        defer.resolve();
    }, 5000);
    return defer.promise;
};