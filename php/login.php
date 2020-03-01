<?php
require_once "class/user.class.php";
$email = $_POST["email"];
$pass = $_POST["pass"];

function errorMsg($err){
    echo json_encode(["err"=>$err]);
}
if(!isset($email) || !isset($pass) || empty($email) || empty($pass)){
    errorMsg("Email or pass not filled!");
    return;
}
else{
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
        $email = $email;
    }
    else{
        errorMsg("Email is in wrong format");
        return;
    }
    $user = new User();
    $data = $user->get($email);
    
    if(!$data){
        errorMsg("Email is wrong!");
        return;
    }
    if(password_verify($pass, $data["pass"])){
        unset($data["email"]);
        unset($data["pass"]);
        echo json_encode($data);
        $data = null;
    }
    else{
        errorMsg("Password is wrong!");
        return;
    }
}

header("Content-Type:application/json");
?>