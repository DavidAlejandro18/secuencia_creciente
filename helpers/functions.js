function resolve(array) {
    let errores = 0;

    try {
        if(array.length == 0 || array.length == 1) {
            return true;
        }
        
        array.forEach((num, i) => {
            let editableArray = [...array];
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

module.exports = resolve