/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

$(function() {
    var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=NewYork&APPID=';
	var apiKey = '38a98fdc96f970d17f469d4dfb93e451';
	var unit = 'metric';

    $.ajax({
		url: weatherUrl + apiKey + '&units=' + unit,
		type: 'GET',
		success: function(cityName) {
			console.log(weatherUrl + apiKey + '&units=' + unit);
			console.log(cityName);
			console.log('Current temperature in New York is ' + cityName.main.temp + 'Celcius.')
		},
		error: function() {
			console.error('API error');
		}
	});
});

//http://api.openweathermap.org/data/2.5/weather?q=NewYork