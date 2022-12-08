<?php
    require_once "conf.php";
    $sql = "SELECT * FROM ksiazki ORDER BY lp DESC";
    $res = mysqli_query($conn, $sql);
    ?>


 <!DOCTYPE html>
 <html>

 <head>
     <title>Biblioteka.pl</title>
     <link rel="stylesheet" href="style.css">
 </head>

 <body>

 <a href="kerfus.php" id="kerfus">kerfus</a>

     <div id="main">

         <div id="header">

             Biblioteka.PL

         </div>


         <div id="menu">
             <ul>
                 <li><a href="index.php" class="selected">Strona Główna</a></li>
                 <li><a href="top20.php">Top 20</a></li>
                 <li><a href="ksiazki.php">Książki</a></li>
                 <li><a href="nowosci.php">Nowości</a></li>
                 <li><a href="glosowanie.php">Głosowanie</a></li>
                 <li><a href="zapowiedzi.php">Zapowiedzi</a></li>
                 <li><a href="dodawanie.php">Dodawanie</a></li>
             </ul>
         </div>
         <div id="object_main">

             <div id="nga"><img src="zdjęciaokładek/forwhomthebelltolls.jpg" height="350px" width="250"></div>
             <div id="nga"><img src="zdjęciaokładek/americanpsycho.jpg" height="350px" width="250"></div>
             <div id="nga"><img src="zdjęciaokładek/fightclub.jpg" height="350px" width="250"></div>

         </div>
     </div>


 </body>

 </html>