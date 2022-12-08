<?php
    require_once "conf.php";
    $sql = "SELECT * FROM ksiazki ORDER BY lp DESC";
    $res = mysqli_query($conn, $sql);
    ?>
    
<html>

<head>
    <title>Biblioteka.pl</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>


    <div id="main">

        <div id="header">
  
                Top 20

        </div>

        
        <div id="menu">
            <ul>
                 <li><a href="index.php">Strona Główna</a></li>
                 <li><a href="top20.php">Top 20</a></li>
                 <li><a href="ksiazki.php">Książki</a></li>
                 <li><a href="nowosci.php">Nowości</a></li>
                 <li><a href="glosowanie.php">Głosowanie</a></li>
                 <li><a href="zapowiedzi.php" class="selected">Zapowiedzi</a></li>
                 <li><a href="dodawanie.php">Dodawanie</a></li>
            </ul> 
     </div>