	function Dealer(card, depo){
		this.points = card;
		this.money = depo;
		this.start = function(){
			this.points = this.points + Math.floor(Math.random() * 10);
		}
		this.reset = function(){
			this.points = Math.floor(Math.random() * 10);
		}
	}
	function Player(card, depo, playerBet){
		this.points = card;
		this.money = depo;
		this.bet = playerBet;
		this.hit = function(){
			this.points = this.points + Math.floor(Math.random() * 10);
		};
		this.stop = function(){

		}
		this.reset = function(){
			this.points = Math.floor(Math.random() * 10);
		}
	}
	var new_dealer = new Dealer(0, 100);
	var new_player = new Player(0, 100, 5);
	new_dealer.start();
	new_player.hit();
	document.getElementById("dealerDeck").innerHTML = new_dealer.points;
	document.getElementById("dealerBalance").innerHTML = new_dealer.money;
	document.getElementById("playerDeck").innerHTML = new_player.points; 
	document.getElementById("stake").innerHTML = new_player.bet; 
	document.getElementById("playerBalance").innerHTML = new_player.money; 
	document.getElementById("playerHit").addEventListener('click', function(){
		new_player.hit();
		document.getElementById("playerDeck").innerHTML = new_player.points;
		if(new_player.points > 21){
			document.getElementById("results").innerHTML = "Dealer Has Won 1" + "<br>" + "<button onclick='newGame()'>New Game</button>"
			new_player.money -= new_player.bet;
			new_dealer.money += new_player.bet;	
		} 
	});
	document.getElementById("playerStand").addEventListener('click', function(){
	});

	function stand(){
		while(new_dealer.points < 17){
			new_dealer.start();
			document.getElementById("dealerDeck").innerHTML = new_dealer.points;
			if(new_dealer.points > 21){
			// dealer bust
			document.getElementById("results").innerHTML = "Player Has Won 1" + "<br>" +"<button onclick='newGame()'>New Game</button>"
			new_player.money += new_player.bet;
			new_dealer.money -= new_player.bet;				
			}
		}
		if(new_player.points > 21){
			// player bust
			document.getElementById("results").innerHTML = "Dealer Has Won 2" + "<br>" + "<button onclick='newGame()'>New Game</button>" 
			new_player.money -= new_player.bet;
			new_dealer.money += new_player.bet;			
		} else if(new_player.points > new_dealer.points){
			// player wins 
			document.getElementById("results").innerHTML = "Player Has Won 2" + "<br>" + "<button onclick='newGame()'>New Game</button>"
			new_player.money += new_player.bet;
			new_dealer.money -= new_player.bet;
		} else if(new_player.points === new_dealer.points) {
			document.getElementById("results").innerHTML = "Nobody Wins" + "<br>" + "<button onclick='newGame()'>New Game</button>"
		} else if(new_dealer.points > new_player.points && new_dealer.points <= 21){
			// dealer higher than player
			document.getElementById("results").innerHTML = "Dealer Has Won 3" + "<br>" + "<button onclick='newGame()'>New Game</button>";
			new_player.money -= new_player.bet;
			new_dealer.money += new_player.bet;
		} 
	}
	function newGame(){
		new_player.reset()
		new_dealer.reset()
		document.getElementById("dealerDeck").innerHTML = new_dealer.points;
		document.getElementById("playerDeck").innerHTML = new_player.points; 
		document.getElementById("dealerBalance").innerHTML = new_dealer.money;
		document.getElementById("playerBalance").innerHTML = new_player.money; 			
		document.getElementById("results").innerHTML = "";
	}
	function setFive(){
		new_player.bet = 5;
		document.getElementById("stake").innerHTML = new_player.bet; 
	}
	function setTen(){
		new_player.bet = 10;
		document.getElementById("stake").innerHTML = new_player.bet; 
	}

	function setFifteen(){
		new_player.bet = 15;
		document.getElementById("stake").innerHTML = new_player.bet; 
	}

