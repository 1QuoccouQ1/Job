<?php
include "./config/connect.php";

?>

<?php include './layouts/header.php' ?>

<?php
    
    switch ($_GET["action"]) {
        case 'home':
            include './pages/home.php';
            break;
        case 'customer':
            include './pages/customer.php';
            break;
        case 'product':
            include './pages/product.php';
            break;
        case 'about':
            include './pages/about.php';
            break;
        case 'cart':
            include './pages/cart.php';
            break;
        case 'chinhsachbaohanh':
            include './pages/csbh.php';
            break;
        case 'chinhsachgiaohang':
            include './pages/csgh.php';
            break;
        case 'chinhsachdoitra':
            include './pages/csdt.php';
            break;
        case 'huongdanthanhtoan':
            include './pages/hdsd.php';
            break;
        case 'chinhsachbaomat':
            include './pages/csbm.php';
            break;
        case 'trungtambaohanh':
            include './pages/ttbh.php';
            break;
        case 'hethongphanphoi':
            include './pages/htpp.php';
            break;
        case 'tintuc':
            include './pages/news.php';
            break;
        case 'infoProduct':
            include './pages/infoProduct.php';
            break;
        case 'infomation':
            include './pages/infomation.php';
            break;
        case 'donhang':
            include './pages/donhang.php';
            break;
        case 'orderDetail':
            include './pages/orderDetail.php';
            break;
        default:
            include './pages/home.php';
            break;
    }
?>


<?php include './layouts/footer.php' ?>