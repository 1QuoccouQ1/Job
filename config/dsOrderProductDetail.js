// Lấy thông tin ProductID từ URL
const urlParams = new URLSearchParams(window.location.search);
const productIDJSON = urlParams.get('data');

// Chuyển đổi chuỗi JSON thành mảng hoặc đối tượng

// Sử dụng giá trị ProductID trong các xử lý tiếp theo
console.log(productIDJSON); // In ra ProductID để kiểm tra
