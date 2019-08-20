<?php ob_start(); session_start(); ?>
<?php

            if (isset($_GET['pg'])) {
                $pg1 = htmlspecialchars($_GET['pg']);
                if ( $pg1 == 'Packing_and_Unpacking' || $pg1 == 'Moving_service' || $pg1 == 'Storage_service') {
                    $menu_id = 0;
                }
				elseif ($pg1 == 'Prices') {
                    $menu_id = 1;
                }
                elseif ($pg1 == 'About_us') {
                    $menu_id = 2;
                }
                elseif ($pg1 == 'Picture_Gallery') {
                    $menu_id = 3;
                }
                elseif ($pg1 == 'Testimonials') {
                    $menu_id = 4;
                }
                else {$menu_id = $pg1;}
                
            }
            else {
                $menu_id = 'home';
            }
			//sdsx

?>
	<?php
            
           if(isset($_GET['lang']))
                {
                $lang = htmlspecialchars($_GET['lang']);

                // register the session and set the cookie
                $_SESSION['lang'] = $lang;

                setcookie("lang", $lang, time() + (3600 * 24 * 30));
                }
                else if(isSet($_SESSION['lang']))
                {
                $lang = $_SESSION['lang'];
                }
                else if(isSet($_COOKIE['lang']))
                {
                $lang = $_COOKIE['lang'];
                }
                else
                {
                $lang = 'en';
                }
        ?>
<!DOCTYPE html>
<html>
	<?php include_once 'head.php' ; ?>
<body onload="shift_arrows('<?php echo $menu_id; ?>');create_sitemap()">
<div id="wrap">
	<?php include_once 'header.php' ; ?>
	
	
    <div class="border-up"></div>
	<div id="content">
		<?php
                    $content_folder = './content/';
                    
                    if (isset($_GET['pg'])) {
                        include_once $content_folder . htmlspecialchars($_GET['pg']) . '.php';
                    }
                    else {
                        include_once $content_folder . 'home' . '.php';
                    }
                ?>
	</div>
	<div class="border-down"></div>
	

	<?php include_once 'footer.php' ?>
	
</div>


</body>

</html>