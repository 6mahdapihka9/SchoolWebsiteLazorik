<?php
    $regLogin = filter_var(trim($_POST["regLogin"]),FILTER_SANITIZE_STRING);
    $regPass = filter_var(trim($_POST["regPass"]),FILTER_SANITIZE_STRING);

    if (mb_strlen($regLogin) < 5 || mb_strlen($regLogin) > 30){
        echo "Занадто довгий або короткий логін";
        exit();
    } else if (mb_strlen($regPass) < 5 || mb_strlen($regPass) > 30){
       echo "Занадто довгий або короткий пароль";
       exit();
   }
    $regPass = md5($regPass."qwertyasdfghzxcvbn");
    $host = 'localhost';
    $database = 'LowAlcoholDB';
    $user = 'root';
    $password = '';

    $link = mysqli_connect($host, $user, $password, $database)
        or die("Ошибка " . mysqli_error($link));

    $query = "INSERT INTO `usertable` ( `ID` , `Login` , `Password` )
    VALUES ('NULL', '$regLogin', '$regPass')";

    $result = mysqli_query($link, $query)
        or die("Ошибка " . mysqli_error($link));
    if ($result) {
        echo "<span style='color:blue; font-size: 32px' >Дані успішно додані!</span>";
    }
    mysqli_close($link);
    header('Location: /LowAlcohol/main.html');
?>
