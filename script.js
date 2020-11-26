/* Ratio: 0.935252491678348 */
var imgWidth = 25;
var imgHeight = 20;
var rows = 4;
var columns = 5;
var imgSrc = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fminorfs.files.wordpress.com%2F2014%2F07%2Fpacman-arcade-game.jpg&f=1&nofb=1"


function randomize(puzzle) {
  for (var i = puzzle.length - 1; i > 0; i--) {
    var idx = Math.floor(Math.random() * i);
    var temp = puzzle[idx];
    puzzle[idx] = puzzle[i];
    puzzle[i] = temp;
  }
}
function init(){
$("h1").html("Solve the puzzle!")
$("#final").hide()

var puzzle = []

for(var i = 0;i<rows;i++){
  for(var j = 0;j<columns; j++){
 puzzle.push("<div class='"+(i*columns+j)+" imgContainer'>"+
"<img src="+imgSrc+
" style='margin-left: -"+(j*imgWidth/columns)+"rem;"+
"margin-top: -"+(i*imgHeight/rows)+"rem;'></img></div>");

$("#drop-zone").append("<div class='"+(i*columns+j)+
" imgContainer'></div>");   
  }
}
randomize(puzzle)

puzzle.forEach(function(piece){
  $("#pieces").append(piece)
})



 $(".imgContainer").css({
    "width": imgWidth / columns + "rem",
    "height": imgHeight / rows + "rem"
  });


$("#pieces > .imgContainer").draggable();

 $("#drop-zone > .imgContainer").droppable({
 drop: function(event, ui){
var destNum = $(this).attr("class").split(" ")[0];
 var pieceNum = ui.draggable.attr("class").split(" ")[0];
 if (destNum === pieceNum){
 $(this).append(ui.draggable.find("img"))
 .css("border-style", "none");
 ui.draggable.addClass("invisible");
 count ++;
 
$("#drop-zone").click(function(){
  $(".picture").empty();
  $("#drop-zone").empty()
  init()
})


 }else{
  $(this).css({"background-color":"red"});
 ui.draggable.css({
 "border": ".1rem solid red"
 });
 }
 }
 });


}

$(document).ready(function(){
$("#final").click(init)
})