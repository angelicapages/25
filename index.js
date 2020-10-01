
//Tomamos el queryselector
const constanteSubtotal = document.querySelector("#subtotal")
const tieneDescuento = document.querySelector("#descuento")
const tieneRecargo = document.querySelector("#tarjetaDeCredito")
const tieneEnvio = document.querySelector("#envio")
let descuento = document.querySelector("#descuentoNumero")

//cambiamos el subtotal
constanteSubtotal.textContent = "600"
let precio = 600

console.log(precio)


//Aquí hacemos click
tieneDescuento.onclick = () => {
    obtenerDescuento(precio)
    descuentoEnPantalla()
}

tieneRecargo.onclick = () => {
    obtenerRecargo()
}

tieneEnvio.onclick = () => {
    obtenerGastoDeEnvio()
}

//Al hacer click tiene que pasar esto:
//Hace las operaciones y saca el resultado
const obtenerDescuento = (precio) => {
    if (tieneDescuento.checked) {
        let operacionDescuento = (precio * 0.10)
        console.log(operacionDescuento)
        return operacionDescuento
    }
    else {
        return 0
    }
}

const obtenerRecargo = (precio) => {
    let operacionRecargo = (precio * 0.10) - (precio)
    return operacionRecargo
}

const obtenerGastoDeEnvio = (precio) => {
    let operacionGastoDeEnvio = (precio * 0.10) - (precio)
    return operacionGastoDeEnvio
}

//cambiamos el descuento en base a lo que de OBTENERDESCUENTO
const descuentoEnPantalla = () => {
    if (tieneDescuento.checked) {
        descuento.textContent = obtenerDescuento(precio)
    }
    else {
        descuento.textContent = "0"
    }
}

// const obtenerTotal = (precio) => {
//     if (tieneDescuento) {
//         return tieneDescuento(precio) - precio
//     }
//     console.log(obtenerTotal)
// }

// console.log(obtenerGastoDeEnvio(100))
// console.log(obtenerRecargo(100))
