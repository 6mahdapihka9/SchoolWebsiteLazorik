<?php
    $authLogin = filter_var(trim($_POST["authLogin"]),FILTER_SANITIZE_STRING);
    $authPass = filter_var(trim($_POST["authPass"]),FILTER_SANITIZE_STRING);

    if (mb_strlen($authLogin) < 5 || mb_strlen($authLogin) > 30){
        echo "Занадто довгий або короткий логін";
        exit();
    } else if (mb_strlen($authPass) < 5 || mb_strlen($authPass) > 30){
       echo "Занадто довгий або короткий пароль";
       exit();
   }
    $authPass = md5($authPass."qwertyasdfghzxcvbn");

    $host = 'localhost';
    $database = 'LowAlcoholDB';
    $user = 'root';
    $password = '';

    $link = mysqli_connect($host, $user, $password, $database)
        or die("Ошибка " . mysqli_error($link));

    $query = "SELECT * FROM `usertable` WHERE  `Login` = '$authLogin' AND `Password` = '$authPass'";

    $result = mysqli_query($link, $query)
            or die("Ошибка " . mysqli_error($link));
    $user = $result->fetch_assoc();

    if (count($user) == 0){
        echo "Користувач не знайден!";
        exit();
    }

    setcookie('user', $user['Login'], time() + 3600, '/LowAlcohol/news.php');

    setcookie('logged', 'true', time() + 3600, "/LowAlcohol");

    mysqli_close($link);
    header('Location: /LowAlcohol/main.html');
?>
