let box = document.getElementById('box');
let span = document.getElementsByTagName('span')[0];
box.style.left = '0px';
box.style.top = '0px';
let dragging = false;
let eX, eY, objX, objY;

span.addEventListener('mousedown', function (e) {
  box.style.background = "#ccc";
  box.style.borderColor = "#666";
  dragging = true;
  eX = e.clientX;
  eY = e.clientY;
  objX = parseInt(box.style.left);
  objY = parseInt(box.style.top);
});

// press the button to move box
document.addEventListener('mousemove', function (e) {
  if (dragging) {
    box.style.left = objX + e.clientX - eX + 'px';
    box.style.top = objY + e.clientY - eY + 'px';
  }

});

// release the button to fix the box
document.addEventListener('mouseup', function (e) {
  // console.log('mouseup');
  box.style.background="";
  box.style.borderColor="#fff";
  dragging = false;
});