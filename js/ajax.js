/*	ajax.js
	Asynchrones updaten der Posts
*/
var lastTimestamp = 0;
var req;
var posts;

function checkPosts() {
	//Abfrage AJAX ajax.php?action=timestamp
	//Vergleich mit lastTimestamp
	//lastTimestamp größer => noop
	//lastTimestamp kleiner => ajax.php?action=posts
	//einfügen neuester posts oben
	//last timestamp aktualisieren
	
	var req = XMLHttpRequest();
	req.open("POST", "ajax.php?action=timestamp", true);
	req.onreadystatechange = () => {
		if(req.readyState === 4) {
			if(req.status === 200) {
				var data = JSON.parse(req.response);
				
				if(data.success ) {
					if(data.timestamp > lastTimestamp) {
						refreshPosts();
					}
				}	
			}
		}
	}
}



function refreshPosts()
{
	try {
		req = new XMLHttpRequest();
	}
	catch (e) {
		req = null;
	}
	
	if(req !== null)
	{
		req.open("POST", "ajax.php?action=posts", true);
	}

	req.onreadystatechange = () => {
		if(req.readyState === 4) {
			if(req.status === 200) {
			posts = JSON.parse(req.response);
			
			alert(posts);
			
			for(i = 0; i< posts.length;i++)
			{	
				if(posts[i].time > lastTimestamp)
				{
					
				}
			}
			}
		}
	}
	
	req.send();
}

//setInterval(refeshPosts, 10000);