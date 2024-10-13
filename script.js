//Constantes para guardar arreglos
// document.querySelector = devuelve el primer elemento del documento 
const pantalla = document.querySelector(".pantalla")//guaradar lo que pasa en pantalla
const botones = document.querySelectorAll(".boton")//all para que guarde todo lo que el usuario oprima en los botones

//recorrer constante botones con un fro each se llamara boton
botones.forEach(boton => {
    //element.addEventListener eventos que resgitran lo que sucede en la pantalla y en los botones -- click para todos los botones
    boton.addEventListener("click", () => {
        console.log(boton.textContent);//probar por consola
        const botonOn = boton.textContent; //constante que contiene lo que el usuario oprima    

        //condicional borrar NO ME ESTA BORRANDO NADA 
        if (boton.id === "borrar"){    
            if (pantalla.textContent.length === 1 || pantalla.textContent === "¡Error!"){//llega hasta el ultimo nuemro y si se borra coloca un 0
                pantalla.textContent = "0";
            }else{
                //boton borrar  .slice toma lo  que esta en un arreglo y parte en pedazos, para que borre 
                pantalla.textContent = pantalla.textContent.slice(0, -1); //partir arreglo de la pantala de 1 en 1 como va a izquierda sera -1 hasta 0
            }
            return;
        }

        //condiconal boton igual
        if(boton.id === "igual"){
           
            //declaración try 
            try {    

                //ERROR 2) verificar si el ultimo caracter es / señale error
                //ERROR 3) division entre 0 no sea infinity sino error
                //Uso de slice() con índices negativos     
                const ultimoCaracter = pantalla.textContent.slice(-1);//obtener el último carácter de lo que se está mostrando en la pantalla.  
                const ultimosDosCarateres = pantalla.textContent.slice(-2)//obtener últimos dos carácteres de lo que se está mostrando en la pantalla.
                //console.log("ultimo caracter "+ultimoCaracter);
                //console.log("ultimosDosCarateres  "+ultimosDosCarateres);

                //verificar si el ultimo caracter es / o los dos ultimos son /0
                if (ultimoCaracter === "/" || ultimosDosCarateres === "/0") {
                    pantalla.textContent = "¡Error!";
                    //return;
                }else{
                    //si la operacion matematica es coherente
                    //hara operaciones matematica eval hace una evaluzacion matematica de lo que encuentra en el arreglo
                    pantalla.textContent = eval(pantalla.textContent); 
                } 
                       
            } catch (error) {
                //si la operacion matematica NO es coherente
                pantalla.textContent = "¡Error!";
            }
            return;
        }

      
        //condicional -----> AGREGA Y SE SALE DE LA PANTALLA
        if (pantalla.textContent === "0" || pantalla.textContent == "¡Error!"){
            pantalla.textContent = botonOn;//si pantalla esta en 0 o error remplazar por lo que el usuario oprima
        } else {      
            pantalla.textContent += botonOn;//sino agregue los numeros que el usuario ingresa
        }

        //condicional para boton c, colocar pantalla en 0
        if (boton.id === "limpiar"){
            pantalla.textContent = 0;
            return;//para que no se ejecute de forma secuencial
        }
      
    })
})