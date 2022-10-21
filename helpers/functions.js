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

function resolve(array) {
    // O(n^2) 

    try {
        if(array.length == 0) {
            return true;
        }

        array.forEach((num, i) => { // O(n)
            let arrayCopy = array.slice();
            arrayCopy.splice(i, 1);
    
            let asc = esAscendiente(arrayCopy); // O(n)

            if(asc) {
                throw new Error('Es ascendiente');
            }
        });
    } catch (error) {
        return true;
    }


    return false;
}

function resolveV2(array) {
    let errores = 0;

    try {
        if(array.length == 0 || array.length == 1) {
            return true;
        }
        
        array.forEach((num, i) => {
            let editableArray = array.slice();
            let num_before = array[i-1];
            let num_after = array[i+1];
            let cond;

            // START AND FINAL
            if(num_before && !num_after) {
                cond = num_before < num;
            } else {
                cond = num < num_after;
            }
    
            if(!cond && errores < 1) {
                errores++;
            } else if(!cond && errores == 1) {
                throw new Error('No es ascendiente');
            }

            editableArray.splice(i, 1);
            if(editableArray.includes(num)) {
                throw new Error('No es ascendiente');
            }
        });

    } catch (error) {
        return false;
    }

    return true;
}

module.exports = {
    resolve,
    resolveV2
};