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

function preparePlaceholder(){
	var placeholder = document.createElement('img');
	placeholder.setAttribute('id','placeholder');
	placeholder.setAttribute('src','images0920/camry.jpg');
	placeholder.setAttribute('alt','my image gallery');
	var description = document.createElement('p');
	description.setAttribute("id","description");
	var destxt = document.createTextNode("Choose an image");
	description.appendChild(destxt);
	var gallery = document.getElementById("imagegallery");
	gallery.parentNode.insertBefore(placeholder,gallery);
	console.log(destxt);
	placeholder.parentNode.insertBefore(description,placeholder);
}

function addLoadEvent(func){
	var oldOnload = window.onload;
	if (typeof window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldOnload();
			func();
		}
	}
}


addLoadEvent (prepareGallery);
addLoadEvent(preparePlaceholder);