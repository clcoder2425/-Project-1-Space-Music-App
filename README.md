# Mars Exploration app


## Description

Space exploration is always exciting and the latest discovery that has been done in Mars via curiosity are just mind boggling.  
That is why Mars Exploration app is unique and fun.

- With this project with provide Mars explration's lovers with a platform where to search the latest pictures from curiosity while enjoying a relaxing music.

## Table of Contents 

- [Webpage-Preview](#Webpage Preview)
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

## Usage

1. Open the app link on a browser.
2. Enter a date on the search box.
3. Sit and relax with a great music selection.

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```
## Skills Improved
:smiling_face_with_three_hearts:

## Technologies

## License
[License](#MIT)
## Authors

## Credits
Colaborators:
Green
CJ
Carmen

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