  // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

  export default database;

  // Lấy dữ liệu từ Firebase Realtime Database
function getDataOnce() {
    database.ref('Admins').once('value', (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      // Thực hiện xử lý dữ liệu ở đây
    });
  }
  
  // Gọi hàm để lấy dữ liệu một lần
  getDataOnce();
  