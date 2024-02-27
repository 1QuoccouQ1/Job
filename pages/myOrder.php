<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
        font-family: Arial, sans-serif;
        }

        .order-container {
        width: 100%;
        margin: 0 auto;
        padding: 20px 20px;
        }

        .order-info, .order-details {
        margin: 40px 0;
        }

        .order-details table {
        width: 100%;
        border-collapse: collapse;
        }

        .order-details th, .order-details td {
        border: 1px solid #000;
        padding: 8px;
        text-align: left;
        }

        h1 {
        text-align: center;
        }
        
    </style>
</head>
<body>
  
<div class="order-container">
  <h1 class="text-4xl font-medium ">Thông tin đơn hàng của bạn</h1>
  <div class="order-info">
    <p class="mb-3">Cảm ơn bạn đã mua hàng tại Beebee</p>
    <p><strong class="text-yellow-400 mr-5">Mã Đơn Hàng:</strong> 81427</p>
    <p><strong class="text-yellow-400 mr-5">Ngày Mua Hàng:</strong> 26/02/2024</p>
    <p><strong class="text-yellow-400 mr-5">Tổng Tiền Đơn Hàng:</strong> 1.990.000 đ</p>
    <p><strong class="text-yellow-400 mr-5">Phương Thức Thanh Toán:</strong> Trả tiền mặt khi nhận hàng</p>
  </div>
  
  <div class="order-details">
    <h2 class="text-3xl  mb-12">Chi tiết đơn hàng</h2>
    <table >
      <thead>
        <tr>
          <th>Sản phẩm</th>
          <th>Tổng</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Máy Chiếu Mini - Beebee X1 Gen 2 x 1</td>
          <td>1.990.000 đ</td>
        </tr>
        <tr>
          <td><strong>Giao nhận hàng:</strong></td>
          <td>Giao hàng miễn phí</td>
        </tr>
        <tr>
          <td><strong>Phương thức thanh toán:</strong></td>
          <td>Trả tiền mặt khi nhận hàng</td>
        </tr>
        
        <tr>
          <td><strong>Địa chỉ:</strong></td>
          <td>xa xuan thanh huyen nghi xuan</td>
        </tr>
        <tr>
          <td><strong>Tổng tiền đơn hàng:</strong></td>
          <td>1.990.000 đ</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

</body>
</html>