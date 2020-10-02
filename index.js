//Tomamos el queryselector
const constanteSubtotal = document.querySelector("#subtotal")
const tieneDescuento = document.querySelector("#descuento")
const tieneRecargo = document.querySelector("#tarjetaDeCredito")
const efectivoDebito = document.querySelector("#modoDePago")
const tieneEnvio = document.querySelector("#envio")
let envio = document.querySelector("#envioNumero")
let recargo = document.querySelector("#recargoNumero")
let descuento = document.querySelector("#descuentoNumero")
let total = document.querySelector("#total")

//cambiamos el subtotal
constanteSubtotal.textContent = "600"
let precio = 600

console.log(efectivoDebito)

//Aquí hacemos click
tieneDescuento.onclick = () => {
    obtenerDescuento(precio)
    descuentoEnPantalla()
    mostrarTotal(precio)
}

tieneRecargo.onclick = () => {
    obtenerRecargo(precio)
    recargoEnPantalla()

}

tieneEnvio.onclick = () => {
    obtenerGastoDeEnvio()
    envioEnPantalla()
}

efectivoDebito.onclick = () => {
    obtenerEfectivoDebito()
    efectivoDebitoEnPantalla()
}

//Al hacer click tiene que pasar esto:
//Hace las operaciones y saca el resultado
const obtenerDescuento = (precio) => {
    let operacionDescuento = (precio * 0.10)
    console.log(operacionDescuento)
    return operacionDescuento
}

const obtenerRecargo = (precio) => {
    let operacionRecargo = (precio * 0.10)
    return operacionRecargo
}

const obtenerGastoDeEnvio = () => {
    let operacionGastoDeEnvio = 50
    return operacionGastoDeEnvio
}

const obtenerEfectivoDebito = () => {
    if (efectivoDebito.checked) {
        let operacionEfectivoDebito = 0
        return operacionEfectivoDebito
    }
}

//OBTENEMOS EL TOTAL

const mostrarTotal = (precio) => {

    total.textContent= precio
    console.log("oliwis")
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

const recargoEnPantalla = () => {
    if (tieneRecargo.checked) {
        recargo.textContent = obtenerRecargo(precio)
    }
    else {
        recargo.textContent = "0"
    }
}

const envioEnPantalla = () => {
    if (tieneEnvio.checked) {
        envio.textContent = obtenerGastoDeEnvio(precio)
    }
    else {
        envio.textContent = "0"
    }
}

const efectivoDebitoEnPantalla = () => {
    if (efectivoDebito.checked) {
        recargo.textContent = obtenerEfectivoDebito(precio)
    }
    else {
        recargo.textContent = "0"
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
