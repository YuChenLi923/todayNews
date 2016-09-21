newsBox(7);
createSlideButton(
	{
		id:'warp_top',//回到顶部按钮的ID
		speed:10,//回到顶部的速度
		showPos:400,//按钮出现的位置，这个是下部分遮盖区的高度
		topPos:0,//返回顶部的位置，这个是上部分遮盖区的高度
	}
);
function newsBox(num){
	for(var i=0;i<num;i++){
		// var news=getAjaxInf();
		createNewBox({
			id:'warp',//新闻栏的ID,有后台则把改成news.id
			src:'#',//新闻标题的图片地址，有后台则把改成news.src
			href:'#',//新闻正文页面地址，有后台则把改成news.href
			title:'新闻标题',//news.title
			time:'新闻发布的时间',//news.title
			type:'新闻类别'//news.title
		});
	}
	window.addEventListener('scroll',scrollAdd);
	function scrollAdd(e){
		var scrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop,
		 	viewHeight =Math.min(document.documentElement.scrollHeight,document.documentElement.clientHeight),
		 	docHeight=Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight),
		 	scrollBottom=scrollTop-docHeight+viewHeight;
			if(scrollBottom>=-100){
				// var news=getAjaxInf();
				createNewBox({
					id:'warp',//新闻栏的ID,有后台则把改成news.id
					src:'#',//新闻标题的图片地址，有后台则把改成news.src
					href:'#',//新闻正文页面地址，有后台则把改成news.href
					title:'新闻标题',//news.title
					time:'新闻发布的时间',//news.title
					type:'新闻类别'//news.title
				});
			 }
	}
	function createNewBox(news) {
		var warp=document.getElementById(news.id),
			newBox=document.createElement('div'),
			picContainer=document.createElement('div')
			img=document.createElement('img'),
			titContainer=document.createElement('div'),
			body=document.createElement('div'),
			title=document.createElement('a'),
			froms=document.createElement('div'),
			time=document.createElement('span'),
			type=document.createElement('type');
		newBox.className='news';
		picContainer.className='pic-container';
		titContainer.className='title-container';
		body.className='title-body';
		froms.className='from';
		time.className='time';
		type.className='type';
		img.src=news.src;
		title.href=news.href;
		title.innerHTML=news.title;
		time.innerHTML=news.time;
		type.innerHTML=news.type;
		picContainer.appendChild(img);
		titContainer.appendChild(body);
		body.appendChild(title);
		body.appendChild(froms);
		froms.appendChild(time);
		froms.appendChild(type);
		newBox.appendChild(picContainer);
		newBox.appendChild(titContainer);
		warp.appendChild(newBox);
	}
	function getAjaxInf(URL){
		if(URL){
			var xhr=creatXHR(),
				inf;
			xhr.onreadystatechange=function(){
			if (xhr.readyState==4){
					if ((xhr.status>=200&&xhr.status<300)||xhr.status==304) {
					}
					else{
						alert('新闻数据获取失败');
					}
				}
			}
			xhr.open("post",URL,false);
			xhr.send(null);
			inf=JSON.parse(xhr.responseText);
			return inf;
		}
	}
};
function createSlideButton(button){
	var top=document.getElementById(button.id),
		speed=button.speed,
		showPos=button.showPos,
		docHeight=Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight),
		topPos=button.topPos,
		speed=docHeight/(2000/speed);
	window.addEventListener('scroll',function(e){
		var scrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop,
		 	viewHeight =Math.min(document.documentElement.scrollHeight,document.documentElement.clientHeight),
		 	scrollBottom=scrollTop-docHeight+viewHeight;
		 if(scrollBottom>=-showPos&&top.style.cssText!=='display:block'&&scrollTop>viewHeight+showPos){
		 	top.style.cssText='display:block';
		 }
		 else{
		 	if(scrollTop<=topPos&&top.style.cssText!=='display:none'){
		 		top.style.cssText='display:none';
		 	}
		 }		
	});
	top.addEventListener('click',slideAnimation);
	function slideAnimation(){

		var scrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop,
		docHeight=Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight);
		if(scrollTop>topPos){
			scrollTop=scrollTop-speed;
			scrollTo(0,scrollTop); 
			setTimeout(function(){
				slideAnimation();
			},1);
		}
		
	}
}
function creatXHR(){
	if(typeof XMLHttpRequest == 'undefined')
		XMLHttpRequest=function(){
			try{return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
			catch(e){}
			try{return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
			catch(e){}
			try{return new ActiveXObject("Msxml2.XMLHTTP");}
			catch(e){}
			return false;
		}
		return new XMLHttpRequest();
}
