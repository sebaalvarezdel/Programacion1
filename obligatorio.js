let recetas = [];
let chefs = [];
let deshabilitados = [];
let idRecetas = 21; //al agregar recetas predeterminadas este numero cambia
/* let repeticionDeUsuario = 0; */
let contador = 0;
let nombreUsuario = "";
let chefAdministrador = new Chef("Danilo", "Fernandez", "chef", "chef-01");//No se si lo vamos a utilizar todavia
let colaborador1 = new Chef("Rodrigo", "Furest", "rfurest", "r-furest", 3, "Habilitado");
let colaborador2 = new Chef("Sebastian", "Alvarez", "salvarez", "s-alvarez", 3, "Habilitado");
let colaborador3 = new Chef("Juan", "da Silva", "jdasilva", "j-dasilva", 4, "Habilitado");
let colaborador4 = new Chef("Julieta", "Gonzalez", "jgonzalez", "j-gonzalez", 2, "Habilitado");
let colaborador5 = new Chef("Santiago", "Fagnoni", "sfagnoni", "s-fagnoni", 2, "Deshabilitado");
let colaborador6 = new Chef("Raul", "Furest", "rfurest1", "r-furest1", 2, "Deshabilitado");
let nuevaReceta1 = new Receta(1, "rfurest - Rodrigo Furest", "Torta de jamón y queso", "torta de jamon y queso.jpg", 45, "En una asadera mediana, esparcir la mitad de la masa, añadir jamón y queso a gusto y cubrir con la masa restante. Hornear 45 minutos. ¡Delicioso!", 24, 73);
let nuevaReceta2 = new Receta(2, "salvarez - Sebastian Alvarez", "Ñoquis", "ñoquis.jpg", 30, "Con la masa lista, dar forma a los ñoquis y volcarlos en agua hirviendo con sal. Los ñoquis deben de flotar cuando estén listos, usar salsa a gusto.", 58, 14);
let nuevaReceta3 = new Receta(3, "jdasilva - Juan da Silva", "Chivitos de cerdo", "chivito de cerdo.png", 30, "En una plancha, cocinar el churrasco de cerdo, huevo frito y morrón en tiras. En sartén aparte cocinar aros de cebolla y dejar dorar. Salsas a gusto.", 258, 1);
let nuevaReceta4 = new Receta(4, "chef - Danilo Fernandez", "Carne a la parrilla", "Carne a la parrilla.jpg", 50, "Sazonar la carne con orégano y sal. Colocar sobre la parrilla, añadir brasas y voltear cada 20 minutos. Servir con ensalada y esperar el aplauso.", 44, 11);
let nuevaReceta5 = new Receta(5, "sfagnoni - Santiago Fagnoni", "Pasta frola", "pastafrola.jpg", 60, "Colocar 2/3 de masa sobre la tartera, añadir el membrillo derretido  y esparcir. Con la masa restante realizar las clásicas tiras y hornear 60 minutos", 37, 26);
let nuevaReceta6 = new Receta(6, "chef - Danilo Fernandez", "Pizza con muzzarella", "pizza.jpg", 60, "En asadera colocar la masa y salsa de tomate. Pre cocinar durante 30 minutos y añadir mozzarella en tiras a gusto por 30 minutos. Cortar y servir.", 81, 21);
let nuevaReceta7 = new Receta(7, "jdasilva - Juan da Silva", "Milanesa de pollo con fritas", "milanesaconfritas.jpg", 46, "Empanar las pechugas de pollo y freír hasta que queden doradas. En sartén aparte freír las papas fritas. Servir con limón a gusto, sal y una cerveza.", 221, 18);
let nuevaReceta8 = new Receta(8, "sfagnoni - Santiago Fagnoni", "Torta frita", "tortafrita.jpg", 30, "Cortar la masa en círculos y perforar el centro. Calentar el aceite y freír la masa hasta que quede dorada y cocida. Azúcar a elección y un buen café.", 119, 8);
let nuevaReceta9 = new Receta(9, "jgonzalez - Julieta Gonzalez", "Empanadas de pollo", "empanadaspollo.jpg", 35, "Trocear la pechuga de pollo y sazonar con sal y pimienta. Colocar un poco de relleno sobre la masa y freír hasta que tome el color deseado. ", 97, 12);
let nuevaReceta10 = new Receta(10, "jgonzalez - Julieta Gonzalez", "Cazuela de mondongo", "cazuelamondongo.jpg", 85, "Hervir el mondongo hasta que quede tierno. Luego dorar la cebolla y sazonar, rallar zanahoria y añadir salsa de tomate. Trocear el mondongo y servir.", 7, 142);
let nuevaReceta11 = new Receta(11, "chef - Danilo Fernandez", "Lasagna", "lasagna.jpg", 70, "Con la masa en capas, colocar entre ellas la carne picada con panceta,cebolla picada y mozzarella. Hornear y añadir salsa bolognesa a gusto.", 113, 16);
let nuevaReceta12 = new Receta(12, "rfurest1 - Raul Furest", "Sorrentinos con tuco", "sorrentinossalsa.jpg", 40, "Hervir los sorrentinos en agua hasta que floten, en sartén aparte preparar la salsa de tomate con pedazos de pollo para el tuco. Servir a gusto.", 99, 30);
let nuevaReceta13 = new Receta(13, "rfurest - Rodrigo Furest", "Donas", "donas.jpg", 45, "Cortar la masa en círculos con una pequeña perforación en el centro. Hervir hasta que crezcan y servir con salsa de chocolate o mermelada.", 48, 20);
let nuevaReceta14 = new Receta(14, "salvarez - Sebastian Alvarez", "Pescado a la plancha", "pescadoalaplancha.jpg", 25, "En una plancha colocar los filetes de merluza y cocinarlos 5 minutos de cada lado. Servir con limón y perejil.", 49, 21);
let nuevaReceta15 = new Receta(15, "chef - Danilo Fernandez", "Torta de chocolate", "tortadechocolate.jpg", 35, "Colocar la masa de chocolate en la tortera y hornear a 180 grados durante 35 minutos. Calentar chocolate en barra y esparcir la salsa por la torta.", 214, 9);
let nuevaReceta16 = new Receta(16, "rfurest - Rodrigo Furest", "Flan casero", "flancasero.jpeg", 40, "Cocinar la preparación a baño maría junto al caramelo hasta que tome consistencia. Servir con dulce de leche.", 178, 23);
let nuevaReceta17 = new Receta(17, "salvarez - Sebastian Alvarez", "Polenta", "polenta.jpg", 15, "En una olla, lleve el agua y sal a hervir. Gradualmente añada la harina, removiendo constantemente por 15 minutos. Servir y poner queso rallado.", 36, 87);
let nuevaReceta18 = new Receta(18, "jdasilva - Juan da Silva", "Hamburguesa de carne", "hamburguesacarne.jpg", 30, "Sazonar y freír los medallones de carne hasta que queden bien cocidos. Servir en pan tortuga con lechuga, tomate, queso cheddar y mayonesa a gusto.", 242, 31);
let nuevaReceta19 = new Receta(19, "jdasilva - Juan da Silva", "Milanesa de berenjena", "milanesaberenjena.jpg", 40, "Empanar la berenjena y freír hasta que queden doradas. En sartén aparte freír las papas fritas. Servir con limón a gusto, sal y acompañar con arroz.", 32, 68);
let nuevaReceta20 = new Receta(20, "rfurest1 - Raul Furest", "Sushi", "sushi.jpg", 90, "Llamate al deliveri, simulacro", 142, 35);
chefs.push(chefAdministrador, colaborador1, colaborador2, colaborador3, colaborador4, colaborador5, colaborador6);
recetas.push(nuevaReceta1, nuevaReceta2, nuevaReceta3, nuevaReceta4, nuevaReceta5, nuevaReceta6, nuevaReceta7, nuevaReceta8, nuevaReceta9, nuevaReceta10, nuevaReceta11, nuevaReceta12, nuevaReceta13, nuevaReceta14, nuevaReceta15, nuevaReceta16, nuevaReceta17, nuevaReceta18, nuevaReceta19, nuevaReceta20);

