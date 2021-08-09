const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiamNhbXBheiIsImEiOiJja3IzbGJndXkxMjR0Mm9ueWg0bmIwenB0In0.h7bYM56974YJ_U8JyBAvkQ&limit=1'
    request({url:url,json:true},(error,response) =>{
        if (error) {
            callback('unable to connect to location services',undefined)
        } else if(response.body.features.length === 0){
            callback('unable to find any location matching the criteria',undefined)
        }else{
            callback(undefined,{
                latitude:response.body.features[0].center[0],
                longitude:response.body.features[0].center[1],
                location:response.body.features[0].place_name
            })
        }
    })
}
module.exports=geocode
