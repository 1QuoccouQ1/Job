
var productsRef = firebase.database().ref("Products");

// Lấy dữ liệu từ Firebase và hiển thị ra HTML
productsRef.once("value", function(snapshot) {
  var products = snapshot.val(); // Lấy dữ liệu dưới dạng object
  var stt = 1; // Số thứ tự

  for (var key in products) {
    if (products.hasOwnProperty(key)) {
      var item = products[key];


      var row = `<div class="w-1/4 px-3 rounded-xl relative group ">
                    <div class="overflow-hidden">
                        <a href="./index.php?action=infoProduct" >
                            <img class="rounded-xl hover:scale-110 duration-500" src="${item.ImageURL}" alt="" srcset="">
                        </a>
                        <div class="add-to-cart-btn absolute top-4 right-6 bg-white p-2 rounded-lg scale-0 group-hover:scale-100 z-20 transition-transform duration-500 hover:cursor-pointer">
                            <i class="fa-solid fa-cart-plus "></i>
                        </div>
                    </div>
                    <div class="my-3 font-medium ">
                        <p class="mb-2">${item.Name}</p>
                        <p class="text-yellow-500 ">${parseInt(item.Price).toLocaleString()} đ</p>
                    </div>
                </div>`;

      document.getElementById("productsContainer").innerHTML += row;
    }
  }
});
