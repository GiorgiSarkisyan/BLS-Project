const logo = document.getElementById("logo");
let logoDiv = document.getElementById("logo_div")

logoDiv.addEventListener('mouseover', function() {
  // Change the image source to the new one on hover
  logo.setAttribute('src', 'GlobalImages/BLS_Logo.png');
});

// Add an event listener for "mouseout" event
logoDiv.addEventListener('mouseout', function() {
  // Revert the image source to the original one when the mouse is not hovering
  logo.setAttribute('src', 'GlobalImages/BLS_Frame_Logo_White.png');
});