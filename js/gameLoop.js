
var interval = setInterval(() => {
  
    var speed = 5;
  
    // Move player if arrow key is pressed.
    if (isKeyDown("ArrowLeft")){
        worldData.player.x -= speed;
    }
  
    if (isKeyDown("ArrowRight")){
        worldData.player.x += speed;
    }
    
    if (height - worldData.player.y <= playerHeight && worldData.player.fallingSpeed >= 0){
        worldData.player.y = height - playerHeight;
        worldData.player.fallingSpeed = 0;
    } else {
        // The player is falling
        worldData.player.y += worldData.player.fallingSpeed;
        worldData.player.fallingSpeed += 0.5;
    }
    
    if (isKeyDown("ArrowUp") && worldData.player.fallingSpeed === 0 && height - worldData.player.y === playerHeight){
        worldData.player.fallingSpeed = -10;
    }

    update();
}, 30 /*milliseconds*/);

// Helper function to check if key is in the array.
function isKeyDown(keyName) {
      return worldData.keysDown.indexOf(keyName) !== -1
}