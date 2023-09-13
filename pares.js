$(document).ready(function (){
    var carta1 = ""; var carta2 = "";
    var par = false;
    var total_pares = 0;
    var total_intentos=0;
    var contador =0;
    $('img').click(function (e){
        var estado = $(this).attr('data-estado')
        var nombre_imagen = $(this).attr('data-id')
       
        if(estado == "0"){
            if(carta1 != "" && carta2 != ""){
                console.log("Las cartas son diferentes")
                if(carta1.attr('data-id')!= carta2.attr('data-id')){
                  console.log("Tapa cartas diferentes")
                  carta1.attr('src', 'imagenes/tapada.jpg')
                  carta2.attr('src', 'imagenes/tapada.jpg')  
                  carta1.attr('data-estado', '0')
                  carta2.attr('data-estado', '0')
                }else{
                console.log("Las cartas son iguales")
                carta1.attr('data-estado', '1')
                par=false
            }
            carta1=""
            carta2=""
        }

        
         console.log("Estado de la carta: " + estado)

        if(carta1 == ""){
            carta1 = $(this);
            carta1.attr('src', 'imagenes/' + nombre_imagen)
            console.log("Se asigno carta #1")
            carta1.attr('data-estado', '1')
            console.log("Se asigno carta1")
        }else{
            carta2 =$(this);
            carta2.attr('src', 'imagenes/' + nombre_imagen)
            console.log("Se asigno carta #2")
            carta2.attr('data-estado', '1')
            console.log("Se asigno carta2")
        }
    
    }
            if(carta1 !="" && carta2 != ""){
                console.log(carta1.attr('data-id'))
                console.log(carta2.attr('data-id'))
                if(carta1.attr('data-id')== carta2.attr('data-id')){
                    par=true
                total_pares++
                $("#total_pares").html(total_pares)
                console.log("Ganaste un par")
                }else{
                    total_intentos++
                    console.log("intento fallido")
                    carta1=""
                    carat2=""
                }     
            } 
            console.log(total_intentos)
            if(total_intentos >=5){
                alert("Exediste el número de intentos permitidos")
                alert("Has perdido el juego =(, intenta de nuevo")
                $('img').each(function(){
                    $(this).attr('src','imagenes/tapada.jpg')
                    $(this).attr('data-estado', '0')
                    location.reload()
                });

            }
            
            if(total_pares ==8){
                $('img').each(function(){
                    $(this).attr('src', 'imagenes/tapada.jpg')
                    $(this).attr('data-estado','0')
                });
                total_pares=0;
                par=false;
                carta1=""
                carat2=""
                return;
                
            }
    });
});