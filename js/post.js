/*	post.js
	Zum öffnen des Modal und validieren des Posttextes
*/

function showModal()
{
	var modal = document.getElementById("postModal");
	modal.style.display = "block";
}

function closeModal() 
{	
	var modal = document.getElementById("postModal");

	modal.style.display = "none";
}

function postValid()
{
	var text = document.getElementById("postText");
	
	if(text.value === "")
	{
		alert("Es wurde kein Text eingegeben!");
		text.style.borderColor = "red";
		return false;
	}	
	else
	{
		if(text.value.length > 180)
		{
			alert("Text ist zu lang.")
			text.style.borderColor = "red";
			return false;
		}
		else
		{
			return true;
		}
	}
}

function checkAndSavePost() 
{	
	if(postValid()) 
	{
		var postText = document.getElementById("postText");
		var reqText = "text=" + postText.value;
		
		try{
			var req = new XMLHttpRequest();
		}
		catch(e){
			req = null;
		}
		
		if(req !== null)
		{	
			req.open("POST", "ajax.php?action=addpost", true);
			req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			req.send(reqText);
		}
		
		req.onreadystatechange = () => {
			if(req.readyState === 4)
			{
				if(req.status === 200)
				{	
					var returnReq = JSON.parse(req.response);
					
					
					if(returnReq.success === 1)
					{
						refreshPosts();
						closeModal(); 					
					}
					else
					{
						alert("Post könnte nicht gespeichert werden!");
						closeModal();
					}
				}
			}
		}
	}
}

function likeClick(id) {
	document.location.href = 'index.php?action=like&pid='+id;
}