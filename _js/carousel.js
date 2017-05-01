import Flickity from "flickity";

$(document).ready(function() {
	var el = document.querySelector(".carousel");
	var flick = new Flickity(el, {
		contain: true,
		imagesLoaded: true
	});
});
