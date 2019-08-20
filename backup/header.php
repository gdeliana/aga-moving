<div id='header'>
    <a href="index.php"><div id='logo' title="Go to homepage"> </div></a>

		<ul id='menu'>
                    <a href="index.php?pg=order" style='display: block; position: absolute; width: 160px; right: 10px; top: -80px; color: white;' class="order_button">Book online now</a>
                    <li>
                        <a href="#">Services</a>
                        <span class="down-arrow"></span>
                        <ul>
                             <li>
                                 <a href="index.php?pg=Packing_and_Unpacking">
                                     Packing & Unpacking
                                 </a>
                             </li>
                             <li>
                                 <a href="index.php?pg=Storage_service">
                                     Storage
                                 </a>
                             </li>
                        </ul>
                    </li>
					<li>
                        <a href="index.php?pg=Prices">
                            Prices
                        </a>
                        <span class="down-arrow"></span>
                    </li>
                    <li>
                        <a href="index.php?pg=About_us">
                            About Us
                        </a>
                        <span class="down-arrow"></span>
                    </li>
                    <li>
                        <a href="index.php?pg=Picture_Gallery">
                            Picture Gallery
                        </a>
                        <span class="down-arrow"></span>
                    </li>
                    <li>
                        <a href="index.php?pg=Testimonials">
                            Testimonials
                        </a>
                        <span class="down-arrow"></span>
                    </li>
					<div style="clear: both;"></div>
					
		</ul>
		<script>
		    $(document).ready(function() {
				$('#menu > li').bind( 'mouseenter', function() {
                    $(this).find(".down-arrow").css("opacity","1");
                });
                $('#menu > li').bind( 'mouseleave', function() {
                    $(this).find(".down-arrow").css("opacity","0");
                });
            });
		</script>
        	<div style="clear: both;"></div>
                <div id="site_map">
                    <p style="margin: 5px 2px 0 0">
                        Site location: <a href="index.php">Home</a>
                    </p>
                </div>
</div>