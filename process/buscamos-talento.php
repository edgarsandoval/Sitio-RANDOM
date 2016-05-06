<?php

require_once('../classes/PHPMailer/PHPMailerAutoload.php');

$email = new PHPMailer();
$email->From = 'no-reply@sitiorandom.com';
$email->FromName  = 'Sitio Random';
$email->Subject   = '¡Nuevo posible talento encontrado!';

$mensaje = "";

foreach ($_REQUEST as $key => $value)
{
	if($key == 'archivo' || $key == 'cv')
		continue;

	$mensaje .= ucfirst($key) . ' : ' . $value . '\r\n'; 
}

$email->Body = $mensaje;
$email->AddAddress('edgar@sitiorandom.com');

$file = $_REQUEST['archivo'];

$nombre_archivo = $_REQUEST['area'] . '_' . $_REQUEST['nombre'] . '_' . rand(0, 10) . '.' . explode('.', $file)[0];

$email->addAttachment($file, $nombre_archivo);

//echo $email->Send() ? "true" : "false";

    echo mail('edgar@sitiorandom', 'prueba', 'prueba') ? "true" : "false" ;

?>