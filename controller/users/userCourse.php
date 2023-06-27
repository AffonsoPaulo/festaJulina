<?php
require_once("../../model/connection.php");
require_once("../response.php");
try {
    $sql = "SELECT * FROM courses";
    $stmt = $connection->prepare($sql);
    $stmt->execute();
    $response["successText"] = "Courses fetched successfully!";
    $response["data"] = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    $response["error"] = true;
    $response["errorText"] = "Error trying to fetch courses. " . $e->getMessage();
} finally {
    echo json_encode($response);
}