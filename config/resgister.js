


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

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  document.getElementById("registerButton").addEventListener("click", function() {
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
    const repeatPassword = document.getElementById("repeatPasswordInput").value;

    // Kiểm tra các trường nhập liệu
    if (name === "" || email === "" || password === "" || repeatPassword === "") {
        document.querySelector(".message").textContent = "Please fill in all fields!";
        return;
    }

    // Kiểm tra độ dài của mật khẩu
    if (password.length < 6) {
        document.querySelector(".message").textContent = "Password must be at least 6 characters long!";
        return;
    }

    // Kiểm tra mật khẩu nhập lại có khớp không
    if (password !== repeatPassword) {
        document.querySelector(".message").textContent = "Passwords do not match!";
        return;
    }

    // Kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.querySelector(".message").textContent = "Invalid email format!";
        return;
    }

    // Nếu không có lỗi, tiến hành đăng ký
    const UserID = generateRandomUserID();
    const usersRef = firebase.database().ref("Users/");
    usersRef.push({
        Username: name,
        Email: email,
        UserID: UserID,
        Password: password,
        //Thêm các trường thông tin khác nếu cần
    })
    .then(function() {
        // Hiển thị thông báo đăng ký thành công hoặc chuyển hướng người dùng đến trang khác
        alert("Registration successful!");
        // Chuyển hướng đến trang khác nếu cần
        window.location.href = "./login.php";
    })
    .catch(function(error) {
        // Xảy ra lỗi khi đăng ký
        alert("Error registering user: " + error.message);
    });
});

function generateRandomUserID() {
    var result = 'PD'; // Tiền tố PD
    for (var i = 0; i < 5; i++) {
        result += Math.floor(Math.random() * 10); // Số ngẫu nhiên từ 0 đến 9
    }
    return result;
}