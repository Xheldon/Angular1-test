let myApp = angular.module('myApp', []);
myApp.factory('Data', function () {
    return {
        message: 'data 来自 service'
    }
});

// 据我所知所有的 Provider 都使用了依赖注入, 即不关心函数参数的位置而之关系函数参数的名字, 根据名字去寻找相关依赖

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

myApp.controller('listCtrl', function (list, $scope) { // 使用依赖注入, 参数名必须已经定义或者内置, 参数位置没有要求
    $scope.list = list;
});

function FirstCtrl ($scope, Data) {
    $scope.data = Data;
}

function SecondCtrl ($scope, Data) {
    $scope.data = Data;
    $scope.reverseMsg = function (message) {
        return message.split('').reverse().join('');
    }
}

myApp.directive('enter', function () {
    return function (s, e, attr) {
        e.bind('mouseenter', function () {
            e.addClass(attr.enter);
        });
    }
});
myApp.directive('leave', function () {
    return function (scope, e, attr) { // 没有使用依赖注入, 参数名随便取,
        e.bind('mouseleave', function () {
            e.removeClass(attr.enter);
        });
    }
});

myApp.directive('superhero', function () {
    return {
        restrict: 'E',
        scope: {},
        controller: function ($scope) { // 使用依赖注入, 参数名固定
            $scope.abilities = [];
            this.addPower = function () {
                $scope.abilities.push('power');
            };
            this.addFlash = function () {
                $scope.abilities.push('flash');
            };
            this.addStrength = function () {
                $scope.abilities.push('strength');
            };
        },
        link: function (s, ele) { // 没有使用依赖注入, 参数名随便取,
            ele.bind('mouseenter', function () {
                console.log(s.abilities);
            });
        }
    }
});

myApp.directive('power', function () {
    return {
        restrict: 'A',
        require: 'superhero',
        link: function ($scope, ele, attr, superhero) {
            superhero.addPower();
        }
    }
});
myApp.directive('flash', function () {
    return {
        restrict: 'A',
        require: 'superhero',
        link: function ($scope, ele, attr, superhero) {
            superhero.addFlash();
        }
    }
});
myApp.directive('strength', function () {
    return {
        restrict: 'A',
        require: 'superhero',
        link: function ($scope, ele, attr, superhero) {
            superhero.addStrength();
        }
    }
});

myApp.controller('doJob', function ($scope) {
    $scope.do = function (job) {
        alert(job + '做完啦~');
    }
});

myApp.directive('kid', function () {
    return {
        restrict: 'E',
        scope: {
            done: '&'
        },
        template: '<input type="text" ng-model="wtf">' +
        '{{wtf}}' +
        '<div class="button" ng-click="done({job: wtf})">搞定</div>' /*这个done的参数必须传对象, 对象的键为函数的参数名字*/
    }
});








