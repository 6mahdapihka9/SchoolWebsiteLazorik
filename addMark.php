<html lang="ru-RU" xmlns="http://www.w3.org/1999/html">
    <head>
        <meta name="keywords" content="слабо-алкогольні напої, алкоголь, пиво, сидр, low alcohol, alcohol, beer, cider">
        <meta charset="UTF-8">
        <meta name="description" content="Слабо-алкогольні напої, Low alcohol drinks">
        <meta name="author" content="Zul'Jin x Sacrifice x Baal">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style1.css">
        <title>Ввід/вивід даних</title>
    </head>
    <body>
        <header>
            <h1 id="site_title" onmouseout="chBGH1back()" onmouseover="chBGH1()">Слабо-алкогольні напої</h1>
        </header>
        <main>
            <div class="left">
                <section id="mainSection" class="contentT" >
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
                    ?>
                </section>
                <section id="searchSection" hidden>
                    <h2 id="searchH2">Пошук по слову </h2>
                    <p id="searchParagraph"></p>
                </section>
                <section id="infoSection" hidden>
                    <h2 id="infoH2">Browser information:</h2>
                    <p id="infoParagraph"></p>
                </section>
            </div>
            <div class="right">
                <form name="searchFrom" style="margin: 40px">
                    <input type="text" name="searchText" placeholder="Search">
                    <input type="button" name="searchSubmit" value="Шукати" onclick="searchWords(document.searchFrom.searchText.value)">
                </form>
                <nav>
                    <ul type="none">
                        <li><a href="main.html">Головна</a></li>
                        <li><a href="menu.html">Меню</a></li>
                        <li><a href="news.html">Новини</a></li>
                        <li><a href="input.html">Ввід/вивід информації</a></li>
                        <li><a href="author.html">Про автора</a></li>
                    </ul>
                </nav>
            </div>
        </main>
        <footer>
            <address>
                <div>
                    <p>Контактна інформація:</p>
                    <p>тел: 1488-666-69-13</p>
                    <p>адреса: м. Чернівці вул. Небесної Сотні 4б</p>
                    <p>email: Zul_Jin_x_Sacrifice@Baal.com</p>
                </div>
            </address>
            <p>&copy; Zul Jin x Sacrifice x Baal</p>
        </footer>
    </body>
    <script src="script.js" language="JavaScript"></script>
</html>
