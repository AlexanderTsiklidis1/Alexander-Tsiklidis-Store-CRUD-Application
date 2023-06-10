const { faker } = require("@faker-js/faker)");

function createRandomItem () {
    const item = {
        _id: faker.datatype.uuid(),
        name: faker.commerce.product(),
        priceInCents: faker.number.int({ min: 500, max: 100000 }),
        inStock: faker.datatype.boolean(),

    }
    return item
}

function randomItemStore(number) {
    const commodoties = [];
    for(let i = 0; i < number; i++){
        commodoties.push(createRandomVehicle())
    }
    return commodoties
}

module.exports = {
    createRandomItem,
    randomItemStore
}