const axios = require('axios');

function weatherStatus(req, res) {
   
    let searchQuery = req.query.city
    // console.log(searchQuery);
    
   let weatherUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${searchQuery}&key=${process.env.WEATHER_KEY}`
// console.log(weatherUrl);
   
axios 
.get(weatherUrl)
.then(result =>{

        let weatherArr = result.data.data.map(element =>{

            return new Weather(element)
        })
        res.send(weatherArr)


    }).catch(error=>{
        res.send(error)
    })


}


class Weather {
    constructor(element){
            this.Description = element.weather.description;
            this.Date = element.valid_date;
            this.Temperature = element.temp;
    }
}
   
module.exports = weatherStatus;
