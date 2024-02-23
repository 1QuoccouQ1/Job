const db = firebase.database();

// Lấy UserID từ sessionStorage
const userID = sessionStorage.getItem('userID');

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
            
            // Kiểm tra nếu UserID trong orderDetail giống với UserID lưu trong sessionStorage
            if (orderDetail.UserID == userID) {
               
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

                            // Tạo HTML cho mỗi sản phẩm
                            const itemHtml = `
                            <div class="h-24 flex">
                                <div class="w-2/5 p-2">
                                    <img class="w-20 h-full" src="${product.ImageURL}" alt="${product.Name}">
                                </div>
                                <div class="py-2 px-2">
                                    <h3 class="font-medium">${product.Name}</h3>
                                    <div class="flex mt-3 justify-between">
                                        <p>${orderDetail.Quantity} × ${formattedPrice}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        `;



                            // Thêm sản phẩm vào container
                            document.getElementById("cartItems").innerHTML += itemHtml;
                        });
                    }
                });
            }
        }
    }
    
});

// // Gọi hàm once("value") để lấy dữ liệu từ Firebase Realtime Database một lần và không theo dõi thay đổi
// orderDetailsRef.once("value")
//     .then(snapshot => {
//         // Lấy dữ liệu từ snapshot và lưu vào biến orderDetails
//         const orderDetails = snapshot.val();
//         // Khởi tạo mảng promises để lưu các Promise
//         const promises = [];

//         // Duyệt qua từng key trong orderDetails
//         for (const key in orderDetails) {
//             if (orderDetails.hasOwnProperty(key)) {
//                 // Lấy thông tin của mỗi đơn hàng
//                 const orderDetail = orderDetails[key];
//                 // Kiểm tra nếu UserID của đơn hàng trùng với UserID hiện tại
//                 if (orderDetail.UserID == userID) {
//                     // Truy vấn để lấy thông tin về sản phẩm từ bảng Products dựa vào ProductID của đơn hàng
//                     const productRef = db.ref("Products").orderByChild("ProductID").equalTo(orderDetail.ProductID);
//                     // Tạo một Promise mới và thêm vào mảng promises
//                     const promise = productRef.once("value").then(productSnapshot => {
//                         // Lấy dữ liệu sản phẩm từ snapshot
//                         const productData = productSnapshot.val();
//                         // Kiểm tra nếu sản phẩm tồn tại
//                         if (productData) {
//                             // Duyệt qua từng sản phẩm trong sản phẩm có trong sản phẩm data
//                             productSnapshot.forEach(productChildSnapshot => {
//                                 // Lấy thông tin sản phẩm
//                                 const product = productChildSnapshot.val();
//                                 // Tính tổng tiền cho mỗi sản phẩm dựa trên giá và số lượng
//                                 const subtotal = product.Price * orderDetail.Quantity;
//                                 // Cộng vào biến totalPrice
//                                 totalPrice += subtotal;
//                             });
//                         }
//                     });
//                     // Thêm promise vào mảng promises
//                     promises.push(promise);
//                 }
//             }
//         }
//         // Trả về một promise giải quyết khi tất cả các promise trong mảng promises được giải quyết
//         return Promise.all(promises);
//     })
//     .then(() => {
//         // Format số tiền thành định dạng tiền tệ và hiển thị trong phần tử có id là "totalPrice"
//         const formattedTotalPrice = totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
//         document.getElementById("totalPrice").textContent = formattedTotalPrice;
//         document.getElementById("totalPrice1").textContent = formattedTotalPrice;
//     })
//     .catch(error => {
//         // Bắt lỗi nếu có và in ra console
//         console.error("Error fetching data:", error);
//     });
