window.onload = function(){
	//容器对象
	var box = document.getElementById('container');

	//获得图片NodeList对象集合
	var imgs = box.getElementsByTagName('img');

	//单张图片宽度
	var imgWidth = imgs[0].offsetWidth;
	console.log(imgWidth);

	//设置掩藏门露出的宽度

	var exposeWidth = 160;

	//设置容器宽度  注意加px
	var boxWidth = imgWidth + (imgs.length - 1)*exposeWidth;
	function setImgPos(){
	box.style.width = boxWidth+"px";

	//设置每道门的初始位置  因为第一道门初始为0，所以i从1开始
	for(var i=1, len = imgs.length; i < len; i++){
		imgs[i].style.left = imgWidth + exposeWidth*(i-1) + 'px';
	}
}
    setImgPos();
	//计算每道门打开时应移动的距离
	var translate = imgWidth - exposeWidth;

	//为每道门绑定事件
	for(var i=0, len = imgs.length; i<len; i++){
		//使用立即调用的函数表达式，为了获得不同的i值
		//不使用立即执行函数的的话，i会循环完，再传入function
		(function(i){
			imgs[i].onmouseover = function(){
				//先将每道门复位
				setImgPos();
				//打开门
				for(var j=1; j<=i; j++){
					imgs[j].style.left = parseInt(imgs[j].style.left, 10) - translate + 'px';
				}
			}

		})(i);
	}


}

	