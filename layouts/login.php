<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Trang Chủ - Máy Chiếu</title>
    <link rel="shortcut icon" href="../imgs/favicons.png" type="image/x-icon">
    <link rel="stylesheet" href="../public/login.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://kit.fontawesome.com/c13a07f3cd.js" crossorigin="anonymous"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-database.js"></script>
    <style>
      .message {
        color:red;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="sign-up">
        <div class="word-main " style="margin-bottom: 100px;     margin-left: 119px;"><strong>Log In</strong></div>
        <div class="user">
          <i class="fa-solid fa-user"></i>
          <input id="usernameInput" type="text" placeholder="Your Name" />
        </div>
        <div class="pass">
          <i class="fa-solid fa-lock"></i>
          <input id="passwordInput" type="password" placeholder="Password" />
        </div>
        <div class="message"></div>
        <div class="button">
          <input id="agreeCheckbox" type="checkbox" /> I agree all statements in
          <span class="underline">Term of service</span>
        </div>
        <div class="register" id="loginButton">Login</div>
      </div>
      <div class="image">
        <div class="image-main">
          <img src="../imgs/Webinar-rafiki.svg" width="380px" height="450px" alt="" />
        </div>
        <div class="word">
          <span class="underline">I am already member</span>
        </div>
      </div>
    </div>
    <script src="../config/login.js"></script>

  </body>
</html>
