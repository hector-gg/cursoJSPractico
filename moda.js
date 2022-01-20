
function onClickModa(){
    const inputmoda = document.getElementById("InputArray");
    const Value = inputmoda.value;
    var array = Value.split(",");
    const moda = calcularModa(array);
    
        const resultP= document.getElementById("ResultP");
        resultP.innerText = "La moda es: " + moda[0];

}
//convertir un array en objeto
function calcularModa(lista1) {
const lista1Count ={};
lista1.map(
    function (element){
        if(lista1Count[element]){
            lista1Count[element] += 1; 
        }else{
            lista1Count[element]=1;
        }
    }
);

//convertir un objeto a array de arrays
const lista1Array = Object.entries(lista1Count).sort(
    function(elementoA,elementoB){
        return elementoA[1]-elementoB[1];
    }
);
const moda = lista1Array[lista1Array.length-1];
return moda;
}
