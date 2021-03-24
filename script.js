// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.1; //between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var strikes = 3;
var time = 5;
var timer;

function startGame() {
  //initialize game variables
  // random pattern generation
  for (let i = 0; i < 8; i++){
    pattern[i] = Math.ceil(Math.random()*5);
  }
  progress = 0;
  strikes = 3;
  gamePlaying = true;
  clueHoldTime = 1000;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  resetTime();
  gamePlaying = false;
  // swap back the Start and Stop buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  if (!gamePlaying)
    return;
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  // timer countdown per second
  setTimeout(function(){clearInterval(timer);timer = setInterval(updateTime, 1000)}, (clueHoldTime+cluePauseTime)*(progress+1));
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

//decrement timer
function updateTime(){
  if (!gamePlaying){
    resetTime();
    return;
  }
  var t = "Timer: " + time;
  document.getElementById("timer").innerHTML = t;
  if (time <= 0) {
    alertStrikes();
    resetTime();
    playClueSequence();
    return;
  }
  time -= 1;
}

//stop timer and reset to 5 sec
function resetTime(){
  clearInterval(timer);
  document.getElementById("timer").innerHTML = "Timer: ";
  time = 5;
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  // add game logic here
  if (btn != pattern[guessCounter]) { //wrong guess
    alertStrikes();
    resetTime();
    playClueSequence();
  }
  else if (guessCounter != progress) //next guess
    guessCounter++;
  else if (progress == pattern.length - 1) //you win
    winGame();
  else { //play next sequence
    progress++;
    clueHoldTime -= 100; // speed it up
    resetTime();
    playClueSequence();
  }
}

function alertStrikes() {
  strikes--;
  if (strikes <= 0)
    loseGame();
  else
    alert("Strikes left: " + strikes);
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 523.3
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone(btn)
  },len)
}
function startTone(btn){
  document.getElementById("note"+btn).play();
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(btn){
    var note = document.getElementById("note"+btn);
    note.pause();
    note.currentTime = 0;
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
