Drupal.behaviors.init_gallery = {
	attach: function (context, settings) {
		if(!jQuery('body').hasClass('mobile')){
			
			var items =  jQuery('.field-name-field-gallery-images .field-items .field-item');
			var total_items = items.length;
			var current_item = 0;
			var last_item = 0;
			var trans_speed = 800;
			var border = 50;
			
			jQuery('#controls').hide().delay(trans_speed / 2).fadeIn(trans_speed);
			
			// Process images
			jQuery(items).each(function(index) {
			   var $this = jQuery(this)
			   $this.addClass('item-' + index).hide();
			  
			   if(index == 0){
			   	$this.fadeIn(trans_speed);
			   }
			});
			
			
			// gallery functions
			function nextItem(){
				last_item = current_item;
				current_item++;
				if(current_item == total_items){
					current_item = 0;
				}
				fadeItems();
			}
			
			function lastItem(){
				last_item = current_item;
				current_item--;
				if(current_item == -1){
					current_item = total_items - 1;
				}
				fadeItems();
			}
			
	
			function fadeItems(){
				if(!jQuery('body').hasClass('mobile')){
					if(last_item != current_item){
						jQuery(' .item-' + current_item).fadeIn(trans_speed);
						jQuery(' .item-' + last_item).fadeOut(trans_speed);
					}			
				}
			}
			
			
			jQuery('.field-name-field-gallery-images .field-items .field-item').click(function(){
				nextItem();
				clearInterval(slide_show);
				return false;
			});
			
			jQuery('#controls .item-last').click(function(){
				lastItem();
				clearInterval(slide_show);
				return false;
			});
			
			jQuery('#controls .item-next').click(function(){
				nextItem();
				clearInterval(slide_show);
				return false;
			});	

			jQuery(window).resize(function(){
				resize_stuff();
			});

			function resize_stuff(){
				var targ_height = jQuery(window).height() - (border * 4);
				jQuery('.field-name-field-gallery-images').css('height', targ_height);
				jQuery('.field-name-field-gallery-images img').css('max-height', targ_height);
			}

			var slide_show = setInterval(nextItem, 5000);
			resize_stuff();
		}
	}
}