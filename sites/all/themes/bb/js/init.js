Drupal.behaviors.init = {
	attach: function (context, settings) {
		

		// SERVICE LINKS TOGGLE
		jQuery('.footer .share h3').click(function(){

			jQuery(this).next().slideToggle();
			return false;

		});

		// COMMENT FORM
		jQuery('.add-comment-btn').click(function(){
			jQuery('.comment-form-holder').slideToggle();
		});
			

		// MOBILE STUFF
		jQuery('.menu-toggle').click(function(){
			jQuery('#nav').stop(false, true).slideToggle();
		});

		jQuery(window).resize(function(){

			windowResized();
		});


		var theWindow        =jQuery(window),
	    $bg              = jQuery(".field-name-field-background-image img"),
	    aspectRatio      = $bg.width() / $bg.height();
		
		function windowResized(){
			
			var win_w = jQuery(window).width();
			var win_h = jQuery(window).height();

			if(win_w < 700){
				jQuery('body').addClass('mobile');
			}else{
				jQuery('body').removeClass('mobile');
			}

			if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
			    $bg
			    	.removeClass()
			    	.addClass('bgheight');
			} else {
			    $bg
			    	.removeClass()
			    	.addClass('bgwidth');
			}

			//console.log(win_w);
		}

		windowResized();
	}
}

Drupal.behaviors.intro = {
	attach: function (context, settings) {
		
		if(jQuery('body').hasClass('front')){
			jQuery('#logo').hide().fadeIn(3000);
			jQuery('h1').hide().delay(500).fadeIn(3000);
			jQuery('#enter').hide().delay(1000).fadeIn(3000);
			

		}

		var items =  jQuery('.front .images .image-holder');
		var total_items = items.length;
		var current_item = 0;
		var last_item = 0;
		var trans_speed = 3000;
		var zoom_speed = 13000;
		var border = 50;
		
		
		// Process images
		jQuery(items).each(function(index) {
		   var $this = jQuery(this)
		   $this.addClass('item-' + index).hide();
		  
		   if(index == 0){
		   	$this.delay(2000).fadeIn(trans_speed);
		   	jQuery('.image', this).css({'width' : '100%', 'height' : '100%', top : '0', left : '0'}).animate({'width' : '110%', 'height' : '110%', top : '-5%', left : '-5%'}, { duration: zoom_speed, easing : 'linear' });
		   }
		});
		
		
		// gallery functions
		function nextImage(){
			last_item = current_item;
			current_item++;
			if(current_item == total_items){
				current_item = 0;
			}
			fadeItems();
		}
		

		function fadeItems(){
			if(!jQuery('body').hasClass('mobile')){
				if(last_item != current_item){
					jQuery(' .item-' + current_item).fadeIn(trans_speed);
					jQuery(' .item-' + current_item + ' .image').css({'width' : '100%', 'height' : '100%', top : '0', left : '0'}).animate({'width' : '110%', 'height' : '110%', top : '-5%', left : '-5%'}, { duration: zoom_speed, easing : 'linear' });
					
					jQuery(' .item-' + last_item).fadeOut(trans_speed);
				}			
			}
		}
		var slide_show

		setTimeout(init_intro, 2000);

		function init_intro(){

			slide_show = setInterval(nextImage, 10000);
		}


	 }
}



/*


	// 	function introShow(){
			
	// 			var fade_speed = 3000;
	// 			var zoom_speed = 8000;
	// 			var image_delay = 3000;
				
	// 			jQuery('.image-1')
	// 			.delay(image_delay, "fader-1")
	// 			.queue("fader-1", function(next) {
	// 			    jQuery(this).animate({opacity: 1}, 
	// 			        {duration: fade_speed, queue: false, easing : 'linear'});
	// 			    next();
	// 			})
	// 			.dequeue("fader-1")
	// 			.delay(image_delay).animate({'width' : '110%', 'height' : '110%', top : '-5%', left : '-5%'}, { duration: zoom_speed, easing : 'linear' });

	// 			jQuery('.image-2')
	// 			.delay(8000, "fader-2")
	// 			.queue("fader-2", function(next) {
	// 			    jQuery(this).animate({opacity: 1}, 
	// 			        {duration: fade_speed, queue: false, easing : 'linear'});
	// 			    next();
	// 			})
	// 			.dequeue("fader-2")
	// 			.delay(8000).animate({'width' : '110%', 'height' : '110%', top : '-5%', left : '-5%'}, { duration: zoom_speed, easing : 'linear' });

	// 			jQuery('.image-3')
	// 			.delay(16000, "fader-3")
	// 			.queue("fader-3", function(next) {
	// 			    jQuery(this).animate({opacity: 1}, 
	// 			        {duration: fade_speed, queue: false, easing : 'linear'});
	// 			    next();
	// 			})
	// 			.dequeue("fader-3")
	// 			.delay(16000).animate({'width' : '110%', 'height' : '110%', top : '-5%', left : '-5%'}, { duration: zoom_speed, easing : 'linear' });

				
	// 		}


Drupal.behaviors.pinit = {
	attach: function (context, settings) {
			
			jQuery('.image-post_full').after('<div class="hover-pinterest"><a class="pin-it-link" target="_blank"></a></div>').parent().addClass('image-holder');
			jQuery('.image-holder').hover(
				function() {

					var pinit = jQuery('.hover-pinterest', this);
					var pinita = jQuery('.hover-pinterest a', this);
					var image = jQuery('.image-post_full', this);
					var imgurl = image.attr('src');
					var encodedurl = encodeURIComponent(imgurl);
					var pathname = jQuery(location).attr('href');
					var url = encodeURIComponent(pathname);
					var desc = encodeURIComponent('');
					var pinhref = 'http://pinterest.com/pin/create/button/?url=';
					pinhref += url;
					pinhref += '&media=';
					pinhref += encodedurl;
					pinhref += '&description=';
					pinhref += desc;
					pinita.attr('href', pinhref);
					
					pinit.css('display','block');
					
				},function() {
					//var pinit = jQuery(this).next();
					jQuery('.hover-pinterest', this).css('display','none');
				});
	
	}
}
*/
