window.onload = function () 
{
	  main();
};
	

	function main()	
	{
		//Exercise 1: Single Boundary Turns Red
		
		var boun1ToRedChange = document.getElementById("boundary1");
		boun1redchange.onmouseover = function() 
		{
			this.setAttribute("outcome", "youlose");
		};
		
		//Exercise 2: All boundaries glow red on hover
		
		var allBounToChangeRed = document.querySelectorAll(".boundary");
	//	var e = 0;
	//	var h = 0;
		var m = 0;
			for (var e = 0; e < boundary.length; e++)
			{
				boundary[e].onmouseover = function()
				{
					for (var h = 0; h< boundary.length-1;h++)
					{
						boundary[h].setAttribute("class","boundary youlose");
					}
				}
			}
	}