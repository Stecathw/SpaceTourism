# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

1 - Initialized project with react and sass and a brand new fresh app ready to be coded. Also, installed react router dom. 
Deleted all useless things bring by create-react-app process.

2 - Created folder for pages Home/Destination/Crew/Technology and implemented four navigations routes.
Created folder for components and created main Nav component.
Created main folder for Sass styling.

3 - Written html home page before applying first stylesheets with saas later and have some direct viewable feedback.

4 - Started sass setting up. Created a _globa-settings and _background-settings for convenience and ease of setting up general styles. 

5 - Written Nav component. 

6 - Making styles of Nav component.

7 - Written home page with styles

8 - Written destinations page with styles

9 - Written crew page with styles

10 - Written Technology page with styles

11 - Refactored Home page with useContext hook to manage state between tabs and page description/image. Helps to make break page into more components.
So now for each pages there will be anoter util folder with a Context.js and GetData?js file.

12 - While breaking apparts into more components, I've restyled components. Breaking apparts components + styles makes things easier to work on (litle by little, one by one) and I hope it will keep things more organised with a better architecture and moreover makes life easier while working with responsiveness later on my process. (even if I've already written some media queries, it's now more about rewritting things) => Its now possible to focus only on one components and its behavior.

13 - Came back on home page and worked mobile menu. I've installed styled-components, https://styled-components.com/docs/basics and implemented my mobile menu using https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/. By the way one of my favourite ressources when building frontend things.
Used this tutorial to make things faster and easier. I want to focus more on responsive stuff.


### Built with

- Sass
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

I've learned one more hook : useContext along with CreateContext and Provider Context. (Redux was a bit too much for this app)
As I've many times faced trouble when managing states while breaking aparts a page into components I need useContext to makes things easier but not to complex. 
So every pages were firstly written whithout useContext hook. It was a simple and efficient way to code each pages but not that scalable.
And then I decided I want break app into more components to better organise both the app and my work. I've refactored all my pages into components using this hook.

I've also learnt a lot about grid and flexbox, I guess I gained deeper understanding about them but I'm still not quite grasping it all yet... 

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.



### Continued development

UX side : scrolling and animations.

### Useful resources

- [Example resource 1](https://styled-components.com/docs/basics) - This helped me to implement mobile menu.
- [Example resource 2](https://css-tricks.com/snippets/css/complete-guide-grid/) - This is an amazing website to take reference from whether for CSS Grids and CSS flexbox layouts. And even more...


## Author

- Website - [William](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)


## Acknowledgments

I've started coding this project from a blank react project, no templates were used. I kept myself away from looking to Scrimba solution or any other solutions that could be found online. 
Therefore this is truly my own solution and many things are discutable and prompt to errors as I consider myself as a beginner.
