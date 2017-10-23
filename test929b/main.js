function createVideoControls(){
	var vids = document.getElementsByTagName('video');
	for(var i=0; i<vids.length; i++){
		addControls(vids[i]);

	}
}

function addControls(vid){
	vid.removeAttribute('controls');
	/*vid.width = vid.videoWidth;
	vid.height = vid.videoHeight;
	vid.parentNode.style.width = vid.videoWidth + 'px';
	vid.parentNode.style.height = vid.videoHeight + 'px';

	var controls = document.creatElement('div');
	controls.setAttribute('class','controls');

	var play = document.creatElement('button');
	play.setAttribute('title','play');
	play.innerHTML = '&#x25BA;';
	controls.appendChild(play);
	vid.parentNode.insertBefore(controls,vid);

	play.onclick = function(){
		if(vid.ended){
			vid.currentTime = 0;
		}
		if(vid.paused){
			vid.play();
		}else{
			vid.pause();
		}

		vid.addEventLisener('play',function(){
			play.innerHTML = '&#x2590;&#x2590;';
			play.setAttribute('paused',true);
			
		},false);

		vid.addEventLisener('pause',function(){
			play.removeAttribute('paused');
			play.innerHTML ='&#x25BA;';
		},false);


		vid.addEventLisener('ended',function(){
			vid.pause();
		},false);
	}*/
}

window.onload = function(){
	createVideoControls;	
}