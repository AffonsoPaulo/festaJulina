<?php
require_once("../../model/connection.php");
require_once("../response.php");
$userPost = file_get_contents('php://input');
$userArray = json_decode($userPost, true);
$name = (isset($userArray["name"]) && $userArray["name"] != null) ? strtoupper($userArray["name"]) : null;
$course = (isset($userArray["course"]) && $userArray["course"] != null) ? strtoupper($userArray["course"]) : null;
if($name != null && $course != null){
    try {
        $sql = "INSERT INTO sellers(name, course) VALUES(?, ?)";
        $stmt = $connection->prepare($sql);
        $stmt->bindParam(1, $name);
        $stmt->bindParam(2, $course);
        $stmt->execute();
        $response["successText"] = "{$stmt->rowCount()} user inserted successfully! The inserted id was {$connection->lastInsertId()}";
    } catch (PDOException $e) {
        $response["error"] = true;
        $response["errorText"] = "Error trying to insert user. " . $e->getMessage();
    } finally {
        echo json_encode($response);
    }
}
