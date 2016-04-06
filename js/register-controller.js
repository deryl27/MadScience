madscienceapp.controller('registerController', function($scope, $location,$sce) {
    $scope.pageClass = 'page-register';

    $scope.personalDetails = true;
    $scope.demographicDetails = false;
    $scope.interestDetails = false;

    $scope.roles = [
    {
      url: 'images/nature.jpeg',
      name: 'Nature'
    },
    {
      url: 'images/pyschology.jpg',
      name: 'Psychology'
    },
    {
      url: '../images/sports.jpg',
      name: 'Sports'
    },
    {
      url: '../images/art.jpg',
      name: 'Art'
    },
    {
      url: '../images/madscience.jpg',
      name: 'Mad Science'
    }];
    
    $scope.gameplayed = ['Not very often','Often'];
    $scope.games = ['Board Games', 'Card Games', 'Platformers', 'Shooters'];

    $scope.today = function() {
    $scope.dt = new Date();
    };
  $scope.today();

    $scope.user = {
     //  userName: 'deryl',
     //  email: 'deryl1234@gmail.com',
     //  confirmemail: 'deryl1234@gmail.com',
     //  userPassword: '12345678',
     //  userConfirmPassword: '12345678',
     //  birthday: $scope.dt,
    	// interest: {'Biology' : true,'Computer Science' : true},
    	// game: [],
     //  emailSetting: 'single',
     //  nationality: 'India',
     //  country: 'China',
  
      gender: 'Male',

    };

    $scope.countries =[
'Afghanistan',
'Aland Islands',
'Albania',
'Algeria',
'American Samoa',
'Andorra',
'Angola',
'Anguilla',
'Antarctica',
'Antigua and Barbuda',
'Argentina',
'Armenia',
'Aruba',
'Australia',
'Austria',
'Azerbaijan',
'Bahamas',
'Bahrain',
'Bangladesh',
'Barbados',
'Belarus',
'Belgium',
'Belize',
'Benin',
'Bermuda',
'Bhutan',
'"Bolivia, Plurinational State of"',
'"Bonaire, Sint Eustatius and Saba"',
'Bosnia and Herzegovina',
'Botswana',
'Bouvet Island',
'Brazil',
'British Indian Ocean Territory',
'Brunei Darussalam',
'Bulgaria',
'Burkina Faso',
'Burundi',
'Cambodia',
'Cameroon',
'Canada',
'Cape Verde',
'Cayman Islands',
'Central African Republic',
'Chad',
'Chile',
'China',
'Christmas Island',
'Cocos (Keeling) Islands',
'Colombia',
'Comoros',
'Congo',
'"Congo, the Democratic Republic of the"',
'Cook Islands',
'Costa Rica',
//'//Côte d'Ivoire',
'Croatia',
'Cuba',
'Curaçao',
'Cyprus',
'Czech Republic',
'Denmark',
'Djibouti',
'Dominica',
'Dominican Republic',
'Ecuador',
'Egypt',
'El Salvador',
'Equatorial Guinea',
'Eritrea',
'Estonia',
'Ethiopia',
'Falkland Islands (Malvinas)',
'Faroe Islands',
'Fiji',
'Finland',
'France',
'French Guiana',
'French Polynesia',
'French Southern Territories',
'Gabon',
'Gambia',
'Georgia',
'Germany',
'Ghana',
'Gibraltar',
'Greece',
'Greenland',
'Grenada',
'Guadeloupe',
'Guam',
'Guatemala',
'Guernsey',
'Guinea',
'Guinea-Bissau',
'Guyana',
'Haiti',
'Heard Island and McDonald Islands',
'Holy See (Vatican City State)',
'Honduras',
'Hong Kong',
'Hungary',
'Iceland',
'India',
'Indonesia',
'"Iran, Islamic Republic of"',
'Iraq',
'Ireland',
'Isle of Man',
'Israel',
'Italy',
'Jamaica',
'Japan',
'Jersey',
'Jordan',
'Kazakhstan',
'Kenya',
'Kiribati',
//'"Korea, Democratic People's Republic of"',
'"Korea, Republic of"',
'Kuwait',
'Kyrgyzstan',
//'Lao People's Democratic Republic',
'Latvia',
'Lebanon',
'Lesotho',
'Liberia',
'Libya',
'Liechtenstein',
'Lithuania',
'Luxembourg',
'Macao',
'"Macedonia, the Former Yugoslav Republic of"',
'Madagascar',
'Malawi',
'Malaysia',
'Maldives',
'Mali',
'Malta',
'Marshall Islands',
'Martinique',
'Mauritania',
'Mauritius',
'Mayotte',
'Mexico',
'"Micronesia, Federated States of"',
'"Moldova, Republic of"',
'Monaco',
'Mongolia',
'Montenegro',
'Montserrat',
'Morocco',
'Mozambique',
'Myanmar',
'Namibia',
'Nauru',
'Nepal',
'Netherlands',
'New Caledonia',
'New Zealand',
'Nicaragua',
'Niger',
'Nigeria',
'Niue',
'Norfolk Island',
'Northern Mariana Islands',
'Norway',
'Oman',
'Pakistan',
'Palau',
'"Palestine, State of"',
'Panama',
'Papua New Guinea',
'Paraguay',
'Peru',
'Philippines',
'Pitcairn',
'Poland',
'Portugal',
'Puerto Rico',
'Qatar',
'Réunion',
'Romania',
'Russian Federation',
'Rwanda',
'Saint Barthélemy',
'"Saint Helena, Ascension and Tristan da Cunha"',
'Saint Kitts and Nevis',
'Saint Lucia',
'Saint Martin (French part)',
'Saint Pierre and Miquelon',
'Saint Vincent and the Grenadines',
'Samoa',
'San Marino',
'Sao Tome and Principe',
'Saudi Arabia',
'Senegal',
'Serbia',
'Seychelles',
'Sierra Leone',
'Singapore',
'Sint Maarten (Dutch part)',
'Slovakia',
'Slovenia',
'Solomon Islands',
'Somalia',
'South Africa',
'South Georgia and the South Sandwich Islands',
'South Sudan',
'Spain',
'Sri Lanka',
'Sudan',
'Suriname',
'Svalbard and Jan Mayen',
'Swaziland',
'Sweden',
'Switzerland',
'Syrian Arab Republic',
'"Taiwan, Province of China"',
'Tajikistan',
'"Tanzania, United Republic of"',
'Thailand',
'Timor-Leste',
'Togo',
'Tokelau',
'Tonga',
'Trinidad and Tobago',
'Tunisia',
'Turkey',
'Turkmenistan',
'Turks and Caicos Islands',
'Tuvalu',
'Uganda',
'Ukraine',
'United Arab Emirates',
'United Kingdom',
'United States',
'United States Minor Outlying Islands',
'Uruguay',
'Uzbekistan',
'Vanuatu',
'"Venezuela, Bolivarian Republic of"',
'Viet Nam',
'"Virgin Islands, British"',
'"Virgin Islands, U.S."',
'Wallis and Futuna',
'Western Sahara',
'Yemen',
'Zambia',
'Zimbabwe'];

    $scope.togglePersonalDetails = function (){
    	$scope.personalDetails = false;
      $scope.interestDetails = false;
      $scope.demographicDetails = true;
    };

     $scope.toggleDemographicDetails = function (){
    	$scope.demographicDetails = false;
    	$scope.personalDetails = false;
      $scope.interestDetails = true;
    	
    };

    $scope.toggleBackDemographicDetails = function (){
      $scope.demographicDetails = false;
      $scope.personalDetails = true;
      $scope.interestDetails = false;
    };

    $scope.togglesBackinterestDetails = function (){
      $scope.personalDetails = false;
    	$scope.demographicDetails = true;
      $scope.interestDetails = false;
    };

    $scope.register = function(user) {
    	console.log("user >>>>>>>>" , user);
      //localStorageService.set('Credentials', user.userName+":"+user.userPassword);
    	$location.path('')
    };

    

 

  $scope.clear = function() {
    $scope.dt = null;
  };

  

  $scope.dateOptions = {
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };


  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

 
  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };


});