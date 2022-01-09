
const navHover= document.getElementById("list");
const fbHover=document.getElementById("fb-icon");
const twitHover=document.getElementById("twit-icon");
const linkedHover=document.getElementById("linked-icon");


// This handler will be executed every time the cursor
// is moved over a different list item
navHover.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.style.color = "blue";
  
    // reset the color after delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);

  fbHover.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.style.color = "blue";
  
    // reset the color after delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);

  twitHover.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.style.color = "blue";
  
    // reset the color after delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);

  linkedHover.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.style.color = "blue";
  
    // reset the color after delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);