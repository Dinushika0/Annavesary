<!DOCTYPE html>
<html>
<head>
<title>Game</title>

<style>

body{
font-family:Arial;
text-align:center;
background:#222;
color:white;
}

canvas{
background:white;
margin-top:20px;
border:4px solid black;
}

button{
font-size:30px;
padding:15px;
margin:5px;
}

</style>
</head>

<body>

<h1>Game Round</h1>
<p>Reach the green square</p>

<canvas id="maze" width="400" height="400"></canvas>

<br><br>

<button onclick="move('up')">⬆</button><br>
<button onclick="move('left')">⬅</button>
<button onclick="move('down')">⬇</button>
<button onclick="move('right')">➡</button>

<script>

const canvas = document.getElementById("maze");
const ctx = canvas.getContext("2d");

const size = 40;

let player = {x:0,y:0};
let goal = {x:9,y:9};

const maze = [
[0,0,1,0,0,0,1,0,0,0],
[1,0,1,0,1,0,1,0,1,0],
[1,0,0,0,1,0,0,0,1,0],
[1,1,1,0,1,1,1,0,1,0],
[0,0,1,0,0,0,1,0,1,0],
[0,1,1,1,1,0,1,0,1,0],
[0,0,0,0,1,0,0,0,1,0],
[1,1,1,0,1,1,1,0,1,0],
[0,0,0,0,0,0,1,0,0,0],
[1,1,1,1,1,0,0,0,1,0]
];

function draw(){

ctx.clearRect(0,0,400,400);

for(let y=0;y<10;y++){
for(let x=0;x<10;x++){

if(maze[y][x]===1){
ctx.fillStyle="black";
ctx.fillRect(x*size,y*size,size,size);
}

}
}

ctx.fillStyle="green";
ctx.fillRect(goal.x*size,goal.y*size,size,size);

ctx.fillStyle="red";
ctx.fillRect(player.x*size,player.y*size,size,size);

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
}

draw();

}

document.addEventListener("keydown",function(e){

if(e.key==="ArrowUp") move("up");
if(e.key==="ArrowDown") move("down");
if(e.key==="ArrowLeft") move("left");
if(e.key==="ArrowRight") move("right");

});

draw();

</script>

</body>
</html>
