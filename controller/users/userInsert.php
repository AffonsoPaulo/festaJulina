<?php
require_once("../../model/connection.php");
require_once("../response.php");
$userPost = file_get_contents('php://input');
$userArray = json_decode($userPost, true);
$name = (isset($userArray["name"]) && $userArray["name"] != null) ? strtoupper($userArray["name"]) : null;
$course = (isset($userArray["course"]) && $userArray["course"] != null) ? strtoupper($userArray["course"]) : null;
$username = (isset($userArray["username"]) && $userArray["username"] != null) ? $userArray["username"] : null;
$password = (isset($userArray["password"]) && $userArray["password"] != null) ? strtoupper($userArray["password"]) : null;
$password = hash("sha256", $password);
if($name != null && $course != null && $username != null && $password != null){
    try {
        $sql = "INSERT INTO sellers(name, course, username, password) VALUES(?, ?, ?, ?)";
        $stmt = $connection->prepare($sql);
        $stmt->bindParam(1, $name);
        $stmt->bindParam(2, $course);
        $stmt->bindParam(3, $username);
        $stmt->bindParam(4, $password);
        $stmt->execute();
        $response["successText"] = "{$stmt->rowCount()} user inserted successfully! The inserted id was {$connection->lastInsertId()}";
    } catch (PDOException $e) {
        $response["error"] = true;
        $response["errorText"] = "Error trying to insert user. " . $e->getMessage();
    } finally {
        echo json_encode($response);
    }
}
