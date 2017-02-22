var app = angular.module('GifFinder', []);
app.controller('FirstController', function ($scope, $http) {
    $scope.gifone = "https://media.giphy.com/media/l3zoKeX8bMG5sMP4s/giphy.gif";
    $scope.giftwo = "http:\/\/media2.giphy.com\/media\/iuHaJ0D7macZq\/giphy.gif";
    $scope.StartBattle = function () {
        var searchterm=$scope.Subject;
        console.log(searchterm);
        $http.get('http://api.giphy.com/v1/gifs/search?q='+searchterm+'&api_key=dc6zaTOxFJmzC').
        then(function (response) {
            var i=1;
            console.log(response.data.data[i].images.original.url);
            $scope.gifone=response.data.data[i].images.original.url;
        });        
    };
});