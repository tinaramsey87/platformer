
function fireKeyAction(key, isDown){
  // This gives us a quick reference to worldData.keysDown
  var keysDown = worldData.keysDown;
  
  // We can add more keys as case statements if we want to add them to the game.
  switch(key){
    case "ArrowLeft":
    case "ArrowRight":
    case "ArrowUp":
    case "ArrowDown":
      // Add the key to the keysDown array if isDown == true.
      if (isDown) {
        
        // Only add the key if it's not already in the list.
        if (keysDown.indexOf(key) === -1) {
          keysDown.push(key);
        }
        
      } else {
        // Remove the key from the list
        keysDown.splice(keysDown.indexOf(key), 1);
      };
      
  }
}