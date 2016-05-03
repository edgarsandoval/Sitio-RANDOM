<?php
	
  	$url = "http://sitiorandom.us12.list-manage.com/subscribe/post?u=19c17fb7def90d30178f4c7a2&id=58544248a0";

	$fields = array(
		'EMAIL' => $_REQUEST['email']
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

?>