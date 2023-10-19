
console.log(searchFieldEl)


var searchFieldEl = document.querySelector('#searchField');
var searchFieldInput = document.querySelector('#searchFieldInput');
var displayEl = document.querySelector("#display")


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

fetch(apiUrl)                                         // FETCH
.then(function (response) {
  if (response.ok) {
    console.log(response);
    response.json().then(function (data) {
      console.log(data);

      if (data.photos.length === 0) {
        displayEl.textContent = 'No Photos found. Please select another date';
        return;
      }


      

      displayEl.innerHTML=''
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


searchFieldEl.addEventListener('submit', formSubmitHandler);




// var player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     height: '390',
//     width: '640',
//     videoId: '8jPL_5BoKuA',
//     playerVars: {
//       'playsinline': 1
//     },
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }

 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');
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
   });
 }
 


 function stopVideo() {
   player.stopVideo();
 }

function play(){
player.seekTo(0,false)    //sets the player to 0 second mark
player.setVolume(2)
player.playVideo()
}

function muteMusic(){
player.mute()
}



muteButton.addEventListener('click', muteMusic);


