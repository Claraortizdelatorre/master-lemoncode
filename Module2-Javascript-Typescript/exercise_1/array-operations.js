

const array = ["one", 2, 3, 4];

/*
1. Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y 
    devuelva su primer elemento. Utiliza destructuring.
*/

const head = ([first]) => first; 
console.log(`Primer elemento: ${head(array)}`);

/*
TAIL. Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta 
    todos menos el primer elemento. Utiliza rest operator.
*/

const tail = ([, ...one]) => { return one;}
console.log(`Todos, menos el primer elemento: ${tail(array)}`);

/*
INIT. Implementa una función init (inmutable), tal que, dado un array como entrada devuelva 
    todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
*/

const init = (array) => { return array.slice(0,-1) };  
console.log(`Todos los elementos, menos el último: ${init(array)}`);

/*
LAST. Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
*/

const last = (array) => { return array.slice(-1) };  
console.log(`Ultimo elemento: ${last(array)}`);