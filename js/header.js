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
		adjustNavSizePc7();
		adjustNavSizePc8();
		adjustNavSizePc9();
		adjustNavSizePc10();
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
		adjustNavSizePc7();
		adjustNavSizePc8();
		adjustNavSizePc9();
		adjustNavSizePc10();
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
			$('.main.pc-main .main-body').css('padding','0 20px 0 25px');
		} else if (document.documentElement.clientWidth > 1200){
			$('.pc .hearder__container').css('margin','0 auto');
			$('.pc2 .subMenu').css('padding','0');
			$('.pc .hearder__top').css('padding','0');
			$('.main.pc-main .main-body').css('padding','0');
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
	$('.pc .search').on('click', function (e) {
		$('.pc .search_input').toggle()
		$('.pc2 .lang').hide()
		if ($('.pc10 .search_input').is(":visible")) {
			$('.pc10 .hearder').addClass('search-open');
			$('.pc10 .menu').addClass('search-open');
		}
		$(document).one('click',
			function() {
				$('.pc2 .lang').show()
				$('.pc10 .hearder').removeClass('search-open');
				$('.pc10 .menu').removeClass('search-open');
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
		$('.pc10 .hearder').removeClass('search-open');
		$('.pc10 .menu').removeClass('search-open');
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

/*********************** pc7 ***********************/
function adjustNavSizePc7() {
	let navSize = $(".pc7 .hearder__container").outerWidth()
	if (navSize > 768) {
		var menu_itemlength = $(".pc7 .menu .menu-item").length;
		var menu_item = $(".pc7 .menu .menu-item")
		for (var i=0;i < menu_itemlength;i++) {
			if (i>7){
				if ($(".pc7 .page-up").css("display") == 'none') {
					$(".pc7 .menu").css("justify-content","center")
					menu_item[i].classList.add('hide')
					$(".pc7 .page-down").css("display",'block')
				}
			}
		}
	}
}
/** pc nav item>8 翻页 向后*/
$('.pc7 .menu .page-down').on('click', function () {
	$('.pc7 .menu .menu-item.hide').removeClass('hide')
	var menu_itemlength = $(".pc7 .menu .menu-item").length;
		var menu_item = $(".pc7 .menu .menu-item")
		for (var i=0;i < menu_itemlength;i++) { 
			if (i<(menu_itemlength-8)){
				menu_item[i].classList.add('hide');
				$(".pc7 .page-down").css("display",'none');
				$(".pc7 .page-up").css("display",'block');
			}
		}
})
/** pc nav item>8 翻页 向前*/
$('.pc7 .menu .page-up').on('click', function () {
	$('.pc7 .menu .menu-item.hide').removeClass('hide')
	var menu_itemlength = $(".pc7 .menu .menu-item").length;
		var menu_item = $(".pc7 .menu .menu-item")
		for (var i=0;i < menu_itemlength;i++) { 
			if (i>7){
				menu_item[i].classList.add('hide')
				$(".pc7 .page-down").css("display",'block')
				$(".pc7 .page-up").css("display",'none')
			}
		}
})

/*********************** pc8 ***********************/
function adjustNavSizePc8() {
	let navSize = $(".pc8 .hearder__container").outerWidth()
	if (navSize > 768) {
		var menu_itemlength = $(".pc8 .menu .menu-item").length;
		var menu_item = $(".pc8 .menu .menu-item")
		for (var i=0;i < menu_itemlength;i++) {
			if (i>7){
				if ($(".pc8 .page-up").css("display") == 'none') {
					$(".pc8 .menu").css("justify-content","center")
					menu_item[i].classList.add('hide')
					$(".pc8 .page-down").css("display",'block')
				}
			}
		}
	}
}
/** pc nav item>8 翻页 向后*/
$('.pc8 .menu .page-down').on('click', function () {
	$('.pc8 .menu .menu-item.hide').removeClass('hide')
	var menu_itemlength = $(".pc8 .menu .menu-item").length;
		var menu_item = $(".pc8 .menu .menu-item")
		for (var i=0;i < menu_itemlength;i++) { 
			if (i<(menu_itemlength-8)){
				menu_item[i].classList.add('hide');
				$(".pc8 .page-down").css("display",'none');
				$(".pc8 .page-up").css("display",'block');
			}
		}
})
/** pc nav item>8 翻页 向前*/
$('.pc8 .menu .page-up').on('click', function () {
	$('.pc8 .menu .menu-item.hide').removeClass('hide')
	var menu_itemlength = $(".pc8 .menu .menu-item").length;
		var menu_item = $(".pc8 .menu .menu-item")
		for (var i=0;i < menu_itemlength;i++) { 
			if (i>7){
				menu_item[i].classList.add('hide')
				$(".pc8 .page-down").css("display",'block')
				$(".pc8 .page-up").css("display",'none')
			}
		}
})
/*********************** pc9 ***********************/
function adjustNavSizePc9() {
	let navSize = $(".pc9 .hearder__container").outerWidth()
	if (navSize > 768) {
		var menu_itemlength = $(".pc9 .menu .menu-item").length;
		var menu_item = $(".pc9 .menu .menu-item")
		for (var i=0;i < menu_itemlength;i++) {
			if (i>9){
				if ($(".pc9 .page-up").css("display") == 'none') {
					menu_item[i].classList.add('hide')
					$(".pc9 .page-down").css("display",'block')
					$(".pc9 .menu .menu-item>a").css("text-align",'left')
				}
			}
		}
	}
}
/** pc nav item>10 翻页 向后*/
$('.pc9 .menu .page-down').on('click', function () {
	$('.pc9 .menu .menu-item.hide').removeClass('hide')
	var menu_itemlength = $(".pc9 .menu .menu-item").length;
		var menu_item = $(".pc9 .menu .menu-item")
		for (var i=0;i < menu_itemlength;i++) { 
			if (i<(menu_itemlength-10)){
				menu_item[i].classList.add('hide');
				$(".pc9 .page-down").css("display",'none');
				$(".pc9 .page-up").css("display",'block');
			}
		}
})
/** pc nav item>10 翻页 向前*/
$('.pc9 .menu .page-up').on('click', function () {
	$('.pc9 .menu .menu-item.hide').removeClass('hide')
	var menu_itemlength = $(".pc9 .menu .menu-item").length;
		var menu_item = $(".pc9 .menu .menu-item")
		for (var i=0;i < menu_itemlength;i++) { 
			if (i>9){
				menu_item[i].classList.add('hide')
				$(".pc9 .page-down").css("display",'block')
				$(".pc9 .page-up").css("display",'none')
			}
		}
})
/*********************** pc10 ***********************/
function adjustNavSizePc10() {
	let navSize = $(".pc10 .hearder__container").outerWidth()
	if (navSize > 768) {
		var menu_itemlength = $(".pc10 .menu .menu-item").length;
		var menu_item = $(".pc10 .menu .menu-item")
		for (var i=0;i < menu_itemlength;i++) {
			if (i>9){
				if ($(".pc10 .page-up").css("display") == 'none') {
					menu_item[i].classList.add('hide')
					$(".pc10 .page-down").css("display",'block')
					$(".pc10 .menu .menu-item>a").css("text-align",'left')
				}
			}
		}
	}
}
/** pc nav item>10 翻页 向后*/
$('.pc10 .menu .page-down').on('click', function () {
	$('.pc10 .menu .menu-item.hide').removeClass('hide')
	var menu_itemlength = $(".pc10 .menu .menu-item").length;
		var menu_item = $(".pc10 .menu .menu-item")
		for (var i=0;i < menu_itemlength;i++) { 
			if (i<(menu_itemlength-10)){
				menu_item[i].classList.add('hide');
				$(".pc10 .page-down").css("display",'none');
				$(".pc10 .page-up").css("display",'block');
			}
		}
})
/** pc nav item>10 翻页 向前*/
$('.pc10 .menu .page-up').on('click', function () {
	$('.pc10 .menu .menu-item.hide').removeClass('hide')
	var menu_itemlength = $(".pc10 .menu .menu-item").length;
		var menu_item = $(".pc10 .menu .menu-item")
		for (var i=0;i < menu_itemlength;i++) { 
			if (i>9){
				menu_item[i].classList.add('hide')
				$(".pc10 .page-down").css("display",'block')
				$(".pc10 .page-up").css("display",'none')
			}
		}
})