<?php
    $a_m_IDOfMark = $_POST["a_m_IDOfMark"];
    $a_m_nameOfMark = $_POST["a_m_nameOfMark"];
    $a_m_IDOfProd = $_POST["a_m_IDOfProd"];

    $host = 'localhost';
    $database = 'LowAlcoholDB';
    $user = 'root';
    $password = '';

    $link = mysqli_connect($host, $user, $password, $database)
        or die("Ошибка " . mysqli_error($link));

    $query = "INSERT INTO `marktable` ( `MarkID` , `Mark` , `ProdID` )
    VALUES ('$a_m_IDOfMark', '$a_m_nameOfMark', '$a_m_IDOfProd')";

    $result = mysqli_query($link, $query)
        or die("Ошибка " . mysqli_error($link));

    mysqli_close($link);
    header('Location: /LowAlcohol/input.html');
?>
