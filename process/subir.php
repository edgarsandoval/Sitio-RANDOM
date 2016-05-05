<?php
//upload.php

$nombre_archivo = $_FILES["archivo"]["name"];

$tipo_archivo = $_FILES["archivo"]["type"];

$tamano_archivo = $_FILES["archivo"]["size"];

$tmp_archivo = $_FILES["archivo"]["tmp_name"];

$archivador = $nombre_archivo;

echo move_uploaded_file($tmp_archivo, $archivador) ? "true" : "false";