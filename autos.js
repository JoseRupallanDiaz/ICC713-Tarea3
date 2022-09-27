//variables

const cars = require('./cars.json');
const aboveYear = 2010;
const sameYear = 2011;
const color = "Red";
const luxuryModels = ["Jaguar", "Aston Martin"];
let greaterThan = [];
let carsSameYear = [];
let colorCars = 0;
let luxuryCars = 0;

// Obtener e imprimir en consola la cantidad de autos con año mayor a 2010

cars.forEach(function(car){
    if(car.year > aboveYear){
        greaterThan.push(car);
    }
});
console.log("Autos con año mayor a 2010: "+greaterThan.length);

// Obtener e imprimir en consola la cantidad de autos de color rojo (Red)

cars.forEach(function(car){
    if(car.color === color){
        colorCars = colorCars + 1;
    }
});
console.log("Autos rojos: "+ colorCars)

// A partir del array de autos con año mayor a 2010, generar e imprimir en consola un array de strings
// que contenga la marca, modelo y año, en el formato: BRAND - MODEL YEAR.

let message = "[";
greaterThan.forEach((car, index) => {
    if(index !== (greaterThan.length - 1)){
        message = message +"'"+ car.brand +" - "+car.model +" "+car.year+"', ";
    } else {
        message = message +"'"+ car.brand +" - "+car.model +" "+car.year+"'";
    }
});
message = message + "]";
console.log(message);

// Añadir el campo luxuryTax con el valor true a los autos del array original (cars) que tengan la marca
// Jaguar y Aston Martin. Luego, obtenga e imprima en consola la cantidad de autos con el campo luxuryTax = true

cars.forEach((car) => {
    car.luxuryTax = false;
    luxuryModels.forEach((luxuryModel) => {
        if (car.brand === luxuryModel){
            car.luxuryTax = true;
            luxuryCars = luxuryCars + 1;
        }
    })
});

console.log("Vehiculos de lujo: "+luxuryCars);

// Crear una función que le entre como parámetro un año, esta función debe obtener los autos solo los autos del 
// año indicado por parámetro a partir del array original (cars), luego imprimir en consola auto por auto con el
// formato MODEL - YEAR.

function carYear (array, year) {
    let newArray = [];
    array.forEach((car) => {
        if (car.year === year){
            newArray.push(car)
        };
    });
    return newArray;
} ;

carsSameYear = carYear(cars, sameYear);

message = "[";
carsSameYear.forEach((car, index) => {
    if (index !== (carsSameYear.length - 1)) {
        message = message +"'"+ car.model +" - "+car.year+"', ";
    } else {
        message = message +"'"+ car.model +" - "+car.year+"'";
    }
});
message = message + "]"
console.log(message);