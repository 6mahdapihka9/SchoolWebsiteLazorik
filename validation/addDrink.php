<?php
    $a_d_IDOfDrink = $_POST["a_d_IDOfDrink"];
    $a_d_nameOfDrink = $_POST["a_d_nameOfDrink"];
    $a_d_priceOfDrink = $_POST["a_d_priceOfDrink"];
    $a_d_IDOfMark = $_POST["a_d_IDOfMark"];

    $host = 'localhost';
    $database = 'LowAlcoholDB';
    $user = 'root';
    $password = '';

    $link = mysqli_connect($host, $user, $password, $database)
        or die("Ошибка " . mysqli_error($link));

    $query = "INSERT INTO `drinktable` ( `DrinkID` , `Drink` , `Price` , `MarkID` )
    VALUES ('$a_d_IDOfDrink', '$a_d_nameOfDrink', '$a_d_priceOfDrink', '$a_d_IDOfMark')";

    $result = mysqli_query($link, $query)
        or die("Ошибка " . mysqli_error($link));

    mysqli_close($link);
    header('Location: /LowAlcohol/input.html');
?>
