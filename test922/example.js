function insertParagraph(text){
	var str = "<p>";
	str += text;
	str +="</p>";
	document.write(str);
}
/*window.onload = insertParagraph("this is" );*/
/*window.onload = function(){
	var testdiv = document.getElementById('testdiv');
	alert(testdiv.innerHTML)
}*/
/*window.onload = function(){
	var testdiv = document.getElementById("testdiv");
	testdiv.innerHTML = "<p>I inserted <em>this</em> content.</p>";
}*/
function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload !='function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

function createP(){
var para = document.createElement("p");
var info = "nodeName: ";
info += para.nodeName ;
info += " nodeType: ";
info += para.nodeType;
console.log(info);
alert(info);

}

function createPT(){
	var para = document.createElement("p");
	var testdiv = document.getElementById("testdiv");
	testdiv.appendChild(para);
	var txt = document.createTextNode("Hello world");
	para.appendChild(txt);
}
function createComplex(){
	var para = document.createElement("p");
	var txt1 = document.createTextNode("thi is ");
	var emphasis = document.createElement("em");
	var txt2 = document.createTextNode("my");
	var txt3 = document.createTextNode("content.");
	para.appendChild(txt1);
	emphasis.appendChild(txt2);
	para.appendChild(emphasis);
	para.appendChild(txt3);
	var testdiv = document.getElementById("testdiv");
	testdiv.appendChild(para);
}

addLoadEvent(createP);
addLoadEvent(createPT);
addLoadEvent(createComplex);

