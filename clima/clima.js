const axios = require('axios');

const getClima = async (lat,lng) => {
     const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d43ead0085784aa6316854f102a19d8d&units=metric`)

     return  res.data.main.temp;
}

module.exports = {
    getClima
}