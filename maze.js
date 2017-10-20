window.onload = function () {
	  main();
	};
	

	function main() 
	{
		var boun1redchange = document.getElementById("boundary1");
		boun1redchange.onmouseover = function() {
			this.setAttribute("outcome", "youlose");
		};