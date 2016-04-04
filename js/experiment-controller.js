madscienceapp.controller('ExperimentController', function($scope, $location, $anchorScroll) {
    $scope.pageClass = 'page-experiment';

    $scope.isReply = true;
    $scope.showCommentError = false;
    $scope.showCommentMainError = false;

   

    
      var json = {
        "comments" : [
        { 
          "id" : "1",
          "name":"John", 
          "datetime":"Sat Apr 02 2016 14:27:09 GMT-0400", 
          "comment" : "Hello How is Life ",
          "replies" :
          [ 
            {
              "name" : "Deryl",
              "datetime":"Sat Apr 02 2016 14:27:09 GMT-0400",
              "comment" : "Hey how are you"
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
          "replies" :
          [ 
            {
              "name" : "Rod",
              "datetime":"Sat Apr 02 2016 14:27:09 GMT-0400",
              "comment" : "Hey how are you"
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
                     // console.log(item.id); 
                     if(item.id === comment)
                     {
                       // console.log("item.replies" , item.replies);
                       item.replies.push({"name" : "Test" , "datetime" : datetime, "comment" : commentArea});

                       // console.log("item.replies" , item.replies);
                     } 
               });

      }
      else {
        $scope.showCommentError = true;
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