function makeTimer() {
	//var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
	var endTime = new Date("29 April 2025");			
	endTime = (Date.parse(endTime) / 1000);

	var now = new Date();
	now = (Date.parse(now) / 1000);

	var timeLeft = endTime - now;

	var days = Math.floor(timeLeft / 86400); 
	var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
	var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
	var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

	if (hours < "10") { hours = "0" + hours; }
	if (minutes < "10") { minutes = "0" + minutes; }
	if (seconds < "10") { seconds = "0" + seconds; }

	$("#days").html("<b>" + days +"</b>" + "<span>Days</span>");
	$("#hours").html("<b>" + hours +"</b>" + "<span>Hours</span>");
	$("#minutes").html("<b>" + minutes +"</b>" + "<span>Minutes</span>");
	$("#seconds").html("<b>" + seconds +"</b>" + "<span>Seconds</span>");		

}
setInterval(function() { makeTimer(); }, 1000);


/* header mrnu */
const menu = document.querySelector(".menu");
 const menuMain = menu.querySelector(".menu-main");
 const goBack = menu.querySelector(".go-back");
 const menuTrigger = document.querySelector(".mobile-menu-trigger");
 const closeMenu = menu.querySelector(".mobile-menu-close");
 let subMenu;
 menuMain.addEventListener("click", (e) =>{
 	if(!menu.classList.contains("active")){
 		return;
 	}
   if(e.target.closest(".menu-item-has-children")){
   	 const hasChildren = e.target.closest(".menu-item-has-children");
      showSubMenu(hasChildren);
   }
 });
 goBack.addEventListener("click",() =>{
 	 hideSubMenu();
 })
 menuTrigger.addEventListener("click",() =>{
 	 toggleMenu();
 })
 closeMenu.addEventListener("click",() =>{
 	 toggleMenu();
 })
 document.querySelector(".menu-overlay").addEventListener("click",() =>{
 	toggleMenu();
 })
 function toggleMenu(){
 	menu.classList.toggle("active");
 	document.querySelector(".menu-overlay").classList.toggle("active");
 }
 function showSubMenu(hasChildren){
    subMenu = hasChildren.querySelector(".sub-menu");
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    menu.querySelector(".current-menu-title").innerHTML=menuTitle;
    menu.querySelector(".mobile-menu-head").classList.add("active");
 }

 function  hideSubMenu(){  
    subMenu.style.animation = "slideRight 0.5s ease forwards";
    setTimeout(() =>{
       subMenu.classList.remove("active");	
    },300); 
    menu.querySelector(".current-menu-title").innerHTML="";
    menu.querySelector(".mobile-menu-head").classList.remove("active");
 }
 
 window.onresize = function(){
 	if(this.innerWidth >991){
 		if(menu.classList.contains("active")){
 			toggleMenu();
 		}

 	}
 }



