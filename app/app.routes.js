angular.module('app')
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home',{
                url:'/home',
                templateUrl:'home/home.html',
                controller: "c"
                }
            });
    });
