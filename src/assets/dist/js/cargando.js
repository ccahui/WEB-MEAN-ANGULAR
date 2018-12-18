 // Para mostrar un archivo miestra carga, se presentaron conflictos con las versiones de JQuery
 onload = function () {


    var fadeTarget = document.getElementById("cargando");
    
        var fadeEffect =  setInterval(function () {
            if (!fadeTarget.style.opacity) {
              fadeTarget.style.opacity = 1;
            }
            if (fadeTarget.style.opacity > 0) {
              fadeTarget.style.opacity -= 0.1;
            } else {
              clearInterval(fadeEffect);
            }
          }, 30);
          
    this.setTimeout(function(){
        fadeTarget.remove();
    },100);
    
    
    
  }