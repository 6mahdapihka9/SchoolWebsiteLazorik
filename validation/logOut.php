<?php
    //setcookie('user',  time() - 3600, '/LowAlcohol/news.php');
    //setcookie('logged',  time() - 3600, "/LowAlcohol");
    if (isset($_COOKIE['user'])) {
        unset($_COOKIE['user']);
        setcookie('user', null, -1, '/LowAlcohol/news.php');
    }
    if (isset($_COOKIE['logged'])) {
        unset($_COOKIE['logged']);
        setcookie('logged', null, -1, '/LowAlcohol');
    }
    header('Location: /LowAlcohol/main.html');
?>
