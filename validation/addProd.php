<?php
    $a_p_IDOfProd = $_POST["a_p_IDOfProd"];
    $a_p_nameOfProd = $_POST["a_p_nameOfProd"];
    $a_p_addressOfProd = $_POST["a_p_addressOfProd"];

    $host = 'localhost';
    $database = 'LowAlcoholDB';
    $user = 'root';
    $password = '';

    $link = mysqli_connect($host, $user, $password, $database)
        or die("Ошибка " . mysqli_error($link));

    $query = "INSERT INTO `producertable` ( `ProdID` , `Producer` , `Address` )
    VALUES ('$a_p_IDOfProd', '$a_p_nameOfProd', '$a_p_addressOfProd')";

    $result = mysqli_query($link, $query)
        or die("Ошибка " . mysqli_error($link));

    mysqli_close($link);
    header('Location: /LowAlcohol/input.html');
?>
