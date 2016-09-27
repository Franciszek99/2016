var app = angular.module('tutorialApp', ["ngRoute", "tutorialCtrlModule"]);

app.config(function($routeProvider){
    $routeProvider
    
    .when("/", {
        templateUrl: "views/tut.html"
    })
})