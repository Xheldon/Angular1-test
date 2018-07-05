import 'angular';
import '@uirouter/angularjs';
let app = angular.module('app', ['ui.router', 'indexModule', 'aboutModule']);
// views
import index from './views/index.ejs';
import about from './views/about.ejs';

// controllers/directives/ect
import './entries/index.js';
import './entries/about.js';

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) { // 依赖注入, 压缩后会报错, 所以写成数组形式
    $urlRouterProvider.when('', '/index'); // 默认跳转到 index
    $stateProvider
        .state('/index', {
            name: 'index',
            url: '/index',
            template: index
        })
        .state('/about', {
            name: 'about',
            url: '/about',
            template: about
        });
}]);