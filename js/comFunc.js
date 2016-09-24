function getPageSizeInf(){
	var scrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop,
		 viewHeight =Math.min(document.documentElement.scrollHeight,document.documentElement.clientHeight),
		 docHeight=Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight),
		 scrollBottom=docHeight-viewHeight-scrollTop;
	return {
		scrollTop:scrollTop,
		viewHeight:viewHeight,
		docHeight:docHeight,
		scrollBottom:scrollBottom
	};
}
function addEvent(Obj,e,func) {
	if(window.addEventListener){
		Obj.addEventListener(e,func);
	}
	else{
		Obj.attachEvent('on'+e,func);
	}//添加事件处理程序
}