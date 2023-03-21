////// CONSTRUCTOR DE LIBRO //////

function Libro(titulo, autor, cantPags, leido){
    this.titulo = titulo
    this.autor = autor
    this.cantPags = cantPags
    this.leido = leido
}

////// OBJETOS PARA POBRAR LIBRERÍA //////

let id = 0;

const libro1 = new Libro("El Hobbit", "JR Tolkien", 295, false);
const libro2 = new Libro("Mil Soles Espléndidos", "Khaled Hosseini", 384, true)
const libro3 = new Libro("La Vegetariana", "Han Kang", 240, true);
const libro4 = new Libro("Todos Deberíamos Ser Feministas", "Chimamanda Ngozi Adichie", 55, false);
const libro5 = new Libro("Cosas que te pasan si estás vivo", "Liniers", 220, true);

////// ARRAY DE LIBRERÍA //////

let miLibreria = [libro1, libro2, libro3, libro4, libro5];

////// CREO EL CONTENEDOR LAS CARDS COMO ELEMENTOS ////// 

let contenedor = document.querySelector(".contenedor");

////// CREO LAS CARDS EN EL HTML //////

function crearCards(){

    for (libro of miLibreria){

        // creo elemento card
        const card = document.createElement("div");
        card.classList.add("card"); // le agrego clase
        card.setAttribute("id", id) // le agrego ID (el id es la longitud del array)
        
        //creo titutlo
        const titulo = document.createElement("h2");
        titulo.textContent = libro.titulo; // le agrego contenido
        card.appendChild(titulo); //apend el titulo a la card
        
        //creo autor
        const autor = document.createElement("h3");
        autor.textContent = libro.autor;; // le agrego contenido
        card.appendChild(autor); //apend el autor a la card
        
        //creo paginas
        const paginas = document.createElement("h3");
        paginas.textContent = libro.cantPags;; // le agrego contenido
        card.appendChild(paginas); //apend paginas a la card
        
        // creo botón
        const leido = document.createElement("button");
        if (libro.leido){
            leido.classList.add("leido"); // le agrego clase
            leido.textContent = "Leído"; // le agrego contenido
        } else {
            leido.classList.add("leido", "noLeido"); // le agrego clase
            leido.textContent = "No leído"; // le agrego contenido    
        }
        card.appendChild(leido); //apend paginas a la card
        // creo div de imagenes
        const acciones = document.createElement("div");
        acciones.classList.add("acciones"); // le agrego clase
        
        // creo las imagenes del div
        const imgDel = document.createElement("img");
        imgDel.classList.add("icono", "del"); // le agrego clase
        imgDel.src = "imagenes/del.png"; // le agrego el src
        acciones.appendChild(imgDel); // apend al div d eacciones
        const imgEdit = document.createElement("img");
        imgEdit.classList.add("icono", "edit"); // le agrego clase
        imgEdit.src = "imagenes/edit.png"; // le agrego el src
        acciones.appendChild(imgEdit); // append al div de acciones
        card.appendChild(acciones); // append el div de accioens a new card

        // agrego la card al contendor
        contenedor.appendChild(card);
        id++;
    }
}

crearCards();

////// ACCIONES ON  CLICK //////

window.addEventListener("click", function(e){
    
    // CONSIGO ID DE LA CARD Y CLASS DEL OBJEETO TARGER
    let elementId = e.target.parentNode["id"];
    let elementClass = e.target.className;

    if (!elementId){
        elementId = e.target.parentNode.parentNode["id"];
    }
    
    // ACTIVO BOTÓN BORRAR
    if (elementClass.includes("del")){
        console.log("ACA SE BORRA", elementId);
        borrar(elementId);
    };

    //ACTIVO BOTÓN PARA AGREGAR
    if (elementClass.includes("add")){
        nuevoFormulario();
    };

    // ACTIVO BOTÓN PARA CAMBIAR DE LEÍDO A NO LEÍDO
    if(elementClass.includes("leido")){

        let btnTexto = e.target;

        if (!btnTexto.classList.contains('noLeido')){
            btnTexto.textContent = "No leído"
            btnTexto.classList.add("noLeido");
        } else {
            btnTexto.textContent == "Leído";
            btnTexto.textContent = "Leído"
            btnTexto.classList.remove("noLeido");
        }
    }
})


// CREAR CARD NUEVA //

