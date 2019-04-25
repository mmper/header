$(function () {
	//移动端展开nav
	$('.mobile .navToggle').on('click', function () {
		//展开nav
		if ($(".m_nav").is(":hidden")) {
			$('.m_nav').addClass('open');
			$('.mobile .header').addClass('open')
		} else {
			//关闭nav
			$('.m_nav').removeClass('open');
			$('.mobile .header').removeClass('open')
		}
	})

	/* 移动端切换语言lang */
	$('.mobile .lang').on('click', function (e) {
	 $('.lang__downlist').toggle()
	 $('.lang-close').toggle()
	 $('.line').toggle()
		if(e && e.stopPropagation) {
			e.stopPropagation()
		} else {
				window.event.cancelBubble = true
		}

		e.preventDefault()
	})

	$('.mobile .lang__downlist>.lang__downlist-item').on('click', function (e) {
		$(this).parent().parent().children(":first").children(":first")[0].innerText = $(this).children()[0].innerText
		if(e && e.stopPropagation) {
			e.stopPropagation()
		} else {
				window.event.cancelBubble = true
		}
		e.preventDefault()
	})
	/* 移动端切换语言 end */
	$(".mobile .menu > li > a").on('click', function () {
		$(this).addClass("current").parents().siblings().find("a").removeClass("current");
		$(this).parents().siblings().find(".submenu").hide(300);
		$(this).siblings(".submenu").toggle(300);
	})

	$(".mobile .submenu > li > a").on('click', function () {
		$(this).addClass("sub-current").parents().siblings().find("a").removeClass("sub-current");
		$(this).parents().siblings().find(".thr").hide(300);
		$(this).siblings(".thr").toggle(300);
	})

	$(".mobile .thr > li > a").on('click', function () {
		$(this).addClass("xuan").parents().siblings().find("a").removeClass("xuan");

	})
	// 移动端search
	$(".mobile .search").on('click', function () {
		$('.search>.search_bar').css('display','block')
	})
	// 搜索失焦时 [关闭搜索框、触发搜索、关键字清空]
	$(".mobile .search_bar>.input").on('blur', function () {
		$('.search>.search_bar').css('display','none')
		/** 触发搜索*/
		$(this)[0].value = ''
	})
	$(".mobile .search_bar>.guanbi").on('click', function (e) {
		$('.search>.search_bar').css('display','none')
		$(this)[0].value = ''
		if(e && e.stopPropagation) {
			e.stopPropagation()
		} else {
				window.event.cancelBubble = true
		}
		e.preventDefault()
	})



	/*****pc */
	window.onload=function() {
		let navSize = $(".hearder__container").outerWidth()
		if (navSize > 768) {
			var menu_itemlength = $(".pc .menu .menu-item").length;
			var menu_item = $(".pc .menu .menu-item")
			for (var i=0;i < menu_itemlength;i++) { 
				if (i>7){
					menu_item[i].classList.add('hide')
					$(".menu").css("justify-content","center")
					$(".page-down").css("display",'block')
				}
			}
		}
	}
	$('.pc .search').on('click', function (e) {
			// $(this).children(":last").css('display','block')
			$('.pc .search_input').toggle()
			$(document).one('click',
        function() { //对document绑定一个影藏Div方法
					$('.pc .search_input').hide()
				});
				e.stopPropagation()
		}
	)
	$('.pc .search_input').on('click', function(e) {
		e.stopPropagation() //阻止事件向上冒泡
	})
	$('.pc .search_input>.input').on('blur', function (e) {
		$('.pc .search_input').css('display','none')
		/** 触发搜索*/
		}
	)
	// $(document).on('click', function(e){
	// 	if($(e.target).closest(".pc .search_input>.input").length == 0){
	// 		// foo();
	// 		$('.pc .search_input').css('display','none')
	// 	}
	// })




	$('.pc .lang__downlist>.lang__downlist-item').on('click', function (e) {
		$(this).parent().parent().children(":first").children(":first")[0].innerText = $(this).children()[0].innerText
	})
	$('.pc .menu .page-down').on('click', function () {
		$('.pc .menu .menu-item.hide').removeClass('hide')
		var menu_itemlength = $(".pc .menu .menu-item").length;
			var menu_item = $(".pc .menu .menu-item")
			for (var i=0;i < menu_itemlength;i++) { 
				if (i<(menu_itemlength-8)){
					menu_item[i].classList.add('hide')
					$(".page-down").css("display",'none')
					$(".page-up").css("display",'block')
				}
			}
	})
	$('.pc .menu .page-up').on('click', function () {
		$('.pc .menu .menu-item.hide').removeClass('hide')
		var menu_itemlength = $(".pc .menu .menu-item").length;
			var menu_item = $(".pc .menu .menu-item")
			for (var i=0;i < menu_itemlength;i++) { 
				if (i>7){
					menu_item[i].classList.add('hide')
					$(".page-down").css("display",'block')
					$(".page-up").css("display",'none')
				}
			}
	})
})