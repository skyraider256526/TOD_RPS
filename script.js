//jshint esversion:6
/*jshint -W030*/

// get the selection form player
function playerSelection(){
	let x=prompt("Enter your choice from  ROCK PAPER SCISSORS");
	let y;
	if (x.charAt(0).toLowerCase()==="r") return 1;
	else if (x.charAt(0).toLowerCase()==="p") return 2;
	else return 3;
}
// get selection for computer
function computerSelection(){
	let  x=Math.random();
	let y;
	if (x<=0.333333) y=1;
	else if (x<0.666666) y=2;
	else y=3;
	return y;
}
//start a round of game
function playRound() {
	let player=playerSelection();
	let computer=computerSelection();
	if (player==computer) prompt("Tie!");
	(player==1 & computer==2) ? prompt("Computer wins!") : prompt("Player wins!");
	(player==2 & computer==3) ? prompt("Computer wins!") : prompt("Player wins!");
	(player==3 & computer==1) ? prompt("Computer wins!") : prompt("Player wins!");
}
//start
playRound();
