window.onload = function () 
{
	  main();
};
	

	function main()	
	{
		//Exercise 1: Single Boundary Turns Red
		
		var boun1redchange = document.getElementById("boundary1");
		boun1redchange.onmouseover = function() 
		{
			this.setAttribute("outcome", "youlose");
		};
	}