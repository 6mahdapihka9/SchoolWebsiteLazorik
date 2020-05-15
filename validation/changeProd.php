<?php
    $c_p_IDOfProd = $_POST["c_p_IDOfProd"];
    $c_p_nameOfProd = $_POST["c_p_nameOfProd"];
    $c_p_addressOfProd = $_POST["c_p_addressOfProd"];

    $host = 'localhost';
    $database = 'LowAlcoholDB';
    $user = 'root';
    $password = '';

    $link = mysqli_connect($host, $user, $password, $database)
        or die("Ошибка " . mysqli_error($link));

    $query = "UPDATE `producertable` SET `Producer` = '$c_p_nameOfProd', `Address` = '$c_p_addressOfProd'
        WHERE `producertable`.`ProdID` = '$c_p_IDOfProd'";

    $result = mysqli_query($link, $query)
        or die("Ошибка " . mysqli_error($link));

    mysqli_close($link);
    header('Location: /LowAlcohol/input.html');
?>
