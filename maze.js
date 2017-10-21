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
						document.getElementById("status").innerHTML = "You Lose. Better Luck Next Time.";
					}
						m++;
				};	
			}	
			
			//Exercise 3: Alerts on successful completion of maze
			
		var win = document.getElementById("end");
		win.onmouseover = function()
		{
			if (m == 0)
			{
				document.getElementById("status").innerHTML = "Congratulations!! You Win";
			}
		};
		
	//Exercise 4: Restartable Maze 
		
		var restart = document.getElementById("start");
		restart.onclick = function()
		{
		document.getElementById("status").innerHTML = "Click the \"S\" to begin.";
			for ( var h = 0; h < allbounTochangered.length-1;h++)
			{
				allbounTochangered[h].setAttribute("class","boundary boundary");
				m = 0;
			}
			
		var cheat = document.getElementById("maze");
				cheat.onmouseleave = function()
				{
		{
		//	cheat.setAttribute("thatswhathappens", "maze youlose");
			//document.getElementById("status").innerHTML = "Cheater!! You Lose. Better Luck Next Time.";
			for ( var h = 0; h < allbounTochangered.length-1;h++)
			{
				allbounTochangered[h].setAttribute("class", "boundary youlose");
				document.getElementById("status").innerHTML = "Cheater!! You Lose. Better Luck Next Time.";
			}
		
		}
		
		};
		
		};
	}