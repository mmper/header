$(function () {
	/*********************** pc1 ***********************/
	/** pc1 nav展示style */
	window.onload=function() {
		adjustNavSizePc1();
		adjustNavSizePc2();
		adjustNavSizePc3();
		adjustNavSizePc4();
		adjustNavSizePc5();
		adjustNavSizePc6();
		judgeMain();
		containerMargin();
	}
	window.onresize= function(){
		adjustNavSizePc1();
		adjustNavSizePc2();
		adjustNavSizePc3();
		adjustNavSizePc4();
		adjustNavSizePc5();
		adjustNavSizePc6();
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
			$('.pc .hearder__top').css('padding','0 25px');
			$('.main1.pc-main').css('padding','64px 25px 0 25px');
			$('.main2.pc-main').css('padding','0 25px');
			$('.main4.pc-main').css('padding','112px 25px 0 25px');
			$('.main5.pc-main').css('padding','192px 25px 0 25px');
			$('.main6.pc-main').css('padding','192px 25px 0 25px');
		} else if (document.documentElement.clientWidth > 1200){
			$('.pc .hearder__container').css('margin','0 auto');
			$('.pc2 .subMenu').css('padding','0');
			$('.pc .hearder__top').css('padding','0');
			$('.main1.pc-main').css('padding','64px 0 0 0');
			$('.main2.pc-main').css('padding','0');
			$('.main4.pc-main').css('padding','112px 0 0 0');
			$('.main5.pc-main').css('padding','192px 25px 0 25px');
			$('.main6.pc-main').css('padding','192px 0 0 0');
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

/*********************** pc3 ***********************/
function adjustNavSizePc3() {
	let navSize = $(".pc3 .hearder__container").outerWidth()
	if (navSize > 768) {
		var menu_itemlength = $(".pc3 .menu .menu-item").length;
		var menu_item = $(".pc3 .menu .menu-item")
		for (var i=0;i < menu_itemlength;i++) {
			if (i>9){
				if ($(".pc3 .page-up").css("display") == 'none') {
					menu_item[i].classList.add('hide')
					$(".pc3 .page-down").css("display",'block')
					$(".pc3 .menu .menu-item>a").css("text-align",'left')
				}
			}
		}
	}
}
/** pc search */
$('.pc3 .search').on('click', function (e) {
	$('.pc3 .search_input').toggle()
	$(document).one('click',
		function() {
			$('.pc3 .search_input').hide();
		});
		e.stopPropagation()
	}
)
/** pc search input */
$('.pc3 .search_input').on('click', function(e) {
	e.stopPropagation() //阻止事件向上冒泡
})
$('.pc3 .search_input>.input').on('blur', function (e) {
	$('.pc3 .search_input').css('display','none')
	/** 触发搜索*/
	}
)
/** pc 语言切换 */
$('.pc3 .lang__downlist>.lang__downlist-item').on('click', function (e) {
	$(this).parent().parent().children(":first").children(":first")[0].innerText = $(this).children()[0].innerText
})
/** pc nav item>10 翻页 向后*/
$('.pc3 .menu .page-down').on('click', function () {
	$('.pc3 .menu .menu-item.hide').removeClass('hide')
	var menu_itemlength = $(".pc3 .menu .menu-item").length;
		var menu_item = $(".pc3 .menu .menu-item")
		for (var i=0;i < menu_itemlength;i++) { 
			if (i<(menu_itemlength-10)){
				menu_item[i].classList.add('hide');
				$(".pc3 .page-down").css("display",'none');
				$(".pc3 .page-up").css("display",'block');
			}
		}
})
/** pc nav item>10 翻页 向前*/
$('.pc3 .menu .page-up').on('click', function () {
	$('.pc3 .menu .menu-item.hide').removeClass('hide')
	var menu_itemlength = $(".pc3 .menu .menu-item").length;
		var menu_item = $(".pc3 .menu .menu-item")
		for (var i=0;i < menu_itemlength;i++) { 
			if (i>9){
				menu_item[i].classList.add('hide')
				$(".pc3 .page-down").css("display",'block')
				$(".pc3 .page-up").css("display",'none')
			}
		}
})

/*********************** pc4 ***********************/
	function adjustNavSizePc4() {
		let navSize = $(".pc4 .hearder__container").outerWidth()
		if (navSize > 768) {
			var menu_itemlength = $(".pc4 .menu .menu-item").length;
			var menu_item = $(".pc4 .menu .menu-item")
			for (var i=0;i < menu_itemlength;i++) {
				if (i>7){
					if ($(".pc4 .page-up").css("display") == 'none') {
						$(".pc4 .menu").css("justify-content","center")
						menu_item[i].classList.add('hide')
						$(".pc4 .page-down").css("display",'block')
					}
				}
			}
		}
	}
	/** pc search */
	$('.pc4 .search').on('click', function (e) {
		$('.pc4 .search_input').toggle()
		$(document).one('click',
			function() {
				$('.pc4 .search_input').hide();
			});
			e.stopPropagation()
		}
	)
	/** pc search input */
	$('.pc4 .search_input').on('click', function(e) {
		e.stopPropagation() //阻止事件向上冒泡
	})
	$('.pc4 .search_input>.input').on('blur', function (e) {
		$('.pc4 .search_input').css('display','none')
		/** 触发搜索*/
		}
	)
	/** pc 语言切换 */
	$('.pc4 .lang__downlist>.lang__downlist-item').on('click', function (e) {
		$(this).parent().parent().children(":first").children(":first")[0].innerText = $(this).children()[0].innerText
	})
	/** pc nav item>8 翻页 向后*/
	$('.pc4 .menu .page-down').on('click', function () {
		$('.pc4 .menu .menu-item.hide').removeClass('hide')
		var menu_itemlength = $(".pc4 .menu .menu-item").length;
			var menu_item = $(".pc4 .menu .menu-item")
			for (var i=0;i < menu_itemlength;i++) { 
				if (i<(menu_itemlength-8)){
					menu_item[i].classList.add('hide');
					$(".pc4 .page-down").css("display",'none');
					$(".pc4 .page-up").css("display",'block');
				}
			}
	})
	/** pc nav item>8 翻页 向前*/
	$('.pc4 .menu .page-up').on('click', function () {
		$('.pc4 .menu .menu-item.hide').removeClass('hide')
		var menu_itemlength = $(".pc4 .menu .menu-item").length;
			var menu_item = $(".pc4 .menu .menu-item")
			for (var i=0;i < menu_itemlength;i++) { 
				if (i>7){
					menu_item[i].classList.add('hide')
					$(".pc4 .page-down").css("display",'block')
					$(".pc4 .page-up").css("display",'none')
				}
			}
	})

/*********************** pc5 ***********************/
function adjustNavSizePc5() {
	let navSize = $(".pc5 .hearder__container").outerWidth()
	if (navSize > 768) {
		var menu_itemlength = $(".pc5 .menu .menu-item").length;
		var menu_item = $(".pc5 .menu .menu-item")
		for (var i=0;i < menu_itemlength;i++) {
			if (i>9){
				if ($(".pc5 .page-up").css("display") == 'none') {
					menu_item[i].classList.add('hide')
					$(".pc5 .page-down").css("display",'block')
					$(".pc5 .menu .menu-item>a").css("text-align",'left')
				}
			}
		}
	}
}
/** pc search */
$('.pc5 .search').on('click', function (e) {
	$('.pc5 .search_input').toggle()
	$(document).one('click',
		function() {
			$('.pc5 .search_input').hide();
		});
		e.stopPropagation()
	}
)
/** pc search input */
$('.pc5 .search_input').on('click', function(e) {
	e.stopPropagation() //阻止事件向上冒泡
})
$('.pc5 .search_input>.input').on('blur', function (e) {
	$('.pc5 .search_input').css('display','none')
	/** 触发搜索*/
	}
)
/** pc search 关闭 */

$('.pc5 .search_input .icon-guanbi').on('click', function(e) {
	$('.pc5 .search_input').hide()
	if(e && e.stopPropagation) {
		e.stopPropagation()
	} else {
			window.event.cancelBubble = true
	}
	e.preventDefault()
})
/** pc 语言切换 */
$('.pc5 .lang__downlist>.lang__downlist-item').on('click', function (e) {
	$(this).parent().parent().children(":first").children(":first")[0].innerText = $(this).children()[0].innerText
})
/** pc nav item>10 翻页 向后*/
$('.pc5 .menu .page-down').on('click', function () {
	$('.pc5 .menu .menu-item.hide').removeClass('hide')
	var menu_itemlength = $(".pc5 .menu .menu-item").length;
		var menu_item = $(".pc5 .menu .menu-item")
		for (var i=0;i < menu_itemlength;i++) { 
			if (i<(menu_itemlength-10)){
				menu_item[i].classList.add('hide');
				$(".pc5 .page-down").css("display",'none');
				$(".pc5 .page-up").css("display",'block');
			}
		}
})
/** pc nav item>10 翻页 向前*/
$('.pc5 .menu .page-up').on('click', function () {
	$('.pc5 .menu .menu-item.hide').removeClass('hide')
	var menu_itemlength = $(".pc5 .menu .menu-item").length;
		var menu_item = $(".pc5 .menu .menu-item")
		for (var i=0;i < menu_itemlength;i++) { 
			if (i>9){
				menu_item[i].classList.add('hide')
				$(".pc5 .page-down").css("display",'block')
				$(".pc5 .page-up").css("display",'none')
			}
		}
})
/*********************** pc6 ***********************/
function adjustNavSizePc6() {
	let navSize = $(".pc6 .hearder__container").outerWidth()
	if (navSize > 768) {
		var menu_itemlength = $(".pc6 .menu .menu-item").length;
		var menu_item = $(".pc6 .menu .menu-item")
		for (var i=0;i < menu_itemlength;i++) {
			if (i>9){
				if ($(".pc6 .page-up").css("display") == 'none') {
					menu_item[i].classList.add('hide')
					$(".pc6 .page-down").css("display",'block')
					$(".pc6 .menu .menu-item>a").css("text-align",'left')
				}
			}
		}
	}
}
/** pc 语言切换 */
$('.pc6 .lang__downlist>.lang__downlist-item').on('click', function (e) {
	$(this).parent().parent().children(":first").children(":first")[0].innerText = $(this).children()[0].innerText
})
/** pc nav item>10 翻页 向后*/
$('.pc6 .menu .page-down').on('click', function () {
	$('.pc6 .menu .menu-item.hide').removeClass('hide')
	var menu_itemlength = $(".pc6 .menu .menu-item").length;
		var menu_item = $(".pc6 .menu .menu-item")
		for (var i=0;i < menu_itemlength;i++) { 
			if (i<(menu_itemlength-10)){
				menu_item[i].classList.add('hide');
				$(".pc6 .page-down").css("display",'none');
				$(".pc6 .page-up").css("display",'block');
			}
		}
})
/** pc nav item>10 翻页 向前*/
$('.pc6 .menu .page-up').on('click', function () {
	$('.pc6 .menu .menu-item.hide').removeClass('hide')
	var menu_itemlength = $(".pc6 .menu .menu-item").length;
		var menu_item = $(".pc6 .menu .menu-item")
		for (var i=0;i < menu_itemlength;i++) { 
			if (i>9){
				menu_item[i].classList.add('hide')
				$(".pc6 .page-down").css("display",'block')
				$(".pc6 .page-up").css("display",'none')
			}
		}
})