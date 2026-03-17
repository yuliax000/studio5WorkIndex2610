// find elements to  use
const introDialog = document.getElementById("intro-dialog");
const dialogCloseButton = document.getElementById("dialog-close-button");
const playButton = document.getElementById("play-button");



// intro dialog setup
introDialog.showModal();
dialogCloseButton.addEventListener("click", closeDialog);
document.body.style.backgroundColor = "white";

function closeDialog() {
  introDialog.close();
  Tone.start();
}

// tone synth init
const synth = new Tone.Synth().toDestination();

// play sound with tone
function playNote() {
  synth.triggerAttackRelease("C4", "8n");

}

// playButton.addEventListener("click", playNote);

function startNote() {
  synth.triggerAttack("D4");
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";

}

function endNote() {
  synth.triggerRelease();
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
}

playButton.addEventListener("mousedown", startNote);
playButton.addEventListener("mouseup", endNote);

