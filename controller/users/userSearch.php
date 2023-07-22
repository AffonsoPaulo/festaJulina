<?php
require_once("../../model/connection.php");
require_once("../response.php");
$id = (isset($_GET["id"]) && $_GET["id"] != null) ? $_GET["id"] : "";
if ($id !== null) {
    try {
        $sql = "SELECT s.id, s.name, c.courseName, s.username FROM sellers s JOIN courses c ON(c.id = s.course) WHERE s.id = ?";
        $stmt = $connection->prepare($sql);
        $stmt->bindParam(1, $id);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $response["data"] = $result[0];
        $response["successText"] = "User fetched successfully!";
    } catch (PDOException $e) {
        $response["error"] = true;
        $response["errorText"] = "Error trying to fetch user. " . $e->getMessage();
    } finally {
        echo json_encode($response);
    }
}