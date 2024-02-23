<?php
    session_start();

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trang Chủ - Máy Chiếu</title>
    <link rel="shortcut icon" href="./imgs/favicons.png" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://kit.fontawesome.com/c13a07f3cd.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./public/header.css">
    <link rel="stylesheet" href="./public/footer.css">
    <link rel="stylesheet" href="./public/index.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet">

    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous">
    </script>
    <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-database.js"></script>
    <script src="./config/ConfigFirebase.js"></script>
</head>

<body class="common-home">
    <header class="header">
        <div class="container-header">
            <div class="header-logo">
                <a href="./index.php?action=home">
                    <img src="./imgs/LogoSS.png" alt="">
                </a>
            </div>
            <div class="header-list">
                <ul class="nav">
                    <li class="nav-item">
                        <a href="./index.php?action=about">Về chúng tôi</a>
                    </li>
                    <li class="nav-item">
                        <a href="./index.php?action=customer">Khách hàng</a>
                    </li>
                    <li class="nav-item">
                        <a href="./index.php?action=product">Sản phẩm</a>
                    </li>
                </ul>
            </div>
            <div class="header-button" id="userDropdown">

                <span class="relative z-20">
                <a class="hover:text-white" href="./index.php?action=cart">
                    <i class="fa-solid fa-cart-shopping header-icon cursor-pointer" id="cartIcon"></i>
                </a>
                       
                    <!-- <div class="fixed   right-0 top-0 left-0 bottom-0  cart hidden " style="background-color: rgba(0,0,0,.25);" id="cartDiv">
                        <div class="absolute right-0 top-0 h-full w-96 bg-white z-20 px-8 py-6">
                            <div class="flex justify-end">
                                <div class="mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6 close-cart" id="closeCart">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>

                                </div>
                            </div>
                            <div id="cartItems">
                                <div class="h-24 flex">
                                    <div class="w-2/5 p-2">
                                        <img class="w-20 h-full"
                                            src="https://beecube.vn/wp-content/uploads/2023/12/sp_x2-max-gen-3.jpg" alt="">
                                    </div>
                                    <div class="py-2 px-2">
                                        <h3 class="font-medium ">Máy chiếu mini - Beecube X2 Max Gen 3</h3>
                                        <div class="flex mt-3 justify-between">
                                            <p>1 × 2.990.000 ₫</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <hr class="my-4">
                            <p><strong>Tạm tính:</strong> 2.990.000 ₫</p>
                            <hr class="my-4">
                            <div class="flex justify-between ">
                                <button class="px-3 py-2 text-white bg-yellow-400 hover:bg-black duration-500"><a class="hover:text-white" href="./index.php?action=cart">XEM GIỎ
                                    HÀNG</a></button>
                                <button class="px-3 py-2 text-white bg-slate-950 hover:bg-yellow-400 duration-500">THANH
                                    TOÁN</button>
                            </div>
                        </div>
                    </div> -->
                </span>
                <span class="relative z-10">
                    <i class="fa-regular fa-user header-icon check cursor-pointer" id="userIcon"></i>
                    <div class="absolute right-0 w-max text-md top-8  user-dropdown hidden">
                        <ul
                            class="bg-white border-2 border-slate-100 shadow text-center relative before:content-[' '] before:border-solid before:border-8 before:absolute before:bottom-full before:right-2 before:border-x-transparent before:border-t-transparent ">
                            <li class="px-4 py-2 hover:bg-yellow-400 hover:text-white duration-500 cursor-pointer"><a
                                    class="hover:text-white" href="./index.php?action=infomation">Hồ sơ</a></li>
                            <li class="px-4 py-2 hover:bg-yellow-400 hover:text-white duration-500 cursor-pointer"><a
                                    class="hover:text-white" href="./index.php?action=donhang">Đơn hàng</a></li>
                            <li class="px-4 py-2 hover:bg-yellow-400 hover:text-white duration-500 cursor-pointer " id="admin"><a
                                    class="hover:text-white " href="./admin/index.html">Admin</a></li>
                            <li class="px-4 py-2 hover:bg-yellow-400 hover:text-white duration-500 cursor-pointer"  id="logoutButton"><a
                                    class="hover:text-white" href="#">Thoát</a></li>
                        </ul>
                     </div>
                    <div class="absolute right-0 w-max text-md top-8  login-dropdown hidden ">
                        <ul
                            class="bg-white border-2 border-slate-100 shadow text-center relative before:content-[' '] before:border-solid before:border-8 before:absolute before:bottom-full before:right-2 before:border-x-transparent before:border-t-transparent ">
                            <li class="px-4 py-2 hover:bg-yellow-400 hover:text-white duration-500 cursor-pointer"><a
                                    class="hover:text-white" href="./layouts/login.php">Đăng nhập</a></li>
                            <li class="px-4 py-2 hover:bg-yellow-400 hover:text-white duration-500 cursor-pointer"><a
                                    class="hover:text-white" href="./layouts/resgister.php">Đăng ký</a></li>
                        </ul>
                    </div> 
                </span>
            </div>
        </div>
    </header>
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        // Lấy ra các phần tử cần sử dụng
        var username = sessionStorage.getItem('username');
        var UserID = sessionStorage.getItem('userID');

        const userIcon = document.getElementById('userIcon');
        const userDropdown = document.querySelector('.user-dropdown');
        const loginDropdown = document.querySelector('.login-dropdown');

        // Xử lý sự kiện click vào icon "user"
        userIcon.addEventListener('click', function() {
            
            if (username && username !== '') {
             
                userDropdown.classList.toggle('hidden');
            } else {
               
                loginDropdown.classList.toggle('hidden');
            }
        });

        // Xử lý sự kiện khi mất focus ra khỏi div
        document.addEventListener('click', function(event) {
            const userDropdownParent = document.getElementById('userDropdown');
            // Nếu sự kiện click không nằm trong div chứa icon user, thì ẩn dropdown
            if (!userDropdownParent.contains(event.target)) {
                userDropdown.classList.add('hidden');
            }
        });
    });
    </script>
