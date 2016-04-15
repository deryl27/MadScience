/**
 * Created by rahul on 3/3/16.
 */


madscienceapp.controller('madScienceController', function($rootScope, $scope, $location, $anchorScroll) {

    console.log("In madScienceContoller Controller");
       
    	/*
			This variable only holds values being displayed on front building windows.
    	*/

    $scope.experimentWindows = [
    					{
    						"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button1", "expName" : 
    						"Personality"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button2", "expName" : 
    						"Unconscious"
    					},
		   			    {
		   			    	"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button3",  "expName" : 
    						"Ego"
    					},
		   				{
		   					"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button4",  "expName" : 
    						"Superego"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button5",  "expName" : 
    						"Defense Mechanisms"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp6.jpg", "cssClass" : "button6",  "expName" : 
    						"Archetype"
    					},    
		    			{
		    				"billBoardImage" : "images/expimgs/exp7.jpg", "cssClass" : "button7",  "expName" : 
    						"Trait"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp8.jpg", "cssClass" : "button8",  "expName" : 
    						"Behaviorism"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp9.jpg", "cssClass" : "button9",  "expName" : 
    						"Pschy 1"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button10",  "expName" : 
    						"Pschy 2"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button11",  "expName" : 
    						"Pschy 3"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button12",  "expName" : 
    						"Pschy 4"
    					},	    
		    			{
		    				"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button13",  "expName" : 
    						"Pschy 5"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button14",  "expName" : 
    						"Pschy 6"
    					}
    				];

  
    /*
		Mock Data for experiments in different categories.
    */
    $scope.categories = 
    [
       	{
       		"cat1" : [
    					{
    						"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button1", "expName" : 
    						"Personality"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button2", "expName" : 
    						"Unconscious"
    					},
		   			    {
		   			    	"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button3",  "expName" : 
    						"Ego"
    					},
		   				{
		   					"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button4",  "expName" : 
    						"Superego"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button5",  "expName" : 
    						"Defense Mechanisms"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp6.jpg", "cssClass" : "button6",  "expName" : 
    						"Archetype"
    					},    
		    			{
		    				"billBoardImage" : "images/expimgs/exp7.jpg", "cssClass" : "button7",  "expName" : 
    						"Trait"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp8.jpg", "cssClass" : "button8",  "expName" : 
    						"Behaviorism"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp9.jpg", "cssClass" : "button9",  "expName" : 
    						"Pschy 1"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button10",  "expName" : 
    						"Pschy 2"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button11",  "expName" : 
    						"Pschy 3"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button12",  "expName" : 
    						"Pschy 4"
    					},	    
		    			{
		    				"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button13",  "expName" : 
    						"Pschy 5"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button14",  "expName" : 
    						"Pschy 6"
    					}
    				]
    		},
    		{
       		"cat2" : [
    					{
    						"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button1", "expName" : 
    						"Sports 1"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button2", "expName" : 
    						"Sports 2"
    					},
		   			    {
		   			    	"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button3",  "expName" : 
    						"Sports 3"
    					},
		   				{
		   					"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button4",  "expName" : 
    						"Sports 4"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button5",  "expName" : 
    						"Sports 5"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp6.jpg", "cssClass" : "button6",  "expName" : 
    						"Sports 6"
    					},    
		    			{
		    				"billBoardImage" : "images/expimgs/exp7.jpg", "cssClass" : "button7",  "expName" : 
    						"Sports 7"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp8.jpg", "cssClass" : "button8",  "expName" : 
    						"Sports 8"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp9.jpg", "cssClass" : "button9",  "expName" : 
    						"Sports 9"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button10",  "expName" : 
    						"Sports 10"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button11",  "expName" : 
    						"Sports 11"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button12",  "expName" : 
    						"Sports 12"
    					},	    
		    			{
		    				"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button13",  "expName" : 
    						"Sports 13"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button14",  "expName" : 
    						"Sports 14"
    					}
    				]
    		},
    	{
       		"cat3" : [
    					{
    						"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button1", "expName" : 
    						"Nursery"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button2", "expName" : 
    						"Primary"
    					},
		   			    {
		   			    	"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button3",  "expName" : 
    						"High School"
    					},
		   				{
		   					"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button4",  "expName" : 
    						"Middle School"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button5",  "expName" : 
    						"SATs"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp6.jpg", "cssClass" : "button6",  "expName" : 
    						"GRE"
    					},    
		    			{
		    				"billBoardImage" : "images/expimgs/exp7.jpg", "cssClass" : "button7",  "expName" : 
    						"Masters"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp8.jpg", "cssClass" : "button8",  "expName" : 
    						"Government Schools"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp9.jpg", "cssClass" : "button9",  "expName" : 
    						"Private Schools"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button10",  "expName" : 
    						"School 1"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button11",  "expName" : 
    						"School 2"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button12",  "expName" : 
    						"School 3"
    					},	    
		    			{
		    				"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button13",  "expName" : 
    						"School 4"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button14",  "expName" : 
    						"School 6"
    					}
    				]
    		},
    	{
       		"cat4" : [
    					{
    						"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button1", "expName" : 
    						"Law 1"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button2", "expName" : 
    						"Law 2"
    					},
		   			    {
		   			    	"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button3",  "expName" : 
    						"Law 3"
    					},
		   				{
		   					"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button4",  "expName" : 
    						"Law 4"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button5",  "expName" : 
    						"Law 5"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp6.jpg", "cssClass" : "button6",  "expName" : 
    						"Law 6"
    					},    
		    			{
		    				"billBoardImage" : "images/expimgs/exp7.jpg", "cssClass" : "button7",  "expName" : 
    						"Law 7"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp8.jpg", "cssClass" : "button8",  "expName" : 
    						"Law 8"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp9.jpg", "cssClass" : "button9",  "expName" : 
    						"Law 9"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button10",  "expName" : 
    						"Law 10"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button11",  "expName" : 
    						"Law 11"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button12",  "expName" : 
    						"Law 12"
    					},	    
		    			{
		    				"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button13",  "expName" : 
    						"Law 13"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button14",  "expName" : 
    						"Law 14"
    					}
    				]
    		},
    	{
       		"cat5" : [
    					{
    						"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button1", "expName" : 
    						"Tech 1"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button2", "expName" : 
    						"Tech 2"
    					},
		   			    {
		   			    	"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button3",  "expName" : 
    						"Tech 3"
    					},
		   				{
		   					"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button4",  "expName" : 
    						"Tech 4"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button5",  "expName" : 
    						"Tech 5"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp6.jpg", "cssClass" : "button6",  "expName" : 
    						"Tech 6"
    					},    
		    			{
		    				"billBoardImage" : "images/expimgs/exp7.jpg", "cssClass" : "button7",  "expName" : 
    						"Tech 7"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp8.jpg", "cssClass" : "button8",  "expName" : 
    						"Tech 8"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp9.jpg", "cssClass" : "button9",  "expName" : 
    						"Tech 9"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button10",  "expName" : 
    						"Tech 10"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button11",  "expName" : 
    						"Tech 11"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button12",  "expName" : 
    						"Tech 12"
    					},	    
		    			{
		    				"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button13",  "expName" : 
    						"Tech 13"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button14",  "expName" : 
    						"Tech 14"
    					}
    				]
    		},
    	{
       		"cat6" : [
    					{
    						"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button1", "expName" : 
    						"Health 1"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button2", "expName" : 
    						"Health 2"
    					},
		   			    {
		   			    	"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button3",  "expName" : 
    						"Health 3"
    					},
		   				{
		   					"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button4",  "expName" : 
    						"Health 4"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button5",  "expName" : 
    						"Health 5"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp6.jpg", "cssClass" : "button6",  "expName" : 
    						"Health 6"
    					},    
		    			{
		    				"billBoardImage" : "images/expimgs/exp7.jpg", "cssClass" : "button7",  "expName" : 
    						"Health 7"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp8.jpg", "cssClass" : "button8",  "expName" : 
    						"Health 8"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp9.jpg", "cssClass" : "button9",  "expName" : 
    						"Health 9"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button10",  "expName" : 
    						"Health 10"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button11",  "expName" : 
    						"Health 11"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button12",  "expName" : 
    						"Health 12"
    					},	    
		    			{
		    				"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button13",  "expName" : 
    						"Health 13"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button14",  "expName" : 
    						"Health 14"
    					}
    				]
    		},
    	{
       		"cat7" : [
    					{
    						"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button1", "expName" : 
    						"Env 1"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button2", "expName" : 
    						"Env 2"
    					},
		   			    {
		   			    	"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button3",  "expName" : 
    						"Env 3"
    					},
		   				{
		   					"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button4",  "expName" : 
    						"Env 4"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button5",  "expName" : 
    						"Env 5"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp6.jpg", "cssClass" : "button6",  "expName" : 
    						"Env 6"
    					},    
		    			{
		    				"billBoardImage" : "images/expimgs/exp7.jpg", "cssClass" : "button7",  "expName" : 
    						"Env 7"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp8.jpg", "cssClass" : "button8",  "expName" : 
    						"Env 8"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp9.jpg", "cssClass" : "button9",  "expName" : 
    						"Env 9"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button10",  "expName" : 
    						"Env 10"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button11",  "expName" : 
    						"Env 11"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button12",  "expName" : 
    						"Env 12"
    					},	    
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button13",  "expName" : 
    						"Env 13"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button14",  "expName" : 
    						"Env 14"
    					}
    				]
    		},
    	{
       		"cat8" : [
    					{
    						"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button1", "expName" : 
    						"Politics 1"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button2", "expName" : 
    						"Politics 2"
    					},
		   			    {
		   			    	"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button3",  "expName" : 
    						"Politics 3"
    					},
		   				{
		   					"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button4",  "expName" : 
    						"Politics 4"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button5",  "expName" : 
    						"Politics 5"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp6.jpg", "cssClass" : "button6",  "expName" : 
    						"Politics 6"
    					},    
		    			{
		    				"billBoardImage" : "images/expimgs/exp7.jpg", "cssClass" : "button7",  "expName" : 
    						"Politics 7"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp8.jpg", "cssClass" : "button8",  "expName" : 
    						"Politics 8"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp9.jpg", "cssClass" : "button9",  "expName" : 
    						"Politics 9"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button10",  "expName" : 
    						"Politics 10"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button11",  "expName" : 
    						"Politics 11"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button12",  "expName" : 
    						"Politics 12"
    					},	    
		    			{
		    				"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button13",  "expName" : 
    						"Politics 13"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button14",  "expName" : 
    						"Politics 14"
    					}
    				]
    		},
    		    	{
       		"cat9" : [
    					{
    						"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button1", "expName" : 
    						"Education 1"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button2", "expName" : 
    						"Education 2"
    					},
		   			    {
		   			    	"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button3",  "expName" : 
    						"Education 3"
    					},
		   				{
		   					"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button4",  "expName" : 
    						"Education 4"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button5",  "expName" : 
    						"Education 5"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp6.jpg", "cssClass" : "button6",  "expName" : 
    						"Education 6"
    					},    
		    			{
		    				"billBoardImage" : "images/expimgs/exp7.jpg", "cssClass" : "button7",  "expName" : 
    						"Education 7"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp8.jpg", "cssClass" : "button8",  "expName" : 
    						"Education 8"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp9.jpg", "cssClass" : "button9",  "expName" : 
    						"Education 9"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button10",  "expName" : 
    						"Education 10"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button11",  "expName" : 
    						"Education 11"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button12",  "expName" : 
    						"Education 12"
    					},	    
		    			{
		    				"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button13",  "expName" : 
    						"Education 13"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button14",  "expName" : 
    						"Education 14"
    					}
    				]
    		}
    ]

    //Set Background
    $rootScope.viewBackground = "background-madWorldPage";    	
	
	//Display Game Tab when Page loads
	$scope.tabModel = "Filter";
	
	// Display Psychology(Category 1) Experiments(Game) on page load.
	$('#cat1').attr("checked", true);

    // On Click of any window. Load the BillBoard with that experiment Image.
    $scope.displayExperimentData = function(experiment) {
        	console.log("Inside experiment Tab");

        	//Hide label
        	$('#HelloWorldId').hide();
        	//Go To the Experiment Tab
        	var openedTab = $scope.tabModel;
        	if (openedTab === "Filter") {
        		$scope.tabModel = "Game";
        	}
        	$scope.experimentContent = experiment.billBoardImage;
    }


    /*


	Following 9 functions are for when one of them in clicked in the view.

    */

		    $scope.displayCat2Buttons = function() {
		    	console.log("Inside displayCat2Buttons()");
		    	
		    	$scope.categories[1].cat2.forEach(function (value, i) {
		   			 //console.log('%d: %s', i, value.gameName);
		   			 $scope.experimentWindows[i] = value;
				});
				console.log("Done");
		    }
		    $scope.displayCat1Buttons = function() {
		    	console.log("Inside displayCat1Buttons()");
		    	
		    	$scope.categories[0].cat1.forEach(function (value, i) {
		   			 //console.log('%d: %s', i, value.gameName);
		   			 $scope.experimentWindows[i] = value;
				});
				console.log("Done");
		    }
		    $scope.displayCat3Buttons = function() {
		    	console.log("Inside displayCat3Buttons()");
		    	
		    	$scope.categories[2].cat3.forEach(function (value, i) {
		   			 //console.log('%d: %s', i, value.gameName);
		   			 $scope.experimentWindows[i] = value;
				});
				console.log("Done");
		    }
		   	$scope.displayCat4Buttons = function() {
		    	console.log("Inside displayCat4Buttons()");
		    	
		    	$scope.categories[3].cat4.forEach(function (value, i) {
		   			 //console.log('%d: %s', i, value.gameName);
		   			 $scope.experimentWindows[i] = value;
				});
				console.log("Done");
		    }
		    $scope.displayCat5Buttons = function() {
		    	console.log("Inside displayCat5Buttons()");
		    	
		    	$scope.categories[4].cat5.forEach(function (value, i) {
		   			 //console.log('%d: %s', i, value.gameName);
		   			 $scope.experimentWindows[i] = value;
				});
				console.log("Done");
		    }
		    $scope.displayCat6Buttons = function() {
		    	console.log("Inside displayCat6Buttons()");
		    	
		    	$scope.categories[5].cat6.forEach(function (value, i) {
		   			 //console.log('%d: %s', i, value.gameName);
		   			 $scope.experimentWindows[i] = value;
				});
				console.log("Done");
		    }
		    $scope.displayCat7Buttons = function() {
		    	console.log("Inside displayCat7Buttons()");
		    	
		    	$scope.categories[6].cat7.forEach(function (value, i) {
		   			 //console.log('%d: %s', i, value.gameName);
		   			 $scope.experimentWindows[i] = value;
				});
				console.log("Done");
		    }
		    $scope.displayCat8Buttons = function() {
		    	console.log("Inside displayCat8Buttons()");
		    	
		    	$scope.categories[7].cat8.forEach(function (value, i) {
		   			 //console.log('%d: %s', i, value.gameName);
		   			 $scope.experimentWindows[i] = value;
				});
				console.log("Done");
		    }
		    $scope.displayCat9Buttons = function() {
		    	console.log("Inside displayCat9Buttons()");
		    	
		    	$scope.categories[8].cat9.forEach(function (value, i) {
		   			 //console.log('%d: %s', i, value.gameName);
		   			 $scope.experimentWindows[i] = value;
				});
				console.log("Done");
		    }

});

