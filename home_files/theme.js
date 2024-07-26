$(document).ready(function(){"use strict";const swiper=new Swiper('.swiper',{speed:400,spaceBetween:100,autoplay:{delay:5000,},parallax:true,pagination:{el:".swiper-pagination",clickable:true,},breakpoints:{320:{slidesPerView:2,spaceBetween:20},480:{slidesPerView:3,spaceBetween:30},640:{slidesPerView:4,spaceBetween:40},991:{slidesPerView:8,spaceBetween:40}}});var el=$('.odometer');el.each(function(){window.odometerOptions={auto:false,selector:'.odometer',format:'(,ddd).dd',duration:2000,animation:'count'};var countNumber=parseInt($(this).attr("data-count")).toFixed(2);var k=countNumber/1000;var lakh=k/100;var million=lakh/10;if(million>=1){var countPosition='M<font style="font-size:25px">+</font>';var number=million;}else if(lakh>=1){var countPosition='L<font style="font-size:25px">+</font>';var number=lakh;}else if(k>=1){var countPosition='K<font style="font-size:25px">+</font>';var number=k;}else{var countPosition='<font style="font-size:25px">+</font>';var number=countNumber;}
$(this).html(parseInt(number));$(this).closest('h2').find('.odometer-position').html(countPosition);});});