document.addEventListener('DOMContentLoaded', function() {
    // Lấy thông tin từ sessionStorage
    var InvoiceID = sessionStorage.getItem('InvoiceID');
    var InvoiceDate = sessionStorage.getItem('InvoiceDate');
    var orderTotal = sessionStorage.getItem('orderTotal');
    var address = sessionStorage.getItem('address');
    var Name = sessionStorage.getItem('Name');
    var Quantity = sessionStorage.getItem('Quantity');

    // Hiển thị thông tin ra HTML hoặc thực hiện các xử lý khác tùy ý
    console.log("Mã đơn hàng: " + InvoiceID);
    console.log("Ngày mua hàng: " + InvoiceDate);
    console.log("Tổng tiền đơn hàng: " + orderTotal);
    console.log("Địa chỉ: " + address);
    console.log("Địa chỉ: " + Name);
    console.log("Địa chỉ: " + Quantity);


     // Hiển thị thông tin ra HTML
     document.getElementById('orderID').textContent = InvoiceID;
     document.getElementById('orderDate').textContent = InvoiceDate;
     document.getElementById('totalPrice').textContent = orderTotal;
     document.getElementById('totalPrices').textContent = orderTotal;


     var productList = document.getElementById('productList');
     var productData = [
         {name: Name, quantity: orderTotal} // Thêm thông tin sản phẩm từ sessionStorage
         // Thêm dữ liệu sản phẩm khác nếu cần
     ];
     productData.forEach(function (product) {
         var row = document.createElement('tr');
         var nameCell = document.createElement('td');
         var quantityCell = document.createElement('td');
        //  var priceCell = document.createElement('td');
         nameCell.textContent = product.name;
         quantityCell.textContent = product.quantity;
        //  priceCell.textContent = product.price;
         row.appendChild(nameCell);
         row.appendChild(quantityCell);
        //  row.appendChild(priceCell);
         productList.appendChild(row);
     });

    // Hiển thị địa chỉ
    document.getElementById('address').textContent = address;
});
