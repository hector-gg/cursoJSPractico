const precioOriginal = 120;
const descuento = 18;



// console.log({
// precioOriginal,
// descuento,
// porcentajePrecioConDescuento,
// precioConDescuento,
// });

// const coupons = [
//     "Descuento1",
//     "Descuento2",
//     "Descuento3",
//     ];

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento)/100;
    return (precioConDescuento);
}

const coupons =[
    {
        name: "Descuento1",
        discount: 15,
    },
    {
        name: "Descuento2",
        discount: 20,
    },
    {
        name: "Descuento3",
        discount: 30,
    },
];

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue= Number(inputPrice.value);
    
    
    const inputCopun = document.getElementById("InputCoupon");
    const couponvalue=inputCopun.value;

 //     let descuento;

//     if (!coupons.includes(couponvalue)){
//         alert ("El cupón " + couponvalue + "no es valido");
//         descuento = 0;
//     }else if (couponvalue === "Descuento1"){
//         descuento = 15;
//     }else if (couponvalue === "Descuento2"){
//         descuento = 20;
//     }else if (couponvalue === "Descuento3"){
//         descuento = 30;
//     }

    const isCouponValueValid = function(coupon){
        return coupon.name === couponvalue;
    }
    
    const userCoupon = coupons.find(isCouponValueValid);
    console.log(userCoupon);
    if (!userCoupon){
        alert("El cupón " + couponvalue + "no es válido");
    }else{
        const descuento = userCoupon.discount;
    
        const precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
    
        const resultP= document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
    
}


    
// }







