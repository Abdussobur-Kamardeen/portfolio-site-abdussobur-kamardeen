console.log("Hi, I am Abdussobur Kamardeen. Welcome to my site!")
function menuToggle() {
   var x = document.getElementById('myNavtoggle');
   if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}