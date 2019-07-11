<?php

require_once "database.php";

$sql = "SELECT first_name, last_name, age FROM test";

getData($sql);


?>