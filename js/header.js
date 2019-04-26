$(function () {
	//移动端展开nav
	$('.mobile .navToggle').on('click', function (e) {
		$(document).one('click',
			function() {
				$('.m_nav').hide()
				$('.m_nav').removeClass('open');
				$('.mobile ').removeClass('open')
			}
		)
		if ($(".m_nav").is(":hidden")) {
			$('.m_nav').addClass('open');
			$('.mobile').addClass('open')
		} else {
			$('.m_nav').removeClass('open');
			$('.mobile').removeClass('open')
		}
		e.stopPropagation()
	})
	$('.mobile .m_nav').on('click', function(e) {
		e.stopPropagation() //阻止事件向上冒泡
	})
	/* 移动端切换语言lang */
	$('.mobile .lang').on('click', function (e) {
	 $('.mobile .lang-select').toggle()
		if(e && e.stopPropagation) {
			e.stopPropagation()
		} else {
				window.event.cancelBubble = true
		}
		e.preventDefault()
	})

	$('.mobile .lang__downlist>.lang__downlist-item').on('click', function (e) {
		$('.mobile .lang-show a')[0].innerText = $(this).children()[0].innerText
		$('.mobile .lang-select').hide()
		$('.m_nav').hide()
		$('.m_nav').removeClass('open');
		$('.mobile').removeClass('open')
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
		$(".mobile .submenu > li > a").removeClass("sub-current");
		$(".mobile .submenu > li > .thr").css("display",'none');
		if ($(this).siblings().length > 0 && $(this).siblings(".submenu").css('display') !== 'none') {
			$(this).removeClass("current")
			$(".mobile .submenu > li > a").removeClass("sub-current")
		}
		$(this).parents().siblings().find(".submenu").hide(300);
		$(this).siblings(".submenu").slideToggle(300);
	})

	$(".mobile .submenu > li > a").on('click', function () {
		$(this).addClass("sub-current").parents().siblings().find("a").removeClass("sub-current");
		if ($(this).siblings().length > 0 && $(this).siblings(".thr").css('display') !== 'none') {
			$(this).removeClass("sub-current")
		}
		$(this).parents().siblings().find(".thr").hide(300);
		$(this).siblings(".thr").slideToggle(300);
	})

	$(".mobile .thr > li > a").on('click', function () {
		$(this).addClass("xuan").parents().siblings().find("a").removeClass("xuan");

	})
	// 移动端search
	$(".mobile .search").on('click', function (e) {
		$('.mobile .search_bar').toggle()
		$(document).one('click',
			function() {
				$('.mobile .search_bar').hide()
			});
			e.stopPropagation()
		}
	)
	$('.mobile .search_bar').on('click', function(e) {
		e.stopPropagation() //阻止事件向上冒泡
	})
	// 搜索失焦时 [关闭搜索框、触发搜索]
	$(".mobile .search_bar>.input").on('blur', function () {
		$('.search>.search_bar').css('display','none')
		/** 触发搜索*/
	})
	$(".mobile .search_bar>.guanbi").on('click', function (e) {
		$('.search>.search_bar').css('display','none')
		if(e && e.stopPropagation) {
			e.stopPropagation()
		} else {
				window.event.cancelBubble = true
		}
		e.preventDefault()
	})


	/*********************** pc ***********************/
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
			$('.pc .search_input').toggle()
			$(document).one('click',
        function() {
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