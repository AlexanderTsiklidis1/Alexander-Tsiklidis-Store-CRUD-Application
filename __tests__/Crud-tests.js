const {
    create,
    index, 
    show,
    destroy,
    update,
    addToCart,
    cartTotal,
    cancelCart
 } = require("../src/StuffedDogs-controller");
 const cartData = require("../data/sample-cart-data.json");
 const stuffedDogsData = require("../data/sample-stuffedDogs-data.json");
 
describe('create()', () => {
    test('should add another item to the stuffedDogsData', () => {
        const actual = create(stuffedDogsData);
        const expected = 4;
        expect(actual.length).toBe(expected);
    });
});
 
describe('index()', () => {
    test('should show all of the stuffedDogs data', () => {
        const actual = index(stuffedDogsData);
        const expected = `id aaf16c13-9e42-4c15-b6e0-c382d6a116f7 name Bloodhound priceInCents 2060 inStock false
id b0a304a4-2640-4ae0-b247-63dc5c806fc2 name Chippiparai priceInCents 1482 inStock false
id 420221d2-7f85-4158-a314-f12cd1cd1c30 name Dogo Guatemalteco priceInCents 5027 inStock false
id 40c26216-1509-44ae-a6e0-c8fb13760e4c name Ariegeois priceInCents 7259 inStock true`;
        expect(actual).toBe(expected);
    });
});
 
 describe('show()', () => {
     test('should show a single item in stuffedDogsData', () => {
         const actual = show(stuffedDogsData, "aaf16c13-9e42-4c15-b6e0-c382d6a116f7");
         const expected = `id aaf16c13-9e42-4c15-b6e0-c382d6a116f7 name Bloodhound priceInCents 2060 inStock false`;
         expect(actual).toBe(expected);
     });
 });
 
 describe('update()', () => {
     test('should update an item in stuffedDogsData', () => {
         const actual = update(stuffedDogsData, "aaf16c13-9e42-4c15-b6e0-c382d6a116f7", "500", true);
         const expected = [{"id":"aaf16c13-9e42-4c15-b6e0-c382d6a116f7","name":"Bloodhound","priceInCents":"500","inStock":true},{"id":"b0a304a4-2640-4ae0-b247-63dc5c806fc2","name":"Chippiparai","priceInCents":1482,"inStock":false},{"id":"420221d2-7f85-4158-a314-f12cd1cd1c30","name":"Dogo Guatemalteco","priceInCents":5027,"inStock":false},{"id":"40c26216-1509-44ae-a6e0-c8fb13760e4c","name":"Ariegeois","priceInCents":7259,"inStock":true}]
         expect(actual).toStrictEqual(expected);
     });
 });
 
 describe('destroy()', () => {
     test('should remove an item from stuffedDogsData', () => {
         const actual = destroy(stuffedDogsData, "aaf16c13-9e42-4c15-b6e0-c382d6a116f7");
         const expected = 3;
         expect(actual.length).toBe(expected);
     });
 });
 
 describe('cartTotal()', () => {
     test('should return the total price of items in cartData', () => {
         const actual = cartTotal(cartData);
         const expected = 8569;
         expect(actual).toBe(expected);
     });
 });
 
