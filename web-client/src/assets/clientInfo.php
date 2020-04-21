<?php
$data = file_get_contents('php://input');
$arr = json_decode($data, true);
print_r($arr);

/*
foreach ($arr as $key => $value) {
    // $arr[3] will be updated with each value from $arr...
    echo "{$key} => {$value} ";
    print_r($arr);
}*/

/*$jsonText = $_POST;
echo $jsonText;
$decodedText = html_entity_decode($jsonText);
echo " que pedo" . $decodedText[0];
$myArray = json_decode($decodedText, true);
echo $myArray;
*/

/*$data = file_get_contents('php://input');
// echo $data;
// $json = json_encode($data);
$elBueno = json_decode($data, TRUE);
echo $elBueno;*/
?> 
