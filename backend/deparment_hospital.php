<?php 
    require_once "database.php";

    $department = $_GET['department'];

    if(isset($_GET['department'])){
        $data = getData("SELECT * FROM `hospital`);
    }

// ?department=department

?>
