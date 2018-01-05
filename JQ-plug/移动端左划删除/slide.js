function slide() {
	var start, pre,abs, end,prent;
	$('li.item').on('touchstart',function(e){
		console.log(e)
		start = e.originalEvent.targetTouches[0].pageX
	})

	$('li.item').on('touchmove',function(e){
		abs = start-e.originalEvent.targetTouches[0].pageX
		pre = e.originalEvent.targetTouches[0].pageX - start //
		if (abs < 0) {
		 			return
		 		}
		 		if (start-e.originalEvent.targetTouches[0].pageX < 70 && start-e.originalEvent.targetTouches[0].pageX > 0) {
		 			$(this).css('transform' ,'translate3d('+pre+'px,0,0)')
		 		}else{
		 			$(this).css('transform' ,'translate3d(-70px,0,0)') // 滑动速度太快 判断
		 		}
	}) 		
	$('li.item').on('touchend',function(e){
		prent = abs / 70;
		 		console.log(abs)
		 		if(prent > 0.5) {
		 			$(this).css('transform' ,'translate3d(-70px,0,0)') 
		 		}else {
		 			$(this).css('transform' ,'translate3d(0,0,0)') 
		 		}
		 		
	})
	$('.delete').click(function(e){
		var target = e.target
		 		target.parentElement.remove()
	})	
}