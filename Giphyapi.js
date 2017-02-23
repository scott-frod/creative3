var app = angular.module('GifFinder', []);
app.controller('FirstController', function ($scope, $http) {
    $scope.gifone = "https://media.giphy.com/media/l3zoKeX8bMG5sMP4s/giphy.gif";
    $scope.giftwo = "http:\/\/media2.giphy.com\/media\/iuHaJ0D7macZq\/giphy.gif";
    $scope.StartBattle = function () {
        var searchterm=$scope.Subject;
//        for(var i=0;i<16;i++){
//            $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+searchterm + '&rating=pg').
//            then(function (response) {
//                $scope.gifone=response.data.data.image_url;
//            });
//            
//        }
        $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+searchterm + '&rating=pg').
        then(function (response) {
            console.log(response.data.data.image_mp4_url);
            $scope.gifone=response.data.data.image_url;
        });
        $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + searchterm +'&rating=pg').
        then(function (response) {
            console.log(response.data.data.image_mp4_url);
            $scope.giftwo=response.data.data.image_url;
        });        
    };
    
    $scope.PickOne = function () {
        console.log("You Picked GIF number 1!");
    };
    $scope.PickTwo = function () {
        console.log("You Picked GIF number 2!");
    };
});