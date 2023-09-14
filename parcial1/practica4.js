$(document).ready(function (){
    var valor=0;

    $("#boton").click(function (e){
        valor_dado = Math.floor(Math.random()*6+1)
        console.log("Sacaste un:" + valor_dado)
        $("#dado").attr("src", "imagenes/car" + valor_dado + ".png");
        $("#numero").html(valor_dado)
    });
});