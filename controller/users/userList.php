<?php
require_once("../../model/connection.php");
require_once("../response.php");

try {
    $sql = "SELECT s.id, s.name, c.courseName FROM sellers s JOIN courses c ON(c.id = s.course)";
    $stmt = $connection->prepare($sql);
    $stmt->execute();
    $response["data"] = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $response["successText"] = "Users listed successfully!";
} catch (PDOException $e) {
    $response["error"] = true;
    $response["errorText"] = "Error trying to list users. " . $e->getMessage();
} finally {
    echo json_encode($response);
}