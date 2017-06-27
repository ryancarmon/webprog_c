<!DOCTYPE html>
<html>
  <head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="UTF-8">
	<title>THwitter - Timeline</title>
	<link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet"> 
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/home.css">
	<link rel="stylesheet" type="text/css" href="css/scheme.css">
	<script type='text/javascript' language='javascript' src="js/post.js"></script>
	<script type='text/javascript' language='javascript' src="js/ajax.js"></script>
  </head>
  <body>
	<script type='text/javascript'>
		lastTimestamp = <?php echo $db->getMaxPosttime(); ?>;
	</script>
  
	<nav>
		<ul>
			<li class="left">
				<a href="index.php">THwitter</a>
			</li>
			<li class="right">
				<a href="logout.php">Logout</a>
			</li>
			<li class="right">
				<a href="javascript:showModal();">Beitrag verfassen</a>
			</li>
		</ul>
	</nav>
	
	<dialog id="postModal" class="modal">
		<div class="modal-content">
			<section class="modal-header">
				<span class="close" onclick="closeModal()">&times;</span>
				<h2>Beitrag verfassen</h2>
			</section>
			<section class="modal-body">
				<!-- <form onsubmit="return postValid()" method="POST">	rauswerfen? -->				
					<input type="hidden" name="action" value="post">
					<textarea id="postText" name="text" placeholder="..."></textarea>
					<input id="postBtn" class="button" type="Submit" value="Posten" onclick="checkAndSavePost()">
				<!-- </form> rauswerfen?	-->
			</section>
		</div>
	</dialog>
	
	<main>
		<section id="home">
		  <?php
				foreach($posts as $post) {
					displayPost($post);
				}
			?>
		</section>
	</main>
	<footer>
		<span class="left">THwitter | <a href="#">Impressum</a></span>
		<span class="right">&copy; 2017</span>
	</footer>
  </body>
</html>
