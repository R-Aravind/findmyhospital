<?php 
    require_once "database.php";

    echo getData("SELECT * FROM doctor WHERE featured='1'");

?>