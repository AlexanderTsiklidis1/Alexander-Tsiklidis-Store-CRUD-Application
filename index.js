const { readJSONFile, writeJSONFile } = require("./src/helpers");
const { 
    create, 
    index,
    show,
    destroy,
    update,
    addToCart,
    cartTotal,
    cancelCart
    
} = require("./src/StuffedDogs-controller")


const run = () => {
    const action = process.argv[2];
    const stuffedDog = process.argv[3];
    let stuffedDogs = readJSONFile("./data", "stuffedDogs-data.json");
    let cart = readJSONFile("./data", "cart-data.json");
    let writeToFile = false;
    let updatedStuffedDogs = [];
    let updatedCart = [];

    switch (action) {
        case "index" :
            const allStuffedDogs = index(stuffedDogs);
            console.log(allStuffedDogs);
            break;   
        case "create" :
            updatedStuffedDogs = create(stuffedDogs, stuffedDog);
            writeToFile = true;
            break;
        case "show" :
            const foundStuffedDog = show(stuffedDogs, stuffedDog);
            console.log(foundStuffedDog);
            break;  
        case "update" :
            console.log(stuffedDog,  "is being updated");
            updatedClothes = update(stuffedDogs, stuffedDog, process.argv[4], process.argv[5], process.argv[6]);
            writeToFile = true;
            break; 
        case "destroy" :
            updatedClothes = destroy(stuffedDogs, stuffedDog);
            writeToFile = true;
            break ;  
        case "addToCart" :
            updatedCart = addToCart(cart, stuffedDogs, stuffedDog)
            writeJSONFile("./data", "cart-data.json", updatedCart);
            break;
        case "cartTotal" :
            console.log(cartTotal(cart));
            break;
        case "cancelCart" :
            cancelCart();
            break;
        default :
        console.log("there was an error");
    }

    if (writeToFile) {
        console.log("updating data");
        writeJSONFile("./data", "stuffedDogs-data.json", updatedStuffedDogs);
    }

}

run();