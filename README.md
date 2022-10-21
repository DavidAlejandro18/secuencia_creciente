## PROBLEMA: 

Se te dará un array de varios enteros. Determina si es posible obtener una secuencia estrictamente creciente al remover no más de un elemento del array. 
Una secuencia estrictamente creciente es aquella en la que en el array `a0,a1,a2,a3...aN`; los números siempre son ascendentes, es decir `a0<a1<a2<a3...<aN`.

## EJEMPLO: 

- Para una `secuencia = [1,3,2,1]` el resultado de la función `solución(secuencia) = false`. No existe ningún elemento en el array que si quitas, te daría una secuencia estrictamente creciente. 
- Para la `secuencia = [1,3,2]` el resultado de la función `solución(secuencia) = true`. Ya que si quitas el 3 del array, tendrías una secuencia estrictametne creciente `[1,2]`. De manera alternativa podrías quitar el 2, y tener otra secuencia creciente. `[1,3]`. 

## ENTRADA / SALIDA: 

- No se deberá exceder de una ejecución de 4 segundos (PHP). 
- El input que se te otorga es una secuencia que tendrá una longitud de `2 <= secuencia.lenght <= 10^5` 
- Los valores del array se darán enteros de un valor entre `-10^5 <= secuencia[i] <= 10^5` 
- El resultado deberá ser un booleano `(true,false)` 

## PRUEBAS EJEMPLO: 

    sequence = array(1, 4, 10, 4, 2); se espera false
    sequence = array(1, 3, 2, 1); se espera false
    sequence = array(1, 2, 1, 2); se espera false
    sequence = array(0, -2, 5, 6); se espera true


## INSTRUCCIONES

- Clona el repositorio a tu máquina local.
- Ejecuta el comando `npm i` para instalar las dependencias.
- Para poder ejecutar una muestra simple, ejecuta el comando `node index.js` en la raíz del proyecto.
- Puedes ejecutar las pruebas unitarias, ejecuta el comando `npm run test` en la raíz del proyecto.