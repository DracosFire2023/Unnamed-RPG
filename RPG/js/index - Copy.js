  function exitStage()
  {
    // document.getElementById("desertFight").style.display="none";
	document.getElementById("loading").style.display="none";
	document.getElementById("hit").style.display="none";
	

   
//   document.getElementsByTagName("body")[0].style.backgoundImage="none";

//   document.getElementById("bg").style.display="none";
   document.getElementsByTagName("body")[0].style.backgroundColor="black";
  }
  
  function enterStageDesert()
  {
//	document.getElementById("loading").style.display="inline";
    setTimeout(function() 
    {
		document.getElementById("loading").style.display="none";
        $( "#desertFight" ).fadeIn( "slow", function() {
      });
	  $( "#bg" ).fadeIn( "slow", function() {
      });
	   document.getElementById("loading").style.display="none";
    }, 4000);
  
  }
  
  exitStage();
  
  enterStageDesert();
  

  
 
 
  
  
  

$(document).ready(function() {
  /*
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
});