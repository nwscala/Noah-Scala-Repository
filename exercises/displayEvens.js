function clearErrors()
{
	for (var loopCounter = 0; loopCounter < document.forms["formEven"].elements.length; loopCounter++)
	{
		if(document.forms["formEven"].elements[loopCounter].parentElement.className.indexOf("has-") != -1)
		{
			document.forms["formEven"].elements[loopCounter].parentElement.className = "form-group";
		}
	}
}
function validateItems()
{
	clearErrors();
	document.getElementById("result").innerText = "";
	var staNum = document.forms["formEven"]["staNum"].value;
	var endNum = document.forms["formEven"]["endNum"].value;
	var stpNum = document.forms["formEven"]["stpNum"].value;
	var resultText = "";
	var midNum = staNum;
	if (staNum == "" || isNaN(staNum))
	{
		alert("You must fill in a starting number.");
		document.forms["formEven"]["staNum"].parentElement.className = "form-group has-error";
		document.forms["formEven"]["staNum"].focus();
		return false;
	}
	if (endNum == "" || isNaN(endNum))
	{
		alert("You must fill in an ending number.");
		document.forms["formEven"]["endNum"].parentElement.className = "form-group has-error";
		document.forms["formEven"]["endNum"].focus();
		return false;
	}
	else if (parseInt(endNum) <= parseInt(staNum))
	{
		alert("The ending number must be strictly greater than the starting number.");
		document.forms["formEven"]["endNum"].parentElement.className = "form-group has-error";
		document.forms["formEven"]["endNum"].focus();
		return false;
	}
	if (stpNum == "" || isNaN(stpNum))
	{
		alert("You must fill in a stepping number.");
		document.forms["formEven"]["stpNum"].parentElement.className = "form-group has-error";
		document.forms["formEven"]["stpNum"].focus();
		return false;
	}
	else if (parseInt(stpNum) <= 0)
	{
		alert("The stepping number must be strictly positive.");
		document.forms["formEven"]["stpNum"].parentElement.className = "form-group has-error";
		document.forms["formEven"]["stpNum"].focus();
		return false;
	}
	while (parseInt(midNum) <= parseInt(endNum)) 
	{
		if (parseInt(midNum) % 2 == 0)
		{
			document.getElementById("result").innerText += (midNum+"\n");
		}
		midNum = parseInt(midNum) + parseInt(stpNum);
	}
	document.getElementById("resultPreamble").style.display = "block";
	document.getElementById("result").style.display = "block";
	document.getElementById("staNumReturn").innerText = staNum;
	document.getElementById("endNumReturn").innerText = endNum;
	document.getElementById("stpNumReturn").innerText = stpNum;
	return false;
}