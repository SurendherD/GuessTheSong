var arraySrc=
["avatorAssets/1.png","avatorAssets/2.png",
    "avatorAssets/3.png","avatorAssets/4.png","avatorAssets/5.png",
    "avatorAssets/6.png","avatorAssets/7.png","avatorAssets/8.png",
    "avatorAssets/9.png","avatorAssets/10.png","avatorAssets/11.png",
    "avatorAssets/12.png","avatorAssets/13.png","avatorAssets/14.png",
    "avatorAssets/15.png","avatorAssets/16.png","avatorAssets/17.png",
    "avatorAssets/18.png","avatorAssets/19.png","avatorAssets/20.png"
];
var index1=localStorage.getItem('index1');
var index2=localStorage.getItem('index2');
var player1Name=localStorage.getItem('player1Name');
var player2Name=localStorage.getItem('player2Name');

document.getElementById("player1img").src=arraySrc[index1];
document.getElementById("player2img").src=arraySrc[index2];
document.getElementById("player1Name").innerHTML=player1Name;
document.getElementById("player2Name").innerHTML=player2Name;





