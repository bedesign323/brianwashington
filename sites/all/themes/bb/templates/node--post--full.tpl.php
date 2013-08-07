<div class="post-full post">
	<div class="header">
		<h2><?php print $title; ?></h2>
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

<div class="comments-holder">
		<div class="header">
			<h2>Comments</h2>
			<div class="add-comment-btn">+ Add a Comment</div>
		</div>
		<div class="comment-form-holder">
			<?php echo $comment_form; ?>
		</div>
		<div class="comments">
			<?php echo $comments; ?>
		</div>
	</div>