console.log("Ruleta");

for (let i=0; i<10; i++){
    let aleatorio=(Math.floor(Math.random()*(37*5)))+(37*5);
    let numero=aleatorio%37;
    console.log("\n");
    console.log("Numero de juego: "+i);
    console.log("valor aleatorio generado: " + aleatorio );
    console.log( "El resultado de la ruleta es: "+numero);
}
