<?php
require_once "class/user.class.php";
$user = new User();
$data = $user->get($_POST["email"]);
unset($data["pass"]);
echo json_encode($data);
header("Content-Type:application/json");
?>