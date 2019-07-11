<?php 
    require_once "database.php";

    $id = $_GET['id'];

    if(isset($_GET['id'])){
        echo getData("SELECT * FROM `doctor` WHERE `hospital_id`=$id");
    }

// ?id=hospital_id
?>
