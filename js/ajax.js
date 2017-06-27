/*	ajax.js
	Asynchrones updaten der Posts
*/
var lastTimestamp = 0;

//	Generiert einen neuen Post im Html-Dokument (main)
function createHtmlPostElement(post)
{

	var mainSection = document.createElement("section");
	
	// mainSection-Tag Attribute
	mainSection.id = "post" + post.pid;
	mainSection.className = "post bg";
				
	var figure = document.createElement("figure");	
	var img = document.createElement("img");
	
	// img-Tag Attribute
	img.width = "40";
	img.height = "40";
	img.src = "img/" + post.image;
	img.alt = post.user;
		
	var figcaption = document.createElement("figcaption");
	var postHeadline = document.createElement("h5");
	
	// figcaption Content
	postHeadline.appendChild(document.createTextNode(post.user));	
	figcaption.appendChild(postHeadline);
	figcaption.appendChild(document.createTextNode(post.time));
		
	figure.appendChild(img);
	figure.appendChild(figcaption);
	
	var article = document.createElement("article");
	
	// article Content
	article.innerHTML = post.text;
	
	var likeSection = document.createElement("section");
	
	// likeSection Attribute
	
	likeSection.className = "postinfo";
	
	var likeImage = document.createElement("img");
	likeImage.width = "20";
	likeImage.height = "20";
	
	if(post.isLiked === 1) {
		likeImage.src = "img/unlike.png";
		likeImage.alt = "Gef&auml;llt mir nicht mehr";
	} else {
		likeImage.src = "img/like.png";
		likeImage.alt = "Gef&auml;llt mir";
	}
	
	likeImage.value = likeImage.alt;
	
	likeSection.appendChild(likeImage);
	likeSection.append(" "+post.likes+" Person");
	
	if(post.likes != 1) {
		likeSection.append("en");
	}
	
	likeSection.append(" gefällt das");
	
	
	
	mainSection.appendChild(figure);
	mainSection.appendChild(article);
	mainSection.appendChild(likeSection);

	// Ins Dokument einfügen
	var postSection = document.getElementById("home");
	postSection.insertBefore(mainSection,postSection.firstChild);
}

function checkPosts() 
{
	try {
		req = new XMLHttpRequest();
	}
	catch (e) {
		req = null;
	}
	
	if(req !== null)
	{
		req.open("POST", "ajax.php?action=timestamp", true);
		req.send();
	}
	
	req.onreadystatechange = () => 
	{
		if(req.readyState === 4) 
		{
			if(req.status === 200) 
			{
				var data = JSON.parse(req.response);
													
				if(data.success === 1) 
				{
					if(lastTimestamp < data.time)
					{
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
		req.send();
	}

	req.onreadystatechange = () => {	
		if(req.readyState === 4) 
		{
			if(req.status === 200) 
			{
				var returnPosts = JSON.parse(req.response);
				
				if(returnPosts.success === 1)
				{
					var maxTimestamp = returnPosts.posts[0].time;
					
					for(let i = 0; i < returnPosts.posts.length; i++)
					{						
						if(returnPosts.posts[i].time > lastTimestamp)
						{						
							createHtmlPostElement(returnPosts.posts[i]);
							
							if(returnPosts.posts[i].time > maxTimestamp)
							{
								maxTimestamp = returnPosts.posts[i].time;
							}							
						}
					}
					
					lastTimestamp = maxTimestamp;
				}
			}
		}
	}
}
	
setInterval(checkPosts, 10000);