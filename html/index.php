<!DOCTYPE html>
<html>
  <head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="UTF-8">
	<title>THwitter</title>
	<link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet"> 
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/index.css">
	<link rel="stylesheet" type="text/css" href="css/scheme.css">
	<script type='text/javascript' language='javascript' src="js/login.js"></script>
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
			<li class="right">
				<a href="register.php">Registrieren</a>
			</li>
		</ul>
	</nav>
	<main>
		<aside>	
		  <section id="login" class="bg">
		    <h3>Login</h3> 
		    <form name="loginForm" action="login.php" onsubmit="return valid()" method="POST">
			  <input type="hidden" name="action" value="login">
			  Benutzername:<br>
			  <input class="text" type="Text" name="user" placeholder="Benutzername">
			  Passwort:<br>
			  <input class="text" type="Password" name="pass" placeholder="Passwort">
			  <br>
			  <a class="button urlbutton" href="register.php">Registrieren</a>
			  <input class="button" type="Submit" value="Login">
		    </form>
		  </section>
		</aside>
		<section id="promo">
		  <h2>THwitter verbindet Studenten!</h2>
		  <article>
			<p>
				Wie der Name schon sagt ist THwitter seit kurzer Zeit die offizielle Plattform unserer Hochschule,
				bei der die Studenten auch fakultätsübergreifend in Verbindung bleiben können.
			</p>
		  </article>
		</section>
	</main>
	<footer>
		<span class="left">THwitter | <a href="#">Impressum</a></span>
		<span class="right">&copy; 2017</span>
	</footer>
  </body>
</html>
