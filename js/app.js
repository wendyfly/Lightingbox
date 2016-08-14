//problem: user when clicking on image goes to a dead end
//Solution : Create a overlay with the large image - Lightbox

//1. Capture the click event on a link to an image

	//1.1 Show the overlay
	//1.2 Update the overlay with image linked in the link
	//1.3 Get child's alt attribute and set caption 
var $overlay = $("<div id='overlay'></div>"); 
var $image = $("<img>");
var $caption = $("<p></p>");
$("body").append($overlay);
$overlay.append($image);
$overlay.append($caption);
$("#imageGallery a").click(function(event){ // use # because it's a id ; use . if it's a class
	event.preventDefault();
	var href = $(this).attr('href')	

	$image.attr("src", href);
	var $captionText = $(this).children().attr("alt")
	console.log($captionText);
	$overlay.show();
	$caption.text($captionText);
});

//2. Add overlay
   	//2.1 An image 
   	//2.2 A caption

//3. When overlay is clicked
	// 3.1 Hide the overlay

$overlay.click(function() {
	$overlay.hide();
})





