/**
 * Given an image array, remove all the red colouring and return the new image array,
 * e.g. ([0.4, 0.8, 0.7, 0.25, 0.2, 0.9, 0.14, 0.5]) => [0, 0.8, 0.7, 0.25, 0, 0.9, 0.14, 0.5]
 */
function stripRed(img) {
  // code here  
}

/**
 * Very similar to strip red, let's remove all green from the image
 */
function stripGreen(img) {
  // code here
}

/**
 * Very similar to strip red and green, let's remove all blue from the image!
 */
function stripBlue(img) {
  // code here
}

/**
 * Now, let's invert all the colours!
 * If the R value of a pixel is 0.2, make it 1 - 0.2 = 0.8
 * If the G value is 0.75, make it 1 - 0.75 = 0.25
 * Do the same for blue (you don't need to change the alpha)
 */
function invert(img) {
  // code here
}

/**
 * Given an image array and an alpha multiplier, multiply the alpha value of each pixel by the multiplier,
 * e.g. ([0.4, 0.8, 0.7, 0.25, 0.2, 0.9, 0.14, 0.5], 2) => [0.4, 0.8, 0.7, 0.5, 0.2, 0.9, 0.14, 1]
 * (notice that each alpha value has been multiplied by 2)
 */
function adjustAlpha(img, multiplier) {
  // code here
}

/**
 * Final challenge: grayscale!
 * For each pixel, calculate the average of the RGB value and replace R, G, and B for that pixel with this average.
 * e.g. for a single pixel: ([0.4, 0.8, 0.7, 0.25]) => [0.633, 0.633, 0.633, 0.25]
 * (Notice that the R, G, B values have been replaced with (0.4 + 0.8 + 0.7) / 3 = 0.633
 * but the alpha value is not changed.)
 */
function grayScale(img) {
  // code here
}