$(document).ready(function(){
	// teatimonial-slider
	if ($('.banner-slider').length > 0) {		
		$('.banner-slider').slick({
			// autoplay: true,
  			// autoplaySpeed: 2000,
			dots: false,
			infinite: true,
			arrows:false,
			speed: 700,
			slidesToShow: 1,
			slidesToScroll: 1			
		});	  
	}
	// review-slider
	if ($('.category-slier').length > 0) {		
		$('.category-slier').slick({
			dots: false,
			infinite: false,
			arrows:true,
			speed: 300,
			slidesToShow: 6,
			slidesToScroll: 1,
			prevArrow:"<div class='slick-prev'><span class='icon-left-open-big'></span></div>",
			nextArrow:"<div class='slick-next'><span class='icon-right-open-big'></span></div>",
			responsive: [
				{
					breakpoint: 1100,
					settings: {
						slidesToShow: 5,
					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 767,
					settings: {
						rows: 3,
						slidesToShow: 2,
					}
				}
			]
			});	  
	}
	if ($('.product-slider-full').length > 0) {		
		$('.product-slider-full').slick({
			dots: false,
			infinite: false,
			arrows:false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 1,			
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 3,
						dots: true
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						dots: true
					}
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 1,
						dots: true
					}
				}
			]
			});	  
	}
	
	if ($('.product-tabing').length > 0) {		
		$('.tab-menu li a').on('click', function(){
			var target = $(this).attr('data-rel');
			$('.tab-menu li a').removeClass('active');
			$(this).addClass('active');
			$("#"+target).fadeIn('slow').siblings(".tab-box").hide();
			return false;
		});
	}

	// address-slider
	if ($('.address-slider').length > 0) {		
		$('.address-slider').slick({
			dots: false,
			infinite: true,
			arrows:false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 400,
					settings: {
						slidesToShow: 1,
					}
				}
			]
			});	  
	}
	if($('.additional-list').length > 0){
		$('.additional-list li a').click(function() {
			$('.additional-list li').removeClass('active');
			$(this).parent().addClass('active');
			let currentTab = $(this).attr('href');
			$('.tabs-content div').hide();
			$(currentTab).show();		
			return false;
		});
	}
	if($('.slider-for').length > 0){
		$('.slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,			
			focusOnSelect: true,
			asNavFor: '.slider-nav'
	  });
	}
	if($('.slider-nav').length > 0){
		$('.slider-nav').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			arrows: false,
			dots: false,		
			focusOnSelect: true
		});
	}
	if ($('.gallery-image-list').length > 0) {	
		var $grid = $('.grid-wrapper').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			//layoutMode: 'masonry',
			//columnWidth: 300,
			masonry: {
				columnWidth: '.grid-sizer'
			}
		});
		// filter functions
		var filterFns = {
			// show if number is greater than 50
			numberGreaterThan50: function() {
				var number = $(this).find('.number').text();
				return parseInt( number, 10 ) > 50;
			},
			// show if name ends with -ium
			ium: function() {
				var name = $(this).find('.name').text();
				return name.match( /ium$/ );
			}
		};
		// bind filter button click
		$('.project_filters').on( 'click', 'a', function() {
			var filterValue = $( this ).attr('data-filter');
			// use filterFn if matches value
			filterValue = filterFns[ filterValue ] || filterValue;
			$grid.isotope({ filter: filterValue });
		});
		// change is-checked class on buttons
		$('.project_filters').each( function( i, buttonGroup ) {
			var $buttonGroup = $( buttonGroup );
			$buttonGroup.on( 'click', 'a', function() {
				$buttonGroup.find('.selected').removeClass('selected');
				$( this ).addClass('selected');
			});
		});
	}

	if ($('.latest-event-slider').length > 0) {		
		$('.latest-event-slider').slick({
			dots: true,
			arrows:false,
			infinite:false,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});	  
	}

	if ($('.our-achievements-slider').length > 0) {		
		$('.our-achievements-slider').slick({
			dots: true,
			arrows:false,
			infinite:false,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});	  
	}
	
	if($('.select-program').length > 0){
		$('.select-program select').change(function(){
			var text = $(this).find('option:selected').text()
			var $aux = $('<select/>').append($('<option/>').text(text))
			$(this).after($aux)
			$(this).width($aux.width())
			$aux.remove();
		}).change()
	}

	if ($('.latest-update').length > 0) {	
		var $grid = $('.latest-update-list').isotope({
			itemSelector: '.latest-update-item',
			percentPosition: true,
			//layoutMode: 'masonry',
			//columnWidth: 300,
			masonry: {
				columnWidth: '.latest-update-sizer'
			}
		});
		// filter functions
		var filterFns = {
			// show if number is greater than 50
			numberGreaterThan50: function() {
				var number = $(this).find('.number').text();
				return parseInt( number, 10 ) > 50;
			},
			// show if name ends with -ium
			ium: function() {
				var name = $(this).find('.name').text();
				return name.match( /ium$/ );
			}
		};
		// bind filter button click
		$('.update_filters').on( 'click', 'a', function() {
			var filterValue = $( this ).attr('data-filter');
			// use filterFn if matches value
			filterValue = filterFns[ filterValue ] || filterValue;
			$grid.isotope({ filter: filterValue });
		});
		// change is-checked class on buttons
		$('.update_filters').each( function( i, buttonGroup ) {
			var $buttonGroup = $( buttonGroup );
			$buttonGroup.on( 'click', 'a', function() {
				$buttonGroup.find('.selected').removeClass('selected');
				$( this ).addClass('selected');
			});
		});
	}


});
$(window).on("load resize", function (e) {	
	if($('.review-box .desc').length > 0 ){
		$('.review-box .desc').matchHeight({
			byRow: true,
		});
	}
});