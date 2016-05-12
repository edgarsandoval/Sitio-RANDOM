<?php

require_once('../classes/PHPMailer/PHPMailerAutoload.php');
require_once('../classes/ReCAPTCHA/php/recaptchalib.php');

if(isset($_REQUEST['mas-info']))
{
	$url =	"http://sitiorandom.us12.list-manage.com/subscribe/post?u=19c17fb7def90d30178f4c7a2&id=931fdf9723";

	$fields = array(
		'EMAIL' => $_REQUEST['correo-electronico'],
		'FNAME' => $_REQUEST['nombre'],
		'LNAME' => $_REQUEST['apellido']
	);

	$fields_string = "";

	foreach($fields as $key=>$value)
	{
		$fields_string .= $key . '=' . $value . '&';
	}

	rtrim($fields_string, '&');

	$ch = curl_init();

	curl_setopt($ch,CURLOPT_URL, $url);
	curl_setopt($ch,CURLOPT_POST, count($fields));
	curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);

	$result = curl_exec($ch);

	curl_close($ch);
}

/* Validación Google ReCAPTCHA */
$secret = "6Ldyqh8TAAAAAEVbLKQi3saMFtcEch8GmgqzaJSP";

$response = null;

$reCaptcha = new ReCaptcha($secret);

$response = $reCaptcha->verifyResponse($_SERVER["REMOTE_ADDR"], $_POST["g-recaptcha-response"]);
/**/

$email = new PHPMailer();

$email->SMTPDebug = 1;

$email->From = 'no-reply@sitiorandom.com';
$email->FromName  = 'Sitio Random';
$email->Subject   = '¡Nueva Entrada - Formulario UX!';

$mensaje = "";

foreach ($_REQUEST as $key => $value)
{
	if($key == 'mas-info')
		continue;

	$mensaje .= ucfirst($key) . ' : ' . $value . '\r\n'; 
}

$email->Body = $mensaje;
$email->AddAddress('edgars@sitiorandom.com');

$send = $email->Send();

echo $send ? "true" : "false" ;

?>

