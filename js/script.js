$(document).ready(function() {
	var currentIndex = 0;
	var imageCount = $('.carousel-images img').length;
	var carouselInterval = 3000; // 图片切换间隔，单位为毫秒

	const scrollAmount = 200; // 滚动距离，根据需要调整
	const minMargin = -($('.card-wrapper').width() - $('.scroll-container').width());
	const maxMargin = 0;

	// 向左滚动
	$('.scroll-left').click(function() {
		const currentMargin = parseInt($('.card-wrapper').css('marginLeft'), 10);
		const newMargin = Math.min(currentMargin + scrollAmount, maxMargin);
		$('.card-wrapper').animate({
			marginLeft: newMargin
		}, 500); // 500ms 动画时间，根据需要调整
	});

	// 向右滚动
	$('.scroll-right').click(function() {
		const currentMargin = parseInt($('.card-wrapper').css('marginLeft'), 10);
		const newMargin = Math.max(currentMargin - scrollAmount, minMargin);
		$('.card-wrapper').animate({
			marginLeft: newMargin
		}, 500); // 500ms 动画时间，根据需要调整
	});

	function moveToNextImage() {
		currentIndex++;
		if (currentIndex >= imageCount) {
			currentIndex = 0;
		}
		updateCarousel();
	}

	function updateCarousel() {
		var translateX = -currentIndex * 100;
		$('.carousel-images').css('transform', 'translateX(' + translateX + '%)');
	}

	setInterval(moveToNextImage, carouselInterval);
});

$(document).ready(function() {
	var currentIndex = 0;
	var imageCount = $('.carousel-images img').length;
	var carouselInterval = 3000; // 图片切换间隔，单位为毫秒

	function moveToNextImage() {
		currentIndex++;
		if (currentIndex >= imageCount) {
			currentIndex = 0;
		}
		updateCarousel();
		updateRectangles();
	}

	function updateCarousel() {
		var translateX = -currentIndex * 100;
		$('.carousel-images').css('transform', 'translateX(' + translateX + '%)');
	}

	function updateRectangles() {
		$('.rectangle').css('background-color', '#fff');
		$('.rectangle[data-index="' + currentIndex + '"]').css('background-color', '#11367c');
	}

	// 初始化矩形颜色
	updateRectangles();

	setInterval(moveToNextImage, carouselInterval);
});