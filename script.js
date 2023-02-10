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

//barritas del amor//
window.onscroll = function(){
    efectoHabilidades()
};
//animacion barrita del amor//
function efectoSkill(){
    var skill = document.getElementById("skill")
    var distancia_skill = window.innerHeight - skill.getBoundingClientRect().top;
    if(distancia_skills >=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bst").classList.add("barra-progreso3");
        document.getElementById("gt").classList.add("barra-progreso4");
        document.getElementById("rts").classList.add("barra-progreso5");
    }
}