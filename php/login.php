<?php
require_once "DB.php";

class App_Login extends DB{
    private $table = "tb_user_app";
    public function __construct()
    {
        parent::__construct();
    }
    public function __destruct()
    {
        parent::__destruct();
    }
    /**
     * Check user exists
     */
    public function exists($user){
        // $stmt = $this->prepare("SELECT user_name FROM $this->table WHERE user_name=?");
        // $stmt->execute([$user]);
        // echo var_dump($stmt);
    }
}

?>