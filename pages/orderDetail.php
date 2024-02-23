<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <section class="mb-5">
        <p class="text-4xl text-center font-medium mb-12  mt-24">Đơn hàng chi tiết</p>
        <div class="flex">
            <div class="w-full mx-4">
                <div class="border-2 border-slate-100 p-4">
                    <table class="w-full">
                        <thead class="h-14" >
                            <tr>
                                <th class="w-10">STT</th>
                                <th class="text-center">Sản phẩm</th>
                                <th class="w-26 text-center ">Số lượng</th>
                                <th class="text-center">Giá</th>
                                <th class="text-center">Tổng giá</th>
                            </tr>
                        </thead>
                        <tbody  id="orderDetailsTableBody">
                                <!-- <tr class="">

                                <td class="w-5">
                                   1			</td>

                                <td class="text-center">
                                <a href="">		Máy Chiếu Mini - Beecube X1 Gen 2		</td>

                                <td class=" text-center" data-title="Sản phẩm">
                                <a href="">2</a>						</td>

                                <td class="text-center" data-title="Giá">
                                    <span class=""><bdi>1.990.000&nbsp;<span class="">₫</span></bdi></span>						</td>


                                <td class="text-center" data-title="Tạm tính">
                                    <span class=""><bdi>1.990.000đ&nbsp;<span class=""></span></bdi></span>						</td>
                                </tr> -->
                        </tbody>
                    </table>
                    <hr class="my-6">
                    <p class=" font-medion text-lg ml-auto mr-20 w-max"><strong>Tổng tiền :</strong> 0đ</p>
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
    <script src="./config/OrderDetails.js"></script>
   
</body>
</html>