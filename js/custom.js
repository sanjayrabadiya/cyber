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
	if ($('.banner-slider').length > 0) {		
		$('.banner-slider').slick({
			autoplay: true,
  			autoplaySpeed: 2000,
			dots: false,
			infinite: true,
			arrows:false,
			speed: 700,
			slidesToShow: 1,
			slidesToScroll: 1			
		});	  
	}
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
});