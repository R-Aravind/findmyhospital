<?php 
    // require_once "database.php";

    // if(isset($_GET['id'])){
    //     $id = $_GET['id'];

    //     $sql = "SELECT * FROM doctor WHERE id='$'"

    //     $data = getRawData()
        

    // }




?>


<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" type="image/png" href="assets/images/favicon.png" />
    <title>Medicus | Doctor</title>

    <!-- MAIN STYLESHEET -->
    <link rel="stylesheet" href="./assets/css/main.css">

    <!-- SUB STYLESHEET -->
    <link rel="stylesheet" href="./assets/css/doctor.css">

    <!-- ICON CDN -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>

<body>
    <header>
        <a href="./index.html"><img src="./assets/images/icon.png" alt="icon"></a>
    </header>

    <div class="sub-header">

    </div>

    <div class="background">

        <div class="container">
            <div class="img-box">
                <img src="./assets/images/person-placeholder.png" alt="person">
            </div>

            <div class="details-box">

                <div class="name">
                    <h1>Jack Sparrow</h1>
                    <p>Male</p>
                </div>

                <div class="job">
                    <div class="rating">
                        &star;&star;&star;&star;
                    </div>
                    <h3>Ortho</h3>
                    <a href="./hospital.html">
                        <p>Hospital 1</p>
                    </a>
                </div>
            </div>

            <div class="review-box">
                <div class="review">
                    <p class="content">"Nice Doctor"</p>
                    <p class="reviewer">- Saul</p>
                </div>
                <div class="review">
                    <p class="content">"Awesome Doctor" </p>
                    <p class="reviewer">- John</p>
                </div>
            </div>

        </div>

    </div>

    <footer>
        <div class="footer-content">
            <p>Made with <span style="color:white;">&hearts;</span> by <span
                    style="background-color: rgb(47, 47, 131);">Runtime
                    Terror</span></p>
        </div>
    </footer>

    </div>

</body>

</html>