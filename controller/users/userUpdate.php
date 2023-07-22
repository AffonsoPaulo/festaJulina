<?php
require_once("../../model/connection.php");
require_once("../response.php");
$userPost = file_get_contents('php://input');
$userArray = json_decode($userPost, true);
$id = (isset($userArray["id"]) && $userArray["id"] != null) ? $userArray["id"] : null;
$name = (isset($userArray["name"]) && $userArray["name"] != null) ? strtoupper($userArray["name"]) : null;
$course = (isset($userArray["course"]) && $userArray["course"] != null) ? strtoupper($userArray["course"]) : null;
$username = (isset($userArray["username"]) && $userArray["username"] != null) ? $userArray["username"] : null;

if($name != null && $course != null && $username != null) {
    try {
        $sql = "UPDATE sellers SET name = ?, course = ?, username = ? WHERE id = ?";
        $stmt = $connection->prepare($sql);
        $stmt->bindParam(1, $name);
        $stmt->bindParam(2, $course);
        $stmt->bindParam(3, $username);
        $stmt->bindParam(4, $id);
        $stmt->execute();
        $response["successText"] = "{$stmt->rowCount()} user updated successfully!";
    } catch (PDOException $e) {
        $response["error"] = true;
        $response["errorText"] = "Error trying to update user. " . $e->getMessage();
    } finally {
        echo json_encode($response);
    }
}