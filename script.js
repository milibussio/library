// CONSTRUCTOR DE LIBRO

function Libro(titulo, autor, cantPags, leido){
    this.titulo = titulo
    this.autor = autor
    this.cantPags = cantPags
    this.leido = leido
}

// FUNCION AGREGAR LIBRO

function agregarLibro(){

}

// AGREGAR FUNCION A PROTOTIPO DE LIBRO

Libro.prototype.info = function(){
    let leidoTxt = ""     

    if (this.leido){
        leidoTxt = "Lo has leído"
    } else {leidoTxt = "No lo has leído"}

    return( `${this.titulo}, escrito por ${this.autor}, tiene ${this.cantPags} páginas. ${leidoTxt}.`);
}

// OBJETOS PARA POBRAR LIBRERÍA

const libro1 = new Libro("El Hobbit", "JR Tolkien", 295, false);
const libro2 = new Libro("Mil Soles Espléndidos", "Khaled Hosseini", 384, true)
const libro3 = new Libro("La Vegetariana", "Han Kang", 240, true);
const libro4 = new Libro("Todos Deberíamos Ser Feministas", "Chimamanda Ngozi Adichie", 55, false);
const libro5 = new Libro("Cosas que te pasan si estás vivo", "Liniers", 220, true);

// ARRAY DE LIBRERÍA

let miLibreria = [libro1, libro2, libro3, libro4, libro5];

// CREO EL CONTENEDOR LAS CARDS COMO ELEMENTOS

let contenedor = document.querySelector(".contenedor");

// CREO LAS CARDS EN EL HTML

function crearCard(){

let id = 0;

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

crearCard();

// ACCIONES ON LICK

window.addEventListener("click", function(e){
    
    // CONSIGO ID DE LA CARD Y CLASS DEL OBJEETO TARGER
    let elementId = e.target.parentNode["id"];
    let elementClass = e.target.className;

    if (!elementId){
        elementId = e.target.parentNode.parentNode["id"];
    }
    
    // ACTIVO BOTÓN BORRAR
    if (elementClass.includes("del")){
        borrar(elementId);
    };
})

window.EventTarget

// FUNCION PARA BORRAR

function borrar(id){

    //CREO LAS CARDS
    let card = document.querySelectorAll(".contenedor");

    // PRIMERO VIENE CON ADVERTENCIA EN UN MODAL
    let modal = document.getElementById("advertencia");

    // TRAIGO LA X PARA PODER CERRAR EL MODAL
    let span = document.getElementsByClassName("close")[0];

    //  TRAIGO LOS BOTONES SI Y NO,
    let si = document.getElementsByClassName("si")[0];
    let no = document.getElementsByClassName("no")[0];
    console.log(si, no);

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
        removeAllChildNodes(card[id]); // HAY QUE ARREGLAR ESTO!!
        modal.style.display = "none";
    }
}


// FUNCION PARA BORRAR LOS HIJOS

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}