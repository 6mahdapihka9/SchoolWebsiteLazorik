<?php
    $d_IDOfDrink = $_POST["d_IDOfDrink"];
    $d_nameOfDrink = $_POST["d_nameOfDrink"];
    $d_priceOfDrink = $_POST["d_priceOfDrink"];
    $d_IDOfMark = $_POST["d_IDOfMark"];

    $host = 'localhost';
    $database = 'LowAlcoholDB';
    $user = 'root';
    $password = '';

    $link = mysqli_connect($host, $user, $password, $database)
        or die("Ошибка " . mysqli_error($link));

    $query = "INSERT INTO `drinktable` ( `DrinkID` , `Drink` , `Price` , `MarkID` )
    VALUES ('$d_IDOfDrink', '$d_nameOfDrink', '$d_priceOfDrink', '$d_IDOfMark')";

    $result = mysqli_query($link, $query)
        or die("Ошибка " . mysqli_error($link));
    if ($result) {
        echo "<span style='color:blue; font-size: 32px' >Дані успішно додані!</span>";
    }
    mysqli_close($link);
    header('Location: /LowAlcohol/input.html');
?>
