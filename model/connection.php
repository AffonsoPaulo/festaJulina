<?php
$dsn = "mysql:host=localhost;dbname=party;charset=utf8";
$user = "root";
$pass = "";
try {
    $connection = new PDO($dsn, $user, $pass);
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    $response["error"] = true;
    $response["errorText"] = "Error trying to connect to Database." . $e->getMessage();
    echo json_encode($response);
    exit();
}
