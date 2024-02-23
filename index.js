// create alert to insert flavors into an array

const userInputFlavors = prompt('Enter your desired flavors separated by comas', 'vanilla,vanilla,vanilla,strawberry,coffee,coffee');

// separate the strings in the array
const individualOrder = userInputFlavors.split(",");

// create a function that shows the amount of flavors even with different strings
function orderCounter(order){

//create an empy object to add the flavors in
    let individualFlavor = {};

// create a loop to iterate through the array of flavors
    for(const flavor of order){

// add the flavors to the object and count them
        if(individualFlavor[flavor] >= 1 ){

            individualFlavor[flavor] += 1;

        }else{

            individualFlavor[flavor] = 1; 
        }
    }

// return the counted flavors
    return individualFlavor;
}

console.log(orderCounter(individualOrder))