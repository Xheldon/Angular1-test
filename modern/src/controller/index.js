import angular from 'angular';
import '../directive/button.js';
angular.module('indexModule', ['buttonDirective']).controller('indexCtrl', ['$scope', function (s) {
    s.message = '我是一个首页, 科科';
    s.list = [{
        name: '张三',
        age: '22'
    }, {
        name: '李四',
        age: '33'
    }, {
        name: '王五',
        age: '44'
    }];
}]);