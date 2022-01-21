//Funciones Helpers
//saber si un numero es par o impar
function esPar(numerito){
    return (numerito %2 === 0);
}
//calcular la media 
function calcularMediaArtimetica(lista){
    const sumalista =lista.reduce(
        function(valorAcomulado = 0, nuevoElemento){
            return valorAcomulado + nuevoElemento;
        }
    );
    const promedioLista =sumalista/lista.length;
    return promedioLista;
}
//Calculadora de mediana
function medianaSalriosCol(lista){
    const mitad = parseInt(lista.length/2);
    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad-1];
        const personitaMitad2 = lista[mitad];
        const mediana=calcularMediaArtimetica([
            personitaMitad1,
            personitaMitad2,
        ]);
        return mediana;
    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
} 

//Mediana general

//Crea un solo array con los salarios
const salariosCol = colombia.map(
    function(personita){
        return personita.salary
    }
);

//ordenar el array
const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB){ 
        return salaryA-salaryB
    }
);

const medianaGeneralCol = medianaSalriosCol(salariosColSorted);

//Mediana del top 10%


const spliceStart = (salariosColSorted.length  * 90)/100;
const spliceCount = salariosColSorted.length-spliceStart; 
const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalriosCol(salariosColTop10);




console.log(
    {
        medianaGeneralCol,
        medianaTop10Col,

    }
);