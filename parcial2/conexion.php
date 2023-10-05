<?php
    $server = "localhost";
    $user = "root";
    $password ="";

    //conexion
    $conexion = new mysqli($server,$user,$password);

    //revisar
    if($conexion->connect_error){
        die("Fallo la conexion". $conexion->connect_error);
    }
 ?>   