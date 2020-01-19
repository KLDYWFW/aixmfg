function remStyle(){
	//获取页面的宽度  375 414  768
    var w = document.documentElement.clientWidth || document.body.clientWidth
   	//console.log(w);
   	//设置根元素的大小
    document.documentElement.style.fontSize = w/640*100+"px";
    //console.log(document.documentElement.style.fontSize);
}
remStyle();
//窗口改变大小
window.onresize = remStyle;