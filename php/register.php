<?php
require_once "class/user.class.php";
$name = $_POST["name"];
$email = $_POST["email"];
$pass = $_POST["pass"];
$passcfm = $_POST["passcfm"];

function errorMsg($err){
    echo json_encode(["err"=>$err]);
}
if(!isset($name) || !isset($email) || !isset($pass) || !isset($passcfm)){
    errorMsg("Missing fields!");
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
    if($data){
        errorMsg("Email already exist");
        return;
    }
    if($pass !== $passcfm){
        errorMsg("Password and confirmed password are not the same");
        return;
    }
    
    $data = null;
    $user->createUser($name, $email, password_hash($pass, PASSWORD_DEFAULT));
    $data = $user->get($email);
    unset($data["email"]);
    unset($data["pass"]);
    echo json_encode($data);
    $data = null;

}

?>