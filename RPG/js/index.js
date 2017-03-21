  var eHealth = 100;
  var pHealth = 100;
  
  function exitStage()
  {
    // document.getElementById("desertFight").style.display="none";
	//document.getElementById("loading").style.display="none";
	document.getElementById("hit").style.display="none";
	
   document.getElementsByTagName("body")[0].style.backgroundColor="black";
  }
  
 

  function rando()
   {
      danger = Math.floor((Math.random() * 10) + 1);     
   }
         
   

  function enterWorld()
  {   
  upCount = 1;
  
	document.getElementById("hit").style.display = "none";
	document.getElementById("player").style.display = "none";
	document.getElementById("player2").style.marginTop = "-555px";
	document.getElementById("player2").style.marginLeft = "20px";
	document.getElementById("player2").style.display = "none";
	document.getElementById("goblin").style.display = "none";
	document.getElementById('bg').src = ("img/world3.png");
	document.getElementById('bg').style.display = "none";
	document.getElementById("loading").style.display="inline";
	
    setTimeout(function() 
    {
        $( "#desertFight" ).fadeIn( "slow", function() {
      });
	  $( "#bg" ).fadeIn( "slow", function() {
      });
	   document.getElementById("loading").style.display="none";
	   document.getElementById("player2").style.display = "inline";
    }, 4000);
	keysOn = true;
    
	  document.addEventListener('keydown', function(event) 
	  {
        if(event.keyCode == 65) 
		{            
	      rando();
          console.log('A was pressed');

		  if(keysOn === true)
	      {
		    $("#player2").animate({
            left: '-=20px'
            })
			
		    if(danger === 5)
	        {
		      keysOn = false;
		      console.log("keysOn is",keysOn);
	          enterForest();
			  return;
	        }
			
		  }
		  else
		  {
			return;
		  }
        }
        else if(event.keyCode == 87) 
	    {
		  rando();
          console.log('W was pressed');
          if(keysOn === true)
	      {
			  if(upCount <= 7)
			  {
				console.log("upCount",upCount);
			    $("#player2").animate({
                top: '-=20px'
                })
				upCount++;
				
				if(danger === 5)
	            {
		          keysOn = false;
		          console.log("keysOn is",keysOn);
	              enterForest();
			      return;
	            }
				
		      }

			
			
		}

	}
        else if(event.keyCode == 68) 
	    {
		  rando();
		  console.log("D was pressed");
          if(keysOn === true)
	      {
		    $("#player2").animate({
            left: '+=20px'
            })
			
		    if(danger === 5)
	        {
		      keysOn = false;
		      console.log("keysOn is",keysOn);
	          enterForest();		  
			  return;
	        }
			
		  }
		  else
		  {
			return;
		  }
		}
        else if(event.keyCode == 83) 
	    {
		  rando();
          console.log('S was pressed');
          if(keysOn === true)
	      {
			
               upCount--; 
	
			console.log("upCount",upCount);
		    $("#player2").animate({
            top: '+=20px'
            })
			
		    if(danger === 5)
	        {
		      keysOn = false;
		      console.log("keysOn is",keysOn);
	          enterForest();		  
			  return;
	        }
			
		  }
		  else
		  {
			return;
		  }
        }
      });
	}


    setTimeout(function() 
    {
        $( "#desertFight" ).fadeIn( "slow", function() {
      });
	  $( "#bg" ).fadeIn( "slow", function() {
      });
	   document.getElementById("loading").style.display="none";
    }, 4000);
  
     
 
   function enterDesert()
  {
	keysOn = false;
	document.getElementById("bg").style.display="none";
	document.getElementById("player").style.display="none";
	document.getElementById("goblin").style.display="none";
    setTimeout(function() 
    {
		document.getElementById("loading").style.display="none";
        $( "#desertFight" ).fadeIn( "slow", function() {
      });
	  $( "#bg" ).fadeIn( "slow", function() {
      });
	   document.getElementById("loading").style.display="none";
	   document.getElementById("player").style.display="inline";
	   document.getElementById("goblin").style.display="inline";
	   document.getElementById("player").style.marginTop = "-645px";
	   document.getElementById("hit").style.marginTop = "-650px";
    }, 4000);
  
  }
  
	
  
  function enterForest()
  {
	keysOn = false;
	if(keysOn === true)
	{
	  keys();
	}
	console.log("keysOn is",keysOn);
	console.log("Player Health:",pHealth);
    document.getElementById("player").style.display = "none";
	document.getElementById("player2").style.display = "none";
	document.getElementById("hit").style.marginBottom = "-225px";
	document.getElementById("goblin").style.display = "none";
	document.getElementById("bg").style.display = "none";

	document.getElementById('bg').src = ("img/forest2.png")
	document.getElementById("loading").style.display="inline";
    setTimeout(function() 
    {
        $( "#desertFight" ).fadeIn( "slow", function() {
      });
	  $( "#bg" ).fadeIn( "slow", function() {
      });
	   document.getElementById("goblin").style.display = "inline";
	   document.getElementById("player").style.display = "inline";
	   document.getElementById("goblin").style.marginTop = "-770px";
	   document.getElementById("loading").style.display="none";
    }, 4000);
	setTimeout(function() 
    {
	  eAttack();
    }, 1000);
	setTimeout(function() 
    {
	  eAttack();
    }, 7000);
	setTimeout(function() 
    {
	  eAttack();
    }, 14000);
	setTimeout(function() 
    {
	  eAttack();
    }, 21000);
  }
  
  
  exitStage();
  enterWorld();
  //enterDesert();
  //enterForest();
  

  
 
 
  
  

  /* Code snippets
  document.getElementById("hit").style.display="none";
  
 document.getElementById('brick').style.backgroundImage="url(https://lh4.googleusercontent.com/i81MmZvfrpE9eLcziPWKbcb_Aq15_PCbSfFatbM54X771G_MDOs47B-VWo1siimubrq4RquxthP2S9I=w1366-h589)"
 
  setTimeout(function() {
   statements
  }, 2000);
  
  $( "block" ).animate({ "left": "-=50px" }, "slow" );
});
  */


  function step() {
    setTimeout(function() {
      document.getElementById('player').src = ("img/walk.png")
    }, 0);
    setTimeout(function() {
      document.getElementById('player').src = ("img/stand.png")
    }, 500);

  }

  function walk() {

    setTimeout(function() {
      step();
    }, 0);

    setTimeout(function() {
      step();
    }, 800);

  }
  


  
  function eAttack()
  {
	  document.getElementById("hit").style.marginLeft="-65px"
	  setTimeout(function() {
      $("#goblin").animate({
        left: '-325px'
      }, 1300);
	    setTimeout(function() {
      document.getElementById("hit").style.display="inline"
      }, 1300);
	  setTimeout(function() {
      playerHit();
      }, 1300);
	   setTimeout(function() {
      document.getElementById("hit").style.display="none"
	  document.getElementById("hit").style.marginLeft="275px"
      }, 2300);
	  
	  setTimeout(function() {
	  $("#goblin").animate({
        left: '25px'
      }, 1300);
      }, 1800); 
	  document.getElementById("hit").style.display="none"
	  setTimeout(function() {
	  pHealth -= 25;
	  console.log("Player Health:",pHealth);
      }, 2300);
	
	  }, 6000);
	  
	  
  }
  
  $("#goblin").click(function() {
    setTimeout(function() {
      $("#player").animate({
        left: '325px'
      }, 1300);
      walk();
	  goblinHit();
    });
	
	function goblinHit()
	{
	    setTimeout(function() {
      $("#goblin").animate({
        left: '55px'
      },"fast");
    },1350);
		    setTimeout(function() {
      $("#goblin").animate({
        left: '5px'
      });
    },2350);

	
	
	
	

	setTimeout(function() {
      document.getElementById("hit").style.display="inline";
      }, 1300);
    }
	
    setTimeout(function() {
      $("#player").animate({
        left: '10px'
      });
	  document.getElementById("hit").style.display="none";
    }, 1800);

  });
  
  function playerHit()
  {
	    setTimeout(function() {
      $("#player").animate({
        left: '-55px'
      },"fast");
    });
		    setTimeout(function() {
      $("#player").animate({
        left: '5px'
      });
    },1350);

  }
 
