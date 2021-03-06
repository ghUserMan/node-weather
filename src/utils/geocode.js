const request = require('request')

const geocode = (address, callback) => {
    const url =`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?limit=1&language=ru&access_token=pk.eyJ1IjoiemltYXNvbiIsImEiOiJja3lqNmFjOXkxb2kyMm9xcGkyZWJpczl6In0.ict9FFW0oWp0e3RwpJp6bA`
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            
            // console.log(body)
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].text_ru
            })
        }
    })
}

module.exports = geocode