function stripeTables(){
	if(!document.getElementsByTagName)return false;
	var tables = document.getElementsByTagName("table");
	var odd, rows;
	for (var i=0; i<tables.length;i++){
		odd = false;
		rows = document.getElementsByTagName("tr");
		for(var j=0;j<rows.length;j++){
			console.log(odd);
			if(odd == true){
				// rows[j].style.backgroundColor ="red";
				addClass(rows[j],'odd')
				odd = false;
			}else{
				odd = true;
			}
		}
	}
}

//addClass函数
function addClass(elem,value){
	if(!elem.className){
		elem.className = value;
	}else{
		var newClassName = elem.className;
		newClassName+='';
		newClassName+= value;
	}
}

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

function highlightRows(){
	if (!document.getElementsByTagName)return false;
	var rows = document.getElementsByTagName("td");
	for(var i=0; i<rows.length;i++){
		rows[i].onmouseover = function(){
			this.style.fontWeight = "bold";
		}
		rows[i].onmouseout = function(){
			this.style.fontWeight ="normal";
		}
	}
}

addLoadEvent(stripeTables);
addLoadEvent(highlightRows);