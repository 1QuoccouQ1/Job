var orderID = ""; 
// Lấy OrderID từ URL
var urlParams = new URLSearchParams(window.location.search);
orderID = urlParams.get('orderID');

orderID = parseInt(orderID);

// Truy vấn dữ liệu từ bảng OrderDetails
var orderDetailsRef = firebase.database().ref("OrderDetails").orderByChild("OrderID").equalTo(orderID);

orderDetailsRef.once("value", function(snapshot) {
    // Biến để chứa mã HTML
    var html = '';
  
    // Biến đếm số thứ tự
    var stt = 1;
  
    // Biến để tính tổng giá
    var totalAmount = 0;
  
    // Duyệt qua các đơn hàng chi tiết
    snapshot.forEach(function(childSnapshot) {
      var orderDetail = childSnapshot.val();
  
      // Tính tổng giá của đơn hàng chi tiết
      var subtotal = orderDetail.Subtotal * orderDetail.Quantity;
  
      // Truy vấn dữ liệu từ bảng Products để lấy tên sản phẩm
      var productRef = firebase.database().ref("Products").child(orderDetail.ProductID);

      productRef.once("value", function(productSnapshot) {
        var productName = productSnapshot.val().Name;
  
        // Tạo hàng trong bảng HTML cho mỗi đơn hàng chi tiết
        html += `<tr>
                    <td>${stt}</td>
                    <td class="text-center">
                      <a href="">${productName}</a>
                    </td>
                    <td class="text-center">${orderDetail.Quantity}</td>
                    <td class="text-center">
                      <span class=""><bdi>${orderDetail.Subtotal.toLocaleString()}&nbsp;<span class="">₫</span></bdi></span>
                    </td>
                    <td class="text-center">
                      <span class=""><bdi>${subtotal.toLocaleString()}&nbsp;<span class="">₫</span></bdi></span>
                    </td>
                </tr>`;
  
        // Cộng dồn vào tổng giá
        totalAmount += subtotal;
  
        stt++; // Tăng số thứ tự lên cho đơn hàng tiếp theo
        
        // Đổ dữ liệu vào bảng HTML
        document.getElementById("orderDetailsTableBody").innerHTML = html;
      });
    });
});
