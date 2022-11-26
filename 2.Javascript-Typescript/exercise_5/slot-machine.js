/*
Crear una máquina tragaperras utilizando clases  donde cada vez que juguemos insertemos una moneda. 
Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá 
incrementando conforme vayamos jugando.

Cuando se llame al método play el número de monedas se debe incrementar de forma automática 
y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. 
El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto 
deberá mostrarse por consola el mensaje:
*/


class SlothMachine {
  
    constructor() {
        this.coins = 0;
    }

    play(){

        this.coins++;
        const array = []

        /*generar 3 booleanos*/
        for(let i = 0; i <3 ; i++){
            var status =  Math.random() < 0.5 ? true : false;
            array.push(status);
        }
      
        /*capturar false*/
        let result = array.filter( list => list === false);
        if(result.length === 0 ){    

            console.log("Congratulations!!!. You won ", this.coins ," coins!!");
            this.coins = 0;

        }else{

            console.log('Good luck next time!!')
       
        } 
    }
  }
  

  const machine1 = new SlothMachine();
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Congratulations!!!. You won 3 coins!!"
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Congratulations!!!. You won 2 coins!!"