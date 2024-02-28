var productsRef = firebase.database().ref("Products");

// Lấy dữ liệu từ Firebase và hiển thị ra HTML
productsRef.once("value", function(snapshot) {
  var products = snapshot.val(); // Lấy dữ liệu dưới dạng object

  for (var key in products) {
    if (products.hasOwnProperty(key)) {
      var item = products[key];

      var row = `<div class="w-1/4 px-3 rounded-xl relative group data-productid="${item.ProductID} ">
                    <div class="overflow-hidden">
                        <a href="./index.php?action=infoProduct" >
                            <img class="rounded-xl hover:scale-110 duration-500" src="${item.ImageURL}" alt="" srcset="">
                        </a>
                        <div class="add-to-cart-btn absolute top-4 right-6 bg-white p-2 rounded-lg scale-0 group-hover:scale-100 z-20 transition-transform duration-500 hover:cursor-pointer" onclick="addToCartAndShowToast('${key}')">
                            <i class="fa-solid fa-cart-plus"></i>
                        </div>
                    </div>
                    <div class="my-3 font-medium ">
                        <p class="mb-2">${item.Name}</p>
                        <p class="text-yellow-500 ">${parseInt(item.Price).toLocaleString()} đ</p>
                    </div>
                </div>`;

      document.getElementById("productsContainer").innerHTML += row;
    }
  }
});

function addToCart(key) {
  var userID = sessionStorage.getItem('userID');
  var productRef = firebase.database().ref("Products").child(key);
  productRef.once("value", function(snapshot) {
    var productData = snapshot.val();
    if (productData) {
      const OrderDetailID = generateRandomUserID();
      // Gửi dữ liệu sản phẩm lên bảng OrderDetails
      var orderDetailsRef = firebase.database().ref("OrderDetails").push();
      orderDetailsRef.set({
        OrderDetailID: OrderDetailID,
        OrderID: userID,
        ProductID: productData.ProductID,
        Quantity: 1,
        Subtotal: productData.Price,
        UserID: userID
      }).then(function() {
        console.log("Sản phẩm đã được thêm vào giỏ hàng thành công!");
      }).catch(function(error) {
        console.error("Lỗi khi thêm sản phẩm vào giỏ hàng: ", error);
      });
    } else {
      console.error("Không tìm thấy sản phẩm có key: ", key);
    }
  });
}

function generateRandomUserID() {
  var result = 'OD'; // Tiền tố 
  for (var i = 0; i < 5; i++) {
      result += Math.floor(Math.random() * 10); // Số ngẫu nhiên từ 0 đến 9
  }
  return result;
}