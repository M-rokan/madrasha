// Javascript for navigation bar effect on scroll
window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle('sticky',window.scrollY > 0);
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
	}
};