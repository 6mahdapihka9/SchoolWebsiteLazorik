<?php
    $m_IDOfMark = $_POST["m_IDOfMark"];
    $m_nameOfMark = $_POST["m_nameOfMark"];
    $m_IDOfProd = $_POST["m_IDOfProd"];

    $host = 'localhost';
    $database = 'LowAlcoholDB';
    $user = 'root';
    $password = '';

    $link = mysqli_connect($host, $user, $password, $database)
        or die("Ошибка " . mysqli_error($link));

    $query = "INSERT INTO `marktable` ( `MarkID` , `Mark` , `ProdID` )
    VALUES ('$m_IDOfMark', '$m_nameOfMark', '$m_IDOfProd')";

    $result = mysqli_query($link, $query)
        or die("Ошибка " . mysqli_error($link));
    if ($result) {
        echo "<span style='color:blue; font-size: 32px' >Дані успішно додані!</span>";
    }
    mysqli_close($link);
    header('Location: /LowAlcohol/input.html');
?>
