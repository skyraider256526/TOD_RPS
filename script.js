//jshint esversion:6
/*jshint -W030*/

// get the selection form player
function playerSelection(){
	const x=prompt("Round "+y+"\nEnter your choice from  ROCK PAPER SCISSORS");
	if (x.charAt(0).toLowerCase()==="r") return 1;
	else if (x.charAt(0).toLowerCase()==="p") return 2;
	else return 3;
}
// get selection for computer
function computerSelection(){
	const  x=Math.random();
	let y;
	if (x<=0.333333) y=1;
	else if (x<0.666666) y=2;
	else y=3;
	return y;
}
//start a round of game
function playRound() {
	const player=playerSelection();
	const computer=computerSelection();
	if (player==computer){ 
		alert("Tie!");
		return;
	}
	if (player==1){
		if (player==1 && computer==2) {
			alert("You Lose! Paper beats Rock");
			computerScore++;
	} 
		else {
			alert("You Win! Rock beats Scissors");
			playerScore++;
		}

	}
	if (player==2){
		if (player==2 && computer==3) {
			alert("You Lose! Scissors beats Paper");
			computerScore++;
		} else {
			alert("You Win! Paper beats Rock");
			playerScore++;
		}
	}
	if (player==3){
		if (player==3 && computer==1) {
			alert("You Lose! Rock beats Scissors");
			computerScore++;
		} else {
			alert("You Win! Scissors beats Paper");
			playerScore++;
		}
	}
}
//start
function game(){
	 playerScore=0;
	 computerScore=0;
	for (y=1;y<=5;y++){
		playRound(playerScore,computerScore);
		alert(`The Score is: player ${playerScore} computer ${computerScore}`);
	}
	finalScore(playerScore,computerScore);
}
game();
function finalScore(a,b){
	if (a>b) {
		alert(`Whhoa! You Won by ${a-b} points`);
	}
	 else if (a<b){
	 	alert(`Shit! You Lose by ${b-a} points`);
	}
	else{
		alert("Fuck! It was a Tie, atleast you didn't lose");
	}
}