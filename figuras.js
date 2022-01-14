
//Codigo del Cuadrado
console.group("Cuadrado");
function perimetroCuadrado(lado){
    return lado * 4;
} 
function areaCuadrado(lado){
    return lado*lado;
} 
console.groupEnd();

//Codigo triangulo  
 console.group("Triangulo");

function perimetrotriangulo (lado1, lado2, base){
    return lado1+lado2+base;
}

function areatriangulo (base, altura){
    return (base*altura)/2;
} 

console.groupEnd();

//Código del círculo
console.group("circulo");

function diamatroCirculo (radio){
    return radio*2;
}

const pi = Math.PI;
//circunferencia
function perimetroCirculo(radio){
    const diametro = diamatroCirculo(radio);
    return diametro*pi;
} 
// Área
function areaCirculo(radio){
    return radio*radio*pi;
}

console.groupEnd();
//aqui interactuamos con el HTML 
function calcularperimetrocuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert('El perimetro del cuadrado: ' +perimetro);

}
function calcularareacuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert('El área del cuadrado: ' +area);
}
function calcularperimetrotriangulo(){
    const input1 = document.getElementById("Inputlado1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("Inputlado2");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("Inputlado3");
    const value3 = Number(input3.value);
    
    
    const perimetro = perimetrotriangulo(value1, value2, value3);
    alert('El perimetro del triángulo: ' + perimetro);

}
function calcularareatriangulo(){
    const input1 = document.getElementById("Inputlado3");
    const value1 = Number(input1.value);
    
    const input2 = document.getElementById("altura");
    const value2 = Number(input2.value);

    const area =areatriangulo(value1,value2);
    alert('El área del triángulo: ' + area)
}

function calcularperimetrocirculo(){
    const radio = document.getElementById("radio");
    const value = Number(radio.value);

    const perimetro= perimetroCirculo(value);
    alert('El perimetro del Círculo: ' + perimetro);

}
function calcularareacirculo(){
    const radio = document.getElementById("radio");
    const value = Number(radio.value);

    const area= areaCirculo(value);
    alert('El area del Círculo: ' + area);

}
function calcularaltura(){
    const input1 = document.getElementById("Inputladoa");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("Inputladob");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("Inputladoc");
    const value3 = Number(input3.value);
    var a;
    
    if (value1 == value2){
        a=Math.sqrt(((value3/2)*((value3/2)))+(value1*value1));
        alert('La altura es: ' + a);

    }else if(value1==value3){
        a=Math.sqrt(((value2/2)*((value2/2)))+(value1*value1));
        alert('La altura es: ' + a);

    }else if (value3 == value2){
        a=Math.sqrt(((value1/2)*((value1/2)))+(value2*value2));
        alert('La altura es: ' + a);
    }else{
        alert('El triángulo no es isoceles, ni equilátero');
    }

}

