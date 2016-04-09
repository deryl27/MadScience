madscienceapp.controller('ExperimentController', function($scope, $location, $anchorScroll, $rootScope) {
    $scope.pageClass = 'page-experiment';

    $scope.isReply = true;
    $scope.showCommentError = false;
    $scope.showCommentMainError = false;

    console.log('$scope.currentUser' , $scope.currentUser);

    console.log('rootscope' , $rootScope.currentUser);

      var json = {
        "comments" : [
        { 
          "id" : "1",
          "name":"John", 
          "datetime":"Sat Apr 02 2016 14:27:09 GMT-0400", 
          "comment" : "Hello How is Life ",
          "image": 'images/team3.jpg',
          "replies" :
          [ 
            {
              "name" : "Deryl",
              "datetime":"Sat Apr 02 2016 14:27:09 GMT-0400",
              "comment" : "Hey how are you",
              "image": 'images/team1.jpg',
            },

            {
              "name" : "Jibin",
              "datetime":"Sat Apr 02 2016 14:27:09 GMT-0400",
              "comment" : "All is well"
            }

          ]
        }, 
        
         { 
          "id" : "2",
          "name":"Anna", 
          "datetime":"Sat Apr 02 2016 14:27:09 GMT-0400", 
          "comment" : "Hello How is Life ",
          "image": 'images/team4.jpg',
          "replies" :
          [ 
            {
              "name" : "Deryl",
              "datetime":"Sat Apr 02 2016 14:27:09 GMT-0400",
              "comment" : "Hey how are you",
              "image": 'images/team1.jpg',
            },

            {
              "name" : "Jack",
              "datetime":"Sat Apr 02 2016 14:27:09 GMT-0400",
              "comment" : "All is well"
            }

          ]
        }, 
      ]
    };

    $scope.commentData = json;

    $scope.commentSend = function(comment , commentArea) {
      console.log("commentare " , commentArea);
      if(typeof commentArea != 'undefined' && commentArea != '') {
        $scope.showCommentError = false;
        console.log("comment" , new Date());

        // console.log("json" + json.comments);

        var currentdate = new Date(); 
        var datetime =  currentdate.getDate() + "-"
                  + (currentdate.getMonth()+1)  + "-" 
                  + currentdate.getFullYear() + "  "  
                  + currentdate.getHours() + ":"  
                  + currentdate.getMinutes() + ":" 

        angular.forEach($scope.commentData.comments, function(item){
                    console.log(item.id + " adasdasdasd   " + comment); 

                     if(item.id === comment)
                     {
                       item.replies.push({"name" : "Test" , "datetime" : datetime, "comment" : commentArea});
                     } 
               });

      }
      else {

        $scope.showCommentError = true;
        console.log("Show Comment Error" , $scope.showCommentError);
      }

    }

    $scope.commentMainSend = function (commentMainArea)
    {
       if(typeof commentMainArea != 'undefined' && commentMainArea != '') {
        $scope.showCommentMainError = false;
     
        var currentdate = new Date(); 
        var datetime =  currentdate.getDate() + "-"
                  + (currentdate.getMonth()+1)  + "-" 
                  + currentdate.getFullYear() + "  "  
                  + currentdate.getHours() + ":"  
                  + currentdate.getMinutes() + ":" ;

        $scope.commentData.comments.push({
          "id" : $scope.commentData.length + 1,
          "name":"Test", 
          "datetime":"Sat Apr 02 2016 14:27:09 GMT-0400", 
          "comment" : commentMainArea,
          "replies" : []
        });          

      }
      else {
        $scope.showCommentMainError = true;
      }

    }
    
   
    $scope.scrollTo = function(id) {
      $location.hash(id);
      console.log($location.hash());
      $anchorScroll();
    };
  


});