function crearCard(){
    // creo elemento card
    const card = document.createElement("div");
    card.classList.add("card"); // le agrego clase
    card.setAttribute("id", id-1) // le agrego ID (el id es la longitud del array)
    
    // traigo el último elemento del array
    let ultimoLibro = miLibreria[miLibreria.length - 1];

    //creo titutlo
    const titulo = document.createElement("h2");
    titulo.textContent = ultimoLibro.titulo; // le agrego contenido
    card.appendChild(titulo); //apend el titulo a la card
        
    //creo autor
    const autor = document.createElement("h3");
    autor.textContent = ultimoLibro.autor;; // le agrego contenido
    card.appendChild(autor); //apend el autor a la card
        
    //creo paginas
    const paginas = document.createElement("h3");
    paginas.textContent = ultimoLibro.cantPags;; // le agrego contenido
    card.appendChild(paginas); //apend paginas a la card
        
    // creo botón
    const leido = document.createElement("button");
    if (ultimoLibro.leido){
        leido.classList.add("leido"); // le agrego clase
        leido.textContent = "Leído"; // le agrego contenido
    } else {
        leido.classList.add("leido", "noLeido"); // le agrego clase
        leido.textContent = "No leído"; // le agrego contenido    
    }
    card.appendChild(leido); //apend paginas a la card
    // creo div de imagenes
    const acciones = document.createElement("div");
    acciones.classList.add("acciones"); // le agrego clase
     
    // creo las imagenes del div
    const imgDel = document.createElement("img");
    imgDel.classList.add("icono", "del"); // le agrego clase
    imgDel.src = "imagenes/del.png"; // le agrego el src
    acciones.appendChild(imgDel); // apend al div d eacciones
    const imgEdit = document.createElement("img");
    imgEdit.classList.add("icono", "edit"); // le agrego clase
    imgEdit.src = "imagenes/edit.png"; // le agrego el src
    acciones.appendChild(imgEdit); // append al div de acciones
    card.appendChild(acciones); // append el div de accioens a new card
    
    // agrego la card al contendor  
    contenedor.appendChild(card);
    id++;
}

////// FUNCION PARA BORRAR //////

function borrar(id){

    //CREO LAS CARDS
    let card = document.getElementById(id);
    console.log(card);
    console.log(id);
    // PRIMERO VIENE CON ADVERTENCIA EN UN MODAL
    let modal = document.getElementById("advertencia");

    // TRAIGO LA X PARA PODER CERRAR EL MODAL
    let span = document.getElementsByClassName("close")[0];

    //  TRAIGO LOS BOTONES SI Y NO,
    let si = document.getElementsByClassName("si")[0];
    let no = document.getElementsByClassName("no")[0];

    // ABRIR EL MODAL
    modal.style.display = "block";  

    // CLIKCEAR AFUERA DEL MODAL CIERRA EL MODAL
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        }    

    // X Y NO CIERRAN EL MODAL
    span.onclick = function() {
        modal.style.display = "none";
    }

    no.onclick = function() {
        modal.style.display = "none";
    }

    // CLICKEAR SI BORRA EL CARD, SE ELIMINA EL OBJETO DEL ARRAY Y CIERRA EL MODAL
    si.onclick = function(){
        miLibreria.splice(id, 1);
        card.remove();
        modal.style.display = "none";
    }
}

////// ABRIR MODAL AGREGAR/EDITAR //////

function nuevoFormulario(){

    // SE CREA MODAL FORMULARIO
    let modal = document.getElementById("formulario");

    //  TRAIGO LOS BOTONES SI Y NO,
    let guardar = document.getElementsByClassName("guardar")[0];
    let salir = document.getElementsByClassName("salir")[0];

    // ABRIR EL MODAL
    modal.style.display = "block";  

    // CLIKCEAR AFUERA DEL MODAL CIERRA EL MODAL
    window.onclick = function(event) {
        if (event.target == modal) {
            resetInput();
            modal.style.display = "none";
            }
        }    

    // SALIR CIERRA EL MODAL

    salir.onclick = function() {
        resetInput();
        modal.style.display = "none";
    }

    // GUARDAR DATOS

    guardar.onclick = function() {
        if (agregarLibro()){
            modal.style.display = "none";
        }
    }


}

////// FUNCION AGREGAR LIBRO //////

function agregarLibro(){
    
    let valido = 0;

    let titulo = document.getElementById("titulo");
    if (!titulo.value || titulo.value.trim() == ""){
        titulo.classList.add("invalido");
        valido ++;
    } else {
        titulo.classList.remove("invalido");
    }
    let autor = document.getElementById("autor");
    if (!autor.value || autor.value.trim() == ""){
        autor.classList.add("invalido");
        valido ++;
    } else {
        autor.classList.remove("invalido");
    }   
    let catPags = document.getElementById("catPags");
    let num = parseInt(catPags.value);    
    if (isNaN(num)){
        catPags.classList.add("invalido");
        valido ++;
    } else {
        catPags.classList.remove("invalido");
    }
    let leido = document.getElementById("leido").checked;

    id++;
    const libro = new Libro(titulo.value.trim(), autor.value.trim(), catPags.value, leido);
    miLibreria.push(libro); 
    console.log(miLibreria);

    if (valido > 0){
        return false;
    } else {
    crearCard();
    resetInput();
    return true;
    }
}

// RESETAR INPUTS

function resetInput(){
    let titulo = document.getElementById("titulo");
    let autor = document.getElementById("autor");
    let catPags = document.getElementById("catPags");
    let leido = document.getElementById("leido");

    titulo.value = "";
    autor.value = "";
    catPags.value = "";
    leido.checked = false;
}

// esto no lo vamos a usar, pero lo dejo acá para recordarlo jj
// ////// AGREGAR FUNCION A PROTOTIPO DE LIBRO //////

// Libro.prototype.info = function(){
//     let leidoTxt = ""     

//     if (this.leido){
//         leidoTxt = "Lo has leído"
//     } else {leidoTxt = "No lo has leído"}

//     return( `${this.titulo}, escrito por ${this.autor}, tiene ${this.cantPags} páginas. ${leidoTxt}.`);
// } 