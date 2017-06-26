/*	ajax.js
	Asynchrones updaten der Posts
*/
var lastTimestamp = 0;

window.onload = function () {
	var Timestamp = <?php echo ajax.php?action=timestamp; ?>;
	lastTimestamp = Timestamp.time;
}

function refeshPosts()
{
	try {
		var req = new XMLHttpRequest();
	}
	catch (e) {
		req = null;
	}
	
	if(req !== null)
	{
		req.open("POST", "http://ryan-carmon.de/wp_c/ajax.php?action=posts", true);
	}

	req.onreadystatechange = () => {
		if(req.readyState === 4 && req.status ==== 200)
		{
			let posts = JSON.parse(req.response);
			
			for(i = 0; i< posts.length;i++)
			{	
				if(posts[i].time > lastTimestamp)
				{
					
				}
			}
		}
	}
}

setInterval(refeshPosts, 10000);