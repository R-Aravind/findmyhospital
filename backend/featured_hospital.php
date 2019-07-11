<?php 
    require_once "database.php";

    getData("SELECT * FROM doctor WHERE featured=1");

?>