$(function () {
	/*********************** pc1 ***********************/
	/** pc1 nav展示style */
	window.onload=function() {
		adjustNavSizePc1();
		adjustNavSizePc2();
		judgeMain();
		containerMargin();
	}
	window.onresize= function(){
		adjustNavSizePc1();
		adjustNavSizePc2();
		containerMargin();
		judgeMain();
	}
	function adjustNavSizePc1() {
		let navSize = $(".pc1 .hearder__container").outerWidth()
		if (navSize > 768) {
			var menu_itemlength = $(".pc1 .menu .menu-item").length;
			var menu_item = $(".pc1 .menu .menu-item")
			for (var i=0;i < menu_itemlength;i++) {
				if (i>7){
					if ($(".pc1 .page-up").css("display") == 'none') {
						$(".pc1 .menu").css("justify-content","center")
						menu_item[i].classList.add('hide')
						$(".pc1 .page-down").css("display",'block')
					}
				}
			}
		}
	}
	function containerMargin() {
		if (document.documentElement.clientWidth <= 1200 && document.documentElement.clientWidth > 768) {
			$('.pc .hearder__container').css('margin','0 25px');
			$('.pc2 .subMenu').css('padding','0 25px');
			$('.main1.pc-main').css('padding','64px 25px 0 25px');
			$('.main2.pc-main').css('padding','0 25px');
		} else if (document.documentElement.clientWidth > 1200){
			$('.pc .hearder__container').css('margin','0 auto');
			$('.pc2 .subMenu').css('padding','0');
			$('.main1.pc-main').css('padding','64px 0 0 0');
			$('.main2.pc-main').css('padding','0');
		} else if (document.documentElement.clientWidth <= 768){ 
			$('.main.mobile-main').css('padding','0 0.625rem');
		}
	}
	function judgeMain() {
		if (document.documentElement.clientWidth <= 768) {
			$('.main').addClass('mobile-main');
			$('.main').removeClass('pc-main');
		} else {
			$('.main').addClass('pc-main');
			$('.main').removeClass('mobile-main');
		}
	}
	/** pc search */
	$('.pc1 .search').on('click', function (e) {
			$('.pc1 .search_input').toggle()
			$(document).one('click',
        function() {
					$('.pc1 .search_input').hide()
				});
				e.stopPropagation()
		}
	)
	/** pc search input */
	$('.pc1 .search_input').on('click', function(e) {
		e.stopPropagation() //阻止事件向上冒泡
	})
	$('.pc1 .search_input>.input').on('blur', function (e) {
		$('.pc1 .search_input').css('display','none')
		/** 触发搜索*/
		}
	)
	/** pc 语言切换 */
	$('.pc1 .lang__downlist>.lang__downlist-item').on('click', function (e) {
		$(this).parent().parent().children(":first").children(":first")[0].innerText = $(this).children()[0].innerText
	})
	/** pc nav item>8 翻页 向后*/
	$('.pc1 .menu .page-down').on('click', function () {
		$('.pc1 .menu .menu-item.hide').removeClass('hide')
		var menu_itemlength = $(".pc1 .menu .menu-item").length;
			var menu_item = $(".pc1 .menu .menu-item")
			for (var i=0;i < menu_itemlength;i++) { 
				if (i<(menu_itemlength-8)){
					menu_item[i].classList.add('hide');
					$(".pc1 .page-down").css("display",'none');
					$(".pc1 .page-up").css("display",'block');
				}
			}
	})
	/** pc nav item>8 翻页 向前*/
	$('.pc1 .menu .page-up').on('click', function () {
		$('.pc1 .menu .menu-item.hide').removeClass('hide')
		var menu_itemlength = $(".pc1 .menu .menu-item").length;
			var menu_item = $(".pc1 .menu .menu-item")
			for (var i=0;i < menu_itemlength;i++) { 
				if (i>7){
					menu_item[i].classList.add('hide')
					$(".pc1 .page-down").css("display",'block')
					$(".pc1 .page-up").css("display",'none')
				}
			}
	})

	/*********************** pc2 ***********************/
	function adjustNavSizePc2() {
		let navSize = $(".pc2 .menu").outerWidth()
		if (navSize > 768) {
			var menu_itemlength = $(".pc2 .menu .menu-item").length;
			var menu_item = $(".pc2 .menu .menu-item")
			for (var i=0;i < menu_itemlength;i++) { 
				if (i>9){
					if ($(".pc2 .page-up").css("display") == 'none') {
						menu_item[i].classList.add('hide')
						$(".pc2 .page-down").css("display",'block')
					}
				}
			}
		}
	}
	/** pc search */
	$('.pc2 .search').on('click', function (e) {
		$('.pc2 .search_input').toggle()
		$('.pc2 .lang').hide()
		$(document).one('click',
			function() {
				$('.pc2 .lang').show()
				$('.pc2 .search_input').hide();
			});
			e.stopPropagation()
		}
	)
	/** pc search input */
	$('.pc2 .search_input').on('click', function(e) {
		e.stopPropagation() //阻止事件向上冒泡
	})
	$('.pc2 .search_input>.input').on('blur', function (e) {
		$('.pc2 .search_input').css('display','none')
		/** 触发搜索*/
		}
	)
	/** pc 语言切换 */
	$('.pc2 .lang__downlist>.lang__downlist-item').on('click', function (e) {
		$(this).parent().parent().children(":first").children(":first")[0].innerText = $(this).children()[0].innerText
	})
	/** pc nav item>10 翻页 向后*/
	$('.pc2 .menu .page-down').on('click', function () {
		$('.pc2 .menu .menu-item.hide').removeClass('hide')
		var menu_itemlength = $(".pc2 .menu .menu-item").length;
			var menu_item = $(".pc2 .menu .menu-item")
			for (var i=0;i < menu_itemlength;i++) { 
				if (i<(menu_itemlength-10)){
					menu_item[i].classList.add('hide')
					$(".pc2 .page-down").css("display",'none')
					$(".pc2 .page-up").css("display",'block')
				}
			}
	})
	/** pc nav item>10 翻页 向前*/
	$('.pc2 .menu .page-up').on('click', function () {
		$('.pc2 .menu .menu-item.hide').removeClass('hide')
		var menu_itemlength = $(".pc2 .menu .menu-item").length;
			var menu_item = $(".pc2 .menu .menu-item")
			for (var i=0;i < menu_itemlength;i++) { 
				if (i>9){
					menu_item[i].classList.add('hide')
					$(".pc2 .page-down").css("display",'block')
					$(".pc2 .page-up").css("display",'none')
				}
			}
	})
})