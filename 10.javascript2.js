function ejecutar(){

    //permite identificar elementos de hmtl indicando etiqueta y su indice
    document.getElementsByTagName("p")[0].onclick=ventana;

    //permite identificar elementos de hmtl indicando id de etiqueta
    document.getElementById("importante").onclick=ventana;

    //recorre array aplicando funcion en todas las etiquetas "p"
    for(var i=0; i<9; i++){

        document.getElementsByTagName("p")[i].onclick=ventana;

    }

    //identifica solo al elemento en el indice 1 de la clase importante2
    var a=document.getElementsByClassName("importante2")[1].onclick=ventana;

}

function ventana()
{
    alert("ndeaaaaaaa");
}

window.onload=ejecutar; //cuando carge la pagina llama a la funcion