// find our elements
const stageContainer = document.getElementById("stage-container");
const circleButton = document.getElementById("circleButton");
const changeToCoral = document.getElementById("change-coral")
const changeToYellow = document.getElementById("change-yellow")
const changeToPink = document.getElementById("change-pink")
let inputNumber = document.getElementById("inputNumber");


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

circleButton.addEventListener("click", drawNewCircle);

// changing our circle color
//I chose radio buttons because they allow for a exclusive selection, making users choice
//limited but certain. A constricted amount of user choice leads to a tighter color palette
// to change my color, I need to find the value of the input clicked, and then update the
//circle color const.

// function changeColorRadio(clickEvent) {
//     // clickEvent.target.value;
//     // find the value of whichever of the radio buttons was clicked.
//     let newColor = clickEvent.target.value;
//     // set the new circle color to that value
//     circleColor = newColor;
// }

// add addEventListeners

// changeToCoral.addEventListener("click", changeColorRadio);
// changeToYellow.addEventListener("click", changeColorRadio);
// changeToPink.addEventListener("click", changeColorRadio);


// I choose to use number input as my mapping experiment because numbers can provide precise result
// most digital drawing tools are using numbers to control the value of color, no matter HSL or sRGB
//It may not be inclusive enough, while it provides a way for users to explore the mapping mechanism.

// when input a number, change color
function changeColorByNumber() {
    let hue = Number(inputNumber.value);
    circleColor = `hsl(${hue},100%,50%)`
}

inputNumber.addEventListener("input", changeColorByNumber);







