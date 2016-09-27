function sprawdz()
{
	var element = document.getElementById(pole1);
	if(pole1.value == '' || pole1.value == 'Start typing here...' || pole1.value == "Where is Your note? :D")
	{
		var zmiana = document.getElementById("pole1");
		zmiana.setAttribute('style', 'color:red; border-color:red;');
		var zmiana1 = document.getElementById("przycisk1");
		zmiana1.setAttribute('style', 'background:red;');
		document.getElementById("pole1").innerHTML = "Where is Your note? :D";
	}
	else
	{
		window.location.href = "dziekuje.html";
	}
	
}
