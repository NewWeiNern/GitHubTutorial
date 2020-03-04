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
        $stmt = $this->prepare("SELECT * FROM $this->table INNER JOIN tb_app_data WHERE email=? AND tb_app_data.user_id = tb_app_users.id");
        $stmt->execute([$email]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
    public function createUserData($uid){
        $stmt = $this->prepare("INSERT INTO tb_app_data(user_id) VALUES (?)");
        $stmt->execute([$uid]);
    }
    public function createUser($name, $email, $pass){
        $stmt = $this->prepare("INSERT INTO $this->table(name, email, pass) VALUES (?,?,?)");
        $stmt->execute([$name, $email, $pass]);
    }
}

?>