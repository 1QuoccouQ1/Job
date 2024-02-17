<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body class="bg-gray-100">

    <section class="max-w-2xl mx-auto mt-20 p-4 mb-20 bg-white shadow-md">

        <div class="space-y-4">
            <h1 class="text-2xl text-center font-bold">Thông Tin Cá Nhân</h1>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="mb-4">
                    <label for="full-name" class="block text-sm font-medium text-gray-600">Họ và tên :</label>
                    <input type="text" id="full-name" class="mt-1 p-2 w-full border rounded-md">
                </div>

                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-600">Email :</label>
                    <input type="text" id="email" class="mt-1 p-2 w-full border rounded-md">
                </div>

                <div class="mb-4">
                    <label for="phone" class="block text-sm font-medium text-gray-600">Số điện thoại :</label>
                    <input type="text" id="phone" class="mt-1 p-2 w-full border rounded-md">
                </div>

                <div class="mb-4">
                    <label for="province" class="block text-sm font-medium text-gray-600">Tỉnh :</label>
                    <input type="text" id="province" class="mt-1 p-2 w-full border rounded-md">
                </div>

                <div class="mb-4">
                    <label for="district" class="block text-sm font-medium text-gray-600">Huyện :</label>
                    <input type="text" id="district" class="mt-1 p-2 w-full border rounded-md">
                </div>

                <div class="mb-4">
                    <label for="ward" class="block text-sm font-medium text-gray-600">Xã :</label>
                    <input type="text" id="ward" class="mt-1 p-2 w-full border rounded-md">
                </div>

                <div class="mb-4 col-span-2">
                    <label for="address" class="block text-sm font-medium text-gray-600">Địa chỉ :</label>
                    <input type="text" id="address" class="mt-1 p-2 w-full border rounded-md">
                </div>
            </div>

            <button class="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-slate-950 mx-auto duration-500 block">Cập nhật</button>

        </div>

    </section>

</body>

</html>
