const { faker } = require("@faker-js/faker");


const getStuffedDogName = () => {
    return faker.animal.dog();
}
const getStuffedDogPrice = () => {
   return faker.number.int({ min: 500, max: 10000 });
}
const getStuffedDogInStock = () => {
    return faker.datatype.boolean(); 
}

module.exports = {
    getStuffedDogName,
    getStuffedDogPrice,
    getStuffedDogInStock
}
