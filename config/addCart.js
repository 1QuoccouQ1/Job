// Lấy reference đến Bảng OrderDetails trên Firebase
var orderDetailsRef = firebase.database().ref("OrderDetails");

// Lấy UserID từ sessionStorage
var userID = sessionStorage.getItem('userID');

// Bắt sự kiện click vào nút "Thêm vào giỏ hàng"
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        console.log("ads")
        // Lấy ID sản phẩm từ thuộc tính data-product-id
        var productId = this.getAttribute('data-product-id');
        
        // Kiểm tra nếu UserID không tồn tại trong sessionStorage
        if (!userID) {
            console.error("UserID không tồn tại trong sessionStorage");
            return; // Kết thúc hàm nếu không có UserID
        }
        
        // Tạo đối tượng đại diện cho chi tiết đơn hàng mới
        var orderDetail = {
            ProductID: productId,
            Quantity: 1, // Số lượng mặc định khi thêm vào giỏ hàng
            UserID: userID // Sử dụng UserID lấy từ sessionStorage
        };

        // Thêm đối tượng orderDetail vào Bảng OrderDetails trên Firebase
        orderDetailsRef.push(orderDetail)
            .then(function() {
                console.log("Đã thêm sản phẩm vào giỏ hàng thành công!");
            })
            .catch(function(error) {
                console.error("Lỗi khi thêm sản phẩm vào giỏ hàng: ", error);
            });
    });
});
