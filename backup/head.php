<head>
<?php if (isset($_GET['lang']) && $_GET['lang'] == "en") { ?>
	<title>:: AGA Moving :: </title>
	<meta http-equiv="Content-Language" content="EN"/>
        <meta name="description" content="Moving Company">
<?php } elseif ((isset($_GET['lang']) && $_GET['lang'] == "cz")) { ?>
	<title>:: AGA Moving CZ:: </title>
	<meta http-equiv="Content-Language" content="CZ"/>
        <meta name="description" content="Stěhovací firma">
<?php }else{ ?>
	<title>:: AGA Moving :: </title>
	<meta http-equiv="Content-Language" content="EN"/>
        <meta name="description" content="Moving Company">
<?php } ?>

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="keywords" content="moving, company, AGA, MOVING,AGAMOVING, international, Prague, Praha, Prag, Czech, Republic, stěhovani, stěhovaci, firma, společnost, relocation, relocations">
    <meta name="author" content="Genci" >

<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>

<link href="css/style.css" rel="stylesheet" type="text/css">
<link rel="shortcut icon" href="./favicon.ico">
<script>
$(document).ready(function(){   
  
                //show subnav on hover  
                $("#menu li").mouseenter(function() {  
                    $(this).find("ul").stop(true, true).slideDown(300);  
                });  
                          
                //hide submenus on exit  
                $("#menu li").mouseleave(function() {
                    $(this).find("ul").stop(true, true).delay(100).fadeOut(300);
                });   
                
                //$("#form_address_from").geocomplete();
                //$("#form_destination_address").geocomplete();
                
                $('#form_moving_datetime').datetimepicker({
                    lang : 'en',
                    timepicker : true,
                    format:'d.m.Y H:i',
                    mask : false,
                    minDate : '0',
					step : 15,
                    minTime: '07:00',
                    maxTime: '22:00',
					onChangeDateTime:function(dp,$input){
						if (!$input.val().match(/^\d\d\.\d\d\.\d{4}\s\d\d:\d\d$/)) {
							$input.css({"color":"red","border-color":"red"});
						} else {
							$input.css({"color":"green","border-color":"green"});
						}
					}
                });
    });
</script>
                                
<script type="text/javascript" src="js/jquery.fancybox.js"></script>
<script type="text/javascript" src="js/jquery.fancybox-buttons.js"></script>
<script type="text/javascript" src="js/jquery.fancybox-media.js"></script>
<script type="text/javascript" src="js/jquery.fancybox-thumbs.js"></script>
<link href="css/jquery.fancybox.css" rel="stylesheet" type="text/css">
<link href="css/jquery.fancybox-thumbs.css" rel="stylesheet" type="text/css">
<link href="css/jquery.fancybox-buttons.css" rel="stylesheet" type="text/css">



<link rel="stylesheet" type="text/css" href="css/jquery.datetimepicker.css"/>
<script src="js/jquery.datetimepicker.js"></script>
        <script>
            function shift_arrows(x) {
                if (x != 'order' && x != 'home' && x != 'packing_materials') {
                    var li = $('#menu > li');
                    var span = $('#menu li > span');
                    span[x].className = 'down-arrow-selected';
                    li[x].className = 'current';
                    li[x].style.backgroundColor = '#E91815';
                    li[x].getElementsByTagName('a')[0].style.color = 'white';
                }
            }
            
            function create_sitemap() {
                var page = '<?php if (isset($_GET['pg'])){echo $_GET['pg'];} ?>';
                var pg = page.replace("_"," ");
                var sitemap = $('#site_map > p')[0];
                var menu = $('#menu > li.current > a');
                if (menu.length > 0 && page != 'order') {
                    sitemap.innerHTML += " > <a href='" + menu[0].href + "'>" + menu[0].innerHTML + "</a>";
                    if ($('#menu > li.current > ul').length > 0) {
                        sitemap.innerHTML += " > <a href='<?php echo $_SERVER['REQUEST_URI']; ?>'>" + pg + "</a>" ;
                    }
                }
                else if (page == 'order') {
                    sitemap.innerHTML += " > <a href='index.php?pg=order'>Order form</a>";
                }
				else if (page != ''){
					var link = '<?php echo $_SERVER['REQUEST_URI']; ?>';
					sitemap.innerHTML += " > <a href='"+ link +"'>"+ pg + "</a>"; 
				}
            }
        </script>
        
        <script src="http://maps.googleapis.com/maps/api/js?sensor=false&amp;libraries=places&language=en"></script>
        <script src="js/jquery.geocomplete.js" type="text/javascript"></script>
        
        <script type="text/javascript">
            $(document).ready(function() {
                $(".fancybox").fancybox({
                    //maxWidth	: 800,
                    //maxHeight	: 600,
                    fitToView	: true,
                    //width		: '70%',
                    //height		: '70%',
                    autoSize	: true,
                    closeClick	: true,
                    openEffect	: 'elastic',
                    closeEffect	: 'elastic'
                    //helpers         : {
                            //title	: {
                                    //type: 'inside'
                            //},
                            //thumbs	: {
                                    //width	: 50,
                                    //height	: 50
                            //}
                    //}
                 });
             });
        </script>
        
        <?php

        $PRODUCTS = array(
            array('Small Box', 35, './images/materials/_DSC8159.JPG', 'box', '(33.5cm x 35cm x 27cm)'), 
            array('Medium Box', 45, './images/materials/medium_box.jpg', 'box', '(40cm x 40cm x 40cm)'), 
            array('Large Box', 50, './images/materials/_DSC8184.JPG', 'box', '(33.5cm x 55cm x 35cm)'),
			array('XL Box', 55, './images/materials/_DSC8175.JPG', 'box', '(40cm x 40cm x 60cm)'),
			array('XXL Box', 65, './images/materials/_DSC8175.JPG', 'box', '(73cm x 55cm x 46cm)'),
            array('Tape', 45, './images/materials/_DSC8499.JPG', 'roll', 'No Description'),
            array('Hanging Box', 200, './images/materials/wardrobe.jpeg', 'box', 'No Description'),
            array('Shrink wrap', 150, './images/materials/_DSC8403.JPG', 'roll', 'No Description'),
            array('Bubble wrap (meter)', 10, './images/materials/_DSC8425.JPG', 'meter', 'No Description'),
            array('Bubble wrap (pc)', 1000, './images/materials/_DSC8425.JPG', 'roll', '100 meters'),
            array('Paper', 550, './images/materials/_DSC8490.jpg', '10 kg', 'No Description')
            //array('Marking Pen', 15, './images/materials/_DSC8411.JPG', 'item', 'No Description')
            ); 

        ?>
</head>
