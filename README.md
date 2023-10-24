# Mars Exploration app


## Description

Space exploration is always exciting and the latest discovery that has been done in Mars via curiosity are just mind boggling.  
That is why Mars Exploration app is unique and fun.

- With this project with provide Mars explration's lovers with a platform where to search the latest pictures from curiosity while enjoying a relaxing music.

## Table of Contents 

- [Webpage-Preview](#Webpage-Preview)
- [Code-Snippet](#Code-Snippet)
- [Custom-Features](#Custom-Features)
- [Usage](#Usage)
- [Skill-Improved](#Skill-Improved)
- [Technologies](#Technologies)
- [Authors](#Authors)
- [Credits](#credits)


## Webpage Preview

No installation required. Just an uptodate browser.

## Code-Snippet
Java script
#Funtion to Handle Form

```
var formSubmitHandler = function (event) {   // when clicked, this is run
  event.preventDefault();
  var usersSearchInput = searchFieldInput.value    // sets a variable from the info typed in the field
console.log(usersSearchInput)
getSearch(usersSearchInput) 
}
```
#Function to handle search

```
vvar getSearch = function (usersSearchInput) {
// Useable Api Urls
var apiUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=' + usersSearchInput +  '&z&api_key=0kRnAVYNc2gsCR3nOYw7LjB2uBvKsB75RLIkT25q' 
console.log(usersSearchInput)
}
```
#Function to display photos

```
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
```


## Custome-Features
- 🌕 Search box with format of year-month-day.
- 🌕 Music player with mute button, play/pause button, restart music, volume up/down, 
- 🌕 Display curiosity pictures for the day input.


## Usage
The link of the webpage is: 
1. Load the webpage.
2. Click on the search box
3. Enter your search criteria in the format of yyy-m-dd.
4. Sit and relax and scroll through your favorite Mars's curiosity photos.

Webpage use example:



    ```md
    ![webpage-preview](./assets/images/mars-exploration-preview.JPG)
    ```
## Skills Improved
- 🌕CSS styling: bootstrap, bulma
- 🌕 Web APIs Local Storage
- 🌕 Event Listener
- 🌕 Setting Attributes
- 🌕 Creating Iframes

## Technologies
 -[HTML](#HTML)
 -[CSS](#CSS)
 -[JavaScript](#JavaScript)
## License
[License](#MIT)
## Authors
- [Brian-King](#Brian King ) 

- [CarrTe-Alexander-(CJ)](#CarrTe Alexander (CJ))
- [Carmen-Jimenez](#Carmen Jimenez https://github.com/clcoder2425/mars-exploration-app.git)

## Credits


List your collaborators, if any, with links to their GitHub profiles.

nasa api link
youtube api

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.



---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.