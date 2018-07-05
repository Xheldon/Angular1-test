import angular from 'angular';

angular.module('aboutModule',[]).controller('aboutCtrl', ['$scope', function (s) {
    s.message = '我是一个关于页面, 科科';
    s.obj = {
        company: '好日子公司',
        location: '十七号城市'
    }
}]);