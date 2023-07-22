<?php
require_once("../../model/connection.php");
require_once("../response.php");

try {
    $sql = "SELECT p.name, p.quantity, p.price FROM products p";
    $stmt = $connection->prepare($sql);
    $stmt->execute();
    $response["data"] = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $response["successText"] = "Products listed successfully!";
} catch (PDOException $e) {
    $response["error"] = true;
    $response["errorText"] = "Error trying to list products. " . $e->getMessage();
} finally {
    echo json_encode($response);
}