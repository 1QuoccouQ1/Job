<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">

    <style>
   /* Reset CSS */
body, h1, h2, h3, p, ul, li {
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
}

/* Slider styles */
.slider-container {
    width: 100%;
    margin: 10px auto;
    overflow: hidden;
}

.slide {
  position: relative;
}

.slideshow-container {
  position: relative;
}

.mySlider img {
  width: 100%; /* Hình ảnh sẽ nằm trong container và giữ nguyên tỉ lệ khung hình */
  height: auto; /* Đảm bảo tỉ lệ khung hình được giữ nguyên */
}

.fader {
  display: none;
  animation: fade 1.5s ease-in-out infinite;
}

/* @keyframes fade {
  0%, 100% {
    opacity: 0.4;
  }
  20%, 80% {
    opacity: 1;
  }
} */

.slideshow-left {
  float: left;
  width: 100%;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  text-decoration: none;
    color: black;
}

.prev {
  left: 0;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover, .next:hover {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
}

.dotss {
  position: absolute;
    bottom: 11px;
    right: 48%;
}

.dot {
  height: 15px;
  width: 15px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  cursor: pointer;
}

.active, .dot:hover {
  background-color: #717171;
}
/*  */

.swiper-container {
      width: 100%;
      margin: 0 auto;
      overflow: hidden;
    }

    .swiper-slide img {
      width: 100%;
      height: auto;
      padding: 0 15px;
      margin-top: 70px;
    }
  </style>
</head>
<body>
<div class="slider-container" id="slider1">
    <div class="don">
      <div class="slide">
        <div class="slideshow">
          <div class="slideshow-left">
            <div class="slideshow-container">
              <div class="mySlider fader">
                <img src="./imgs/banner3.png" alt="" width="100%" height="100%">
              </div>
              <div class="mySlider fader">
                <img src="./imgs/banner2.jpg" alt="">
              </div>
              <div class="mySlider fader">
                <img src="./imgs/banner1.png" alt="">
              </div>
              <a class="prev" onclick="sliderManager('slider1', -1)">❮</a>
              <a class="next" onclick="sliderManager('slider1', 1)">❯</a>
              <div class="dotss" style="text-align: center">
                <span class="dot" onclick="currentSlider('slider1', 1)"></span>
                <span class="dot" onclick="currentSlider('slider1', 2)"></span>
                <span class="dot" onclick="currentSlider('slider1', 3)"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

<div class="section">
    <div class="section-panel"><h2>Ưu đãi nổi bật</h2></div>
    <div class="section-box">
        <div class="box-left">
            <a href="#">
                <img src="./imgs/index.webp" alt="">
            </a>
        </div>
        <div class="box-right">
            <div class="box-right-top">
                <div class="box-right-top-list">
                    <a href="#">
                        <img src="./imgs/anh1.jpg" alt="">
                    </a>
                </div>
                <div class="box-right-top-list">
                    <a href="#">
                        <img src="./imgs/anh2.png" alt="">
                    </a>
                </div>
            </div>
            <div class="box-right-bottom">
                  <div class="box-right-top-list">
                    <a href="#">
                        <img src="./imgs/anh3.png" alt="">
                    </a>
                </div>
                <div class="box-right-top-list">
                    <a href="#">
                        <img src="./imgs/anh4.jpg" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<section class="list-panel-sliders">
  <div class="list-panel-slider">
    <h2>Flagship</h2>
    <ul class="chosse-list" id="carousel-navigation">
      <li data-slide-index="0">X2 max Gen 4</li>
      <li data-slide-index="1">Harmony</li>
      <li data-slide-index="2">Xtreme II</li>
      <li data-slide-index="3"> X2 Max Gen 3</li>
    </ul>
  </div>
</section>

<!-- Swiper -->
<div class="swiper-container relative">
  <div class="swiper-wrapper">
    <div class="swiper-slide"><img src="./imgs/x2max.webp" alt=""></div>
    <div class="swiper-slide"><img src="./imgs/harmony.webp" alt=""></div>
    <div class="swiper-slide"><img src="./imgs/x1gen2.webp" alt=""></div>
    <div class="swiper-slide"><img src="./imgs/xtreme.webp" alt=""></div>
  </div>
  <!-- Add Pagination -->
  <!-- <div class="swiper-pagination"></div> -->
  <!-- Add Navigation -->
  <!-- <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div> -->
  <div class="buy">
    <p>MUA NGAY</p>
  </div>
</div>

<!-- Link to Swiper JS -->
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
    });

    // Add event listeners for carousel navigation
    var navigationItems = document.querySelectorAll('#carousel-navigation li');
    navigationItems.forEach(function(item) {
      item.addEventListener('click', function() {
        var slideIndex = this.getAttribute('data-slide-index');
        swiper.slideTo(slideIndex);
      });
    });
  });
</script>



  <script >

function sliderManager(sliderId, n) {
  clearTimeout(window[sliderId].timer);
  showSlider(sliderId, window[sliderId].slideIndex += n);
}

function currentSlider(sliderId, n) {
  clearTimeout(window[sliderId].timer);
  showSlider(sliderId, window[sliderId].slideIndex = n);
}

function showSlider(sliderId, n) {
  let i;
  let slider = document.getElementById(sliderId).getElementsByClassName("mySlider");
  let dots = document.getElementById(sliderId).getElementsByClassName("dot");
  if (n > slider.length) {window[sliderId].slideIndex = 1}
  if (n < 1) {window[sliderId].slideIndex = slider.length}
  for (i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slider[window[sliderId].slideIndex-1].style.display = "block";
  dots[window[sliderId].slideIndex-1].className += " active";

  window[sliderId].timer = setTimeout(function() {
    sliderManager(sliderId, 1);
  }, 10000);
}

// Slider 1
window.slider1 = {
  slideIndex: 1,
  timer: null
};
showSlider('slider1', 1);

  </script>


</body>
</html>