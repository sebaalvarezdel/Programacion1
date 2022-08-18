function buscarElemento(array, propiedad, criterio) {
    let elemento;
    for (let i = 0; i < array.length; i++) {
        if (array[i][propiedad] === criterio) {
            elemento = array[i];
            break;
        }
    }
    return elemento;
}