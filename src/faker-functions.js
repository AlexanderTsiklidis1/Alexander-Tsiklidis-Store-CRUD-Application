const { faker } = require("@faker-js/faker");

const getStuffedDogId = () => {
    return faker.string.uuid();

}

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
    getStuffedDogId,
    getStuffedDogName,
    getStuffedDogPrice,
    getStuffedDogInStock
}