//muestra seccion segun el click que hagamos
/* $(".btn").hide();
$(".user").show();
mostrarSeccion(); */

function mostrarSeccion() {
    $(".seccion").hide();
    let idBtn = $(this).attr("id");
    if (idBtn === undefined || idBtn === "btnSeccionCerrarSesion") {
        idBtn = "btnSeccionVerRecetas";
        $(".btn").hide();
        $(".user").show();
        nombreUsuario = "";
    }
    let idSeleccion = idBtn.charAt(3).toLowerCase() + idBtn.substr(4);
    $("#" + idSeleccion).show();

    switch (idSeleccion) {
        case "seccionVerRecetas":
            mostrarRecetas();
            break;
        case "seccionGestionarColaboradres":
            listadoColaboradores();
            break;
    }
    console.log($(this).attr("id"));
    console.log(idSeleccion);

}
$(".btn").click(mostrarSeccion);


// ingresar receta
function publicarReceta() {
    let tituloIngresado = $("#txtTitulo").val();//esto esta bien
    let imagenIngresada = $("#fileFotoReceta").val();//esto esta bien
    let nombreImagen = imagenIngresada.substr(imagenIngresada.lastIndexOf("\\") + 1);//esto esta bien
    let elaboracionIngresada = $("#txtElaboracionReceta").val();//esto esta bien
    let tiempoPreparacionIngresado = Number($("#txtTiempoPreparacionReceta").val());//esto esta bien
    let autorIngresado = nombreUsuario; //esto esta bien
    let nuevaReceta;

    if (elaboracionIngresada.length <= 150 && !isNaN(tiempoPreparacionIngresado) && tituloIngresado !== "" && nombreImagen !== "" && autorIngresado !== "") {
        nuevaReceta = new Receta(idRecetas, autorIngresado, tituloIngresado, nombreImagen, tiempoPreparacionIngresado, elaboracionIngresada, 0, 0);
        idRecetas++;
        for (let i = 0; i < chefs.length; i++) {
            if (nombreUsuario.substr(0, nombreUsuario.indexOf(" ")) === chefs[i].usuario) {
                chefs[i].cantidadRecetas++;
                break;
            }
        }
    } else {
        alert(`Alguno de los datos no fue ingresado correctamente`);
    }

    if (nuevaReceta !== undefined) {
        recetas.push(nuevaReceta);
    }
    $("#txtTitulo").val("");
    $("#fileFotoReceta").val("");
    $("#txtElaboracionReceta").val("");
    $("#txtTiempoPreparacionReceta").val("");
}
$("#btnAgregarReceta").click(publicarReceta);


