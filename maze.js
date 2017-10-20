window.onload = function () 
{
	  main();
};
	

	function main()	
	{
		//Exercise 1: Single Boundary Turns Red
		
		var boun1toredchange = document.getElementById("boundary1");
		boun1toredchange.onmouseover = function() 
		{
			this.setAttribute("outcome", "youlose");
		};
		
		//Exercise 2: All boundaries glow red on hover
		
		var allbounTochangered = document.querySelectorAll(".boundary");
		var m = 0;
			for (var e = 0; e < allbounTochangered.length; e++)
			{
				allbounTochangered[e].onmouseover = function()
				{
					for (var h = 0; h< allbounTochangered.length-1;h++)
					{
						allbounTochangered[h].setAttribute("class","boundary youlose");
					}
						m++;
						document.getElementById("status").innerHTML = "You Lose. Better Luck next Time.";
				};
			}	
			
			//Exercise 3: Alerts on successful completion of maze
			
		var win = document.getElementById("end");
		win.onmouseover = function()
		{
			if (m == 0)
			{
				window.alert("You Win");
				
			}
		};
	}