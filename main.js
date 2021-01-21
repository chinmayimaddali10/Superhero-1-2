
var canvas = new fabric.Canvas("myCanvas");
blockImageWidth = 30;
blockImageHeight = 30;
playerX = 10;
playerY = 10;
var playerObject = "";

function playerUpdate(){
    fabric.Image.fromURL("player.png",function(Img){
        playerObject=Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playerY,left:playerX
        });
        canvas.add(playerObject);
    });
}
function imageUpdate(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        blockImageObject=Img;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top:playerY,left:playerX
        });
        canvas.add(blockImageObject);
    });
}
window.addEventListener("keydown",myKeydown);
function myKeydown(e){
    keypressed=e.keyCode;
    console.log("Key pressed : " + keypressed);
    if(e.shiftKey == true && keypressed =='80'){
        console.log("p and shift pressed together");
        blockImageHeight  = blockImageHeight + 10;
        blockImageWidth = blockImageWidth + 10;
        document.getElementById("currentWidth").innerHTML=blockImageWidth;
        document.getElementById("currentHeight").innerHTML=blockImageHeight;
    }
    if(e.shiftKey == true && keypressed =='77'){
        console.log("m and shift pressed together");
        blockImageHeight  = blockImageHeight - 10;
        blockImageWidth = blockImageWidth - 10;
        document.getElementById("currentWidth").innerHTML=blockImageWidth;
        document.getElementById("currentHeight").innerHTML=blockImageHeight;
    }
    if(keypressed == '70')
 {imageUpdate("spiderman_face.png"); console.log("f"); }

   if(keypressed == '66')
 { imageUpdate("ironman_body.png"); console.log("b"); }

   if(keypressed == '76') 
  { imageUpdate("hulk_legs.png"); console.log("l"); } 

   if(keypressed == '82')
  { imageUpdate("captain_america_left_hand.png"); console.log("r"); }

   if(keypressed == '72')
   { imageUpdate("thor_right_hand.png"); console.log("h"); }

   if(keypressed == '40'){
      down();
      console.log("down");
   }
   if(keypressed == '37'){
      left();
      console.log("left");
   }
   if(keypressed == '39'){
      right();
      console.log("right");
   }
 }

   function up(){ if(playerY >=  0){ playerY = playerY - blockImageHeight;
    console.log("blockImageHeight" + blockImageHeight); 
    console.log("When up key is pressed x = "+ playerX + "y =" + playerY);
    canvas.remove(playerObject); playerUpdate(); } }
   
    function down(){ if(playerY <= 500){ playerY = playerY + blockImageHeight;
   console.log("blockImageHeight" + blockImageHeight);
   console.log("when down key is pressed x = "+  playerX + "y =" + playerY);
   canvas.remove(playerObject); playerUpdate(); } } 
   
         function right(){ if(playerX <= 700){ playerX = playerX + blockImageWidth; 
   console.log("blockImageHeight" + blockImageHeight); console.log("when right key is pressed x = "+  playerX + "y =" + playerY); 
   canvas.remove(playerObject); playerUpdate(); } }
   
   function left(){ if(playerX > 0){ playerX = playerX - blockImageWidth;
   console.log("blockImageHeight" + blockImageHeight); 
   console.log("when left key is pressed x = "+  playerX + "y =" + playerY);
    canvas.remove(playerObject); playerUpdate(); }}
