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

console.log(recargo)

//Aquí hacemos click
// let operacionDescuento


const descuentoEnPantalla = () => {
    if (tieneDescuento.checked) {
        operacionDescuento = (precio * 0.10)
        descuento.textContent = operacionDescuento
    }
    else {
        operacionDescuento = 0
        descuento.textContent = "0"
    }
    return operacionDescuento
}


// //Aquí hacemos click
tieneDescuento.onclick = () => {
    descuentoEnPantalla()
    mostrarTotal()
}

let operacionRecargo

const recargoEnPantalla = () => {
    if (tieneRecargo.checked) {
        operacionRecargo = (precio * 0.10)
        recargo.textContent = operacionRecargo
    }
    else {
        operacionRecargo = 0
        recargo.textContent = operacionRecargo
    }

    return operacionRecargo
}
tieneRecargo.onclick = () => {
    recargoEnPantalla()
    mostrarTotal()
}
let operacionEfectivoDebito
const efectivoDebitoEnPantalla = () => {
    if (efectivoDebito.checked) {
        recargo.textContent = obtenerEfectivoDebito(precio)
    }
    else {
        operacionEfectivoDebito= 0
        recargo.textContent = operacionEfectivoDebito
    }
}

efectivoDebito.onclick = () => {
    obtenerEfectivoDebito()
    efectivoDebitoEnPantalla()
}

let operacionEfectivoDebito
const obtenerEfectivoDebito = () => {
    if (efectivoDebito.checked) {
        operacionEfectivoDebito = 0
    }
    return operacionEfectivoDebito
}

tieneEnvio.onclick = () => {
    envioEnPantalla()
    mostrarTotal()
}

let operacionGastoDeEnvio
const envioEnPantalla = () => {
    if (tieneEnvio.checked) {
        operacionGastoDeEnvio = 50
        envio.textContent = operacionGastoDeEnvio
    }
    else {
        operacionGastoDeEnvio = 0
        envio.textContent = operacionGastoDeEnvio
    }
    return operacionGastoDeEnvio
}

//Al hacer click tiene que pasar esto:
//Hace las operaciones y saca el resultado

//OBTENEMOS EL TOTAL

const mostrarTotal = () => {
    let precioTotal= precio + envioEnPantalla() + obtenerEfectivoDebito() + recargoEnPantalla() + descuentoEnPantalla()
    total.textContent = precioTotal
}


//cambiamos el descuento en base a lo que de OBTENERDESCUENTO






