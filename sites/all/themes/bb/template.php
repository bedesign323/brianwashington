<?

/** 
 * @file
 * template.php for Gallery Base theme.
 * 
 * Implements preprocess and hook alter functions in this file.
 */
 
 
/**
 * Preprocess functions for page.tpl.php.
 */
function bb_preprocess_page(&$vars){

}
 

/**
 * Preprocess functions for node.tpl.php.
 */
 
function bb_preprocess_node(&$vars){
	//$detect = mobile_detect_get_object();
	//$is_mobile = $detect->isMobile();
	//$is_tablet = $detect->isTablet();

	$node = $vars['node'];
	$url = $vars['node_url'];
	
	// Add general theme suggestions for all content types and view modes
	$vars['theme_hook_suggestions'][] = 'node__' . $vars['type'] . '__' . $vars['view_mode'];

	// BLOG POST ====================================================
	if($vars['type'] == 'post'){
		$vars['body'] =  render($vars['content']['body']);
		$vars['created'] = format_date($vars['created'], 'custom', "n/j/y");
		$vars['section'] =  render($vars['content']['field_site_section']);
		$vars['tags'] =  render($vars['content']['field_tags']);
		$vars['service_links'] =  render($vars['content']['service_links']);

		$vars['comments'] = render($vars['content']['comments']['comments']);
		$vars['content']['comments']['comment_form']['actions']['submit']['#value'] = t('submit comment');
		$vars['comment_form'] = render($vars['content']['comments']['comment_form']);
		
		if($vars['view_mode'] == 'teaser'){
			$vars['title'] = l($vars['title'], $url);
		}

		//kpr($vars);
	}

	// ART ====================================================
	if($vars['type'] == 'art'){
		$vars['body'] =  render($vars['content']['body']);
		$vars['size'] =  render($vars['content']['field_art_size']);
		$vars['medium'] =  render($vars['content']['field_art_medium']);
		$vars['main_image'] =  render($vars['content']['field_art_main_image']);
		$vars['detail_image'] = render_image($vars['field_art_main_image'][0]['uri'], 'art_details', '');

		if($vars['view_mode'] == 'teaser'){
			$vars['title'] = l($vars['title'], $url);
		}

		//kpr($vars);
	}

	// TOUR SLIDE ====================================================
	if($vars['type'] == 'tour_slide'){
		$vars['body'] =  render($vars['content']['body']);
		
	}

	// TOUR ====================================================
	if($vars['type'] == 'guided_tour'){
		$vars['slides'] =  render($vars['content']['field_tour_slides']);
		drupal_add_js(path_to_theme() . '/js/jquery.easing.js');
		drupal_add_js(path_to_theme() . '/js/tour.js');
	//	kpr($vars);
		
	}

}




// COMMENT
function bb_preprocess_comment(&$vars){
	$vars['website'] = render($vars['content']['field_comment_website']);
	$vars['body'] = render($vars['content']['comment_body']);
}


// FORM ALTER
function bb_form_alter(&$form, &$form_state, $form_id) {
  if ($form_id == 'search_block_form') {
    //$form['search_block_form']['#title'] = t('Search'); // Change the text on the label element
    //$form['search_block_form']['#title_display'] = 'invisible'; // Toggle label visibilty
    //$form['search_block_form']['#size'] = 40;  // define size of the textfield
    $form['search_block_form']['#default_value'] = t('Search'); // Set a default value for the textfield
    //$form['actions']['submit']['#value'] = t('GO!'); // Change the text on the submit button
    $form['actions']['submit'] = array('#type' => 'image_button', '#src' => base_path() . path_to_theme() . '/images/search_btn.png');

    // Add extra attributes to the text box
    $form['search_block_form']['#attributes']['onblur'] = "if (this.value == '') {this.value = 'Search';}";
    $form['search_block_form']['#attributes']['onfocus'] = "if (this.value == 'Search') {this.value = '';}";
    // Prevent user from searching the default text
    //$form['#attributes']['onsubmit'] = "if(this.search_block_form.value=='Search'){ alert('Please enter a search'); return false; }";

    // Alternative (HTML5) placeholder attribute instead of using the javascript
    $form['search_block_form']['#attributes']['placeholder'] = t('Search');
  }
} 

// Renders image with a given image style
function render_image($path, $style = 'default', $alt){
	$image_style = array( 'style_name' => $style, 'path' => $path, 'alt' => $alt);
	return theme('image_style', $image_style);
};


