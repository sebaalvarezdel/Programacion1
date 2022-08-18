class Receta{
    constructor(id, autor, titulo, foto, tPreparacion, elaboracion, meGusta, noMeGusta){
        this.id = id
        this.autor = autor;
        this.titulo = titulo;
        this.foto = foto;
        this.tPreparacion = tPreparacion;
        this.elaboracion = elaboracion;
        this.meGusta = meGusta;
        this.noMeGusta = noMeGusta;
        this.recetaHabilitada = true;
    }
}

class Chef{
    constructor(nombre, apellido, usuario, contraseña, cantidadRecetas, chefEstado){
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario
        this.contraseña = contraseña
        this.cantidadRecetas = cantidadRecetas;
        this.chefEstado = chefEstado;
    }
}