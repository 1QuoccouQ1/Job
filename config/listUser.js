
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

  


   // Lấy reference đến bảng HTML
   const userTable = document.getElementById('user-table').getElementsByTagName('tbody')[0];
    
   // Lấy dữ liệu từ Firebase Realtime Database và hiển thị ra bảng HTML
   database.ref('Users').once('value', (snapshot) => {
       let stt = 1; // Số thứ tự
       snapshot.forEach((childSnapshot) => {
           const userData = childSnapshot.val();
           const row = userTable.insertRow();
           // Thêm dữ liệu vào từng cột trong hàng
           row.insertCell(0).textContent = stt++;
           row.insertCell(1).textContent = userData.Username;
           row.insertCell(2).textContent = userData.PhoneNumber;
           row.insertCell(3).textContent = userData.Email;
           // Tạo một thẻ a để hiển thị liên kết "Xóa"
           const deleteLink = document.createElement('a');
           deleteLink.textContent = 'Xóa';
           deleteLink.style.backgroundColor = 'red';
           // Bắt sự kiện click cho liên kết "Xóa"
           deleteLink.addEventListener('click', function() {
               // Hiển thị hộp thoại xác nhận trước khi xóa
               const confirmDelete = confirm("Bạn có chắc chắn muốn xoá?");
               if (confirmDelete) {
                   // Xoá dữ liệu từ Firebase Realtime Database khi người dùng xác nhận
                   childSnapshot.ref.remove()
                       .then(function() {
                           alert('Xoá thành công');
                           // Tải lại trang sau khi xóa dữ liệu
                           window.location.reload();
                       })
                       .catch(function(error) {
                           console.error('Xoá thất bại: ', error);
                       });
               }
           });
           // Thêm liên kết "Xóa" vào cột cuối cùng
           row.insertCell(4).appendChild(deleteLink);
       });
   });