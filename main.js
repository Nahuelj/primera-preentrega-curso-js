
// INTRODUCCION
alert("Bienveido al calculador de calorias de mantenimiento realizado con Javascript")
alert("Hola, le pediremos los siguientes datos para calcular sus calorias de mantenimiento");


let genero;
let peso;
let edad;
let altura;
let gastoEnergetico;


    do {
        genero = prompt("genero: ingrese 1 para masculino o 2 para femenino"); 
    } while (genero != 1 && genero != 2);

    if(genero == 1){
        genero = "masculino";
    }else if(genero == 2){
        genero = "femenino";
    }

    console.log(`Genero: ${genero}`);

    do {
        peso = parseInt(prompt("Indique su peso en kg (utilizando el punto si es necesario y sin la unidad de medida kg)"));

    } while (peso > 200);

    console.log(`Peso: ${peso} kg`);

    do {
        altura = prompt("Indique su altura en cm (sin puntos ni comas y sin la unidad de medida cm)");
    } while (altura > 210 );
    
    console.log(`Altura: ${altura} cm`);


    do {
        edad = prompt("Indique su edad"); 
    } while (edad > 100);

    console.log(`Edad: ${edad} años`);
    
    do {
        gastoEnergetico = parseInt(prompt("Indique la opción de su gasto enegetico:\n 1: Poco o ningún ejercico durante la semana\n 2: Ejercicio ligero(1-3 sesiones por semana)\n 3: Ejercicio moderado (3-5 sesiones por semana)\n 4: Ejercicio fuerte (6-7 sesiones por semana)\n 5: Ejercicio muy fuerte (atletas de alto rendimiento)"));

        

    } while (gastoEnergetico > 5 || gastoEnergetico < 1);

    switch (gastoEnergetico) {
        case 1:
          gastoEnergetico = 1.2;
          break;
        case 2:
          gastoEnergetico = 1.375;
          break;
        case 3:
          gastoEnergetico = 1.55;
          break;
        case 4:
          gastoEnergetico = 1.725;
          break;
        case 5:
          gastoEnergetico = 1.9;
          break;
        default:
          break;
      }
      
    console.log(`Su factor de gasto energetico es de ${gastoEnergetico}`);



let mb;
let caloriasFinales;

function calcularCalorias (){

    if (genero == "masculino"){
        mb = (10*peso)+(6.25*altura)-(5*edad)+5
    }else if (genero == "femenino"){
        mb = (10*peso)+(6.25*altura)-(5*edad)+161
    }

    caloriasFinales = mb * gastoEnergetico;
    caloriasFinales = Math.floor(caloriasFinales);


    console.log(`Sus calorias de mantenimiento son ${caloriasFinales}`);

    console.log("Eso quiere decir que para mantenerse en su peso actual deberia estar consumiendo aproximandamente esa cantidad de calorias diarias");

    console.log(`En el caso que quiera bajar de peso se recomienda consumir unas 500 a 1000 calorias menos eso estaria en torno de ${caloriasFinales-500} o ${caloriasFinales-1000} calorias dependiendo de como se adapte su organismo`);

    console.log(`Y en el caso que quiera subir de peso se recomieda agregar unas 500 calorias diarias que en su caso serian ${caloriasFinales+500} calorias en total`)

    console.log("Si escribio mal un dato por favor recargue la pagina y complete nuevamente para volver a calcular, gracias.");

}

calcularCalorias();
