 // Lấy UserID từ sessionStorage
 const userID = sessionStorage.getItem('userID');
 const db = firebase.database();
 // Tham chiếu đến bảng OrderDetails
 const orderDetailsRef = db.ref("OrderDetails");

 // Khởi tạo tổng tiền
 let totalPrice = 0;

 // Lấy dữ liệu từ Firebase và hiển thị ra HTML
 orderDetailsRef.once("value", function(snapshot) {
     const orderDetails = snapshot.val(); // Lấy dữ liệu dưới dạng object

     // Duyệt qua từng chi tiết đơn hàng
     for (const key in orderDetails) {
         if (orderDetails.hasOwnProperty(key)) {
             const orderDetail = orderDetails[key];

             // Kiểm tra nếu userID không tồn tại hoặc trùng với userID trong orderDetail
             if (!userID || orderDetail.UserID == userID) {

                 // Thực hiện truy vấn để lấy dữ liệu từ bảng Products dựa trên ProductID
                 const productRef = db.ref("Products").orderByChild("ProductID").equalTo(orderDetail.ProductID);

                 productRef.once("value", function(productSnapshot) {
                     const productData = productSnapshot.val(); // Dữ liệu sản phẩm từ bảng Products

                     // Kiểm tra nếu sản phẩm tồn tại trong bảng Products
                     if (productData) {
                         // Duyệt qua từng sản phẩm (chỉ có một sản phẩm do đã sử dụng equalTo)
                         productSnapshot.forEach(function(productChildSnapshot) {
                             const product = productChildSnapshot.val();
                             const subtotal = product.Price * orderDetail.Quantity;

                             // Định dạng tiền tệ cho giá và tạm tính
                             const formattedPrice = product.Price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
                             const formattedSubtotal = subtotal.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
                            
                             sessionStorage.setItem('Name', product.Name);
                             sessionStorage.setItem('Quantity', orderDetail.Quantity);

                             // Tạo HTML cho mỗi sản phẩm
                             const itemHtml = `
                                 <div class="flex justify-between px-2">
                                     <p class="w-2/3 product"  data-productid="${product.ProductID}">${product.Name} × <span class="text-red-500 ">${orderDetail.Quantity}</span></p>
                                     <p>${formattedPrice}</p>
                                 </div>
                             `;

                             // Thêm sản phẩm vào container
                             document.getElementById("orderDetails").innerHTML += itemHtml;

                             // Tính tổng tiền
                         });
                     }
                 });
             }
         }
     }

    //  // Hiển thị tổng tiền và tổng tiền đơn hàng
    //  const formattedTotalPrice = totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    //  document.getElementById("subtotalAmount").textContent = formattedTotalPrice;
    //  document.getElementById("orderTotalAmount").textContent = formattedTotalPrice;



      // Gọi hàm once("value") để lấy dữ liệu từ Firebase Realtime Database một lần và không theo dõi thay đổi
    orderDetailsRef.once("value")
    .then(snapshot => {
        // Lấy dữ liệu từ snapshot và lưu vào biến orderDetails
        const orderDetails = snapshot.val();
        // Khởi tạo mảng promises để lưu các Promise
        const promises = [];

        // Duyệt qua từng key trong orderDetails
        for (const key in orderDetails) {
            if (orderDetails.hasOwnProperty(key)) {
                // Lấy thông tin của mỗi đơn hàng
                const orderDetail = orderDetails[key];
                // Kiểm tra nếu UserID của đơn hàng trùng với UserID hiện tại
                if (!userID || orderDetail.UserID == userID) {
                    // Truy vấn để lấy thông tin về sản phẩm từ bảng Products dựa vào ProductID của đơn hàng
                    const productRef = db.ref("Products").orderByChild("ProductID").equalTo(orderDetail.ProductID);
                    // Tạo một Promise mới và thêm vào mảng promises
                    const promise = productRef.once("value").then(productSnapshot => {
                        // Lấy dữ liệu sản phẩm từ snapshot
                        const productData = productSnapshot.val();
                        // Kiểm tra nếu sản phẩm tồn tại
                        if (productData) {
                            // Duyệt qua từng sản phẩm trong sản phẩm có trong sản phẩm data
                            productSnapshot.forEach(productChildSnapshot => {
                                // Lấy thông tin sản phẩm
                                const product = productChildSnapshot.val();
                                // Tính tổng tiền cho mỗi sản phẩm dựa trên giá và số lượng
                                const subtotal = product.Price * orderDetail.Quantity;
                                // Cộng vào biến totalPrice
                                totalPrice += subtotal;
                            });
                        }
                    });
                    // Thêm promise vào mảng promises
                    promises.push(promise);
                }
            }
        }
        // Trả về một promise giải quyết khi tất cả các promise trong mảng promises được giải quyết
        return Promise.all(promises);
    })
    .then(() => {
        // Format số tiền thành định dạng tiền tệ và hiển thị trong phần tử có id là "totalPrice"
        const formattedTotalPrice = totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        document.getElementById("subtotalAmount").textContent = formattedTotalPrice;
        document.getElementById("orderTotalAmount").textContent = formattedTotalPrice;
    })
    .catch(error => {
        // Bắt lỗi nếu có và in ra console
        console.error("Error fetching data:", error);
    });
 });
