


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



  const invoicesRef = firebase.database().ref('Invoices');

  invoicesRef.on('value', (snapshot) => {
    const invoices = snapshot.val();
    const orderTable = document.getElementById('order-body');

    for (let key in invoices) {
        const invoice = invoices[key];
        const orderId = invoice.OrderID;
        const userId = invoice.UserID;

        // Truy vấn vào bảng Orders để lấy thông tin đơn hàng
        const orderRef = firebase.database().ref('Orders/' + orderId);
        orderRef.once('value', (orderSnapshot) => {
            const order = orderSnapshot.val();

            // Truy vấn vào bảng Users để lấy thông tin người dùng
            const userRef = firebase.database().ref('Users/' + userId);
            userRef.once('value', (userSnapshot) => {
                const user = userSnapshot.val();

                // Tạo một hàng mới trong bảng
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${key}</td>
                    <td>${invoice.InvoiceID}</td>
                    <td>${user.FullName}</td>
                    <td>${user.Address}</td>
                    <td>${order.OrderID}</td>
                    <td>${order.OrderID}</td>
                    <td>${invoice.TotalAmount}</td>
                    <td>
                        <select name='trangThai[]' class='trangThaiSelect'>
                            <option value='0' ${invoice.Condition == 0 ? 'selected' : ''}>Đang chuẩn bị</option>
                            <option value='1' ${invoice.Condition == 1 ? 'selected' : ''}>Đã xong</option>
                        </select>
                    </td>
                    <input type='hidden' name='maDH[]' value='${key}'>
                `;
                orderTable.appendChild(row);
            });
        });
    }
});


// Lắng nghe sự kiện khi trạng thái của dropdown menu thay đổi
document.addEventListener('change', (event) => {
    // Kiểm tra xem phần tử được chọn có phải là dropdown menu không
    if (event.target.classList.contains('trangThaiSelect')) {
        // Lấy giá trị mới từ dropdown menu
        const newCondition = parseInt(event.target.value);
        // Lấy ID của hóa đơn từ phần tử cha
        const invoiceID = event.target.closest('tr').querySelector('input[name="maDH[]"]').value;

        // Cập nhật trạng thái của hóa đơn trên Firebase
        firebase.database().ref('Invoices/' + invoiceID).update({
            Condition: newCondition
        })
        .then(() => {
            alert('Cập nhật trạng thái hóa đơn thành công!');
            location.reload();
        })
        .catch((error) => {
            alert('Lỗi khi cập nhật trạng thái hóa đơn:');
        });
    }
});
