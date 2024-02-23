

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




var productsRef = firebase.database().ref("Products");

// Lấy dữ liệu từ Firebase và hiển thị ra HTML
productsRef.once("value", function(snapshot) {
  var products = snapshot.val(); // Lấy dữ liệu dưới dạng object
  var stt = 1; // Số thứ tự

  for (var key in products) {
    if (products.hasOwnProperty(key)) {
      var item = products[key];

      // Tạo hàng mới trong bảng và điền dữ liệu
      var row = "<tr>" +
                "<td>" + stt++ + "</td>" +
                "<td>" + item.ProductID + "</td>" +
                "<td><img src='" + item.ImageURL + "'></td>" +
                "<td>" + item.Name + "</td>" +
                "<td>" + item.StockQuantity + "</td>" +
                "<td>" + item.Price + "</td>" +
                "<td><a style='background-color: #2196F3;'  href='changeProduct.html?productId=" + key + "&name=" + item.Name + "&price=" + item.Price + "&quantity=" + item.StockQuantity + "&url=" + item.ImageURL + "&description=" + item.Description + "'>Sửa</a></td>" +
                "<td><a style='background-color: red;' onclick='confirmDelete(" + key + ")'>Xóa</a></td>"
                "</tr>";
      // Thêm hàng vào tbody của bảng
      document.getElementById("product-table-body").innerHTML += row;
    }
  }
});

// Hàm xác nhận xoá sản phẩm
function confirmDelete(productId) {
    if (confirm("Bạn có chắc chắn muốn xoá sản phẩm này không?")) {
        deleteProduct(productId);
    }
}

// Hàm để xoá sản phẩm từ Firebase
function deleteProduct(productId) {
    var productRef = firebase.database().ref("Products/" + productId);
    productRef.remove()
      .then(function() {
        // Xoá thành công, hiển thị thông báo và tải lại trang
        alert("Xoá sản phẩm thành công!");
        location.reload();
      })
      .catch(function(error) {
        // Xảy ra lỗi khi xoá sản phẩm
        alert("Xảy ra lỗi khi xoá sản phẩm: " + error.message);
      });
}



// Bắt sự kiện submit của form
document.querySelector('#main-content form').addEventListener('submit', function(event) {
  event.preventDefault(); // Ngăn chặn form submit theo cách thức mặc định

  // Lấy giá trị từ các trường input
  var name = document.getElementById('name').value;
  var price = document.getElementById('price').value;
  var quantity = document.getElementById('quantity').value;
  var url = document.getElementById('url').value;
  var productID = document.getElementById('productID').value;
  var Description = document.getElementById('Description').value;

  // Tạo một đối tượng chứa dữ liệu sản phẩm mới
  var newProduct = {
      ProductID: productID,
      Name: name,
      Price: price,
      StockQuantity: quantity,
      ImageURL: url,
      Description: Description
  };

  // Thêm sản phẩm mới vào Firebase
  var newProductRef = firebase.database().ref("Products").push();
  newProductRef.set(newProduct)
      .then(function() {
          alert("Thêm sản phẩm thành công!");
          location.reload(); // Tải lại trang để hiển thị sản phẩm mới
      })
      .catch(function(error) {
          alert("Xảy ra lỗi khi thêm sản phẩm: " + error.message);
      });
});