//ver recetas
function mostrarRecetas() {
    $("#seccionVerRecetas").empty();
    let chefDeshabilitado = "";
    let chefHabilitado = "";

    for (let i = 1; i < chefs.length; i++) {
        if (chefs[i].chefEstado === "Deshabilitado") {
            chefDeshabilitado = `${chefs[i].usuario} - ${chefs[i].nombre} ${chefs[i].apellido}`;
            for (let j = 0; j < recetas.length; j++) {
                if (recetas[j].autor === chefDeshabilitado) {
                    recetas[j].recetaHabilitada = false;
                }
            }
        } else {
            chefHabilitado = `${chefs[i].usuario} - ${chefs[i].nombre} ${chefs[i].apellido}`;
            for (let k = 0; k < recetas.length; k++) {
                if (recetas[k].autor === chefHabilitado) {
                    recetas[k].recetaHabilitada = true;
                }
            }
        }
    }

    for (let q = 0; q < recetas.length; q++) {
        if (recetas[q].recetaHabilitada) {
            $("#seccionVerRecetas").append(`
            <h2>${recetas[q].titulo}</h2>
            <h4>${recetas[q].autor}</h4>
            <img src="imagenes/${recetas[q].foto}" class="imagenesRecetas">
            <p class="duracion"><strong>${recetas[q].tPreparacion}</strong> minutos</p>
            <p>${recetas[q].elaboracion}</p>
            <p id="meGusta">
            <span id="cantidadMeGusta">${recetas[q].meGusta}</span>
            <img src="imagenes/like.png" id="btnMeGustaReceta${recetas[q].id}" class="likes">
            |
            <img src="imagenes/dislike.png" id="btnNoMeGustaReceta${recetas[q].id}" class="likes">
            <span id="cantidadNoMeGusta">${recetas[q].noMeGusta}</span>
            </p>`);
        }
    }
    $(".likes").click(sumarLikes);
}
//preguntarle al profesor
function sumarLikes() {
    let idBtnLikes = $(this).attr("id");
    let nuevoId = idBtnLikes.substr(3);
    let idReceta = Number(idBtnLikes.substr(idBtnLikes.lastIndexOf("a") + 1));
    if (idBtnLikes.charAt(3) === "M") {
        for (let i = 0; i < recetas.length; i++) {
            if (idReceta === recetas[i].id) {
                recetas[i].meGusta++;
                mostrarRecetas();
            }
            $("#btn" + nuevoId).attr("src", "imagenes/like.jpg");
            $("#btnNo" + nuevoId).attr("src", "imagenes/dislike.png");
        }
    } else {
        for (let i = 0; i < recetas.length; i++) {
            if (idReceta === recetas[i].id) {
                recetas[i].noMeGusta++;
                mostrarRecetas();
            }
            $("#btn" + nuevoId).attr("src", "imagenes/dislike.jpg");
            $("#btn" + nuevoId.substr(2)).attr("src", "imagenes/like.png")
        }
    }

}


