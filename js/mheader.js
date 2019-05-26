$(function () {
	/********************* mobile ************/
	/** mobile nav切换 */
	$('.mobile .navToggle').on('click', function (e) {
		$(document).one('click',
			function() {
				$('.m_nav').hide()
				initmStyle()
			}
		)
		if ($(".m_nav").is(":hidden")) {
			$('.m_nav').addClass('open');
			$('.mobile').addClass('open');
			$('.mobile-main').addClass('open');
		} else {
			initmStyle()
		}
		e.stopPropagation()
	})
	$('.mobile .m_nav').on('click', function(e) {
		e.stopPropagation() //阻止事件向上冒泡
	})
	/** mobile初始化状态*/
	function initmStyle() {
		$('.m_nav').removeClass('open');
		$('.mobile ').removeClass('open');
		$('.mobile-main').removeClass('open');
		$(".mobile .menu > .menu-item > a").removeClass('current');
		$(".mobile .submenu > .e_li > a").removeClass("sub-current");
		$(".mobile .submenu").css("display",'none');
		$(".mobile .submenu > .e_li > .thr").css("display",'none');
	}
	/** mobile 切换语言lang */
	$('.mobile .lang').on('click', function (e) {
	 $('.mobile .lang-select').toggle()
		if(e && e.stopPropagation) {
			e.stopPropagation()
		} else {
				window.event.cancelBubble = true
		}
		e.preventDefault()
	})
	/** mobile 切换语言lang 赋值 */
	$('.mobile .lang__downlist>.lang__downlist-item').on('click', function (e) {
		$('.mobile .lang-show a')[0].innerText = $(this).children()[0].innerText
		$('.mobile .lang-select').hide()
		$('.m_nav').hide()
		$('.m_nav').removeClass('open');
		$('.mobile').removeClass('open')
		$('.mobile-main').removeClass('open');
		if(e && e.stopPropagation) {
			e.stopPropagation()
		} else {
				window.event.cancelBubble = true
		}
		e.preventDefault()
	})
	/** mobile nav一级菜单 */
	$(".mobile .menu > .menu-item > a").on('click', function () {
		$(this).addClass("current").parents().siblings().find("a").removeClass("current");
		$(".mobile .submenu > .e_li > a").removeClass("sub-current");
		$(".mobile .submenu > .e_li > .thr").css("display",'none');
		if ($(this).siblings().length > 0 && $(this).siblings(".submenu").css('display') !== 'none') {
			$(this).removeClass("current")
			$(".mobile .submenu > .e_li > a").removeClass("sub-current")
		}
		$(this).parents().siblings().find(".submenu").hide(300);
		$(this).siblings(".submenu").slideToggle(300);
	})
	/** mobile nav二级菜单 */
	$(".mobile .submenu > .e_li > a").on('click', function () {
		$(this).addClass("sub-current").parents().siblings().find("a").removeClass("sub-current");
		if ($(this).siblings().length > 0 && $(this).siblings(".thr").css('display') !== 'none') {
			$(this).removeClass("sub-current")
		}
		$(this).parents().siblings().find(".thr").hide(300);
		$(this).siblings(".thr").slideToggle(300);
	})
	/** mobile nav三级菜单 */
	$(".mobile .thr > div > a").on('click', function () {
		$(this).addClass("xuan").parents().siblings().find("a").removeClass("xuan");
	})
	/** mobile 头部search */
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
	$(".mobile .search_bar").keypress(function (e) {
		if (e.which == 13) {
			var searchVal = $('.mobile .search_bar input').val();
			searchVal = searchVal.trim()
			if (searchVal.length>0) {
				console.log('start search', searchVal)
			}
		}
	});
	/** mobile 头部search close*/
	$(".mobile .search_bar>.guanbi").on('click', function (e) {
		$('.search>.search_bar').css('display','none')
		if(e && e.stopPropagation) {
			e.stopPropagation()
		} else {
				window.event.cancelBubble = true
		}
		e.preventDefault()
	})
})