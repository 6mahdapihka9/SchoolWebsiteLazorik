<?php
    $p_IDOfProd = $_POST["p_IDOfProd"];
    $p_nameOfProd = $_POST["p_nameOfProd"];
    $p_addressOfProd = $_POST["p_addressOfProd"];

    $host = 'localhost';
    $database = 'LowAlcoholDB';
    $user = 'root';
    $password = '';

    $link = mysqli_connect($host, $user, $password, $database)
        or die("Ошибка " . mysqli_error($link));

    $query = "INSERT INTO `producertable` ( `ProdID` , `Producer` , `Address` )
    VALUES ('$p_IDOfProd', '$p_nameOfProd', '$p_addressOfProd')";

    $result = mysqli_query($link, $query)
        or die("Ошибка " . mysqli_error($link));
    if ($result) {
        echo "<span style='color:blue; font-size: 32px' >Дані успішно додані!</span>";
    }
    mysqli_close($link);
    header('Location: /LowAlcohol/input.html');
?>
