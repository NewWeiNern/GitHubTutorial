<?php
require_once "class/user.class.php";

$user = new User();
$user_verify = json_decode($_POST["user"]);
$point = $_POST["point"];

$user->addPoint($point, $user_verify);
$data = $user->get($user_verify->email);
unset($data["pass"]);
echo json_encode($data);
header("Content-Type:application/json");
?>