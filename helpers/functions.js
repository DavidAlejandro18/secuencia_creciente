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
    // O(n**2) 

    let sePuedeResolver = false;

    array.forEach((num, i) => { // O(n)
        let arrayCopy = array.slice();
        arrayCopy.splice(i, 1);

        sePuedeResolver = esAscendiente(arrayCopy); // O(n)
    });

    return sePuedeResolver;
}

module.exports = {
    resolve
};