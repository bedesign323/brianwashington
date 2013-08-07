<div id="wrapper">
	
	<div id="header">
		<div id="header-inner" class="clearfix">
			<div id="logo"><a href="/welcome"><span>The Artwork of</span>Brian Washington </a></div>
			<div class="menu-toggle">Menu</div>
			<div class="exit-tour"><a href="/continual-struggle/overview">Exit Tour</a></div>
			<div id="nav"><?php print render($page['nav_main']); ?></div> 
		</div>
	</div>
	
	<div id="main-content">
		
		<div id="main">
			<div id="main-inner">
				<div id="content">
					
					
					<?php echo render($page['content']); ?>
				</div>
			</div>
		</div>
		
	</div>

</div>

<div id="footer">
	<div id="footer-inner">
		<div id="copy">&copy; <?php echo date('Y'); ?> Brian Washington. Don't steal. It's not nice.</div>
	</div>
</div>
