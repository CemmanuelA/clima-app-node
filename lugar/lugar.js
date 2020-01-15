const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'X-RapidAPI-Key': '9560f3a303msh3078dee5274aa51p17c130jsn07bcc4f8b877'}
      });
    
      const res = await instance.get();
    
      if (res.data.Results.length === 0) {
          throw new Error(`No hay resultados para ${dir}`)
      }

      const data = res.data.Results[0];
      const direccion = data.name;
      const lat = data.lat;
      const lng = data.lon;

      return {
          direccion,
          lat,
          lng
      }
};

module.exports = {
    getLugarLatLng
}

