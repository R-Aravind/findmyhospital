<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "medicus";

function getData($sql){
    $data = array();

    // Create connection
    $conn = new mysqli($GLOBALS['servername'], $GLOBALS['username'], $GLOBALS['password'], $GLOBALS['dbname']);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    // echo "Connected successfully";

    // $sql = "SELECT first_name, last_name, age FROM test";

    $result = $conn->query($sql);

    if ($result) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            // echo "Name: " . $row["first_name"]. $row["last_name"]. "<br>" . $row["age"]. "<br>";
            // $data->fname = $row["first_name"];
            // $data->lname = $row["last_name"];
            $data['back'] = $row;
        }
    } else {
        // echo "0 results";

    }
    $conn->close();

    $myJSON = json_encode($data);

    echo $myJSON;

}

// $sql = "SELECT first_name, last_name, age FROM test";

// getData($sql); 


?>