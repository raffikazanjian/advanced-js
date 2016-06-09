/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

$(function() {

	$('#theWeather').on('click', function(e) {
		e.preventDefault();
		var forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=';
	    //var countryCode = 'US';
		var apiKey = '&APPID=38a98fdc96f970d17f469d4dfb93e451';
		var unit = 'metric';
		var cityName = $('#myCityName').val().trim();
		//$('body').append(fullTemplate);
		//console.log(cityName);

		$.ajax({
			//Defining key value pairs in an object which I'm using to connect to the api
			url: forecastUrl + cityName + apiKey + '&units=' + unit,
			type: 'GET',
			// This is my function, my instructions on what to do if api connection is "successfull".
			success: function(forecastObject) {
				// logging the url I constructed so I can read it and make sure it looks right
				console.log(forecastUrl + cityName + apiKey + '&units=' + unit);
				//looging the object so I can inspect it ad use that information for debugging
				console.log(forecastObject);

				// variable that stores current minimum tempreture, I liked minimum temp because to me it seemed more accurate.
				var tempCelcius = forecastObject.list[0].main.temp_min;
				
				// variable that stores the current weathers description
				var weatherDescription = forecastObject.list[0].weather[0].description;
				// logging out the current weathers's description.
				console.log(weatherDescription);
				// variable to store current wind speed, I just wanted to add something else to the script, get more date for the skae of practice.
				var windSpeed = forecastObject.list[0].wind.speed;
				// logging out sind speed.
				console.log(windSpeed);
				console.log(typeof(forecastObject.list));

				// here is where I loop through the array in the object "list" so I can them print or append the data I want to the console or to the html
				for(i=0; i < forecastObject.list.length; i++) {
					if(i >= 0) {
						var tempCelcius = forecastObject.list[i].main.temp_min;
						var dateTime = forecastObject.list[i].dt_txt;
						var date = new Date(dateTime);
						date.getDay(dateTime);
						//console.log(date);
						//console.log('----------');
						//console.log('The tempreture is: ' + tempCelcius + ' degrees Celcius.');

						// reference id
						var $source = $('#weather-posts').html();
						// compile the source markup
						var template = Handlebars.compile($source);
						// define data object
						var weatherData = {
							time: dateTime,
							tempreture: tempCelcius
						};
						// pass data object to template
						var fullTemplate = template(weatherData);
						// attach template to DOM
						$('body').append(fullTemplate);
					} else {
						alert('WTF just happened??');
						return;
					}
						
				}
			},
			// this is a function that will log an error message to the console if I don't connect to the api correctly.
			error: function() {
				console.error('API error');
			}
		});
	});
});