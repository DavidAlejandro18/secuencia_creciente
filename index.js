let arrayFalse = [1,2,3,5,4,6];
let arrayTrue = [1,2,3,4,5,6];

function esAscendiente(array) {
    try {
        if(array.length == 1) {
            return true;
        }

        array.forEach((num, i) => {
            let num_before = array[i-1];
            let num_after = array[i+1];
            let cond;
    
            if(num_before && num_after) {
                cond = num_before < num && num < num_after;
            }

            if(num_before && !num_after) {
                cond = num_before < num;
            }

            if(!num_before && num_after) {
                cond = num < num_after;
            }
    
            if(!cond) {
                throw new Error('No es ascendiente');
            }
        });
    } catch (error) {
        return false;
    }

    return true;
}

console.log(esAscendiente(arrayFalse));
console.log(esAscendiente(arrayTrue));