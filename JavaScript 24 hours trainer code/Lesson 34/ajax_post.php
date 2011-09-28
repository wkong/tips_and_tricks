<?php
header('Cache-Control: no-cache, must-revalidate');
header('Content-type: text/plain');

// for lesson 34

$responses=array("Homey don't play that, ",
	"Use the Force, ",
	"Buzinga, ",
	"Howdy Ho, Ranger ",
	"You can go with this, or you can go with "
);

echo $responses[rand(0,sizeof($responses) - 1)] . $_POST["txtName"];
?>