<?php
$url = "https://elections.maryland.gov/elections/results_data/GG18/Results.js";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$data = curl_exec ($ch);
curl_close ($ch);
header("Content-Type: application/json");
echo $data;
?>
