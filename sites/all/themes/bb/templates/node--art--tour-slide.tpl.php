<div class="art-tour slide">
	<div class="main-image">
		<a href="#" class="show-details-img"><?php print $main_image; ?></a>
		<div class="caption"><a href="#" class="show-details">&ldquo;<?php print $title; ?>&rdquo;</a></div>
		<div class="actions"><a href="#" class="show-details">view details</a></div>
	</div>
	
	<div class="overlay">
		<a href="#" id="close-overlay" class="close-btn">x</a>
	<div class="details">
		
		<h1><?php print $title; ?></h1>
		
		<div class="detail-image"><?php print $detail_image; ?></div>
		<div class="art-info"><?php print $size; ?> <span class="bull">&bull;</span> <?php print $medium; ?></div>
		<div class="body"><?php print $body; ?></div>
		<div class="btns-block">
			<div class="devider">&bull;&bull;&bull;</div>
			
			<a href="#" class="close-btn">close</a>
		</div>
	</div>
	</div>
</div>