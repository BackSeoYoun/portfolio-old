
$(document).ready(function(){  
		var swiper = new Swiper('#header .swiper-container', {
		  navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		  },
          pagination: {
            el: '.swiper-pagination',
		 },
		});
		var swiper = new Swiper('#content .middle-container', {
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
		  });
		  var swiper = new Swiper('.post_slider .swiper-container', {
			slidesPerView: 3,
			spaceBetween: 30,
			pagination: {
			  el: '.swiper-pagination',
			  clickable: true,
			},
		  });
});

