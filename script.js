var editor = $(parent.document.body)
var topbar = $(parent.parent.document.body).find("#topbar")

var allDivsInTheEditor = editor.find("div")







//seizure.js

var random255 = function () {
  return Math.floor(Math.random()*255);
}
var randomColor = function () {
  return "rgb(" + random255() + "," + random255() + "," + random255() + ")";
}

var doWork = function () {
    $(this).css("backgroundColor",randomColor());
  });	
}

var i=0;
var intervalId = setInterval(function () {
  if (i > 10000) {
    clearInterval(intervalId);
  }
  doWork();
  i++;
},1);


// Now try to
// 1. add a button to the topbar
// 2. change the title above the file list
// 3. change some borders in the editor
// 4. Make all this happen when a button is clicked