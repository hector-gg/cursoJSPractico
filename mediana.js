function onClickMediana(){
    const inputmedia = document.getElementById("InputArray");
    const Value = inputmedia.value;
    var array = Value.split(",");
    console.log(array);
    const media = calcularMediana(array);
    
        const resultP= document.getElementById("ResultP");
        resultP.innerText = "La mediana es: " + media;

}


function calcularMediaArtimetica(lista){
    // let sumalista = 0;
    // for (let i = 0; i < lista.length; i++){
    //     sumalista=sumalista+lista[i];
    // }
    const sumalista =lista.reduce(
        function(valorAcomulado = 0, nuevoElemento){
            return valorAcomulado + nuevoElemento;
        }
    );
    const promedioLista =sumalista/lista.length;
    return promedioLista;
}

function calcularMediana(lista1) {

//Ordena los elementos del Array
function comparar ( a, b ){ return a - b; }
lista1.sort( comparar );  



const mitadLista1= parseInt(lista1.length/2);

function esPar(numerito){
if(numerito % 2 === 0){
    return true;
}else{
    return false;
}
}

let mediana;
if (esPar(lista1.length)){
    const elemento1=Number(lista1[mitadLista1]);
    const elemento2=Number(lista1[mitadLista1-1]);
    const promedioElementos=calcularMediaArtimetica([
        elemento1,
        elemento2,
    ]);

    mediana =promedioElementos;

}else{
    mediana=lista1[mitadLista1];
}
console.log(mediana);
return mediana;
}