Drupal.behaviors.tour = {
	attach: function (context, settings) {
		if(!jQuery('body').hasClass('mobile')){
			
			var win = jQuery(window);
			var slide = jQuery('.slide');
			var total_items = slide.length;
			var win_w = win.width();
			var win_h = win.height();
			var trans_speed = 1000;
			var last_item, next_item, current_item = 0;
			var dir;
			jQuery.easing.def = "easeInOutQuad";


			jQuery.urlParam = function(name){
			    
			    	var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
			   	if(results !== null && results !== undefined){
			   		return results[1] || 0;
			 		}
			}
			
			
			jQuery('#last-slide').addClass('hide');

			// Process images
			jQuery(slide).each(function(index) {
			   var $this = jQuery(this);
			   $this.addClass('item-' + index).hide();
			  
			   if(index == 0){
			   	$this.fadeIn(trans_speed);
			   }
			});
			
			
			// gallery functions
			function nextItem(){
				dir = 'forward';
				last_item = current_item;
				current_item++;
				if(current_item == total_items){
					current_item = 0;
				}
				fadeItems();
			}
			
			function lastItem(){
				dir = 'back';
				last_item = current_item;
				current_item--;
				if(current_item == -1){
					current_item = total_items - 1;
				}
				fadeItems();
			}

			function setItem(index){
				last_item = current_item;
				current_item = index;
				fadeItems();
			}

			function fadeItems(){
				if(!jQuery('body').hasClass('mobile')){
					if(last_item != current_item){

						jQuery(' .item-' + current_item).fadeTo(trans_speed, 1);
						
						
						
						if(jQuery(' .item-' + current_item).next().hasClass('art-tour') && dir == 'forward'){
							jQuery(' .item-' + current_item).next().css('z-index', -1).delay(trans_speed / 2).fadeTo(trans_speed * 2, .25);
						}

						if(jQuery(' .item-' + last_item).next().hasClass('art-tour') && dir == 'back'){
							jQuery(' .item-' + last_item).next().fadeOut(trans_speed);
						}

						if(jQuery(' .item-' + last_item).hasClass('art-tour') && dir == 'back'){
							jQuery(' .item-' + last_item).fadeTo(trans_speed, .25);
						}else{
							jQuery(' .item-' + last_item).fadeOut(trans_speed);
						}
						

						//jQuery(' .item-' + current_item).children('caption').fadeIn(trans_speed);
						
						jQuery(' .caption').fadeOut(trans_speed);
						jQuery(' .actions').fadeOut(trans_speed);
						
						if(jQuery(' .item-' + current_item).hasClass('art-tour')){
							jQuery(' .item-' + current_item).css('z-index', 1)
							jQuery(' .caption').fadeIn(trans_speed);
							jQuery(' .actions').fadeIn(trans_speed);
						}
						
						
						slidePos();
					}			
				}
			}

			jQuery('#last-slide').click(function(){
				lastItem();
				 
				return false;
			});
			
			jQuery('#next-slide, #start-tour-btn').click(function(){
				nextItem();
				// clearInterval(slide_show);
				jQuery('#last-slide').removeClass('hide');
				return false;
			});	

			win.resize(function(){
				resize_stuff();
				slidePos();
			});

			function slidePos(){
				jQuery(slide).each(function(index) {
					var $this = jQuery(this);
					var x_pos = win_w * index;
					var targ_pos = current_item * win_w;
					//$this.css('left', x_pos);
					//jQuery('#main-inner').css({'margin-left' : -targ_pos});

					if($this.hasClass('art-tour')){
						var image = jQuery('.main-image', this);
						var image_img = jQuery('.main-image img', this);
						var max_height;
						var max_width;

						max_height = jQuery(window).height() - (200);
						if(max_height > 900){ max_height = 900;}
						
						max_width = win_w - 160;
						
						image.css('max-height', max_height);

						var s_h = image.height();
						var s_w = image.width();
						
						

						image.css({'margin-top' : -(s_h / 2), 'margin-left' : -(s_w / 2) });
						image_img.css({'max-height' : max_height});
					}

					if($this.hasClass('tour-slide')){
						var body = jQuery('.body', this);
						var s_h = body.height();
						var s_w = body.innerWidth();

						body.css({'margin-top' : -(s_h / 2), 'margin-left' : -(s_w / 2) });

					}

					
				});
			}

			jQuery('.show-details').click(function(){
				var overlay = jQuery(this).parent().parent().next();
				showDetails(overlay);

				return false;
			});

			jQuery('.show-details-img').click(function(){
				var overlay = jQuery(this).parent().next();
				showDetails(overlay);

				return false;
			});

			jQuery('.close-btn, .overlay').click(function(){
				hideDetails();

				return false;
			});

			function showDetails(details){
				details.fadeIn(500);
				hideControls();
			}

			function hideDetails(){
				jQuery('.overlay').fadeOut(500);
				showControls();
			}

			function showControls(){
				jQuery('#last-slide').removeClass('hide');
				jQuery('#next-slide').removeClass('hide');
			}

			function hideControls(){
				jQuery('#last-slide').addClass('hide');
				jQuery('#next-slide').addClass('hide');
			}

		

			function resize_stuff(){
				win_w = win.width();
				win_h = win.height();
				slide.css('min-width', win_w);
				slide.css('height', win_h);
				jQuery('#main').css('height', win_h);
			}

			resize_stuff();
			slidePos();
			clearInterval(slide_show);

			if(jQuery.urlParam('index')){
				setItem(jQuery.urlParam('index'));
			}

		}
	}
}