<!-- <script>
    const cartIcon = document.getElementById('cartIcon');
    const cartDiv = document.getElementById('cartDiv');
    const closeCartIcon = document.getElementById('closeCart');

    cartIcon.addEventListener('click', function() {
        cartDiv.classList.remove('hidden');
    });

    closeCartIcon.addEventListener('click', function() {
        cartDiv.classList.add('hidden');
    });

     // Thêm sự kiện click cho div cart
     cartDiv.addEventListener('click', function(event) {
        if (event.target === cartDiv) {
            if (!cartDiv.classList.contains('hidden')) {
                cartDiv.classList.add('hidden');
            }
        }
    });
</script> -->
<script>



const firebaseConfig = {
    apiKey: "AIzaSyDwB2bPtHlh-46hyBBdKYkHd2LRRS3rqBM",
    authDomain: "fir-ce708.firebaseapp.com",
    databaseURL: "https://fir-ce708-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-ce708",
    storageBucket: "fir-ce708.appspot.com",
    messagingSenderId: "401824984167",
    appId: "1:401824984167:web:a2a459519cf9e65cc6b8c2",
    measurementId: "G-0Z8KFQFJCX"
  };

  // Initialize Firebases
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

   document.addEventListener('DOMContentLoaded', function() {
    // Lấy giá trị username từ sessionStorage
    var username = sessionStorage.getItem('username');

    // Kiểm tra xem username có tồn tại và không rỗng
    if (username && username !== '') {
        // Truy vấn cơ sở dữ liệu Firebase để kiểm tra xem username có tồn tại trong bảng Admin không
        firebase.database().ref('Admins').orderByChild('Username').equalTo(username).once('value', function(snapshot) {
            if (snapshot.exists()) {
                // console.log("0"); // Username thuộc bảng Admin
            } else {
                // Truy vấn cơ sở dữ liệu Firebase để kiểm tra xem username có tồn tại trong bảng Users không
                firebase.database().ref('Users').orderByChild('Username').equalTo(username).once('value', function(snapshot) {
                    if (snapshot.exists()) {
                        const admin = document.getElementById('admin');
                        admin.classList.add('hidden');

                    } else {
                        console.log("Username không tồn tại trong cơ sở dữ liệu");
                    }
                });
            }
        });
    } else {
        // console.log("Username không tồn tại hoặc rỗng");
    }
});


</script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logoutButton');

    logoutButton.addEventListener('click', function() {
        // Xoá giá trị của username từ sessionStorage
        sessionStorage.removeItem('username');
        // Sau khi xoá, chuyển hướng hoặc thực hiện các thao tác khác
        // Ví dụ: Chuyển hướng đến trang đăng nhập
        window.location.href = "./layouts/login.php";
    });
});

</script>
<!-- <script src="./config/showCartSmall.js"></script> -->
