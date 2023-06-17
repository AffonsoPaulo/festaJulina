<?php
require_once("../../model/connection.php");
require_once("../response.php");
$userDelete = file_get_contents('php://input');
$userArray = json_decode($userDelete, true);
$id = (isset($userArray["id"]) && $userArray["id"] != null) ? $userArray["id"] : null;
try {
    $sql = "DELETE FROM sellers WHERE id=?";
    $stmt = $connection->prepare($sql);
    $stmt->bindParam(1, $id);
    $stmt->execute();
    $response["successText"] = "User from id $id was deleted successfully!";
} catch (PDOException $e) {
    $response["error"] = true;
    $response["errorText"] = "Error trying to delete user. " . $e->getMessage();
} finally {
    echo json_encode($response);
}