//Interacción entre el java script y el html
let numeroSecreto = 0;
let numeroIntentos = 0 ;
let numerosSorteados = [];
let numeroMaximo = 10




//Interacción con botones
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

   

    if(numeroUsuario === numeroSecreto ){
        asignarTextoElemento('p', `Acertaste en ${numeroIntentos} ${(numeroIntentos === 1) ? 'intento' : 'intentos' }, el número secreto era ${numeroSecreto}`);
        //Habilitamos boton de nuevo juego
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intentar').setAttribute('disabled', 'true');
    }else if(numeroSecreto > numeroUsuario){

        asignarTextoElemento('p', 'El número secreto es mayor');
    }else{
        asignarTextoElemento('p', 'El número secreto es menor');
    }
    numeroIntentos++;
    limpiarCampos();
    return;
}

//Función para reducir código
function asignarTextoElemento(elemento, texto){        
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;    
    return;
}

function generaciónNúmeroAleatorio(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(numerosSorteados);
    //Ya se sortearon todos los numeros ?

    if(numeroMaximo === numerosSorteados.length){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{
        //Si el numero generado esta incluido en la lista
    //hacemos algo, si no pues se sigue normal el juego

    if(numerosSorteados.includes(numeroGenerado)){
        //Recursividad: llamar así mismo a la misma función para poder
        //generar de nuevo otro numero
        //Cuidado de cuando utilizar la recursividad ya que debo tener en
        //cuenta las condiciones de salida de la función
        return generaciónNúmeroAleatorio();        
    }else{
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function limpiarCampos(){
    document.querySelector('#valorUsuario').value = ''; //Eliminar contenido dentro de campos
    
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto?');
    asignarTextoElemento('p',`Escoge un número del 1 al ${numeroMaximo} :)`);
    numeroSecreto = generaciónNúmeroAleatorio(); 
    numeroIntentos = 1;
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    document.getElementById('intentar').removeAttribute('disabled');
}
function reiniciarJuego() {
    //Limpiar cajas
    limpiarCampos();

    //Indicar mensaje de intervalo de numeros
    //generar de nuevo el numero aleatorio
    //deshabilitar el boton de nuevo juego
    //inicializar intentos de nuevo
    condicionesIniciales();
}

condicionesIniciales();

