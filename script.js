/* floating hearts */

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";
heart.innerHTML="❤";

/* random horizontal position */

heart.style.left=Math.random()*100+"vw";

/* random size */

heart.style.fontSize=(Math.random()*25+15)+"px";

/* random animation speed */

heart.style.animationDuration=(Math.random()*4+4)+"s";

document.querySelector(".hearts").appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

}

/* create hearts continuously */

setInterval(createHeart,200);

const puzzle=document.getElementById("puzzle");

if(puzzle){

let tiles=[1,2,3,4,5,6,7,8,0]; // 0 = empty

shuffle();

drawPuzzle();

function shuffle(){

tiles.sort(()=>Math.random()-0.5);

}

function drawPuzzle(){

puzzle.innerHTML="";

tiles.forEach((num,index)=>{

let tile=document.createElement("div");

if(num===0){
tile.className="tile empty";
}else{

tile.className="tile";

let x=((num-1)%3)*-100;
let y=Math.floor((num-1)/3)*-100;

tile.style.backgroundPosition=`${x}px ${y}px`;

}

tile.addEventListener("click",()=>moveTile(index));

puzzle.appendChild(tile);

});

}

function moveTile(index){

let emptyIndex=tiles.indexOf(0);

let validMoves=[
index-1,
index+1,
index-3,
index+3
];

if(validMoves.includes(emptyIndex)){

[tiles[index],tiles[emptyIndex]]=[tiles[emptyIndex],tiles[index]];

drawPuzzle();

checkWin();

}

}

function checkWin(){

let win=[1,2,3,4,5,6,7,8,0];

if(JSON.stringify(tiles)===JSON.stringify(win)){

setTimeout(()=>{
window.location="video.html";
},1000);

}

}

}
function move(direction){

let newX = player.x;
let newY = player.y;

if(direction==="up") newY--;
if(direction==="down") newY++;
if(direction==="left") newX--;
if(direction==="right") newX++;

if(newX>=0 && newX<10 && newY>=0 && newY<10 && maze[newY][newX]===0){
player.x=newX;
player.y=newY;
}

if(player.x===goal.x && player.y===goal.y){
alert("I have a surprise for you! 🎁");
window.location.href="video.html";
}

draw();

}
