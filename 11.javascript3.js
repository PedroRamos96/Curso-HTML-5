/*
    querySelector(): retorna el primer elementos que corresponder al grupo de selectores
                     indicado entre parentesis
    

    querySelectorAll(): retorna todos los elementos que corresponden al grupo de selectores
                        indicado entre parentesis. El valor devuelto es un Array conteniendo
                        los elementos en el mismo orden en el que aparecen en el documento


*/

function ejecutar() {

    //retorna el primer elemento del selector apuntado
    document.querySelector(".importante").onclick = ventana;

    //apunta a la ultima etiqueta que descienda del atributo #principal
    document.querySelector("#principal p:last-child").onclick = ventana;

    var array = document.querySelectorAll("#principal p, span");
    /*con el parametro "span" indicamos que aplique evento a todas las palabras dentro de una 
      etiqueta span*/

    for (var i = 0; i <array.length; i++) {

        //apunta a todos los elementos dentro del atributo #principal       
        array[i].onclick = ventana;

    }
}

function ventana() {
    alert("ndeaaaaaaa");
}

window.onload = ejecutar; //cuando carge la pagina llama a la funcion