$( document ).ready(function() {
    $('.slider').owlCarousel({
	    nav:true,
	    loop:true,
	    autoplay:true,
	    autoplaySpeed:800,
	    autoplayTimeout:5000,
	    autoplayHoverPause:true,
	    navText: ["<img src='images/prev.svg'>","<img src='images/next.svg'>"],
	    items:1,
	    margin:0,
	    dots:true,
	});


	$('.left-menu>ul>li').on('click', function() {
		$(this).siblings().removeClass('active');
		$(this).siblings().find('ul').removeClass('opened');
		$(this).addClass('active');
		$(this).find('ul').toggleClass('opened');
		$('.left-menu ul li ul li').removeClass('inactive');
	});

	$('.left-menu>ul>li>ul>li').on('click', function() {
		$(this).siblings().removeClass('inactive');
		$(this).addClass('inactive');
		$('.left-menu>ul>li').has('ul').addClass('opened');
		$('.left-menu ul li').addClass('active');
	});

	$('.menu li').on('click', function() {
		$(this).siblings().removeClass('activate');
		$(this).addClass('activate');
	});

	$('.menu-list li').on('click', function(){
		$(this).addClass('ft-active');
		$(this).siblings().removeClass('ft-active');
	});

	/*$('[data-remodal-id=modal]').remodal();*/

	$('.burger').on('click', function() {
		$('.menu-inner').toggleClass('opened');
		$('.menu-inner').find('ul').addClass('menu');
		$('.bg').toggleClass('show');
		$('body').toggleClass('menu-opened');
		$('.close').css("display","block")
		$('.menu li').removeClass('activate');
	});
	
	$('.close').on('click', function() {
		$('.menu-inner').removeClass('opened');
		$('.bg').removeClass('show');
		$('body').removeClass('menu-opened');
		$(this).css("display","none");
	});
	
	$('.menu-inner .menu li').on('click', function(){
		$('.menu').siblings().find('li').removeClass('activate');
		
	});

	$('.slider .owl-nav button.owl-prev').hover(function() {
		$('slider').owlCarousel({
			 navText: ["<img src='images/prev-white.svg'>","<img src='images/next.svg'>"],
		});
	});

	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".menu-inner, .burger"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.removeClass('opened'); // скрываем его
		$('.bg').removeClass('show');
		$('.close').css("display","none");
		$('body').removeClass('menu-opened');
		}
	});
var mql = window.matchMedia('all and (max-width: 1023px)');
	if(mql.matches){		
        $('.left-menu ul').appendTo($('.menu-inner'));
    }

	var mqs = window.matchMedia('all and (min-width: 1024px)');
	var i = 0;
	//while (i<=1) {
	//if(mqs.matches){
		
			//location.reload();
			//i++;
		//}
        
    //}
});
