
// This fires whenever you press down a key.
// It'll fire repeatedly if the key is held down.
document.addEventListener('keydown', (event) => {
    console.log(event)
    var key = event.key;
    fireKeyAction(key, true);
});

// This fires when a key is released.
document.addEventListener('keyup', (event) => {
    var key = event.key;
    fireKeyAction(key, false);
});