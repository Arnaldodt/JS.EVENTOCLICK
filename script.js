function CambiaTexto(elemento){

    if (elemento.value =="Login"){
        elemento.value="LogOut"
    } else{
        elemento.value="Login"
    }
    
}

function RemoverBtn(elemento){
    elemento.remove();
}

function Alerta(){
    alert('This page says\nNinja wa liked');
}