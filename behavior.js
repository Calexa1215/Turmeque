document.addEventListener("DOMContentLoaded", function(event) {
	var thumbnailElement = document.getElementById ("smart_thumbnail");
	thumbnailElement.className;
	
	thumbnailElement.addEventListener("click", function () {
		 if (thumbnailElement.className === "small centrarimg"){
			thumbnailElement.className = "big";
		 }else{
			thumbnailElement.className = "small centrarimg";
		 }
	});
});



