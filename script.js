//Funcion pal menu responsivo//
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className==="") {
        x.className = "responsive";
    } else{
        x.ClassName ="";
    }
}
//funcion estilo opcion seleccionada menu//
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = ""
    opciones[1].className = ""
    opciones[2].className = ""
    opciones[3].className = ""
    opciones[4].className = ""
    link.className = "seleccionado"

    //desaparece el menu cuando selecciono opcion en responsive//
    var x = Document.getElementById("nav");
    x.className = ""

}

