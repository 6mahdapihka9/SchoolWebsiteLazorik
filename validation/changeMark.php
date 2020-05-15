<?php
    $c_m_IDOfMark = $_POST["c_m_IDOfMark"];
    $c_m_nameOfMark = $_POST["c_m_nameOfMark"];
    $c_m_IDOfProd = $_POST["c_m_IDOfProd"];

    $host = 'localhost';
    $database = 'LowAlcoholDB';
    $user = 'root';
    $password = '';

    $link = mysqli_connect($host, $user, $password, $database)
        or die("Ошибка " . mysqli_error($link));

    $query = "UPDATE `marktable` SET `Mark` = '$c_m_nameOfMark', `ProdID` = '$c_m_IDOfProd'
        WHERE `marktable`.`MarkID` = '$c_m_IDOfMark'";

    $result = mysqli_query($link, $query)
        or die("Ошибка " . mysqli_error($link));

    mysqli_close($link);
    header('Location: /LowAlcohol/input.html');
?>
