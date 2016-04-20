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
    						"Psych Laws"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button10",  "expName" : 
    						"Lucid Dreaming"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button11",  "expName" : 
    						"Mind"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button12",  "expName" : 
    						"Brain"
    					},	    
		    			{
		    				"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button13",  "expName" : 
    						"Trance"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button14",  "expName" : 
    						"Psychdelic Drugs"
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
    						"Soccer"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button2", "expName" : 
    						"Football"
    					},
		   			    {
		   			    	"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button3",  "expName" : 
    						"Cricket"
    					},
		   				{
		   					"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button4",  "expName" : 
    						"Olympics"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button5",  "expName" : 
    						"Handball"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp6.jpg", "cssClass" : "button6",  "expName" : 
    						"Swimming"
    					},    
		    			{
		    				"billBoardImage" : "images/expimgs/exp7.jpg", "cssClass" : "button7",  "expName" : 
    						"Karate"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp8.jpg", "cssClass" : "button8",  "expName" : 
    						"Gymnastics"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp9.jpg", "cssClass" : "button9",  "expName" : 
    						"Baseball"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button10",  "expName" : 
    						"Hockey"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button11",  "expName" : 
    						"Basketball"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button12",  "expName" : 
    						"Rugby"
    					},	    
		    			{
		    				"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button13",  "expName" : 
    						"NFL"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button14",  "expName" : 
    						"Match Fixing"
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
    						"Loan"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button11",  "expName" : 
    						"Plagiarism"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button12",  "expName" : 
    						"High Costs"
    					},	    
		    			{
		    				"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button13",  "expName" : 
    						"Fees"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button14",  "expName" : 
    						"Private Schools"
    					}
    				]
    		},
    	{
       		"cat4" : [
    					{
    						"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button1", "expName" : 
    						"affidavit"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button2", "expName" : 
    						"Criminal Case"
    					},
		   			    {
		   			    	"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button3",  "expName" : 
    						"Civil Rights"
    					},
		   				{
		   					"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button4",  "expName" : 
    						"Lawyers"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button5",  "expName" : 
    						"Adjournment"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp6.jpg", "cssClass" : "button6",  "expName" : 
    						"Courts"
    					},    
		    			{
		    				"billBoardImage" : "images/expimgs/exp7.jpg", "cssClass" : "button7",  "expName" : 
    						"Parliament"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp8.jpg", "cssClass" : "button8",  "expName" : 
    						"Secularism"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp9.jpg", "cssClass" : "button9",  "expName" : 
    						"Judges"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button10",  "expName" : 
    						"State Laws"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button11",  "expName" : 
    						"National Laws"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button12",  "expName" : 
    						"Divorce"
    					},	    
		    			{
		    				"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button13",  "expName" : 
    						"Contempt"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button14",  "expName" : 
    						"Contract"
    					}
    				]
    		},
    	{
       		"cat5" : [
    					{
    						"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button1", "expName" : 
    						"Mobiles"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button2", "expName" : 
    						"Laptops"
    					},
		   			    {
		   			    	"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button3",  "expName" : 
    						"Touch Devices"
    					},
		   				{
		   					"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button4",  "expName" : 
    						"Apple"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button5",  "expName" : 
    						"Google"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp6.jpg", "cssClass" : "button6",  "expName" : 
    						"Search"
    					},    
		    			{
		    				"billBoardImage" : "images/expimgs/exp7.jpg", "cssClass" : "button7",  "expName" : 
    						"Algorithms"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp8.jpg", "cssClass" : "button8",  "expName" : 
    						"Software"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp9.jpg", "cssClass" : "button9",  "expName" : 
    						"Hardware"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button10",  "expName" : 
    						"Tablets"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button11",  "expName" : 
    						"Smartphones"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button12",  "expName" : 
    						"Tesla"
    					},	    
		    			{
		    				"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button13",  "expName" : 
    						"Cars"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button14",  "expName" : 
    						"FutureTech"
    					}
    				]
    		},
    	{
       		"cat6" : [
    					{
    						"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button1", "expName" : 
    						"Insurance"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button2", "expName" : 
    						"Emergency"
    					},
		   			    {
		   			    	"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button3",  "expName" : 
    						"Hospital"
    					},
		   				{
		   					"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button4",  "expName" : 
    						"Clinic"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button5",  "expName" : 
    						"Pediatrics"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp6.jpg", "cssClass" : "button6",  "expName" : 
    						"Pet Care"
    					},    
		    			{
		    				"billBoardImage" : "images/expimgs/exp7.jpg", "cssClass" : "button7",  "expName" : 
    						"Family Care"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp8.jpg", "cssClass" : "button8",  "expName" : 
    						"X-Ray"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp9.jpg", "cssClass" : "button9",  "expName" : 
    						"Dental"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button10",  "expName" : 
    						"Admin"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button11",  "expName" : 
    						"Malaria"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button12",  "expName" : 
    						"Drugs"
    					},	    
		    			{
		    				"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button13",  "expName" : 
    						"Addiction"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button14",  "expName" : 
    						"Rehab"
    					}
    				]
    		},
    	{
       		"cat7" : [
    					{
    						"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button1", "expName" : 
    						"Renewable"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button2", "expName" : 
    						"Fossils "
    					},
		   			    {
		   			    	"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button3",  "expName" : 
    						"Global Warming"
    					},
		   				{
		   					"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button4",  "expName" : 
    						"Ecosystem"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button5",  "expName" : 
    						"Solar"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp6.jpg", "cssClass" : "button6",  "expName" : 
    						"Pollution"
    					},    
		    			{
		    				"billBoardImage" : "images/expimgs/exp7.jpg", "cssClass" : "button7",  "expName" : 
    						"Oil Spills"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp8.jpg", "cssClass" : "button8",  "expName" : 
    						"Evaporation"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp9.jpg", "cssClass" : "button9",  "expName" : 
    						"Fuselage"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button10",  "expName" : 
    						"Wastage"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button11",  "expName" : 
    						"Oceans"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button12",  "expName" : 
    						"Species"
    					},	    
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button13",  "expName" : 
    						"Water"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button14",  "expName" : 
    						"Gases"
    					}
    				]
    		},
    	{
       		"cat8" : [
    					{
    						"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button1", "expName" : 
    						"Corruption"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button2", "expName" : 
    						"President"
    					},
		   			    {
		   			    	"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button3",  "expName" : 
    						"Democracy"
    					},
		   				{
		   					"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button4",  "expName" : 
    						"Republican"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button5",  "expName" : 
    						"Union"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp6.jpg", "cssClass" : "button6",  "expName" : 
    						"State"
    					},    
		    			{
		    				"billBoardImage" : "images/expimgs/exp7.jpg", "cssClass" : "button7",  "expName" : 
    						"Freedom"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp8.jpg", "cssClass" : "button8",  "expName" : 
    						"Racism"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp9.jpg", "cssClass" : "button9",  "expName" : 
    						"1757"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button10",  "expName" : 
    						"Vote"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button11",  "expName" : 
    						"Election"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button12",  "expName" : 
    						"Aristocrats"
    					},	    
		    			{
		    				"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button13",  "expName" : 
    						"Money"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button14",  "expName" : 
    						"Bribery"
    					}
    				]
    		},
    		    	{
       		"cat9" : [
    					{
    						"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button1", "expName" : 
    						"English"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button2", "expName" : 
    						"Chemistry"
    					},
		   			    {
		   			    	"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button3",  "expName" : 
    						"Geography"
    					},
		   				{
		   					"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button4",  "expName" : 
    						"AI"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button5",  "expName" : 
    						"Music"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp6.jpg", "cssClass" : "button6",  "expName" : 
    						"History"
    					},    
		    			{
		    				"billBoardImage" : "images/expimgs/exp7.jpg", "cssClass" : "button7",  "expName" : 
    						"Civics"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp8.jpg", "cssClass" : "button8",  "expName" : 
    						"Biology"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp9.jpg", "cssClass" : "button9",  "expName" : 
    						"Nuclear Science"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp5.jpg", "cssClass" : "button10",  "expName" : 
    						"Physics"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp1.jpg", "cssClass" : "button11",  "expName" : 
    						"Middle School"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp2.jpg", "cssClass" : "button12",  "expName" : 
    						"Arts"
    					},	    
		    			{
		    				"billBoardImage" : "images/expimgs/exp3.jpg", "cssClass" : "button13",  "expName" : 
    						"Media"
    					},
		    			{
		    				"billBoardImage" : "images/expimgs/exp4.jpg", "cssClass" : "button14",  "expName" : 
    						"Science"
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

