angular.module("tutorialCtrlModule", [])

.controller("TutorialCtrl", ["$scope", function($scope){
    $scope.tutorialObject = {};
    $scope.tutorialObject.title = "Zmień zawartość pól";
    $scope.tutorialObject.bindOutput = 2 ;
    
    $scope.tutorialObject.firstname = "Franciszek";
    $scope.tutorialObject.lastname = "Milczarski";
    $scope.timesTwo= function(){
        $scope.tutorialObject.bindOutput *=2;
    }
    
}])


.directive("tbWelcomeMessage", function(){
    return {
        restrict: "AE",
        template: "<div>Witaj!</div></br><div>Jaki jest Twój ulubiony kolor?</div>"
    }
})
