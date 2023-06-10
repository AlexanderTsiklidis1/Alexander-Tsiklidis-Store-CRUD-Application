const { readJSONFile, writeJSONFile } = require("./src/helpers");
const { 
    create, 
    index,
    show,
    destroy,
    update,
    score
} = require("./src/purchases-controller")

const run = () => {
    
        const action = process.argv[2];
       
        const purchase = process.argv[3];
      
        let purchases = readJSONFile("./data", "purchases-data.json")
        
        let writeToFile = false;
        let updatedPurchases = [];
       
        switch (action) {
            
            case "index" :
                const allPurchases = index(purchases)
                console.log(allPurchases);
                break;   
            
            case "create" :
                console.log("CREATE IS FIRING")
                updatedPurchases = create(purchases, purchase) 
                writeToFile = true;
                break;
            case "show" :
                const foundPurchase = show(purchases, purchase)
                console.log(foundPurchase)
                break ;  
            case "update" :
                console.log(purchase,  " %%%%%%% ")
                updatedPurchases = update(purchases, purchase, process.argv[4]);
                writeToFile = true;
                break; 
            
            case "destroy" :
                updatedPurchases = destroy(purchases, purchase);
                writeToFile = true;
                break ;  
            
            case "score" :
                console.log(score(purchases))
                break; 
            default :
            console.log("hey there was an error")  
        }
       
        if (writeToFile) {
            console.log("new data detected - updating")
            
            writeJSONFile("./data", "purchases-data.json", updatedPurchases)
        }
    
    }
    
    
    run()