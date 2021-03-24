# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Dylan Zhang**

Time spent: **2.5** hours spent in total

Link to project: https://glitch.com/edit/#!/light-sound-memory

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Timer display shows the user how much time they have left

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](your-link-here)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

geeksforgeeks.org

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

A challenge I encountered in this project was figuring out how to use HTML, JavaScript, and CSS together to implement features most effectively. An example of this is when I tried to figure out how to display images on top of the buttons when they were pressed. I initially thought of using DOM methods in JavaScript and utilize the 'hidden' class name on the images. However, this would be very tedious as I would need to write functions to add and remove the 'hidden' class name, and call these functions in HTML as the buttons were pressed and released. To implement this more cleanly, I figured I could use CSS as it would allow me to directly set the properties for all the images depending on their respective buttons' states. After doing a little research into CSS selectors, I was able to use CSS to make the images work properly in just a few lines of code. Overall, I tried to familiarize myself with the variety of features that each of HTML, JavaScript, and CSS offer so that I could implement features cleanly.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I'd like to get a better understanding of what else is possible through web development. The combination of HTML, JavaScript, and CSS offers a lot of flexibility and it seems like there are a lot of ways to be creative with these languages. So, I am very curious about what else I could create through web development, and what I would need to learn to do so. Also, I'd like to know more about the different frameworks and libraries that are used and what they offer, such as React, Angular, jQuery, etc.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

I would spend the time fixing some of the issues with the current game, as well as adding new features. For example, I would make it so that the user is blocked from pressing any of the buttons as the sequence is playing out. This way the user would not be able to potentially cause the next hint to play as the current one is playing. I would also add new features, such as a score system. This would improve the experience of playing the game, as instead of simply receiving a "You win!" message, the player would be rewarded with points (if they did well) and would be able to see their progress.



## License

    Copyright Dylan Zhang

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
