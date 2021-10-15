// Javascript for navigation bar effect on scroll	

window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle('sticky',window.scrollY > 0);

	var socialMedia =  document.getElementById('social-media');
	socialMedia.setAttribute('style', 'margin-left: 0px;transition:2s;');
	clearTimeout(hideSocialMedia);
	hideSocialMedia();

	function hideSocialMedia() {
		setTimeout(function(){ 
			socialMedia.setAttribute('style', 'margin-left: -80px;transition:2s;');
		}, 8000);
	  }


});

window.addEventListener("scroll",reveal);

function reveal(){
	var reveals = document.querySelectorAll(".reveal"); 
	
	for (var i = 0; i < reveals.length; i++){
		var windowHeight = window.innerHeight;
		var revealTop = reveals[i].getBoundingClientRect().top;
		var revealPoint = 50;
		
		if(revealTop < windowHeight - revealPoint){
			reveals[i].classList.add("active");
		}		
	};

/*-----------*/

	var reveals = document.querySelectorAll(".reveal-left"); 
	
	for (var i = 0; i < reveals.length; i++){
		var windowHeight = window.innerHeight;
		var revealTop = reveals[i].getBoundingClientRect().top;
		var revealPoint = 150;
		
		if(revealTop < windowHeight - revealPoint){
			reveals[i].classList.add("active");
		}		
	};

	var reveals = document.querySelectorAll(".reveal-right"); 
	
	for (var i = 0; i < reveals.length; i++){
		var windowHeight = window.innerHeight;
		var revealTop = reveals[i].getBoundingClientRect().top;
		var revealPoint = 150;
		
		if(revealTop < windowHeight - revealPoint){
			reveals[i].classList.add("active");
		}		
	};

	var reveals = document.querySelectorAll(".reveal-up"); 
	
	for (var i = 0; i < reveals.length; i++){
		var windowHeight = window.innerHeight;
		var revealTop = reveals[i].getBoundingClientRect().top;
		var revealPoint = 150;
		
		if(revealTop < windowHeight - revealPoint){
			reveals[i].classList.add("active");
		}		
	};

	var reveals = document.querySelectorAll(".reveal-down"); 
	
	for (var i = 0; i < reveals.length; i++){
		var windowHeight = window.innerHeight;
		var revealTop = reveals[i].getBoundingClientRect().top;
		var revealPoint = 150;
		
		if(revealTop < windowHeight - revealPoint){
			reveals[i].classList.add("active");
		}		
	};


};


var today = new Date();
var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = 'Date :  '+ date+'. Time - '+time;
document.getElementById("date-time").innerHTML = dateTime;

// 3 dot menu btn active inactive
function dotMenu(){
if(document.getElementById('dot-menu-btn').checked)
	{
	//var menuList = document.getElementById('p-item');
	//menuList.setAttribute('style', 'display: none');
	var divInfo = document.querySelector(".nav-bar .ul-main-content")	;	
	divInfo.setAttribute('style', 'margin-left: 0; transition:all 1.5s;');
	
	var menuIcon = document.querySelector(".menu-icon .ul-1")	;	
	menuIcon.setAttribute('style', 'display: none');
}  	
	else{
		var divInfo = document.querySelector(".nav-bar .ul-main-content")	;
		divInfo.setAttribute('style', 'margin-left: -300px;');
	
		var menuIcon = document.querySelector(".menu-icon .ul-1")	;	
		menuIcon.setAttribute('style', 'display: block');
	}
}

function test(){	
	var checkbox = document.getElementById("dot-menu-btn");
	checkbox.click();

}
window.onresize = function(){
	
	console.log(window.innerWidth);
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/*
window.onscroll = function() {myFunction()};

function myFunction() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("fa-icon").className = "fa-icon2";
	console.log(document.body.scrollTop+' - ' +document.documentElement.scrollTop);

	var nav_main =  document.getElementById('nav-main');
	nav_main.setAttribute('style', 'height: 80px');

	var logo =  document.getElementById('logo');
	logo.setAttribute('style', 'width: 35%');
	
	var nav_banner_main =  document.getElementById('nav-banner-main');
	nav_banner_main.setAttribute('style', 'width: 65%');

	var banner_en_ar =  document.getElementById('banner-en-ar');
	banner_en_ar.setAttribute('style', 'display: none');

	var banner_bn =  document.getElementById('banner-bn');
	banner_bn.setAttribute('style', 'height: 100%; top: 0;');

	var nav_menu_main =  document.getElementById('nav-menu-main');
	nav_menu_main.setAttribute('style', 'height: 50%');
  } 
  else {	
	  
    document.getElementById("fa-icon").className = "fa-icon";
	console.log(document.body.scrollTop+' - ' +document.documentElement.scrollTop);
	
	var nav_main =  document.getElementById('nav-main');
	nav_main.setAttribute('style', 'height: 160px');

	var logo =  document.getElementById('logo');
	logo.setAttribute('style', 'width: 70%');

	var nav_banner_main =  document.getElementById('nav-banner-main');
	nav_banner_main.setAttribute('style', 'width: 80%');

	var banner_en_ar =  document.getElementById('banner-en-ar');
	banner_en_ar.setAttribute('style', 'display: block');

	var banner_bn =  document.getElementById('banner-bn');
	banner_bn.setAttribute('style', 'height: 50%; top: 50%;');

	var nav_menu_main =  document.getElementById('nav-menu-main');
	nav_menu_main.setAttribute('style', 'height: 25%');
  };
};
*/
