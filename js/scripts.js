const videoIndex = document.querySelector("#video-index")
const play = document.querySelector ("#play") 
const pause = document.querySelector ("#pause") 
const backward = document.querySelector ("#backward") 
const forward = document.querySelector ("#forward") 
const progress = document.querySelector ("#range-index")
play.addEventListener ('click', handlePlay)

function handlePlay (){
  videoIndex.play()
  play.hidden = true
  pause.hidden = false
}

pause.addEventListener ('click', handlePause)

function handlePause (){
  videoIndex.pause()
  play.hidden = false
  pause.hidden = true  
}

backward.addEventListener ('click', handleBackward)

function handleBackward (){
  videoIndex.currentTime -= 10
}

forward.addEventListener ('click', handleForward)

function handleForward (){
  videoIndex.currentTime += 10
}

videoIndex.addEventListener ('loadedmetadata', handleLoaded)

function handleLoaded () {
  progress.max = videoIndex.duration
}

videoIndex.addEventListener ('timeupdate', handleTimeUpdate)

function handleTimeUpdate () {
  progress.value = videoIndex.currentTime 
}

progress.addEventListener('input', handleSetInput)

function handleSetInput (){
  videoIndex.currentTime = progress.value
}