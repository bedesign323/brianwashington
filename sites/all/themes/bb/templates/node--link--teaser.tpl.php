<div class="link-teaser link">
	<?php if(isset($image)): ?><div class="image">	<?php echo $image; ?></div><?php endif; ?>
	<div class="header">
		<h2><?php print $link; ?></h2>
		<div class="post-date"><?php print $created; ?></div>
	</div>
	<div class="body"><?php print $body; ?></div>
	
	<div class="footer">
		<div class="tags">
			<h3>Tags:</h3>
			<?php echo $section; ?>
			<?php if(isset($tags)): ?><?php echo $tags; ?><?php endif; ?>
		</div>
		<div class="share">
			<h3><a href="#">Share</a></h3>
			<?php echo $service_links; ?>
		</div>
	</div>
</div>
