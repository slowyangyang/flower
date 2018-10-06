window.onload = function(){
	//banner
	let btns = document.querySelectorAll('.banner-bottom');
	let imgs = document.querySelectorAll('.banner>ul>li>a>img');
	let banner = document.querySelector('.banner');
	let lbtn = document.querySelector('.banner-left');
	let rbtn = document.querySelector('.banner-right');
	banner_oi(btns,imgs,banner,lbtn,rbtn,null,1000);
	
	//素馨花艺小轮播
//	let leftbtn = document.querySelector('.sxhy-b-left');
//	let rightbtn = document.querySelector('.sxhy-b-right');
//	let list = document.querySelector('.tt');
//	let late = parseInt(getComputedStyle(list,null).width)/5;
//	let num= 0;
//	leftbtn.onclick = function(){
//		num--;
//		if(num==-1){
//			num=0
//		}
//		list.style.transform = 'translateX('+(-late*num)+'px)';
//	}
//	rightbtn.onclick = function(){
//		num++;
//		if(num==3){
//			num=2
//		}
//		list.style.transform = 'translateX('+(-late*num)+'px)';
//	}
		var mySwiper = new Swiper ('.swiper-container', {
  		 	slidesPerView : 3,//每屏幕能显示的banner数
  			grabCursor : true,//接触时变为手掌
   			 direction: 'horizontal',//轮播方向
// 			 loop: true,//是否循环
//     		 autoplay: true,//可选选项，自动滑动
   		 	// 如果需要分页器
    			pagination: {
    				el: '.swiper-pagination',
   		 		},
    
   				 // 如果需要前进后退按钮
   				 navigation: {
    	 			 nextEl: '.swiper-button-next',
     	 			prevEl: '.swiper-button-prev',
   		 		},
    
    		// 如果需要滚动条
   			 scrollbar: {
    			  el: '.swiper-scrollbar',
   			 },
 		}) 


}
