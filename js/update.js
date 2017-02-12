function update() {
    // Bind svg rectangle player to worldData
    player.style.x = worldData.player.x;
    player.style.y = worldData.player.y;
}
update(); // Make sure to call this once moving your character to the right spot!