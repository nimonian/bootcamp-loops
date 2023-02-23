# Image processing

## Installation

 1. Fork it
 1. Clone it
 1. Run `npm install` in the terminal
 1. Run `npm run dev` in the terminal and open the url displayed in your terminal

## What is it

The HTML canvas allows us to manipulate the individual pixels of an image.

The lines
```js
const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
const arr = imageData.data
```
obtain an array of pixels and saves it as `arr`. Each pixel takes up 4 positions in the array with its RGBA data. So the first four entries is the RGBA of the first pixel in the image, and so on.

By altering the data and writing back to the canvas we can mess about with the image.

## What next?

Read the `main.js` file. There's a lot going on - but pay extra attention to the `gray()` and `invert()` functions. Look at the loops. This should look familiar!

Have a look at `index.html` - can you see how the buttons have been added?

Try and follow the patterns in the project to add some new buttons to the page which apply different types of filters. Feel free to change the image being used. Can you create an Instagram-worthy filter?