//inicio de sesion de chefs - 100%
function validarCredenciales() {
    let usuarioIngresado = $("#txtNombreUsuario").val();
    let contraseñaIngresada = $("#txtContraseña").val();
    let existe = false;

    for (let i = 0; i < chefs.length; i++) {
        if (usuarioIngresado === chefs[i].usuario && contraseñaIngresada === chefs[i].contraseña) {
            existe = true;
            nombreUsuario = `${chefs[i].usuario} - ${chefs[i].nombre} ${chefs[i].apellido}`;//salvarez - Sebastian Alvarez
            break;
        }
    }

    if (existe && usuarioIngresado === chefs[0].usuario) {
        $(".btn").hide();
        $(".admin").show();
        $(".seccion").hide();
        $("#seccionPublicarReceta").show();
        $("#btnSeccionIniciarSesion").hide();
    } else if (existe && usuarioIngresado !== chefs[0].usuario) {
        $(".btn").hide();
        $(".colaborador").show();
        $(".seccion").hide();
        $("#seccionPublicarReceta").show();
        $("#btnSeccionIniciarSesion").hide();
    } else {
        alert(`El usuario o la contraseña es incorrecto, intentelo nuevamente`);
    }

    $("#txtNombreUsuario").val("");
    $("#txtContraseña").val("");
}
$("#btnIngresar").click(validarCredenciales);


//registro de colaboradores - 100% - seccion Gestionar colaboradores
function registrarColaborador() {
    let registrarNombre = $("#txtNombreColaborador").val();
    let registrarApellido = $("#txtApellidoColaborador").val();
    let registrarUsuario;
    let registrarContraseña;
    let nuevoNombre;
    let nuevoApellido;
    let existe = false;
    let repeticion = 0;

    for (let i = 0; i < chefs.length; i++) {
        if (registrarUsuario === chefs[i].usuario) {
            existe = true;
        }
        while (existe === true) {
            repeticion++;
            existe = false;
        }
        if (repeticion === 0) {
            registrarUsuario = registrarNombre.toLowerCase().charAt(0) + registrarApellido.toLowerCase();
            registrarContraseña = registrarNombre.toLowerCase().charAt(0) + "-" + registrarApellido.toLowerCase();
        } else {
            registrarUsuario = registrarNombre.toLowerCase().charAt(0) + registrarApellido.toLowerCase() + repeticion;
            registrarContraseña = registrarNombre.toLowerCase().charAt(0) + "-" + registrarApellido.toLowerCase() + repeticion;
        }
    }

    if (registrarNombre !== undefined && isNaN(registrarNombre) && registrarApellido !== undefined && isNaN(registrarApellido)) {
        nuevoNombre = registrarNombre.toUpperCase().charAt(0) + registrarNombre.toLowerCase().substr(1);
        nuevoApellido = registrarApellido.toUpperCase().charAt(0) + registrarApellido.toLowerCase().substr(1);
        let nuevoColaborador = new Chef(nuevoNombre, nuevoApellido, registrarUsuario, registrarContraseña, 0, "Habilitado");
        chefs.push(nuevoColaborador);
    } else {
        alert(`El nombre o el apellido fue ingresado incorrectamente`);
    }

    $("#txtNombreColaborador").val("");
    $("#txtApellidoColaborador").val("");

    listadoColaboradores();
}
$("#btnAgregarColaborador").click(registrarColaborador);


//listado de colaboradores - seccion Gestionar colaboradores - preguntarle al profesor como mejorarla - 100%
function listadoColaboradores() {
    $("#tblColaboradores").empty();
    for (let i = 1; i < chefs.length; i++) {
        $("#tblColaboradores").append(`<tr>
        <td>${chefs[i].nombre}</td>
        <td>${chefs[i].apellido}</td>
        <td>${chefs[i].usuario}</td>
        <td>${chefs[i].cantidadRecetas}</td>
        <td>${chefs[i].chefEstado}</td>
        <td><input type="button" id="${chefs[i].usuario}" class="btn"></td>
        </tr>`);
        if (chefs[i].chefEstado === "Habilitado") {
            $("#" + chefs[i].usuario).attr("value", "Deshabilitar colaborador");
        } else {
            $("#" + chefs[i].usuario).attr("value", "Habilitar colaborador");
        }
    }
    $(".btn").click(deshabilitarColaborador);
}


//habilitar/deshabilitar colaboradores - 100$
function deshabilitarColaborador() {
    let idBtn = $(this).attr("id");
    for (let i = 1; i < chefs.length; i++) {
        if (idBtn === chefs[i].usuario && chefs[i].chefEstado === "Habilitado") {
            chefs[i].chefEstado = "Deshabilitado";
            break;
        } else if (idBtn === chefs[i].usuario && chefs[i].chefEstado === "Deshabilitado") {
            chefs[i].chefEstado = "Habilitado";
            break;
        }
    }
    listadoColaboradores();
}

//falta: buscador, reportes, mostrar primero las recetas del admin