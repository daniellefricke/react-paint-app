# Social Tables Front End Apprentice Challenge
## Applicant: Danielle Fricke
danielle.fricke11@gmail.com | (Ph) 419.234.6823

##Installation
1. Fork repo (optional)
2. Clone repo
3. Run npm Installation
4. Run npm start - this will run the app in development mode
5. Open localhost:3000 to render locally

##What's working
1. All components are created as required in the challenge guidelines
2. Reset, Brush Color, and Eraser
3. Styling has been updated to closely resemble challenge mockup


##What's not working
A major part of this project was getting features of child components up several levels to be leveraged by other components. For example, when the color picker has a new color, the canvas needs to recognize that color when the brush is used. And when a new image is uploaded, the canvas needs to recognize that when the image stamp tool is used. Passing this up multiple levels is best suited for Redux due to it supporting global state versus manually pushing up props though React.

##Answers to ST questions
1. What aspect of your submission are you most proud of, and why?
  - I'm proud of getting much of the React portion of this project setup. I learned the basic of React at GA and was relatively easily able to setup components and navigate the structure of the application.
2. What would you work on if you had more time?  
  - REDUX! While I understand benefits of Redux, what it accomplishes, and some of its fundamentals principles, I would like to work more on writing it and its implementation.
3. Of all the resources (blog posts, tutorials, videos, mentors etc.) you referenced, what was most helpful for you?



##Citing
1. Color Picker - for implementing this feature, I leveraged W3School's color picker tutorial: https://www.w3schools.com/html/tryit.asp?filename=tryhtml_input_color
2. Image Uploader - for implementing this feature, I leveraged an example from CodePen: https://codepen.io/hartzis/pen/VvNGZP
