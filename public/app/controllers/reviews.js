app.controller('reviewsController',function($scope,$http, API_URL){

    $http({
        method : "POST",
        url: API_URL
    }).then(function (response){
        $scope.reviews = response.data.reviews;        
        console.log(response);
    }, function(error){
        console.log(error);
    });


    //show 


});
