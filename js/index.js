(function newBox(num){
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
	window.onscroll=function(e){
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
	};
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
})(7);

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
