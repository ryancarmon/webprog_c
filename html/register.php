<!DOCTYPE html>
<html>
  <head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="UTF-8">
	<title>THwitter - Registrierung</title>
	<link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet"> 
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/register.css">
	<link rel="stylesheet" type="text/css" href="css/scheme.css">
	<script type='text/javascript' language='javascript' src="js/register.js"></script>
  </head>
  <body>
	<nav>
		<ul>
			<li class="left">
				<a href="index.php">THwitter</a>
			</li>
			<li class="right">
				<a href="login.php">Login</a>
			</li>
		</ul>
	</nav>
	<main>	
	  <section id="register" class="bg">
		<h3>Registrierung</h3>	
		<section id="error">
				<?php echo $error;?>
		</section>
		<form name="registerForm" onsubmit="return valid()" method="POST">
			<input type="hidden" name="action" value="register">
			Benutzername:<br>
			<input class="text" type="Text" name="user" placeholder="Benutzername">
			E-Mail-Adresse:<br>
			<input class="text" type="Text" name="mail" placeholder="E-Mail Adresse">
			Passwort:<br>
			<input class="text" type="Password" name="pass" placeholder="Passwort">
			Passwort bestätigen:<br>
			<input class="text" type="Password" name="pass_confirm" placeholder="Passwort bestätigen">
			<br>
			<input class="button" type="Reset" value="Zurücksetzen">
			<input class="button" type="Submit" value="Registrieren">
		</form>
		<p>
			Sie haben schon ein Konto? <a href="login.php">Zur Anmeldung</a>
		</p>
	  </section>
	</main>
	<footer>
		<span class="left">THwitter | <a href="#">Impressum</a></span>
		<span class="right">&copy; 2017</span>
	</footer>
  </body>
</html>
