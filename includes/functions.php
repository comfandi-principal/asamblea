<?php

//funcion para validar los datos
function validateArray(array $array) : array {
    $data = [];

    foreach($array as $key => $value) {
        //sanitizamos los datos por medio de string
        $data[$key] = replaceString($value);
    }

    return $data;
}

//funcion para reemplazar nuestros caracteres especiales
function replaceString(string $string): string {
    $patron = "/[<>!:.,=?¡¿()$%&''\"]/";

    $texto_limpio = preg_replace($patron, '', $string);

    return $texto_limpio;
}

//creamos el token csrf
function createToken(){
    session_start();

    //generamos una sesion con un token aleatorio
    $_SESSION['token'] = md5(uniqid(mt_rand(), true));

}