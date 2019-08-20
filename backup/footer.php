<?php if(!isset($_SESSION)){session_start();}
if (isset($_POST['name'])) {
	require './PHPMailerAutoload.php';
    
    function died($error) {
        // your error code can go here
        echo "Sorry, but in your contact form is an error.<br/>";
        echo $error."<br /><br />";
        echo "Please correct your errors.<br /><br />";
        die();
    }
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
    
        $name = clean_string($_POST['name']);
        $email = clean_string($_POST['email']);
        if (isset($_POST['tel'])) { $tel = clean_string($_POST['tel']); } else { $tel = '';}
        $text = clean_string($_POST['message']);
        $results = '';
    
    
    $error_message = '';
    
    if (!preg_match('/[\s\S]+/', $name)) {
        $error_message .= 'Please input a valid name.<br>';
    }
    if (!preg_match('/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/', $email)) {
        $error_message .= 'Please input a valid e-mail address.<br>';
    }
    if (!preg_match('/^\+?([0-9]+((\s[0-9]+)+)?)\s?$|^$/', $tel)) {
        $error_message .= 'Please input a valid telephone number.<br>';
    }
    if (!preg_match('/[\s\S]+/', $text)) {
        $error_message .= 'Please enter a valid message.<br>';
    }
	
	if(isset($_POST["captcha"]) && $_SESSION["code"]==$_POST["captcha"]){echo "";}
	else {$error_message .= 'Please enter a valid captcha code.<br>';}
	
    if(strlen($error_message) > 0) {
        died($error_message);
    } 
    
    $results = 'AGAMOVING CONTACT FORM CONTENTS<br>';
    $results .= 'Name: ' . $name . '<br>';
    $results .= 'E-mail: <a href="mailto:' . $email .'"> '. $email . '</a><br>';
	if($tel != "") {$results .= 'Telephone: <a href="tel:' . $tel . '">' . $tel . '</a><br>';}
    $results .= 'Message: ' . $text . '<br>';
    
    
    /* $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    //$headers .= "From: info@agamoving.cz\r\n";
	$headers .= "From: ".$email."\r\n";
	$headers .= 'Reply-To: ' . $email . "\r\n" .
	"X-Mailer: PHP/" . phpversion(); */
    $message = '<!DOCTYPE html><html><head><title>AGAMOVING.CZ -- Contact form message</title></head><body>' . $results . '</body></html>';
    //mail('armandguri46@gmail.com', 'AGAMOVING.CZ -- Contact form message' , $message, $headers);
	//mail('genci16@gmail.com', 'AGAMOVING.CZ -- Contact form message' , $message, $headers);
	
	$mail = new PHPMailer;

	$mail->isMail();

	$mail->From = clean_string($email);
	$mail->FromName = clean_string($name);
	//$mail->addAddress('genci16@gmail.com', clean_string($name));
	$mail->addAddress('armandguri46@gmail.com', 'Armand Guri');
	
	$mail->isHTML(true);
	$mail->Subject = 'AGAMOVING.CZ -- Contact form message';
	$mail->Body    = $results;
	//$mail->AltBody = $results;
    
    if($mail->send()){
		echo '<b>We thank you for contacting AGAMOVING!!!</b><br>';
		echo '<b>We will reply you as soon as possible.</b><br>';
	}
    
}else{
?>

<div id='footer'>

	<script>
	$(document).ready(function(){
		$("#captcha > button").eq(0).click(function(e) {
			$.ajax({
				method: "get",
				url: "captcha.php",
				contentType: "image/png",
				success: function(data) {
					$("#captcha > img").eq(0).attr("src","captcha.php");
				}
			});
			e.preventDefault();
		});
		
		$("#contact-form > form").eq(0).submit(function(e) {
				var contact_form_data = $(this).serialize();
				var name = match_text('#name', /[\s\S]+/);
				var email = match_text('#email', /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/i );
				var tel = match_text ('#tel', /^\+?([0-9]+((\s[0-9]+)+)?)\s?$|^$/);
				var message = match_text('#message' , /[\s\S]+/);
				var captcha = match_text("#captcha > input[type='text']:first", /^[\d]{5}$/)
				var mess = '';
				
				if (!name) {mess += 'Please fill in the name field \n';}
				if (!email) { mess += 'Please fill in the email field \n'; }
				if (!tel) { mess += 'Please fill in the telephone field \n'; }
				if (!message) { mess += 'Please fill in the message field \n'; }
				if (!captcha) { mess += 'Please fill in the captcha 5-number code \n'; }
				
				if (!name || !email || !message || !tel || !captcha) {
					alert(mess);return false;
				}
				$.ajax({
					type: "post",
					data: contact_form_data,
					url: "footer.php",
					dataType: "text",
					success: function(result) {
						$("#contact-form").append(result);
					},
					error: function(xhr) {
						   alert ("An error was found during form submission: " + xhr.statusText);
					   }
				});
				e.preventDefault();
		});
	});
	</script>
    <script>
        function match_text(object, regex) {
            if ($(object).val().match(regex)) {
                $(object).css({"border" : "2px solid green"});
                return true;
            }
            else {
                $(object).css({"border" : "2px solid red"});
                return false;
            }
        }
    </script>
    <div id="contact-form"> 
        <h2 class="header-footer">Contact us</h2>
        <p>To get a quote please contact us by phone or contact form below.</p>
        <b style="margin: 2px auto; display:block; text-align: left;" >
                <a href='tel:+420604219211'>+420 604 219 211</a>
        </b>
        <form name='contact-form' method="POST">
            <div style="position: relative; margin-top: 15px; padding: 5px 0">
            <table>
                <tr>
                    <td><input style='margin: 0' oninput="match_text( this , /[\s\S]+/)" placeholder="Name *" type="text" id="name" name="name" size="60"></td>
                <tr>
                    <td><input style='margin: 0' oninput="match_text( this , /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/i)" placeholder="E-mail *" type="text" id="email" name="email" size="60"></td>
                </tr>
                <tr>
                    <td><input style='margin: 0' oninput="match_text( this , /^\+?([0-9]+((\s[0-9]+)+)?)\s?$|^$/)" placeholder="Telephone ex.(+420123456789)" type="text" id="tel" name="tel" size="60"></td>
                </tr>
                <tr>
                    <td><textarea maxlength="2000" oninput="match_text( this , /[\s\S]+/)" style='margin: 0; transition: width linear 0ms;' placeholder="Message *" id="message" name="message" rows="5"></textarea></td>
                </tr>
				<tr>
                    <td>
						<div id="captcha">
							<input name="captcha" oninput="match_text( this , /^[\d]{5}$/)" type="text" style="width: 60%;display: inline-block;vertical-align: middle;">
							<img src="captcha.php" style="display: inline-block; vertical-align: middle;"/>
							<button style="font-size:11px; display: inline-block; vertical-align: middle;">Reload</button>
						</div>
					</td>
                </tr>
                <tr>
                    <td><input class='submit' type="submit" value="send" style="margin: 5px auto; width: 50px; " name="submit_contact_form"></td>
                </tr>
            </table>
            </div>
        </form>
    </div>
    
    <div id="cover-area"> 
        <h2 class="header-footer" style="float:right;">Areas we cover</h2>
        <p style="float: right; display: block; width: 90%">As a company located in the Czech Republic, we cover all Europe and we service worldwide.</p>
        <div id="world-map"></div>
            <div fb-xfbml-state="rendered" class="fb-like fb_edge_widget_with_comment fb_iframe_widget" data-share="true" data-show-faces="true" data-width="300" data-href="https://www.facebook.com/pages/AGA-Moving-and-Transport/121723821232644"><span style="height: 28px; width: 100%; display:block; text-align: right"><iframe src="https://www.facebook.com/plugins/like.php?api_key=113869198637480&amp;channel_url=https%3A%2F%2Fs-static.ak.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D28%23cb%3Df1a2797cf8529e%26domain%3Ddevelopers.facebook.com%26origin%3Dhttps%253A%252F%252Fdevelopers.facebook.com%252Ff131e3a9242b54c%26relation%3Dparent.parent&amp;colorscheme=light&amp;extended_social_context=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fpages%2FAGA-Moving-and-Transport%2F121723821232644&amp;layout=standard&amp;locale=en_US&amp;node_type=link&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;width=300" class="fb_ltr" title="Like this content on Facebook." style="border: medium none; overflow: hidden; height: 28px; width: 300px;" name="f18620d1c55cfc6" id="f1c87f4295a0708" scrolling="no"></iframe></span></div>
    </div>
    <div style="clear: both;"></div>
</div>
<?php } ?>