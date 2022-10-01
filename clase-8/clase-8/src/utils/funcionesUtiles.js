export const consultarBDD = async (ruta) => {
    const response = await fetch(ruta)
    const productos = await response.json()
    return productos
}
    