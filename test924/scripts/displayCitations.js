function displayCitations(){
	if (!document.getElementsByTagName || !document.getElementById
	 || !document.createElement || !document.createTextNode) return false;
	//取得所有引用
var quotes = document.getElementsByTagName("blockquote");
//遍历引用
for (var i=0; i<quotes.length; i++){
	//如果没有cite属性，继续循环
	if (!quotes[i].getAttribute('cite')) {continue};
	//保存cite属性
	var url = quotes[i].getAttribute('cite');
	//取得引用中所有元素节点
	var quotesChildren = quotes[i].getElementsByTagName('*');
	//如果没有元素节点，继续循环
	if (quotesChildren.length < 1)continue;
	//取得引用中的最后一个元素节点
	var elem = quotesChildren[quotesChildren.length - 1];
	//创建标记
	var links = document.createElement("a");
	var links_text = document.createTextNode("source");
	links.appendChild(links_text);
	links.setAttribute("href",url);
	var superscript = document.createElement("sup");
	superscript.appendChild(links);
	//把标记添加到引用的最后一个元素节点
	elem.appendChild(superscript);

}
}
addLoadEvent(displayCitations);