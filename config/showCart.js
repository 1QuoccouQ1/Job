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
                                <tr>
                                    <td class="w-5">
                                        <a href="#" class="" aria-label="Remove" data-product_id="${orderDetail.OrderDetailID}" data-product_sku="">×</a>
                                    </td>
                                    <td class="text-center">
                                        <a href="${product.ImageURL}"><img src="${product.ImageURL}" alt="${product.Name}"></a>
                                    </td>
                                    <td class="text-center" data-title="Sản phẩm">
                                        <a href="#">${product.Name}</a>
                                    </td>
                                    <td class="text-center" data-title="Giá">
                                        <span class=""><bdi>${formattedPrice}</bdi></span>
                                    </td>
                                    <td class="text-center" data-title="Số lượng">
                                        <input type="number" class="text-center w-8" name="cart[${orderDetail.ProductID}][qty]" value="${orderDetail.Quantity}" aria-label="Product quantity" min="0" step="1" placeholder="" inputmode="numeric" autocomplete="off">
                                    </td>
                                    <td class="text-center" data-title="Tạm tính">
                                        <span class=""><bdi>${formattedSubtotal}</bdi></span>
                                    </td>
                                </tr>
                            `;

                            // Thêm sản phẩm vào container
                            document.getElementById("cartItemsContainer").innerHTML += itemHtml;
                        });
                    }
                });
            }
        }
    }
    
});

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
                if (orderDetail.UserID == userID) {
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
        document.getElementById("totalPrice").textContent = formattedTotalPrice;
        document.getElementById("totalPrice1").textContent = formattedTotalPrice;
    })
    .catch(error => {
        // Bắt lỗi nếu có và in ra console
        console.error("Error fetching data:", error);
    });
