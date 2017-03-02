var app = angular.module('GifFinder', []);
app.controller('FirstController', function ($scope, $http) {
    var counter = 0
    if (counter == 4) {
       $scope.giftext="We Have a winner!!";
    }
    $scope.gifone = "https://media.giphy.com/media/l3zoKeX8bMG5sMP4s/giphy.gif";
    $scope.giftwo = "http:\/\/media2.giphy.com\/media\/iuHaJ0D7macZq\/giphy.gif";
    $scope.StartBattle = function () {
        var searchterm=$scope.Subject;
        var gifarray = new Array();
        for(var i=0;i<16;i++){
            $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+searchterm + '&rating=pg').
            then(function (response) {
                gifarray.push(response.data.data.image_url);
                console.log(gifarray.length);
            });
        }

        console.log(gifarray.length);
        //$scope.gifone="http://i.imgur.com/frgOnVX.jpg";
        //$scope.giftwo="http://i.imgur.com/frgOnVX.jpg";

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

        $scope.PickOne = function () {
            if (counter != 8) {
                counter++;
                var searchterm=$scope.Subject;
                console.log("You Picked GIF number 1!");
                $scope.giftwo="";
                console.log("Let's delete the loser!");
                if (counter != 8)
                {
                    $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+searchterm + '&rating=pg').
                    then(function (response) {
                        $scope.giftwo=response.data.data.image_url;
                    });
                    console.log("And get a new gif!");
                    console.log(counter)
                }
            }
        };
        $scope.PickTwo = function () {
            if (counter != 8) {
                counter++;
                var searchterm=$scope.Subject;
                console.log("You Picked GIF number 2!");
                $scope.gifone="";
                console.log("Let's delete the loser!");
                if (counter != 8)
                {
                    $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+searchterm + '&rating=pg').
                    then(function (response) {
                        $scope.gifone=response.data.data.image_url;
                    });
                    console.log("And get a new gif!");
                }
            }
        };
    };
});