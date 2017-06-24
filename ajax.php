<?php
require 'php/database.req.php';
require 'php/functions.req.php';

$db = new DatabaseWrapper();
session_start();

/* Ist der Benutzer nicht angemeldet, gibt es keine Ausgabe */
if(!ses_isLoggedIn()) {
	echo json_encode(array('success' => 0));
	exit;
}

$action = getGet('action');
$error = "";

if($action == "timestamp") {
	$time = $db->getMaxPosttime();
	
	echo json_encode(array('success' => 1, 'time' => $time));
} else if($action == "posts") {
	$postdata = $db->getPosts();
	$posts = array();
	
	foreach($postdata as $post) {	
		$posts[] = array('user' => $post['User'], 'image' => $post['Image'], 'time' => $post['Timestamp'], 'text' => $post['Text']);
	}
	
	$output = array('success' => 1, 'posts' => $posts);
	
	echo json_encode(array('success' => 1, 'posts' => $posts));
} else if($action == "addpost") {
	$id = ses_getId();
	$rawtext = getPost('text');
	$text = htmlentities($rawtext, ENT_HTML5);
	
	if(strlen($rawtext) <= 180 && strlen($rawtext) > 0) {
		$db->createPost($id, $text);
		echo json_encode(array('success' => 1));
	} else {
		echo json_encode(array('success' => 0));
	}
}


?>
