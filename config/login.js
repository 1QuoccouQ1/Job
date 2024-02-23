


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

  document.getElementById("loginButton").addEventListener("click", function() {
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;

    const usersRef = firebase.database().ref("Users");
    usersRef.once("value", function(userSnapshot) {
        let userFound = false; // Biến để kiểm tra xem username có tồn tại trong bảng Users không

        userSnapshot.forEach(function(userChildSnapshot) {
            const user = userChildSnapshot.val();
            if (user.Username === username && user.Password === password) {
                userFound = true;
                sessionStorage.setItem('username', username);
                sessionStorage.setItem('userID', user.UserID);
                window.location.href = "../index.php";
                return;
            }
        });

        if (!userFound) {
            // Nếu không tìm thấy username trong bảng Users, tiếp tục kiểm tra trong bảng Admins
            const adminsRef = firebase.database().ref("Admins");
            adminsRef.once("value", function(adminSnapshot) {
                let adminFound = false; // Biến để kiểm tra xem username có tồn tại trong bảng Admins không

                adminSnapshot.forEach(function(adminChildSnapshot) {
                    const admin = adminChildSnapshot.val();
                    if (admin.Username === username && admin.Password === password) {
                        adminFound = true;
                        sessionStorage.setItem('username', username);
                        sessionStorage.setItem('userID', admin.UserID);
                        window.location.href = "../index.php";
                        return;
                    }
                });

                if (!adminFound) {
                    // Nếu không tìm thấy username trong cả hai bảng Users và Admins, hiển thị thông báo lỗi
                    document.querySelector(".message").textContent = "Invalid username or password!";
                }
            });
        }
    });
});
