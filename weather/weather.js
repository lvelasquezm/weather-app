const request = require('request');

var getWeather = (lat, lng, callback) => {
	request({
		url: `https://api.darksky.net/forecast/4f5660ba0ba26802b0dd5ae29edc6e84/${lat},${lng}`,
		json: true
	}, (error, response, body) => {
		if(!error && response.statusCode === 200) {
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
		}else {
			callback('Unable to fetch weather.');
		}
	});
};

module.exports.getWeather = getWeather;