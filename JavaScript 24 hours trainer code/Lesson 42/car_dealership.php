<?php
header('Cache-Control: no-cache, must-revalidate');
//header('Content-type: application/json');

class Object { 
    function __construct( ) { 
        $n = func_num_args( ) ; 
        for ( $i = 0 ; $i < $n ; $i += 2 ) { 
            $this->{func_get_arg($i)} = func_get_arg($i + 1) ; 
        } 
    } 
}

function search_array_ig($needle, $haystack) {
    $value = false;
    
    while ($model = current($haystack)) {
        if (strtolower($needle) == strtolower($model)) {
            return true;
        }
        
        next($haystack);
    }
    
    return false;
}

// a hack because I'm lazy
$makesIndexes = array("Toyota", "Ford", "Chevy", "Nissan");

$makes["toyota"] = array("Camry", "Corolla", "4Runner", "Tundra");
$makes["ford"] = array("Explorer", "Mustang", "F150");
$makes["chevy"] = array("Camaro", "Blazer", "Malibu");
$makes["nissan"] = array("Altima", "Maxima", "Murano", "Armada");

$make = $_GET["txtMake"];
$model = $_GET["txtModel"];
$year = (int)$_GET["txtYear"];
$isFound = false;

if ($makes[strtolower($make)] != null) {
	if (search_array_ig($model, $makes[strtolower($make)])) {
		$isFound = true;
	}
}

$resultCount = rand(1,5);

$results = array();

if ($isFound) {
	for ($i = 0; $i < $resultCount; $i++) {
		$yearRand = rand(1979, 2010);
		$results[$i] = new Object("model", $model, "make", $make, "year", $yearRand);
	}
} else {
	for ($i = 0; $i < $resultCount; $i++) {
		$makeRand = rand(0, sizeof($makes) - 1);
		$modelRand = rand(0, sizeof($makes[$makeRand]) - 1);
		$yearRand = rand(1979, 2010);

		$results[$i] = new Object("model", $makes[strtolower($makesIndexes[$makeRand])][$modelRand], "make", $makesIndexes[$makeRand], "year", $yearRand);
	}
}

$response = new Object(
	"searchedCar", new Object("model", $model, "make", $make, "year", $year),
	"isFound", $isFound,
	"results", $results
	);



echo json_encode($response);
?>