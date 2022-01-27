const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=aed204436d057437ffcb547ae0628973&units=m&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const {current} = body
            // console.log(body)
            callback(undefined, current.weather_descriptions[0] +
                                '. It is currently ' + current.temperature + 
                                ' degress out. It is feels like ' + current.feelslike +
                                ' degress out. Wind speed ' + current.wind_speed)
        }
    })
}

module.exports = forecast