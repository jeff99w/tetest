function positionMessage(){
	var elem = document.getElementById('message');
	elem.style.position =  "absolute";
	elem.style.left = "50px";
	elem.style.top = "100px";
	//movement = setTimeout("moveMessage()",3000);
	//moveMessage();
	var elem2 = document.getElementById('message2');
	elem2.style.position = "absolute";
	elem2.style.left ="10px";
	elem2.style.top ="50px";
	moveElement('message',100,500,10);
    moveElement('message2',300,100,20);

}


/*function moveMessage(){
	var elem = document.getElementById('message');
	elem.style.left = "200px";
}*/
/*function moveMessage(){
    var elem = document.getElementById('message');

	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if(xpos == 200 && ypos == 200){
		return true;
	}
	if(xpos < 200){
        xpos++;
    }
    if(xpos > 200){
        xpos--;
    }

	
	if(ypos < 200){
        ypos++;
    }
    if(ypos > 200){
        ypos--;
    }


	console.log(ypos);
	elem.style.left = xpos + 'px';
	elem.style.top = ypos + 'px';
	movement = setTimeout('moveMessage()',10);
}
*/
//将moveMessage()抽象为一般的moveElement()
function moveElement(elementID,final_x,final_y,interval){
	if(!document.getElementById(elementID)) return false;
	var elem = document.getElementById(elementID);
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if (xpos == final_x && ypos == final_y){
		return true;}
	if (xpos < final_x){
		xpos ++;
	}
	if (xpos >final_x){ 
		xpos --;
    }

    if (ypos <final_y){
    	ypos ++;
    }
    if (ypos >final_y){
        ypos --;
    }
    
    elem.style.left = xpos +'px';
    elem.style.top = ypos + 'px';
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    movement = setTimeout(repeat,interval);
	}



function addLoadEvent(func){
	var oldload = window.onload;
	if(typeof window.onload !="function"){
		window.onload = func;

	}else{window.onload = function(){
		oldload();
		func();

	}
	}
}
function clearT(){
	clearTimeout(movement);
}
 addLoadEvent(positionMessage);

//addLoadEvent(clearT);
//addLoadEvent(moveMessage);