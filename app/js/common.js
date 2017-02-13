// $(function() {

	//   	//Slideshow in block About us
  	var slideIndex = 1;
	showSlides(slideIndex);

	function plusSlides(n) {
		showSlides(slideIndex += n)
	};

	function currentSlide(n) {
		showSlides(slideIndex = n)
	};

	function showSlides(n) {
		var i;
		var slides = document.getElementsByClassName("about__slider-img");
		var dots = document.getElementsByClassName("about__slider-dot");
		if (n > slides.length) {slideIndex = 1} ;
		if (n < 1) {slideIndex = slides.length};
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none"; 
		};
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		};
		slides[slideIndex-1].style.display = "block"; 
		dots[slideIndex-1].className += " active";
	};




	//Open menu with click and close him with click anywhere
	window.onclick = function (event) {
		var x = $("#dropdown-menu");
		var y = $(".icon-menu");
		if ((x.attr('class') == "header__nav-list") && (event.target == y.get(0))){
			x.toggle(300);
		} else {
			x.hide(300)
		};
	};	

	//   	//Slideshow in block About us
  	var pictureIndex = 1;
	visiblePictures(pictureIndex);

	function nextPictures(n) {
		visiblePictures(pictureIndex += n)
	};

	function modePicture(n) {
		visiblePictures(pictureIndex = n)
	};

	function visiblePictures(n) {
		var k;
		var pictures = document.getElementsByClassName("says__slider-img", "says__biography-tooltip");
		var disk = document.getElementsByClassName("says__slider-dis");
		if (n > pictures.length) {pictureIndex = 1} ;
		if (n < 1) {pictureIndex = pictures.length};
		for (k = 0; k < pictures.length; k++) {
			pictures[k].style.display = "none"; 
		};
		for (k = 0; k < disk.length; k++) {
			disk[k].className = disk[k].className.replace(" active", "");
		};
		pictures[pictureIndex-1].style.display = "block"; 
		disk[pictureIndex-1].className += " active";

	};



		  	
  	


// });
