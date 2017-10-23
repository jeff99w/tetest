function addLoadEvent(func){
	var oldload = window.onload;
	if (typeof window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldload();
			func();
		}
	}
}

/*function styleHeaderSiblings(){
	if (!document.getElementsByTagName) return false;
	var headers = document.getElementsByTagName('h1');
	var elem;
	for(var i =0; i<headers.length; i++){
		elem = getNextElement(headers[i].nextSibling);
		elem.style.fontWeight = "bold";
		elem.style.fontSize = "1.2em";
		addClass(elem,'into');
	}
}*/

//抽象styleHeaderSiblings为一般的styleElementSiblings
function styleElementSiblings(tag,theClass){
	if(!document.getElementsByTagName)return false
	//基本不用探测了
    var elems = document.getElementsByTagName(tag);//变量不加引号？
    var elem;
    for(var i=0;i<elems.length;i++){
    	elem = getNextElement(elems[i].nextSibling);
    	
    	addClass(elem,theClass);
    }


}


function getNextElement(node){
	if(node.nodeType == 1){
		return node;
	}
	if (node.nextSibling){
		return getNextElement(node.nextSibling);
	}
	return null;
}

function addClass(elem,value){
	if(!elem.className){
		elem.className = value;
	}else{
		var newClassName = elem.className;
		newClassName+=" ";
		newClassName+= value;
		elem.className = newClassName;
	}
}

addLoadEvent(styleElementSiblings("h1","intro"));