// find our elements
const stageContainer = document.getElementById("stage-container");
const circleButton = document.getElementById("circleButton");
// find stage width
let stageContainerWidth = stageContainer.offsetWidth;
console.log(stageContainerWidth);

// find stage height
let stageContainerHeight = stageContainer.offsetHeight;
console.log(stageContainerHeight);

// set default circle color
let circleColor = "red";


// create the konva stage
const stage = new Konva.Stage({
  container: "konva-stage",
  width: stageContainerWidth,
  height: stageContainerHeight,
  fill: "blue",
});
// create layer
const firstLayer = new Konva.Layer();

// add layer to our stage
stage.add(firstLayer);

//add interaction to button
function drawNewCircle() {
  const circle = new Konva.Circle({
    x: stage.width() * Math.random(),
    y: stage.height() * Math.random(),
    radius: 50 * Math.random(),
    fill: circleColor,
  });
  // add a circle to first layer,
  firstLayer.add(circle);
}

circleButton.addEventListener("click",drawNewCircle);