let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
let arr4 = [10, 11, 12];

/*Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, 
devuelva la concatenación de ambos. Utiliza rest / spread operators.*/

const concat = (a, b) => { return [...a, ...b]; };
console.log(`Arrays concatenados: ${concat(arr1,arr2)}`);


/*Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).*/ 


const concat2 = (...arrs) => { return [...arrs]; }; 
console.log(`Arrays concatenados: ${concat2(arr1,arr2,arr3,arr4)}`);
