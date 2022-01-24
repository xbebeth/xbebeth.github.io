<!DOCTYPE html>
<html id="contact-page">
	<head>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<script type="text/javascript" src="js/script.js"></script>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
    	<meta http-equiv="imagetoolbar" content="no" />
    	<meta name="description" content="This is Montreal based teacher, graphic designer, and artist Elisabeth's portfolio, which includes lesson plans, graphic and web design, illustration work, photography and drawing projects.">
	    <meta name="keywords" content="design, art, drawing, digital, illustration, portfolio, eportfolio, Elisabeth, lighthouse, graphic designer, montreal, freelancing, lesson plan, teacher">
    	<meta name="author" content="Elisabeth">
    	<link rel="icon" href="img/favicon.ico" type="image/x-icon">
		<title>Elisabeth's portfolio</title>
	</head>
	<body> 
		<div id="desktop-nav">
			<a id="nav-title" href="index.html">Elisabeth's Portfolio</a>
			<div id="mobile-nav">
				<a href="about.html">About</a>
				<a href="designer.html">Designer</a>
				<a href="educator.html">Educator</a>
				<a href="artist.html">Artist</a>
				<a href="contact.html">Contact</a>
			</div>
			<div id="desktop-true-nav">
				<a href="about.html">About</a>
				<a href="designer.html">Designer</a>
				<a href="educator.html">Educator</a>
				<a href="artist.html">Artist</a>
				<a href="contact.html">Contact</a>
			</div>
			<a href="javascript:void(0);" class="icon" onClick="openNav()">
				<i class="fa fa-bars"></i>
			</a>
			<a class="lang-button" href="index.html">EN</a>
			<a class="lang-button" id="lang-FR" href="index.html">FR |</a>
		</div>
		<div class="left-side">
			<h3>Let's Chat!</h3>
			<h4>Fill in each section below</h3>
		</div>
		<div>
			<p>Send me a message</p>
			<form class ="contact-form" action="contactform.php" method="post">
				<input type ="text" name="name" placeholder="Your name">
				<input type ="text" name="mail" placeholder="Your email">
				<input type ="text" name="subject" placeholder="Subject of the message">
				<textarea name="message" placeholder="Write your message"></textarea>
				<button type="submit" name="submit">Send</button>
			</form>
		</div>
	</body>
	<footer>
		<p>©2022 ELISABETH GAMACHE-LAVOIE</p>
	</footer>
</html>