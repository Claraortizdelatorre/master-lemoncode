
/*Clone.
Implementa una función clone que, a partir de un objeto de entrada source devuelva 
un nuevo objeto con las propiedades de source*/
var myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};


function clone(source) {
    return {...source};
  }

console.log(clone(myCar));

/*Merge. 
Implementa una función merge que, dados dos objetos de entrada source y target, 
devuelva un nuevo objeto con todas las propiedades de target y de source, 
y en caso de propiedades con el mismo nombre, source sobreescribe a target.*/

const a = { name: "Maria", surname: "Ibañez", country: "SPA" }; //source
const b = { name: "Luisa", age: 31, married: true }; //target

function merge(source, target) {
    return Object.assign(source, target);
  }

console.log(merge(a, b));
