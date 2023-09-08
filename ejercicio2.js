let inicial=Math.floor(Math.random() *360);
let aleatorio=Math.floor(Math.random() * (360*5))+(360*5)+inicial;
let resultado=aleatorio%360;
console.log("/log");
console.log("Posicion o angulo inicial: "+inicial);
console.log("Valor aleatorio generado en grados: "+aleatorio);
console.log("Angulo final: "+resultado);

