<?php

require_once('../classes/PHPMailer/PHPMailerAutoload.php');

$email = new PHPMailer();

$email->SMTPDebug = 1;

$email->From = 'no-reply@sitiorandom.com';
$email->FromName  = 'Sitio Random';
$email->Subject   = 'Formulario de Contacto' . $_REQUEST['asunto'];

$mensaje = "";

foreach ($_REQUEST as $key => $value)
{
	if($key == 'archivo' || $key == 'cv')
		continue;

	$mensaje .= ucfirst($key) . ' : ' . $value . '\r\n'; 
}

$email->Body = $mensaje;
$email->AddAddress('sandy@sitiorandom.com');

echo $email->Send() ? "true" : "false";

?>

