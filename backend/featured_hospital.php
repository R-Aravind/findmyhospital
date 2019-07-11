<?php 
    require_once "database.php";

    echo getData("SELECT * FROM hospital WHERE featured='1'");

?>