var reload1=document.getElementsByClassName("reload-profile1")[0];
var reload2=document.getElementsByClassName("reload-profile2")[0];
var profile1=document.getElementById("profile1");
var profile2=document.getElementById("profile2");
var input1=document.getElementById("in-put1");
var input2=document.getElementById("in-put2");
var start=document.getElementById("start-btn");
var index;
var index1=9;
var index2=0;
var img1;
var img2;

function randomAvator(){
    index=Math.floor(Math.random()*20);
    var arraySrc=
    ["./avatorAssets/1.png","./avatorAssets/2.png",
        "./avatorAssets/3.png","./avatorAssets/4.png","./avatorAssets/5.png",
        "./avatorAssets/6.png","./avatorAssets/7.png","./avatorAssets/8.png",
        "./avatorAssets/9.png","./avatorAssets/10.png","./avatorAssets/11.png",
        "./avatorAssets/12.png","./avatorAssets/13.png","./avatorAssets/14.png",
        "./avatorAssets/15.png","./avatorAssets/16.png","./avatorAssets/17.png",
        "./avatorAssets/18.png","./avatorAssets/19.png","./avatorAssets/20.png"
    ];

    return arraySrc[index];
}
reload1.addEventListener("click",()=>{
    img1=randomAvator();
    profile1.src=img1;
    index1=index;
});
reload2.addEventListener("click",()=>{
    img2=randomAvator();
    profile2.src=img2;
    index2=index;
});

function extractingValues(){
   localStorage.setItem('index1',index1);
   localStorage.setItem('index2',index2);
   localStorage.setItem('player1Name',input1.value);
   localStorage.setItem('player2Name',input2.value);
}

start.addEventListener("click",()=>{
    if(input1.value =="" || input2.value==""){
        alert("Please Enter your Names");
    }
    else{
        extractingValues();
        document.location.href="../game/game.html";
    }
});



