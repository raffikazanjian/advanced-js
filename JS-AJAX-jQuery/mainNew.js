/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

$(function() {
    var forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    var countryCode = 'US';
    var cityName = 'LosAngeles'
	var apiKey = '&APPID=38a98fdc96f970d17f469d4dfb93e451';
	var unit = 'metric';

    $.ajax({
		url: forecastUrl + cityName + ',' + 'countryCode' + apiKey + '&units=' + unit,
		type: 'GET',
		success: function(forecastObject) {
			console.log(forecastUrl + cityName + ',' + countryCode + apiKey + '&units=' + unit);
			console.log(forecastObject);
			var tempCelcius = forecastObject.list[0].main.temp_min;
			//console.log(tempCelcius);
			var weatherDescription = forecastObject.list[0].weather[0].description;
			console.log(weatherDescription);
			var windSpeed = forecastObject.list[0].wind.speed;
			console.log(windSpeed);

			for(i=0; i < forecastObject.list.length; i++) {
				if(i >= 0) {
					var tempCelcius = forecastObject.list[i].main.temp_min;
					var dateTime = forecastObject.list[i].dt_txt;
					var date = new Date(dateTime);
					date.toString();
					//console.log(date);
					//console.log('----------');
					//console.log('The tempreture is: ' + tempCelcius + ' degrees Celcius.');

					var $source = $('#weather-posts').html();
					var template = Handlebars.compile($source);
					var weatherData = {
						time: date,
						tempreture: tempCelcius
					};
					var fullTemplate = template(weatherData);
					$('body').append(fullTemplate);
				} else {
					alert('WTF just happened??');
				}
					
			}
		},
		error: function() {
			console.error('API error');
		}
	});
});