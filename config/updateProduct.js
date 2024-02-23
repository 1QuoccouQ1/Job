


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



// Hàm cập nhật dữ liệu sản phẩm lên Firebase
function updateProduct(productId, newName, newPrice, newImageURL) {
var productRef = firebase.database().ref("Products/" + productId);
productRef.update({
    Name: newName,
    Price: newPrice,
    ImageURL: newImageURL
})
.then(function() {
    alert("Cập nhật sản phẩm thành công!");
    // Thực hiện các hành động cần thiết sau khi cập nhật thành công, ví dụ: chuyển hướng trang
    // window.location.href = 'index.html';
})
.catch(function(error) {
    alert("Xảy ra lỗi khi cập nhật sản phẩm: " + error.message);
});
}