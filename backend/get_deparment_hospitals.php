
<?php 
    require_once "database.php";

    $department = $_GET['department'];

    $hospitals = array();

    if(isset($_GET['department'])){
        $data = getRawData("SELECT * FROM `hospital`");

        // echo count($data)s;

        for($i=0;$i<count($data);$i++){
            $sectors = unserialize($data[$i]['sectors']);
            if(array_search($department, $sectors)){
                $hospitals[] = $data[$i]['id'];
            }

        }

        echo json_encode($hospitals);

        // flush();
        // print_r(unserialize($data[0]['sectors']));
    }

// ?department=department

?>
