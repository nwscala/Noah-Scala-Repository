function clearErrors()
{
	for (var loopCounter = 0; loopCounter < document.forms["contactForm"].elements.length; loopCounter++)
	{
		if(document.forms["contactForm"].elements[loopCounter].parentElement.className.indexOf("has-") != -1)
		{
			document.forms["contactForm"].elements[loopCounter].parentElement.classList.remove("has-error");
		}
	}
}
function clearFocus()
{
	for (var loopCounter = 0; loopCounter < document.forms["contactForm"].elements.length; loopCounter++)
	{
		if(document.forms["contactForm"].elements[loopCounter].focus())
		{
			document.forms["contactForm"].elements[loopCounter].blur();
		}
	}
}
function validateItems()
{
	clearErrors();
	var name = document.forms["contactForm"]["name"].value;
	var email = document.forms["contactForm"]["email"].value;
	var phone = document.forms["contactForm"]["phone"].value;
	var dayContactBoxes = document.getElementsByName("dayContact");
	var isChecked = false;
	if (name == "")
	{
		alert("You must fill in your name.");
		document.forms["contactForm"]["name"].parentElement.classList.add("has-error");		
		document.forms["contactForm"]["name"].focus();
		return false;
	}
	if (email == "")
	{
		alert("You must fill in your email address.");
		document.forms["contactForm"]["email"].parentElement.classList.add("has-error");	
		document.forms["contactForm"]["email"].focus();
		return false;
	}
	if (phone == "" || isNaN(phone))
	{
		alert("You must fill in your phone number.");
		document.forms["contactForm"]["phone"].parentElement.classList.add("has-error");	
		document.forms["contactForm"]["phone"].focus();
		return false;
	}
	for (var i = 0; i < dayContactBoxes.length; i++)
	{
		if (dayContactBoxes[i].checked)
		{
			isChecked = true;
		}
	}
	if (isChecked == false)
	{
		alert("You must fill in at least one checkbox.");
		return false;
	}
	return false;
}