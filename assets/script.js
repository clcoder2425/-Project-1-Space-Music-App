// api_key=0kRnAVYNc2gsCR3nOYw7LjB2uBvKsB75RLIkT25q
var searchFieldEl = document.querySelector('#searchField');
var searchFieldInput = document.querySelector('#searchFieldInput');
var displayEl = document.querySelector("#display")
var muteButton= document.querySelector('#muteBtn')
var playPauseButton= document.querySelector('#playPause')
var restartMusicButton= document.querySelector('#restartButton')
var volumeUpBtn= document.querySelector('#volumeUp')
var volumeDwnBtn= document.querySelector('#volumeDown')

var formSubmitHandler = function (event) {             // when clicked, this is run
  event.preventDefault();
  var usersSearchInput = searchFieldInput.value       // sets a variable from the info typed in the field
console.log(usersSearchInput)
getSearch(usersSearchInput)                         // runs the search function with users search input
play()
};

var getSearch = function (usersSearchInput) {
// Useable Api Urls
var apiUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=' + usersSearchInput +  '&z&api_key=0kRnAVYNc2gsCR3nOYw7LjB2uBvKsB75RLIkT25q' 
console.log(usersSearchInput)

function displayPhotos(imgURL){
  if(cameraName == "Mast Camera" ){   //  prevents Mast camera photos from loading, because they dont look very good
    return;
  }else{
  var img = document.createElement("img");
  img.src = imgURL;
  img.title = cameraName;
  // document.body.appendChild(img);        //  adds it to the <body> tag
  displayEl.appendChild(img);                    
}
}

fetch(apiUrl)                                         // FETCH Request
.then(function (response) {
  if (response.ok) {
    console.log(response);
    response.json().then(function (data) {
      console.log(data);
      if (data.photos.length === 0) {
        displayEl.textContent = 'No Photos found. Please select another date';
        return;
      }

  displayEl.innerHTML=''                                        // Clears Images when a search is made to prepare for a new image.
  for (var i = 0; i < data.photos.length; i++) {          // for the length of the string returned, go through each one
        imgURL=(data.photos[i].img_src);                       // set the image source to imgURL
        cameraName=(data.photos[i].camera.full_name);          // Set the name of the Camera that took the photo to cameraName
        displayPhotos(imgURL);
  }});
  } else {
    alert('Error: ' + response.statusText);
  }
})
.catch(function (error) {
  alert('Unable to connect to Library');
});
};

//----------------------------------------------------------------------------------------------------
 var tag = document.createElement('script'); //  loads the IFrame Player API code asynchronously.
 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 var player;
 function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '0',
     width: '0',
     videoId: 'tI6jkImHqRg',                // video ID
     playerVars: {
       'playsinline': 1,
     },
     events: {
     }
   })};
 

// Youtube functions
 function stopVideo() {
   player.stopVideo();
 };

function play(){
  player.seekTo(1,true)    //sets the player to 0 second mark
player.setVolume(2)
player.playVideo()
};

function muteMusic(){
if (player.isMuted()){
  muteButton.innerHTML="&#128360"
  player.unMute()
}else{player.mute()
muteButton.innerHTML="&#128361"
}};

function playPause(){
if (player.getPlayerState()!=1){          // if player isnt playing, play. Otherwise pause video
  player.playVideo()
  playPauseButton.innerHTML="&#9208"
}else{
    player.pauseVideo()
 playPauseButton.innerHTML="&#9205"
}};

function restartMusic(){
  player.seekTo(1,true)    //sets the player to 0 second mark
  player.setVolume(2)
  player.playVideo()
};

function volumeUp(){
  var volume = player.getVolume()
  player.setVolume(volume+1)
};

function volumeDown(){
  var volume = player.getVolume()
  player.setVolume(volume-1)
};



volumeUpBtn.addEventListener('click',volumeUp );                        //Event Listeners
volumeDwnBtn.addEventListener('click', volumeDown);
restartMusicButton.addEventListener('click', restartMusic);
playPauseButton.addEventListener('click', playPause);                 // when playpauseButton is clicked, runs playPause Function
muteButton.addEventListener('click', muteMusic);                    // Mutes/unmutes when Mute button is clicked
searchFieldEl.addEventListener('submit', formSubmitHandler);

function play2() {
  var audio = document.getElementById("audio");
  audio.play();
}