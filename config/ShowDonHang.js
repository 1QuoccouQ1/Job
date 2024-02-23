var invoicesRef = firebase.database().ref("Invoices");
var userID = sessionStorage.getItem('userID');

// Lấy dữ liệu từ Firebase và hiển thị ra HTML
invoicesRef.once("value", function(snapshot) {
  var invoices = snapshot.val(); // Lấy dữ liệu dưới dạng object
  var html = ''; // Biến để chứa mã HTML

  var stt = 1; // Số thứ tự đơn hàng

  for (var key in invoices) {
    if (invoices.hasOwnProperty(key)) {
      var invoice = invoices[key];
      
      // Kiểm tra nếu UserID trong hóa đơn giống với UserID trong sessionStorage
      if (invoice.UserID == userID) {
        // Xác định trạng thái dựa trên giá trị của Condition
        var status = (invoice.Condition === 1) ? "Pending" : "Finished";
        
        // Tạo URL với invoice.OrderID để truyền qua trang orderDetail
        var url = `./index.php?action=orderDetail&orderID=${invoice.OrderID}`;
        
        // Tạo hàng trong bảng HTML cho mỗi đơn hàng
        html += `<tr>
                    <td>${stt}</td>
                    <td class="text-center">${invoice.InvoiceID}</td>
                    <td class="text-center" data-title="${invoice.OrderID}"><a href="${url}">Xem chi tiết</a></td>
                    <td class="text-center" data-title="Giá"><span class=""><bdi>${invoice.TotalAmount}&nbsp;<span class="">₫</span></bdi></span></td>
                    <td class="text-center" ><span class=""><bdi>${status}&nbsp;<span class=""></span></bdi></span></td>
                </tr>`;
        
        stt++; // Tăng số thứ tự lên cho đơn hàng tiếp theo
      }
    }
  }

  // Đổ dữ liệu vào bảng HTML
  document.getElementById("invoicesTableBody").innerHTML = html;
});
