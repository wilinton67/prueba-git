

function getBom(){
    console.log(screen.width)
    console.log(screen.height)
    console.log(window.location)
}

function redirect(url){
    return window.location.href = url;
}
getBom();
function abrirVentana(url){
    return window.open(url,"","width=400,height=400");
}
