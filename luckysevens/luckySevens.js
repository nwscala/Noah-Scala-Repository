function clearErrors()
{
	for (var loopCounter = 0; loopCounter < document.forms["luckySevens"].elements.length; loopCounter++)
	{
		if(document.forms["luckySevens"].elements[loopCounter].parentElement.className.indexOf("has-") != -1)
		{
			document.forms["luckySevens"].elements[loopCounter].parentElement.className = "form-group";
		}
	}
}
function rollDice()
{
	return Math.floor(Math.random() * 6) + 1;
}
function validateItems()
{
	clearErrors();
	var betStart = document.forms["luckySevens"]["betStart"].value;
	var betCalc = parseInt(betStart);
	var highBetCalc = parseInt(betStart);
	var rollCount = 0;
	var highRollCount = 0;
	if (betStart == "" || isNaN(betStart))
	{
		alert("You must enter a starting bet.");
		document.forms["luckySevens"]["betStart"].parentElement.className = "form-group has-error";
		document.forms["luckySevens"]["betStart"].focus();
		return false;
	}
	if (parseInt(betStart) <= 0)
	{
		alert("The starting bet must be stritcly greater than zero.");
		document.forms["luckySevens"]["betStart"].parentElement.className = "form-group has-error";
		document.forms["luckySevens"]["betStart"].focus();
		return false;
	}
	while(parseInt(betCalc) > 0)
	{
		rollCount++;
		var dice1 = rollDice();
		var dice2 = rollDice();
		if (dice1 + dice2 == 7)
		{
			betCalc += 4;
		}
		else
		{
			betCalc -= 1;
		}
		if (betCalc >= highBetCalc)
		{
			highBetCalc = betCalc;
			highRollCount = rollCount;
		}
	}
	document.getElementById("resultsHeader").style.display = "block";
	document.getElementById("results").style.display = "block";
	document.getElementById("betStartReturn").innerText = betStart;
	document.getElementById("rollNumReturn").innerText = rollCount;
	document.getElementById("highReturn").innerText = highBetCalc;
	document.getElementById("highRollReturn").innerText = highRollCount;
	return false;
}