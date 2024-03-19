var player1score=localStorage.getItem("player1score");
var player2score=localStorage.getItem("player2score");
var player1Name=localStorage.getItem("player1Name");
var player2Name=localStorage.getItem("player2Name");

document.getElementById("score1").innerText=player1score;
document.getElementById("score2").innerText=player2score;
var restartbtn=document.getElementById("restartbtn");
var audio=document.getElementById("audioTag");
var winner=document.getElementById("name");
var img=document.getElementById("image");

const audi=new Audio();
audi.src="../music/game-click.wav"

restartbtn.addEventListener("click",()=>{
    location.href="../game/game.html";
});

if(player1score>player2score){
    winner.innerHTML=`${player1Name} Won the Game`;
    audio.src="../music/win.mp3";
    img.src="./winner-2.jpg";
}
else if(player1score<player2score){
    winner.innerHTML=`${player2Name} Won the Game`;
    audio.src="../music/win.mp3";
    img.src="./winner-3.jpg";
}
else{
    winner.innerHTML='Game Draw !';
    audio.src="../music/draw.mp3";
    img.src="./winner-1.jpg";
}