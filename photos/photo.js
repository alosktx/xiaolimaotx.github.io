<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>var render = function(page, data){
	var img = "";
	for (var i = 0; i < data.length; i++) {
		img += '<li><div class="img-box">' + '<a class="img-bg " rel="noopener" data-fancybox="images" href="http://phntsa9ll.bkt.clouddn.com/' + data[i] + '" target="_blank"></a>' + '<img lazy-src="http://phntsa9ll.bkt.clouddn.com/' + data[i] + '">'  + '</div></li>';
		//img += '<img src="http://yourqiniu.url.com/' + data[i] + '">';
	}
	$(".img-box-ul").append(img);
	$(".img-box-ul").lazyload();
	$("a[rel=example_group]").fancybox();
}