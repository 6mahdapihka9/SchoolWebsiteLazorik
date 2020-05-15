<?php
    $c_d_IDOfDrink = $_POST["c_d_IDOfDrink"];
    $c_d_nameOfDrink = $_POST["c_d_nameOfDrink"];
    $c_d_priceOfDrink = $_POST["c_d_priceOfDrink"];
    $c_d_IDOfMark = $_POST["c_d_IDOfMark"];

    $host = 'localhost';
    $database = 'LowAlcoholDB';
    $user = 'root';
    $password = '';

    $link = mysqli_connect($host, $user, $password, $database)
        or die("Ошибка " . mysqli_error($link));

    $query = "UPDATE `drinktable` SET `Drink` = '$c_d_nameOfDrink', `Price` = '$c_d_priceOfDrink', `MarkID` = '$c_d_IDOfMark'
        WHERE `drinktable`.`DrinkID` = '$c_d_IDOfDrink'";

    $result = mysqli_query($link, $query)
        or die("Ошибка " . mysqli_error($link));

    mysqli_close($link);
    header('Location: /LowAlcohol/input.html');
?>
