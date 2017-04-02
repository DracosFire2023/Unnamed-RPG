$(document).ready(function() {
	
var eHealth = 100;
var pHealth = 300;
var danger = 0;
var upCount = 1;  //this variable is to keep the player from walking into the sky. w increments, s decrements
var keysOn;
	
function pDamage() {
  pHealth -= 25;
  console.log("Player Health:",pHealth);
  if(pHealth === 275) {
    document.getElementById("pHealth").src = "img/energy/n25.png";  	 
  }
  else if(pHealth === 250) {
	document.getElementById("pHealth").src = "img/energy/n50.png";  
  }	
  else if(pHealth === 225) {
	document.getElementById("pHealth").src = "img/energy/n75.png";  
  }	
  else if(pHealth === 200) {
	document.getElementById("pHealth").src = "img/energy/n100.png";  
  }	
  else if(pHealth === 175) {
	document.getElementById("pHealth").src = "img/energy/n125.png";  
  }	
  else if(pHealth === 150) {
	document.getElementById("pHealth").src = "img/energy/n150.png";  
  }	
  else if(pHealth === 125) {
	document.getElementById("pHealth").src = "img/energy/n175.png";  
  }	
  else if(pHealth === 100) {
	document.getElementById("pHealth").src = "img/energy/n200.png";  
  }	
  else if(pHealth === 75) {
	document.getElementById("pHealth").src = "img/energy/n225.png";  
  }	
  else if(pHealth === 50) {
	document.getElementById("pHealth").src = "img/energy/n250.png";  
  }	
  else if(pHealth === 25) {
	document.getElementById("pHealth").src = "img/energy/n300.png";  
  }	
  else if(pHealth === 0) {
	document.getElementById("pHealth").src = "img/energy/n375.png";  
  }	
}
  
//this function hides the splash bubble and makes the background black.  
function setStage() {
  document.getElementById("hit").style.display="none";
  document.getElementsByTagName("body")[0].style.backgroundColor="black";
}
 
//this is for triggering random fights
function rando() {
  danger = Math.floor((Math.random() * 10) + 1);     
}
         
/*Movement is only enabled during this stage. 
  This is the world in which the player walks around to collect items and encounter enemies. 
  Movement during the fight scene is disabled because fighting is comprised of clicking on the enemy.
  Will add different attack types and stats later, based on pick ups and scoring, level ups etc 
  Will add some sort of sound to signify the start of a fight.  */
function enterWorld() {     
    document.getElementById("hit").style.display = "none";
    document.getElementById("player").style.display = "none";
    document.getElementById("player2").style.marginTop = "-555px";
    document.getElementById("player2").style.marginLeft = "20px";
    document.getElementById("player2").style.display = "none";
	document.getElementById("goblin").style.display = "none";
	document.getElementById('bg').src = ("img/world3.png");
	document.getElementById('bg').style.display = "none";
	document.getElementById("loading").style.display="inline";
	
	setTimeout(function() {
    	$("#fightScene").fadeIn( "slow", function() {});
    	$("#bg").fadeIn("slow", function() {});
    	document.getElementById("loading").style.display="none";
    	document.getElementById("player2").style.display = "inline";
  	}, 4000);
	
	keysOn = true;  //enables movement system with a,w,s,d keys
	
	document.addEventListener('keydown', function(event) {
    	if(event.keyCode == 65) {  
		worldWalk();
      		rando();
      		console.log('A was pressed');

      		if(keysOn === true) {
        		$("#player2").animate({
          			left: '-=20px'
        		});
    
        		if(danger === 5) {
          			keysOn = false;
          			console.log("keysOn is",keysOn);
          			enterForest();
          			return;
        		}
		  	}
		  	else {
        		return;
			}
    	}
		
    	else if(event.keyCode == 87) {
		worldWalk();
		rando();
      		console.log('W was pressed');

      		if(keysOn === true) {
        		if(upCount <= 7) {
          			console.log("upCount",upCount);
			    	$("#player2").animate({
            			top: '-=20px'
          			});

          			upCount++;

          			if(danger === 5) {
            			keysOn = false;
            			console.log("keysOn is",keysOn);
            			enterForest();
			      		return;
          			}
        		}
      		}
    	}

    	else if(event.keyCode == 68) {
		worldWalk();
      		rando();
		console.log("D was pressed");

      		if(keysOn === true) {
        		$("#player2").animate({
          			left: '+=20px'
        		});
			
			    if(danger === 5) {
    			    keysOn = false;
		      		console.log("keysOn is",keysOn);
          			enterForest();		  
          			return;
        		}
		  	}

		  	else {
        		return;
		  	}
		}

    	else if(event.keyCode == 83) {
		worldWalk();
		rando();
      		console.log('S was pressed');

      		if(keysOn === true) {
        		upCount--; 
	
        		console.log("upCount",upCount);
		    	$("#player2").animate({
          			top: '+=20px'
        		});
			
		    	if(danger === 5) {
		      		keysOn = false;
		      		console.log("keysOn is",keysOn);
          			enterForest();		  
          			return;
        		}
		  	}

		  	else {
        		return;
		  	}
    	}
  	});
}

setTimeout(function() {
	$("#fightScene").fadeIn( "slow", function() {});
  	$("#bg").fadeIn("slow", function() {});
  	document.getElementById("loading").style.display="none";
}, 4000);
  
function enterDesert() {
	keysOn = false;
	document.getElementById("bg").style.display="none";
	document.getElementById("player").style.display="none";
	document.getElementById("goblin").style.display="none";

	setTimeout(function() {
    	document.getElementById("loading").style.display="none";

    	$("#fightScene").fadeIn("slow", function() {});
	  	$("#bg").fadeIn("slow", function() {});

    	document.getElementById("loading").style.display="none";
	  	document.getElementById("player").style.display="inline";
	  	document.getElementById("goblin").style.display="inline";
	  	document.getElementById("player").style.marginTop = "-645px";
	  	document.getElementById("hit").style.marginTop = "-650px";
  	}, 4000);
}
  
function enterForest() {
	keysOn = false;

	if(keysOn === true) {
    	keys();
	}

	console.log("keysOn is",keysOn);
	console.log("Player Health:",pHealth);
        document.getElementById("pHealth").style.display = "inline";  
	document.getElementById("pHealth").style.marginTop = "-825px"; 
	document.getElementById("pHealth").style.position = "absolute"; 	
	document.getElementById("pHealth").style.maxWidth = "30%";
	document.getElementById("pHealth").style.maxHeight = "30%";
  	document.getElementById("player").style.display = "none";
	document.getElementById("player2").style.display = "none";
	document.getElementById("hit").style.marginBottom = "-225px";
	document.getElementById("goblin").style.display = "none";
	document.getElementById("bg").style.display = "none";

	document.getElementById('bg').src = ("img/forest2.png")
	document.getElementById("loading").style.display="inline";

  	setTimeout(function() {
    	$("#fightScene").fadeIn("slow", function() { });
    	$("#bg").fadeIn("slow", function() { });

	  	document.getElementById("goblin").style.display = "inline";
	  	document.getElementById("player").style.display = "inline";
	  	document.getElementById("goblin").style.marginTop = "-770px";
	  	document.getElementById("loading").style.display="none";
  	}, 4000);

	setTimeout(function() {
		eAttack();
  	}, 1000);

	setTimeout(function() {
    	eAttack();
  	}, 7000);

	setTimeout(function() {
		eAttack();
  	}, 14000);

	setTimeout(function() {
		eAttack();
  	}, 21000);
	
    setTimeout(function() {
		eAttack();
  	}, 28000);
	
	setTimeout(function() {
		eAttack();
  	}, 35000);

	setTimeout(function() {
		eAttack();
  	}, 41000);
	
	setTimeout(function() {
		eAttack();
  	}, 47000);
	
	setTimeout(function() {
		eAttack();
  	}, 54000);
	
	setTimeout(function() {
		eAttack();
  	}, 61000);
	
	setTimeout(function() {
		eAttack();
  	}, 68000);
}
  
setStage();
enterWorld();
//enterDesert();
//enterForest();

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
	
function worldStep() {     // this is for the second player image div in enterWorld()
  	setTimeout(function() {
    	document.getElementById('player2').src = ("img/walk.png")
  	}, 0);

  	setTimeout(function() {
	    document.getElementById('player2').src = ("img/stand.png")
  	}, 500);
}

function worldWalk() { 
	setTimeout(function() {
    	worldStep();
  	}, 0);

  	setTimeout(function() {
    	worldStep();
  	}, 800);
}
  
function eAttack() {
	document.getElementById("hit").style.marginLeft="-65px"

  	setTimeout(function() {
    	$("#goblin").animate({
      		left: '-325px'
    	}, 1300);

		setTimeout(function() {
			document.getElementById("hit").style.display="inline"  
		}, 1300);
		
		setTimeout(function() {
			pDamage();
		}, 1300);

		setTimeout(function() {
			document.getElementById("hit").style.display="none"
		}, 2300);


		setTimeout(function() {
			playerHit();
		}, 1300);

		setTimeout(function() {
			$("#goblin").animate({
				left: '25px'
			}, 1300);
		}, 1800); 

		setTimeout(function() {
			pHealth -= 25;
			console.log("Player Health:",pHealth);
		}, 2300);
	}, 6000);
}
  
$("#goblin").click(function() {
    document.getElementById("hit").style.marginLeft="275px"
	setTimeout(function() {
    $("#player").animate({
    	left: '325px'
    }, 1300);

    	walk();
		goblinHit();
	});
	
	function goblinHit() {
		setTimeout(function() {
	    	$("#goblin").animate({
    			left: '55px'
      		},"fast");
    	}, 1350);

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
  
function playerHit() {
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
});