// Lắng nghe sự kiện khi nút "Đặt hàng" được click
document.getElementById('orderButton').addEventListener('click', function() {
    // Lấy giá trị từ các trường thông tin
    const fullName = document.getElementById('fullName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const note = document.getElementById('note').value;
    const orderTotal = document.getElementById('orderTotalAmount').textContent;
    const Condition = 0; // Set Condition thành 1
    
    const generateRandomInvoiceID = () => {
        const min = 10000;
        const max = 99999;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    // Lấy ngày hiện tại dưới dạng yyyy-mm-dd
    const getCurrentDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    
    // Lấy danh sách sản phẩm trong giỏ hàng
    const productList = document.querySelectorAll('.product');
    
    // Tạo một mảng để lưu các ProductID
    const productIDs = [];

    // Duyệt qua danh sách sản phẩm và lấy ProductID của mỗi sản phẩm
    productList.forEach(productElement => {
        const productID = parseInt(productElement.dataset.productid); // Lấy ProductID từ thuộc tính dataset
        // const Data = {
        //     ProductID:productID
        // }
        productIDs.push(productID); // Thêm ProductID vào mảng productIDs
    });

    // Đối tượng dữ liệu đơn hàng
    const orderData = {
        FullName: fullName,
        Sdt: phoneNumber,
        Email: email,
        Address: address,
        Description: note,
        TotalAmount: orderTotal,
        UserID: userID,
        Condition: Condition,
        InvoiceID: generateRandomInvoiceID(),
        InvoiceDate: getCurrentDate(),
        ProductID: productIDs // Thêm mảng ProductID vào đối tượng dữ liệu đơn hàng
        // Thêm thông tin khác nếu cần
    };

   // Lưu từng giá trị vào sessionStorage
   sessionStorage.setItem('InvoiceID', orderData.InvoiceID); // Sử dụng orderData.InvoiceID thay vì InvoiceID
   sessionStorage.setItem('InvoiceDate', orderData.InvoiceDate); // Sử dụng orderData.InvoiceDate thay vì InvoiceDate
   sessionStorage.setItem('orderTotal', orderTotal);
   sessionStorage.setItem('address', address);
    // Đẩy dữ liệu lên Firebase Realtime Database
    const invoicesRef = db.ref('Invoices');
    invoicesRef.push(orderData)
        .then(() => {
            console.log('Đơn hàng đã được lưu trữ trên Firebase.');
        })
        .catch(error => {
            console.error('Lỗi khi lưu trữ dữ liệu trên Firebase:', error);
        });
});


// document.getElementById("orderButton").addEventListener("click", function() {
//     // Lấy thông tin từ các input
//     var Invoice = document.getElementById("fullName").value;
//     var phoneNumber = document.getElementById("phoneNumber").value;
//     var email = document.getElementById("email").value;
    
   

// });
