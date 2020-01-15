


const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//lugar.getLugarLatLng( argv.direccion).then(console.log);
/* 
clima.getClima(35,139)
.then(console.log)
.catch(err => console.log); */

const getInfo = async (direccion) => {
  try {
    const coordenadas = await lugar.getLugarLatLng(direccion);
    const temp = await clima.getClima(coordenadas.lat,coordenadas.lng);
    return `El clima de ${coordenadas.direccion} es de ${temp}.`;
     
  } catch (error) {
      return `No se pudo determinar el clima de ${ direccion }`
  }
}

getInfo(argv.direccion)
.then(console.log)
.catch(console.log);