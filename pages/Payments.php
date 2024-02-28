<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <section class="box-border mb-10">
        <h1 class="text-4xl text-center my-16 mb-32 font-medium ">Thanh Toán</h1>
        <div class="flex px-2 ">
            <div class="w-2/3 px-3 border-r border-solid border-slate-500 border-opacity-20"> 
                <h4 class="font-medium text-xl px-2">Billing & Shipping</h4>
                <hr class="my-3 px-2">
                <div class="flex">
                    <div class="w-1/2 p-2">
                        <label for="fullName">Họ và tên</label>
                        <span class="text-red-500">*</span>
                        <br>
                        <input class="border-2 border-inherit border-solid outline-transparent w-full my-2 h-10 px-2	" type="text" name="fullName" id="fullName">
                    </div>
                    <div class="w-1/2 p-2">
                        <label for="phoneNumber">Số điện thoại</label>
                        <span class="text-red-500">*</span>
                        <br>

                        <input class="border-2 border-inherit border-solid outline-transparent w-full my-2 h-10 px-2	" type="text"  name="phoneNumber" id="phoneNumber">
                    </div>
                </div>
                <div class=" p-2"> 
                    <label for="email">Địa chỉ email (tuỳ chọn)</label>
                    <span class="text-red-500">*</span>
                    <br>

                    <input class="border-2 border-inherit border-solid outline-transparent w-full my-2 h-10 px-2	" type="text"  name="email" id="email">
                </div>
                <div class=" p-2">
                    <label for="address">Địa chỉ</label>
                    <span class="text-red-500">*</span>
                    <br>

                    <input class="border-2 border-inherit border-solid outline-transparent w-full my-2 h-10 px-2	" type="text" name="address" id="address">
                </div>
                <div class=" p-2">
                    <label for="">Quốc gia/Khu vực</label>
                    <span class="text-red-500">*</span>
                    <p class="font-medium mb-10">Việt Nam

                    </p>
                </div>
                <h4 class="font-medium text-xl px-2">Additional information
                </h4>
                <hr class="my-3 px-2">
                <div class=" p-2">
                    <label for="note">Ghi chú đơn hàng (tuỳ chọn)</label>
                    <br>
                    <input class="border-2 border-inherit border-solid outline-transparent w-full my-2 h-20 px-2	" type="text" name="note" id="note"
                        placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn.">

                </div>
            </div>
            <div class="w-1/3 px-3">
                <h4 class="font-medium text-xl px-2">Đơn hàng của bạn</h4>
                <hr class="my-3 px-2">
                <div id="orderDetails" class=" justify-between	px-2">
                    <!-- <p>Máy chiếu mini - Beecube X2 Max Gen 3 × <span class="text-red-500">1</span></p>
                    <p>2.990.000 ₫</p> -->
                </div>
                <hr class="my-3 px-2">
                <div class="flex justify-between	px-2">
                    <p>Sub-total</p>
                    <p id="subtotalAmount">0 ₫</p>
                </div>
                <div class="flex justify-between	px-2">
                    <p>Giao hàng</p>
                    <p>Giao hàng miễn phí</p>
                </div>
                <hr  class="my-3 px-2">
                <div class="flex justify-between	px-2 mb-10" >
                    <p class="font-medium">Order Total</p>
                    <p id="orderTotalAmount">0 ₫</p>
                </div>
                <h4 class="font-medium text-xl px-2">Phương thức thanh toán</h4>
                <hr class="my-3 px-2">
                <ul class="px-2">
                    <li class="my-1">
                        <input type="radio" name="paymentMethod" id="cashOnDelivery" checked>
                        <label for="">Trả tiền mặt khi nhận hàng</label>
                    </li>
                    <li class="my-1">
                        <input type="radio"  name="paymentMethod" id="momo">
                        <label for="">Thanh toán qua MoMo</label>
                    </li>
                    <li class="my-1">
                        <input type="radio" name="paymentMethod" id="bankTransfer">
                        <label for="">Chuyển khoản ngân hàng (Quét mã QR)</label>
                    </li>
                </ul>
                <hr class="my-3 px-2">
                <p class=" px-2">Dữ liệu cá nhân của bạn sẽ được sử dụng để xử lý đơn đặt hàng, được đảm bảo tính bảo mật theo chính
                    sách của Beecube. Tham khảo thêm tại <span class="text-red-400">chính sách riêng tư</span>.</p>
                <button id="orderButton" class="w-full py-2 bg-yellow-400 text-white my-10"><a class="hover:text-white" href="./index.php?action=myOrder">ĐẶT HÀNG</a></button>
            </div>
        </div>
    </section>
    <script src="./config/Payments.js"></script>

</body>

</html>