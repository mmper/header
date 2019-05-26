/*********************** pc ***********************/
$(function () {
	window.onload=function() {
		adjustNavSizePc();
		judgeMain();
		containerMargin();
	}
	$(window).resize(function() {
		adjustNavSizePc();
		judgeMain();
		containerMargin();
	})
	function adjustNavSizePc() {
		var designWidth =  window.innerWidth ? window.innerWidth : document.body.clientWidth;
		if (designWidth > 768) {
			var menu_itemlength = $(".pc .menu .menu-item").length;
			var menu_item = $(".pc .menu .menu-item")
			var itemLength = $('#wrapper').data('item-length');
			for (var i=0;i < menu_itemlength;i++) {
				if (itemLength === 8) {
					if (i>7){
						if ($(".pc .page-up").css("display") == 'none') {
							$(".pc .menu").css("justify-content","center")
							menu_item[i].classList.add('hide')
							$(".pc .page-down").css("display",'block')
						}
					}
				}
				if (itemLength === 10) {
					if (i>9){
						if ($(".pc .page-up").css("display") == 'none') {
							menu_item[i].classList.add('hide')
							$(".pc .page-down").css("display",'block')
						}
					}
				}
			}
		}
	}
	
	function containerMargin() {
		var designWidth =  window.innerWidth ? window.innerWidth : document.body.clientWidth;
		if (designWidth <= 1200 && designWidth > 768) {
			$('.pc .hearder__container').css('margin','0 25px');
			$('.pc .subMenu').css('padding','0 25px');
			$('.pc .cup').css({'padding':'0 25px','margin':'0'});
			$('.main.pc-main .main-body').css('padding','0 25px');
		} else if (designWidth > 1200){
			$('.pc .hearder__container').css('margin','0 auto');
			$('.pc .subMenu').css('padding','0');
			$('.pc .cup').css({'padding':'0','margin':'0'});
			$('.main.pc-main .main-body').css('padding','0');
		} else if (designWidth <= 768){ 
			$('.main.mobile-main .main-body').css('padding','0');
		}
		$('.main1.pc-main .main-body').css('padding-top','64px');
	}
	function judgeMain() {
		var designWidth =  window.innerWidth ? window.innerWidth : document.body.clientWidth;
		if (designWidth <= 768) {
			$('.main').addClass('mobile-main');
			$('.main').removeClass('pc-main');
		} else {
			$('.main').addClass('pc-main');
			$('.main').removeClass('mobile-main');
		}
	}
	/** pc search */
	$('.pc .search').on('click', function (e) {
		$('.pc .search_input').toggle()
		$('.pc2 .lang').hide()
		if ($('.pc10 .search_input').is(":visible")) {
			$('.pc10 .subMenu').addClass('search-open');
		}
		$(document).one('click',
			function() {
				$('.pc2 .lang').show()
				$('.pc10 .subMenu').removeClass('search-open');
				$('.pc .search_input').hide()
			});
			e.stopPropagation()
		}
	)
	/** pc search input */
	$('.pc .search_input').on('click', function(e) {
		e.stopPropagation() //阻止事件向上冒泡
	});
	$('.pc .search-btn').on('click', function() {
		var searchVal = $('.pc .search_input input').val();
		searchVal = searchVal.trim()
		if (searchVal.length>0) {
			console.log('start search', searchVal)
		}
	});
	$(".pc .search_input").keypress(function (e) {
		if (e.which == 13) {
			var searchVal = $('.pc .search_input input').val();
			searchVal = searchVal.trim()
			if (searchVal.length>0) {
				console.log('start search', searchVal)
			}
		}
	});

	/** pc search 关闭 */
	$('.pc .search_input .icon-guanbi').on('click', function(e) {
		$('.pc .search_input').hide();
		$('.pc10 .subMenu').removeClass('search-open');
		if(e && e.stopPropagation) {
			e.stopPropagation()
		} else {
				window.event.cancelBubble = true
		}
		e.preventDefault()
	})
	/** pc 语言切换 */
	$('.pc .lang__downlist>.lang__downlist-item').on('click', function (e) {
		$(this).parent().parent().children(":first").children(":first")[0].innerText = $(this).children()[0].innerText
	})
	/** pc nav翻页 向后*/
	$('.pc .menu .page-down').on('click', function () {
		$('.pc .menu .menu-item.hide').removeClass('hide')
		var menu_itemlength = $(".pc .menu .menu-item").length;
		var menu_item = $(".pc .menu .menu-item")
		var itemLength = $('#wrapper').data('item-length');
		for (var i=0;i < menu_itemlength;i++) {
			if (itemLength === 8) {
				if (i<(menu_itemlength-8)){
					menu_item[i].classList.add('hide');
					$(".pc .page-down").css("display",'none');
					$(".pc .page-up").css("display",'block');
				}
			}
			if (itemLength === 10) {
				if (i<(menu_itemlength-10)){
					menu_item[i].classList.add('hide');
					$(".pc .page-down").css("display",'none');
					$(".pc .page-up").css("display",'block');
				}
			}
		}
	})
	/** pc nav翻页 向前*/
	$('.pc .menu .page-up').on('click', function () {
		$('.pc .menu .menu-item.hide').removeClass('hide')
		var menu_itemlength = $(".pc .menu .menu-item").length;
		var menu_item = $(".pc .menu .menu-item")
		var itemLength = $('#wrapper').data('item-length');
		for (var i=0;i < menu_itemlength;i++) {
			if (itemLength === 8) {
				if (i>7){
					menu_item[i].classList.add('hide')
					$(".pc .page-down").css("display",'block')
					$(".pc .page-up").css("display",'none')
				}
			}
			if (itemLength === 10) {
				if (i>9){
					menu_item[i].classList.add('hide')
					$(".pc .page-down").css("display",'block')
					$(".pc .page-up").css("display",'none')
				}
			}
		}
	})
	$('.pc .lang__downlist').on('mousewheel',function(e){
		e.stopPropagation() //阻止事件向上冒泡
	});
})

