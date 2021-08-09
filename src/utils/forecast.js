const request = require('request');


const forecast = (longitude, latitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=b11c8f4149297348f68602157fd6f863&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, {body}) => {

        if (error) {
            callback('unable to connect to the weather service', undefined)
        } else if (body.success === false) {
            callback(body.error.info, undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' but it feels like ' + body.current.feelslike)

        }
    })
}

module.exports=forecast