//variables

const cars = require('./cars.json');

// Obtener e imprimir en consola la cantidad de autos con año mayor a 2010

let greaterThan2010 = 0;
cars.forEach(function(item){
    if(item.year > 2010){
        greaterThan2010 = greaterThan2010 + 1;
    }
});
console.log("Autos con año mayor a 2010: "+greaterThan2010);
