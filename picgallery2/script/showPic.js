function prepareGallery(){
	var gallery = document.getElementById('imagegallery');
	var links = gallery.getElementsByTagName('a');
	for (var i=0; i<links.length; i++){
		console.log(links.length)
		links[i].onclick = function(){
			return showPic(this) ? false : true;
		}
	}
}

function showPic(whichpic){
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	var text = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
	return true;
}

function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof oldonload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}
addLoadEvent(prepareGallery);