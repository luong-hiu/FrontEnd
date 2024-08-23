$(document).ready(function () {
    $('<name element contain slide>').slick({
      dots: true, // Hiển thị các dấu chấm chỉ mục
      infinite: true, // Vòng lặp vô hạn
      speed: 300, // Tốc độ chuyển slide (ms)
      slidesToShow: 3, // Số lượng slide hiển thị cùng lúc
      adaptiveHeight: true, // Điều chỉnh chiều cao của slider theo nội dung
    });
  });
console.log()