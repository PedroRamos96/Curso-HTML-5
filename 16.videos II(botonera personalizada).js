/*
    PROPIEDADES OBJETO VIDEO:

        Duration: duracion del video
        currentTime: tiempo actual del video
        Paused: video pausado
        Ended: video finalizado

    METODOS OBJETO VIDEO:

        Play()
        Pause()


    pageX: devuelve posicion del puntero en el eje x
    pageY: devuelve posicion del puntero en el eje y
    offsetLeft: devuelve cual es la distancia desde el borde izq de la pantalla 
                hasta el objeto donde fue aplicada

*/

var mivideo, reproducir, barra, progreso, maximo;
maximo = 600;//a la brra en css le pusimos ancho de 600px

function comenzar() {

    //identifico los elementos html
    mivideo = document.getElementById("mivideo");
    reproducir = document.getElementById("reproducir");
    barra = document.getElementById("barra");
    progreso = document.getElementById("progreso");

    reproducir.addEventListener("click", ponerPlay, false);
    barra.addEventListener("click", controlBarra, false);

    function ponerPlay() {

        if(mivideo.paused == false){

            mivideo.pause();
            reproducir.innerHTML = "Play"

        }
        else {

            mivideo.play();
            reproducir.innerHTML = "Pause"//permite establecer texto interno del elemento

            bucle = setInterval(estadoBarra, 10);
            //segundo parametro: cada cuanto tiempo llama a la funcion(en milisegundos)
        }

    }

    function estadoBarra() {

        if (mivideo.ended == false) {

            var total = parseInt(mivideo.currentTime * maximo / mivideo.duration);//regla de 3 

            /*
                tiempo total(duration)            ------ cantidad de px de la barra(maximo)
                tiempo transcurrido(current time) ------ en que pixel se encuentra barra       
            
            */

            progreso.style.width = total + "px";
            //modificar estilo de barra de progreso
        }
    }

    function controlBarra(posicion) {

        var punteroX = posicion.pageX - barra.offsetLeft;

        /* regla de 3: 

           tamaño total de la barra(maximo) ------ duracion total del video(duration)
           pixel en la barra donde se hizo click(puntero X) ------ a que tiempo del video corresponde el pixel        
       
       */

        var nuevoTiempo = punteroX * mivideo.duration / maximo; //regla de 3:

        mivideo.currentTime = nuevoTiempo;//actualizo el nuevo tiempo del video

        progreso.style.width = punteroX + "px";

    }

}

window.addEventListener("load", comenzar, false);