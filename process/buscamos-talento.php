<?php

require_once('../classes/PHPMailer/PHPMailerAutoload.php');

$email = new PHPMailer();
$email->From = 'no-reply@sitiorandom.com';
$email->FromName  = 'Sitio Random';
$email->Subject   = '¡Nuevo posible talento encontrado!';

$mensaje = "";

foreach ($_REQUEST as $key => $value)
{
	$mensaje .= ucfirst($key) . ' : ' . $value . '\r\n'; 
}

$email->Body = $mensaje;
$email->AddAddress('talento@sitiorandom.com');

$file = 'PATH_OF_YOUR_FILE_HERE';
?>