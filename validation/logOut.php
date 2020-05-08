<?php
    setcookie('user', '', time() - 3600, '/LowAlcohol/news.php');
    setcookie('logged', '', time() - 3600, "/LowAlcohol");

    header('Location: /LowAlcohol/main.html');
?>
