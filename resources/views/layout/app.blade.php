<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
    @yield('add-on')
    <link rel="stylesheet" href="./css/layout.css">
    <link rel="stylesheet" href="./css/font-face.css">
    <link rel="shortcut icon" href="./img/RE Logo.ico" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css" rel="stylesheet">
    <script src="./script.js" defer></script>
    <script src="https://kit.fontawesome.com/e159cf5599.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>
</head>
<body>
    
    <!-- Header/Navigation Bar -->
    <div class="navbar">
        <div class="navbar--left">
            <a class="navbar__logo" href="Home.html"><img src="./img/RE Logo.png"></a>
            <a class="navbar__title" href="Home.html">REYNARDO ETANTYO . COM</a>
        </div>
        <div class="navbar--hamburger" onclick="dropdownMenu()">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="navbar--right">
            <div></div>
            <a class="navbar__title" href="MyCareer.html">My Career</a>
            <a class="navbar__title" href="MyProjects.html">My Projects</a>
            <a class="navbar__login" href="#Login"><img src="img/User-Fill.png" alt=""></a>
        </div>
    </div>

    @yield('content')


    <!-- Footer -->
    <div class="footer">
        <div class="footer__contacts">
            <u>Contacts:</u>
            <div class="footer__contacts__email">
                <i class="fa-regular fa-envelope"></i> :  <u>reynardo.etantyo2@gmail.com</u>
            </div>
            <div class="footer__contacts__wa">
                <i class="fa-brands fa-whatsapp fa-lg"></i> : <u>+628111505710</u>
            </div>
        </div>
        <div class="footer__links">
            <u>Links:</u>
        </div>
    </div>

</body>
</html>