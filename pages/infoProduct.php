<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <style>
  #thumbnailContainer img {
    border: 2px solid transparent;
    transition: border-color 0.3s ease-in-out;
  }

  #thumbnailContainer img.selected {
    border-color: #555; /* Màu sắc của khung biên khi được chọn */
  }
</style>

</head>

<body>
    <section>
        <div class="flex ">
            <div class="w-1/2">
                <img class="p-5 w-full " src="https://beecube.vn/wp-content/uploads/2023/12/sp_x1-gen-2.jpg" alt="" id="mainImage">
                <div class="flex justify-center" id="thumbnailContainer">
                    <div class="w-1/12 mx-3 cursor-pointer hover:border-2 hover:border-slate-750 duration-300" onclick="changeImage('https://beecube.vn/wp-content/uploads/2023/12/sp_x1-gen-2.jpg')">
                        <img src="https://beecube.vn/wp-content/uploads/2023/12/sp_x1-gen-2.jpg" alt="">
                    </div>
                    <div class="w-1/12 mx-3 cursor-pointer hover:border-2 hover:border-slate-750 duration-300" onclick="changeImage('https://beecube.vn/wp-content/uploads/2023/12/ko-nen_x1-gen-2_3.png')">
                        <img src="https://beecube.vn/wp-content/uploads/2023/12/ko-nen_x1-gen-2_3.png" alt="">
                    </div>
                    <div class="w-1/12 mx-3 cursor-pointer hover:border-2 hover:border-slate-750 duration-300" onclick="changeImage('https://beecube.vn/wp-content/uploads/2023/12/ko-nen_x1-gen-2_2.png')">
                        <img src="https://beecube.vn/wp-content/uploads/2023/12/ko-nen_x1-gen-2_2.png" alt="">
                    </div>
                    <div class="w-1/12 mx-3 cursor-pointer hover:border-2 hover:border-slate-750 duration-300" onclick="changeImage('https://beecube.vn/wp-content/uploads/2023/12/ko-nen_x1-gen-2_4.png')">
                        <img src="https://beecube.vn/wp-content/uploads/2023/12/ko-nen_x1-gen-2_4.png" alt="">
                    </div>
                    <div class="w-1/12 mx-3 cursor-pointer hover:border-2 hover:border-slate-750 duration-300" onclick="changeImage('https://beecube.vn/wp-content/uploads/2023/12/ko-nen_x1-gen-2_5.png')">
                        <img src="https://beecube.vn/wp-content/uploads/2023/12/ko-nen_x1-gen-2_5.png" alt="">
                    </div>
                </div>
            </div>
            <div style="background-color: #F2F2F2;" class="p-16 w-1/2">
                <p class="text-4xl font-medium ">Máy Chiếu Mini – Beecube X1 Gen 2</p>
                <p class="text-yellow-500 text-xl font-medium my-6">1.990.000 ₫</p>
                <ul class="ml-8 tracking-wide  list-disc mb-3">
                    <li>Kích thước nhỏ gọn, dễ dàng mang theo</li>
                    <li>Hình ảnh sắc nét, màu sắc rực rỡ</li>
                    <li>Tích hợp trợ lý ảo Kiki</li>
                    <li>Tự động điều chỉnh hình ảnh</li>
                    <li>Chia sẻ màn hình không dây</li>
                </ul>
                <div
                    class="flex border-t-black border-dotted border-opacity-10 border-2 py-3 border-x-transparent border-b-transparent">
                    <input class="mr-1" type="checkbox" name="" id="" checked >
                    <img class="w-14 px-1" src="https://beecube.vn/wp-content/uploads/2023/12/sp_x1-gen-2.jpg" alt="">
                    <p class="w-96 mx-3">Thường được mua cùng với Máy Chiếu Mini - Beecube X1 Gen 2</p>
                    <p>1.990.000 ₫</p>
                </div>
                <div
                    class="flex border-t-black border-dotted border-opacity-10 border-2 py-3 border-x-transparent border-b-transparent">
                    <input class="mr-1" type="checkbox" name="" id="">
                    <img class="w-14 px-1" src="https://beecube.vn/wp-content/uploads/2023/12/ko-nen_man-chieu-1.png"
                        alt="">
                    <p class="w-96 mx-3">
                        1 × Màn chiếu phản quang Beecube</p>
                    <div>
                        <p class="line-through opacity-30">1.990.000 ₫</p>
                        <p>1.990.000 ₫</p>
                    </div>
                </div>
                <div
                    class="flex border-t-black border-dotted border-opacity-10 border-2 py-3 border-x-transparent border-b-transparent">
                    <input class="mr-1" type="checkbox" name="" id="">
                    <img class="w-14 px-1"
                        src="https://beecube.vn/wp-content/uploads/2023/12/ko-nen_loa-beecube-mufoli-1.png" alt="">
                    <p class="w-96 mx-3">1 × Loa Sound Bar Beecube</p>
                    <div>
                        <p class="line-through opacity-30">1.990.000 ₫</p>
                        <p>1.990.000 ₫</p>
                    </div>
                </div>
                <img class="w-3/5 my-3" src="./imgs/voucher.jpg" alt="">
                <div class="flex justify-around">
                    <div class="flex flex-row h-10  rounded-lg relative bg-transparent mt-1">
                        <button data-action="decrement"
                            class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none">
                            <span class="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input type="number"
                            class="outline-none focus:outline-none text-center  bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                            name="custom-input-number" value="1"></input>
                        <button data-action="increment"
                            class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer">
                            <span class="m-auto text-2xl font-thin">+</span>
                        </button>
                    </div>
                    <style>
                    input[type='number']::-webkit-inner-spin-button,
                    input[type='number']::-webkit-outer-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }

                    .custom-number-input input:focus {
                        outline: none !important;
                    }

                    .custom-number-input button:focus {
                        outline: none !important;
                    }
                    </style>

                    <script>
                    function decrement(e) {
                        const btn = e.target.parentNode.parentElement.querySelector(
                            'button[data-action="decrement"]'
                        );
                        const target = btn.nextElementSibling;
                        let value = Number(target.value);
                        value--;
                        target.value = value;
                    }

                    function increment(e) {
                        const btn = e.target.parentNode.parentElement.querySelector(
                            'button[data-action="decrement"]'
                        );
                        const target = btn.nextElementSibling;
                        let value = Number(target.value);
                        value++;
                        target.value = value;
                    }

                    const decrementButtons = document.querySelectorAll(
                        `button[data-action="decrement"]`
                    );

                    const incrementButtons = document.querySelectorAll(
                        `button[data-action="increment"]`
                    );

                    decrementButtons.forEach(btn => {
                        btn.addEventListener("click", decrement);
                    });

                    incrementButtons.forEach(btn => {
                        btn.addEventListener("click", increment);
                    });
                    </script>

                    <button class="py-2 px-3 bg-yellow-500 hover:bg-white  text-black   duration-300 rounded-full font-medium  ">THÊM
                        VÀO GIỎ HÀNG</button>
                    <button class="py-2 px-3 bg-slate-950 hover:bg-yellow-500 text-white duration-300 rounded-full font-medium">MUA
                        NGAY</button>
                </div>
            </div>
        </div>
    </section>
    <section class="mb-24">
        <h1 class="text-3xl font-medium text-center mb-12 mt-24">Sản phẩm tương tự</h1>
        <div class="flex">
            <div class="w-1/4 px-2">
                <div class="w-full rounded-xl overflow-hidden cursor-pointer">
                    <img class=" rounded-xl hover:scale-110 duration-500" src="./imgs/sp1.png" alt="">
                </div>
                <p class="mt-3 mb-2 cursor-pointer" >Máy chiếu mini – Beecube X2 Max Gen 4</p>
                <p class="text-yellow-500">3.990.000 ₫</p>
            </div>
            <div class="w-1/4 px-2">
                <div class="w-full rounded-xl overflow-hidden cursor-pointer">
                    <img class=" rounded-xl hover:scale-110 duration-500" src="./imgs/sp1.png" alt="">
                </div>
                <p class="mt-3 mb-2 cursor-pointer" >Máy chiếu mini – Beecube X2 Max Gen 4</p>
                <p class="text-yellow-500">3.990.000 ₫</p>
            </div>
            <div class="w-1/4 px-2">
                <div class="w-full rounded-xl overflow-hidden cursor-pointer">
                    <img class=" rounded-xl hover:scale-110 duration-500" src="./imgs/sp1.png" alt="">
                </div>
                <p class="mt-3 mb-2 cursor-pointer" >Máy chiếu mini – Beecube X2 Max Gen 4</p>
                <p class="text-yellow-500">3.990.000 ₫</p>
            </div>
            <div class="w-1/4 px-2">
                <div class="w-full rounded-xl overflow-hidden cursor-pointer">
                    <img class=" rounded-xl hover:scale-110 duration-500" src="./imgs/sp1.png" alt="">
                </div>
                <p class="mt-3 mb-2 cursor-pointer" >Máy chiếu mini – Beecube X2 Max Gen 4</p>
                <p class="text-yellow-500">3.990.000 ₫</p>
            </div>
        </div>
    </section>
    <script>
  function changeImage(newSource, width, height) {
    const mainImage = $('#mainImage');
    const thumbnailContainer = $('#thumbnailContainer');

    // Fade out the current image
    mainImage.fadeOut(300, function() {
      // Change the source and dimensions of the main image
      mainImage.attr('src', newSource);
      mainImage.attr('width', width);
      mainImage.attr('height', height);

      // Fade in the new image
      mainImage.fadeIn(300);
    });

    // Highlight the selected thumbnail
    thumbnailContainer.find('img').removeClass('selected');
    thumbnailContainer.find('img[src="' + newSource + '"]').addClass('selected');
  }
</script>


</body>

</html>