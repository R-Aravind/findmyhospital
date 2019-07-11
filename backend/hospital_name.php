<?php 
    require_once "database.php";

    $name = $_GET['name'];

    if(isset($_GET['name'])){
        echo getData("SELECT * FROM `hospital` WHERE `name`=Hospital 1");
    }


?>