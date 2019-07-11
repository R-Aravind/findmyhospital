<?php 
    require_once "database.php";

    $location = $_GET['location'];

    echo getData("SELECT * FROM hospital WHERE `location`='$location'");


    
?>