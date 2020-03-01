<?php
require_once "db.php";

class User extends DB{
    public $table = "tb_app_users";
    public function __construct()
    {
        parent::__construct();
    }
    public function __destruct()
    {
        parent::__destruct();
    }
    public function get($email){
        $stmt = $this->prepare("SELECT * FROM $this->table WHERE email=?");
        $stmt->execute([$email]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
    public function createUser($name, $email, $pass){
        $stmt = $this->prepare("INSERT INTO $this->table(name, email, pass) VALUES (?,?,?)");
        $stmt->execute([$name, $email, $pass]);
    }
}

?>