
function onClickPromedio(){
    const inputpromedio = document.getElementById("InputArray");
    const Value = inputpromedio.value;
    var array = Value.split(",");
    
    const media = calcularMediaArtimetica(array);
    
        const resultP= document.getElementById("ResultP");
        resultP.innerText = "El promedio es: " + media;

}

function calcularMediaArtimetica(lista){
     let sumalista = 0;
     for (let i = 0; i < lista.length; i++){
         sumalista=sumalista+Number(lista[i]);
     }

    const promedioLista =sumalista/lista.length;
    return promedioLista;
}